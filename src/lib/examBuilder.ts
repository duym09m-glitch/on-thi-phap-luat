import { ChapterId, Question, QuestionDifficulty, ExamMode } from '../types/quiz';
import { BANK, ALL_QUESTIONS, needsLockedOrder } from '../data/bank';
import { shuffle } from './shuffle';

export interface DifficultyBlueprint {
  'dễ': number;
  'trung bình': number;
  'vận dụng': number;
}

export const EXAM_DIFFICULTY_BLUEPRINTS: Record<number | string, DifficultyBlueprint> = {
  1: { 'dễ': 45, 'trung bình': 40, 'vận dụng': 15 }, // Đề 1 (Chuẩn)
  2: { 'dễ': 35, 'trung bình': 45, 'vận dụng': 20 }, // Đề 2 (Trọng tâm)
  3: { 'dễ': 25, 'trung bình': 40, 'vận dụng': 35 }, // Đề 3 (Nâng cao A/A+)
  4: { 'dễ': 25, 'trung bình': 35, 'vận dụng': 40 }, // Đề 4 (Tình huống)
  5: { 'dễ': 35, 'trung bình': 40, 'vận dụng': 25 }, // Đề 5 (Tổng hợp)
  'random': { 'dễ': 35, 'trung bình': 45, 'vận dụng': 20 },
  'chapter': { 'dễ': 30, 'trung bình': 45, 'vận dụng': 25 },
  'practice': { 'dễ': 35, 'trung bình': 45, 'vận dụng': 20 },
};

export const DEFAULT_CHAPTER_WEIGHTS: Record<ChapterId, number> = {
  1: 18,
  3: 18,
  4: 18,
  5: 14,
  6: 14,
  7: 9,
  9: 9,
};

/**
 * Phân chia hạn ngạch số nguyên bằng phương pháp Phần dư lớn nhất (Hare-Niemeyer / Largest Remainder)
 * Đảm bảo tổng kết quả đúng bằng totalTarget.
 */
export function largestRemainderMethod<K extends string | number>(
  totalTarget: number,
  items: { key: K; weight: number }[]
): Map<K, number> {
  const result = new Map<K, number>();
  if (items.length === 0 || totalTarget <= 0) {
    items.forEach((item) => result.set(item.key, 0));
    return result;
  }

  const sumWeights = items.reduce((sum, item) => sum + Math.max(0, item.weight), 0);
  if (sumWeights === 0) {
    // Chia đều nếu không có trọng số
    const base = Math.floor(totalTarget / items.length);
    let remainder = totalTarget % items.length;
    items.forEach((item) => {
      result.set(item.key, base + (remainder > 0 ? 1 : 0));
      if (remainder > 0) remainder--;
    });
    return result;
  }

  const withRemainder: { key: K; base: number; remainder: number; originalIdx: number }[] = [];
  let allocated = 0;

  items.forEach((item, idx) => {
    const rawQuota = (totalTarget * Math.max(0, item.weight)) / sumWeights;
    const base = Math.floor(rawQuota);
    allocated += base;
    withRemainder.push({
      key: item.key,
      base,
      remainder: rawQuota - base,
      originalIdx: idx,
    });
  });

  // Sắp xếp theo phần dư giảm dần
  withRemainder.sort((a, b) => b.remainder - a.remainder);

  let leftToDistribute = totalTarget - allocated;
  for (let i = 0; i < withRemainder.length && leftToDistribute > 0; i++, leftToDistribute--) {
    withRemainder[i].base += 1;
  }

  withRemainder.forEach((item) => {
    result.set(item.key, item.base);
  });

  return result;
}

/**
 * Quản lý lịch sử câu hỏi xuất hiện ở 2 lượt thi gần nhất (lưu localStorage key pl_seen_v2)
 */
const SEEN_KEY = 'pl_seen_v2';

export function getRecentlySeenIds(): Set<number> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    // parsed là mảng 2 lượt gần nhất: number[][]
    if (Array.isArray(parsed)) {
      const flat = parsed.slice(-2).flat();
      return new Set(flat);
    }
  } catch {
    // Bỏ qua lỗi storage
  }
  return new Set();
}

export function recordSeenExamRun(questionIds: number[]): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    let runs: number[][] = [];
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          runs = parsed;
        }
      } catch {
        runs = [];
      }
    }
    runs.push(questionIds);
    // Chỉ giữ tối đa 5 lượt gần nhất
    const trimmed = runs.slice(-5);
    localStorage.setItem(SEEN_KEY, JSON.stringify(trimmed));
  } catch {
    // Bỏ qua lỗi storage
  }
}

