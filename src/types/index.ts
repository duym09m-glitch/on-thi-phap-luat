export type DifficultyLevel = 'Dễ' | 'Trung bình' | 'Vận dụng';

export interface Question {
  id: string; // e.g. "c1-1", "c6-41"
  chapter: number;
  number: number;
  level: DifficultyLevel;
  section: string;
  text: string;
  options: string[]; // 4 options
  answer: number; // 0, 1, 2, 3 corresponding to original A, B, C, D
  explanation: string;
}

export interface Chapter {
  number: number;
  title: string;
  fullName: string;
  questionCount: number;
}

export interface ExamPreset {
  id: string;
  name: string;
  description: string;
  chapters: number[];
}

export type ExamMode = 'preset' | 'chapter' | 'practice';

export interface ExamConfig {
  mode: ExamMode;
  title: string;
  chapters: number[];
  presetId?: string;
  totalQuestions: number;
  durationMinutes: number;
}

export interface ExamQuestion {
  questionId: string;
  chapter: number;
  number: number;
  level: DifficultyLevel;
  section: string;
  text: string;
  options: string[]; // Shuffled options
  correctOptionIndex: number; // Correct index in shuffled options (0-3)
  explanation: string;
  originalAnswerIndex: number;
  optionOrder: number[]; // e.g. [2, 0, 3, 1] - how original options were mapped
}

export interface ExamSession {
  id: string;
  mode: ExamMode;
  title: string;
  chapters: number[];
  presetId?: string;
  questions: ExamQuestion[];
  userAnswers: Record<number, number>; // questionIndex -> selectedOptionIndex (0-3)
  startTime: number;
  durationSeconds: number;
  endAt: number; // Timestamp when time expires
  isPaused: boolean;
  remainingSeconds: number; // Preserved when paused
  completed: boolean;
}

export interface ExamResult {
  id: string;
  mode: ExamMode;
  title: string;
  chapters: number[];
  presetId?: string;
  date: number; // timestamp
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  score: number; // Scale 10, e.g. 8.50
  questions: ExamQuestion[];
  userAnswers: Record<number, number>;
}

export interface StoredExamResult {
  id: string;
  mode: ExamMode;
  title: string;
  chapters: number[];
  presetId?: string;
  date: number;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  score: number;
  // Lightweight question reference to preserve disk space
  questionItems: {
    questionId: string;
    optionOrder: number[];
    selectedAnswer: number | null; // index in optionOrder, or null
  }[];
}
