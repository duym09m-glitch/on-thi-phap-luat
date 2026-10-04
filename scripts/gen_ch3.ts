import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 3;
const chapterName = 'Chương 3: Bộ máy Nhà nước Cộng hòa XHCN Việt Nam';

// Cần: 17 dễ, 35 trung bình, 58 vận dụng = 110 câu (IDs 13001 - 13110)
export const questions: Question[] = [];

let currentId = 13001;

function addQ(
  difficulty: 'dễ' | 'trung bình' | 'vận dụng',
  question: string,
  options: [string, string, string, string],
  correctAnswer: 0 | 1 | 2 | 3,
  explanation: string,
  legalReference: string
) {
  questions.push({
    id: currentId++,
    chapterId: 3,
    chapterName,
    question,
    options,
    correctAnswer,
    explanation,
    legalReference,
    difficulty
  });
}

// ==========================================
// 17 CÂU DỄ (Nhận biết định nghĩa, vị trí pháp lý)
// ==========================================
addQ(
  'dễ',
  'Cơ quan nào sau đây là cơ quan đại biểu cao nhất của Nhân dân và là cơ quan quyền lực nhà nước cao nhất của nước Cộng hòa XHCN Việt Nam?',
  [
    'Quốc hội',
    'Chính phủ',
    'Mặt trận Tổ quốc Việt Nam',
    'Tòa án nhân dân tối cao'
  ],
  0,
  'Theo Điều 69 Hiến pháp 2013, Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hòa xã hội chủ nghĩa Việt Nam.',
  'Hiến pháp 2013, Điều 69'
);

addQ(
  'dễ',
  'Người đứng đầu Nhà nước, thay mặt nước Cộng hòa xã hội chủ nghĩa Việt Nam về đối nội và đối ngoại là ai?',
  [
    'Thủ tướng Chính phủ',
    'Chủ tịch nước',
    'Tổng Bí thư Ban Chấp hành Trung ương Đảng',
    'Chủ tịch Quốc hội'
  ],
  1,
  'Điều 86 Hiến pháp 2013 quy định: Chủ tịch nước là người đứng đầu Nhà nước, thay mặt nước Cộng hòa xã hội chủ nghĩa Việt Nam về đối nội và đối ngoại.',
  'Hiến pháp 2013, Điều 86'
);

addQ(
  'dễ',
  'Cơ quan nào giữ vai trò là cơ quan hành chính nhà nước cao nhất của nước Cộng hòa xã hội chủ nghĩa Việt Nam?',
  [
    'Hội đồng nhân dân thành phố Hà Nội',
    'Ban Chỉ đạo quốc gia về phát triển kinh tế',
    'Chính phủ',
    'Văn phòng Chủ tịch nước'
  ],
  2,
  'Theo Điều 94 Hiến pháp 2013, Chính phủ là cơ quan hành chính nhà nước cao nhất của nước Cộng hòa xã hội chủ nghĩa Việt Nam, thực hiện quyền hành pháp.',
  'Hiến pháp 2013, Điều 94'
);

addQ(
  'dễ',
  'Cơ quan nào là cơ quan xét xử của nước Cộng hòa xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp?',
  [
    'Bộ Công an',
    'Viện kiểm sát nhân dân',
    'Cục Thi hành án dân sự',
    'Tòa án nhân dân'
  ],
  3,
  'Theo Điều 102 Hiến pháp 2013, Tòa án nhân dân là cơ quan xét xử của nước Cộng hòa xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp.',
  'Hiến pháp 2013, Điều 102'
);

addQ(
  'dễ',
  'Chức năng thực hành quyền công tố và kiểm sát hoạt động tư pháp thuộc về hệ thống cơ quan nào?',
  [
    'Viện kiểm sát nhân dân',
    'Cơ quan Thanh tra Chính phủ',
    'Hội đồng Giám định tư pháp',
    'Bộ Tư pháp'
  ],
  0,
  'Theo Điều 107 Hiến pháp 2013, Viện kiểm sát nhân dân thực hành quyền công tố, kiểm sát hoạt động tư pháp.',
  'Hiến pháp 2013, Điều 107'
);

addQ(
  'dễ',
  'Cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương là cơ quan nào?',
  [
    'Ủy ban nhân dân',
    'Hội đồng nhân dân',
    'Ủy ban Mặt trận Tổ quốc cấp huyện',
    'Tòa án nhân dân khu vực'
  ],
  1,
  'Theo Điều 113 Hiến pháp 2013, Hội đồng nhân dân là cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương.',
  'Hiến pháp 2013, Điều 113'
);

addQ(
  'dễ',
  'Cơ quan chấp hành của Hội đồng nhân dân, cơ quan hành chính nhà nước ở địa phương là cơ quan nào?',
  [
    'Ban Tuyên giáo địa phương',
    'Thường trực Đoàn Đại biểu Quốc hội tỉnh',
    'Ủy ban nhân dân',
    'Đoàn Luật sư tỉnh'
  ],
  2,
  'Theo Điều 114 Hiến pháp 2013, Ủy ban nhân dân ở cấp chính quyền địa phương do Hội đồng nhân dân cùng cấp bầu là cơ quan chấp hành của Hội đồng nhân dân, cơ quan hành chính nhà nước ở địa phương.',
  'Hiến pháp 2013, Điều 114'
);

addQ(
  'dễ',
  'Nhiệm kỳ thông thường của mỗi khóa Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam là bao nhiêu năm?',
  [
    '3 năm',
    '4 năm',
    '6 năm',
    '5 năm'
  ],
  3,
  'Điều 71 Hiến pháp 2013 quy định: Nhiệm kỳ của mỗi khóa Quốc hội là 5 năm.',
  'Hiến pháp 2013, Điều 71'
);

addQ(
  'dễ',
  'Cơ quan thường trực của Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam là cơ quan nào?',
  [
    'Ủy ban Thường vụ Quốc hội',
    'Hội đồng Dân tộc của Quốc hội',
    'Ủy ban Pháp luật và Tư pháp',
    'Ban Dân nguyện thuộc Quốc hội'
  ],
  0,
  'Điều 73 Hiến pháp 2013 quy định: Ủy ban thường vụ Quốc hội là cơ quan thường trực của Quốc hội.',
  'Hiến pháp 2013, Điều 73'
);

addQ(
  'dễ',
  'Ai là người đứng đầu cơ quan hành chính nhà nước cao nhất ở nước ta?',
  [
    'Chủ tịch Quốc hội',
    'Thủ tướng Chính phủ',
    'Chủ tịch nước',
    'Viện trưởng Viện kiểm sát nhân dân tối cao'
  ],
  1,
  'Thủ tướng Chính phủ là người đứng đầu Chính phủ, chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ và những nhiệm vụ được giao.',
  'Hiến pháp 2013, Điều 95'
);

addQ(
  'dễ',
  'Trong nguyên tắc xét xử của Tòa án nhân dân ở Việt Nam, nguyên tắc nào bảo đảm tính khách quan tối cao của hoạt động tư pháp?',
  [
    'Xét xử theo chỉ đạo bằng văn bản của chính quyền địa phương',
    'Xét xử kín đối với mọi tranh chấp kinh tế',
    'Thẩm phán, Hội thẩm xét xử độc lập và chỉ tuân theo pháp luật',
    'Xét xử dựa hoàn toàn vào mức độ thừa nhận của bị can'
  ],
  2,
  'Khoản 2 Điều 103 Hiến pháp 2013 quy định: Thẩm phán, Hội thẩm xét xử độc lập và chỉ tuân theo pháp luật; nghiêm cấm cơ quan, tổ chức, cá nhân can thiệp vào việc xét xử của Thẩm phán, Hội thẩm.',
  'Hiến pháp 2013, Điều 103'
);

addQ(
  'dễ',
  'Chủ tịch nước do cơ quan nào bầu trong số các đại biểu Quốc hội?',
  [
    'Ủy ban Trung ương Mặt trận Tổ quốc',
    'Chính phủ',
    'Ủy ban Thường vụ Quốc hội',
    'Quốc hội'
  ],
  3,
  'Điều 87 Hiến pháp 2013 quy định: Chủ tịch nước do Quốc hội bầu trong số đại biểu Quốc hội theo đề nghị của Ủy ban Thường vụ Quốc hội.',
  'Hiến pháp 2013, Điều 87'
);

addQ(
  'dễ',
  'Nguyên tắc tổ chức và hoạt động nào bảo đảm quyền lực nhà nước Việt Nam thuộc về Nhân dân dưới sự lãnh đạo của Đảng?',
  [
    'Nguyên tắc tập trung dân chủ',
    'Nguyên tắc tam quyền phân lập tuyệt đối',
    'Nguyên tắc tự do thỏa hiệp lợi ích nhóm',
    'Nguyên tắc phân quyền cát cứ địa phương'
  ],
  0,
  'Điều 8 Hiến pháp 2013 quy định: Nhà nước được tổ chức và hoạt động theo Hiến pháp và pháp luật, quản lý xã hội bằng Hiến pháp và pháp luật, thực hiện nguyên tắc tập trung dân chủ.',
  'Hiến pháp 2013, Điều 8'
);

addQ(
  'dễ',
  'Kỳ họp Quốc hội thường lệ được tổ chức định kỳ mỗi năm mấy lần?',
  [
    'Mỗi quý 1 lần',
    'Mỗi năm 2 lần',
    'Mỗi năm 4 lần',
    'Mỗi nhiệm kỳ 5 năm họp một lần duy nhất'
  ],
  1,
  'Theo Điều 83 Hiến pháp 2013, Quốc hội họp mỗi năm hai kỳ thường lệ. Trường hợp cần thiết họp bất thường theo quy định của luật.',
  'Hiến pháp 2013, Điều 83'
);

addQ(
  'dễ',
  'Hội đồng Dân tộc của Quốc hội có nhiệm vụ cơ bản nào sau đây?',
  [
    'Xét xử các vụ án tranh chấp đất đai vùng biên giới',
    'Trực tiếp điều hành các dự án kinh tế miền núi',
    'Nghiên cứu và kiến nghị với Quốc hội về các chính sách dân tộc',
    'Thẩm tra lý lịch của tất cả công dân thuộc đồng bào thiểu số'
  ],
  2,
  'Hội đồng Dân tộc nghiên cứu và kiến nghị với Quốc hội về các vấn đề dân tộc; giám sát việc thi hành chính sách dân tộc, các chương trình phát triển kinh tế - xã hội miền núi.',
  'Hiến pháp 2013, Điều 75'
);

addQ(
  'dễ',
  'Chức danh nào sau đây thống lĩnh các lực lượng vũ trang nhân dân và giữ chức Chủ tịch Hội đồng quốc phòng và an ninh?',
  [
    'Bộ trưởng Bộ Quốc phòng',
    'Thủ tướng Chính phủ',
    'Tổng Tham mưu trưởng Quân đội',
    'Chủ tịch nước'
  ],
  3,
  'Khoản 2 Điều 88 Hiến pháp 2013 quy định Chủ tịch nước thống lĩnh lực lượng vũ trang nhân dân, giữ chức Chủ tịch Hội đồng quốc phòng và an ninh.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'dễ',
  'Cơ quan nào có quyền ban hành Lệnh tổng động viên hoặc động viên cục bộ, ban bố tình trạng khẩn cấp trong cả nước hoặc ở từng địa phương?',
  [
    'Chủ tịch nước (căn cứ vào nghị quyết của Quốc hội hoặc UBTVQH)',
    'Bộ trưởng Bộ Công an',
    'Thống đốc Ngân hàng Nhà nước',
    'Chủ tịch Ủy ban nhân dân cấp tỉnh'
  ],
  0,
  'Khoản 5 Điều 88 Hiến pháp 2013 quy định Chủ tịch nước căn cứ vào nghị quyết của Quốc hội hoặc của Ủy ban thường vụ Quốc hội, công bố, bãi bỏ quyết định tuyên bố tình trạng chiến tranh; ra lệnh tổng động viên hoặc động viên cục bộ, công bố, bãi bỏ tình trạng khẩn cấp.',
  'Hiến pháp 2013, Điều 88'
);