/**
 * Tạo câu hỏi hiển thị sau khi đã xáo phương án
 * options: xáo theo optionOrder
 * correctAnswer: vị trí mới trong mảng đã xáo
 */
export function materializeQuestion(bankQuestion: Question, optionOrder: number[]): Question {
  const newOptions: [string, string, string, string] = [
    bankQuestion.options[optionOrder[0]],
    bankQuestion.options[optionOrder[1]],
    bankQuestion.options[optionOrder[2]],
    bankQuestion.options[optionOrder[3]],
  ];

  const newCorrectAnswer = optionOrder.indexOf(bankQuestion.correctAnswer) as 0 | 1 | 2 | 3;

  return {
    ...bankQuestion,
    options: newOptions,
    correctAnswer: newCorrectAnswer >= 0 ? newCorrectAnswer : bankQuestion.correctAnswer,
  };
}

export interface BuildExamParams {
  mode: ExamMode;
  examId?: number;
  chapterIds?: ChapterId[];
  difficultyFilter?: QuestionDifficulty | 'all';
  questionCount?: number | 'all';
}

export interface BuildExamResult {
  questions: Question[];
  items: { id: number; optionOrder: number[] }[];
  durationSeconds: number | null;
  notice?: string;
  totalQuestions: number;
}

/**
 * Trả về danh sách độ khó liền kề để mượn khi thiếu câu
 */
function getAdjacentDifficulties(diff: QuestionDifficulty): QuestionDifficulty[] {
  if (diff === 'dễ') return ['trung bình', 'vận dụng'];
  if (diff === 'vận dụng') return ['trung bình', 'dễ'];
  return ['dễ', 'vận dụng'];
}

/**
 * Bộ dựng đề thi chuẩn 100 câu / 90 phút hoặc theo cấu hình
 */
