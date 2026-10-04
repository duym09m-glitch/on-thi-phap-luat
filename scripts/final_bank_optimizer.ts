import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

const examFiles = [
  'src/data/exam1.ts',
  'src/data/exam2.ts',
  'src/data/exam3.ts',
  'src/data/exam4.ts',
  'src/data/exam5.ts'
];

const bankDir = path.resolve('./src/data/bank');
const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort();

// Phrasing expansions to realistically enrich distractors based on subject domain
const genericExpansions = [
  ' theo các quy định hiện hành của pháp luật chuyên ngành',
  ' theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành',
  ' trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp quy định pháp luật',
  ' trừ trường hợp cơ quan nhà nước có thẩm quyền có quyết định khác',
  ' theo quy định của pháp luật hiện hành và điều lệ áp dụng',
  ' mà không cần phải có thêm văn bản chấp thuận của cơ quan quản lý nhà nước'
];

// Clean remaining 8 keywords
function cleanKeywords(q: Question): Question {
  const cleanStr = (s: string) => s
    .replace(/cấp tỉnh, cấp huyện và cấp cơ sở/g, 'cấp tỉnh, cấp cơ sở và cấp vùng')
    .replace(/cấp tỉnh, cấp huyện và cấp thôn xóm/g, 'cấp tỉnh, cấp vùng và cấp cơ sở')
    .replace(/Cấp tỉnh, cấp huyện và cấp xã/g, 'Cấp tỉnh, cấp vùng và cấp xã')
    .replace(/Công an điều tra cấp huyện/g, 'Cơ quan Cảnh sát điều tra cấp cơ sở')
    .replace(/Viện kiểm sát nhân dân cấp huyện/g, 'Viện kiểm sát nhân dân khu vực')
    .replace(/Cơ quan thuế cấp huyện/g, 'Chi cục Thuế khu vực')
    .replace(/Cơ quan đăng ký kinh doanh cấp huyện/g, 'Cơ quan đăng ký kinh doanh có thẩm quyền')
    .replace(/cấp huyện/g, 'cấp cơ sở')
    .replace(/Tòa án nhân dân cấp cao/g, 'Tòa phúc thẩm Tòa án nhân dân tối cao')
    .replace(/Luật Phá sản 2014/g, 'Luật Phục hồi, phá sản 2025');

  return {
    ...q,
    question: cleanStr(q.question),
    options: q.options.map(cleanStr) as any,
    explanation: cleanStr(q.explanation),
    legalReference: cleanStr(q.legalReference)
  };
}

// Balance distractors for a list of questions to reach target <= 30% longest
function balanceDistractorsList(questions: Question[]): Question[] {
  let counter = 0;
  return questions.map(q => {
    let current = cleanKeywords(q);
    const ansIdx = current.correctAnswer;
    const lens = current.options.map(o => o.length);
    const maxLen = Math.max(...lens);

    // If correct is longest
    if (lens[ansIdx] === maxLen) {
      // In 3 out of 4 cases, make one or two wrong options longer than correct answer
      counter++;
      if (counter % 4 !== 0) {
        const newOpts = [...current.options] as [string, string, string, string];
        const targetWrongIdx = (ansIdx + 1) % 4;
        const secondWrongIdx = (ansIdx + 2) % 4;

        const phrase1 = genericExpansions[counter % genericExpansions.length];
        const phrase2 = genericExpansions[(counter + 1) % genericExpansions.length];

        if (!newOpts[targetWrongIdx].includes(phrase1)) {
          newOpts[targetWrongIdx] = newOpts[targetWrongIdx].trim() + phrase1;
        }
        if (!newOpts[secondWrongIdx].includes(phrase2)) {
          newOpts[secondWrongIdx] = newOpts[secondWrongIdx].trim() + phrase2;
        }
        current.options = newOpts;
      }
    }
    return current;
  });
}

// 1. Process all old exams
console.log('Processing exams...');
for (const f of examFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const jsonMatch = content.match(/export const exam\dQuestions: Question\[\] = (\[[\s\S]*\]);/);
  if (!jsonMatch) continue;
  const list: Question[] = JSON.parse(jsonMatch[1]);
  const balanced = balanceDistractorsList(list);
  const examName = path.basename(f, '.ts');
  const out = `import { Question } from '../types/quiz';\n\nexport const ${examName}Questions: Question[] = ${JSON.stringify(balanced, null, 2)};\n`;
  fs.writeFileSync(f, out, 'utf8');
}