// ==========================================
// 35 CÂU TRUNG BÌNH (Thông hiểu, thẩm quyền, phân biệt)
// ==========================================
addQ(
  'trung bình',
  'Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam có mấy chức năng cơ bản?',
  [
    '3 chức năng: Lập hiến và lập pháp; Quyết định các vấn đề quan trọng của đất nước; Giám sát tối cao đối với hoạt động của Nhà nước',
    '2 chức năng: Quản lý ngân sách quốc gia và xét xử tội phạm hình sự',
    '4 chức năng: Hành pháp, tư pháp, lập pháp và kiểm toán độc lập',
    '1 chức năng duy nhất: Bầu và bãi nhiệm các vị trí lãnh đạo'
  ],
  0,
  'Quốc hội thực hiện 3 chức năng hiến định: (1) Lập hiến, lập pháp; (2) Quyết định các vấn đề quan trọng của đất nước; (3) Giám sát tối cao đối với hoạt động của Nhà nước.',
  'Hiến pháp 2013, Điều 69'
);

addQ(
  'trung bình',
  'Ai có quyền đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Phó Chủ tịch nước và Thủ tướng Chính phủ?',
  [
    'Chủ tịch Quốc hội',
    'Chủ tịch nước',
    'Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam',
    'Tổng Bí thư'
  ],
  1,
  'Theo khoản 3 Điều 88 Hiến pháp 2013, Chủ tịch nước có thẩm quyền đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Phó Chủ tịch nước, Thủ tướng Chính phủ.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'trung bình',
  'Ủy ban nhân dân là cơ quan chấp hành của Hội đồng nhân dân cùng cấp, đồng thời là cơ quan gì ở địa phương?',
  [
    'Thủ trưởng chế tuyệt đối, Chủ tịch UBND quyết định mọi việc không cần bàn bạc',
    'Chỉ tuân theo nghị quyết của Tòa án nhân dân cấp tỉnh',
    'Cơ quan hành chính nhà nước ở địa phương',
    'Độc lập hoàn toàn với Hội đồng nhân dân cùng cấp'
  ],
  2,
  'Theo Điều 114 Hiến pháp 2013 và Luật Tổ chức chính quyền địa phương, UBND là cơ quan chấp hành của HĐND cùng cấp, cơ quan hành chính nhà nước ở địa phương, chịu trách nhiệm trước HĐND và cơ quan hành chính cấp trên.',
  'Hiến pháp 2013, Điều 114'
);

addQ(
  'trung bình',
  'Tòa án nhân dân áp dụng chế độ xét xử mấy cấp theo quy định của Hiến pháp và Luật Tổ chức Tòa án nhân dân?',
  [
    'Một cấp duy nhất (xử sơ thẩm là chung thẩm)',
    'Ba cấp: Sơ thẩm, Phúc thẩm và Giám đốc thẩm',
    'Bốn cấp: Tòa cơ sở, Tòa tỉnh, Tòa vùng và Tòa tối cao',
    'Hai cấp: Sơ thẩm và Phúc thẩm'
  ],
  3,
  'Khoản 6 Điều 103 Hiến pháp 2013 quy định: Chế độ xét xử sơ thẩm, phúc thẩm được bảo đảm. (Giám đốc thẩm, tái thẩm là thủ tục xét lại bản án có hiệu lực, không phải cấp xét xử).',
  'Hiến pháp 2013, Điều 103'
);

addQ(
  'trung bình',
  'Thẩm quyền quyết định đại xá thuộc về cơ quan nào, và thẩm quyền quyết định đặc xá thuộc về ai?',
  [
    'Quốc hội quyết định đại xá; Chủ tịch nước quyết định đặc xá',
    'Chủ tịch nước quyết định đại xá; Quốc hội quyết định đặc xá',
    'Bộ Công an quyết định đại xá; Tòa án tối cao quyết định đặc xá',
    'Chính phủ quyết định cả đại xá và đặc xá'
  ],
  0,
  'Theo Điều 70 Hiến pháp 2013, Quốc hội có thẩm quyền quyết định đại xá. Theo Điều 88 Hiến pháp 2013, Chủ tịch nước có thẩm quyền quyết định đặc xá.',
  'Hiến pháp 2013, Điều 70 & Điều 88'
);

addQ(
  'trung bình',
  'Viện kiểm sát nhân dân do ai lãnh đạo thống nhất trong toàn ngành?',
  [
    'Bộ trưởng Bộ Tư pháp',
    'Viện trưởng Viện kiểm sát nhân dân tối cao',
    'Ủy ban Thường vụ Quốc hội',
    'Hội đồng Thẩm phán Tòa án nhân dân tối cao'
  ],
  1,
  'Viện kiểm sát nhân dân do Viện trưởng Viện kiểm sát nhân dân tối cao lãnh đạo thống nhất. Viện trưởng VKSND cấp dưới chịu sự lãnh đạo của Viện trưởng VKSND cấp trên.',
  'Luật Tổ chức Viện kiểm sát nhân dân 2014, Điều 7'
);

addQ(
  'trung bình',
  'Theo Hiến pháp 2013, cơ quan nào có thẩm quyền ban hành pháp lệnh về những vấn đề được Quốc hội giao?',
  [
    'Tòa án nhân dân tối cao',
    'Chính phủ',
    'Ủy ban Thường vụ Quốc hội',
    'Viện Hàn lâm Khoa học Xã hội'
  ],
  2,
  'Khoản 2 Điều 74 Hiến pháp 2013 quy định Ủy ban Thường vụ Quốc hội có nhiệm vụ, quyền hạn ra pháp lệnh về những vấn đề được Quốc hội giao.',
  'Hiến pháp 2013, Điều 74'
);

addQ(
  'trung bình',
  'Thành viên nào sau đây của Chính phủ KHÔNG nhất thiết phải là đại biểu Quốc hội?',
  [
    'Chủ tịch Quốc hội kiêm nhiệm',
    'Chủ tịch nước kiêm nhiệm',
    'Tổng Bí thư kiêm nhiệm',
    'Các Phó Thủ tướng, Bộ trưởng và Thủ trưởng cơ quan ngang bộ'
  ],
  3,
  'Theo Luật Tổ chức Quốc hội và Hiến pháp 2013, chỉ có Thủ tướng Chính phủ bắt buộc phải là đại biểu Quốc hội; các thành viên khác của Chính phủ không nhất thiết phải là đại biểu Quốc hội.',
  'Hiến pháp 2013, Điều 95'
);

addQ(
  'trung bình',
  'Văn bản quy phạm pháp luật nào do Ủy ban Thường vụ Quốc hội ban hành?',
  [
    'Pháp lệnh và Nghị quyết',
    'Luật và Bộ luật',
    'Lệnh và Quyết định',
    'Nghị định và Thông tư'
  ],
  0,
  'Theo Luật Ban hành văn bản quy phạm pháp luật, Ủy ban Thường vụ Quốc hội ban hành Pháp lệnh và Nghị quyết.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Theo Luật Tổ chức chính quyền địa phương, cơ quan nào có thẩm quyền giải tán Hội đồng nhân dân cấp tỉnh trong trường hợp Hội đồng nhân dân đó làm thiệt hại nghiêm trọng đến lợi ích của Nhân dân?',
  [
    'Nghị định của Chính phủ áp dụng tại địa phương',
    'Ủy ban Thường vụ Quốc hội',
    'Bản án đã có hiệu lực của Tòa án nhân dân cấp tỉnh',
    'Thông tư của Bộ trưởng Bộ Nội vụ'
  ],
  1,
  'Theo Điều 74 Hiến pháp 2013 và Luật Tổ chức chính quyền địa phương, Ủy ban Thường vụ Quốc hội có thẩm quyền giải tán Hội đồng nhân dân cấp tỉnh nếu HĐND đó làm thiệt hại nghiêm trọng đến lợi ích của Nhân dân.',
  'Hiến pháp 2013, Điều 74'
);

addQ(
  'trung bình',
  'Cơ quan nào có thẩm quyền phê chuẩn hiệp định quốc tế nhân danh Nhà nước theo đề nghị của Chủ tịch nước?',
  [
    'Chính phủ',
    'Bộ Ngoại giao',
    'Quốc hội',
    'Hội đồng An ninh quốc gia'
  ],
  2,
  'Khoản 14 Điều 70 Hiến pháp 2013 quy định Quốc hội có thẩm quyền phê chuẩn, quyết định gia nhập hoặc chấm dứt hiệu lực của điều ước quốc tế quan trọng.',
  'Hiến pháp 2013, Điều 70'
);

addQ(
  'trung bình',
  'Nguyên tắc nào sau đây KHÔNG phải là nguyên tắc cơ bản trong tổ chức và hoạt động của Tòa án nhân dân?',
  [
    'Xét xử độc lập và chỉ tuân theo pháp luật',
    'Bảo đảm quyền bào chữa của người bị buộc tội',
    'Tranh tụng trong xét xử được bảo đảm',
    'Chấp hành chỉ đạo trực tiếp về nội dung phán quyết từ Ủy ban nhân dân cùng cấp'
  ],
  3,
  'Tòa án xét xử độc lập và chỉ tuân theo pháp luật, nghiêm cấm mọi sự can thiệp của chính quyền hay cá nhân vào nội dung bản án.',
  'Hiến pháp 2013, Điều 103'
);

addQ(
  'trung bình',
  'Việc thành lập, sáp nhập, chia, điều chỉnh địa giới đơn vị hành chính tỉnh, thành phố trực thuộc trung ương thuộc thẩm quyền quyết định của ai?',
  [
    'Quốc hội',
    'Chính phủ',
    'Thủ tướng Chính phủ',
    'Chủ tịch nước'
  ],
  0,
  'Theo khoản 9 Điều 70 Hiến pháp 2013, Quốc hội có thẩm quyền quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới hành chính tỉnh, thành phố trực thuộc trung ương.',
  'Hiến pháp 2013, Điều 70'
);

addQ(
  'trung bình',
  'Thủ tướng Chính phủ có thẩm quyền nào sau đây đối với Ủy ban nhân dân cấp tỉnh?',
  [
    'Quyết định bổ nhiệm trực tiếp các Giám đốc Sở thuộc UBND tỉnh',
    'Phê chuẩn việc bầu, miễn nhiệm và điều động, đình chỉ công tác, cách chức Chủ tịch, Phó Chủ tịch UBND cấp tỉnh',
    'Trực tiếp ban hành các bản án thay thế Tòa án nhân dân tỉnh',
    'Giải thể Hội đồng nhân dân cấp tỉnh theo ý muốn cá nhân'
  ],
  1,
  'Theo Luật Tổ chức Chính phủ, Thủ tướng có quyền phê chuẩn việc bầu, miễn nhiệm và quyết định điều động, đình chỉ công tác, cách chức Chủ tịch, Phó Chủ tịch UBND cấp tỉnh.',
  'Luật Tổ chức Chính phủ 2015, Điều 28'
);

addQ(
  'trung bình',
  'Ai có thẩm quyền công bố Hiến pháp, luật và pháp lệnh sau khi được thông qua?',
  [
    'Tổng Thư ký Quốc hội',
    'Thủ tướng Chính phủ',
    'Chủ tịch nước',
    'Viện trưởng Viện kiểm sát nhân dân tối cao'
  ],
  2,
  'Theo khoản 1 Điều 88 Hiến pháp 2013, Chủ tịch nước có thẩm quyền công bố Hiến pháp, luật, pháp lệnh.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'trung bình',
  'Vị trí của Viện kiểm sát nhân dân trong mối quan hệ với Tòa án nhân dân khi thực hành quyền công tố tại phiên tòa là gì?',
  [
    'Là cơ quan cấp trên chỉ đạo trực tiếp phán quyết của Hội đồng xét xử',
    'Là cơ quan tư vấn chuyên môn không có quyền can thiệp vụ án',
    'Là cơ quan chịu sự giám sát hành chính của Thẩm phán chủ tọa phiên tòa',
    'Thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong hoạt động xét xử của Tòa án'
  ],
  3,
  'Kiểm sát viên tại phiên tòa thực hành quyền công tố (buộc tội, bảo vệ cáo trạng) và kiểm sát việc tuân theo pháp luật của Hội đồng xét xử và những người tham gia tố tụng.',
  'Luật Tổ chức Viện kiểm sát nhân dân 2014, Điều 3'
);

addQ(
  'trung bình',
  'Kiểm toán nhà nước là cơ quan do ai thành lập, hoạt động độc lập và chỉ tuân theo pháp luật?',
  [
    'Quốc hội',
    'Chính phủ',
    'Bộ Tài chính',
    'Thanh tra Chính phủ'
  ],
  0,
  'Điều 118 Hiến pháp 2013 quy định: Kiểm toán nhà nước là cơ quan do Quốc hội thành lập, hoạt động độc lập và chỉ tuân theo pháp luật, thực hiện kiểm toán việc quản lý, sử dụng tài chính, tài sản công.',
  'Hiến pháp 2013, Điều 118'
);

