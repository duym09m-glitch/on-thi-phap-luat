import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 7;
const chapterName = 'Chương 7: Pháp luật Hôn nhân và Gia đình';

// Cần: 40 dễ, 57 trung bình, 58 vận dụng = 155 câu (IDs 17001 - 17155)
// Đáp án: [39, 39, 39, 38]
export const questions: Question[] = [];
let currentId = 17001;

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
    chapterId: 7,
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
