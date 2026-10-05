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

  // 5. Shuffle options for every question and map new correct answer index
  const examQuestions: ExamQuestion[] = shuffledQuestions.map((q) => {
    // Original option indices: [0, 1, 2, 3]
    const optionOrder = shuffleArray([0, 1, 2, 3]);
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
