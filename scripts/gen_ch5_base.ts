import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 5;
const chapterName = 'Chương 5: Pháp luật Kinh doanh - Thương mại';

// Cần: 30 dễ, 44 trung bình, 56 vận dụng = 130 câu (IDs 15001 - 15130)
// Đáp án chia đều: 33, 33, 32, 32
export const questions: Question[] = [];
let currentId = 15001;

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
    chapterId: 5,
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
