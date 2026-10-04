import fs from 'fs';
import path from 'path';
import { exam1Questions } from '../src/data/exam1';
import { exam2Questions } from '../src/data/exam2';
import { exam3Questions } from '../src/data/exam3';
import { exam4Questions } from '../src/data/exam4';
import { exam5Questions } from '../src/data/exam5';
import { CHAPTERS } from '../src/data/chapters';
import { Question } from '../src/types/quiz';

const oldQuestions = [
  ...exam1Questions,
  ...exam2Questions,
  ...exam3Questions,
  ...exam4Questions,
  ...exam5Questions,
];

const bankDir = path.resolve('./src/data/bank');
const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort();

async function run() {
  const bankQuestions: Question[] = [];
  for (const file of bankFiles) {
    const mod = await import(path.join(bankDir, file));
    const qs = mod.default || mod.questions;
    bankQuestions.push(...qs);
  }
  const allQuestions = [...oldQuestions, ...bankQuestions];
  console.log(`Loaded ${allQuestions.length} total questions.`);

  // 1. Presets 1 to 5 check
  console.log('\n--- PRESETS 1 TO 5 ---');
  const presets = [
    { id: 'exam1', name: 'Đề Thi Số 01', list: exam1Questions },
    { id: 'exam2', name: 'Đề Thi Số 02', list: exam2Questions },
    { id: 'exam3', name: 'Đề Thi Số 03', list: exam3Questions },
    { id: 'exam4', name: 'Đề Thi Số 04', list: exam4Questions },
    { id: 'exam5', name: 'Đề Thi Số 05', list: exam5Questions },
  ];
  presets.forEach(p => {
    console.log(`${p.name}: ${p.list.length} câu hỏi`);
    if (p.list.length !== 100) throw new Error(`${p.name} không đủ 100 câu!`);
  });

  // 2. Test blueprint distribution for random exams
  console.log('\n--- RANDOM EXAM SIMULATION (BLUEPRINT) ---');
  // CHAPTER_BLUEPRINT from examBuilder:
  // ch1: { de: 5, tb: 6, vd: 3 } = 14
  // ch3: { de: 5, tb: 7, vd: 3 } = 15
  // ch4: { de: 5, tb: 6, vd: 3 } = 14
  // ch5: { de: 5, tb: 7, vd: 3 } = 15
  // ch6: { de: 5, tb: 7, vd: 3 } = 15
  // ch7: { de: 5, tb: 6, vd: 3 } = 14
  // ch9: { de: 5, tb: 6, vd: 2 } = 13
  // Total = 100
  const blueprint: Record<number, { de: number; tb: number; vd: number }> = {
    1: { de: 5, tb: 6, vd: 3 },
    3: { de: 5, tb: 7, vd: 3 },
    4: { de: 5, tb: 6, vd: 3 },
    5: { de: 5, tb: 7, vd: 3 },
    6: { de: 5, tb: 7, vd: 3 },
    7: { de: 5, tb: 6, vd: 3 },
    9: { de: 5, tb: 6, vd: 2 },
  };

  for (let sim = 1; sim <= 10; sim++) {
    const selected: Question[] = [];
    const usedIds = new Set<number>();

    for (const [chStr, req] of Object.entries(blueprint)) {
      const chId = Number(chStr);
      const chQuestions = allQuestions.filter(q => q.chapterId === chId);

      const dePool = chQuestions.filter(q => q.difficulty === 'dễ');
      const tbPool = chQuestions.filter(q => q.difficulty === 'trung bình');
      const vdPool = chQuestions.filter(q => q.difficulty === 'vận dụng');

      if (dePool.length < req.de || tbPool.length < req.tb || vdPool.length < req.vd) {
        throw new Error(`Chương ${chId} không đủ câu hỏi cho blueprint!`);
      }

      // Pick random
      const pick = (pool: Question[], count: number) => {
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        for (let i = 0; i < count; i++) {
          selected.push(shuffled[i]);
          usedIds.add(shuffled[i].id);
        }
      };

      pick(dePool, req.de);
      pick(tbPool, req.tb);
      pick(vdPool, req.vd);
    }

    if (selected.length !== 100 || usedIds.size !== 100) {
      throw new Error(`Random exam simulation ${sim} failed: length=${selected.length}, unique=${usedIds.size}`);
    }
  }
  console.log('10 random exam simulations passed: 100 unique questions each, matching blueprint perfectly!');

  // 3. Test Practice by Chapter
  console.log('\n--- PRACTICE BY CHAPTER ---');
  for (const ch of CHAPTERS) {
    const qs = allQuestions.filter(q => q.chapterId === ch.id);
    const de = qs.filter(q => q.difficulty === 'dễ').length;
    const tb = qs.filter(q => q.difficulty === 'trung bình').length;
    const vd = qs.filter(q => q.difficulty === 'vận dụng').length;
    console.log(`Chương ${ch.id} (${ch.name}): Tổng ${qs.length} câu (Dễ=${de}, TB=${tb}, VD=${vd})`);
    if (qs.length !== 200 || de !== 60 || tb !== 80 || vd !== 60) {
      throw new Error(`Chương ${ch.id} không đạt chuẩn 60/80/60!`);
    }
  }

  console.log('\n--- ALL EXAM BUILDER & PRACTICE CHECKS PASSED 100% ---');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