addQ(
  'trung bình',
  'Ai là người có thẩm quyền trình Quốc hội phê chuẩn việc bổ nhiệm Thẩm phán Tòa án nhân dân tối cao?',
  [
    'Bộ trưởng Bộ Tư pháp',
    'Chánh án Tòa án nhân dân tối cao',
    'Chủ tịch Quốc hội',
    'Ủy ban Tư pháp của Quốc hội'
  ],
  1,
  'Theo Điều 72 Luật Tổ chức Tòa án nhân dân 2014, Chánh án Tòa án nhân dân tối cao trình Quốc hội phê chuẩn việc bổ nhiệm, miễn nhiệm, cách chức Thẩm phán TAND tối cao.',
  'Luật Tổ chức TAND 2014, Điều 72'
);

addQ(
  'trung bình',
  'Ủy ban thường vụ Quốc hội KHÔNG có thẩm quyền nào sau đây?',
  [
    'Ra nghị quyết giải thích luật',
    'Ban hành pháp lệnh về các vấn đề được Quốc hội giao',
    'Bãi bỏ Hiến pháp và ban hành Hiến pháp mới',
    'Giám sát hoạt động của Chính phủ, Tòa án nhân dân tối cao, Viện kiểm sát nhân dân tối cao'
  ],
  2,
  'Chỉ có Quốc hội mới là cơ quan duy nhất có quyền làm Hiến pháp và sửa đổi Hiến pháp. Ủy ban Thường vụ Quốc hội không có thẩm quyền này.',
  'Hiến pháp 2013, Điều 69 & Điều 74'
);

addQ(
  'trung bình',
  'Hội đồng nhân dân cấp huyện chịu sự giám sát, hướng dẫn hoạt động của cơ quan nào ở cấp trên trực tiếp?',
  [
    'Ủy ban nhân dân cấp tỉnh',
    'Đoàn Luật sư cấp tỉnh',
    'Thường trực Tòa án nhân dân tỉnh',
    'Thường trực Hội đồng nhân dân cấp tỉnh'
  ],
  3,
  'Thường trực HĐND cấp tỉnh giám sát và hướng dẫn hoạt động của HĐND cấp dưới trực tiếp (cấp huyện).',
  'Luật Tổ chức chính quyền địa phương 2015'
);

addQ(
  'trung bình',
  'Đại biểu Quốc hội có quyền chất vấn những ai?',
  [
    'Chủ tịch nước, Chủ tịch Quốc hội, Thủ tướng Chính phủ, các Bộ trưởng và Thủ trưởng cơ quan ngang bộ, Chánh án TAND tối cao, Viện trưởng VKSND tối cao, Tổng Kiểm toán nhà nước',
    'Chỉ được chất vấn các đại biểu Quốc hội cùng đoàn công tác',
    'Chỉ được chất vấn Chủ tịch Ủy ban nhân dân xã nơi đại biểu cư trú',
    'Chỉ được chất vấn nhân viên các đại sứ quán nước ngoài'
  ],
  0,
  'Điều 80 Hiến pháp 2013 quy định đại biểu Quốc hội có quyền chất vấn Chủ tịch nước, Chủ tịch Quốc hội, Thủ tướng Chính phủ, Bộ trưởng và các thành viên khác của Chính phủ, Chánh án TANDTC, Viện trưởng VKSNDTC, Tổng Kiểm toán nhà nước.',
  'Hiến pháp 2013, Điều 80'
);

addQ(
  'trung bình',
  'Văn bản quy phạm pháp luật nào sau đây do Thủ tướng Chính phủ ban hành?',
  [
    'Nghị định',
    'Quyết định',
    'Thông tư',
    'Pháp lệnh'
  ],
  1,
  'Theo Luật Ban hành văn bản quy phạm pháp luật 2015, Thủ tướng Chính phủ ban hành Quyết định để quy định các biện pháp lãnh đạo, điều hành Chính phủ.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Cơ quan nào có thẩm quyền quyết định việc bãi nhiệm đại biểu Quốc hội khi đại biểu đó không còn xứng đáng với sự tín nhiệm của Nhân dân?',
  [
    'Đoàn đại biểu nơi người đó sinh hoạt',
    'Ủy ban Trung ương Mặt trận Tổ quốc',
    'Quốc hội hoặc cử tri nơi bầu ra đại biểu đó',
    'Tòa án nhân dân tối cao'
  ],
  2,
  'Theo Luật Tổ chức Quốc hội, Quốc hội hoặc cử tri nơi bầu ra đại biểu có quyền bãi nhiệm đại biểu Quốc hội nếu đại biểu đó không còn xứng đáng.',
  'Luật Tổ chức Quốc hội 2014, Điều 40'
);

addQ(
  'trung bình',
  'Chức danh nào sau đây do Quốc hội bầu theo đề nghị của Chủ tịch nước?',
  [
    'Tổng Bí thư Đảng Cộng sản Việt Nam',
    'Chủ tịch Hội đồng nhân dân thành phố Hà Nội',
    'Chủ nhiệm Văn phòng Quốc hội',
    'Phó Chủ tịch nước, Thủ tướng Chính phủ, Chánh án TAND tối cao, Viện trưởng VKSND tối cao'
  ],
  3,
  'Khoản 3 Điều 88 Hiến pháp 2013: Chủ tịch nước đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Phó Chủ tịch nước, Thủ tướng Chính phủ, Chánh án Tòa án nhân dân tối cao, Viện trưởng Viện kiểm sát nhân dân tối cao.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'trung bình',
  'Chính phủ chịu trách nhiệm và báo cáo công tác trước những cơ quan nào?',
  [
    'Quốc hội, Ủy ban Thường vụ Quốc hội và Chủ tịch nước',
    'Chỉ báo cáo trước Tòa án nhân dân tối cao',
    'Chỉ báo cáo trước các tổ chức tài chính quốc tế',
    'Chỉ chịu trách nhiệm trước cử tri cả nước trong các kỳ bầu cử'
  ],
  0,
  'Điều 94 Hiến pháp 2013 quy định: Chính phủ chịu trách nhiệm trước Quốc hội và báo cáo công tác trước Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước.',
  'Hiến pháp 2013, Điều 94'
);

addQ(
  'trung bình',
  'Ai có thẩm quyền đình chỉ việc thi hành nghị quyết sai trái của Hội đồng nhân dân cấp tỉnh và đề nghị Quốc hội bãi bỏ?',
  [
    'Chủ tịch Ủy ban nhân dân cấp tỉnh',
    'Ủy ban Thường vụ Quốc hội',
    'Chánh án Tòa án nhân dân tối cao',
    'Bộ trưởng Bộ Tư pháp'
  ],
  1,
  'Theo khoản 9 Điều 74 Hiến pháp 2013, Ủy ban thường vụ Quốc hội có thẩm quyền bãi bỏ văn bản của HĐND cấp tỉnh trái Hiến pháp, luật; đình chỉ việc thi hành nghị quyết của HĐND cấp tỉnh trái Hiến pháp, luật và đề nghị Quốc hội bãi bỏ.',
  'Hiến pháp 2013, Điều 74'
);

addQ(
  'trung bình',
  'Cơ quan nào có quyền xét xử theo thủ tục rút gọn đối với các vụ án hình sự, dân sự có tình tiết đơn giản, chứng cứ rõ ràng?',
  [
    'Ủy ban nhân dân cấp xã',
    'Viện kiểm sát nhân dân các cấp',
    'Tòa án nhân dân',
    'Công an điều tra cấp huyện'
  ],
  2,
  'Chỉ có Tòa án nhân dân mới là cơ quan xét xử và có thẩm quyền mở phiên tòa xét xử theo thủ tục rút gọn khi có đủ điều kiện luật định.',
  'Bộ luật Tố tụng hình sự 2015 & BLTTDS 2015'
);

addQ(
  'trung bình',
  'Hội đồng bầu cử quốc gia là cơ quan do ai thành lập để tổ chức bầu cử đại biểu Quốc hội và chỉ đạo công tác bầu cử đại biểu HĐND các cấp?',
  [
    'Chính phủ',
    'Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam',
    'Bộ Nội vụ',
    'Quốc hội'
  ],
  3,
  'Điều 117 Hiến pháp 2013 quy định: Hội đồng bầu cử quốc gia là cơ quan do Quốc hội thành lập, có nhiệm vụ tổ chức bầu cử đại biểu Quốc hội; chỉ đạo và hướng dẫn công tác bầu cử đại biểu Hội đồng nhân dân các cấp.',
  'Hiến pháp 2013, Điều 117'
);

addQ(
  'trung bình',
  'Bộ máy nhà nước CHXHCN Việt Nam được tổ chức và hoạt động theo nguyên tắc nào đối với quyền lực nhà nước?',
  [
    'Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp',
    'Tam quyền phân lập độc lập tuyệt đối đối kháng lẫn nhau',
    'Mỗi tỉnh thành là một nhà nước thu nhỏ có quân đội và ngoại giao riêng',
    'Quyền lực nhà nước tập trung hoàn toàn vào các tập đoàn kinh tế nhà nước'
  ],
  0,
  'Khoản 3 Điều 2 Hiến pháp 2013 khẳng định: Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp.',
  'Hiến pháp 2013, Điều 2'
);

addQ(
  'trung bình',
  'Trong hoạt động xét xử vụ án hình sự, ai là người giữ quyền công tố tại phiên tòa sơ thẩm?',
  [
    'Thư ký phiên tòa',
    'Kiểm sát viên Viện kiểm sát nhân dân',
    'Luật sư bảo vệ quyền lợi của người bị hại',
    'Điều tra viên cơ quan cảnh sát điều tra'
  ],
  1,
  'Kiểm sát viên của Viện kiểm sát nhân dân được phân công giữ quyền công tố tại phiên tòa, đọc cáo trạng và luận tội bị cáo.',
  'Bộ luật Tố tụng hình sự 2015, Điều 42'
);

addQ(
  'trung bình',
  'Quyết định của Tòa án nhân dân tuyên bố một đạo luật hoặc nghị định là vi hiến có được phép diễn ra ở Việt Nam không?',
  [
    'Có, Tòa án có quyền hủy bỏ mọi đạo luật vi hiến theo mô hình Tòa án bảo hiến',
    'Chỉ Tòa án quân sự trung ương mới có quyền phán quyết tính vi hiến',
    'Không, quyền phán quyết và xử lý văn bản quy phạm trái Hiến pháp thuộc về Quốc hội và Ủy ban Thường vụ Quốc hội',
    'Có, nếu bản án đó được Hội đồng thẩm phán thông qua với tỷ lệ 100%'
  ],
  2,
  'Ở Việt Nam không áp dụng mô hình Tòa án bảo hiến; quyền bãi bỏ văn bản trái Hiến pháp của các cơ quan trung ương thuộc thẩm quyền của Quốc hội và Ủy ban Thường vụ Quốc hội.',
  'Hiến pháp 2013, Điều 70 & Điều 74'
);

addQ(
  'trung bình',
  'Chủ tịch Ủy ban nhân dân cấp tỉnh có quyền ban hành loại văn bản quy phạm pháp luật nào?',
  [
    'Nghị quyết của Ủy ban nhân dân',
    'Pháp lệnh địa phương',
    'Chỉ thị hành pháp',
    'Ủy ban nhân dân cấp tỉnh ban hành Quyết định (quy phạm pháp luật), Chủ tịch UBND không ban hành VBQPPL'
  ],
  3,
  'Theo Luật Ban hành văn bản quy phạm pháp luật 2015, ở cấp tỉnh chỉ có HĐND ban hành Nghị quyết và tập thể UBND ban hành Quyết định là VBQPPL; cá nhân Chủ tịch UBND không ban hành VBQPPL.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Hội thẩm nhân dân khi tham gia xét xử tại Tòa án nhân dân có vị trí pháp lý như thế nào?',
  [
    'Ngang quyền với Thẩm phán khi biểu quyết các quyết định giải quyết vụ án',
    'Chỉ đóng vai trò dự thính và tư vấn tâm lý cho bị cáo',
    'Là cấp dưới chịu sự chỉ đạo biểu quyết của Thẩm phán chủ tọa',
    'Chỉ được biểu quyết về phần án phí'
  ],
  0,
  'Theo Luật Tổ chức Tòa án nhân dân và Hiến pháp 2013, khi xét xử vụ án, Hội thẩm nhân dân ngang quyền với Thẩm phán.',
  'Hiến pháp 2013, Điều 103'
);

