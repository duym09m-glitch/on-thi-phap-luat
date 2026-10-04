import { questions, chapterId } from './gen_ch6_base';
import './gen_ch6_de';
import './gen_ch6_tb';
import './gen_ch6_vd1';
import './gen_ch6_vd2';
import { writeChapterParts } from './utils';

console.log(`Loaded ${questions.length} questions for Chapter ${chapterId}`);
console.log(`IDs from ${questions[0]?.id} to ${questions[questions.length - 1]?.id}`);

const diffs: Record<string, number> = { 'dễ': 0, 'trung bình': 0, 'vận dụng': 0 };
const answers = [0, 0, 0, 0];
questions.forEach(q => {
  if (q.difficulty) diffs[q.difficulty] = (diffs[q.difficulty] || 0) + 1;
  answers[q.correctAnswer]++;
});
console.log('Diffs:', diffs);
console.log('Answers:', answers);

writeChapterParts(chapterId, questions);
