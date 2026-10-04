import fs from 'fs';
import path from 'path';
import { exam1Questions } from '../src/data/exam1';
import { exam2Questions } from '../src/data/exam2';
import { exam3Questions } from '../src/data/exam3';
import { exam4Questions } from '../src/data/exam4';
import { exam5Questions } from '../src/data/exam5';
import { CHAPTERS } from '../src/data/chapters';

// Load old questions
const oldQuestions = [
  ...exam1Questions,
  ...exam2Questions,
  ...exam3Questions,
  ...exam4Questions,
  ...exam5Questions,
];

console.log('Old questions count:', oldQuestions.length);

// Load bank files
const bankDir = path.resolve('./src/data/bank');
const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort();
console.log('Bank files found:', bankFiles.length);

async function main() {
  const bankQuestions: any[] = [];
  for (const file of bankFiles) {
    const filePath = path.join(bankDir, file);
    const mod = await import(filePath);
    const qs = mod.default || mod.questions;
    if (!Array.isArray(qs)) {
      console.error(`File ${file} does not export an array!`);
    } else {
      bankQuestions.push(...qs);
    }
  }

console.log('Bank questions count:', bankQuestions.length);
const allQuestions = [...oldQuestions, ...bankQuestions];
console.log('Total ALL_QUESTIONS:', allQuestions.length);

const chapters = [1, 3, 4, 5, 6, 7, 9];
const chStats: Record<number, { total: number; de: number; tb: number; vd: number; ans: number[] }> = {};
const bankStats: Record<number, { total: number; de: number; tb: number; vd: number; ans: number[] }> = {};

const forbiddenTerms = [
  'cả a và b', 'cả a, b', 'cả 3 ý', 'tất cả các ý trên', 'tất cả đều đúng', 'tất cả đều sai',
  'đều đúng', 'đều sai', 'không có đáp án nào đúng', 'ý a', 'đáp án b', 'phương án c', 'câu d'
];

let hasErrors = false;
const idSet = new Set<number>();
const questionTextMap = new Map<string, number>();

for (const q of bankQuestions) {
  // Check format of newly added questions strictly
  if (idSet.has(q.id)) {
    console.error('DUPLICATE ID IN BANK:', q.id);
    hasErrors = true;
  }
  idSet.add(q.id);

  if (questionTextMap.has(q.question)) {
    console.error('DUPLICATE QUESTION TEXT IN BANK:', q.id, 'matches', questionTextMap.get(q.question));
    hasErrors = true;
  }
  questionTextMap.set(q.question, q.id);

  // Check chapterName matches chapters.ts exactly
  const chDef = CHAPTERS.find(c => c.id === q.chapterId);
  if (!chDef || q.chapterName !== chDef.name) {
    console.error(`MISMATCHED CHAPTER NAME in ${q.id}: expected "${chDef?.name}", got "${q.chapterName}"`);
    hasErrors = true;
  }

  if (!q.options || q.options.length !== 4) {
    console.error('INVALID OPTIONS COUNT:', q.id);
    hasErrors = true;
  }
  for (const opt of q.options) {
    if (!opt || opt.trim().length === 0) {
      console.error('EMPTY OPTION:', q.id);
      hasErrors = true;
    }
    const lower = opt.toLowerCase();
    for (const term of forbiddenTerms) {
      if (lower.includes(term)) {
        console.error('FORBIDDEN TERM IN OPTION:', q.id, term, opt);
        hasErrors = true;
      }
    }
  }

  if (q.correctAnswer < 0 || q.correctAnswer > 3) {
    console.error('INVALID CORRECT ANSWER:', q.id, q.correctAnswer);
    hasErrors = true;
  }

  if (!q.explanation || q.explanation.trim().length === 0) {
    console.error('MISSING EXPLANATION:', q.id);
    hasErrors = true;
  }

  if (!q.legalReference || q.legalReference.trim().length === 0) {
    console.error('MISSING LEGAL REFERENCE:', q.id);
    hasErrors = true;
  }

  if (!['dễ', 'trung bình', 'vận dụng'].includes(q.difficulty)) {
    console.error('INVALID DIFFICULTY:', q.id, q.difficulty);
    hasErrors = true;
  }

  if (!bankStats[q.chapterId]) {
    bankStats[q.chapterId] = { total: 0, de: 0, tb: 0, vd: 0, ans: [0, 0, 0, 0] };
  }
  const bs = bankStats[q.chapterId];
  bs.total++;
  if (q.difficulty === 'dễ') bs.de++;
  else if (q.difficulty === 'trung bình') bs.tb++;
  else if (q.difficulty === 'vận dụng') bs.vd++;
  bs.ans[q.correctAnswer]++;
}

// Check old question IDs vs bank question IDs for collision
for (const q of oldQuestions) {
  if (idSet.has(q.id)) {
    console.error('OLD QUESTION ID COLLISION WITH BANK:', q.id);
    hasErrors = true;
  }
  if (questionTextMap.has(q.question)) {
    console.error('QUESTION TEXT COLLISION BETWEEN BANK AND OLD QUESTION:', q.id, 'matches bank', questionTextMap.get(q.question));
    hasErrors = true;
  }
}

// Total chapter stats
for (const q of allQuestions) {
  if (!chStats[q.chapterId]) {
    chStats[q.chapterId] = { total: 0, de: 0, tb: 0, vd: 0, ans: [0, 0, 0, 0] };
  }
  const s = chStats[q.chapterId];
  s.total++;
  if (q.difficulty === 'dễ') s.de++;
  else if (q.difficulty === 'trung bình') s.tb++;
  else if (q.difficulty === 'vận dụng') s.vd++;
  s.ans[q.correctAnswer]++;
}

console.log('\n--- THÊM MỚI (BANK STATS) ---');
console.table(
  chapters.map(ch => ({
    Chương: ch,
    'Tổng thêm': bankStats[ch]?.total || 0,
    'Dễ': bankStats[ch]?.de || 0,
    'TB': bankStats[ch]?.tb || 0,
    'Vận dụng': bankStats[ch]?.vd || 0,
    'Đáp án A': bankStats[ch]?.ans[0] || 0,
    'Đáp án B': bankStats[ch]?.ans[1] || 0,
    'Đáp án C': bankStats[ch]?.ans[2] || 0,
    'Đáp án D': bankStats[ch]?.ans[3] || 0,
  }))
);

console.log('\n--- TỔNG SAU KHI THÊM (CHƯƠNG STATS: CŨ + MỚI) ---');
console.table(
  chapters.map(ch => ({
    Chương: ch,
    'Tổng cộng': chStats[ch]?.total || 0,
    'Dễ': chStats[ch]?.de || 0,
    'TB': chStats[ch]?.tb || 0,
    'Vận dụng': chStats[ch]?.vd || 0,
    'Đáp án A': chStats[ch]?.ans[0] || 0,
    'Đáp án B': chStats[ch]?.ans[1] || 0,
    'Đáp án C': chStats[ch]?.ans[2] || 0,
    'Đáp án D': chStats[ch]?.ans[3] || 0,
  }))
);

if (hasErrors) {
    console.error('\nFAILED: Errors detected!');
    process.exit(1);
  } else {
    console.log('\nSUCCESS: All validations passed cleanly!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
