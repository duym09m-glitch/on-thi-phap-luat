import { ChapterId, Question, QuestionDifficulty, ExamSet } from '../types/quiz';
import { CHAPTERS } from './chapters';
import { exam1Questions } from './exam1';
import { exam2Questions } from './exam2';
import { exam3Questions } from './exam3';
import { exam4Questions } from './exam4';
import { exam5Questions } from './exam5';

export { CHAPTERS } from './chapters';

const EXAM_METAS = [
  { id: 1, title: 'Bộ Đề 01: Chuẩn Đề Thi Mẫu Chính Thức', slug: 'de-thi-chuan-01', subtitle: 'Bao quát 7 chương trọng tâm - Chuẩn format 100 câu 90 phút', description: 'Bộ đề thi chuẩn cấu trúc đề thi kết thúc học phần Pháp luật đại cương (chương 1, 3, 4, 5, 6, 7, 9). Đầy đủ mức độ nhận biết và thông hiểu.', durationMinutes: 90, questionCount: 100, badge: 'Đề Chuẩn Số 1' },
  { id: 2, title: 'Bộ Đề 02: Trọng Tâm Ôn Thi Học Kỳ', slug: 'de-thi-trong-tam-02', subtitle: '100 câu hỏi then chốt, xác suất xuất hiện cực cao trong phòng thi', description: 'Tập trung vào các câu hỏi then chốt, bẫy trắc nghiệm hay gặp về cơ cấu cơ quan nhà nước, quyền sở hữu, thừa kế, pháp luật doanh nghiệp và hình sự.', durationMinutes: 90, questionCount: 100, badge: 'Đề Thi Thử Điểm Cao' },
  { id: 3, title: 'Bộ Đề 03: Nâng Cao & Phân Loại Điểm A/A+', slug: 'de-thi-nang-cao-03', subtitle: 'Nhiều câu hỏi tình huống thực tế và điều khoản luật chuyên sâu', description: 'Bộ câu hỏi nâng cao giúp sinh viên đạt điểm 9-10 (điểm A, A+), rèn luyện tư duy phân tích các vụ việc dân sự, lao động, hợp đồng và tham nhũng.', durationMinutes: 90, questionCount: 100, badge: 'Chinh Phục Điểm A' },
  { id: 4, title: 'Bộ Đề 04: Tình Huống & Vận Dụng Thực Hành', slug: 'de-thi-tinh-huong-04', subtitle: 'Các case study thực tiễn đời sống và doanh nghiệp thường gặp', description: 'Tập trung vào các câu hỏi vận dụng thực tế: phân chia thừa kế, xử lý kỷ luật lao động, giải quyết tranh chấp kinh doanh và điều kiện kết hôn/ly hôn.', durationMinutes: 90, questionCount: 100, badge: 'Tình Huống Thực Tế' },
  { id: 5, title: 'Bộ Đề 05: Tổng Hợp Toàn Diện Ngân Hàng Đề', slug: 'de-thi-tong-hop-05', subtitle: 'Rà soát toàn diện kiến thức trước khi bước vào phòng thi', description: 'Bộ đề tổng hợp hoàn chỉnh 100 câu hỏi kiểm tra độ vững chắc của toàn bộ kiến thức môn học theo văn bản pháp luật hiện hành mới nhất.', durationMinutes: 90, questionCount: 100, badge: 'Tổng Hợp Ôn Luyện' },
];

export function getExamById(id: number): ExamSet {
  const meta = EXAM_METAS.find((m) => m.id === id) || EXAM_METAS[0];
  const questions = id === 1 ? exam1Questions : id === 2 ? exam2Questions : id === 3 ? exam3Questions : id === 4 ? exam4Questions : exam5Questions;
  return { ...meta, questions };
}

/**
 * Phát hiện câu hỏi có phương án phụ thuộc thứ tự A/B/C/D
 * hoặc các mẫu "tất cả các ý trên", "cả A và B", "đều đúng", "đều sai", v.v.
 */
export function needsLockedOrder(q: Partial<Question>): boolean {
  if (q.lockOptionOrder) return true;
  if (!q.options || !Array.isArray(q.options)) return false;

  const patterns: RegExp[] = [
    /cả\s+[a-d]\s*(,|và|\+|&)\s*[a-d]/i,
    /cả\s+[a-d],\s*[a-d]/i,
    /cả\s+3\s+(ý|đáp án|phương án|câu)/i,
    /cả\s+ba\s+(ý|đáp án|phương án|câu)/i,
    /tất cả (các )?(ý|đáp án|phương án|câu|nhận định|trường hợp) (trên|nêu trên|đều)/i,
    /tất cả đều (đúng|sai)/i,
    /đều đúng/i,
    /đều sai/i,
    /không có (đáp án|phương án|ý|câu nào) (nào|đúng|sai)/i,
    /(ý|đáp án|phương án|câu)\s+[a-d]\s*(và|hoặc|,|\+)/i,
    /(ý|đáp án|phương án|câu)\s+[a-d]\s*(đúng|sai)/i,
    /chỉ có (ý|đáp án|phương án)\s+[a-d]/i,
    /bao gồm (cả )?(ý|đáp án|phương án)\s+[a-d]/i,
  ];

  for (const opt of q.options) {
    if (typeof opt !== 'string') continue;
    const trimmed = opt.trim();
    for (const pat of patterns) {
      if (pat.test(trimmed)) {
        return true;
      }
    }
  }

  return false;
}

// Hỗ trợ nạp động thêm từ src/data/bank/chapter{1,3,4,5,6,7,9}_part*.ts nếu có
const extraModules = import.meta.glob<{ default?: Question[]; [key: string]: unknown }>(
  './bank/chapter*.ts',
  { eager: true }
);