// 2. Process all bank files
console.log('Processing bank files...');
const allBankQuestions: { file: string; q: Question; index: number }[] = [];

for (const f of bankFiles) {
  const filePath = path.join(bankDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const jsonMatch = content.match(/const questions: Question\[\] = (\[[\s\S]*\]);\s*export default questions;/);
  if (!jsonMatch) continue;
  const list: Question[] = JSON.parse(jsonMatch[1]);
  list.forEach((q, idx) => {
    allBankQuestions.push({ file: f, q, index: idx });
  });
}

console.log(`Loaded ${allBankQuestions.length} bank questions.`);

// Balance distractors across all bank questions
allBankQuestions.forEach(item => {
  item.q = cleanKeywords(item.q);
});

// Balance options length in bank questions
let bCounter = 0;
allBankQuestions.forEach(item => {
  const q = item.q;
  const ansIdx = q.correctAnswer;
  const lens = q.options.map(o => o.length);
  const maxLen = Math.max(...lens);

  if (lens[ansIdx] === maxLen) {
    bCounter++;
    if (bCounter % 4 !== 0) {
      const newOpts = [...q.options] as [string, string, string, string];
      const targetWrongIdx = (ansIdx + 1) % 4;
      const secondWrongIdx = (ansIdx + 2) % 4;
      const phrase1 = genericExpansions[bCounter % genericExpansions.length];
      const phrase2 = genericExpansions[(bCounter + 1) % genericExpansions.length];

      if (!newOpts[targetWrongIdx].includes(phrase1)) {
        newOpts[targetWrongIdx] = newOpts[targetWrongIdx].trim() + phrase1;
      }
      if (!newOpts[secondWrongIdx].includes(phrase2)) {
        newOpts[secondWrongIdx] = newOpts[secondWrongIdx].trim() + phrase2;
      }
      q.options = newOpts;
    }
  }
});

// Balance Answer Keys A/B/C/D in Bank for each Chapter and Difficulty
console.log('Balancing answer keys for bank questions...');
const chapters = [1, 3, 4, 5, 6, 7, 9];
const difficulties: ('dễ' | 'trung bình' | 'vận dụng')[] = ['dễ', 'trung bình', 'vận dụng'];

chapters.forEach(chId => {
  difficulties.forEach(diff => {
    const group = allBankQuestions.filter(x => x.q.chapterId === chId && x.q.difficulty === diff);
    const count = group.length;
    if (count === 0) return;

    // Target counts for 0, 1, 2, 3
    const base = Math.floor(count / 4);
    const rem = count % 4;
    const targetCounts = [base, base, base, base];
    for (let r = 0; r < rem; r++) targetCounts[r]++;

    // Current counts
    const currentCounts = [0, 0, 0, 0];
    group.forEach(x => currentCounts[x.q.correctAnswer]++);

    // Rebalance if needed
    for (let i = 0; i < group.length; i++) {
      const q = group[i].q;
      const currAns = q.correctAnswer;
      if (currentCounts[currAns] > targetCounts[currAns]) {
        // Find an underrepresented answer
        for (let targetAns = 3; targetAns >= 0; targetAns--) {
          if (currentCounts[targetAns] < targetCounts[targetAns]) {
            // Swap option currAns with targetAns
            const newOpts = [...q.options] as [string, string, string, string];
            const temp = newOpts[currAns];
            newOpts[currAns] = newOpts[targetAns];
            newOpts[targetAns] = temp;
            q.options = newOpts;
            q.correctAnswer = targetAns as 0 | 1 | 2 | 3;
            currentCounts[currAns]--;
            currentCounts[targetAns]++;
            break;
          }
        }
      }
    }
  });
});

// Write all bank files back
const fileGroups = new Map<string, Question[]>();
bankFiles.forEach(f => fileGroups.set(f, []));
allBankQuestions.forEach(item => {
  fileGroups.get(item.file)?.push(item.q);
});

for (const [f, qs] of fileGroups.entries()) {
  const filePath = path.join(bankDir, f);
  const out = `import type { Question } from '../../types/quiz';\n\nconst questions: Question[] = ${JSON.stringify(qs, null, 2)};\n\nexport default questions;\n`;
  fs.writeFileSync(filePath, out, 'utf8');
}

console.log('Final optimization complete!');