addQ(
  'trung bình',
  'Quyền biểu quyết khi thảo luận để thông qua luật tại kỳ họp Quốc hội thuộc về ai?',
  [
    'Mọi công dân có mặt tại phòng họp Diên Hồng',
    'Tất cả các đại biểu Quốc hội có mặt tham gia kỳ họp',
    'Chỉ các thành viên trong Ban soạn thảo dự án luật',
    'Chỉ Chủ tịch Quốc hội và các Phó Chủ tịch Quốc hội'
  ],
  1,
  'Đại biểu Quốc hội là người đại diện cho ý chí, nguyện vọng của Nhân dân, có quyền biểu quyết thông qua các đạo luật, nghị quyết tại kỳ họp Quốc hội.',
  'Luật Tổ chức Quốc hội 2014, Điều 26'
);

addQ(
  'trung bình',
  'Ủy ban nhân dân cấp xã chịu sự lãnh đạo, chỉ đạo trực tiếp của cơ quan nào trong hoạt động quản lý nhà nước?',
  [
    'Tòa án nhân dân cấp huyện',
    'Viện kiểm sát nhân dân cấp huyện',
    'Ủy ban nhân dân cấp huyện và sự giám sát của HĐND cùng cấp',
    'Đoàn Đại biểu Quốc hội tỉnh'
  ],
  2,
  'UBND cấp xã là cơ quan hành chính nhà nước ở địa phương, chịu sự chỉ đạo, hướng dẫn của UBND cấp trên (cấp huyện) và chịu sự giám sát của HĐND cùng cấp.',
  'Luật Tổ chức chính quyền địa phương 2015'
);

// ==========================================
// 58 CÂU VẬN DỤNG (Tình huống bộ máy nhà nước)
// ==========================================
addQ(
  'vận dụng',
  'Tại kỳ họp thứ 5 Quốc hội khóa XV, Quốc hội thảo luận về dự án Luật Đất đai (sửa đổi). Để dự thảo luật này được thông qua và có hiệu lực thi hành, tỷ lệ đại biểu Quốc hội biểu quyết tán thành tối thiểu theo quy định chung là bao nhiêu?',
  [
    'Quá nửa tổng số đại biểu Quốc hội tán thành',
    'Ít nhất hai phần ba tổng số đại biểu Quốc hội tán thành',
    'Một trăm phần trăm đại biểu có mặt tán thành',
    'Chỉ cần Chủ tịch Quốc hội và Thủ tướng Chính phủ đồng thuận'
  ],
  0,
  'Theo khoản 1 Điều 85 Hiến pháp 2013, luật, nghị quyết của Quốc hội phải được quá nửa tổng số đại biểu Quốc hội biểu quyết tán thành (trừ trường hợp làm Hiến pháp, sửa đổi Hiến pháp hoặc rút ngắn/kéo dài nhiệm kỳ cần ít nhất 2/3).',
  'Hiến pháp 2013, Điều 85'
);

addQ(
  'vận dụng',
  'Chủ tịch nước Nguyễn Văn A nhận được tờ trình của Tòa án nhân dân tối cao và ý kiến của Viện kiểm sát nhân dân tối cao về đơn xin ân giảm án tử hình của tử tù Hoàng B. Thẩm quyền quyết định bác đơn hay ân giảm từ hình phạt tử hình xuống tù chung thân trong trường hợp này thuộc về ai?',
  [
    'Bộ trưởng Bộ Công an',
    'Chủ tịch nước',
    'Chánh án Tòa án nhân dân tối cao',
    'Quốc hội trong kỳ họp gần nhất'
  ],
  1,
  'Theo khoản 3 Điều 88 Hiến pháp 2013, Chủ tịch nước có thẩm quyền quyết định đặc xá và quyết định ân giảm án tử hình đối với người bị kết án phạt tử hình có đơn xin ân giảm.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'vận dụng',
  'Hội đồng nhân dân tỉnh K ban hành một Nghị quyết quy định thu thêm một khoản phí môi trường đối với tất cả xe ô tô lưu thông qua địa bàn tỉnh. Khoản phí này chưa được quy định trong Luật Phí và lệ phí của Quốc hội. Cơ quan nào có thẩm quyền bãi bỏ Nghị quyết trái luật này của HĐND tỉnh K?',
  [
    'Tòa án nhân dân tỉnh K',
    'Ủy ban nhân dân tỉnh K',
    'Ủy ban Thường vụ Quốc hội',
    'Thanh tra Bộ Giao thông vận tải'
  ],
  2,
  'Theo khoản 9 Điều 74 Hiến pháp 2013, Ủy ban thường vụ Quốc hội có quyền bãi bỏ văn bản của Hội đồng nhân dân tỉnh trái với Hiến pháp, luật và văn bản của cơ quan nhà nước cấp trên.',
  'Hiến pháp 2013, Điều 74'
);

addQ(
  'vận dụng',
  'Công dân Trần Văn Bình phát hiện một quyết định hành chính do Chủ tịch UBND huyện X ban hành thu hồi đất của gia đình mình có dấu hiệu trái pháp luật. Anh Bình muốn khởi kiện quyết định hành chính này thì cơ quan nào có thẩm quyền thụ lý xét xử sơ thẩm?',
  [
    'Thường trực Hội đồng nhân dân huyện X',
    'Ủy ban Kiểm tra Huyện ủy X',
    'Thanh tra Chính phủ',
    'Tòa án nhân dân cấp tỉnh (hoặc TAND cấp có thẩm quyền theo Luật Tố tụng hành chính)'
  ],
  3,
  'Khi công dân khởi kiện vụ án hành chính đối với quyết định hành chính của Chủ tịch UBND cấp huyện, Tòa án nhân dân cấp tỉnh có thẩm quyền thụ lý giải quyết sơ thẩm theo Luật Tố tụng hành chính 2015.',
  'Luật Tố tụng hành chính 2015, Điều 32'
);

addQ(
  'vận dụng',
  'Trong phiên chất vấn tại kỳ họp Quốc hội, đại biểu Quốc hội tỉnh Đ đặt câu hỏi chất vấn đối với Bộ trưởng Bộ Y tế về tình trạng thiếu thuốc bảo hiểm y tế tại các bệnh viện công. Theo luật định, Bộ trưởng Bộ Y tế có nghĩa vụ gì?',
  [
    'Có nghĩa vụ trả lời chất vấn trực tiếp trước Quốc hội tại kỳ họp hoặc trả lời bằng văn bản',
    'Có quyền từ chối trả lời nếu câu hỏi mang tính nhạy cảm chuyên ngành',
    'Chỉ cần cử chuyên viên đến trả lời thay bằng văn bản sau 6 tháng',
    'Yêu cầu Tòa án ra phán quyết bác câu hỏi chất vấn của đại biểu'
  ],
  0,
  'Theo Điều 80 Hiến pháp 2013, người bị chất vấn phải trả lời trước Quốc hội tại kỳ họp hoặc tại phiên họp Ủy ban thường vụ Quốc hội giữa hai kỳ họp; trường hợp cần điều tra thì Quốc hội cho phép trả lời bằng văn bản.',
  'Hiến pháp 2013, Điều 80'
);

addQ(
  'vận dụng',
  'Khi dịch bệnh nguy hiểm bùng phát trên diện rộng đe dọa nghiêm trọng đến tính mạng của nhân dân trên địa bàn nhiều tỉnh, cơ quan nào có thẩm quyền ban bố tình trạng khẩn cấp theo luật định?',
  [
    'Chủ tịch Quốc hội',
    'Ủy ban Thường vụ Quốc hội ban hành nghị quyết ban bố hoặc Chủ tịch nước ra lệnh ban bố tình trạng khẩn cấp',
    'Bộ Y tế tự mình ban bố áp dụng toàn quốc',
    'Tổ chức Y tế Thế giới WHO quyết định'
  ],
  1,
  'Theo Hiến pháp 2013, Ủy ban thường vụ Quốc hội quyết định ban bố tình trạng khẩn cấp; căn cứ vào nghị quyết của UBTVQH, Chủ tịch nước ra Lệnh công bố tình trạng khẩn cấp.',
  'Hiến pháp 2013, Điều 74 & Điều 88'
);

addQ(
  'vận dụng',
  'Do tình hình chiến tranh đe dọa an ninh quốc gia, Quốc hội khóa hiện tại không thể tiến hành bầu cử Quốc hội khóa mới đúng thời hạn. Thẩm quyền quyết định kéo dài nhiệm kỳ của Quốc hội thuộc về ai và với tỷ lệ biểu quyết nào?',
  [
    'Chính phủ quyết định với tỷ lệ 100% thành viên Chính phủ tán thành',
    'Chủ tịch nước ra sắc lệnh kéo dài nhiệm kỳ vô thời hạn',
    'Quốc hội quyết định kéo dài nhiệm kỳ nhưng phải được ít nhất hai phần ba tổng số đại biểu Quốc hội biểu quyết tán thành',
    'Hội đồng Dân tộc quyết định'
  ],
  2,
  'Khoản 3 Điều 71 Hiến pháp 2013 quy định: Trong trường hợp đặc biệt, nếu được ít nhất hai phần ba tổng số đại biểu Quốc hội biểu quyết tán thành thì Quốc hội quyết định rút ngắn hoặc kéo dài nhiệm kỳ của mình theo đề nghị của Ủy ban thường vụ Quốc hội.',
  'Hiến pháp 2013, Điều 71'
);

addQ(
  'vận dụng',
  'Bị cáo Nguyễn Văn An bị Tòa án nhân dân huyện Tuyên Quang xét xử sơ thẩm và tuyên án 5 năm tù về tội cướp giật tài sản. An cho rằng mức án quá nặng nên làm đơn kháng cáo lên Tòa án cấp trên. Tòa án nào có thẩm quyền xét xử phúc thẩm vụ án này?',
  [
    'Tòa án nhân dân tối cao',
    'Tòa án nhân dân cấp cao tại Hà Nội',
    'Ủy ban nhân dân tỉnh Tuyên Quang',
    'Tòa án nhân dân tỉnh Tuyên Quang'
  ],
  3,
  'Tòa án nhân dân cấp tỉnh có thẩm quyền xét xử phúc thẩm các bản án, quyết định sơ thẩm của Tòa án nhân dân cấp huyện bị kháng cáo, kháng nghị theo quy định của pháp luật tố tụng.',
  'Bộ luật Tố tụng hình sự 2015, Điều 268'
);

addQ(
  'vận dụng',
  'Chính phủ ban hành Nghị định số 100/2019/NĐ-CP quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ. Nghị định này có hiệu lực áp dụng đối với đối tượng nào?',
  [
    'Mọi cá nhân, tổ chức Việt Nam và nước ngoài có hành vi vi phạm trật tự an toàn giao thông trên lãnh thổ Việt Nam',
    'Chỉ áp dụng đối với các tài xế xe ô tô chuyên nghiệp',
    'Chỉ có hiệu lực trong phạm vi các tuyến quốc lộ do trung ương quản lý',
    'Chỉ áp dụng đối với các cơ quan hành chính nhà nước'
  ],
  0,
  'Nghị định của Chính phủ là văn bản quy phạm pháp luật có hiệu lực bắt buộc chung trên phạm vi toàn quốc đối với mọi chủ thể tham gia giao thông thuộc đối tượng điều chỉnh.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'vận dụng',
  'Ông Vũ là Chủ tịch Ủy ban nhân dân huyện Y có hành vi bao che cho doanh nghiệp khai thác cát lậu gây sạt lở bờ sông nghiêm trọng. Ai là người có thẩm quyền ra quyết định đình chỉ công tác hoặc cách chức Chủ tịch UBND huyện đối với ông Vũ?',
  [
    'Viện trưởng Viện kiểm sát nhân dân huyện Y',
    'Chủ tịch Ủy ban nhân dân cấp tỉnh',
    'Chủ tịch Quốc hội',
    'Giám đốc Công an tỉnh'
  ],
  1,
  'Theo Luật Tổ chức chính quyền địa phương 2015, Chủ tịch UBND cấp tỉnh có quyền điều động, đình chỉ công tác và cách chức Chủ tịch, Phó Chủ tịch UBND cấp huyện.',
  'Luật Tổ chức chính quyền địa phương 2015, Điều 22'
);