const extraQuestions: Question[] = [];
for (const path in extraModules) {
  const mod = extraModules[path];
  if (!mod) continue;
  if (Array.isArray(mod.default)) {
    extraQuestions.push(...mod.default);
  } else {
    for (const key of Object.keys(mod)) {
      if (Array.isArray((mod as Record<string, unknown>)[key])) {
        extraQuestions.push(...((mod as Record<string, unknown>)[key] as Question[]));
      }
    }
  }
}

// Danh sách câu hỏi gốc từ 5 đề + các file nạp thêm
const rawAllList: Question[] = [
  ...exam1Questions,
  ...exam2Questions,
  ...exam3Questions,
  ...exam4Questions,
  ...exam5Questions,
  ...extraQuestions,
];

// Chuẩn hoá: đảm bảo id duy nhất, difficulty mặc định 'trung bình', lockOptionOrder
const seenIds = new Set<number>();
let nextAvailableId = 1000;

function normalizeQuestion(raw: Question): Question {
  let id = raw.id;
  if (!id || seenIds.has(id)) {
    while (seenIds.has(nextAvailableId)) {
      nextAvailableId++;
    }
    id = nextAvailableId++;
  }
  seenIds.add(id);

  const difficulty: QuestionDifficulty = raw.difficulty || 'trung bình';
  const locked = Boolean(raw.lockOptionOrder || needsLockedOrder(raw));

  return {
    ...raw,
    id,
    difficulty,
    lockOptionOrder: locked,
  };
}

const VALID_CHAPTER_IDS: ChapterId[] = [1, 3, 4, 5, 6, 7, 9];

export const BANK: Record<ChapterId, Question[]> = {
  1: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  9: [],
};

for (const q of rawAllList) {
  if (VALID_CHAPTER_IDS.includes(q.chapterId)) {
    const normalized = normalizeQuestion(q);
    BANK[q.chapterId].push(normalized);
  }
}

// Flat array chứa toàn bộ câu hỏi chuẩn hoá trong BANK
export const ALL_QUESTIONS: Question[] = VALID_CHAPTER_IDS.flatMap((chId) => BANK[chId]);

export function getQuestionsByChapter(chapterId: ChapterId): Question[] {
  return BANK[chapterId] || [];
}

/**
 * Kiểm tra ngân hàng câu hỏi ở chế độ dev
 */
export function validateBank(): void {
  const ids = new Set<number>();
  const duplicateIds: number[] = [];
  const invalidOptions: number[] = [];
  const invalidAnswer: number[] = [];
  const missingExplanation: number[] = [];
  const questionTextMap = new Map<string, number[]>();

  const stats: Record<
    ChapterId,
    {
      total: number;
      byDifficulty: Record<QuestionDifficulty, number>;
      answersCount: [number, number, number, number];
    }
  > = {
    1: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    3: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    4: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    5: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    6: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    7: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
    9: { total: 0, byDifficulty: { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 }, answersCount: [0, 0, 0, 0] },
  };

  for (const q of ALL_QUESTIONS) {
    if (ids.has(q.id)) {
      duplicateIds.push(q.id);
    } else {
      ids.add(q.id);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some((o) => !o || !o.trim())) {
      invalidOptions.push(q.id);
    }

    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      invalidAnswer.push(q.id);
    }

    if (!q.explanation || !q.explanation.trim()) {
      missingExplanation.push(q.id);
    }

    const normText = q.question.trim().toLowerCase();
    const existing = questionTextMap.get(normText) || [];
    existing.push(q.id);
    questionTextMap.set(normText, existing);

    const chStat = stats[q.chapterId];
    if (chStat) {
      chStat.total++;
      const diff = q.difficulty || 'trung bình';
      chStat.byDifficulty[diff]++;
      if ([0, 1, 2, 3].includes(q.correctAnswer)) {
        chStat.answersCount[q.correctAnswer]++;
      }
    }
  }

  const duplicates = Array.from(questionTextMap.entries()).filter(([, ids]) => ids.length > 1);

  if (duplicateIds.length > 0) {
    console.warn('[validateBank] Trùng lặp ID câu hỏi:', duplicateIds);
  }
  if (invalidOptions.length > 0) {
    console.warn('[validateBank] Câu không đủ 4 phương án hoặc có phương án rỗng:', invalidOptions);
  }
  if (invalidAnswer.length > 0) {
    console.warn('[validateBank] correctAnswer không nằm trong [0, 1, 2, 3]:', invalidAnswer);
  }
  if (missingExplanation.length > 0) {
    console.warn('[validateBank] Câu thiếu giải thích:', missingExplanation);
  }
  if (duplicates.length > 0) {
    console.warn(`[validateBank] Phát hiện ${duplicates.length} nội dung câu trùng nhau:`, duplicates);
  }

  // Thống kê từng chương
  console.info('[validateBank] Thống kê ngân hàng câu hỏi theo chương:');
  for (const chId of VALID_CHAPTER_IDS) {
    const s = stats[chId];
    const total = s.total || 1;
    const ansPct = s.answersCount.map((c) => `${Math.round((c / total) * 100)}%`).join(' / ');
    console.info(
      `Chương ${chId}: tổng ${s.total} câu | Dễ: ${s.byDifficulty['dễ']}, TB: ${s.byDifficulty['trung bình']}, Vận dụng: ${s.byDifficulty['vận dụng']} | Tỷ lệ A/B/C/D gốc: [${ansPct}]`
    );
  }
}

// Tự động kiểm tra trong môi trường phát triển
if (typeof window !== 'undefined' && import.meta.env?.DEV) {
  setTimeout(() => {
    validateBank();
  }, 100);
}
