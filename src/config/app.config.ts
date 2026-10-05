import { ExamPreset } from '../types';

export const APP_CONFIG = {
  exam: {
    totalQuestions: 100,
    durationMinutes: 90, // 90 minutes
  },
  presets: [
    {
      id: 'all',
      name: 'Tổng hợp tất cả chương',
      description: 'Đề thi bao quát toàn bộ nội dung chương trình Pháp luật đại cương hiện có trong ngân hàng.',
      chapters: [1, 3, 4, 5, 6, 7, 9],
    },
    {
      id: 'state-and-law',
      name: 'Nhà nước và Pháp luật',
      description: 'Chuyên đề lý luận chung về Nhà nước và Pháp luật, Bộ máy Nhà nước CHXHCN Việt Nam.',
      chapters: [1, 3],
    },
    {
      id: 'civil-business',
      name: 'Luật Dân sự và Kinh doanh',
      description: 'Kiến thức cốt lõi về quan hệ dân sự, hợp đồng dân sự, quyền thừa kế và pháp luật kinh doanh thương mại.',
      chapters: [4, 5],
    },
    {
      id: 'criminal-marriage-labor',
      name: 'Hình sự, Hôn nhân gia đình, Lao động',
      description: 'Tổng hợp các quy định pháp luật thiết thực về phòng chống tội phạm, quan hệ gia đình và quan hệ lao động.',
      chapters: [6, 7, 9],
    },
  ] as ExamPreset[],
};