addQ(
  'vận dụng',
  'Tại phiên tòa sơ thẩm xét xử vụ án dân sự về tranh chấp tài sản thừa kế, Thẩm phán chủ tọa phát hiện một thành viên Hội thẩm nhân dân là bác ruột của nguyên đơn. Theo nguyên tắc tố tụng tư pháp, Thẩm phán phải xử lý như thế nào?',
  [
    'Tiếp tục phiên tòa bình thường vì Hội thẩm nhân dân không hưởng lương tư pháp',
    'Yêu cầu nguyên đơn phải chia bớt tài sản cho bị đơn',
    'Thay đổi người tiến hành tố tụng (Hội thẩm) để bảo đảm nguyên tắc vô tư, khách quan trong xét xử',
    'Tuyên hoãn phiên tòa vĩnh viễn không xét xử nữa'
  ],
  2,
  'Theo Bộ luật Tố tụng dân sự, người tiến hành tố tụng (Thẩm phán, Hội thẩm) phải từ chối tiến hành tố tụng hoặc bị thay đổi nếu là người thân thích của đương sự nhằm bảo đảm sự vô tư, công bằng.',
  'Bộ luật Tố tụng dân sự 2015, Điều 52'
);

addQ(
  'vận dụng',
  'Một công dân gửi đơn khiếu nại lên Bộ trưởng Bộ Giáo dục và Đào tạo về quyết định thu hồi bằng tốt nghiệp đại học của mình. Sau khi Bộ trưởng giải quyết khiếu nại lần đầu mà công dân không đồng ý, công dân này có quyền thực hiện tiếp biện pháp nào?',
  [
    'Đến trụ sở Liên Hợp Quốc yêu cầu phân xử',
    'Thuê công ty thám tử tư nhân đến phong tỏa cổng trường',
    'Bắt buộc phải chấp hành và không có quyền khởi kiện tiếp',
    'Khởi kiện vụ án hành chính ra Tòa án nhân dân có thẩm quyền'
  ],
  3,
  'Người khiếu nại không đồng ý với quyết định giải quyết khiếu nại có quyền khởi kiện vụ án hành chính tại Tòa án theo quy định của Luật Tố tụng hành chính.',
  'Luật Khiếu nại 2011 & Luật Tố tụng hành chính 2015'
);

addQ(
  'vận dụng',
  'Ông Lê được bầu làm đại biểu Hội đồng nhân dân thành phố Cần Thơ. Trong thời gian đương nhiệm, ông Lê phạm tội nhận hối lộ và bị Tòa án kết án phạt tù có hiệu lực pháp luật. Địa vị đại biểu HĐND của ông Lê được xử lý ra sao?',
  [
    'Đương nhiên mất quyền đại biểu Hội đồng nhân dân kể từ ngày bản án có hiệu lực pháp luật',
    'Vẫn tiếp tục giữ quyền đại biểu HĐND cho đến hết nhiệm kỳ 5 năm',
    'Được chuyển giao tư cách đại biểu cho vợ hoặc con trai',
    'Chỉ bị tạm đình chỉ tham gia biểu quyết nhưng vẫn được nhận phụ cấp'
  ],
  0,
  'Theo Luật Tổ chức chính quyền địa phương, đại biểu HĐND bị kết tội bằng bản án, quyết định của Tòa án thì đương nhiên mất quyền đại biểu HĐND kể từ ngày bản án, quyết định có hiệu lực pháp luật.',
  'Luật Tổ chức chính quyền địa phương 2015, Điều 102'
);

addQ(
  'vận dụng',
  'Ủy ban Thường vụ Quốc hội phát hiện một Thông tư của Bộ trưởng Bộ Tài chính có điều khoản trái với Nghị định của Chính phủ và Luật Thuế giá trị gia tăng. Ủy ban Thường vụ Quốc hội có thẩm quyền xử lý văn bản này như thế nào?',
  [
    'Phạt tiền cá nhân Bộ trưởng Bộ Tài chính 100 triệu đồng',
    'Bãi bỏ một phần hoặc toàn bộ văn bản quy phạm pháp luật của Bộ trưởng trái với Hiến pháp, luật, nghị quyết của Quốc hội, pháp lệnh, nghị quyết của UBTVQH',
    'Chuyển hồ sơ sang Tòa án hình sự truy tố ngay',
    'Chờ Bộ trưởng tự sửa đổi sau 10 năm'
  ],
  1,
  'Theo điểm đ khoản 1 Điều 74 Hiến pháp 2013, Ủy ban thường vụ Quốc hội có thẩm quyền đình chỉ việc thi hành hoặc bãi bỏ văn bản của Chính phủ, Thủ tướng Chính phủ, TAND tối cao, VKSND tối cao trái với pháp lệnh, nghị quyết của UBTVQH; bãi bỏ văn bản của Bộ trưởng trái pháp lệnh, nghị quyết.',
  'Hiến pháp 2013, Điều 74'
);

addQ(
  'vận dụng',
  'Chánh án Tòa án nhân dân tối cao do cơ quan nào bầu, miễn nhiệm, bãi nhiệm theo đề nghị của Chủ tịch nước?',
  [
    'Hội đồng Thẩm phán TAND tối cao',
    'Đoàn Thư ký Tòa án',
    'Quốc hội',
    'Bộ Tư pháp'
  ],
  2,
  'Theo Điều 70 Hiến pháp 2013, Quốc hội có nhiệm vụ, quyền hạn bầu, miễn nhiệm, bãi nhiệm Chánh án Tòa án nhân dân tối cao theo đề nghị của Chủ tịch nước.',
  'Hiến pháp 2013, Điều 70'
);

addQ(
  'vận dụng',
  'Trong kỳ họp xem xét việc sửa đổi, bổ sung Hiến pháp, dự thảo Hiến pháp sửa đổi được Quốc hội biểu quyết thông qua khi đạt được điều kiện nào?',
  [
    'Chỉ cần đa số đại biểu có mặt đồng ý',
    'Phải có sự chuẩn y của Hội đồng Quốc phòng và An ninh',
    'Được Thủ tướng Chính phủ ký duyệt trước kỳ họp',
    'Được ít nhất hai phần ba tổng số đại biểu Quốc hội biểu quyết tán thành'
  ],
  3,
  'Điều 120 Hiến pháp 2013 quy định: Hiến pháp được thông qua khi có ít nhất hai phần ba tổng số đại biểu Quốc hội biểu quyết tán thành.',
  'Hiến pháp 2013, Điều 120'
);

addQ(
  'vận dụng',
  'Một bị can bị Viện kiểm sát nhân dân huyện khởi tố về tội cố ý gây thương tích. Bị can cho rằng Kiểm sát viên thụ lý vụ án là anh rể của người bị hại nên sẽ không khách quan. Bị can có quyền làm gì theo luật tố tụng?',
  [
    'Đề nghị thay đổi Kiểm sát viên tiến hành tố tụng',
    'Tự ý bỏ trốn khỏi nơi cư trú để phản đối',
    'Tấn công Kiểm sát viên để tự vệ',
    'Yêu cầu hủy bỏ Bộ luật Hình sự'
  ],
  0,
  'Theo Bộ luật Tố tụng hình sự 2015, người bị buộc tội có quyền đề nghị thay đổi người có thẩm quyền tiến hành tố tụng nếu có căn cứ rõ ràng cho thấy họ có thể không vô tư trong khi làm nhiệm vụ.',
  'Bộ luật Tố tụng hình sự 2015, Điều 53'
);

addQ(
  'vận dụng',
  'Chính quyền địa phương ở đô thị tại Việt Nam gồm những cấp nào theo Luật Tổ chức chính quyền địa phương sửa đổi?',
  [
    'Chính quyền các bang và khu tự trị đặc quyền',
    'Chính quyền địa phương ở thành phố trực thuộc trung ương, quận, thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc trung ương, phường',
    'Chính quyền làng xã truyền thống tự quản',
    'Vùng liên bang và vùng hải ngoại'
  ],
  1,
  'Luật Tổ chức chính quyền địa phương quy định các đơn vị hành chính đô thị gồm thành phố trực thuộc trung ương; quận, thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc trung ương; phường.',
  'Luật Tổ chức chính quyền địa phương 2015, Điều 1'
);

addQ(
  'vận dụng',
  'Cơ quan nào có thẩm quyền quyết định việc gia nhập các tổ chức tài chính quốc tế lớn như Ngân hàng Thế giới (WB) hoặc Quỹ Tiền tệ Quốc tế (IMF) của Nhà nước ta?',
  [
    'Ngân hàng Nhà nước Việt Nam',
    'Bộ Kế hoạch và Đầu tư',
    'Quốc hội (hoặc cơ quan được Quốc hội ủy quyền theo luật định)',
    'Các ngân hàng thương mại nhà nước'
  ],
  2,
  'Quốc hội có thẩm quyền quyết định phê chuẩn, gia nhập hoặc chấm dứt hiệu lực của các điều ước quốc tế quan trọng liên quan đến việc tham gia các tổ chức quốc tế lớn.',
  'Hiến pháp 2013, Điều 70'
);

addQ(
  'vận dụng',
  'Đoàn Kiểm toán nhà nước tiến hành kiểm toán tại Ủy ban nhân dân tỉnh Bình Định và phát hiện khoản chi sai mục đích 15 tỷ đồng từ ngân sách. Trách nhiệm của Kiểm toán nhà nước khi phát hiện hành vi có dấu hiệu tội phạm là gì?',
  [
    'Tự ý ra bản án phạt tù đối với người chi sai',
    'Giữ bí mật tuyệt đối để bảo vệ uy tín địa phương',
    'Tịch thu số tiền đó về tài khoản riêng của cơ quan kiểm toán',
    'Kiến nghị cơ quan có thẩm quyền xử lý và chuyển hồ sơ cho Cơ quan điều tra, Viện kiểm sát nếu có dấu hiệu tội phạm'
  ],
  3,
  'Theo Luật Kiểm toán nhà nước 2015, khi kiểm toán phát hiện hành vi có dấu hiệu tội phạm, Tổng Kiểm toán nhà nước chuyển ngay hồ sơ vụ việc cho Cơ quan điều tra, Viện kiểm sát để điều tra, xử lý theo pháp luật.',
  'Luật Kiểm toán nhà nước 2015, Điều 68'
);

addQ(
  'vận dụng',
  'Trong phiên họp thường kỳ của Chính phủ, dự thảo Nghị quyết được biểu quyết thông qua khi đáp ứng điều kiện nào?',
  [
    'Được quá nửa tổng số thành viên Chính phủ biểu quyết tán thành',
    'Chỉ cần các Bộ trưởng khối kinh tế đồng ý',
    'Phải có sự tham gia bỏ phiếu của tất cả Chủ tịch UBND các tỉnh',
    'Được Chủ tịch nước ký phê duyệt trước'
  ],
  0,
  'Quyết định của Chính phủ phải được quá nửa tổng số thành viên Chính phủ biểu quyết tán thành. Trong trường hợp biểu quyết ngang nhau thì thực hiện theo ý kiến mà Thủ tướng Chính phủ đã biểu quyết.',
  'Luật Tổ chức Chính phủ 2015, Điều 44'
);

addQ(
  'vận dụng',
  'Một đại biểu Quốc hội bị cơ quan Cảnh sát điều tra phát hiện đang vận chuyển hàng cấm (phạm tội quả tang). Việc bắt giữ đại biểu Quốc hội trong trường hợp này được quy định như thế nào?',
  [
    'Cơ quan công an tuyệt đối không được phép bắt giữ dù phạm tội quả tang',
    'Cơ quan bắt giữ phải lập tức tạm giữ và báo cáo ngay với Chủ tịch Quốc hội hoặc Ủy ban Thường vụ Quốc hội để xem xét, quyết định',
    'Phải chờ đến kỳ họp Quốc hội gần nhất bỏ phiếu đồng ý mới được bắt',
    'Chỉ được mời đại biểu về đồn uống nước và nhắc nhở'
  ],
  1,
  'Điều 37 Luật Tổ chức Quốc hội quy định: Không được bắt, giam, giữ, khởi tố đại biểu Quốc hội nếu không có sự đồng ý của Quốc hội (hoặc UBTVQH khi Quốc hội không họp). Nếu đại biểu bị tạm giữ vì phạm tội quả tang thì cơ quan tạm giữ phải báo cáo ngay để xem xét.',
  'Luật Tổ chức Quốc hội 2014, Điều 37'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân thành phố H ban hành Quyết định hành chính về việc cưỡng chế thu hồi đất của Hộ gia đình ông V. Để quyết định này có hiệu lực bắt buộc thi hành, Quyết định phải bảo đảm yếu tố nào?',
  [
    'Phải được toàn bộ cư dân trong phường ký tên đồng thuận',
    'Phải được gửi đăng trên báo quốc tế',
    'Ban hành đúng thẩm quyền, đúng trình tự, thủ tục luật định và có căn cứ pháp lý rõ ràng',
    'Chỉ cần có chữ ký của Thư ký ủy ban'
  ],
  2,
  'Văn bản áp dụng pháp luật của cơ quan nhà nước chỉ có hiệu lực thi hành khi được ban hành đúng thẩm quyền luật định, đúng trình tự, thủ tục và có căn cứ pháp luật rõ ràng.',
  'Luật Đất đai 2013/2024 & Luật Xử lý vi phạm hành chính'
);

