export type ChapterId = 1 | 3 | 4 | 5 | 6 | 7 | 9;

export interface ChapterInfo {
  id: ChapterId;
  code: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
}

export interface Question {
  id: number;
  chapterId: ChapterId;
  chapterName: string;
  question: string;
  options: [string, string, string, string]; // Exactly 4 options A, B, C, D
  correctAnswer: 0 | 1 | 2 | 3; // 0=A, 1=B, 2=C, 3=D
  explanation: string;
  legalReference: string; // Điều luật cụ thể căn cứ mới nhất
  difficulty?: 'dễ' | 'trung bình' | 'vận dụng';
}

export interface ExamSet {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  durationMinutes: number; // 90 mins
  questionCount: number; // 100 questions
  badge: string;
  questions: Question[];
}

export type ExamMode = 'exam' | 'practice' | 'chapter';

export interface ExamHistoryItem {
  id: string;
  examId: number;
  examTitle: string;
  timestamp: number;
  score: number; // Thang 10
  correctCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
}
