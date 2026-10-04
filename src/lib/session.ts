import { ChapterId, ExamHistoryItem, ExamMode, Question, QuestionDifficulty, ChapterStatsItem } from '../types/quiz';
import { ALL_QUESTIONS } from '../data/bank';
import { materializeQuestion } from './examBuilder';

export interface SessionConfig {
  examId?: number;
  chapterIds?: ChapterId[];
  difficulty?: QuestionDifficulty | 'all';
  questionCount?: number | 'all';
}

export interface Session {
  version: 2;
  sessionId: string;
  mode: ExamMode;
  config: SessionConfig;
  title: string;
  durationSeconds: number | null; // null với practice
  items: { id: number; optionOrder: number[] }[];
  answers: Record<number, number>; // questionId -> optionIndex (sau khi xáo)
  flagged: number[];
  currentIndex: number;
  startedAt: number; // timestamp
  pausedAt: number | null;
  pausedTotalMs: number;
  warned10: boolean;
  status: 'in_progress' | 'submitted';
  submittedAt?: number;
}

const SESSION_KEY = 'pl_session_v2';
const HISTORY_KEY = 'pl_history_v2';

export function generateUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Xóa các key rác cũ lúc khởi động (pl_exam_*_answers)
 */
export function cleanupOldStorageKeys(): void {
  if (typeof window === 'undefined') return;
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('pl_exam_') || key === 'pl_answers' || key === 'pl_saved_exam')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch {
    // Bỏ qua lỗi storage
  }
}

/**
 * Đọc phiên hiện tại từ localStorage
 */
export function loadSession(): Session | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 2 && Array.isArray(parsed.items)) {
      return parsed as Session;
    }
  } catch {
    // Bỏ qua lỗi parse
  }
  return null;
}

/**
 * Lưu phiên vào localStorage
 */
export function saveSession(session: Session): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Bỏ qua lỗi quota
  }
}

/**
 * Xoá phiên hiện tại
 */
export function clearSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // Bỏ qua lỗi
  }
}

/**
 * Tính thời gian còn lại (đối với exam) hoặc thời gian đã trôi qua (đối với practice)
 * elapsed = (pausedAt ?? now) − startedAt − pausedTotalMs
 */
export function calculateTimeRemaining(session: Session, now = Date.now()): {
  timeLeftSeconds: number;
  timeSpentSeconds: number;
  isExpired: boolean;
} {
  const currentOrPauseTime = session.pausedAt ?? now;
  const elapsedMs = Math.max(0, currentOrPauseTime - session.startedAt - session.pausedTotalMs);
  const timeSpentSeconds = Math.floor(elapsedMs / 1000);

  if (session.durationSeconds === null) {
    // Chế độ practice: không có đếm ngược, chỉ tính thời gian đã làm
    return {
      timeLeftSeconds: 0,
      timeSpentSeconds,
      isExpired: false,
    };
  }

  const timeLeftSeconds = Math.max(0, session.durationSeconds - timeSpentSeconds);
  const isExpired = timeLeftSeconds <= 0;

  return {
    timeLeftSeconds,
    timeSpentSeconds,
    isExpired,
  };
}

/**
 * Khôi phục mảng Question[] đầy đủ theo đúng thứ tự câu và thứ tự options đã lưu trong session.items
 */
export function reconstituteQuestions(items: { id: number; optionOrder: number[] }[]): Question[] {
  const questionMap = new Map<number, Question>();
  ALL_QUESTIONS.forEach((q) => questionMap.set(q.id, q));

  const result: Question[] = [];
  for (const item of items) {
    const original = questionMap.get(item.id);
    if (original) {
      result.push(materializeQuestion(original, item.optionOrder));
    }
  }
  return result;
}

// ==========================================
// QUẢN LÝ LỊCH SỬ LÀM BÀI (pl_history_v2)
// ==========================================

export function loadHistory(): ExamHistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed as ExamHistoryItem[];
    }
  } catch {
    // Bỏ qua lỗi
  }
  return [];
}

export function saveHistoryItem(item: ExamHistoryItem): void {
  if (typeof window === 'undefined') return;
  try {
    const current = loadHistory();
    // Giữ tối đa 50 lượt gần nhất, lượt mới nhất đưa lên đầu
    const updated = [item, ...current.filter((h) => h.id !== item.id)].slice(0, 50);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch {
    // Bỏ qua lỗi
  }
}

export function deleteHistoryItem(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = loadHistory();
    const updated = current.filter((h) => h.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch {
    // Bỏ qua lỗi
  }
}

export function clearAllHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch {
    // Bỏ qua lỗi
  }
}

/**
 * Tính tổng hợp tỷ lệ sai theo chương qua tất cả các lượt làm bài trong lịch sử
 */
export function getOverallChapterStats(history: ExamHistoryItem[]): {
  chapterId: ChapterId;
  total: number;
  wrong: number;
  correct: number;
  wrongRate: number; // 0 - 100%
}[] {
  const map: Record<ChapterId, { total: number; wrong: number; correct: number }> = {
    1: { total: 0, wrong: 0, correct: 0 },
    3: { total: 0, wrong: 0, correct: 0 },
    4: { total: 0, wrong: 0, correct: 0 },
    5: { total: 0, wrong: 0, correct: 0 },
    6: { total: 0, wrong: 0, correct: 0 },
    7: { total: 0, wrong: 0, correct: 0 },
    9: { total: 0, wrong: 0, correct: 0 },
  };

  for (const item of history) {
    if (!item.chapterStats) continue;
    for (const chIdStr of Object.keys(item.chapterStats)) {
      const chId = Number(chIdStr) as ChapterId;
      if (map[chId]) {
        const cs = item.chapterStats[chId];
        map[chId].total += cs.total;
        map[chId].wrong += cs.wrong + (cs.omitted || 0);
        map[chId].correct += cs.correct;
      }
    }
  }

  const result = (Object.keys(map) as unknown as ChapterId[]).map((chId) => {
    const data = map[chId];
    const wrongRate = data.total > 0 ? Math.round((data.wrong / data.total) * 100) : 0;
    return {
      chapterId: chId,
      total: data.total,
      wrong: data.wrong,
      correct: data.correct,
      wrongRate,
    };
  });

  // Sắp xếp chương có tỷ lệ sai nhiều nhất lên đầu
  result.sort((a, b) => b.wrongRate - a.wrongRate);
  return result;
}

/**
 * Tính chi tiết thống kê chương cho một bài thi vừa hoàn thành
 */
export function calculateExamChapterStats(
  questions: Question[],
  answers: Record<number, number>
): Record<ChapterId, ChapterStatsItem> {
  const result: Record<ChapterId, ChapterStatsItem> = {
    1: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    3: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    4: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    5: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    6: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    7: { total: 0, correct: 0, wrong: 0, omitted: 0 },
    9: { total: 0, correct: 0, wrong: 0, omitted: 0 },
  };

  for (const q of questions) {
    const ch = result[q.chapterId];
    if (!ch) continue;
    ch.total++;
    const userChoice = answers[q.id];
    if (userChoice === undefined) {
      ch.omitted++;
    } else if (userChoice === q.correctAnswer) {
      ch.correct++;
    } else {
      ch.wrong++;
    }
  }

  return result;
}
