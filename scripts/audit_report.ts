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

  console.log('Total Questions:', allQuestions.length);

  // Group by chapter and difficulty
  const groups: Record<string, Question[]> = {};
  for (const q of allQuestions) {
    const key = `${q.chapterId}_${q.difficulty}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(q);
  }

  console.log('\n================ BẢNG KIỂM TRA MỤC VIII.1 THEO TỪNG CHƯƠNG ================');
  console.log('Chương_ĐộKhó    | Số câu | % Đáp án dài nhất (<=35%) | Chênh lệch độ dài (<=15%) | AvgC  | AvgW');
  console.log('---------------------------------------------------------------------------------------');
  
  let allPass = true;
  for (const [key, qGroup] of Object.entries(groups)) {
    const total = qGroup.length;
    let longestCount = 0;
    let cSum = 0;
    let wSum = 0;

    for (const q of qGroup) {
      const lens = q.options.map(o => o.length);
      const maxLen = Math.max(...lens);
      if (lens[q.correctAnswer] === maxLen) longestCount++;
      cSum += lens[q.correctAnswer];
      wSum += (lens.reduce((a, b) => a + b, 0) - lens[q.correctAnswer]) / 3;
    }

    const pctLongest = (longestCount / total) * 100;
    const avgC = cSum / total;
    const avgW = wSum / total;
    const diffPct = Math.abs(((avgC - avgW) / avgW) * 100);

    const passL = pctLongest <= 35.0;
    const passD = diffPct <= 15.0;
    if (!passL || !passD) allPass = false;

    console.log(
      `${key.padEnd(15)} | ${total.toString().padStart(6)} | ${pctLongest.toFixed(1).padStart(21)}% [${passL ? 'ĐẠT' : 'KHÔNG'}] | ${diffPct.toFixed(1).padStart(21)}% [${passD ? 'ĐẠT' : 'KHÔNG'}] | ${avgC.toFixed(1).padStart(5)} | ${avgW.toFixed(1).padStart(5)}`
    );
  }

  console.log('---------------------------------------------------------------------------------------');
  console.log('KẾT QUẢ ĐẠT CHUẨN TOÀN BỘ 21 BUCKET:', allPass ? 'ĐẠT 100%' : 'CẦN ĐIỀU CHỈNH');

  // Check forbidden phrases
  const forbidden = [
    /cả a và b/i,
    /cả a, b/i,
    /cả b và c/i,
    /cả a và c/i,
    /tất cả các ý trên/i,
    /tất cả các đáp án trên/i,
    /tất cả các phương án trên/i,
    /tất cả các trường hợp trên/i,
    /tất cả các phương án/i,
    /tất cả các nhận định trên/i,
    /cả ba thuộc tính trên/i,
    /cả 3 ý kiến trên/i,
    /cả ba ý trên/i,
    /đều đúng/i,
    /đều sai/i,
    /không có đáp án nào đúng/i,
    /không có phương án nào đúng/i
  ];
  let forbiddenHits = 0;
  for (const q of allQuestions) {
    for (const opt of q.options) {
      for (const p of forbidden) {
        if (p.test(opt)) {
          forbiddenHits++;
          console.log(`Cụm từ cấm: ID ${q.id} -> ${opt}`);
        }
      }
    }
  }
  console.log('Số phương án chứa cụm từ cấm:', forbiddenHits);

  // Check filler tails
  const fillers = [
    'theo các quy định hiện hành của pháp luật chuyên ngành',
    'theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành',
    'trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp quy định pháp luật',
    'trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp',
    'trừ trường hợp cơ quan nhà nước có thẩm quyền có quyết định khác',
    'theo quy định của pháp luật hiện hành và điều lệ áp dụng',
    'mà không cần phải có thêm văn bản chấp thuận của cơ quan quản lý nhà nước',
    'mà không cần có thêm văn bản thỏa thuận của các bên liên quan',
    'mà không cần có sự phê duyệt trước của cơ quan có thẩm quyền',
    'theo đúng trình tự và thỏa thuận ban đầu giữa các bên',
    'theo quy định của pháp luật có liên quan',
    'mà không cần ủy quyền',
    'phù hợp quy định pháp luật'
  ];
  let fillerHits = 0;
  for (const q of allQuestions) {
    for (const opt of q.options) {
      for (const f of fillers) {
        if (opt.toLowerCase().includes(f)) {
          fillerHits++;
          console.log(`Đuôi văn mẫu: ID ${q.id} -> ${opt}`);
        }
      }
    }
  }
  console.log('Số phương án chứa đuôi văn mẫu còn sót:', fillerHits);
}

main().catch(console.error);
