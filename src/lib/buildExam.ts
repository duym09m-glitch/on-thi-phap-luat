import { ExamConfig, ExamQuestion, Question } from '../types';
import { getQuestionsByChapter } from '../bank';

/**
 * Cryptographically secure pseudo-random number generator [0, 1)
 */
export function secureRandom(): number {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  }
  return Math.random();
}

/**
 * Fisher-Yates array shuffle using secure random
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(secureRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Removes Vietnamese accents for robust regex matching on unaccented text
 */
function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/**
 * Checks if an option references other options / positions
 * (e.g. "Cả A, B, C đều đúng", "Tất cả các đáp án trên", "Cả 2 đáp án đều sai", etc.).
 * Supports case-insensitive matching with and without Vietnamese accents.
 */
function isPositionDependentOption(optionText: string): boolean {
  const raw = optionText.trim();
  const lower = raw.toLowerCase();

  // Guard: "đứng" (stand) or "đuổi" (expel) are not "đúng" (correct) or "dưới" (below)
  if (lower.includes('đứng') || lower.includes('đuổi')) {
    return false;
  }

  // Guard: person/entity names in legal case studies (e.g. "Bà B", "Ông A", "Công ty A")
  if (/(?:bà|ba|ông|ong|anh|chị|chi|công ty|cong ty)\s+[a-d](?![a-zà-ỹ\w])/iu.test(lower)) {
    return false;
  }

  const patterns: RegExp[] = [
    // 1. Letters A, B, C, D referring to choices: "Cả A, B, C...", "Cả A và B...", "Cả A, B..."
    /(?<![a-zà-ỹ\w])(?:cả|ca)\s+[a-d](?![a-zà-ỹ\w])/iu,

    // "A, B và C", "A và B", "A, B", "B và C" followed by "đều / đúng / sai / là / không"
    /(?<![a-zà-ỹ\w])[a-d]\s*(?:,\s*|\s+(?:và|va)\s+)[a-d](?![a-zà-ỹ\w])\s*(?:đều|deu|đúng|dung|sai|là|la|không|khong)?/iu,

    // "Chỉ A đúng", "Chỉ B đúng", "Chỉ C đúng", "Chỉ D đúng"
    /(?<![a-zà-ỹ\w])(?:chỉ|chi)\s+[a-d](?![a-zà-ỹ\w])\s+(?:đúng|dung|sai)/iu,

    // "Đáp án A", "Phương án B"
    /(?:đáp án|dap an|phương án|phuong an)\s+[a-d](?![a-zà-ỹ\w])/iu,

    // 2. Relative position "trên" / "dưới":
    // "đáp án trên/dưới", "phương án trên/dưới", "câu trên/dưới", "ý trên/dưới"
    // "các đáp án trên", "các phương án trên", "các câu trên", "các ý trên"
    /(?:đáp án|dap an|phương án|phuong an|câu|cau|ý)\s+(?:nêu\s+|neu\s+)?(?:trên|tren|dưới|duoi)(?![a-zà-ỹ\w])/iu,
    /(?:các|cac)\s+(?:đáp án|dap an|phương án|phuong an|câu|cau|ý)\s+(?:trên|tren)(?![a-zà-ỹ\w])/iu,

    // "các trường hợp trên", "tất cả các trường hợp trên", "các trường hợp nêu trên"
    /(?:các|cac|tất cả các|tat ca cac)\s+(?:trường hợp|truong hop)\s+(?:nêu\s+|neu\s+)?(?:trên|tren)(?![a-zà-ỹ\w])/iu,

    // 3. Collective choices: "cả ba", "cả hai", "cả 2", "cả 3"
    // "Cả ba đáp án", "Cả hai đáp án", "Cả 3 đáp án", "Cả 2 đáp án"
    // "Cả ba phương án", "Cả hai phương án"
    // "Cả ba đều đúng", "Cả hai đều đúng", "Cả 3 đều sai", "Cả 2 đều sai"
    /(?<![a-zà-ỹ\w])(?:cả|ca)\s+(?:ba|hai|2|3|4)\s+(?:đáp án|dap an|phương án|phuong an|câu|cau|ý)(?![a-zà-ỹ\w])/iu,
    /(?<![a-zà-ỹ\w])(?:cả|ca)\s+(?:ba|hai|2|3|4)\s+(?:đều|deu)\s+(?:đúng|dung|sai)/iu,
    /(?<![a-zà-ỹ\w])(?:cả|ca)\s+(?:ba|hai|2|3|4)\s+(?:đáp án|dap an|phương án|phuong an)?\s*(?:trên|tren)\s+(?:đều|deu)\s+(?:đúng|dung|sai)/iu,

    // 4. "Tất cả các đáp án", "Tất cả các phương án", "Tất cả đều đúng/sai"
    /(?:tất cả|tat ca)\s+(?:các\s+|cac\s+)?(?:đáp án|dap an|phương án|phuong an|câu|cau|ý)(?![a-zà-ỹ\w])/iu,
    /(?:tất cả|tat ca)\s+(?:đều|deu)\s+(?:đúng|dung|sai)(?![a-zà-ỹ\w])/iu,

    // 5. "Không có đáp án nào", "Không đáp án nào đúng/sai", "Không có phương án nào"
    /(?:không|khong)\s+(?:có\s+|co\s+)?(?:đáp án|dap an|phương án|phuong an|câu|cau|ý)\s+(?:nào|nao)/iu,

    // 6. Standalone "Đều đúng", "Đều sai", "Cả ba/hai đúng/sai"
    /^(?:cả\s+|ca\s+)?(?:đều|deu)\s+(?:đúng|dung|sai)[.!?:;]?$/iu,
  ];

  const unaccented = removeAccents(lower);
  return patterns.some((p) => p.test(lower) || p.test(unaccented));
}