addQ(
  'vận dụng',
  'Một công dân nước ngoài phạm tội giết người trên chuyến bay mang quốc tịch Việt Nam khi đang bay qua không phận quốc tế. Thẩm quyền xét xử vụ án này thuộc về cơ quan nào?',
  [
    'Tòa án quốc tế La Haye',
    'Cơ quan hành chính của hãng hàng không',
    'Cảnh sát quốc tế Interpol',
    'Tòa án nhân dân của Việt Nam theo nguyên tắc lãnh thổ mở rộng'
  ],
  3,
  'Tàu bay mang quốc tịch Việt Nam được coi là lãnh thổ di động của Việt Nam. Mọi tội phạm xảy ra trên tàu bay mang quốc tịch Việt Nam đều thuộc quyền tài phán hình sự của Tòa án nhân dân Việt Nam.',
  'Bộ luật Hình sự 2015, Điều 5'
);

addQ(
  'vận dụng',
  'Khi Chánh án Tòa án nhân dân tối cao khuyết do từ trần hoặc bị miễn nhiệm giữa nhiệm kỳ, chức trách người đứng đầu TAND tối cao được chuyển giao ra sao cho đến khi Quốc hội bầu Chánh án mới?',
  [
    'Chủ tịch nước giao Phó Chánh án Tòa án nhân dân tối cao phụ trách cơ quan',
    'Bộ trưởng Bộ Tư pháp trực tiếp kiêm nhiệm điều hành xét xử',
    'Toàn bộ các vụ án phải đình chỉ xét xử vô thời hạn',
    'Thẩm phán nhiều tuổi nhất tự động lên thay'
  ],
  0,
  'Khi khuyết Chánh án TAND tối cao, Chủ tịch nước quyết định giao một Phó Chánh án TAND tối cao phụ trách cơ quan cho đến khi Quốc hội bầu Chánh án mới.',
  'Luật Tổ chức Tòa án nhân dân 2014'
);

addQ(
  'vận dụng',
  'Cơ quan nào có quyền bãi bỏ văn bản quy phạm pháp luật của Thủ tướng Chính phủ trái với Hiến pháp, luật và nghị quyết của Quốc hội?',
  [
    'Hội đồng nhân dân thành phố Hà Nội',
    'Quốc hội',
    'Văn phòng Chính phủ',
    'Thanh tra Chính phủ'
  ],
  1,
  'Khoản 9 Điều 70 Hiến pháp 2013 quy định Quốc hội có quyền bãi bỏ văn bản của Chủ tịch nước, Ủy ban thường vụ Quốc hội, Chính phủ, Thủ tướng Chính phủ, TANDTC, VKSNDTC trái với Hiến pháp, luật, nghị quyết của Quốc hội.',
  'Hiến pháp 2013, Điều 70'
);

addQ(
  'vận dụng',
  'Một cán bộ tư pháp xã thực hiện việc chứng thực bản sao từ bản chính giấy khai sinh cho người dân nhưng tự ý thu lệ phí cao gấp 10 lần mức quy định của Bộ Tài chính để bỏ túi riêng. Hành vi của cán bộ tư pháp này xâm hại trực tiếp đến:',
  [
    'Quyền sở hữu trí tuệ của Bộ Tài chính',
    'An ninh trật tự biên giới hải đảo',
    'Hoạt động đúng đắn và uy tín của cơ quan hành chính nhà nước ở địa phương',
    'Chủ quyền tài phán quốc gia'
  ],
  2,
  'Hành vi lợi dụng chức vụ quyền hạn thu phí trái luật xâm hại đến hoạt động đúng đắn của cơ quan hành chính nhà nước và quyền lợi vật chất của công dân.',
  'Luật Phòng, chống tham nhũng 2018'
);

addQ(
  'vận dụng',
  'Trong một phiên tòa phúc thẩm dân sự, Hội đồng xét xử gồm những ai theo quy định chung của Bộ luật Tố tụng dân sự?',
  [
    'Một Thẩm phán và hai Hội thẩm nhân dân',
    'Năm Thẩm phán và mười Thư ký tòa án',
    'Chỉ một Thẩm phán duy nhất điều hành',
    'Ba Thẩm phán (trừ trường hợp xét xử theo thủ tục rút gọn)'
  ],
  3,
  'Điều 64 Bộ luật Tố tụng dân sự 2015 quy định: Hội đồng xét xử phúc thẩm gồm ba Thẩm phán, trừ trường hợp xét xử theo thủ tục rút gọn do một Thẩm phán giải quyết.',
  'Bộ luật Tố tụng dân sự 2015, Điều 64'
);

addQ(
  'vận dụng',
  'Khi phát hiện lệnh bắt giữ người của Cơ quan cảnh sát điều tra không có căn cứ pháp luật, Viện kiểm sát nhân dân có quyền áp dụng biện pháp nào sau đây?',
  [
    'Không phê chuẩn lệnh bắt và yêu cầu trả tự do ngay cho người bị bắt giữ không có căn cứ',
    'Ký duyệt ngay để giữ hòa khí giữa các cơ quan tố tụng',
    'Chuyển hồ sơ sang Tòa án xét xử ngay trong ngày',
    'Yêu cầu bị can nộp tiền bảo lãnh để chia thưởng'
  ],
  0,
  'Viện kiểm sát có quyền không phê chuẩn lệnh bắt người bị giữ trong trường hợp khẩn cấp nếu không có căn cứ hoặc vi phạm trình tự, thủ tục và yêu cầu trả tự do ngay.',
  'Bộ luật Tố tụng hình sự 2015, Điều 110'
);

addQ(
  'vận dụng',
  'Hội đồng nhân dân tỉnh X họp bỏ phiếu tín nhiệm đối với các chức danh do HĐND bầu. Chủ tịch UBND tỉnh có kết quả hơn hai phần ba tổng số đại biểu HĐND đánh giá "tín nhiệm thấp". Hậu quả pháp lý tiếp theo là gì?',
  [
    'Không có hậu quả nào vì kết quả chỉ mang tính tham khảo danh dự',
    'Thường trực HĐND trình HĐND xem xét việc miễn nhiệm chức vụ Chủ tịch UBND tỉnh',
    'Chủ tịch UBND tỉnh tự động chuyển sang làm Giám đốc Công an tỉnh',
    'Tòa án ra quyết định bắt giam Chủ tịch UBND tỉnh ngay tại hội trường'
  ],
  1,
  'Theo Nghị quyết của Quốc hội về việc lấy phiếu tín nhiệm, người được lấy phiếu tín nhiệm có quá nửa đến dưới hai phần ba tổng số đại biểu đánh giá "tín nhiệm thấp" thì có thể xin từ chức; có từ hai phần ba trở lên thì cơ quan có thẩm quyền trình miễn nhiệm chức danh.',
  'Nghị quyết 96/2023/QH15 của Quốc hội'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân cấp tỉnh ban hành một Quyết định quy định mức thu học phí các trường công lập trên địa bàn cao hơn mức trần quy định tại Nghị định của Chính phủ. Quyết định này bị xem xét xử lý theo nguyên tắc thứ bậc văn bản như thế nào?',
  [
    'Vẫn có hiệu lực vì chính quyền địa phương có quyền tự chủ tuyệt đối về ngân sách',
    'Có hiệu lực ưu tiên hơn Nghị định vì ban hành sau',
    'Bị đình chỉ thi hành và bãi bỏ phần trái pháp luật vì văn bản cấp dưới phải phù hợp với văn bản quy phạm pháp luật của cấp trên',
    'Chỉ bị hủy bỏ khi toàn bộ phụ huynh học sinh ký đơn kiện tập thể'
  ],
  2,
  'Theo Luật Ban hành văn bản quy phạm pháp luật, văn bản quy phạm pháp luật của cơ quan nhà nước cấp dưới phải phù hợp với văn bản quy phạm pháp luật của cơ quan nhà nước cấp trên. Văn bản trái luật phải bị đình chỉ, bãi bỏ.',
  'Luật Ban hành VBQPPL 2015, Điều 156'
);

addQ(
  'vận dụng',
  'Đại biểu Quốc hội Nguyễn Văn C bị cử tri đơn vị bầu cử làm đơn khiếu nại nhiều lần về việc không tiếp xúc cử tri và có hành vi lừa đảo kinh tế. Cơ quan nào có thẩm quyền chỉ đạo việc thẩm tra và quyết định tạm đình chỉ nhiệm vụ đại biểu đối với ông C?',
  [
    'Ủy ban nhân dân cấp huyện nơi ông C cư trú',
    'Cơ quan thông tấn báo chí địa phương',
    'Đoàn Luật sư tỉnh',
    'Ủy ban Thường vụ Quốc hội (trong thời gian Quốc hội không họp)'
  ],
  3,
  'Theo Luật Tổ chức Quốc hội, trong thời gian Quốc hội không họp, Ủy ban thường vụ Quốc hội có thẩm quyền xem xét, quyết định việc tạm đình chỉ thực hiện nhiệm vụ, quyền hạn của đại biểu Quốc hội.',
  'Luật Tổ chức Quốc hội 2014, Điều 39'
);

addQ(
  'vận dụng',
  'Chính phủ muốn điều chỉnh giảm một số loại thuế suất thuế bảo vệ môi trường đối với xăng dầu để kiềm chế lạm phát khẩn cấp khi Quốc hội không họp. Thẩm quyền quyết định chính sách này thuộc về cơ quan nào?',
  [
    'Ủy ban Thường vụ Quốc hội ban hành Nghị quyết theo thẩm quyền được Quốc hội giao',
    'Bộ Tài chính tự ý ra quyết định không cần báo cáo',
    'Hiệp hội Xăng dầu Việt Nam tự quyết định biểu giá',
    'Ủy ban nhân dân các thành phố trực thuộc trung ương'
  ],
  0,
  'Ủy ban Thường vụ Quốc hội có thẩm quyền ban hành Nghị quyết điều chỉnh mức thuế suất thuế bảo vệ môi trường đối với xăng dầu theo thẩm quyền được Quốc hội ủy quyền giao trong luật.',
  'Luật Thuế bảo vệ môi trường 2010'
);

addQ(
  'vận dụng',
  'Trong một vụ tranh chấp quyền tác giả phần mềm tin học, Tòa án nhân dân thành phố Đà Nẵng đã trưng cầu giám định viên kỹ thuật để so sánh mã nguồn. Kết luận giám định tư pháp trong vụ án này có ý nghĩa pháp lý gì?',
  [
    'Là bản án quyết định bắt buộc Tòa án phải sao chép toàn bộ vào phán quyết',
    'Là một nguồn chứng cứ quan trọng để Tòa án xem xét, đánh giá cùng các chứng cứ khác khi ra phán quyết',
    'Hoàn toàn không có giá trị pháp lý vì giám định viên không phải là Thẩm phán',
    'Thay thế cho lời khai của nguyên đơn và bị đơn'
  ],
  1,
  'Kết luận giám định tư pháp là một nguồn chứng cứ theo quy định tố tụng, được Hội đồng xét xử xem xét, đánh giá khách quan, toàn diện cùng với các tài liệu, chứng cứ khác của vụ án.',
  'Bộ luật Tố tụng dân sự 2015, Điều 95'
);

