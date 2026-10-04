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

// Clean up outdated keywords in any text
function cleanOutdatedKeywords(text: string): string {
  return text
    .replace(/Tòa án nhân dân cấp huyện/g, 'Tòa án nhân dân khu vực')
    .replace(/TAND cấp huyện/g, 'TAND khu vực')
    .replace(/TAND huyện/g, 'TAND khu vực')
    .replace(/TAND quận/g, 'TAND khu vực')
    .replace(/TAND thị xã/g, 'TAND khu vực')
    .replace(/Tòa án nhân dân cấp cao/g, 'Tòa phúc thẩm Tòa án nhân dân tối cao')
    .replace(/TAND cấp cao/g, 'Tòa phúc thẩm TAND tối cao')
    .replace(/Ủy ban nhân dân cấp huyện/g, 'Ủy ban nhân dân cấp cơ sở')
    .replace(/UBND cấp huyện/g, 'UBND cấp cơ sở')
    .replace(/HĐND cấp huyện/g, 'HĐND cấp cơ sở')
    .replace(/Chủ tịch UBND cấp huyện/g, 'Chủ tịch UBND cấp xã')
    .replace(/Luật Phá sản 2014/g, 'Luật Phục hồi, phá sản 2025')
    .replace(/Luật Phá sản/g, 'Luật Phục hồi, phá sản');
}

// 1. Process Exam Files
console.log('--- CLEANING EXAM FILES ---');
for (const f of examFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const jsonMatch = content.match(/export const exam\dQuestions: Question\[\] = (\[[\s\S]*\]);/);
  if (!jsonMatch) continue;
  const list: Question[] = JSON.parse(jsonMatch[1]);
  const updated = list.map(q => {
    const qCopy = { ...q };
    qCopy.question = cleanOutdatedKeywords(qCopy.question);
    qCopy.options = qCopy.options.map(o => cleanOutdatedKeywords(o)) as any;
    qCopy.explanation = cleanOutdatedKeywords(qCopy.explanation);
    if (qCopy.legalReference) qCopy.legalReference = cleanOutdatedKeywords(qCopy.legalReference);
    return qCopy;
  });
  const examName = path.basename(f, '.ts');
  const out = `import { Question } from '../types/quiz';\n\nexport const ${examName}Questions: Question[] = ${JSON.stringify(updated, null, 2)};\n`;
  fs.writeFileSync(f, out, 'utf8');
}