export function buildExam(params: BuildExamParams): BuildExamResult {
  const { mode, examId = 1, chapterIds, difficultyFilter, questionCount } = params;

  // 1. Xác định các chương tham gia
  let selectedChapters: ChapterId[] = [1, 3, 4, 5, 6, 7, 9];
  if (mode === 'exam-chapter' && chapterIds && chapterIds.length > 0) {
    selectedChapters = chapterIds;
  } else if (mode === 'practice' && chapterIds && chapterIds.length > 0) {
    selectedChapters = chapterIds;
  }

  // 2. Lấy toàn bộ câu hỏi khả dụng từ các chương được chọn
  const candidateMap: Record<ChapterId, Record<QuestionDifficulty, Question[]>> = {
    1: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    3: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    4: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    5: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    6: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    7: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
    9: { 'dễ': [], 'trung bình': [], 'vận dụng': [] },
  };

  let totalAvailableInSelected = 0;
  for (const chId of selectedChapters) {
    const chQuestions = BANK[chId] || [];
    for (const q of chQuestions) {
      if (mode === 'practice' && difficultyFilter && difficultyFilter !== 'all') {
        if (q.difficulty !== difficultyFilter) continue;
      }
      const diff = q.difficulty || 'trung bình';
      candidateMap[chId][diff].push(q);
      totalAvailableInSelected++;
    }
  }

  // 3. Xác định số câu mục tiêu
  let targetTotal = 100;
  if (mode === 'practice') {
    if (questionCount === 'all') {
      targetTotal = totalAvailableInSelected;
    } else if (typeof questionCount === 'number') {
      targetTotal = Math.min(questionCount, totalAvailableInSelected);
    } else {
      targetTotal = Math.min(20, totalAvailableInSelected);
    }
  } else {
    // Các chế độ thi: cố gắng đạt 100, nếu ngân hàng chưa đủ thì lấy tối đa hiện có
    targetTotal = Math.min(100, totalAvailableInSelected);
  }

  let notice: string | undefined;
  if (mode !== 'practice' && targetTotal < 100) {
    const chNotice = selectedChapters.map((c) => `Chương ${c}: ${(BANK[c] || []).length} câu`).join(', ');
    notice = `Ngân hàng hiện có ${targetTotal} câu (${chNotice}).`;
  }

  // 4. Xác định Blueprint độ khó
  let diffBlueprint: DifficultyBlueprint = EXAM_DIFFICULTY_BLUEPRINTS[1];
  if (mode === 'exam-set') {
    diffBlueprint = EXAM_DIFFICULTY_BLUEPRINTS[examId] || EXAM_DIFFICULTY_BLUEPRINTS[1];
  } else if (mode === 'exam-random') {
    diffBlueprint = EXAM_DIFFICULTY_BLUEPRINTS['random'];
  } else if (mode === 'exam-chapter') {
    diffBlueprint = EXAM_DIFFICULTY_BLUEPRINTS['chapter'];
  } else if (mode === 'practice') {
    diffBlueprint = EXAM_DIFFICULTY_BLUEPRINTS['practice'];
  }

  // 5. Phân chia hạn ngạch số câu cho từng chương
  const chapterWeights = selectedChapters.map((chId) => ({
    key: chId,
    weight: DEFAULT_CHAPTER_WEIGHTS[chId] || 10,
  }));
  const chapterQuotas = largestRemainderMethod(targetTotal, chapterWeights);

  // 6. Phân chia hạn ngạch độ khó trong từng chương và rút câu
  const recentlySeen = getRecentlySeenIds();
  const selectedQuestionMap = new Map<number, Question>();

  const diffKeys: QuestionDifficulty[] = ['dễ', 'trung bình', 'vận dụng'];

  for (const chId of selectedChapters) {
    const chQuota = chapterQuotas.get(chId) || 0;
    if (chQuota <= 0) continue;

    const diffWeights = diffKeys.map((d) => ({
      key: d,
      weight: diffBlueprint[d] || 33,
    }));
    const diffQuotas = largestRemainderMethod(chQuota, diffWeights);

    // Rút câu cho từng độ khó trong chương này
    for (const diff of diffKeys) {
      const quota = diffQuotas.get(diff) || 0;
      if (quota <= 0) continue;

      let needed = quota;

      // Hàm con để rút từ mảng candidate
      const pickFromPool = (pool: Question[]) => {
        if (needed <= 0 || pool.length === 0) return;
        const available = pool.filter((q) => !selectedQuestionMap.has(q.id));
        // Tách câu chưa gặp trong 2 lượt gần nhất
        const fresh = available.filter((q) => !recentlySeen.has(q.id));
        const recent = available.filter((q) => recentlySeen.has(q.id));

        const ordered = [...shuffle(fresh), ...shuffle(recent)];
        const toTake = ordered.slice(0, needed);
        for (const q of toTake) {
          selectedQuestionMap.set(q.id, q);
          needed--;
        }
      };

      // Rút trước từ đúng ô (chương × độ khó)
      pickFromPool(candidateMap[chId][diff]);

      // Nếu thiếu, mượn từ độ khó liền kề cùng chương
      if (needed > 0) {
        for (const adjDiff of getAdjacentDifficulties(diff)) {
          pickFromPool(candidateMap[chId][adjDiff]);
          if (needed <= 0) break;
        }
      }
    }
  }

  // 7. Nếu vẫn còn thiếu câu (do một số ô cạn câu), mượn từ các chương khác
  if (selectedQuestionMap.size < targetTotal) {
    const remainingNeeded = targetTotal - selectedQuestionMap.size;
    const allRemaining = ALL_QUESTIONS.filter((q) => !selectedQuestionMap.has(q.id));
    const fresh = allRemaining.filter((q) => !recentlySeen.has(q.id));
    const recent = allRemaining.filter((q) => recentlySeen.has(q.id));
    const fallback = [...shuffle(fresh), ...shuffle(recent)].slice(0, remainingNeeded);
    for (const q of fallback) {
      selectedQuestionMap.set(q.id, q);
    }
  }

  // 8. Xáo thứ tự các câu hỏi đã chọn bằng Fisher-Yates
  const chosenQuestions = shuffle(Array.from(selectedQuestionMap.values()));

  // 9. Với từng câu, xáo thứ tự 4 phương án (trừ câu lockOptionOrder)
  const items: { id: number; optionOrder: number[] }[] = [];
  const materializedQuestions: Question[] = [];

  for (const q of chosenQuestions) {
    const isLocked = Boolean(q.lockOptionOrder || needsLockedOrder(q));
    const optionOrder = isLocked ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]);

    items.push({ id: q.id, optionOrder });
    materializedQuestions.push(materializeQuestion(q, optionOrder));
  }

  // 10. Ghi nhận lượt làm vào danh sách đã gặp
  recordSeenExamRun(items.map((it) => it.id));

  // 11. Tính thời gian làm bài
  let durationSeconds: number | null = null;
  if (mode !== 'practice') {
    if (materializedQuestions.length >= 100) {
      durationSeconds = 90 * 60;
    } else {
      // Khi ít hơn 100 câu: ceil(số câu × 0.9) phút
      const mins = Math.ceil(materializedQuestions.length * 0.9);
      durationSeconds = mins * 60;
    }
  }

  return {
    questions: materializedQuestions,
    items,
    durationSeconds,
    notice,
    totalQuestions: materializedQuestions.length,
  };
}
