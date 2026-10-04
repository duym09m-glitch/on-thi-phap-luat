import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 6;
const chapterName = 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng';

// Cần: 27 dễ, 50 trung bình, 53 vận dụng = 130 câu (IDs 16001 - 16130)
// Đáp án: [33, 33, 32, 32]
export const questions: Question[] = [];
let currentId = 16001;

function addQ(
  difficulty: 'dễ' | 'trung bình' | 'vận dụng',
  question: string,
  options: [string, string, string, string],
  correctAnswer: 0 | 1 | 2 | 3,
  explanation: string,
  legalReference: string
) {
  questions.push({
    id: currentId++,
    chapterId: 6,
    chapterName,
    question,
    options,
    correctAnswer,
    explanation,
    legalReference,
    difficulty
  });
}

export { addQ, chapterId, chapterName };