// 2. Process Bank Files
console.log('--- CLEANING BANK FILES ---');
for (const f of bankFiles) {
  const filePath = path.join(bankDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const jsonMatch = content.match(/const questions: Question\[\] = (\[[\s\S]*\]);\s*export default questions;/);
  if (!jsonMatch) continue;
  const list: Question[] = JSON.parse(jsonMatch[1]);
  const updated = list.map(q => {
    const qCopy = { ...q };
    qCopy.question = cleanOutdatedKeywords(qCopy.question);
    qCopy.options = qCopy.options.map(o => cleanOutdatedKeywords(o)) as any;
    qCopy.explanation = cleanOutdatedKeywords(qCopy.explanation);
    if (qCopy.legalReference) qCopy.legalReference = cleanOutdatedKeywords(qCopy.legalReference);

    // Specific replacements for 17113, 17132, 16035
    if (qCopy.id === 17113) {
      qCopy.question = 'Anh Long (quốc tịch Việt Nam) kết hôn với chị Anna (quốc tịch Pháp). Hai người cư trú tại Hà Nội. Cơ quan nào có thẩm quyền đăng ký kết hôn có yếu tố nước ngoài giữa anh Long và chị Anna theo quy định pháp luật hộ tịch hiện hành?';
      qCopy.options = [
        'Ủy ban nhân dân cấp tỉnh (hoặc cơ quan đăng ký hộ tịch có thẩm quyền theo phân cấp)',
        'Ủy ban nhân dân cấp xã nơi anh Long thường trú',
        'Sở Ngoại vụ thành phố Hà Nội',
        'Tòa án nhân dân thành phố Hà Nội'
      ];
      qCopy.correctAnswer = 0;
      qCopy.explanation = 'Theo quy định pháp luật hộ tịch hiện hành, thẩm quyền đăng ký hộ tịch có yếu tố nước ngoài thuộc Ủy ban nhân dân cấp tỉnh (hoặc cơ quan đăng ký hộ tịch có thẩm quyền theo quy định).';
      qCopy.legalReference = 'Luật Hộ tịch & Nghị định hướng dẫn thi hành';
    }
    if (qCopy.id === 17132) {
      qCopy.question = 'Anh Nam (quốc tịch Việt Nam) kết hôn với chị Maria (quốc tịch Nga) tại cơ quan có thẩm quyền của Liên bang Nga. Sau khi về Việt Nam sinh sống, hai người muốn quan hệ hôn nhân của mình được công nhận tại Việt Nam. Hai bên phải thực hiện thủ tục gì theo quy định pháp luật hộ tịch Việt Nam?';
      qCopy.options = [
        'Thực hiện thủ tục ghi chú kết hôn vào sổ hộ tịch tại cơ quan đăng ký hộ tịch có thẩm quyền nơi công dân Việt Nam cư trú',
        'Bắt buộc phải tổ chức lễ cưới lại tại quê hương Việt Nam theo các quy định hiện hành của pháp luật chuyên ngành',
        'Đăng ký lại kết hôn mới từ đầu tại UBND cấp xã theo các quy định hiện hành của pháp luật chuyên ngành',
        'Xin giấy phép đặc cách của Bộ Ngoại giao theo các quy định hiện hành của pháp luật chuyên ngành'
      ];
      qCopy.correctAnswer = 0;
      qCopy.explanation = 'Công dân Việt Nam kết hôn ở nước ngoài khi về Việt Nam sinh sống phải làm thủ tục ghi chú kết hôn vào sổ hộ tịch tại cơ quan có thẩm quyền theo quy định pháp luật hộ tịch.';
      qCopy.legalReference = 'Luật Hộ tịch, Điều 48';
    }
    if (qCopy.id === 16035) {
      qCopy.options = [
        'Thanh tra Chính phủ (đối với một số chức danh theo phân cấp) và Cơ quan kiểm soát tài sản thu nhập theo thẩm quyền của Đảng và Nhà nước',
        'Ủy ban nhân dân cấp cơ sở nơi công tác theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Viện kiểm sát nhân dân khu vực theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Mặt trận Tổ quốc Việt Nam cấp cơ sở theo quy định của pháp luật hiện hành và điều lệ áp dụng'
      ];
      qCopy.correctAnswer = 0;
    }
    if (qCopy.id === 19020) {
      qCopy.options = [
        'Hòa giải viên lao động; Hội đồng trọng tài lao động; Tòa án nhân dân',
        'Ủy ban Kiểm tra Đảng ủy cấp cơ sở theo quy định của pháp luật có liên quan',
        'Viện kiểm sát nhân dân khu vực theo quy định của pháp luật có liên quan',
        'Cơ quan Cảnh sát giao thông theo quy định của pháp luật có liên quan'
      ];
      qCopy.correctAnswer = 0;
    }
    if (qCopy.id === 19046) {
      qCopy.options = [
        'Người sử dụng lao động; người lao động bị xử lý kỷ luật; đại diện của tổ chức đại diện người lao động tại cơ sở mà người lao động là thành viên; người đại diện hợp pháp của người lao động (nếu có)',
        'Chủ tịch Ủy ban nhân dân cấp xã nơi công ty đặt trụ sở theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Toàn thể công nhân viên trong phân xưởng sản xuất theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Đại diện Viện kiểm sát nhân dân khu vực theo quy định của pháp luật hiện hành và điều lệ áp dụng'
      ];
      qCopy.correctAnswer = 0;
    }
    if (qCopy.id === 19087) {
      qCopy.options = [
        'Hoàn thành thủ tục xác nhận thời gian đóng bảo hiểm xã hội, bảo hiểm thất nghiệp và trả lại cùng với bản chính giấy tờ khác nếu đã giữ của người lao động',
        'Được giữ lại sổ bảo hiểm xã hội nếu người lao động còn nợ tiền công ty theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Hủy bỏ sổ bảo hiểm xã hội cũ để người lao động làm sổ mới ở nơi khác theo quy định của pháp luật hiện hành và điều lệ áp dụng',
        'Bàn giao sổ bảo hiểm xã hội cho cơ quan bảo hiểm lưu trữ theo quy định của pháp luật hiện hành và điều lệ áp dụng'
      ];
      qCopy.correctAnswer = 0;
    }
    if (qCopy.id === 19097) {
      qCopy.options = [
        'Tòa án nhân dân',
        'Ủy ban nhân dân cấp cơ sở',
        'Sở Lao động - Thương binh và Xã hội',
        'Hội đồng trọng tài thương mại quốc tế'
      ];
      qCopy.correctAnswer = 0;
    }

    return qCopy;
  });

  const out = `import type { Question } from '../../types/quiz';\n\nconst questions: Question[] = ${JSON.stringify(updated, null, 2)};\n\nexport default questions;\n`;
  fs.writeFileSync(filePath, out, 'utf8');
}

console.log('Master cleanup of outdated keywords complete!');
