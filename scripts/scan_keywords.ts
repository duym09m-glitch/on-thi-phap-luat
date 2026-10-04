import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

async function main() {
  const allQuestions: Question[] = [];
  for (let e = 1; e <= 5; e++) {
    const mod = await import(`../src/data/exam${e}.ts`);
    allQuestions.push(...mod[`exam${e}Questions`]);
  }
  const bankDir = path.resolve('./src/data/bank');
  const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort();
  for (const f of bankFiles) {
    const mod = await import(`../src/data/bank/${f}`);
    allQuestions.push(...(mod.default || mod.questions));
  }

  const keywords = [
    { term: 'cấp huyện', regex: /cấp huyện/i },
    { term: 'huyện', regex: /\bhuyện\b/i },
    { term: 'quận', regex: /\bquận\b/i },
    { term: 'thị xã', regex: /\bthị xã\b/i },
    { term: 'thành phố thuộc tỉnh', regex: /thành phố thuộc tỉnh/i },
    { term: 'Tòa án nhân dân cấp cao', regex: /Tòa án nhân dân cấp cao|TAND cấp cao/i },
    { term: 'Luật Phá sản', regex: /Luật Phá sản(?!.*Phục hồi)/i },
    { term: 'Nghị định 01/2021', regex: /01\/2021/i },
    { term: 'Luật Tổ chức Quốc hội 2014', regex: /Luật Tổ chức Quốc hội 2014/i },
    { term: 'tử hình', regex: /tử hình/i }
  ];

  console.log('--- SCANNING RESULTS FOR SECTION VIII.2 ---');
  for (const k of keywords) {
    const matched: { id: number; field: string; snippet: string }[] = [];
    allQuestions.forEach(q => {
      const texts = [
        { field: 'question', val: q.question },
        { field: 'options', val: q.options.join(' | ') },
        { field: 'explanation', val: q.explanation },
        { field: 'legalReference', val: q.legalReference || '' }
      ];
      texts.forEach(t => {
        if (k.regex.test(t.val)) {
          matched.push({ id: q.id, field: t.field, snippet: t.val });
        }
      });
    });
    console.log(`\n=== TỪ KHÓA: "${k.term}" (Tổng: ${matched.length}) ===`);
    matched.forEach(m => {
      console.log(`ID ${m.id} [${m.field}]: ${m.snippet.slice(0, 140)}...`);
    });
  }
}

main().catch(console.error);