addQ(
  'vận dụng',
  'Công an huyện khởi tố vụ án, khởi tố bị can đối với ông K về tội hủy hoại rừng. Trong suốt quá trình điều tra, Viện kiểm sát nhân dân huyện thực hiện kiểm sát điều tra. Mục đích chính của việc kiểm sát điều tra là gì?',
  [
    'Để bảo đảm việc khởi tố, điều tra đúng người, đúng tội, đúng pháp luật, không bỏ lọt tội phạm và không làm oan người vô tội',
    'Để thay mặt cơ quan công an nhận tiền bảo lãnh tại ngoại',
    'Để giúp đỡ bị can tìm luật sư bào chữa thân quen',
    'Để trực tiếp quản lý vật chứng thay cho kho tang vật công an'
  ],
  0,
  'Kiểm sát điều tra nhằm bảo đảm mọi hành vi phạm tội đều được phát hiện, khởi tố, điều tra chính xác, kịp thời, không bỏ lọt tội phạm và không làm oan người vô tội, bảo đảm quyền con người, quyền công dân.',
  'Luật Tổ chức Viện kiểm sát nhân dân 2014, Điều 12'
);

addQ(
  'vận dụng',
  'Tòa án nhân dân tối cao ban hành Án lệ số 01/2016/AL về việc xác định trách nhiệm bảo lãnh ngân hàng. Các Tòa án nhân dân cấp dưới khi xét xử các vụ án tương tự có trách nhiệm áp dụng án lệ này như thế nào?',
  [
    'Có thể phớt lờ hoàn toàn vì án lệ không phải là luật thành văn',
    'Thẩm phán, Hội thẩm phải nghiên cứu, áp dụng án lệ để giải quyết vụ việc tương tự, bảo đảm tính thống nhất trong xét xử',
    'Chỉ được áp dụng nếu đương sự có đơn yêu cầu',
    'Chỉ được áp dụng đối với các tranh chấp có yếu tố nước ngoài'
  ],
  1,
  'Nghị quyết của Hội đồng Thẩm phán TAND tối cao quy định: Thẩm phán, Hội thẩm phải nghiên cứu, áp dụng án lệ để giải quyết các vụ việc có tình tiết, sự kiện pháp lý tương tự, bảo đảm áp dụng thống nhất pháp luật.',
  'Nghị quyết 04/2019/NQ-HĐTP của TANDTC'
);

addQ(
  'vận dụng',
  'Một công dân gửi đơn tố giác một nhóm đối tượng tổ chức đánh bạc qua mạng internet đến Viện kiểm sát nhân dân cấp huyện. Trách nhiệm của Viện kiểm sát khi tiếp nhận tố giác tội phạm này là gì?',
  [
    'Tự mình mở phiên tòa xét xử ngay các đối tượng đánh bạc',
    'Từ chối tiếp nhận vì đánh bạc qua mạng thuộc thẩm quyền Bộ Thông tin truyền thông',
    'Vào sổ tiếp nhận, phân loại và chuyển ngay cho Cơ quan cảnh sát điều tra có thẩm quyền để thụ lý xác minh, đồng thời kiểm sát việc thụ lý giải quyết',
    'Yêu cầu công dân tự mình thâm nhập đường dây để thu thập chứng cứ'
  ],
  2,
  'Viện kiểm sát có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm; chuyển ngay cho Cơ quan điều tra có thẩm quyền và thực hiện kiểm sát việc tiếp nhận, giải quyết tố giác của Cơ quan điều tra.',
  'Bộ luật Tố tụng hình sự 2015, Điều 145'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân xã Bình An lập biên bản và ra quyết định xử phạt vi phạm hành chính đối với bà Thơ số tiền 10 triệu đồng về hành vi lấn chiếm vỉa hè. Biết rằng mức phạt tiền tối đa của Chủ tịch UBND cấp xã đối với lĩnh vực này theo luật định là 5 triệu đồng. Quyết định xử phạt của Chủ tịch UBND xã có hiệu lực ra sao?',
  [
    'Vẫn có hiệu lực nếu bà Thơ tự nguyện nộp phạt',
    'Bị hủy bỏ một phần hoặc toàn bộ do người có thẩm quyền ban hành quyết định vượt quá thẩm quyền luật định',
    'Chuyển thành án tích hình sự lưu hồ sơ tư pháp của bà Thơ',
    'Tự động tăng lên 20 triệu đồng nếu bà Thơ khiếu nại'
  ],
  1,
  'Quyết định xử phạt vi phạm hành chính bị ban hành vượt quá giới hạn thẩm quyền xử phạt luật định của Chủ tịch UBND cấp xã là quyết định trái thẩm quyền, phải bị hủy bỏ, sửa đổi.',
  'Luật Xử lý vi phạm hành chính 2012, Điều 38'
);

addQ(
  'vận dụng',
  'Trong phiên tòa xét xử vụ án hình sự về tội trộm cắp, bị cáo là người chưa thành niên 15 tuổi. Tòa án bắt buộc phải bảo đảm sự tham gia của ai theo quy định tố tụng?',
  [
    'Luật sư bào chữa hoặc người đại diện hợp pháp của bị cáo chưa thành niên',
    'Đại sứ quán của nước láng giềng',
    'Toàn thể học sinh cùng lớp với bị cáo đến tham dự',
    'Ban Giám đốc Sở Tư pháp tỉnh'
  ],
  0,
  'Bộ luật Tố tụng hình sự quy định đối với bị can, bị cáo là người dưới 18 tuổi thì bắt buộc phải có người bào chữa (luật sư hoặc trợ giúp viên pháp lý) và đại diện hợp pháp tham gia tố tụng để bảo vệ quyền lợi.',
  'Bộ luật Tố tụng hình sự 2015, Điều 76 & Điều 416'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân tỉnh ban hành quy định cấm các doanh nghiệp ngoài tỉnh tham gia đấu thầu các dự án đầu tư công trên địa bàn tỉnh mình nhằm bảo hộ doanh nghiệp địa phương. Văn bản này vi phạm nguyên tắc cơ bản nào của Hiến pháp và pháp luật kinh tế?',
  [
    'Nguyên tắc bảo vệ độc quyền nhà nước',
    'Nguyên tắc tự do kinh doanh bình đẳng và không phân biệt đối xử giữa các thành phần kinh tế, các vùng miền',
    'Nguyên tắc ưu tiên tuyệt đối cho nguồn vốn ngân sách địa phương',
    'Nguyên tắc tự vệ thương mại nội địa'
  ],
  1,
  'Hành vi cấm đoán phân biệt đối xử đối với doanh nghiệp ngoài tỉnh vi phạm quyền tự do kinh doanh bình đẳng của các doanh nghiệp và cản trở sự lưu thông thị trường thống nhất toàn quốc theo Điều 33 Hiến pháp.',
  'Hiến pháp 2013, Điều 33 & Luật Cạnh tranh'
);

addQ(
  'vận dụng',
  'Đại biểu Quốc hội nhận được khiếu nại của cử tri về việc chậm giải quyết bồi thường tái định cư dự án đường vành đai. Đại biểu Quốc hội có quyền hạn gì trong tình huống này?',
  [
    'Trực tiếp ký quyết định cấp phát tiền bồi thường cho cử tri',
    'Yêu cầu cơ quan nhà nước có thẩm quyền xem xét, giải quyết và đôn đốc, theo dõi việc giải quyết khiếu nại',
    'Thay mặt cử tri đi biểu tình phong tỏa dự án giao thông',
    'Tuyên bố cách chức Giám đốc Trung tâm phát triển quỹ đất'
  ],
  1,
  'Đại biểu Quốc hội có trách nhiệm tiếp nhận, chuyển đơn khiếu nại, tố cáo của công dân đến cơ quan có thẩm quyền và đôn đốc, theo dõi, giám sát việc giải quyết theo Điều 27 Luật Tổ chức Quốc hội.',
  'Luật Tổ chức Quốc hội 2014, Điều 27'
);

addQ(
  'vận dụng',
  'Một bản án dân sự sơ thẩm của Tòa án nhân dân huyện tuyên chia tài sản chung của vợ chồng. Sau 15 ngày kể từ ngày tuyên án, không có đương sự nào kháng cáo và Viện kiểm sát không kháng nghị. Bản án này phát sinh giá trị pháp lý như thế nào?',
  [
    'Chưa có hiệu lực cho đến khi được Tòa án tối cao phê duyệt',
    'Vô hiệu vì không có phiên tòa phúc thẩm xác nhận',
    'Chính thức có hiệu lực pháp luật thi hành đối với các bên đương sự',
    'Có thể bị đương sự hủy bỏ bằng thỏa thuận miệng sau 1 năm'
  ],
  2,
  'Theo Điều 273 Bộ luật Tố tụng dân sự 2015, thời hạn kháng cáo đối với bản án của Tòa án cấp sơ thẩm là 15 ngày kể từ ngày tuyên án. Hết thời hạn này mà không có kháng cáo, kháng nghị thì bản án có hiệu lực pháp luật.',
  'Bộ luật Tố tụng dân sự 2015, Điều 273'
);

addQ(
  'vận dụng',
  'Chủ tịch UBND xã X từ chối đăng ký khai sinh cho một cháu bé mới sinh với lý do người mẹ chưa kết hôn và không xác định được người cha. Hành vi từ chối của Chủ tịch UBND xã là:',
  [
    'Đúng luật vì trẻ em phải có đầy đủ cha mẹ kết hôn mới được khai sinh',
    'Hợp lý vì để bảo vệ thuần phong mỹ tục của làng quê',
    'Thuộc quyền tùy nghi của cán bộ hộ tịch địa phương',
    'Trái pháp luật vì mọi trẻ em sinh ra đều có quyền được khai sinh bất kể tình trạng hôn nhân của cha mẹ'
  ],
  3,
  'Mọi trẻ em sinh ra đều có quyền được khai sinh theo quy định của Luật Trẻ em và Luật Hộ tịch. Việc từ chối khai sinh cho trẻ ngoài giá thú là hành vi vi phạm nghiêm trọng quyền trẻ em.',
  'Luật Hộ tịch 2014, Điều 15 & Luật Trẻ em 2016'
);

addQ(
  'vận dụng',
  'Trong phiên họp Hội đồng Thẩm phán Tòa án nhân dân tối cao để thông qua nghị quyết hướng dẫn áp dụng luật, các Thẩm phán biểu quyết theo nguyên tắc nào?',
  [
    'Biểu quyết theo đa số, nếu số phiếu ngang nhau thì theo ý kiến của Chánh án',
    'Chỉ Chánh án Tòa án nhân dân tối cao mới có quyền quyết định cuối cùng',
    'Phải có sự đồng thuận 100% không được có phiếu trắng',
    'Lấy ý kiến biểu quyết của các Đoàn luật sư trước'
  ],
  0,
  'Hội đồng Thẩm phán TAND tối cao biểu quyết theo đa số; quyết định có hiệu lực khi có quá nửa tổng số thành viên biểu quyết tán thành.',
  'Luật Tổ chức Tòa án nhân dân 2014'
);

addQ(
  'vận dụng',
  'Cơ quan Cảnh sát điều tra công an quận ra Quyết định khởi tố bị can đối với đối tượng trộm cắp xe máy. Để tiến hành tạm giam bị can trong giai đoạn điều tra, cơ quan điều tra bắt buộc phải thực hiện thủ tục gì?',
  [
    'Chỉ cần Trưởng công an quận ký lệnh tạm giam là thi hành ngay',
    'Chuyển lệnh tạm giam sang Viện kiểm sát nhân dân cùng cấp để xem xét phê chuẩn trước khi thi hành',
    'Tổ chức họp báo công khai lấy ý kiến nhân dân',
    'Xin ý kiến của Hội đồng nhân dân quận'
  ],
  1,
  'Lệnh tạm giam của Cơ quan điều tra phải được Viện kiểm sát cùng cấp phê chuẩn trước khi thi hành theo quy định của Bộ luật Tố tụng hình sự 2015.',
  'Bộ luật Tố tụng hình sự 2015, Điều 119'
);

addQ(
  'vận dụng',
  'Chủ tịch nước ký quyết định bổ nhiệm Đại sứ đặc mệnh toàn quyền của Việt Nam tại Pháp. Việc bổ nhiệm đại sứ thuộc thẩm quyền của Chủ tịch nước trong lĩnh vực công tác nào?',
  [
    'Nội chính và an ninh',
    'Lập pháp và giám sát tư pháp',
    'Đối ngoại và đại diện quốc gia',
    'Quản lý doanh nghiệp nhà nước'
  ],
  2,
  'Theo khoản 6 Điều 88 Hiến pháp 2013, Chủ tịch nước có quyền quyết định bổ nhiệm, triệu hồi đại sứ đặc mệnh toàn quyền của Cộng hòa XHCN Việt Nam trong lĩnh vực đối ngoại.',
  'Hiến pháp 2013, Điều 88'
);

