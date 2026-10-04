import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

export function validateQuestion(q: Question) {
  if (!q.id || typeof q.id !== 'number') throw new Error(`Invalid ID: ${q.id}`);
  if (![1, 3, 4, 5, 6, 7, 9].includes(q.chapterId)) throw new Error(`Invalid chapterId: ${q.chapterId}`);
  if (!q.question || q.question.trim().length === 0) throw new Error(`Empty question for id ${q.id}`);
  if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Options must be 4 items for id ${q.id}`);
  for (const opt of q.options) {
    if (!opt || opt.trim().length === 0) throw new Error(`Empty option in id ${q.id}`);
    const badPatterns = [
      /cả\s+[a-d]\s*(,|và|\+|&)\s*[a-d]/i,
      /cả\s+[a-d],\s*[a-d]/i,
      /cả\s+3\s+(ý|đáp án|phương án|câu)/i,
      /cả\s+ba\s+(ý|đáp án|phương án|câu)/i,
      /tất cả (các )?(ý|đáp án|phương án|câu|nhận định|trường hợp) (trên|nêu trên|đều)/i,
      /tất cả đều (đúng|sai)/i,
      /đều đúng/i,
      /đều sai/i,
      /không có (đáp án|phương án|ý|câu nào) (nào|đúng|sai)/i,
      /(ý|đáp án|phương án|câu)\s+[a-d]\s*(và|hoặc|,|\+)/i,
      /(ý|đáp án|phương án|câu)\s+[a-d]\s*(đúng|sai)/i,
      /chỉ có (ý|đáp án|phương án)\s+[a-d]/i,
      /bao gồm (cả )?(ý|đáp án|phương án)\s+[a-d]/i,
    ];
    for (const pat of badPatterns) {
      if (pat.test(opt)) {
        throw new Error(`Option in id ${q.id} violates lockedOption rule: "${opt}" matches ${pat}`);
      }
    }
  }
  if (![0, 1, 2, 3].includes(q.correctAnswer)) throw new Error(`Invalid correctAnswer: ${q.correctAnswer} in id ${q.id}`);
  if (!q.explanation || q.explanation.trim().length === 0) throw new Error(`Missing explanation in id ${q.id}`);
  if (!q.legalReference || q.legalReference.trim().length === 0) throw new Error(`Missing legalReference in id ${q.id}`);
  if (!['dễ', 'trung bình', 'vận dụng'].includes(q.difficulty || '')) throw new Error(`Invalid difficulty: ${q.difficulty} in id ${q.id}`);
}

export function writeChapterParts(chapterId: number, questions: Question[]) {
  questions.forEach(validateQuestion);
  const outDir = path.resolve('src/data/bank');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const chunkSize = 30;
  let part = 1;
  for (let i = 0; i < questions.length; i += chunkSize) {
    const chunk = questions.slice(i, i + chunkSize);
    const fileName = `chapter${chapterId}_part${part}.ts`;
    const filePath = path.join(outDir, fileName);

    const content = `import type { Question } from '../../types/quiz';

const questions: Question[] = ${JSON.stringify(chunk, null, 2)};

export default questions;
`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Saved ${fileName} with ${chunk.length} questions (IDs ${chunk[0].id} to ${chunk[chunk.length - 1].id})`);
    part++;
  }
}
