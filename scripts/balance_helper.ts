import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

const files = [
  'src/data/exam1.ts',
  'src/data/exam2.ts',
  'src/data/exam3.ts',
  'src/data/exam4.ts',
  'src/data/exam5.ts'
];

// Helper to balance distractors so correct answer isn't always the longest
export function balanceOptionsForQuestion(q: Question, isOld: boolean): Question {
  const ansIdx = q.correctAnswer;
  const correctText = q.options[ansIdx];
  const correctLen = correctText.length;
  
  // Calculate max length of options
  const maxLen = Math.max(...q.options.map(o => o.length));
  
  // If correct answer is strictly the longest by more than 10 characters,
  // we expand the shorter wrong options by adding realistic legal phrasing or context
  if (q.options[ansIdx].length === maxLen && maxLen > 40) {
    const newOptions: [string, string, string, string] = [...q.options] as any;
    for (let i = 0; i < 4; i++) {
      if (i === ansIdx) continue;
      const opt = newOptions[i];
      // If significantly shorter than correct answer, expand with realistic legal nuance
      if (opt.length < correctLen - 15) {
        // Expand based on content type
        if (opt.endsWith('.')) {
          newOptions[i] = opt.slice(0, -1);
        }
        // Add realistic legal context to match structure and length
        if (q.difficulty === 'vận dụng') {
          if (!opt.includes('theo') && !opt.includes('quy định') && !opt.includes('do')) {
            newOptions[i] = `${opt} theo đúng trình tự và thỏa thuận ban đầu giữa các bên`;
          } else if (!opt.includes('cơ quan')) {
            newOptions[i] = `${opt} mà không cần có sự phê duyệt trước của cơ quan có thẩm quyền`;
          } else {
            newOptions[i] = `${opt} theo các quy định hiện hành của pháp luật chuyên ngành`;
          }
        } else if (q.difficulty === 'trung bình') {
          if (!opt.includes('theo quy định') && !opt.includes('pháp luật')) {
            newOptions[i] = `${opt} theo quy định của pháp luật hiện hành và điều lệ áp dụng`;
          } else {
            newOptions[i] = `${opt} trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp`;
          }
        } else {
          // Dễ
          if (opt.length < 25 && correctLen > 45) {
            newOptions[i] = `${opt} theo quy định của pháp luật có liên quan`;
          }
        }
      }
    }
    return { ...q, options: newOptions };
  }
  return q;
}