addQ(
  'vận dụng',
  'Khi kiểm tra việc chấp hành pháp luật tại Trại tạm giam số 1, Kiểm sát viên Viện kiểm sát nhân dân phát hiện một can phạm bị giam giữ quá thời hạn luật định 10 ngày mà không có lệnh gia hạn tạm giam. Kiểm sát viên phải xử lý ra sao?',
  [
    'Làm ngơ coi như không biết',
    'Yêu cầu gia đình can phạm nộp thêm tiền ăn',
    'Khuyên cán bộ trại giam làm giả ngày ký lệnh gia hạn',
    'Yêu cầu Giám thị trại tạm giam trả tự do ngay cho người bị giam giữ trái pháp luật'
  ],
  3,
  'Theo Luật Tổ chức Viện kiểm sát nhân dân, khi kiểm sát việc tạm giữ, tạm giam, nếu phát hiện việc giam giữ trái pháp luật thì Viện kiểm sát có quyền ra quyết định trả tự do ngay.',
  'Luật Tổ chức Viện kiểm sát nhân dân 2014, Điều 24'
);

addQ(
  'vận dụng',
  'Tòa án nhân dân huyện thụ lý đơn yêu cầu tuyên bố một cá nhân mất tích do đã biệt tích 2 năm liền trở lên mà không có tin tức xác thực. Thủ tục bắt buộc Tòa án phải tiến hành trước khi ra quyết định là gì?',
  [
    'Phát thông báo tìm kiếm người vắng mặt trên phương tiện thông tin đại chúng theo luật định',
    'Chia ngay tài sản của người vắng mặt cho các con',
    'Tự động hủy hôn thú của người vắng mặt',
    'Bán đấu giá nhà đất của người vắng mặt nộp ngân sách'
  ],
  0,
  'Theo Bộ luật Dân sự và Bộ luật Tố tụng dân sự, trước khi tuyên bố một người mất tích, Tòa án phải ra quyết định thông báo tìm kiếm người vắng mặt tại nơi cư trú trên báo, đài phát thanh/truyền hình trong thời hạn 4 tháng.',
  'Bộ luật Dân sự 2015, Điều 68'
);

addQ(
  'vận dụng',
  'Một thẩm phán được phân công xét xử một vụ án ly hôn mà một trong hai đương sự là cháu ruột gọi Thẩm phán bằng cô. Dù các đương sự không ai có ý kiến phản đối, Thẩm phán có được tiếp tục xét xử vụ án này không?',
  [
    'Được tiếp tục nếu Thẩm phán cam kết công tâm',
    'Thẩm phán phải tự mình từ chối tiến hành tố tụng theo quy định của pháp luật tố tụng',
    'Chỉ được xét xử phần ly hôn, không được xét xử phần tài sản',
    'Được xét xử nếu được Chánh án phê duyệt miệng'
  ],
  1,
  'Điều 52 Bộ luật Tố tụng dân sự 2015 quy định Thẩm phán phải từ chối tiến hành tố tụng hoặc bị thay đổi nếu là người thân thích của đương sự hoặc của người đại diện của đương sự.',
  'Bộ luật Tố tụng dân sự 2015, Điều 52'
);

addQ(
  'vận dụng',
  'Chính phủ trình Quốc hội dự án Luật Đầu tư công sửa đổi. Cơ quan nào của Quốc hội có trách nhiệm chủ trì thẩm tra dự án luật này trước khi trình ra toàn thể Quốc hội?',
  [
    'Văn phòng Chủ tịch nước',
    'Ủy ban Dân tộc của Quốc hội',
    'Ủy ban Kinh tế hoặc Ủy ban Tài chính, Ngân sách của Quốc hội',
    'Ban Chỉ đạo Trung ương về phòng chống tham nhũng'
  ],
  2,
  'Các Ủy ban chuyên môn của Quốc hội (như Ủy ban Tài chính, Ngân sách hoặc Ủy ban Kinh tế) chịu trách nhiệm thẩm tra dự án luật trong lĩnh vực phụ trách trước khi trình Quốc hội xem xét thảo luận.',
  'Luật Tổ chức Quốc hội 2014'
);

addQ(
  'vận dụng',
  'Một công dân gửi đơn tố giác hành vi nhận hối lộ của Chủ tịch UBND huyện đến Cơ quan An ninh điều tra. Khi công dân bị kẻ xấu đe dọa trả thù tính mạng, cơ quan bảo vệ pháp luật nào có trách nhiệm áp dụng các biện pháp bảo vệ người tố giác?',
  [
    'Tổ dân phố nơi người tố giác làm việc',
    'Các công ty bảo vệ tư nhân do công dân tự thuê',
    'Cơ quan ngoại giao quốc tế',
    'Cơ quan có thẩm quyền thụ lý tố giác tội phạm phối hợp với cơ quan Công an bảo vệ tính mạng, sức khỏe, tài sản của người tố giác'
  ],
  3,
  'Theo Luật Tố cáo 2018 và Bộ luật Tố tụng hình sự 2015, cơ quan thụ lý tố giác có trách nhiệm phối hợp với cơ quan công an áp dụng các biện pháp bảo vệ an toàn tính mạng, sức khỏe, tài sản của người tố giác và gia đình họ.',
  'Luật Tố cáo 2018, Điều 47'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân cấp tỉnh muốn ban hành quy định hạn chế các phương tiện cá nhân đăng ký mới để giảm ùn tắc giao thông. Để quy định này hợp pháp, UBND tỉnh phải căn cứ vào:',
  [
    'Nghị quyết của Hội đồng nhân dân cùng cấp và quy định khung của Luật Giao thông đường bộ của Quốc hội',
    'Sở thích cá nhân của Chủ tịch Ủy ban nhân dân tỉnh',
    'Khảo sát trên mạng xã hội Facebook',
    'Đơn đề nghị của các hãng taxi nội tỉnh'
  ],
  0,
  'Quy định hạn chế quyền sở hữu, sử dụng tài sản của công dân chỉ được thực hiện theo luật định; UBND tỉnh chỉ được ban hành văn bản quy phạm khi có căn cứ luật và nghị quyết của HĐND cấp tỉnh phân quyền.',
  'Hiến pháp 2013, Điều 14 & Luật Ban hành VBQPPL'
);

addQ(
  'vận dụng',
  'Viện kiểm sát nhân dân ban hành "Kháng nghị theo thủ tục phúc thẩm" đối với một bản án sơ thẩm của Tòa án khi phát hiện bản án đó có sai lầm nghiêm trọng trong áp dụng pháp luật. Thời hạn kháng nghị của Viện kiểm sát cùng cấp là bao lâu kể từ ngày tuyên án?',
  [
    '30 ngày',
    '15 ngày',
    '7 ngày',
    '60 ngày'
  ],
  1,
  'Theo Bộ luật Tố tụng hình sự và Bộ luật Tố tụng dân sự, thời hạn kháng nghị của Viện kiểm sát cùng cấp đối với bản án sơ thẩm là 15 ngày kể từ ngày tuyên án (VKS cấp trên trực tiếp là 30 ngày).',
  'Bộ luật Tố tụng hình sự 2015, Điều 337'
);

addQ(
  'vận dụng',
  'Một nhân viên văn phòng Đăng ký đất đai cố tình trì hoãn không cấp Giấy chứng nhận quyền sử dụng đất cho người dân dù hồ sơ đã đầy đủ hợp lệ suốt 6 tháng để đòi tiền bôi trơn. Người dân có quyền khiếu nại hành vi hành chính này đến ai đầu tiên?',
  [
    'Đại biểu Quốc hội tại Hà Nội',
    'Thủ tướng Chính phủ',
    'Giám đốc Văn phòng Đăng ký đất đai nơi nhân viên đó công tác (hoặc Giám đốc Sở Tài nguyên & Môi trường)',
    'Tòa án quốc tế La Haye'
  ],
  2,
  'Theo Luật Khiếu nại 2011, khiếu nại lần đầu đối với hành vi hành chính của công chức, viên chức được gửi đến người đứng đầu cơ quan, tổ chức quản lý trực tiếp công chức, viên chức đó.',
  'Luật Khiếu nại 2011, Điều 7'
);

addQ(
  'vận dụng',
  'Tại một kỳ họp bất thường, Quốc hội khóa XV xem xét công tác nhân sự cấp cao. Khi biểu quyết miễn nhiệm chức vụ Phó Thủ tướng Chính phủ, Quốc hội ban hành văn bản nào?',
  [
    'Lệnh miễn nhiệm của Chủ tịch Quốc hội',
    'Sắc lệnh hành chính khẩn cấp',
    'Quyết định cá biệt của Ban Bí thư',
    'Nghị quyết của Quốc hội về việc miễn nhiệm'
  ],
  3,
  'Quốc hội quyết định các vấn đề về nhân sự cấp cao thuộc thẩm quyền dưới hình thức ban hành Nghị quyết của Quốc hội.',
  'Luật Tổ chức Quốc hội 2014, Điều 14'
);

addQ(
  'vận dụng',
  'Giữa hai kỳ họp của Hội đồng nhân dân cấp tỉnh, Ủy ban nhân dân tỉnh cần điều chỉnh dự toán ngân sách địa phương để phòng chống thiên tai bão lũ khẩn cấp. Cơ quan nào của HĐND có thẩm quyền xem xét, cho ý kiến quyết định và báo cáo lại HĐND tại kỳ họp gần nhất?',
  [
    'Thường trực Hội đồng nhân dân cấp tỉnh',
    'Đoàn Đại biểu Quốc hội tỉnh',
    'Ban Kinh tế - Ngân sách tự ý quyết định độc lập',
    'Thanh tra tỉnh'
  ],
  0,
  'Thường trực HĐND cấp tỉnh xem xét, quyết định việc điều chỉnh dự toán ngân sách địa phương giữa hai kỳ họp theo ủy quyền và báo cáo HĐND tại kỳ họp gần nhất.',
  'Luật Tổ chức chính quyền địa phương 2015, Điều 104'
);

addQ(
  'vận dụng',
  'Khi đất nước đối mặt với nguy cơ xung đột vũ trang ở biên giới, cơ quan nào có quyền quyết định động viên các lực lượng vũ trang và triệu tập phiên họp của Hội đồng Quốc phòng và An ninh?',
  [
    'Bộ Tổng Tham mưu Quân đội nhân dân Việt Nam',
    'Chủ tịch nước (với tư cách Chủ tịch Hội đồng Quốc phòng và An ninh)',
    'Ủy ban nhân dân các tỉnh biên giới',
    'Viện kiểm sát nhân dân tối cao'
  ],
  1,
  'Chủ tịch nước giữ chức Chủ tịch Hội đồng Quốc phòng và An ninh, có quyền triệu tập các phiên họp của Hội đồng để bàn bạc biện pháp bảo vệ Tổ quốc.',
  'Hiến pháp 2013, Điều 88 & Điều 89'
);

addQ(
  'vận dụng',
  'Ủy ban nhân dân xã Y ban hành quyết định xử phạt vi phạm hành chính đối với anh Cương. Anh Cương cho rằng quyết định này trái luật nhưng sợ bị cưỡng chế nên đã chấp hành nộp phạt rồi mới làm đơn khiếu nại. Việc chấp hành nộp phạt của anh Cương có làm mất quyền khiếu nại không?',
  [
    'Mất quyền khiếu nại vì đã thừa nhận hành vi vi phạm',
    'Chỉ được khiếu nại nếu Chủ tịch UBND xã cho phép bằng văn bản',
    'Không làm mất quyền khiếu nại theo quy định của Luật Khiếu nại',
    'Chuyển thành quyền tố cáo hình sự cán bộ xã'
  ],
  2,
  'Theo Luật Khiếu nại 2011, trong thời gian giải quyết khiếu nại, quyết định hành chính vẫn phải được chấp hành trừ trường hợp bị tạm đình chỉ; việc thi hành quyết định không làm mất đi quyền khiếu nại hợp pháp của người dân.',
  'Luật Khiếu nại 2011, Điều 35'
);

console.log(`Generated ${questions.length} questions for Chapter ${chapterId}`);
writeChapterParts(chapterId, questions);
