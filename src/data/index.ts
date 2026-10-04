import { ExamSet, Question, ChapterId } from '../types/quiz';
import { exam1Questions } from './exam1';
import { exam2Questions } from './exam2';
import { exam3Questions } from './exam3';
import { exam4Questions } from './exam4';
import { exam5Questions } from './exam5';
import { CHAPTERS } from './chapters';
import { BANK, ALL_QUESTIONS, needsLockedOrder, validateBank } from './bank';

export { CHAPTERS } from './chapters';
export { BANK, ALL_QUESTIONS, needsLockedOrder, validateBank };

export const EXAM_SETS: ExamSet[] = [
  {
    id: 1,
    title: 'Bộ Đề 01: Chuẩn Đề Thi Mẫu Chính Thức',
    slug: 'de-thi-chuan-01',
    subtitle: 'Bao quát 7 chương trọng tâm - Chuẩn format 100 câu 90 phút',
    description: 'Bộ đề thi chuẩn cấu trúc đề thi kết thúc học phần Pháp luật đại cương (chương 1, 3, 4, 5, 6, 7, 9). Đầy đủ mức độ nhận biết và thông hiểu.',
    durationMinutes: 90,
    questionCount: 100,
    badge: 'Đề Chuẩn Số 1',
    questions: exam1Questions,
  },
  {
    id: 2,
    title: 'Bộ Đề 02: Trọng Tâm Ôn Thi Học Kỳ',
    slug: 'de-thi-trong-tam-02',
    subtitle: '100 câu hỏi then chốt, xác suất xuất hiện cực cao trong phòng thi',
    description: 'Tập trung vào các câu hỏi then chốt, bẫy trắc nghiệm hay gặp về cơ cấu cơ quan nhà nước, quyền sở hữu, thừa kế, pháp luật doanh nghiệp và hình sự.',
    durationMinutes: 90,
    questionCount: 100,
    badge: 'Đề Thi Thử Điểm Cao',
    questions: exam2Questions,
  },
  {
    id: 3,
    title: 'Bộ Đề 03: Nâng Cao & Phân Loại Điểm A/A+',
    slug: 'de-thi-nang-cao-03',
    subtitle: 'Nhiều câu hỏi tình huống thực tế và điều khoản luật chuyên sâu',
    description: 'Bộ câu hỏi nâng cao giúp sinh viên đạt điểm 9-10 (điểm A, A+), rèn luyện tư duy phân tích các vụ việc dân sự, lao động, hợp đồng và tham nhũng.',
    durationMinutes: 90,
    questionCount: 100,
    badge: 'Chinh Phục Điểm A',
    questions: exam3Questions,
  },
  {
    id: 4,
    title: 'Bộ Đề 04: Tình Huống & Vận Dụng Thực Hành',
    slug: 'de-thi-tinh-huong-04',
    subtitle: 'Các case study thực tiễn đời sống và doanh nghiệp thường gặp',
    description: 'Tập trung vào các câu hỏi vận dụng thực tế: phân chia thừa kế, xử lý kỷ luật lao động, giải quyết tranh chấp kinh doanh và điều kiện kết hôn/ly hôn.',
    durationMinutes: 90,
    questionCount: 100,
    badge: 'Tình Huống Thực Tế',
    questions: exam4Questions,
  },
  {
    id: 5,
    title: 'Bộ Đề 05: Tổng Hợp Toàn Diện Ngân Hàng Đề',
    slug: 'de-thi-tong-hop-05',
    subtitle: 'Rà soát toàn diện kiến thức trước khi bước vào phòng thi',
    description: 'Bộ đề tổng hợp hoàn chỉnh 100 câu hỏi kiểm tra độ vững chắc của toàn bộ kiến thức môn học theo văn bản pháp luật hiện hành mới nhất.',
    durationMinutes: 90,
    questionCount: 100,
    badge: 'Tổng Hợp Ôn Luyện',
    questions: exam5Questions,
  },
];

export function getExamById(id: number): ExamSet {
  const found = EXAM_SETS.find((e) => e.id === id);
  return found || EXAM_SETS[0];
}

export function getQuestionsByChapter(chapterId: ChapterId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.chapterId === chapterId);
}

export function getRandomExamQuestions(count = 100): Question[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