/**
 * Checks if a question contains at least one position-dependent option.
 */
export function isPositionDependent(q: { options: string[] }): boolean {
  return q.options.some((opt) => isPositionDependentOption(opt));
}

export interface BuildExamOptions {
  config: ExamConfig;
  recentQuestionIds?: Set<string>;
}

/**
 * Pure function that generates an exam with 100 questions (or config.totalQuestions)
 * distributed among selected chapters, prioritizing unused questions from the recent session,
 * with fully shuffled questions and options.
 */
export function buildExam({ config, recentQuestionIds = new Set() }: BuildExamOptions): ExamQuestion[] {
  const { chapters, totalQuestions } = config;
  if (!chapters || chapters.length === 0) {
    throw new Error('Không có chương nào được chọn để tạo đề thi');
  }

  // 1. Gather available questions for each chapter
  const chapterPools: { chapter: number; questions: Question[] }[] = [];
  for (const ch of chapters) {
    const qs = getQuestionsByChapter(ch);
    if (qs.length > 0) {
      chapterPools.push({ chapter: ch, questions: qs });
    }
  }

  if (chapterPools.length === 0) {
    throw new Error('Các chương đã chọn không có câu hỏi trong ngân hàng');
  }

  const targetTotal = Math.min(
    totalQuestions,
    chapterPools.reduce((sum, cp) => sum + cp.questions.length, 0)
  );

  // 2. Allocate questions evenly with random remainder distribution and handle deficits
  const quotas = allocateQuotas(
    chapterPools.map((cp) => cp.questions.length),
    targetTotal
  );

  // 3. For each chapter, draw questions prioritizing unseen ones from the recent exam
  const selectedRawQuestions: Question[] = [];

  for (let i = 0; i < chapterPools.length; i++) {
    const pool = chapterPools[i];
    const quota = quotas[i];
    if (quota <= 0) continue;

    const unseen: Question[] = [];
    const seen: Question[] = [];

    for (const q of pool.questions) {
      if (recentQuestionIds.has(q.id)) {
        seen.push(q);
      } else {
        unseen.push(q);
      }
    }

    const shuffledUnseen = shuffleArray(unseen);
    const shuffledSeen = shuffleArray(seen);

    if (shuffledUnseen.length >= quota) {
      selectedRawQuestions.push(...shuffledUnseen.slice(0, quota));
    } else {
      // Take all unseen, fill remainder from seen
      selectedRawQuestions.push(...shuffledUnseen);
      const needed = quota - shuffledUnseen.length;
      selectedRawQuestions.push(...shuffledSeen.slice(0, needed));
    }
  }

  // 4. Shuffle all questions together
  const shuffledQuestions = shuffleArray(selectedRawQuestions);

  // 5. Shuffle options for every question (preserve order for position-dependent questions)
  const examQuestions: ExamQuestion[] = shuffledQuestions.map((q) => {
    // Keep original option order [0, 1, 2, 3] if the question has position-dependent options
    const shouldShuffle = !isPositionDependent(q);
    const optionOrder = shouldShuffle ? shuffleArray([0, 1, 2, 3]) : [0, 1, 2, 3];
    const shuffledOptions = optionOrder.map((idx) => q.options[idx]);
    const correctOptionIndex = optionOrder.indexOf(q.answer);

    return {
      questionId: q.id,
      chapter: q.chapter,
      number: q.number,
      level: q.level,
      section: q.section,
      text: q.text,
      options: shuffledOptions,
      correctOptionIndex,
      explanation: q.explanation,
      originalAnswerIndex: q.answer,
      optionOrder,
    };
  });

  return examQuestions;
}

/**
 * Allocates `totalTarget` questions among chapters according to available capacity
 */
function allocateQuotas(capacities: number[], totalTarget: number): number[] {
  const n = capacities.length;
  let remaining = totalTarget;
  const quotas = new Array(n).fill(0);

  // Initial even distribution
  const baseQuota = Math.floor(totalTarget / n);
  for (let i = 0; i < n; i++) {
    const q = Math.min(baseQuota, capacities[i]);
    quotas[i] = q;
    remaining -= q;
  }

  // Distribute remaining randomly among chapters with spare capacity
  let chaptersWithRoom = capacities
    .map((cap, idx) => ({ idx, room: cap - quotas[idx] }))
    .filter((c) => c.room > 0);

  while (remaining > 0 && chaptersWithRoom.length > 0) {
    const randIdx = Math.floor(secureRandom() * chaptersWithRoom.length);
    const chosen = chaptersWithRoom[randIdx];
    quotas[chosen.idx]++;
    chosen.room--;
    remaining--;

    if (chosen.room <= 0) {
      chaptersWithRoom.splice(randIdx, 1);
    }
  }

  return quotas;
}
