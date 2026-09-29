import { Question } from '../types/quiz';

export const exam3Questions: Question[] = [
  // --- CHƯƠNG 1: NHỮNG VẤN ĐỀ CHUNG VỀ NHÀ NƯỚC VÀ PHÁP LUẬT (18 câu: 201 - 218) ---
  {
    id: 201,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Chức năng của Nhà nước được phân loại theo phạm vi hoạt động bao gồm hai chức năng cơ bản nào?',
    options: [
      'Chức năng đối nội và chức năng đối ngoại',
      'Chức năng kinh tế và chức năng chính trị',
      'Chức năng lập pháp và chức năng hành pháp',
      'Chức năng trấn áp và chức năng tổ chức'
    ],
    correctAnswer: 0,
    explanation: 'Căn cứ vào phạm vi hoạt động chủ yếu, chức năng của Nhà nước được chia thành Chức năng đối nội (hoạt động trong nước) và Chức năng đối ngoại (hoạt động trong quan hệ quốc tế).',
    legalReference: 'Lý luận chung về Chức năng của Nhà nước',
    difficulty: 'dễ'
  },
  {
    id: 202,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hình thức chính thể Cộng hòa đại nghị (Cộng hòa nghị viện) có đặc điểm nổi bật nào?',
    options: [
      'Chính phủ do Nghị viện thành lập và chịu trách nhiệm chính trị trước Nghị viện; Tổng thống chỉ giữ vai trò nguyên thủ danh nghĩa',
      'Tổng thống vừa là nguyên thủ quốc gia vừa đứng đầu Chính phủ, không chịu trách nhiệm trước Nghị viện',
      'Vua nắm toàn quyền hành pháp và tư pháp',
      'Không có Nghị viện hay cơ quan đại diện của nhân dân'
    ],
    correctAnswer: 0,
    explanation: 'Trong chính thể Cộng hòa đại nghị (như Đức, Ý, Ấn Độ), Nghị viện nắm quyền lực tối cao, Chính phủ hình thành từ đa số trong Nghị viện và chịu trách nhiệm trước Nghị viện, Tổng thống có quyền lực hạn chế mang tính tượng trưng.',
    legalReference: 'Lý luận về các dạng chính thể cộng hòa',
    difficulty: 'trung bình'
  },
  {
    id: 203,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hình thức chính thể Cộng hòa tổng thống (như Hoa Kỳ) có đặc điểm nào sau đây?',
    options: [
      'Tổng thống do cử tri bầu ra, vừa là nguyên thủ quốc gia vừa là người đứng đầu cơ quan hành pháp độc lập với Nghị viện',
      'Thủ tướng đứng đầu Chính phủ và do Nghị viện bãi nhiệm bất cứ lúc nào',
      'Tổng thống do Quốc hội chỉ định và phải thông qua mọi quyết định bổ nhiệm nội các',
      'Nghị viện có quyền giải tán Chính phủ bằng bỏ phiếu bất tín nhiệm thông thường'
    ],
    correctAnswer: 0,
    explanation: 'Chính thể Cộng hòa Tổng thống áp dụng tam quyền phân lập rõ rệt: Tổng thống do nhân dân (hoặc đại cử tri) bầu, là người đứng đầu nhánh hành pháp, không chịu trách nhiệm trước Nghị viện.',
    legalReference: 'Lý luận về Hình thức chính thể Cộng hòa Tổng thống',
    difficulty: 'trung bình'
  },
  {
    id: 204,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Tính quy phạm phổ biến của pháp luật thể hiện ở chỗ:',
    options: [
      'Pháp luật là khuôn mẫu, quy tắc xử sự chung, áp dụng cho nhiều lần, đối với nhiều chủ thể trên phạm vi toàn xã hội',
      'Pháp luật chỉ áp dụng cho một cá nhân cụ thể trong một lần duy nhất',
      'Pháp luật chỉ dành riêng cho tầng lớp trí thức và quan chức',
      'Quy phạm chỉ có giá trị bắt buộc khi được sự đồng ý của từng cá nhân'
    ],
    correctAnswer: 0,
    explanation: 'Tính quy phạm phổ biến (tính chuẩn mực chung) thể hiện ở việc pháp luật là khuôn mẫu chung được áp dụng lặp đi lặp lại nhiều lần đối với mọi chủ thể khi rơi vào điều kiện, hoàn cảnh mà quy phạm dự liệu.',
    legalReference: 'Đặc trưng của Pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 205,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Bộ phận "Chế tài" của quy phạm pháp luật nhằm mục đích gì?',
    options: [
      'Răn đe, giáo dục, trừng phạt và bảo đảm cho pháp luật được tôn trọng, thực hiện nghiêm minh',
      'Khen thưởng các cá nhân đạt thành tích cao',
      'Giải thích từ ngữ chuyên ngành trong điều luật',
      'Tạo điều kiện để người vi phạm trốn tránh trách nhiệm'
    ],
    correctAnswer: 0,
    explanation: 'Chế tài là bộ phận chỉ ra các biện pháp tác động mang tính cưỡng chế của Nhà nước nhằm trừng phạt, răn đe người vi phạm và phòng ngừa chung cho toàn xã hội.',
    legalReference: 'Cơ cấu Quy phạm pháp luật - Chế tài',
    difficulty: 'dễ'
  },
  {
    id: 206,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Quy chuẩn: "Mọi người có quyền tự do kinh doanh trong những ngành nghề mà luật không cấm" (Điều 33 Hiến pháp 2013) là quy phạm mang tính chất:',
    options: [
      'Quy phạm cho phép (trao quyền)',
      'Quy phạm cấm đoán',
      'Quy phạm bắt buộc thực hiện nghĩa vụ',
      'Quy phạm hình sự trừng trị'
    ],
    correctAnswer: 0,
    explanation: 'Quy phạm cho phép trao cho chủ thể quyền lựa chọn hành vi (được làm gì), ở đây trao quyền tự do kinh doanh trong các ngành nghề pháp luật không cấm.',
    legalReference: 'Điều 33 Hiến pháp 2013 & Phân loại Quy phạm pháp luật',
    difficulty: 'trung bình'
  },
  {
    id: 207,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hình thức thực hiện pháp luật nào là hình thức chủ thể kiềm chế KHÔNG LÀM những việc mà pháp luật cấm?',
    options: [
      'Tuân thủ pháp luật (Tuân thủ tiêu cực)',
      'Thi hành pháp luật',
      'Sử dụng pháp luật',
      'Áp dụng pháp luật'
    ],
    correctAnswer: 0,
    explanation: 'Tuân thủ pháp luật là hình thức thực hiện pháp luật thụ động, trong đó các chủ thể pháp luật kiềm chế không thực hiện những hành vi mà pháp luật nghiêm cấm (ví dụ: không buôn bán ma túy, không vượt đèn đỏ...).',
    legalReference: 'Bốn hình thức thực hiện pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 208,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hình thức thực hiện pháp luật nào là hình thức chủ thể thực hiện quyền của mình (làm những gì pháp luật cho phép)?',
    options: [
      'Sử dụng pháp luật',
      'Tuân thủ pháp luật',
      'Thi hành pháp luật',
      'Áp dụng pháp luật'
    ],
    correctAnswer: 0,
    explanation: 'Sử dụng pháp luật là việc các chủ thể thực hiện các quyền chủ thể của mình được pháp luật cho phép (như quyền khiếu nại, quyền đăng ký kinh doanh, quyền kết hôn...).',
    legalReference: 'Các hình thức thực hiện pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 209,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Nội dung của quan hệ pháp luật bao gồm hai yếu tố nào?',
    options: [
      'Quyền chủ thể và nghĩa vụ pháp lý của các bên tham gia',
      'Động cơ và mục đích của các bên',
      'Tài sản và đồ vật thuộc quyền sở hữu',
      'Địa điểm và thời gian giao kết'
    ],
    correctAnswer: 0,
    explanation: 'Nội dung của quan hệ pháp luật chính là Quyền chủ thể (những xử sự mà pháp luật cho phép chủ thể được hưởng) và Nghĩa vụ pháp lý (những xử sự bắt buộc mà chủ thể phải thực hiện).',
    legalReference: 'Cấu thành quan hệ pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 210,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Lỗi trong mặt chủ quan của vi phạm pháp luật được chia thành mấy loại?',
    options: [
      '4 loại: Cố ý trực tiếp, Cố ý gián tiếp, Vô ý vì quá tự tin, Vô ý do cẩu thả',
      '2 loại: Lỗi hình sự và Lỗi dân sự',
      '3 loại: Lỗi nặng, Lỗi vừa và Lỗi nhẹ',
      '1 loại duy nhất: Lỗi cố ý'
    ],
    correctAnswer: 0,
    explanation: 'Theo khoa học pháp lý, lỗi được chia thành 4 loại cụ thể: Cố ý trực tiếp, Cố ý gián tiếp, Vô ý vì quá tự tin, và Vô ý do cẩu thả.',
    legalReference: 'Lý luận về Lỗi trong vi phạm pháp luật',
    difficulty: 'trung bình'
  },
  {
    id: 211,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hình thức lỗi "Cố ý gián tiếp" là trường hợp người vi phạm:',
    options: [
      'Nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả có thể xảy ra, tuy không mong muốn nhưng có ý thức để mặc cho hậu quả xảy ra',
      'Hoàn toàn không biết hành vi của mình có hại',
      'Tin chắc rằng hậu quả sẽ không thể xảy ra do mình có tài năng đặc biệt',
      'Bị người khác ép buộc cầm tay ký giấy nợ'
    ],
    correctAnswer: 0,
    explanation: 'Lỗi cố ý gián tiếp: chủ thể nhận thức rõ hành vi nguy hiểm, thấy trước hậu quả, không mong muốn nhưng chấp nhận hoặc có ý thức để mặc cho hậu quả xảy ra.',
    legalReference: 'Khoản 2 Điều 10 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 212,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Vi phạm hành chính là hành vi có lỗi do cá nhân, tổ chức thực hiện, vi phạm quy định pháp luật về quản lý nhà nước mà:',
    options: [
      'Không phải là tội phạm và theo quy định của pháp luật phải bị xử phạt vi phạm hành chính',
      'Bắt buộc phải phạt tù từ 1 năm đến 3 năm',
      'Chỉ gây thiệt hại về mặt tinh thần',
      'Chỉ áp dụng riêng cho cán bộ công chức trong giờ làm việc'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 2 Luật Xử lý vi phạm hành chính 2012 quy định: Vi phạm hành chính là hành vi có lỗi do cá nhân, tổ chức thực hiện, vi phạm quy định về quản lý nhà nước mà không phải là tội phạm và phải bị xử phạt vi phạm hành chính.',
    legalReference: 'Điều 2 Luật Xử lý vi phạm hành chính 2012',
    difficulty: 'dễ'
  },
  {
    id: 213,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Vi phạm kỷ luật là hành vi có lỗi của đối tượng nào sau đây?',
    options: [
      'Cán bộ, công chức, viên chức, người lao động vi phạm các quy tắc, nội quy, quy chế làm việc của cơ quan, tổ chức, doanh nghiệp',
      'Bất kỳ người dân nào đi lại trên đường công cộng',
      'Người lái xe không có bằng lái xe',
      'Doanh nghiệp kinh doanh hàng giả'
    ],
    correctAnswer: 0,
    explanation: 'Vi phạm kỷ luật là hành vi có lỗi xâm hại trật tự nội bộ, kỷ luật lao động, quy chế làm việc trong cơ quan, trường học, doanh nghiệp do cán bộ, công chức, người lao động thực hiện.',
    legalReference: 'Phân loại vi phạm pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 214,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Văn bản quy phạm pháp luật có hiệu lực hồi tố (hiệu lực trở về trước) trong trường hợp nào sau đây?',
    options: [
      'Chỉ trong trường hợp thật cần thiết và quy định trách nhiệm pháp lý mới nhẹ hơn hoặc xóa bỏ trách nhiệm pháp lý cho chủ thể',
      'Quy định mức xử phạt nặng hơn đối với hành vi đã diễn ra trước đó',
      'Mọi văn bản đều mặc nhiên có hiệu lực hồi tố 1 năm',
      'Theo quyết định miệng của cơ quan điều tra'
    ],
    correctAnswer: 0,
    explanation: 'Điều 152 Luật Ban hành VBQPPL 2015: Chỉ trong trường hợp thật cần thiết để bảo đảm lợi ích chung; không được quy định hiệu lực trở về trước đối với trường hợp quy định trách nhiệm pháp lý mới nặng hơn.',
    legalReference: 'Điều 152 Luật Ban hành văn bản quy phạm pháp luật 2015',
    difficulty: 'trung bình'
  },
  {
    id: 215,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Mối quan hệ giữa Pháp luật và Kinh tế được thể hiện như thế nào?',
    options: [
      'Kinh tế quyết định pháp luật; pháp luật có tính độc lập tương đối và tác động trở lại mạnh mẽ đối với sự phát triển kinh tế',
      'Pháp luật hoàn toàn độc lập và không chịu bất kỳ tác động nào từ cơ sở hạ tầng kinh tế',
      'Pháp luật luôn luôn kìm hãm sự tăng trưởng kinh tế',
      'Kinh tế phụ thuộc hoàn toàn vào ý chí chủ quan của người soạn thảo luật'
    ],
    correctAnswer: 0,
    explanation: 'Theo triết học Mác - Lênin, cơ sở kinh tế quyết định kiến trúc thượng tầng pháp luật; ngược lại pháp luật phản ánh nhu cầu khách quan của nền kinh tế và thúc đẩy hoặc kìm hãm kinh tế phát triển.',
    legalReference: 'Mối quan hệ giữa Pháp luật và Kinh tế',
    difficulty: 'trung bình'
  },
  {
    id: 216,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Hệ thống pháp luật của một quốc gia bao gồm hai mặt thống nhất là gì?',
    options: [
      'Hệ thống cấu trúc bên trong (ngành luật, chế định, QPPL) và Hệ thống văn bản quy phạm pháp luật bên ngoài',
      'Luật trong nước và Luật nước ngoài',
      'Luật dân sự và Luật hình sự',
      'Quy phạm đạo đức và Quy phạm tôn giáo'
    ],
    correctAnswer: 0,
    explanation: 'Hệ thống pháp luật gồm hai mặt: Cấu trúc bên trong (gồm các quy phạm pháp luật, chế định pháp luật, ngành luật) và Hình thức biểu hiện bên ngoài (hệ thống các văn bản quy phạm pháp luật).',
    legalReference: 'Khái niệm Hệ thống pháp luật',
    difficulty: 'trung bình'
  },
  {
    id: 217,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Căn cứ để phân định một ngành luật độc lập trong hệ thống pháp luật Việt Nam là gì?',
    options: [
      'Đối tượng điều chỉnh và phương pháp điều chỉnh của ngành luật đó',
      'Số lượng điều luật của bộ luật',
      'Cơ quan ký ban hành bộ luật',
      'Thời gian tồn tại của ngành luật trong lịch sử'
    ],
    correctAnswer: 0,
    explanation: 'Đối tượng điều chỉnh (nhóm quan hệ xã hội cùng loại) và Phương pháp điều chỉnh (cách thức tác động) là hai tiêu chuẩn cơ bản để phân định các ngành luật độc lập.',
    legalReference: 'Cơ cấu hệ thống pháp luật',
    difficulty: 'dễ'
  },
  {
    id: 218,
    chapterId: 1,
    chapterName: 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật',
    question: 'Pháp luật xã hội chủ nghĩa thể hiện ý chí của ai?',
    options: [
      'Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản',
      'Giai cấp tư sản nắm tư liệu sản xuất',
      'Tầng lớp quý tộc và tăng lữ',
      'Chỉ riêng các đại biểu Quốc hội'
    ],
    correctAnswer: 0,
    explanation: 'Pháp luật XHCN thể hiện ý chí của giai cấp công nhân và nhân dân lao động, do Đảng Cộng sản lãnh đạo, nhằm xây dựng một xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
    legalReference: 'Bản chất giai cấp của Pháp luật XHCN',
    difficulty: 'dễ'
  },

  // --- CHƯƠNG 3: BỘ MÁY NHÀ NƯỚC CỘNG HOÀ XHCN VIỆT NAM (18 câu: 219 - 236) ---
  {
    id: 219,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Cơ quan nào có thẩm quyền ban hành Hiến pháp và sửa đổi Hiến pháp nước CHXHCN Việt Nam?',
    options: [
      'Chỉ duy nhất Quốc hội mới có quyền làm Hiến pháp và sửa đổi Hiến pháp',
      'Chính phủ',
      'Chủ tịch nước phối hợp với TANDTC',
      'Ban Tuyên giáo Trung ương'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 70 và Điều 120 Hiến pháp 2013 quy định: Quốc hội làm Hiến pháp và sửa đổi Hiến pháp; việc sửa đổi Hiến pháp phải được ít nhất 2/3 tổng số đại biểu Quốc hội biểu quyết tán thành.',
    legalReference: 'Điều 70 & Điều 120 Hiến pháp 2013',
    difficulty: 'dễ'
  },
  {
    id: 220,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Để một dự án Luật được Quốc hội thông qua, tỷ lệ đại biểu Quốc hội biểu quyết tán thành tối thiểu thông thường là bao nhiêu?',
    options: [
      'Quá nửa (trên 50%) tổng số đại biểu Quốc hội biểu quyết tán thành',
      '100% đại biểu có mặt',
      'Ít nhất 2/3 tổng số đại biểu Quốc hội',
      'Chỉ cần 1/3 đại biểu tham gia phiên họp'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 85 Hiến pháp 2013: Luật, nghị quyết của Quốc hội phải được quá nửa tổng số đại biểu Quốc hội biểu quyết tán thành (trừ trường hợp sửa đổi Hiến pháp, rút ngắn/kéo dài nhiệm kỳ Quốc hội... cần ít nhất 2/3).',
    legalReference: 'Điều 85 Hiến pháp 2013',
    difficulty: 'trung bình'
  },
  {
    id: 221,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Ai là người đứng đầu và lãnh đạo công tác của Ủy ban Thường vụ Quốc hội?',
    options: [
      'Chủ tịch Quốc hội',
      'Chủ tịch nước',
      'Tổng Bí thư',
      'Thủ tướng Chính phủ'
    ],
    correctAnswer: 0,
    explanation: 'Điều 73 Hiến pháp 2013: Ủy ban thường vụ Quốc hội gồm Chủ tịch Quốc hội, các Phó Chủ tịch Quốc hội và các Ủy viên. Chủ tịch Quốc hội lãnh đạo công tác của Ủy ban thường vụ Quốc hội.',
    legalReference: 'Điều 73 Hiến pháp 2013',
    difficulty: 'dễ'
  },
  {
    id: 222,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Cơ quan nào có thẩm quyền giải thích Hiến pháp, luật, pháp lệnh?',
    options: [
      'Ủy ban Thường vụ Quốc hội',
      'Tòa án nhân dân tối cao',
      'Bộ Tư pháp',
      'Viện Hàn lâm Khoa học Xã hội'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 74 Hiến pháp 2013 quy định Ủy ban thường vụ Quốc hội có nhiệm vụ và quyền hạn: "Giải thích Hiến pháp, luật, pháp lệnh".',
    legalReference: 'Khoản 2 Điều 74 Hiến pháp 2013',
    difficulty: 'trung bình'
  },
  {
    id: 223,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Thủ tướng Chính phủ chịu trách nhiệm trước cơ quan nào về hoạt động của Chính phủ và hệ thống hành chính nhà nước?',
    options: [
      'Trước Quốc hội (và trước UBTVQH, Chủ tịch nước trong thời gian Quốc hội không họp)',
      'Trước Tòa án nhân dân tối cao',
      'Trước Hội đồng nhân dân các tỉnh',
      'Trước Ban Thư ký Liên hợp quốc'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 98 Hiến pháp 2013: Thủ tướng Chính phủ chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ và những nhiệm vụ được giao; báo cáo công tác của Chính phủ trước Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước.',
    legalReference: 'Điều 98 Hiến pháp 2013',
    difficulty: 'trung bình'
  },
  {
    id: 224,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Văn bản quy phạm pháp luật do Bộ trưởng, Thủ trưởng cơ quan ngang bộ ban hành là:',
    options: [
      'Thông tư',
      'Nghị định',
      'Pháp lệnh',
      'Luật'
    ],
    correctAnswer: 0,
    explanation: 'Điều 4 Luật Ban hành văn bản quy phạm pháp luật 2015 quy định Bộ trưởng, Thủ trưởng cơ quan ngang bộ ban hành Thông tư.',
    legalReference: 'Điều 4 Luật Ban hành văn bản quy phạm pháp luật 2015',
    difficulty: 'dễ'
  },
  {
    id: 225,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Trong hệ thống cơ quan nhà nước, Viện kiểm sát nhân dân có quan hệ chỉ đạo, điều hành như thế nào?',
    options: [
      'Tập trung, thống nhất lãnh đạo trong ngành: Viện kiểm sát cấp dưới chịu sự lãnh đạo của Viện kiểm sát cấp trên và Viện kiểm sát các cấp chịu sự lãnh đạo thống nhất của Viện trưởng VKSNDTC',
      'Viện kiểm sát cấp huyện chịu sự chỉ đạo của UBND cấp huyện',
      'Viện kiểm sát độc lập hoàn toàn với Viện kiểm sát cấp trên',
      'Chỉ đạo ngang từ Tòa án cùng cấp'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 109 Hiến pháp 2013: Viện kiểm sát nhân dân do Viện trưởng lãnh đạo. Viện trưởng Viện kiểm sát cấp dưới chịu sự lãnh đạo của Viện trưởng Viện kiểm sát cấp trên. Viện trưởng các Viện kiểm sát chịu sự lãnh đạo thống nhất của Viện trưởng VKSNDTC.',
    legalReference: 'Điều 109 Hiến pháp 2013 & Luật Tổ chức VKSND',
    difficulty: 'trung bình'
  },
  {
    id: 226,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Ai bổ nhiệm, miễn nhiệm, cách chức Thẩm phán Tòa án nhân dân tối cao?',
    options: [
      'Quốc hội phê chuẩn theo đề nghị của Chánh án TANDTC và Chủ tịch nước ra quyết định bổ nhiệm, miễn nhiệm, cách chức',
      'Thủ tướng Chính phủ trực tiếp bổ nhiệm',
      'Bộ trưởng Bộ Tư pháp quyết định',
      'Hội đồng nhân dân cấp tỉnh phê duyệt'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 7 Điều 70 và Khoản 3 Điều 88 Hiến pháp 2013: Quốc hội phê chuẩn đề nghị bổ nhiệm, miễn nhiệm, cách chức Thẩm phán TAND tối cao; Chủ tịch nước ra quyết định bổ nhiệm, miễn nhiệm, cách chức.',
    legalReference: 'Điều 70, Điều 88 Hiến pháp 2013',
    difficulty: 'vận dụng'
  },
  {
    id: 227,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Chế định Hội thẩm nhân dân tham gia xét xử tại Tòa án thể hiện nguyên tắc hiến định nào?',
    options: [
      'Nguyên tắc Nhân dân tham gia quản lý nhà nước và hoạt động xét xử của Tòa án',
      'Nguyên tắc tiết kiệm ngân sách chi tiêu tư pháp',
      'Nguyên tắc phân chia theo dòng tộc địa phương',
      'Nguyên tắc bí mật quân sự'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 103 Hiến pháp 2013: "Việc xét xử sơ thẩm của Tòa án nhân dân có Hội thẩm tham gia, trừ trường hợp xét xử theo thủ tục rút gọn". Đây là biểu hiện sâu sắc của quyền làm chủ của Nhân dân trong hoạt động tư pháp.',
    legalReference: 'Điều 103 Hiến pháp 2013',
    difficulty: 'dễ'
  },
  {
    id: 228,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Khi xét xử, Hội thẩm nhân dân có quyền biểu quyết ngang quyền với Thẩm phán đúng hay sai?',
    options: [
      'Đúng, Hội thẩm nhân dân ngang quyền với Thẩm phán khi biểu quyết giải quyết vụ án',
      'Sai, ý kiến của Thẩm phán luôn có giá trị gấp đôi',
      'Sai, Hội thẩm nhân dân chỉ ngồi nghe và không được phát biểu',
      'Chỉ ngang quyền trong các vụ án ly hôn'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 103 Hiến pháp 2013 và Luật Tổ chức Tòa án nhân dân khẳng định khi biểu quyết quyết định bản án, Hội thẩm ngang quyền với Thẩm phán (nguyên tắc thiểu số phục tùng đa số).',
    legalReference: 'Điều 103 Hiến pháp 2013 & Luật Tổ chức TAND',
    difficulty: 'trung bình'
  },
  {
    id: 229,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Hội đồng nhân dân quyết định các vấn đề quan trọng của địa phương bằng hình thức nào?',
    options: [
      'Ban hành Nghị quyết và biểu quyết theo đa số',
      'Chủ tịch HĐND ra chỉ thị riêng',
      'Lấy ý kiến biểu quyết trên mạng xã hội',
      'Giao toàn quyền cho Chủ tịch UBND quyết định'
    ],
    correctAnswer: 0,
    explanation: 'Điều 113 Hiến pháp 2013 và Luật Tổ chức CQĐP: HĐND quyết định các biện pháp quan trọng ở địa phương bằng việc ban hành Nghị quyết tại kỳ họp.',
    legalReference: 'Điều 113 Hiến pháp 2013',
    difficulty: 'dễ'
  },
  {
    id: 230,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Đơn vị hành chính của nước CHXHCN Việt Nam được phân chia như thế nào theo Điều 110 Hiến pháp 2013?',
    options: [
      'Tỉnh, thành phố trực thuộc trung ương; Huyện, quận, thị xã, thành phố thuộc tỉnh; Xã, phường, thị trấn; Đơn vị hành chính - kinh tế đặc biệt',
      'Chỉ có cấp Trung ương và cấp Tỉnh',
      'Khu tự trị, Tiểu bang và Đặc khu quân sự',
      'Vùng kinh tế trọng điểm và các thị xã'
    ],
    correctAnswer: 0,
    explanation: 'Điều 110 Hiến pháp 2013 phân chia: Tỉnh, thành phố trực thuộc trung ương; cấp huyện/quận/thị xã/thành phố thuộc tỉnh/thành phố trực thuộc thành phố trung ương; cấp xã/phường/thị trấn; và Đơn vị hành chính - kinh tế đặc biệt do Quốc hội thành lập.',
    legalReference: 'Điều 110 Hiến pháp 2013',
    difficulty: 'dễ'
  },
  {
    id: 231,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Thủ tướng Chính phủ có thẩm quyền phê chuẩn kết quả bầu, miễn nhiệm, bãi nhiệm đối với chức danh nào?',
    options: [
      'Chủ tịch, Phó Chủ tịch Ủy ban nhân dân cấp tỉnh',
      'Chủ tịch Hội đồng nhân dân cấp huyện',
      'Viện trưởng Viện kiểm sát nhân dân cấp tỉnh',
      'Chánh án Tòa án nhân dân cấp tỉnh'
    ],
    correctAnswer: 0,
    explanation: 'Điểm đ Khoản 2 Điều 28 Luật Tổ chức Chính phủ 2015: Thủ tướng Chính phủ có quyền phê chuẩn việc bầu, miễn nhiệm và quyết định điều động, đình chỉ công tác, cách chức Chủ tịch, Phó Chủ tịch UBND cấp tỉnh.',
    legalReference: 'Luật Tổ chức Chính phủ 2015 & Điều 98 Hiến pháp 2013',
    difficulty: 'trung bình'
  },
  {
    id: 232,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Quyền Trưng cầu ý dân (Điều 29 Hiến pháp 2013) do cơ quan nào quyết định việc tổ chức thực hiện?',
    options: [
      'Quốc hội',
      'Chính phủ',
      'Bộ Công an',
      'Ban Tôn giáo Chính phủ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 15 Điều 70 Hiến pháp 2013 quy định Quốc hội có quyền: "Quyết định trưng cầu ý dân".',
    legalReference: 'Khoản 15 Điều 70 Hiến pháp 2013 & Luật Trưng cầu ý dân',
    difficulty: 'trung bình'
  },
  {
    id: 233,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Cơ quan nào là cơ quan thường trực của Hội đồng nhân dân cấp tỉnh, cấp huyện?',
    options: [
      'Thường trực Hội đồng nhân dân',
      'Ủy ban nhân dân cùng cấp',
      'Ban Thanh tra nhân dân',
      'Văn phòng Đoàn Đại biểu Quốc hội'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức chính quyền địa phương, Thường trực HĐND là cơ quan thường trực của HĐND, thực hiện các nhiệm vụ, quyền hạn theo quy định giữa hai kỳ họp HĐND.',
    legalReference: 'Luật Tổ chức chính quyền địa phương 2015',
    difficulty: 'dễ'
  },
  {
    id: 234,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Viện trưởng Viện kiểm sát nhân dân tối cao do cơ quan nào bầu, miễn nhiệm, bãi nhiệm?',
    options: [
      'Quốc hội bầu, miễn nhiệm, bãi nhiệm theo đề nghị của Chủ tịch nước',
      'Thủ tướng Chính phủ bổ nhiệm',
      'Bộ trưởng Bộ Công an bổ nhiệm',
      'Ủy ban Thường vụ Quốc hội tự quyết định'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 7 Điều 70 và Khoản 3 Điều 88 Hiến pháp 2013: Chủ tịch nước đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Viện trưởng VKSND tối cao.',
    legalReference: 'Điều 70 & Điều 88 Hiến pháp 2013',
    difficulty: 'trung bình'
  },
  {
    id: 235,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Quyền công tố của Viện kiểm sát nhân dân là quyền gì?',
    options: [
      'Quyền nhân danh Nhà nước truy cứu trách nhiệm hình sự người phạm tội, thực hiện từ khi giải quyết tố giác tội phạm đến khi xét xử xong vụ án hình sự',
      'Quyền đại diện giải quyết mọi tranh chấp thừa kế đất đai cho dân',
      'Quyền kiểm tra ngân sách doanh nghiệp tư nhân',
      'Quyền tuyên án tử hình không cần mở phiên tòa'
    ],
    correctAnswer: 0,
    explanation: 'Điều 3 Luật Tổ chức VKSND: Quyền công tố là quyền của Nhà nước do VKSND thực hành để buộc tội người phạm tội tại phiên tòa, điều tra, truy tố người phạm tội ra trước Tòa án.',
    legalReference: 'Điều 3 Luật Tổ chức Viện kiểm sát nhân dân 2014',
    difficulty: 'trung bình'
  },
  {
    id: 236,
    chapterId: 3,
    chapterName: 'Chương 3: Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam',
    question: 'Mặt trận Tổ quốc Việt Nam có vai trò chính trị - xã hội như thế nào trong bộ máy và đời sống nhà nước?',
    options: [
      'Là cơ sở chính trị của chính quyền nhân dân; đại diện, bảo vệ quyền lợi hợp pháp của Nhân dân; thực hiện giám sát và phản biện xã hội',
      'Là cơ quan có quyền ban hành các nghị định xử phạt vi phạm hành chính',
      'Là cơ quan xét xử các vụ án hành chính',
      'Là đơn vị kinh doanh thương mại độc quyền của Nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Điều 9 Hiến pháp 2013: Mặt trận Tổ quốc Việt Nam là cơ sở chính trị của chính quyền nhân dân, tập hợp khối đại đoàn kết toàn dân, thực hiện giám sát, phản biện xã hội và tham gia xây dựng Đảng, Nhà nước.',
    legalReference: 'Điều 9 Hiến pháp 2013',
    difficulty: 'dễ'
  },

  // --- CHƯƠNG 4: LUẬT DÂN SỰ VÀ TỐ TỤNG DÂN SỰ (18 câu: 237 - 254) ---
  {
    id: 237,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Theo Bộ luật Dân sự 2015, Tòa án tuyên bố một người "Mất tích" khi người đó biệt tích bao lâu và có yêu cầu của người có quyền, lợi ích liên quan?',
    options: [
      'Biệt tích 02 năm liền trở lên dù đã áp dụng đầy đủ các biện pháp thông báo tìm kiếm theo quy định',
      'Biệt tích 06 tháng',
      'Biệt tích 01 năm',
      'Biệt tích 05 năm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 68 BLDS 2015: Khi một người biệt tích 02 năm liền trở lên, mặc dù đã áp dụng đầy đủ các biện pháp thông báo tìm kiếm... thì theo yêu cầu của người có quyền, lợi ích liên quan, Tòa án có thể tuyên bố người đó mất tích.',
    legalReference: 'Điều 68 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 238,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Tòa án tuyên bố một người "Là đã chết" trong trường hợp người đó biệt tích bao nhiêu năm liền trở lên sau khi quyết định tuyên bố mất tích có hiệu lực?',
    options: [
      '03 năm liền trở lên',
      '01 năm',
      '02 năm',
      '05 năm'
    ],
    correctAnswer: 0,
    explanation: 'Điểm a Khoản 1 Điều 71 BLDS 2015: Sau 03 năm, kể từ ngày quyết định tuyên bố mất tích của Tòa án có hiệu lực pháp luật mà vẫn không có tin tức xác thực là còn sống thì Tòa án tuyên bố người đó là đã chết.',
    legalReference: 'Điều 71 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 239,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Chiếm hữu có căn cứ pháp luật là việc chiếm hữu tài sản trong trường hợp nào sau đây?',
    options: [
      'Chủ sở hữu chiếm hữu tài sản của chính mình; người được chủ sở hữu ủy quyền quản lý tài sản; người được chuyển giao quyền chiếm hữu qua giao dịch hợp pháp',
      'Người nhặt được của rơi giấu kín không báo cho công an',
      'Người mua phải tài sản do người khác trộm cắp mà biết rõ nguồn gốc bất hợp pháp',
      'Người tự ý phá khóa nhà hoang vào ở'
    ],
    correctAnswer: 0,
    explanation: 'Điều 165 BLDS 2015 liệt kê các trường hợp chiếm hữu có căn cứ pháp luật: chủ sở hữu, người được ủy quyền, người được chuyển giao qua giao dịch hợp pháp, người phát hiện tài sản vô chủ/bị đánh rơi đúng thủ tục luật định...',
    legalReference: 'Điều 165 Bộ luật Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 240,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Hợp đồng dân sự vô hiệu do bị lừa dối, đe dọa, cưỡng ép là hợp đồng mà trong đó:',
    options: [
      'Một bên tham gia giao dịch do bị lừa dối (hành vi cố ý làm sai lệch thông tin) hoặc bị đe dọa, cưỡng ép làm mất đi sự tự nguyện thực sự',
      'Hai bên hoàn toàn tự nguyện thỏa thuận giá bán hàng',
      'Hợp đồng được công chứng tại phòng công chứng nhà nước',
      'Hợp đồng tặng cho tài sản giữa cha mẹ và con cái'
    ],
    correctAnswer: 0,
    explanation: 'Điều 127 BLDS 2015: Khi một bên tham gia giao dịch dân sự do bị lừa dối hoặc bị đe dọa, cưỡng ép thì có quyền yêu cầu Tòa án tuyên bố giao dịch dân sự đó là vô hiệu.',
    legalReference: 'Điều 127 Bộ luật Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 241,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Hậu quả pháp lý của giao dịch dân sự vô hiệu theo Điều 131 Bộ luật Dân sự 2015 là:',
    options: [
      'Không làm phát sinh, thay đổi, chấm dứt quyền, nghĩa vụ dân sự của các bên kể từ thời điểm giao dịch được xác lập; các bên khôi phục lại tình trạng ban đầu, hoàn trả cho nhau những gì đã nhận',
      'Bên có lỗi phải đi tù 2 năm',
      'Hợp đồng vẫn tiếp tục có hiệu lực một nửa',
      'Tài sản của hai bên tự động sung công quỹ nhà nước trong mọi trường hợp'
    ],
    correctAnswer: 0,
    explanation: 'Điều 131 BLDS 2015: Giao dịch vô hiệu không làm phát sinh quyền nghĩa vụ từ lúc xác lập; các bên hoàn trả cho nhau những gì đã nhận; bên có lỗi gây thiệt hại thì phải bồi thường.',
    legalReference: 'Điều 131 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 242,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Biện pháp bảo đảm "Bảo lãnh" là việc:',
    options: [
      'Người thứ ba cam kết với bên có quyền sẽ thực hiện nghĩa vụ thay cho bên có nghĩa vụ, nếu khi đến thời hạn mà bên được bảo lãnh không thực hiện hoặc thực hiện không đúng nghĩa vụ',
      'Bên có nghĩa vụ giao nợ một khoản tiền vào tài khoản phong tỏa',
      'Chủ nợ giữ giấy khai sinh của con nợ',
      'Ký hợp đồng chuyển nhượng quyền sử dụng đất ngay lập tức'
    ],
    correctAnswer: 0,
    explanation: 'Điều 335 BLDS 2015: Bảo lãnh là việc người thứ ba (bên bảo lãnh) cam kết với bên có quyền (bên nhận bảo lãnh) sẽ thực hiện nghĩa vụ thay cho bên có nghĩa vụ (bên được bảo lãnh), nếu khi đến thời hạn mà bên được bảo lãnh không thực hiện hoặc thực hiện không đúng nghĩa vụ.',
    legalReference: 'Điều 335 Bộ luật Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 243,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Người từ đủ 15 tuổi đến chưa đủ 18 tuổi có quyền lập di chúc hay không?',
    options: [
      'Có quyền lập di chúc nếu được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc và di chúc phải được lập thành văn bản',
      'Tuyệt đối không được quyền lập di chúc trong mọi trường hợp',
      'Được tự do lập di chúc miệng mà không cần ai đồng ý',
      'Chỉ được lập di chúc khi đã lập gia đình'
    ],
    correctAnswer: 0,
    explanation: 'Điểm b Khoản 1 Điều 625 và Khoản 2 Điều 630 BLDS 2015: Người từ đủ mười lăm tuổi đến chưa đủ mười tám tuổi được lập di chúc, nếu được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc và di chúc phải lập thành văn bản.',
    legalReference: 'Điều 625 & Điều 630 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 244,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Trường hợp di chúc bằng văn bản không có người làm chứng thì chỉ được coi là hợp pháp khi nào?',
    options: [
      'Người lập di chúc phải tự viết và ký tên vào bản di chúc, đáp ứng đủ các điều kiện luật định',
      'Được đánh máy trên máy vi tính có chèn ảnh chân dung',
      'Có người hàng xóm cất giữ hộ',
      'Được đăng tải lên trang mạng xã hội cá nhân'
    ],
    correctAnswer: 0,
    explanation: 'Điều 633 BLDS 2015: Người lập di chúc phải tự viết và ký vào bản di chúc. Việc lập di chúc bằng văn bản không có người làm chứng phải tuân theo quy định tại Điều 631 của Bộ luật này.',
    legalReference: 'Điều 633 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 245,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Ai sau đây KHÔNG THỂ là người làm chứng cho việc lập di chúc?',
    options: [
      'Người thừa kế theo di chúc hoặc theo pháp luật của người lập di chúc; người có quyền tài sản liên quan; người chưa thành niên, người mất năng lực hành vi dân sự',
      'Cán bộ hưu trí trong khu dân cư không có quan hệ thừa kế',
      'Luật sư không có quyền lợi liên quan đến khối di sản',
      'Bác sĩ điều trị không có quan hệ họ hàng hay thừa kế'
    ],
    correctAnswer: 0,
    explanation: 'Điều 632 BLDS 2015: Mọi người đều có thể làm chứng cho việc lập di chúc, trừ: Người thừa kế theo di chúc hoặc theo pháp luật của người lập di chúc; Người có quyền, nghĩa vụ tài sản liên quan; Người chưa thành niên, người mất NLHVDS...',
    legalReference: 'Điều 632 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 246,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Thừa kế theo pháp luật được áp dụng trong trường hợp nào sau đây?',
    options: [
      'Không có di chúc; di chúc không hợp pháp; những người thừa kế theo di chúc chết trước hoặc chết cùng thời điểm với người lập di chúc; người được chỉ định không có quyền hưởng di sản hoặc từ chối nhận',
      'Khi người để lại di sản có di chúc hợp pháp chia cho con ruột',
      'Khi người lập di chúc đã gửi gắm toàn bộ tài sản tại ngân hàng thụy sĩ',
      'Khi các con không muốn nhận tài sản'
    ],
    correctAnswer: 0,
    explanation: 'Điều 650 BLDS 2015 quy định các trường hợp thừa kế theo pháp luật: không có di chúc; di chúc không hợp pháp; người thừa kế chết trước/cùng thời điểm; cơ quan tổ chức thừa kế không còn tồn tại...',
    legalReference: 'Điều 650 Bộ luật Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 247,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Những người thuộc hàng thừa kế sau chỉ được hưởng thừa kế khi nào?',
    options: [
      'Khi không còn ai ở hàng thừa kế trước do đã chết, không có quyền hưởng di sản, bị truất quyền thừa kế hoặc từ chối nhận di sản',
      'Khi hàng thừa kế trước đồng ý nhường 10% di sản',
      'Bất cứ lúc nào họ có hoàn cảnh khó khăn hơn',
      'Theo quyết định của cơ quan bảo hiểm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 651 BLDS 2015: Những người ở hàng thừa kế sau chỉ được hưởng thừa kế, nếu không còn ai ở hàng thừa kế trước do đã chết, không có quyền hưởng di sản, bị truất quyền hưởng di sản hoặc từ chối nhận di sản.',
    legalReference: 'Điều 651 Bộ luật Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 248,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Tài sản vô chủ, tài sản không xác định được chủ sở hữu sau thời hạn thông báo tìm kiếm (01 năm đối với động sản, 05 năm đối với bất động sản) thì:',
    options: [
      'Động sản thuộc về người phát hiện quản lý; bất động sản thuộc về Nhà nước',
      'Tất cả thuộc về người phát hiện',
      'Tất cả thuộc về Ủy ban Mặt trận Tổ quốc',
      'Bị bán đấu giá chia tiền cho người nghèo trong xã'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 228 BLDS 2015: Sau 01 năm thông báo công khai mà không xác định được chủ sở hữu là ai thì động sản thuộc về người phát hiện; sau 05 năm thì bất động sản thuộc về Nhà nước.',
    legalReference: 'Điều 228 Bộ luật Dân sự 2015',
    difficulty: 'vận dụng'
  },
  {
    id: 249,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Nghĩa vụ bồi thường thiệt hại do người chưa đủ 15 tuổi gây ra được thực hiện như thế nào?',
    options: [
      'Cha, mẹ phải bồi thường toàn bộ thiệt hại; nếu tài sản của cha mẹ không đủ mà con chưa thành niên có tài sản riêng thì lấy tài sản đó để bồi thường phần còn thiếu',
      'Đứa trẻ phải tự đi làm thuê để trả nợ',
      'Nhà nước bồi thường thay hoàn toàn',
      'Người bị thiệt hại phải tự gánh chịu không được đòi bồi thường'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 586 BLDS 2015: Người chưa đủ mười lăm tuổi gây thiệt hại mà còn cha, mẹ thì cha, mẹ phải bồi thường toàn bộ; nếu tài sản cha mẹ không đủ mà con có tài sản riêng thì lấy tài sản riêng của con để bồi thường phần còn thiếu.',
    legalReference: 'Điều 586 Bộ luật Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 250,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Trong vụ án dân sự, "Bị đơn" là ai?',
    options: [
      'Người bị nguyên đơn khởi kiện hoặc bị cơ quan, tổ chức khác khởi kiện yêu cầu Tòa án giải quyết vụ án dân sự khi cho rằng quyền và lợi ích hợp pháp của nguyên đơn bị người đó xâm phạm',
      'Người làm chứng tại phiên tòa',
      'Người giúp việc cho Thẩm phán',
      'Luật sư đại diện cho Viện kiểm sát'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 68 BLTTDS 2015: Bị đơn trong vụ án dân sự là người bị nguyên đơn khởi kiện hoặc bị cơ quan, tổ chức, cá nhân khác do Bộ luật này quy định khởi kiện để yêu cầu Tòa án giải quyết.',
    legalReference: 'Điều 68 Bộ luật Tố tụng Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 251,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Tranh chấp dân sự nào sau đây KHÔNG ĐƯỢC hòa giải tại Tòa án?',
    options: [
      'Yêu cầu hủy việc kết hôn trái pháp luật; tranh chấp xác định cha, mẹ cho con hoặc con cho cha, mẹ',
      'Tranh chấp hợp đồng mua bán nhà đất',
      'Tranh chấp chia di sản thừa kế',
      'Tranh chấp bồi thường thiệt hại do tai nạn giao thông'
    ],
    correctAnswer: 0,
    explanation: 'Điều 206 BLTTDS 2015 quy định những vụ án dân sự không được hòa giải gồm: Yêu cầu đòi bồi thường vì lý do gây thiệt hại đến tài sản của Nhà nước; Những vụ án phát sinh từ giao dịch dân sự vi phạm điều cấm của luật hoặc trái đạo đức xã hội; Vụ án hủy việc kết hôn trái pháp luật...',
    legalReference: 'Điều 206 Bộ luật Tố tụng Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 252,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Thẩm quyền giải quyết tranh chấp dân sự sơ thẩm của Tòa án nhân dân cấp huyện bao gồm:',
    options: [
      'Hầu hết các tranh chấp về dân sự, hôn nhân gia đình, kinh doanh thương mại, lao động không có đương sự hoặc tài sản ở nước ngoài',
      'Chỉ xét xử các vụ kiện dưới 5 triệu đồng',
      'Xét xử các tranh chấp ngoại giao quốc tế',
      'Chỉ xử lý các vụ án hình sự đặc biệt nghiêm trọng'
    ],
    correctAnswer: 0,
    explanation: 'Điều 35 BLTTDS 2015 quy định thẩm quyền của TAND cấp huyện giải quyết theo thủ tục sơ thẩm các tranh chấp về dân sự, hôn nhân gia đình, kinh doanh thương mại và lao động theo quy định (không có yếu tố nước ngoài).',
    legalReference: 'Điều 35 Bộ luật Tố tụng Dân sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 253,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Khi các đương sự thỏa thuận được với nhau về việc giải quyết toàn bộ vụ án tại phiên hòa giải, Thẩm phán lập biên bản hòa giải thành và sau bao nhiêu ngày sẽ ra quyết định công nhận sự thỏa thuận của các đương sự nếu không ai thay đổi ý kiến?',
    options: [
      'Sau 07 ngày kể từ ngày lập biên bản hòa giải thành',
      'Sau 03 ngày',
      'Sau 15 ngày',
      'Sau 30 ngày'
    ],
    correctAnswer: 0,
    explanation: 'Điều 212 BLTTDS 2015: Hết thời hạn 07 ngày, kể từ ngày lập biên bản hoà giải thành mà không có đương sự nào thay đổi ý kiến về sự thoả thuận đó thì Thẩm phán chủ trì phiên hoà giải... ra quyết định công nhận sự thoả thuận của các đương sự.',
    legalReference: 'Điều 212 Bộ luật Tố tụng Dân sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 254,
    chapterId: 4,
    chapterName: 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự',
    question: 'Quyết định công nhận sự thỏa thuận của các đương sự của Tòa án có đặc điểm hiệu lực nào?',
    options: [
      'Có hiệu lực pháp luật ngay sau khi được ban hành và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm',
      'Chỉ có hiệu lực sau 30 ngày để các bên suy nghĩ lại',
      'Vẫn bị kháng cáo lên Tòa án cấp trên bình thường',
      'Chỉ có giá trị tham khảo không bắt buộc thi hành án'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 213 BLTTDS 2015: Quyết định công nhận sự thoả thuận của các đương sự có hiệu lực pháp luật ngay sau khi được ban hành và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm.',
    legalReference: 'Điều 213 Bộ luật Tố tụng Dân sự 2015',
    difficulty: 'trung bình'
  },

  // --- CHƯƠNG 5: PHÁP LUẬT KINH DOANH - THƯƠNG MẠI (14 câu: 255 - 268) ---
  {
    id: 255,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Người đại diện theo pháp luật của doanh nghiệp là cá nhân đại diện cho doanh nghiệp:',
    options: [
      'Thực hiện các quyền và nghĩa vụ phát sinh từ giao dịch của doanh nghiệp, đại diện cho doanh nghiệp với tư cách người yêu cầu giải quyết việc dân sự, nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trước Trọng tài, Tòa án',
      'Chỉ có trách nhiệm ký bảng chấm công nhân viên',
      'Đại diện cho tổ chức công đoàn bảo vệ người lao động',
      'Chỉ chịu trách nhiệm nộp thuế cá nhân'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 12 Luật Doanh nghiệp 2020: Người đại diện theo pháp luật của doanh nghiệp là cá nhân đại diện cho doanh nghiệp thực hiện các quyền và nghĩa vụ phát sinh từ giao dịch của doanh nghiệp...',
    legalReference: 'Điều 12 Luật Doanh nghiệp 2020',
    difficulty: 'dễ'
  },
  {
    id: 256,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Một doanh nghiệp (Công ty TNHH hoặc Công ty Cổ phần) có thể có bao nhiêu người đại diện theo pháp luật?',
    options: [
      'Có thể có một hoặc nhiều người đại diện theo pháp luật tùy theo Điều lệ công ty quy định',
      'Bắt buộc chỉ được có duy nhất 01 người đại diện',
      'Bắt buộc phải có đúng 05 người đại diện',
      'Không được phép có người đại diện là công dân Việt Nam'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 12 Luật Doanh nghiệp 2020: Công ty TNHH và công ty cổ phần có thể có một hoặc nhiều người đại diện theo pháp luật. Điều lệ công ty quy định cụ thể số lượng, chức danh quản lý và quyền, nghĩa vụ.',
    legalReference: 'Khoản 2 Điều 12 Luật Doanh nghiệp 2020',
    difficulty: 'trung bình'
  },
  {
    id: 257,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Tên trùng và tên gây nhầm lẫn của doanh nghiệp được hiểu như thế nào?',
    options: [
      'Tên trùng là tên tiếng Việt của doanh nghiệp đề nghị đăng ký được viết hoàn toàn giống với tên tiếng Việt của doanh nghiệp đã đăng ký trong phạm vi toàn quốc',
      'Tên trùng chỉ bị cấm trong phạm vi cùng một phường/xã',
      'Doanh nghiệp tư nhân được phép đặt tên trùng với công ty nhà nước',
      'Tên gây nhầm lẫn chỉ áp dụng cho logo hình ảnh'
    ],
    correctAnswer: 0,
    explanation: 'Điều 41 Luật Doanh nghiệp 2020 quy định về tên trùng và tên gây nhầm lẫn: Tên trùng là tên tiếng Việt của doanh nghiệp đề nghị đăng ký viết hoàn toàn giống tên tiếng Việt của doanh nghiệp đã đăng ký trên Cơ sở dữ liệu quốc gia.',
    legalReference: 'Điều 41 Luật Doanh nghiệp 2020',
    difficulty: 'dễ'
  },
  {
    id: 258,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Tài sản góp vốn vào doanh nghiệp có thể là những loại tài sản nào?',
    options: [
      'Đồng Việt Nam, ngoại tệ tự do chuyển đổi, vàng, quyền sử dụng đất, quyền sở hữu trí tuệ, công nghệ, bí quyết kỹ thuật, tài sản khác định giá được bằng Đồng Việt Nam',
      'Chỉ chấp nhận tiền mặt Đồng Việt Nam',
      'Bằng uy tín cá nhân và bằng cấp đại học',
      'Bằng sức lao động dự kiến làm trong 10 năm'
    ],
    correctAnswer: 0,
    explanation: 'Điều 34 Luật Doanh nghiệp 2020: Tài sản góp vốn là Đồng Việt Nam, ngoại tệ tự do chuyển đổi, vàng, quyền sử dụng đất, quyền sở hữu trí tuệ, công nghệ, tài sản khác định giá được bằng VNĐ.',
    legalReference: 'Điều 34 Luật Doanh nghiệp 2020',
    difficulty: 'dễ'
  },
  {
    id: 259,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Thành viên Hội đồng thành viên của Công ty TNHH 2 thành viên trở lên có quyền chuyển nhượng phần vốn góp của mình như thế nào?',
    options: [
      'Phải chào bán phần vốn góp đó cho các thành viên còn lại theo tỷ lệ tương ứng trước; chỉ được chuyển nhượng cho người ngoài nếu các thành viên còn lại không mua hoặc không mua hết trong 30 ngày',
      'Tự do bán ngay cho bất kỳ người ngoài nào mà không cần báo cho thành viên trong công ty',
      'Chỉ được bán cho người thân trong gia đình',
      'Không bao giờ được quyền chuyển nhượng vốn góp'
    ],
    correctAnswer: 0,
    explanation: 'Điều 52 Luật Doanh nghiệp 2020: Phải chào bán phần vốn đó cho các thành viên còn lại theo tỷ lệ tương ứng với phần vốn góp của họ trong công ty; chỉ được chuyển nhượng cho người không phải là thành viên nếu các thành viên còn lại không mua hoặc không mua hết trong 30 ngày.',
    legalReference: 'Điều 52 Luật Doanh nghiệp 2020',
    difficulty: 'trung bình'
  },
  {
    id: 260,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Cổ đông sở hữu Cổ phần ưu đãi biểu quyết trong Công ty Cổ phần có đặc quyền gì?',
    options: [
      'Có số phiếu biểu quyết nhiều hơn so với cổ phần phổ thông theo quy định của Điều lệ công ty',
      'Được nhận cổ tức cố định gấp 10 lần cổ đông khác',
      'Được quyền tự do rút vốn điều lệ bằng tiền mặt khỏi công ty bất cứ lúc nào',
      'Có quyền chuyển nhượng cổ phần đó cho người khác không giới hạn'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 116 Luật Doanh nghiệp 2020: Cổ phần ưu đãi biểu quyết là cổ phần phổ thông có nhiều hơn phiếu biểu quyết so với cổ phần phổ thông khác; số phiếu biểu quyết của một cổ phần ưu đãi biểu quyết do Điều lệ công ty quy định.',
    legalReference: 'Điều 116 Luật Doanh nghiệp 2020',
    difficulty: 'trung bình'
  },
  {
    id: 261,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Cổ đông sở hữu cổ phần ưu đãi biểu quyết KHÔNG ĐƯỢC thực hiện hành vi nào sau đây?',
    options: [
      'Không được chuyển nhượng cổ phần đó cho người khác (trừ trường hợp chuyển nhượng theo bản án có hiệu lực hoặc thừa kế)',
      'Không được tham dự cuộc họp Đại hội đồng cổ đông',
      'Không được nhận cổ tức',
      'Không được xem sổ sách kế toán'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 116 Luật Doanh nghiệp 2020: Cổ đông sở hữu cổ phần ưu đãi biểu quyết không được chuyển nhượng cổ phần đó cho người khác, trừ trường hợp chuyển nhượng theo bản án, quyết định của Tòa án đã có hiệu lực pháp luật hoặc thừa kế.',
    legalReference: 'Điều 116 Luật Doanh nghiệp 2020',
    difficulty: 'trung bình'
  },
  {
    id: 262,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Trường hợp nào sau đây dẫn đến việc Doanh nghiệp bị giải thể bắt buộc?',
    options: [
      'Bị thu hồi Giấy chứng nhận đăng ký doanh nghiệp (trừ trường hợp luật Quản lý thuế có quy định khác)',
      'Công ty bị lỗ liên tiếp trong 2 quý',
      'Giám đốc điều hành xin từ chức',
      'Công ty không tham gia hội chợ thương mại quốc tế'
    ],
    correctAnswer: 0,
    explanation: 'Điểm d Khoản 1 Điều 207 Luật Doanh nghiệp 2020: Doanh nghiệp bị giải thể trong trường hợp bị thu hồi Giấy chứng nhận đăng ký doanh nghiệp.',
    legalReference: 'Điều 207 Luật Doanh nghiệp 2020',
    difficulty: 'dễ'
  },
  {
    id: 263,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Thứ tự ưu tiên phân chia tài sản khi doanh nghiệp, hợp tác xã bị tuyên bố Phá sản được thực hiện như thế nào?',
    options: [
      '1. Chi phí phá sản; 2. Khoản nợ lương, trợ cấp thôi việc, BHXH của người lao động; 3. Khoản nợ phát sinh sau khi mở thủ tục phá sản; 4. Nghĩa vụ tài chính đối với Nhà nước; khoản nợ không bảo đảm',
      'Ưu tiên trả hết nợ ngân hàng trước rồi mới tới người lao động',
      'Ưu tiên chia hết cho các cổ đông sáng lập trước',
      'Nộp toàn bộ vào kho bạc Nhà nước không trả cho chủ nợ'
    ],
    correctAnswer: 0,
    explanation: 'Điều 54 Luật Phá sản 2014 quy định thứ tự phân chia tài sản: 1. Chi phí phá sản; 2. Khoản nợ lương, trợ cấp, BHXH của người lao động; 3. Nợ phát sinh sau mở thủ tục phá sản; 4. Nghĩa vụ với Nhà nước và nợ không bảo đảm trả cho chủ nợ.',
    legalReference: 'Điều 54 Luật Phá sản 2014',
    difficulty: 'vận dụng'
  },
  {
    id: 264,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Hội đồng Quản trị của Công ty Cổ phần có số lượng thành viên từ bao nhiêu người?',
    options: [
      'Từ 03 đến 11 thành viên (Điều lệ quy định cụ thể)',
      'Đúng 02 thành viên',
      'Không quá 50 thành viên',
      'Bắt buộc trên 20 thành viên'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 154 Luật Doanh nghiệp 2020: Hội đồng quản trị có từ 03 đến 11 thành viên. Điều lệ công ty quy định cụ thể số lượng thành viên Hội đồng quản trị.',
    legalReference: 'Điều 154 Luật Doanh nghiệp 2020',
    difficulty: 'dễ'
  },
  {
    id: 265,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Nghị quyết của Hội đồng Quản trị được thông qua tại cuộc họp nếu được đa số thành viên dự họp tán thành; trường hợp số phiếu ngang nhau thì:',
    options: [
      'Quyết định cuối cùng thuộc về phía có ý kiến của Chủ tịch Hội đồng quản trị',
      'Nghị quyết tự động bị hủy bỏ vĩnh viễn',
      'Phải nộp đơn xin ý kiến của Tòa án',
      'Bốc thăm ngẫu nhiên để chọn phương án'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 12 Điều 153 Luật Doanh nghiệp 2020: Nghị quyết của HĐQT được thông qua nếu được đa số thành viên dự họp tán thành; trường hợp số phiếu ngang nhau thì quyết định cuối cùng thuộc về phía có ý kiến của Chủ tịch Hội đồng quản trị.',
    legalReference: 'Điều 153 Luật Doanh nghiệp 2020',
    difficulty: 'trung bình'
  },
  {
    id: 266,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Hoạt động khuyến mại theo Luật Thương mại 2005 KHÔNG ĐƯỢC thực hiện dưới hình thức nào?',
    options: [
      'Khuyến mại bằng rượu có nồng độ cồn từ 15 độ trở lên hoặc thuốc lá',
      'Đưa hàng mẫu, cung ứng dịch vụ mẫu để khách hàng dùng thử không phải trả tiền',
      'Tặng hàng hoá cho khách hàng, cung ứng dịch vụ không thu tiền',
      'Bán hàng với giá thấp hơn giá bán hàng trước đó'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 4 Điều 100 Luật Thương mại 2005 nghiêm cấm khuyến mại rượu có độ cồn từ 15 độ trở lên; thuốc lá, thuốc lá điện tử, hàng cấm kinh doanh.',
    legalReference: 'Điều 100 Luật Thương mại 2005',
    difficulty: 'trung bình'
  },
  {
    id: 267,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Trong hoạt động đại diện cho thương nhân, người đại diện nhân danh ai để thực hiện các hoạt động thương mại?',
    options: [
      'Nhân danh bên giao đại diện',
      'Nhân danh chính bản thân mình',
      'Nhân danh cơ quan quản lý thị trường',
      'Nhân danh người tiêu dùng'
    ],
    correctAnswer: 0,
    explanation: 'Điều 141 Luật Thương mại 2005: Đại diện cho thương nhân là việc một thương nhân nhận uỷ nhiệm của thương nhân khác để thực hiện các hoạt động thương mại với danh nghĩa và theo sự chỉ dẫn của thương nhân đó và được hưởng thù lao.',
    legalReference: 'Điều 141 Luật Thương mại 2005',
    difficulty: 'dễ'
  },
  {
    id: 268,
    chapterId: 5,
    chapterName: 'Chương 5: Pháp luật Kinh doanh - Thương mại',
    question: 'Thời hiệu khởi kiện áp dụng đối với các tranh chấp thương mại nói chung theo Luật Thương mại 2005 là bao lâu kể từ thời điểm quyền và lợi ích hợp pháp bị xâm phạm?',
    options: [
      '02 năm',
      '06 tháng',
      '01 năm',
      '05 năm'
    ],
    correctAnswer: 0,
    explanation: 'Điều 319 Luật Thương mại 2005 quy định: "Thời hiệu khởi kiện áp dụng đối với các tranh chấp thương mại là 02 năm, kể từ thời điểm quyền và lợi ích hợp pháp bị xâm phạm, trừ trường hợp quy định tại điểm e khoản 1 Điều 237".',
    legalReference: 'Điều 319 Luật Thương mại 2005',
    difficulty: 'trung bình'
  },

  // --- CHƯƠNG 6: LUẬT HÌNH SỰ VÀ PHÒNG CHỐNG THAM NHŨNG (14 câu: 269 - 282) ---
  {
    id: 269,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Tội phạm nghiêm trọng là tội phạm có mức cao nhất của khung hình phạt do BLHS quy định là:',
    options: [
      'Từ trên 03 năm tù đến 07 năm tù',
      'Phạt tiền hoặc phạt tù đến 03 năm',
      'Từ trên 07 năm tù đến 15 năm tù',
      'Tù chung thân hoặc tử hình'
    ],
    correctAnswer: 0,
    explanation: 'Điểm b Khoản 1 Điều 9 BLHS 2015: "Tội phạm nghiêm trọng là tội phạm có tính chất và mức độ nguy hiểm cho xã hội lớn mà mức cao nhất của khung hình phạt do Bộ luật này quy định đối với tội ấy là từ trên 03 năm tù đến 07 năm tù".',
    legalReference: 'Điều 9 Bộ luật Hình sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 270,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Mặt khách quan của tội phạm biểu hiện qua các dấu hiệu nào?',
    options: [
      'Hành vi nguy hiểm cho xã hội; Hậu quả nguy hiểm cho xã hội; Mối quan hệ nhân quả giữa hành vi và hậu quả; Thời gian, địa điểm, phương tiện, phương pháp thực hiện tội phạm',
      'Lỗi, động cơ và mục đích của người phạm tội',
      'Năng lực trách nhiệm hình sự và độ tuổi của thủ phạm',
      'Quan hệ sở hữu và quan hệ nhân thân bị xâm hại'
    ],
    correctAnswer: 0,
    explanation: 'Mặt khách quan của tội phạm là những biểu hiện bên ngoài của tội phạm: hành vi, hậu quả, quan hệ nhân quả giữa hành vi và hậu quả, cùng điều kiện ngoại cảnh (công cụ, thời gian, địa điểm...).',
    legalReference: 'Cấu thành tội phạm - Mặt khách quan',
    difficulty: 'dễ'
  },
  {
    id: 271,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Đồng phạm theo Điều 17 Bộ luật Hình sự 2015 là trường hợp:',
    options: [
      'Có từ 02 người trở lên cố ý cùng thực hiện một tội phạm',
      'Nhiều người cùng vô ý gây tai nạn',
      'Một người thực hiện nhiều tội phạm liên tiếp',
      'Hai người cãi nhau trên phố'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 17 BLHS 2015: "Đồng phạm là trường hợp có 02 người trở lên cố ý cùng thực hiện một tội phạm".',
    legalReference: 'Điều 17 Bộ luật Hình sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 272,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Trong vụ án đồng phạm, người tổ chức, người thực hành, người xúi giục, người giúp sức có vai trò như thế nào?',
    options: [
      'Người thực hành trực tiếp thực hiện tội phạm; người tổ chức chủ mưu, cầm đầu; người xúi giục kích động; người giúp sức tạo điều kiện tinh thần/vật chất',
      'Chỉ có người thực hành mới bị đi tù, những người khác vô can',
      'Mọi người đều đóng vai trò thực hành như nhau',
      'Người giúp sức luôn bị phạt nặng hơn người cầm đầu'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 17 BLHS 2015: Người đồng phạm bao gồm người tổ chức, người thực hành, người xúi giục, người giúp sức và nêu rõ vai trò của từng loại người đồng phạm.',
    legalReference: 'Điều 17 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 273,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Chuẩn bị phạm tội là việc tìm kiếm, sửa soạn công cụ, phương tiện hoặc tạo ra những điều kiện khác để thực hiện tội phạm. Người chuẩn bị phạm tội đối với loại tội nào sau đây thì phải chịu trách nhiệm hình sự?',
    options: [
      'Tội phạm rất nghiêm trọng hoặc tội phạm đặc biệt nghiêm trọng quy định tại các điều khoản cụ thể của BLHS',
      'Mọi tội phạm ít nghiêm trọng',
      'Chỉ khi đã bắt đầu đâm chém nạn nhân',
      'Chuẩn bị phạm tội không bao giờ bị xử lý hình sự'
    ],
    correctAnswer: 0,
    explanation: 'Điều 14 BLHS 2015 quy định người chuẩn bị phạm một trong các tội rất nghiêm trọng hoặc đặc biệt nghiêm trọng được liệt kê cụ thể tại Khoản 2 Điều 14 mới phải chịu TNHS.',
    legalReference: 'Điều 14 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 274,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Phạm tội chưa đạt theo Điều 15 Bộ luật Hình sự 2015 là trường hợp:',
    options: [
      'Cố ý thực hiện tội phạm nhưng không thực hiện được đến cùng vì những nguyên nhân ngoài ý muốn của người phạm tội',
      'Người phạm tội tự ý dừng lại vì ăn năn hối cải',
      'Người phạm tội vô ý làm súng cướp cò',
      'Hành vi chỉ dừng lại ở suy nghĩ trong đầu'
    ],
    correctAnswer: 0,
    explanation: 'Điều 15 BLHS 2015: Phạm tội chưa đạt là cố ý thực hiện tội phạm nhưng không thực hiện được đến cùng vì những nguyên nhân ngoài ý muốn của người phạm tội. Người phạm tội chưa đạt vẫn phải chịu TNHS.',
    legalReference: 'Điều 15 Bộ luật Hình sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 275,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Tự ý nửa chừng chấm dứt việc phạm tội (Điều 16 BLHS 2015) có hậu quả pháp lý nào?',
    options: [
      'Được miễn trách nhiệm hình sự về tội định phạm; nếu hành vi thực tế đã cấu thành một tội khác thì phải chịu TNHS về tội đó',
      'Vẫn bị xử phạt khung hình phạt cao nhất của tội định phạm',
      'Bị áp dụng hình phạt tử hình',
      'Mặc nhiên được bồi thường tiền danh dự'
    ],
    correctAnswer: 0,
    explanation: 'Điều 16 BLHS 2015: Người tự ý nửa chừng chấm dứt việc phạm tội được miễn trách nhiệm hình sự về tội định phạm; nếu hành vi thực tế đã thực hiện cấu thành một tội phạm khác thì người đó phải chịu TNHS về tội này.',
    legalReference: 'Điều 16 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 276,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Hình phạt "Cải tạo không giam giữ" có thời hạn áp dụng là bao lâu?',
    options: [
      'Từ 06 tháng đến 03 năm',
      'Từ 01 tháng đến 06 tháng',
      'Từ 03 năm đến 07 năm',
      'Từ 05 năm đến 10 năm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 36 BLHS 2015 quy định hình phạt cải tạo không giam giữ được áp dụng từ 06 tháng đến 03 năm đối với người phạm tội ít nghiêm trọng, tội phạm nghiêm trọng do BLHS quy định.',
    legalReference: 'Điều 36 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 277,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Hình phạt "Tù có thời hạn" đối với một tội phạm có mức tối thiểu và tối đa là bao nhiêu (trừ trường hợp tổng hợp hình phạt)?',
    options: [
      'Từ 03 tháng đến 20 năm',
      'Từ 01 tháng đến 15 năm',
      'Từ 06 tháng đến 30 năm',
      'Từ 01 năm đến 25 năm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 38 BLHS 2015: Tù có thời hạn đối với người phạm một tội có mức tối thiểu là 03 tháng và mức tối đa là 20 năm.',
    legalReference: 'Điều 38 Bộ luật Hình sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 278,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Án treo theo quy định tại Điều 65 Bộ luật Hình sự 2015 là gì?',
    options: [
      'Là biện pháp miễn chấp hành hình phạt tù có điều kiện, áp dụng cho người bị phạt tù không quá 03 năm có nhân thân tốt và có nhiều tình tiết giảm nhẹ',
      'Là một loại hình phạt chính độc lập',
      'Là hình thức giam giữ bị cáo trên cây cao',
      'Là biện pháp tha tù trước thời hạn vô điều kiện'
    ],
    correctAnswer: 0,
    explanation: 'Điều 65 BLHS 2015: Án treo không phải là hình phạt mà là biện pháp miễn chấp hành hình phạt tù có điều kiện, áp dụng cho người bị xử phạt tù không quá 03 năm, có nhân thân tốt, có từ 02 tình tiết giảm nhẹ trở lên.',
    legalReference: 'Điều 65 Bộ luật Hình sự 2015',
    difficulty: 'trung bình'
  },
  {
    id: 279,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Hành vi "Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản" (Điều 355 BLHS) khác với "Tham ô tài sản" ở điểm nào?',
    options: [
      'Tham ô là chiếm đoạt tài sản mà mình được giao trực tiếp quản lý; còn Lạm dụng chức vụ quyền hạn chiếm đoạt tài sản là chiếm đoạt tài sản mà mình không trực tiếp quản lý nhưng dùng uy quyền chức vụ để ép buộc giao tài sản',
      'Tham ô chỉ do giám đốc ngân hàng thực hiện',
      'Lạm dụng chức vụ không có mục đích chiếm đoạt',
      'Cả hai tội đều là một, không có điểm phân biệt'
    ],
    correctAnswer: 0,
    explanation: 'Điểm khác biệt cốt lõi: Đối tượng của tội Tham ô là tài sản người phạm tội có trách nhiệm quản lý. Còn tội Lạm dụng chức vụ quyền hạn chiếm đoạt tài sản là tài sản không do người phạm tội quản lý.',
    legalReference: 'Điều 353 & 355 Bộ luật Hình sự 2015',
    difficulty: 'vận dụng'
  },
  {
    id: 280,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Theo Luật PCTN 2018, cơ quan kiểm soát tài sản, thu nhập của người có nghĩa vụ kê khai công tác tại các cơ quan của Đảng, Nhà nước ở trung ương là:',
    options: [
      'Thanh tra Chính phủ và Ủy ban Kiểm tra Trung ương theo phân cấp quản lý cán bộ',
      'Ngân hàng thương mại cổ phần nơi mở tài khoản',
      'Cục Quản lý thị trường',
      'Hội đồng nhân dân cấp xã'
    ],
    correctAnswer: 0,
    explanation: 'Điều 30 Luật PCTN 2018 quy định Thanh tra Chính phủ và Ủy ban Kiểm tra Trung ương là các cơ quan kiểm soát tài sản thu nhập đối với người giữ chức vụ ở trung ương theo phân cấp.',
    legalReference: 'Điều 30 Luật Phòng, chống tham nhũng 2018',
    difficulty: 'trung bình'
  },
  {
    id: 281,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Tội Đưa hối lộ (Điều 364 Bộ luật Hình sự 2015) cấu thành khi:',
    options: [
      'Người nào trực tiếp hay qua trung gian đã đưa hoặc sẽ đưa cho người có chức vụ, quyền hạn tiền, tài sản, lợi ích vật chất từ 2.000.000 đồng trở lên để họ làm hoặc không làm một việc vì lợi ích của mình',
      'Tặng quà sinh nhật cho bạn học cùng lớp',
      'Nộp lệ phí đăng ký xe tại kho bạc theo biên lai',
      'Ủng hộ đồng bào bị lũ lụt'
    ],
    correctAnswer: 0,
    explanation: 'Điều 364 BLHS 2015: Người nào trực tiếp hay qua trung gian đã đưa hoặc sẽ đưa cho người có chức vụ, quyền hạn hoặc người khác hoặc tổ chức khác bất kỳ lợi ích nào để người có chức vụ quyền hạn làm hoặc không làm việc vì lợi ích người đưa...',
    legalReference: 'Điều 364 Bộ luật Hình sự 2015',
    difficulty: 'dễ'
  },
  {
    id: 282,
    chapterId: 6,
    chapterName: 'Chương 6: Luật Hình sự và Phòng, chống tham nhũng',
    question: 'Hình thức xử lý kỷ luật đối với người đứng đầu cơ quan, tổ chức để xảy ra tham nhũng trong cơ quan do mình quản lý, phụ trách là:',
    options: [
      'Khiển trách, Cảnh cáo hoặc Cách chức (tùy theo tính chất mức độ nghiêm trọng của vụ việc tham nhũng)',
      'Tự động bị tử hình ngay lập tức',
      'Chỉ bị phạt tiền 100.000 đồng',
      'Được luân chuyển thăng chức sang cơ quan khác'
    ],
    correctAnswer: 0,
    explanation: 'Điều 73 Luật PCTN 2018 quy định người đứng đầu để xảy ra tham nhũng bị xử lý kỷ luật: khiển trách, cảnh cáo hoặc cách chức.',
    legalReference: 'Điều 73 Luật Phòng, chống tham nhũng 2018',
    difficulty: 'trung bình'
  },

  // --- CHƯƠNG 7: PHÁP LUẬT HÔN NHÂN VÀ GIA ĐÌNH (9 câu: 283 - 291) ---
  {
    id: 283,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Hôn nhân là quan hệ giữa vợ và chồng sau khi:',
    options: [
      'Đã kết hôn hợp pháp theo quy định của pháp luật',
      'Tổ chức lễ cưới linh đình trước họ hàng hai bên',
      'Chung sống với nhau sinh được con đầu lòng',
      'Lập vi bằng sống chung tại văn phòng thừa phát lại'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 3 Luật Hôn nhân và Gia đình 2014: Hôn nhân là quan hệ giữa vợ và chồng sau khi kết hôn hợp pháp.',
    legalReference: 'Khoản 1 Điều 3 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'dễ'
  },
  {
    id: 284,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Những người có họ trong phạm vi 3 đời theo Luật Hôn nhân và Gia đình 2014 là:',
    options: [
      'Đời thứ nhất là cha mẹ; Đời thứ hai là anh, chị, em cùng cha mẹ, cùng cha khác mẹ, cùng mẹ khác cha; Đời thứ ba là anh, chị, em con chú, con bác, con cô, con cậu, con dì',
      'Cha mẹ, ông bà và cụ kỵ',
      'Ba người bạn thân thiết cùng lớp đại học',
      'Họ hàng sống cùng trong một thôn xóm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 18 Điều 3 Luật HNGĐ 2014 quy định phạm vi 3 đời: Đời thứ nhất: cha mẹ; Đời thứ hai: anh chị em ruột, cùng cha khác mẹ/cùng mẹ khác cha; Đời thứ ba: anh chị em họ (con chú, bác, cô, cậu, dì).',
    legalReference: 'Điều 3 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'trung bình'
  },
  {
    id: 285,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Đăng ký kết hôn có yếu tố nước ngoài (giữa công dân Việt Nam với người nước ngoài) thuộc thẩm quyền của cơ quan nào?',
    options: [
      'Ủy ban nhân dân cấp huyện nơi cư trú của công dân Việt Nam',
      'Sở Ngoại vụ tỉnh',
      'Công an xuất nhập cảnh',
      'Bộ Tư pháp'
    ],
    correctAnswer: 0,
    explanation: 'Điều 37 Luật Hộ tịch 2014 quy định UBND cấp huyện nơi cư trú của công dân Việt Nam thực hiện đăng ký kết hôn giữa công dân Việt Nam với người nước ngoài.',
    legalReference: 'Điều 37 Luật Hộ tịch 2014',
    difficulty: 'trung bình'
  },
  {
    id: 286,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Vợ, chồng có quyền lựa chọn áp dụng chế độ tài sản nào theo Luật Hôn nhân và Gia đình 2014?',
    options: [
      'Chế độ tài sản theo luật định hoặc Chế độ tài sản theo thỏa thuận (phải lập thành văn bản công chứng trước khi kết hôn)',
      'Chỉ được áp dụng chế độ tài sản do bố mẹ chồng quyết định',
      'Bắt buộc áp dụng chế độ tài sản theo luật định không được thỏa thuận',
      'Tài sản luôn luôn thuộc về người có thu nhập cao hơn'
    ],
    correctAnswer: 0,
    explanation: 'Điều 28 và Điều 47 Luật HNGĐ 2014 cho phép vợ chồng lựa chọn chế độ tài sản theo luật định hoặc theo thỏa thuận. Thỏa thuận chế độ tài sản phải lập trước khi kết hôn bằng văn bản công chứng.',
    legalReference: 'Điều 28 & 47 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'trung bình'
  },
  {
    id: 287,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Trong trường hợp vợ chồng không có thỏa thuận về chế độ tài sản thì áp dụng chế độ nào?',
    options: [
      'Chế độ tài sản của vợ chồng theo luật định',
      'Tài sản thuộc về người đứng tên trên hóa đơn',
      'Tài sản thuộc về người chồng',
      'Tài sản chia đều cho cha mẹ hai bên'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 28 Luật HNGĐ 2014: Trong trường hợp vợ chồng không lựa chọn áp dụng chế độ tài sản theo thoả thuận thì áp dụng chế độ tài sản của vợ chồng theo luật định.',
    legalReference: 'Điều 28 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'dễ'
  },
  {
    id: 288,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Nghĩa vụ liên đới của vợ, chồng phát sinh từ giao dịch nào sau đây?',
    options: [
      'Giao dịch do một bên thực hiện nhằm đáp ứng nhu cầu thiết yếu của gia đình hoặc giao dịch khác phù hợp với quy định về đại diện giữa vợ chồng',
      'Khoản tiền vay của người chồng để đánh bạc cá độ bóng đá',
      'Giao dịch kinh doanh riêng của vợ bị lừa đảo phá sản mà chồng không hề hay biết',
      'Khoản bồi thường do chồng gây tai nạn bỏ trốn'
    ],
    correctAnswer: 0,
    explanation: 'Điều 27 và Điều 30 Luật HNGĐ 2014: Vợ, chồng chịu trách nhiệm liên đới đối với giao dịch do một bên thực hiện nhằm đáp ứng nhu cầu thiết yếu của gia đình.',
    legalReference: 'Điều 27 & Điều 30 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'trung bình'
  },
  {
    id: 289,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Tòa án giải quyết ly hôn theo yêu cầu của một bên (Ly hôn đơn phương) khi có căn cứ nào?',
    options: [
      'Có căn cứ về việc vợ, chồng có hành vi bạo lực gia đình hoặc vi phạm nghiêm trọng quyền, nghĩa vụ làm cho hôn nhân lâm vào tình trạng trầm trọng, đời sống chung không thể kéo dài, mục đích hôn nhân không đạt được',
      'Người vợ đi làm về muộn 1 ngày trong tuần',
      'Người chồng thích xem bóng đá ban đêm',
      'Cha mẹ người vợ không thích người chồng'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 56 Luật HNGĐ 2014: Khi vợ hoặc chồng yêu cầu ly hôn mà hòa giải tại Tòa án không thành thì Tòa án giải quyết cho ly hôn nếu có căn cứ về việc vợ, chồng có hành vi bạo lực gia đình hoặc vi phạm nghiêm trọng quyền, nghĩa vụ làm cho hôn nhân trầm trọng, đời sống chung không kéo dài...',
    legalReference: 'Điều 56 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'dễ'
  },
  {
    id: 290,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Khi chia tài sản chung của vợ chồng khi ly hôn, nguyên tắc chung theo luật định là:',
    options: [
      'Tài sản chung của vợ chồng được chia đôi nhưng có tính đến các yếu tố: hoàn cảnh, công sức đóng góp, bảo vệ lợi ích chính đáng của mỗi bên, lỗi của mỗi bên',
      'Chia 100% cho người chồng vì là trụ cột',
      'Chia toàn bộ cho người vợ nếu người vợ không đi làm',
      'Đem bán đấu giá nộp toàn bộ vào quỹ từ thiện'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 59 Luật HNGĐ 2014: Tài sản chung của vợ chồng được chia đôi nhưng có tính đến các yếu tố: hoàn cảnh gia đình; công sức đóng góp; bảo vệ lợi ích chính đáng trong sản xuất kinh doanh; lỗi của mỗi bên vi phạm quyền, nghĩa vụ...',
    legalReference: 'Điều 59 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'trung bình'
  },
  {
    id: 291,
    chapterId: 7,
    chapterName: 'Chương 7: Pháp luật Hôn nhân và Gia đình',
    question: 'Cha, mẹ không trực tiếp nuôi con sau khi ly hôn có quyền và nghĩa vụ gì đối với con chung?',
    options: [
      'Có quyền, nghĩa vụ thăm nom con mà không ai được cản trở; nhưng không được lạm dụng việc thăm nom để cản trở hoặc gây ảnh hưởng xấu đến việc nuôi dưỡng con',
      'Bị tước hoàn toàn quyền gặp gỡ con mãi mãi',
      'Chỉ được nhìn con qua ảnh trên điện thoại',
      'Tự động mất quyền làm cha, làm mẹ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 và Khoản 2 Điều 82 Luật HNGĐ 2014: Cha, mẹ không trực tiếp nuôi con có nghĩa vụ tôn trọng quyền của con được sống với người trực tiếp nuôi; có quyền, nghĩa vụ thăm nom con mà không ai được cản trở.',
    legalReference: 'Điều 82 Luật Hôn nhân và Gia đình 2014',
    difficulty: 'dễ'
  },

  // --- CHƯƠNG 9: PHÁP LUẬT LAO ĐỘNG (9 câu: 292 - 300) ---
  {
    id: 292,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Hình thức của Hợp đồng lao động theo Điều 14 Bộ luật Lao động 2019 có thể được giao kết thông qua:',
    options: [
      'Văn bản, thông điệp dữ liệu điện tử, hoặc bằng lời nói (đối với hợp đồng có thời hạn dưới 01 tháng)',
      'Chỉ bằng văn bản có công chứng nhà nước',
      'Chỉ bằng lời nói cam kết trước mặt bạn bè',
      'Bằng thư tay có đóng dấu bưu điện'
    ],
    correctAnswer: 0,
    explanation: 'Điều 14 BLLĐ 2019: HĐLĐ phải được giao kết bằng văn bản hoặc thông điệp dữ liệu điện tử; hai bên có thể giao kết bằng lời nói đối với hợp đồng có thời hạn dưới 01 tháng (trừ một số trường hợp luật định).',
    legalReference: 'Điều 14 Bộ luật Lao động 2019',
    difficulty: 'dễ'
  },
  {
    id: 293,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Khi hết hạn hợp đồng lao động xác định thời hạn mà người lao động vẫn tiếp tục làm việc thì trong thời hạn bao nhiêu ngày hai bên phải ký kết hợp đồng mới?',
    options: [
      'Trong thời hạn 30 ngày kể từ ngày hợp đồng hết hạn (nếu không ký thì hợp đồng trở thành HĐLĐ không xác định thời hạn)',
      'Trong thời hạn 07 ngày',
      'Trong thời hạn 60 ngày',
      'Trong thời hạn 90 ngày'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 20 BLLĐ 2019: Khi HĐLĐ xác định thời hạn hết hạn mà người lao động tiếp tục làm việc thì trong thời hạn 30 ngày phải ký kết HĐLĐ mới; nếu không ký thì hợp đồng đã giao kết trở thành hợp đồng không xác định thời hạn.',
    legalReference: 'Khoản 2 Điều 20 Bộ luật Lao động 2019',
    difficulty: 'trung bình'
  },
  {
    id: 294,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Người sử dụng lao động chỉ được ký tiếp thêm TỐI ĐA bao nhiêu lần Hợp đồng lao động xác định thời hạn với một người lao động trước khi phải chuyển sang HĐLĐ không xác định thời hạn (trừ trường hợp đặc thù)?',
    options: [
      'Chỉ được ký thêm 01 lần nữa (tổng cộng tối đa 2 lần xác định thời hạn)',
      'Được ký vô hạn số lần',
      'Được ký thêm 3 lần',
      'Được ký thêm 5 lần'
    ],
    correctAnswer: 0,
    explanation: 'Điểm c Khoản 2 Điều 20 BLLĐ 2019: Hai bên chỉ được ký tiếp 01 lần HĐLĐ xác định thời hạn; sau đó nếu người lao động vẫn tiếp tục làm việc thì phải ký kết hợp đồng lao động không xác định thời hạn.',
    legalReference: 'Điều 20 Bộ luật Lao động 2019',
    difficulty: 'trung bình'
  },
  {
    id: 295,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Người lao động làm thêm giờ vào ngày nghỉ hằng tuần (ví dụ chủ nhật) được trả lương tính theo đơn giá tiền lương ít nhất bằng bao nhiêu %?',
    options: [
      'Ít nhất 200%',
      'Ít nhất 150%',
      'Ít nhất 300%',
      'Ít nhất 100%'
    ],
    correctAnswer: 0,
    explanation: 'Điểm b Khoản 1 Điều 98 BLLĐ 2019: Vào ngày nghỉ hằng tuần, người lao động làm thêm giờ được trả ít nhất bằng 200% tiền lương của ngày làm việc bình thường.',
    legalReference: 'Điều 98 Bộ luật Lao động 2019',
    difficulty: 'dễ'
  },
  {
    id: 296,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Người lao động làm việc vào ban đêm thì được trả thêm ít nhất bao nhiêu % tiền lương tính theo đơn giá tiền lương của ngày làm việc bình thường?',
    options: [
      'Ít nhất 30%',
      'Ít nhất 20%',
      'Ít nhất 50%',
      'Ít nhất 10%'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 98 Bộ luật Lao động 2019: Người lao động làm việc vào ban đêm thì được trả thêm ít nhất bằng 30% tiền lương tính theo đơn giá tiền lương hoặc tiền lương thực trả theo công việc của ngày làm việc bình thường.',
    legalReference: 'Điều 98 Bộ luật Lao động 2019',
    difficulty: 'dễ'
  },
  {
    id: 297,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Người lao động được nghỉ việc riêng mà vẫn HƯỞNG NGUYÊN LƯƠNG và phải thông báo cho người sử dụng lao động trong trường hợp nào sau đây?',
    options: [
      'Kết hôn: nghỉ 03 ngày; Con đẻ, con nuôi kết hôn: nghỉ 01 ngày; Cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi; cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi của vợ hoặc chồng; vợ hoặc chồng; con đẻ, con nuôi chết: nghỉ 03 ngày',
      'Đi du lịch cùng bạn bè: nghỉ 05 ngày',
      'Sinh nhật của bản thân: nghỉ 02 ngày',
      'Chuyển nhà trọ mới: nghỉ 04 ngày'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 115 Bộ luật Lao động 2019 quy định các trường hợp nghỉ việc riêng hưởng nguyên lương: Kết hôn nghỉ 3 ngày; con kết hôn nghỉ 1 ngày; cha mẹ vợ chồng con chết nghỉ 3 ngày.',
    legalReference: 'Điều 115 Bộ luật Lao động 2019',
    difficulty: 'dễ'
  },
  {
    id: 298,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Thời giờ nghỉ ngơi trong giờ làm việc theo Điều 109 Bộ luật Lao động 2019 quy định ca làm việc từ 06 giờ trở lên thì được nghỉ giữa giờ ít nhất bao nhiêu phút?',
    options: [
      'Ít nhất 30 phút liên tục (ban đêm ít nhất 45 phút liên tục)',
      'Ít nhất 15 phút',
      'Ít nhất 60 phút',
      'Không bắt buộc phải cho nghỉ giữa giờ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 109 BLLĐ 2019: Người lao động làm việc theo ca từ 06 giờ trở lên thì được nghỉ giữa giờ ít nhất 30 phút liên tục, làm việc ban đêm được nghỉ giữa giờ ít nhất 45 phút liên tục.',
    legalReference: 'Điều 109 Bộ luật Lao động 2019',
    difficulty: 'trung bình'
  },
  {
    id: 299,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Hình thức kỷ luật sa thải áp dụng đối với người lao động có hành vi nào sau đây?',
    options: [
      'Trộm cắp, tham ô, đánh bạc, cố ý gây thương tích, sử dụng ma túy tại nơi làm việc; tiết lộ bí mật kinh doanh, công nghệ gây thiệt hại nghiêm trọng',
      'Từ chối uống bia cùng lãnh đạo sau giờ làm việc',
      'Quên đeo thẻ nhân viên 1 lần',
      'Lập gia đình mà không báo cho giám đốc'
    ],
    correctAnswer: 0,
    explanation: 'Điều 125 BLLĐ 2019 quy định các trường hợp sa thải: trộm cắp, tham ô, đánh bạc, sử dụng ma túy tại nơi làm việc; tiết lộ bí mật kinh doanh công nghệ gây thiệt hại nghiêm trọng; tự ý bỏ việc...',
    legalReference: 'Điều 125 Bộ luật Lao động 2019',
    difficulty: 'dễ'
  },
  {
    id: 300,
    chapterId: 9,
    chapterName: 'Chương 9: Pháp luật Lao động',
    question: 'Tranh chấp lao động tập thể về quyền do cơ quan, tổ chức nào có thẩm quyền giải quyết?',
    options: [
      'Hòa giải viên lao động; Hội đồng trọng tài lao động; Tòa án nhân dân',
      'Ủy ban nhân dân cấp xã',
      'Hội đồng nhân dân cấp tỉnh',
      'Hiệp hội bảo vệ người tiêu dùng'
    ],
    correctAnswer: 0,
    explanation: 'Điều 191 Bộ luật Lao động 2019 quy định cơ quan, tổ chức có thẩm quyền giải quyết tranh chấp lao động tập thể về quyền bao gồm: Hòa giải viên lao động, Hội đồng trọng tài lao động, Tòa án nhân dân.',
    legalReference: 'Điều 191 Bộ luật Lao động 2019',
    difficulty: 'trung bình'
  }
];
