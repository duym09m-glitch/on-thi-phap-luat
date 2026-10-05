import { ExamQuestion, ExamResult, ExamSession, StoredExamResult } from '../types';
import { getQuestionById } from '../bank';

const STORAGE_PREFIX = 'pldc:';
const KEY_HISTORY = `${STORAGE_PREFIX}history`;
const KEY_ACTIVE_SESSION = `${STORAGE_PREFIX}active_session`;
const SESSION_COOKIE_NAME = 'pldc_session';

/**
 * Initializes the browser session lifecycle:
 * If the session cookie is missing (meaning browser was closed and reopened),
 * wipes all pldc: data (history and ongoing quiz), but keeps pldc_theme.
 * Then sets the session cookie (expires on browser exit).
 */
export function initSessionLifecycle(): void {
  try {
    const hasSessionCookie = document.cookie
      .split(';')
      .some((item) => item.trim().startsWith(`${SESSION_COOKIE_NAME}=`));

    if (!hasSessionCookie) {
      // Browser was closed and reopened: purge pldc storage
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_PREFIX)) {
          keysToRemove.push(key);
        }
      }
      for (const k of keysToRemove) {
        localStorage.removeItem(k);
      }

      // Re-establish session cookie without Expires / Max-Age
      document.cookie = `${SESSION_COOKIE_NAME}=1; path=/; SameSite=Lax`;
    }
  } catch (e) {
    console.warn('[Storage] Cookie / LocalStorage lifecycle error:', e);
  }
}

/**
 * Saves a completed exam result to history in lightweight format
 */
export function saveHistoryResult(result: ExamResult): void {
  try {
    const history = getStoredHistory();

    const storedItem: StoredExamResult = {
      id: result.id,
      mode: result.mode,
      title: result.title,
      chapters: result.chapters,
      presetId: result.presetId,
      date: result.date,
      timeSpentSeconds: result.timeSpentSeconds,
      totalQuestions: result.totalQuestions,
      correctCount: result.correctCount,
      score: result.score,
      questionItems: result.questions.map((q, idx) => ({
        questionId: q.questionId,
        optionOrder: q.optionOrder,
        selectedAnswer: result.userAnswers[idx] !== undefined ? result.userAnswers[idx] : null,
      })),
    };

    // Newest first
    const updated = [storedItem, ...history.filter((h) => h.id !== result.id)];
    localStorage.setItem(KEY_HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.warn('[Storage] Error saving history result:', e);
  }
}

/**
 * Returns raw stored history array
 */
export function getStoredHistory(): StoredExamResult[] {
  try {
    const raw = localStorage.getItem(KEY_HISTORY);
    if (!raw) return [];
    return JSON.parse(raw) as StoredExamResult[];
  } catch (e) {
    console.warn('[Storage] Error getting history:', e);
    return [];
  }
}

/**
 * Deletes a single history record by ID
 */
export function deleteHistoryItem(id: string): void {
  try {
    const history = getStoredHistory();
    const updated = history.filter((item) => item.id !== id);
    localStorage.setItem(KEY_HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.warn('[Storage] Error deleting history item:', e);
  }
}

/**
 * Clears all history records
 */
export function clearAllHistory(): void {
  try {
    localStorage.removeItem(KEY_HISTORY);
  } catch (e) {
    console.warn('[Storage] Error clearing history:', e);
  }
}

/**
 * Reconstructs a full ExamResult object from lightweight StoredExamResult
 * using question data from the bank.
 */
export function reconstructExamResult(stored: StoredExamResult): ExamResult | null {
  const reconstructedQuestions: ExamQuestion[] = [];
  const userAnswers: Record<number, number> = {};

  for (let idx = 0; idx < stored.questionItems.length; idx++) {
    const item = stored.questionItems[idx];
    const bankQ = getQuestionById(item.questionId);

    if (item.selectedAnswer !== null && item.selectedAnswer !== undefined) {
      userAnswers[idx] = item.selectedAnswer;
    }

    if (bankQ) {
      const optionOrder = item.optionOrder;
      const shuffledOptions = optionOrder.map((oIdx) => bankQ.options[oIdx] || `Phương án ${oIdx + 1}`);
      const correctOptionIndex = optionOrder.indexOf(bankQ.answer);

      reconstructedQuestions.push({
        questionId: bankQ.id,
        chapter: bankQ.chapter,
        number: bankQ.number,
        level: bankQ.level,
        section: bankQ.section,
        text: bankQ.text,
        options: shuffledOptions,
        correctOptionIndex: correctOptionIndex >= 0 ? correctOptionIndex : 0,
        explanation: bankQ.explanation,
        originalAnswerIndex: bankQ.answer,
        optionOrder,
      });
    } else {
      // Fallback in case question ID is not found in bank
      reconstructedQuestions.push({
        questionId: item.questionId,
        chapter: 0,
        number: idx + 1,
        level: 'Trung bình',
        section: 'Câu hỏi đã lưu',
        text: `[Câu hỏi mã ${item.questionId} hiện không còn trong ngân hàng câu hỏi]`,
        options: ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'],
        correctOptionIndex: 0,
        explanation: 'Dữ liệu câu hỏi gốc không tìm thấy trong ngân hàng.',
        originalAnswerIndex: 0,
        optionOrder: item.optionOrder || [0, 1, 2, 3],
      });
    }
  }

  return {
    id: stored.id,
    mode: stored.mode,
    title: stored.title,
    chapters: stored.chapters,
    presetId: stored.presetId,
    date: stored.date,
    timeSpentSeconds: stored.timeSpentSeconds,
    totalQuestions: stored.totalQuestions,
    correctCount: stored.correctCount,
    score: stored.score,
    questions: reconstructedQuestions,
    userAnswers,
  };
}

/**
 * Saves or updates in-progress exam session
 */
export function saveActiveSession(session: ExamSession | null): void {
  try {
    if (!session) {
      localStorage.removeItem(KEY_ACTIVE_SESSION);
    } else {
      localStorage.setItem(KEY_ACTIVE_SESSION, JSON.stringify(session));
    }
  } catch (e) {
    console.warn('[Storage] Error saving active session:', e);
  }
}

/**
 * Gets in-progress exam session if any
 */
export function getActiveSession(): ExamSession | null {
  try {
    const raw = localStorage.getItem(KEY_ACTIVE_SESSION);
    if (!raw) return null;
    return JSON.parse(raw) as ExamSession;
  } catch (e) {
    console.warn('[Storage] Error getting active session:', e);
    return null;
  }
}

/**
 * Clears in-progress exam session
 */
export function clearActiveSession(): void {
  try {
    localStorage.removeItem(KEY_ACTIVE_SESSION);
  } catch (e) {
    console.warn('[Storage] Error clearing active session:', e);
  }
}

/**
 * Retrieves question IDs from the most recent exam matching the selected mode/preset/chapters
 * to prioritize unused questions.
 */
export function getRecentQuestionIds(chapters: number[], presetId?: string): Set<string> {
  const result = new Set<string>();
  try {
    const history = getStoredHistory();
    if (history.length === 0) return result;

    // Find the most recent matching exam
    const matching = history.find((h) => {
      if (presetId && h.presetId === presetId) return true;
      if (!presetId && h.chapters.length === chapters.length && h.chapters.every((c) => chapters.includes(c))) {
        return true;
      }
      return false;
    });

    if (matching) {
      for (const item of matching.questionItems) {
        result.add(item.questionId);
      }
    }
  } catch (e) {
    console.warn('[Storage] Error retrieving recent question IDs:', e);
  }
  return result;
}
