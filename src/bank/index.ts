import { Chapter, Question } from '../types';
import { parseAllQuestions } from './parser';

/**
 * Returns all available chapters sorted by chapter number.
 */
export function getChapters(): Chapter[] {
  const cache = parseAllQuestions();
  return cache.chapters;
}

/**
 * Returns all questions belonging to a specific chapter.
 */
export function getQuestionsByChapter(chapterNumber: number): Question[] {
  const cache = parseAllQuestions();
  return cache.questionsByChapter.get(chapterNumber) || [];
}

/**
 * Returns a specific question by its stable ID (e.g. "c6-41").
 */
export function getQuestionById(id: string): Question | undefined {
  const cache = parseAllQuestions();
  return cache.questionsById.get(id);
}

/**
 * Returns total count of questions across all available chapters.
 */
export function getTotalQuestionCount(): number {
  const cache = parseAllQuestions();
  return cache.questionsById.size;
}

/**
 * Returns all questions from multiple selected chapters.
 */
export function getQuestionsByChapters(chapterNumbers: number[]): Question[] {
  const questions: Question[] = [];
  for (const ch of chapterNumbers) {
    questions.push(...getQuestionsByChapter(ch));
  }
  return questions;
}
