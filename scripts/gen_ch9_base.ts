import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 9;
const chapterName = 'Chương 9: Pháp luật Lao động';

// Cần: 36 dễ, 62 trung bình, 58 vận dụng = 156 câu (IDs 19001 - 19156)
// Đáp án: [39, 39, 39, 39]
export const questions: Question[] = [];
let currentId = 19001;

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
    chapterId: 9,
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
