import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 4;
const chapterName = 'Chương 4: Luật Dân sự và Luật Tố tụng Dân sự';

// Cần: 23 dễ, 32 trung bình, 54 vận dụng = 109 câu (IDs 14001 - 14109)
export const questions: Question[] = [];

let currentId = 14001;

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
    chapterId: 4,
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
// 23 CÂU DỄ (Nhận biết khái niệm, mốc tuổi, định nghĩa)
// ==========================================
addQ(
  'dễ',
  'Theo Bộ luật Dân sự 2015, người thành niên là người từ đủ bao nhiêu tuổi trở lên?',
  [
    'Từ đủ 18 tuổi trở lên',
    'Từ đủ 16 tuổi trở lên',
    'Từ đủ 20 tuổi trở lên',
    'Từ đủ 21 tuổi trở lên'
  ],
  0,
  'Điều 20 Bộ luật Dân sự 2015 quy định: Người thành niên là người từ đủ 18 tuổi trở lên.',
  'Bộ luật Dân sự 2015, Điều 20'
);

addQ(
  'dễ',
  'Theo Bộ luật Dân sự 2015, người chưa thành niên là người ở độ tuổi nào sau đây?',
  [
    'Người chưa đủ 16 tuổi',
    'Người chưa đủ 18 tuổi',
    'Người chưa đủ 20 tuổi',
    'Người chưa đủ 21 tuổi'
  ],
  1,
  'Khoản 1 Điều 21 Bộ luật Dân sự 2015 quy định: Người chưa thành niên là người chưa đủ mười tám tuổi.',
  'Bộ luật Dân sự 2015, Điều 21'
);

addQ(
  'dễ',
  'Tài sản nào sau đây thuộc loại bất động sản theo Bộ luật Dân sự 2015?',
  [
    'Xe ô tô 7 chỗ có đăng ký quyền sở hữu',
    'Tàu bay vận tải hàng hải quốc tế',
    'Đất đai, nhà ở, công trình xây dựng gắn liền với đất đai',
    'Cổ phiếu và trái phiếu doanh nghiệp'
  ],
  2,
  'Theo Điều 107 Bộ luật Dân sự 2015, bất động sản bao gồm: Đất đai; Nhà, công trình xây dựng gắn liền với đất đai; Tài sản khác gắn liền với đất đai, nhà, công trình xây dựng...',
  'Bộ luật Dân sự 2015, Điều 107'
);

addQ(
  'dễ',
  'Quyền sở hữu bao gồm những quyền năng cơ bản nào của chủ sở hữu?',
  [
    'Quyền chiếm đoạt, quyền sử dụng và quyền định đoạt',
    'Quyền kinh doanh, quyền thế chấp và quyền bán đấu giá',
    'Quyền hưởng hoa lợi, quyền bảo vệ và quyền chuyển giao',
    'Quyền chiếm hữu, quyền sử dụng và quyền định đoạt'
  ],
  3,
  'Điều 158 Bộ luật Dân sự 2015 quy định: Quyền sở hữu bao gồm quyền chiếm hữu, quyền sử dụng và quyền định đoạt tài sản của chủ sở hữu theo quy định của luật.',
  'Bộ luật Dân sự 2015, Điều 158'
);

addQ(
  'dễ',
  'Hàng thừa kế thứ nhất theo pháp luật của một người để lại di sản bao gồm những ai?',
  [
    'Vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi của người chết',
    'Ông nội, bà nội, ông ngoại, bà ngoại, anh ruột, chị ruột, em ruột của người chết',
    'Bác ruột, chú ruột, cô ruột, cậu ruột, dì ruột và cháu ruột của người chết',
    'Con dâu, con rể, anh rể, em rể và cháu nội của người chết'
  ],
  0,
  'Điểm a khoản 1 Điều 651 Bộ luật Dân sự 2015 quy định hàng thừa kế thứ nhất gồm: Vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi của người chết.',
  'Bộ luật Dân sự 2015, Điều 651'
);

addQ(
  'dễ',
  'Thời hiệu để người thừa kế yêu cầu chia di sản là bất động sản là bao nhiêu năm kể từ thời điểm mở thừa kế?',
  [
    '10 năm',
    '30 năm',
    '20 năm',
    'Không giới hạn thời hiệu'
  ],
  1,
  'Khoản 1 Điều 623 Bộ luật Dân sự 2015 quy định: Thời hiệu để người thừa kế yêu cầu chia di sản là 30 năm đối với bất động sản, 10 năm đối với động sản kể từ thời điểm mở thừa kế.',
  'Bộ luật Dân sự 2015, Điều 623'
);

addQ(
  'dễ',
  'Hình thức của di chúc theo quy định của pháp luật dân sự gồm có những hình thức nào?',
  [
    'Chỉ duy nhất di chúc bằng văn bản có công chứng',
    'Chỉ di chúc bằng miệng có ghi âm làm chứng',
    'Di chúc bằng văn bản hoặc di chúc miệng trong trường hợp tính mạng bị cái chết đe dọa',
    'Di chúc được lập trên trang mạng xã hội cá nhân'
  ],
  2,
  'Điều 627 Bộ luật Dân sự 2015 quy định: Di chúc phải được lập thành văn bản; nếu không thể lập được di chúc bằng văn bản thì có thể di chúc miệng.',
  'Bộ luật Dân sự 2015, Điều 627'
);

addQ(
  'dễ',
  'Biện pháp bảo đảm thực hiện nghĩa vụ nào mà trong đó bên bảo đảm giao tài sản thuộc quyền sở hữu của mình cho bên nhận bảo đảm để bảo đảm thực hiện nghĩa vụ?',
  [
    'Thế chấp tài sản',
    'Bảo lãnh',
    'Đặt cọc',
    'Cầm cố tài sản'
  ],
  3,
  'Điều 309 Bộ luật Dân sự 2015 quy định: Cầm cố tài sản là việc một bên giao tài sản thuộc quyền sở hữu của mình cho bên kia để bảo đảm thực hiện nghĩa vụ.',
  'Bộ luật Dân sự 2015, Điều 309'
);

addQ(
  'dễ',
  'Biện pháp bảo đảm thực hiện nghĩa vụ nào mà bên thế chấp dùng tài sản thuộc sở hữu của mình để bảo đảm thực hiện nghĩa vụ nhưng KHÔNG giao tài sản cho bên nhận thế chấp?',
  [
    'Thế chấp tài sản',
    'Cầm cố tài sản',
    'Ký quỹ',
    'Cầm giữ tài sản'
  ],
  0,
  'Điều 317 Bộ luật Dân sự 2015 quy định: Thế chấp tài sản là việc một bên dùng tài sản thuộc sở hữu của mình để bảo đảm thực hiện nghĩa vụ và không giao tài sản cho bên kia.',
  'Bộ luật Dân sự 2015, Điều 317'
);

addQ(
  'dễ',
  'Thời điểm mở thừa kế được xác định là thời điểm nào?',
  [
    'Thời điểm cơ quan công chứng mở niêm phong di chúc',
    'Thời điểm người có tài sản chết hoặc bị Tòa án tuyên bố là đã chết',
    'Thời điểm người thừa kế hoàn thành việc nộp thuế thu nhập cá nhân',
    'Thời điểm người thừa kế nộp đơn khởi kiện chia di sản'
  ],
  1,
  'Khoản 1 Điều 611 Bộ luật Dân sự 2015 quy định: Thời điểm mở thừa kế là thời điểm người có tài sản chết. Trường hợp Tòa án tuyên bố một người là đã chết thì thời điểm mở thừa kế là ngày được xác định tại quyết định của Tòa án.',
  'Bộ luật Dân sự 2015, Điều 611'
);

addQ(
  'dễ',
  'Sản vật tự nhiên mà tài sản mang lại được gọi là gì trong pháp luật dân sự?',
  [
    'Lợi tức',
    'Vật phụ',
    'Hoa lợi',
    'Bất động sản'
  ],
  2,
  'Khoản 1 Điều 109 Bộ luật Dân sự 2015 quy định: Hoa lợi là sản vật tự nhiên mà tài sản mang lại (như cây trái, sữa bò, trứng gà, con non).',
  'Bộ luật Dân sự 2015, Điều 109'
);

addQ(
  'dễ',
  'Khoản lợi thu được từ việc khai thác tài sản (như tiền thuê nhà, lãi suất gửi ngân hàng) được gọi là gì?',
  [
    'Hoa lợi',
    'Vật đồng bộ',
    'Vật tiêu hao',
    'Lợi tức'
  ],
  3,
  'Khoản 2 Điều 109 Bộ luật Dân sự 2015 quy định: Lợi tức là khoản lợi thu được từ việc khai thác tài sản.',
  'Bộ luật Dân sự 2015, Điều 109'
);

addQ(
  'dễ',
  'Giao dịch dân sự được coi là vô hiệu tuyệt đối khi vi phạm điều kiện nào sau đây?',
  [
    'Giao dịch dân sự có mục đích và nội dung vi phạm điều cấm của luật, trái đạo đức xã hội',
    'Giao dịch dân sự do một bên nhầm lẫn về giá cả thị trường',
    'Giao dịch dân sự được lập bằng văn bản viết tay',
    'Giao dịch dân sự có giá trị thanh toán bằng tiền mặt'
  ],
  0,
  'Điều 123 Bộ luật Dân sự 2015 quy định: Giao dịch dân sự có mục đích, nội dung vi phạm điều cấm của luật, trái đạo đức xã hội thì vô hiệu.',
  'Bộ luật Dân sự 2015, Điều 123'
);

addQ(
  'dễ',
  'Trong quan hệ pháp luật tố tụng dân sự, người khởi kiện vụ án dân sự để yêu cầu Tòa án bảo vệ quyền và lợi ích hợp pháp của mình được gọi là ai?',
  [
    'Bị đơn',
    'Nguyên đơn',
    'Người có quyền lợi, nghĩa vụ liên quan',
    'Người làm chứng'
  ],
  1,
  'Khoản 2 Điều 68 Bộ luật Tố tụng dân sự 2015: Nguyên đơn trong vụ án dân sự là người khởi kiện, người được cơ quan, tổ chức, cá nhân khác do Bộ luật này quy định khởi kiện để yêu cầu Tòa án giải quyết.',
  'Bộ luật Tố tụng dân sự 2015, Điều 68'
);

addQ(
  'dễ',
  'Người bị nguyên đơn khởi kiện hoặc bị cơ quan, tổ chức, cá nhân khác khởi kiện yêu cầu Tòa án giải quyết vụ án dân sự được gọi là ai?',
  [
    'Người bảo vệ quyền lợi',
    'Kiểm sát viên',
    'Bị đơn',
    'Hội thẩm nhân dân'
  ],
  2,
  'Khoản 3 Điều 68 Bộ luật Tố tụng dân sự 2015: Bị đơn trong vụ án dân sự là người bị nguyên đơn khởi kiện hoặc bị cơ quan, tổ chức, cá nhân khác khởi kiện để yêu cầu Tòa án giải quyết.',
  'Bộ luật Tố tụng dân sự 2015, Điều 68'
);

addQ(
  'dễ',
  'Di sản thừa kế bao gồm những loại tài sản nào theo Bộ luật Dân sự 2015?',
  [
    'Chỉ các bất động sản có Giấy chứng nhận quyền sử dụng đất',
    'Toàn bộ tài sản của dòng họ nơi người chết sinh sống',
    'Các khoản lương hưu và trợ cấp của Nhà nước sau khi người đó qua đời',
    'Tài sản riêng của người chết, phần tài sản của người chết trong tài sản chung với người khác'
  ],
  3,
  'Điều 612 Bộ luật Dân sự 2015: Di sản bao gồm tài sản riêng của người chết, phần tài sản của người chết trong tài sản chung với người khác.',
  'Bộ luật Dân sự 2015, Điều 612'
);

addQ(
  'dễ',
  'Khoảng thời gian do luật quy định mà khi kết thúc thời hạn đó thì phát sinh hậu quả pháp lý đối với chủ thể được gọi là gì?',
  [
    'Thời hiệu',
    'Kỳ hạn',
    'Niên hạn',
    'Giai đoạn'
  ],
  0,
  'Điều 149 Bộ luật Dân sự 2015 quy định: Thời hiệu là thời hạn do luật quy định mà khi kết thúc thời hạn đó thì phát sinh hậu quả pháp lý đối với chủ thể theo điều kiện do luật quy định.',
  'Bộ luật Dân sự 2015, Điều 149'
);

addQ(
  'dễ',
  'Chiếm hữu tài sản là việc chủ thể thực hiện hành vi nào đối với tài sản?',
  [
    'Chuyển giao quyền sở hữu tài sản cho người khác bằng hợp đồng tặng cho',
    'Nắm giữ, chi phối tài sản một cách trực tiếp hoặc gián tiếp như chủ thể có quyền đối với tài sản',
    'Tiêu thụ hoặc hủy hoại hoàn toàn tài sản trên thực tế',
    'Khai thác công dụng và hưởng hoa lợi thu được từ tài sản'
  ],
  1,
  'Khoản 1 Điều 179 Bộ luật Dân sự 2015 quy định: Chiếm hữu là việc chủ thể nắm giữ, chi phối tài sản một cách trực tiếp hoặc gián tiếp như chủ thể có quyền đối với tài sản.',
  'Bộ luật Dân sự 2015, Điều 179'
);

addQ(
  'dễ',
  'Quyền định đoạt là quyền của chủ thể trong việc làm gì đối với tài sản?',
  [
    'Chỉ được ngắm nhìn và cất giữ tài sản trong kho',
    'Khai thác giá trị sử dụng của đồ vật trong sinh hoạt gia đình',
    'Chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu hủy tài sản',
    'Cho người khác mượn tài sản mà không được thu phí'
  ],
  2,
  'Điều 192 Bộ luật Dân sự 2015 quy định: Quyền định đoạt là quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu hủy tài sản.',
  'Bộ luật Dân sự 2015, Điều 192'
);

addQ(
  'dễ',
  'Thủ tục hòa giải trong tố tụng dân sự có vị trí như thế nào theo Bộ luật Tố tụng dân sự 2015?',
  [
    'Là thủ tục tùy nghi, Tòa án thích thì tổ chức không thì bỏ qua',
    'Chỉ bắt buộc đối với các tranh chấp có giá trị dưới 1 triệu đồng',
    'Bị nghiêm cấm tuyệt đối vì làm kéo dài thời gian giải quyết vụ án',
    'Là thủ tục bắt buộc Tòa án phải tiến hành trước khi mở phiên tòa sơ thẩm (trừ những vụ án không được hòa giải hoặc không tiến hành hòa giải được)'
  ],
  3,
  'Theo Điều 205 Bộ luật Tố tụng dân sự 2015, trong giai đoạn chuẩn bị xét xử sơ thẩm, Tòa án tiến hành hòa giải để các đương sự thỏa thuận với nhau về việc giải quyết vụ án, trừ vụ án không được hòa giải hoặc không thể hòa giải.',
  'Bộ luật Tố tụng dân sự 2015, Điều 205'
);

addQ(
  'dễ',
  'Những người nào sau đây thuộc hàng thừa kế thứ hai theo pháp luật?',
  [
    'Ông nội, bà nội, ông ngoại, bà ngoại, anh ruột, chị ruột, em ruột của người chết; cháu ruột của người chết mà người chết là ông nội, bà nội, ông ngoại, bà ngoại',
    'Vợ, chồng, cha đẻ, mẹ đẻ, con đẻ của người chết',
    'Cụ nội, cụ ngoại của người chết',
    'Bác ruột, chú ruột, cô ruột, dì ruột của người chết'
  ],
  0,
  'Điểm b khoản 1 Điều 651 Bộ luật Dân sự 2015: Hàng thừa kế thứ hai gồm: ông nội, bà nội, ông ngoại, bà ngoại, anh ruột, chị ruột, em ruột của người chết; cháu ruột của người chết mà người chết là ông nội, bà nội, ông ngoại, bà ngoại.',
  'Bộ luật Dân sự 2015, Điều 651'
);

addQ(
  'dễ',
  'Hợp đồng dân sự là sự thỏa thuận giữa các bên về việc gì?',
  [
    'Thành lập chi bộ chính trị và quyên góp quỹ xã hội',
    'Xác lập, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự',
    'Bầu chọn các chức danh lãnh đạo trong cơ quan hành chính nhà nước',
    'Phân chia ranh giới địa giới hành chính giữa hai tỉnh'
  ],
  1,
  'Điều 385 Bộ luật Dân sự 2015 định nghĩa: Hợp đồng là sự thỏa thuận giữa các bên về việc xác lập, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự.',
  'Bộ luật Dân sự 2015, Điều 385'
);

addQ(
  'dễ',
  'Thời hạn chuẩn bị xét xử vụ án dân sự thông thường ở cấp sơ thẩm là bao lâu kể từ ngày thụ lý vụ án?',
  [
    '1 tháng',
    '2 năm',
    '4 tháng (có thể gia hạn thêm không quá 2 tháng đối với vụ án phức tạp)',
    '15 ngày'
  ],
  2,
  'Theo Điều 203 Bộ luật Tố tụng dân sự 2015, thời hạn chuẩn bị xét xử các vụ án tranh chấp dân sự thông thường là 4 tháng kể từ ngày thụ lý; đối với vụ án có tính chất phức tạp thì Chánh án có thể gia hạn thêm không quá 2 tháng.',
  'Bộ luật Tố tụng dân sự 2015, Điều 203'
);

// ==========================================
// 32 CÂU TRUNG BÌNH (Thông hiểu, điều kiện, phân biệt)
// ==========================================
addQ(
  'trung bình',
  'Những người nào sau đây vẫn được hưởng phần di sản bằng hai phần ba suất của một người thừa kế theo pháp luật nếu di sản được chia theo pháp luật, trong trường hợp họ không được người lập di chúc cho hưởng di sản hoặc chỉ cho hưởng phần di sản ít hơn hai phần ba suất đó?',
  [
    'Con chưa thành niên, cha, mẹ, vợ, chồng; con thành niên mà không có khả năng lao động',
    'Anh ruột, chị ruột, em ruột không có nơi nương tựa',
    'Cháu nội, cháu ngoại mồ côi cả cha lẫn mẹ',
    'Mọi người thân thích cùng sống chung nhà từ 10 năm trở lên'
  ],
  0,
  'Điều 644 Bộ luật Dân sự 2015 quy định người thừa kế không phụ thuộc vào nội dung di chúc gồm: Con chưa thành niên, cha, mẹ, vợ, chồng; Con thành niên mà không có khả năng lao động.',
  'Bộ luật Dân sự 2015, Điều 644'
);

addQ(
  'trung bình',
  'Trường hợp con của người để lại di sản chết trước hoặc cùng một thời điểm với người để lại di sản thì quyền thừa kế di sản được giải quyết thế nào theo quy định thừa kế thế vị?',
  [
    'Di sản đó tự động nộp vào ngân sách Nhà nước',
    'Cháu được hưởng phần di sản mà cha hoặc mẹ của cháu được hưởng nếu còn sống',
    'Phần di sản đó bị hủy bỏ và chia đều cho các thành viên còn lại của hàng thứ hai',
    'Vợ của người con đã chết được hưởng trọn vẹn phần đó'
  ],
  1,
  'Điều 652 Bộ luật Dân sự 2015 quy định về thừa kế thế vị: Trường hợp con của người để lại di sản chết trước hoặc cùng một thời điểm với người để lại di sản thì cháu được hưởng phần di sản mà cha hoặc mẹ của cháu được hưởng nếu còn sống.',
  'Bộ luật Dân sự 2015, Điều 652'
);

addQ(
  'trung bình',
  'Hình thức phạt vi phạm trong hợp đồng dân sự, kinh tế do các bên thỏa thuận có đặc điểm gì?',
  [
    'Luôn bị Tòa án hủy bỏ vì xâm phạm quyền tự do hợp đồng',
    'Phải được sự đồng ý trước của Ủy ban nhân dân cấp tỉnh',
    'Là sự thỏa thuận giữa các bên trong hợp đồng, theo đó bên vi phạm nghĩa vụ phải nộp một khoản tiền phạt cho bên bị vi phạm',
    'Chỉ được áp dụng khi bên vi phạm đã bị xử lý hình sự'
  ],
  2,
  'Điều 418 Bộ luật Dân sự 2015 quy định: Phạt vi phạm là sự thỏa thuận giữa các bên trong hợp đồng, theo đó bên vi phạm nghĩa vụ phải nộp một khoản tiền cho bên bị vi phạm.',
  'Bộ luật Dân sự 2015, Điều 418'
);

addQ(
  'trung bình',
  'Trường hợp người lập di chúc minh mẫn, sáng suốt nhưng không thể tự mình viết di chúc và nhờ người khác viết hộ thì di chúc phải thỏa mãn điều kiện nào để hợp pháp?',
  [
    'Chỉ cần đăng tải lên báo điện tử địa phương',
    'Người viết hộ tự ký tên mình thay cho người lập di chúc',
    'Phải có ít nhất 5 người làm chứng thuộc dòng họ nội',
    'Phải có ít nhất hai người làm chứng; người lập di chúc phải điểm chỉ hoặc ký tên trước mặt những người làm chứng'
  ],
  3,
  'Điều 634 Bộ luật Dân sự 2015 quy định: Trường hợp người lập di chúc không tự mình viết di chúc thì có thể nhờ người khác viết, nhưng phải có ít nhất là hai người làm chứng. Người lập di chúc phải ký hoặc điểm chỉ vào bản di chúc trước mặt những người làm chứng.',
  'Bộ luật Dân sự 2015, Điều 634'
);

addQ(
  'trung bình',
  'Người nào sau đây KHÔNG được làm chứng cho việc lập di chúc?',
  [
    'Người thừa kế theo di chúc hoặc theo pháp luật của người lập di chúc; người có quyền, nghĩa vụ tài sản liên quan đến di chúc; người chưa thành niên, người mất năng lực hành vi dân sự',
    'Cán bộ hưu trí không có quan hệ họ hàng với người lập di chúc',
    'Hàng xóm láng giềng có đầy đủ năng lực hành vi dân sự',
    'Công chứng viên đang hành nghề tại văn phòng công chứng'
  ],
  0,
  'Điều 632 Bộ luật Dân sự 2015 quy định người không được làm chứng cho việc lập di chúc gồm người thừa kế theo di chúc hoặc theo pháp luật; người có quyền, nghĩa vụ tài sản liên quan; người chưa thành niên, mất năng lực hành vi dân sự.',
  'Bộ luật Dân sự 2015, Điều 632'
);

addQ(
  'trung bình',
  'Khi hợp đồng dân sự bị Tòa án tuyên bố vô hiệu thì hậu quả pháp lý là gì?',
  [
    'Các bên tiếp tục thực hiện phần nghĩa vụ chưa xong',
    'Hợp đồng không làm phát sinh, thay đổi, chấm dứt quyền, nghĩa vụ dân sự của các bên từ thời điểm xác lập; các bên khôi phục lại tình trạng ban đầu, hoàn trả cho nhau những gì đã nhận',
    'Bên có lỗi tự động bị phạt tù từ 1 đến 3 năm',
    'Toàn bộ tài sản giao dịch bị tịch thu sung vào công quỹ nhà nước'
  ],
  1,
  'Điều 131 Bộ luật Dân sự 2015 quy định hậu quả pháp lý của giao dịch dân sự vô hiệu: Giao dịch không làm phát sinh, thay đổi, chấm dứt quyền, nghĩa vụ từ thời điểm xác lập; Các bên khôi phục tình trạng ban đầu, hoàn trả cho nhau những gì đã nhận.',
  'Bộ luật Dân sự 2015, Điều 131'
);

addQ(
  'trung bình',
  'Căn cứ phát sinh trách nhiệm bồi thường thiệt hại ngoài hợp đồng bao gồm các yếu tố nào?',
  [
    'Chỉ cần có hành vi vi phạm đạo đức trong đời sống gia đình',
    'Chỉ cần hai bên có tranh chấp cãi cọ nhau nơi công cộng',
    'Có thiệt hại thực tế xảy ra; có hành vi trái pháp luật; có mối quan hệ nhân quả giữa hành vi trái pháp luật và thiệt hại; có lỗi của bên gây thiệt hại (trừ trường hợp luật có quy định khác)',
    'Phải có bản án hình sự của Tòa án nhân dân tối cao kết luận'
  ],
  2,
  'Theo Điều 584 Bộ luật Dân sự 2015 và hướng dẫn tư pháp, trách nhiệm bồi thường thiệt hại ngoài hợp đồng phát sinh khi có thiệt hại, có hành vi trái pháp luật, có quan hệ nhân quả và có lỗi (trừ trường hợp pháp luật quy định trách nhiệm ngay cả khi không có lỗi).',
  'Bộ luật Dân sự 2015, Điều 584'
);

addQ(
  'trung bình',
  'Trường hợp nguồn nguy hiểm cao độ (như xe cơ giới đang vận hành, hệ thống tải điện, chất nổ) gây thiệt hại cho người khác thì trách nhiệm bồi thường được xác định thế nào?',
  [
    'Người bị thiệt hại phải tự chịu vì đã đến gần nguồn nguy hiểm',
    'Chủ sở hữu chỉ bồi thường khi nạn nhân chứng minh được chủ sở hữu có lỗi cố ý',
    'Nhà nước luôn đứng ra chi trả toàn bộ chi phí bồi thường thay chủ xe',
    'Chủ sở hữu, người chiếm hữu nguồn nguy hiểm cao độ phải bồi thường thiệt hại cả khi không có lỗi, trừ trường hợp thiệt hại xảy ra hoàn toàn do lỗi cố ý của người bị thiệt hại hoặc trường hợp bất khả kháng, tình thế cấp thiết'
  ],
  3,
  'Khoản 3 Điều 601 Bộ luật Dân sự 2015 quy định chủ sở hữu, người chiếm hữu nguồn nguy hiểm cao độ phải bồi thường thiệt hại cả khi không có lỗi, trừ trường hợp luật định loại trừ.',
  'Bộ luật Dân sự 2015, Điều 601'
);

addQ(
  'trung bình',
  'Thời hiệu khởi kiện yêu cầu Tòa án giải quyết tranh chấp hợp đồng dân sự là bao lâu kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền và lợi ích hợp pháp của mình bị xâm phạm?',
  [
    '03 năm',
    '01 năm',
    '05 năm',
    '10 năm'
  ],
  0,
  'Điều 429 Bộ luật Dân sự 2015 quy định: Thời hiệu khởi kiện để yêu cầu Tòa án giải quyết tranh chấp hợp đồng là 03 năm, kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền và lợi ích hợp pháp của mình bị xâm phạm.',
  'Bộ luật Dân sự 2015, Điều 429'
);

addQ(
  'trung bình',
  'Thời hiệu khởi kiện yêu cầu bồi thường thiệt hại ngoài hợp đồng là bao lâu kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp của mình bị xâm phạm?',
  [
    '01 năm',
    '03 năm',
    '02 năm',
    '05 năm'
  ],
  1,
  'Điều 588 Bộ luật Dân sự 2015 quy định: Thời hiệu khởi kiện yêu cầu bồi thường thiệt hại là 03 năm, kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp của mình bị xâm phạm.',
  'Bộ luật Dân sự 2015, Điều 588'
);

addQ(
  'trung bình',
  'Điều kiện để di chúc của người từ đủ 15 tuổi đến chưa đủ 18 tuổi có hiệu lực pháp luật là gì?',
  [
    'Phải được cơ quan công an quận chứng nhận hạnh kiểm',
    'Phải có tài sản để lại từ 500 triệu đồng trở lên',
    'Phải được lập thành văn bản và phải được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc',
    'Chỉ được lập bằng miệng trước sự chứng kiến của giáo viên chủ nhiệm'
  ],
  2,
  'Điểm b khoản 1 Điều 630 Bộ luật Dân sự 2015 quy định: Di chúc của người từ đủ 15 tuổi đến chưa đủ 18 tuổi phải được lập thành văn bản và phải được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc.',
  'Bộ luật Dân sự 2015, Điều 630'
);

addQ(
  'trung bình',
  'Di chúc miệng chỉ được coi là hợp pháp nếu người di chúc miệng thể hiện ý chí cuối cùng của mình trước ít nhất bao nhiêu người làm chứng?',
  [
    'Trước 01 người làm chứng là công chứng viên',
    'Trước 03 người làm chứng là đại diện tổ dân phố',
    'Trước toàn thể bà con họ hàng nội ngoại',
    'Trước ít nhất 02 người làm chứng và ngay sau đó những người làm chứng ghi chép lại, cùng ký tên hoặc điểm chỉ, trong 05 ngày làm việc phải được công chứng hoặc chứng thực'
  ],
  3,
  'Khoản 5 Điều 630 Bộ luật Dân sự 2015: Di chúc miệng được coi là hợp pháp nếu người di chúc miệng thể hiện ý chí cuối cùng trước ít nhất hai người làm chứng và ngay sau đó những người làm chứng ghi chép lại, cùng ký tên hoặc điểm chỉ. Trong thời hạn 05 ngày làm việc phải được công chứng hoặc chứng thực.',
  'Bộ luật Dân sự 2015, Điều 630'
);

addQ(
  'trung bình',
  'Hành vi "đặt cọc" trong giao dịch dân sự nhằm mục đích gì?',
  [
    'Để bảo đảm giao kết hoặc thực hiện hợp đồng',
    'Để trả trước toàn bộ tiền mua tài sản không cần hợp đồng',
    'Để bên nhận cọc tự do tiêu dùng và không bao giờ phải hoàn trả',
    'Để thay thế thủ tục nộp thuế trước bạ cho nhà nước'
  ],
  0,
  'Khoản 1 Điều 328 Bộ luật Dân sự 2015 quy định: Đặt cọc là việc một bên giao cho bên kia một khoản tiền hoặc kim khí quý, đá quý hoặc vật có giá trị khác trong một thời hạn để bảo đảm giao kết hoặc thực hiện hợp đồng.',
  'Bộ luật Dân sự 2015, Điều 328'
);

addQ(
  'trung bình',
  'Nếu bên đặt cọc từ chối việc giao kết, thực hiện hợp đồng thì số tiền đặt cọc được giải quyết thế nào nếu các bên không có thỏa thuận khác?',
  [
    'Bên đặt cọc được lấy lại toàn bộ số tiền cọc',
    'Tài sản đặt cọc thuộc về bên nhận đặt cọc',
    'Hai bên chia đôi số tiền đặt cọc',
    'Số tiền đặt cọc được chuyển giao cho Tòa án nhân dân giữ'
  ],
  1,
  'Khoản 2 Điều 328 Bộ luật Dân sự 2015 quy định: Trường hợp bên đặt cọc từ chối việc giao kết, thực hiện hợp đồng thì tài sản đặt cọc thuộc về bên nhận đặt cọc (trừ trường hợp có thỏa thuận khác).',
  'Bộ luật Dân sự 2015, Điều 328'
);

addQ(
  'trung bình',
  'Nếu bên nhận đặt cọc từ chối việc giao kết, thực hiện hợp đồng thì phải có nghĩa vụ tài sản như thế nào với bên đặt cọc nếu không có thỏa thuận khác?',
  [
    'Chỉ cần gửi lời xin lỗi bằng văn bản',
    'Chỉ phải trả lại đúng số tiền đặt cọc đã nhận',
    'Phải trả cho bên đặt cọc tài sản đặt cọc và một khoản tiền tương đương giá trị tài sản đặt cọc (phạt cọc gấp đôi)',
    'Bị tước quyền sở hữu toàn bộ tài sản đang có'
  ],
  2,
  'Khoản 2 Điều 328 Bộ luật Dân sự 2015: Trường hợp bên nhận đặt cọc từ chối việc giao kết, thực hiện hợp đồng thì phải trả cho bên đặt cọc tài sản đặt cọc và một khoản tiền tương đương giá trị tài sản đặt cọc.',
  'Bộ luật Dân sự 2015, Điều 328'
);

addQ(
  'trung bình',
  'Chủ sở hữu súc vật (như chó dữ cắn người qua đường) phải chịu trách nhiệm dân sự như thế nào?',
  [
    'Miễn trừ hoàn toàn trách nhiệm vì động vật không có ý thức',
    'Chỉ cần bán con vật đó nộp tiền phạt cho công an xã',
    'Nạn nhân phải tự chịu chi phí điều trị vì không tránh xa con vật',
    'Chủ sở hữu súc vật phải bồi thường thiệt hại do súc vật gây ra cho người khác (chi phí cứu chữa, bồi dưỡng, thu nhập bị mất)'
  ],
  3,
  'Điều 603 Bộ luật Dân sự 2015 quy định: Chủ sở hữu súc vật phải bồi thường thiệt hại do súc vật gây ra cho người khác.',
  'Bộ luật Dân sự 2015, Điều 603'
);

addQ(
  'trung bình',
  'Người từ chối nhận di sản thừa kế phải thực hiện thủ tục gì để việc từ chối hợp pháp?',
  [
    'Phải lập thành văn bản và gửi đến người quản lý di sản, những người thừa kế khác, người được giao nhiệm vụ phân chia di sản để biết và trước thời điểm phân chia di sản',
    'Chỉ cần nói miệng cho người trong gia đình nghe là đủ',
    'Phải đăng thông báo trên mạng xã hội trong 30 ngày',
    'Phải xin giấy xác nhận đồng ý của Ủy ban nhân dân cấp tỉnh'
  ],
  0,
  'Điều 620 Bộ luật Dân sự 2015 quy định: Việc từ chối nhận di sản phải được lập thành văn bản và gửi đến người quản lý di sản, những người thừa kế khác, người được giao nhiệm vụ phân chia di sản để biết; việc từ chối phải thể hiện trước thời điểm phân chia di sản.',
  'Bộ luật Dân sự 2015, Điều 620'
);

addQ(
  'trung bình',
  'Người nào sau đây KHÔNG có quyền hưởng di sản thừa kế theo quy định tại Điều 621 Bộ luật Dân sự 2015 (trừ khi người để lại di sản đã biết nhưng vẫn cho hưởng theo di chúc)?',
  [
    'Người con đi làm ăn xa nhiều năm không về quê',
    'Người bị kết án về hành vi cố ý xâm phạm tính mạng, sức khỏe hoặc ngược đãi nghiêm trọng người để lại di sản',
    'Người con riêng không cùng huyết thống với cha dượng',
    'Người mắc bệnh hiểm nghèo trong gia đình'
  ],
  1,
  'Điều 621 Bộ luật Dân sự 2015 quy định người không được quyền hưởng di sản bao gồm người bị kết án về hành vi cố ý xâm phạm tính mạng, sức khỏe, ngược đãi nghiêm trọng người để lại di sản, vi phạm nghĩa vụ nuôi dưỡng...',
  'Bộ luật Dân sự 2015, Điều 621'
);

addQ(
  'trung bình',
  'Vật tiêu hao trong pháp luật dân sự được định nghĩa là gì?',
  [
    'Vật bị rỉ sét do thời gian để ngoài trời',
    'Vật có giá trị kinh tế thấp dưới 100 nghìn đồng',
    'Vật khi đã qua sử dụng một lần thì mất đi hoặc không giữ được tính chất, hình dáng và tính năng sử dụng ban đầu',
    'Vật bị hư hỏng trong quá trình vận chuyển đường dài'
  ],
  2,
  'Khoản 1 Điều 112 Bộ luật Dân sự 2015 quy định: Vật tiêu hao là vật khi đã qua sử dụng một lần thì mất đi hoặc không giữ được tính chất, hình dáng và tính năng sử dụng ban đầu (ví dụ: xăng, dầu, thức ăn).',
  'Bộ luật Dân sự 2015, Điều 112'
);

addQ(
  'trung bình',
  'Vật không tiêu hao là vật có đặc tính gì?',
  [
    'Vật bằng kim cương vĩnh cửu không bao giờ vỡ',
    'Vật thuộc sở hữu công cộng của Nhà nước',
    'Vật chỉ dùng cho mục đích xuất khẩu ra nước ngoài',
    'Vật khi đã qua sử dụng nhiều lần mà cơ bản vẫn giữ được tính chất, hình dáng và tính năng sử dụng ban đầu'
  ],
  3,
  'Khoản 2 Điều 112 Bộ luật Dân sự 2015: Vật không tiêu hao là vật khi đã qua sử dụng nhiều lần mà cơ bản vẫn giữ được tính chất, hình dáng và tính năng sử dụng ban đầu (ví dụ: nhà ở, ô tô, máy tính).',
  'Bộ luật Dân sự 2015, Điều 112'
);

addQ(
  'trung bình',
  'Nguyên tắc tự do giao kết hợp đồng trong pháp luật dân sự bị giới hạn bởi yếu tố nào?',
  [
    'Không được vi phạm điều cấm của luật và không trái đạo đức xã hội',
    'Không được ký hợp đồng ngoài giờ hành chính',
    'Phải được sự chấp thuận trước của Trưởng công an xã',
    'Không được sử dụng chữ ký điện tử'
  ],
  0,
  'Điều 3 Bộ luật Dân sự 2015 quy định quyền tự do cam kết, thỏa thuận không vi phạm điều cấm của luật, không trái đạo đức xã hội có hiệu lực bắt buộc thực hiện đối với các bên.',
  'Bộ luật Dân sự 2015, Điều 3'
);

addQ(
  'trung bình',
  'Trách nhiệm bồi thường thiệt hại do cây cối gãy đổ gây ra cho người đi đường thuộc về ai?',
  [
    'Thuộc về người đi đường vì không chú ý quan sát cây trên đầu',
    'Chủ sở hữu, người chiếm hữu, người được giao quản lý cây cối phải bồi thường thiệt hại, trừ trường hợp bất khả kháng',
    'Toàn bộ nhân dân sống trong khu phố phải đóng góp bồi thường',
    'Công ty bảo hiểm bắt buộc phải trả vô điều kiện'
  ],
  1,
  'Điều 604 Bộ luật Dân sự 2015 quy định: Chủ sở hữu, người chiếm hữu, người được giao quản lý cây cối phải bồi thường thiệt hại do cây cối gây ra (trừ trường hợp bất khả kháng hoặc lỗi của người bị thiệt hại).',
  'Bộ luật Dân sự 2015, Điều 604'
);

addQ(
  'trung bình',
  'Khi giải quyết tranh chấp dân sự, Tòa án có quyền áp dụng "tập quán" trong trường hợp nào?',
  [
    'Trong mọi trường hợp kể cả khi đã có điều luật quy định rõ ràng',
    'Khi các bên đương sự yêu cầu áp dụng luật của nước khác',
    'Khi các bên không có thỏa thuận và pháp luật không có quy định nhưng có tập quán được áp dụng tại địa phương và không trái nguyên tắc cơ bản của luật dân sự',
    'Khi tập quán đó đi ngược lại Hiến pháp'
  ],
  2,
  'Điều 5 Bộ luật Dân sự 2015: Trường hợp các bên không có thỏa thuận và pháp luật không quy định thì có thể áp dụng tập quán, nhưng tập quán áp dụng không được trái với các nguyên tắc cơ bản của pháp luật dân sự.',
  'Bộ luật Dân sự 2015, Điều 5'
);

addQ(
  'trung bình',
  'Bản án sơ thẩm của Tòa án nhân dân cấp huyện bị Viện kiểm sát nhân dân kháng nghị theo thủ tục phúc thẩm trong thời hạn bao lâu?',
  [
    '07 ngày kể từ ngày tuyên án',
    '10 ngày kể từ ngày nhận được bản án',
    '60 ngày kể từ ngày mở phiên tòa',
    '15 ngày đối với Viện kiểm sát cùng cấp; 30 ngày đối với Viện kiểm sát cấp trên trực tiếp kể từ ngày tuyên án'
  ],
  3,
  'Theo Điều 280 Bộ luật Tố tụng dân sự 2015, thời hạn kháng nghị của Viện kiểm sát cùng cấp đối với bản án của Tòa án cấp sơ thẩm là 15 ngày, của Viện kiểm sát cấp trên trực tiếp là 30 ngày kể từ ngày tuyên án.',
  'Bộ luật Tố tụng dân sự 2015, Điều 280'
);

addQ(
  'trung bình',
  'Thẩm quyền giải quyết tranh chấp hợp đồng mua bán nhà ở giữa hai công dân cư trú tại quận Đống Đa, Hà Nội thuộc về Tòa án nào theo lãnh thổ nếu không có thỏa thuận khác?',
  [
    'Tòa án nhân dân nơi có bất động sản (nhà ở) tọa lạc',
    'Tòa án nhân dân tối cao',
    'Tòa án nhân dân nơi nguyên đơn có hộ khẩu thường trú',
    'Tòa án quân sự Quân khu Thủ đô'
  ],
  0,
  'Điểm c khoản 1 Điều 39 Bộ luật Tố tụng dân sự 2015: Đối tượng tranh chấp là bất động sản thì chỉ Tòa án nơi có bất động sản có thẩm quyền giải quyết.',
  'Bộ luật Tố tụng dân sự 2015, Điều 39'
);

addQ(
  'trung bình',
  'Quyền từ chối nhận di sản thừa kế KHÔNG được pháp luật công nhận trong trường hợp nào sau đây?',
  [
    'Khi người thừa kế đã đủ 60 tuổi',
    'Nhằm trốn tránh việc thực hiện nghĩa vụ tài sản của mình đối với người khác',
    'Khi di sản có giá trị lớn hơn 10 tỷ đồng',
    'Khi người thừa kế là công chức nhà nước'
  ],
  1,
  'Khoản 1 Điều 620 Bộ luật Dân sự 2015 quy định: Không được từ chối nhận di sản nếu việc từ chối nhằm trốn tránh việc thực hiện nghĩa vụ tài sản của mình đối với người khác.',
  'Bộ luật Dân sự 2015, Điều 620'
);

addQ(
  'trung bình',
  'Người đại diện theo pháp luật của pháp nhân là ai?',
  [
    'Toàn thể công nhân viên đang làm việc trong pháp nhân',
    'Người góp vốn nhiều tiền nhất vào pháp nhân',
    'Người được pháp nhân chỉ định theo điều lệ hoặc người có thẩm quyền đại diện theo quy định của pháp luật',
    'Ủy ban nhân dân cấp tỉnh nơi pháp nhân đặt trụ sở'
  ],
  2,
  'Điều 137 Bộ luật Dân sự 2015 quy định người đại diện theo pháp luật của pháp nhân bao gồm người được chỉ định trong điều lệ của pháp nhân hoặc người do Tòa án chỉ định trong quá trình tố tụng.',
  'Bộ luật Dân sự 2015, Điều 137'
);

addQ(
  'trung bình',
  'Theo Bộ luật Dân sự 2015, quyền định đoạt tài sản là quyền năng của chủ thể như thế nào?',
  [
    'Chỉ bao gồm quyền nắm giữ và chi phối trực tiếp tài sản trên thực tế',
    'Chỉ bao gồm quyền khai thác công dụng và hưởng hoa lợi, lợi tức từ tài sản',
    'Quyền chuyển giao quyền sử dụng tài sản cho cơ quan nhà nước có thẩm quyền phê duyệt',
    'Quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu hủy tài sản'
  ],
  3,
  'Điều 192 Bộ luật Dân sự 2015 quy định: Quyền định đoạt là quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu hủy tài sản.',
  'Bộ luật Dân sự 2015, Điều 192'
);

addQ(
  'trung bình',
  'Khi di chúc không xác định rõ phần di sản của từng người thừa kế thì di sản được phân chia như thế nào?',
  [
    'Di sản được chia đều cho những người được chỉ định trong di chúc (trừ trường hợp có thỏa thuận khác)',
    'Toàn bộ di sản thuộc về người con trai cả',
    'Di sản bị vô hiệu và chuyển sang chia theo phong tục địa phương',
    'Người nào nộp đơn yêu cầu chia trước thì được hưởng 70%'
  ],
  0,
  'Khoản 2 Điều 659 Bộ luật Dân sự 2015 quy định: Trường hợp di chúc không xác định rõ phần của từng người thừa kế thì di sản được chia đều cho những người được chỉ định trong di chúc, trừ trường hợp có thỏa thuận khác.',
  'Bộ luật Dân sự 2015, Điều 659'
);

addQ(
  'trung bình',
  'Điều kiện nào sau đây KHÔNG làm cho giao dịch dân sự bị vô hiệu do bị lừa dối?',
  [
    'Một bên cố ý làm cho bên kia hiểu sai lệch về chủ thể, tính chất của đối tượng hoặc nội dung giao dịch',
    'Bên mua tự mình suy đoán chủ quan về giá đất tương lai sẽ tăng mà không có hành vi gian dối nào từ bên bán',
    'Người bán hàng giả cung cấp giấy kiểm định giả mạo',
    'Bên bán xe cam kết xe nguyên bản chưa đâm đụng nhưng thực tế xe từng bị tai nạn nát đầu'
  ],
  1,
  'Lừa dối trong giao dịch dân sự là hành vi cố ý của một bên hoặc của người thứ ba nhằm làm cho bên kia hiểu sai lệch về chủ thể, tính chất của đối tượng hoặc nội dung giao dịch. Việc tự mình phán đoán sai không phải bị lừa dối.',
  'Bộ luật Dân sự 2015, Điều 127'
);

addQ(
  'trung bình',
  'Một người lập di chúc hợp pháp để lại toàn bộ tài sản của mình cho một tổ chức từ thiện. Người này có một người con trai 17 tuổi khỏe mạnh. Người con trai này có được hưởng di sản không?',
  [
    'Không được hưởng vì người cha có toàn quyền tự do định đoạt tài sản',
    'Được hưởng toàn bộ 100% tài sản vì là con ruột',
    'Vẫn được hưởng phần di sản bằng hai phần ba suất của một người thừa kế theo pháp luật (thừa kế không phụ thuộc nội dung di chúc)',
    'Chỉ được hưởng nếu hội từ thiện đồng ý trích lại một phần tiền'
  ],
  2,
  'Theo Điều 644 Bộ luật Dân sự 2015, con chưa thành niên (17 tuổi) thuộc diện người thừa kế không phụ thuộc vào nội dung di chúc, được hưởng 2/3 một suất thừa kế theo pháp luật.',
  'Bộ luật Dân sự 2015, Điều 644'
);

addQ(
  'trung bình',
  'Ai là người chịu trách nhiệm bồi thường thiệt hại do người làm công, người học nghề gây ra trong khi thực hiện công việc được giao?',
  [
    'Bản thân người làm công luôn phải chịu trách nhiệm bồi thường trực tiếp',
    'Nhà nước phải bồi thường từ quỹ phúc lợi xã hội',
    'Cha mẹ của người làm công phải chịu thay vô điều kiện',
    'Cá nhân, pháp nhân sử dụng lao động phải bồi thường thiệt hại và có quyền yêu cầu người làm công hoàn trả một khoản tiền theo luật định'
  ],
  3,
  'Điều 600 Bộ luật Dân sự 2015 quy định cá nhân, pháp nhân phải bồi thường thiệt hại do người làm công, người học nghề gây ra trong khi thực hiện công việc được giao và có quyền yêu cầu người làm công, người học nghề có lỗi phải hoàn trả.',
  'Bộ luật Dân sự 2015, Điều 600'
);

// ==========================================
// 54 CÂU VẬN DỤNG (Tình huống dân sự & thừa kế)
// ==========================================
addQ(
  'vận dụng',
  'Ông Quang chết không để lại di chúc. Ông có khối tài sản riêng là 1,2 tỷ đồng. Khi còn sống, ông có vợ là bà Lan và hai người con đẻ là anh Hùng và chị Mai. Cha mẹ đẻ của ông Quang đều đã qua đời từ trước. Theo quy định pháp luật thừa kế, di sản của ông Quang được phân chia thế nào?',
  [
    'Bà Lan, anh Hùng, chị Mai mỗi người được hưởng 400 triệu đồng',
    'Bà Lan được hưởng toàn bộ 1,2 tỷ đồng vì là vợ hợp pháp',
    'Anh Hùng được 600 triệu đồng vì là con trai, bà Lan và chị Mai mỗi người 300 triệu đồng',
    'Chia đều cho bà Lan và anh Hùng, chị Mai đã lấy chồng nên không được hưởng'
  ],
  0,
  'Theo Điều 651 BLDS 2015, hàng thừa kế thứ nhất gồm vợ (bà Lan) và hai con đẻ (anh Hùng, chị Mai). Do cha mẹ đã mất trước, di sản 1,2 tỷ chia đều cho 3 người: 1,2 tỷ / 3 = 400 triệu đồng/người.',
  'Bộ luật Dân sự 2015, Điều 651'
);

addQ(
  'vận dụng',
  'Ông Hải qua đời để lại khối di sản trị giá 900 triệu đồng. Ông có lập di chúc hợp pháp để lại toàn bộ 900 triệu đồng cho người bạn thân là ông Tuấn. Khi mất, ông Hải có vợ là bà Thắm (50 tuổi, khỏe mạnh) và một người con trai tên Nam (24 tuổi, hoàn toàn bình thường). Bà Thắm yêu cầu Tòa án giải quyết quyền lợi thừa kế của mình. Bà Thắm sẽ được hưởng bao nhiêu tiền?',
  [
    'Bà Thắm không được đồng nào vì ông Hải đã lập di chúc cho ông Tuấn',
    'Bà Thắm được hưởng 300 triệu đồng (hai phần ba một suất thừa kế theo luật)',
    'Bà Thắm được hưởng 450 triệu đồng (một nửa khối di sản)',
    'Bà Thắm được hưởng trọn vẹn 900 triệu đồng'
  ],
  1,
  'Nếu chia theo pháp luật, hàng thừa kế thứ nhất của ông Hải gồm bà Thắm và anh Nam (mỗi suất = 900 triệu / 2 = 450 triệu). Bà Thắm là vợ nên được hưởng thừa kế không phụ thuộc nội dung di chúc = 2/3 * 450 triệu = 300 triệu đồng. (Anh Nam thành niên, khỏe mạnh nên không thuộc diện Điều 644).',
  'Bộ luật Dân sự 2015, Điều 644'
);

addQ(
  'vận dụng',
  'Anh Bắc và chị Nga ký hợp đồng đặt cọc mua bán căn hộ chung cư. Anh Bắc giao cho chị Nga 100 triệu đồng tiền đặt cọc để bảo đảm mua nhà với giá 2 tỷ đồng trong vòng 1 tháng. Đến hạn ký hợp đồng chuyển nhượng, chị Nga đổi ý không muốn bán căn hộ nữa vì có người trả giá cao hơn. Không có thỏa thuận khác, chị Nga phải trả cho anh Bắc bao nhiêu tiền?',
  [
    '100 triệu đồng',
    '150 triệu đồng',
    '200 triệu đồng (gồm 100 triệu tiền cọc và 100 triệu tiền phạt cọc)',
    'Bị phạt 500 triệu đồng nộp ngân sách'
  ],
  2,
  'Theo khoản 2 Điều 328 BLDS 2015, bên nhận đặt cọc từ chối giao kết hợp đồng thì phải trả cho bên đặt cọc tài sản đặt cọc (100 triệu) và một khoản tiền tương đương giá trị tài sản đặt cọc (100 triệu), tổng cộng là 200 triệu đồng.',
  'Bộ luật Dân sự 2015, Điều 328'
);

addQ(
  'vận dụng',
  'Chó béc-giê của nhà ông Thắng xổng chuồng chạy ra đường cắn rách chân em bé 6 tuổi đang đi bộ cùng mẹ, làm bé phải khâu vết thương và tiêm phòng dại hết 12 triệu đồng. Ông Thắng cho rằng mẹ của bé không trông con cẩn thận nên ông chỉ hỗ trợ 1 triệu đồng. Pháp luật quy định trách nhiệm bồi thường của ông Thắng ra sao?',
  [
    'Ông Thắng không phải bồi thường vì thả chó trong ngõ xóm là tập quán quen thuộc',
    'Mẹ của bé phải chịu toàn bộ vì dẫn con ra đường nơi có động vật',
    'Ông Thắng chỉ phải nộp phạt hành chính 500 nghìn đồng và không phải bồi thường viện phí',
    'Ông Thắng là chủ sở hữu súc vật phải bồi thường toàn bộ chi phí cứu chữa, điều trị và phục hồi sức khỏe cho em bé'
  ],
  3,
  'Theo Điều 603 BLDS 2015, chủ sở hữu súc vật phải bồi thường toàn bộ thiệt hại do súc vật gây ra cho người khác, gồm chi phí cứu chữa, bồi dưỡng, phục hồi sức khỏe.',
  'Bộ luật Dân sự 2015, Điều 603'
);

addQ(
  'vận dụng',
  'Ông Thành và bà Cúc có hai con chung là Bình và An. Anh Bình đã lấy vợ là Hoa và có con trai là Tùng (8 tuổi). Năm 2021, anh Bình không may qua đời trong tai nạn giao thông. Năm 2023, ông Thành qua đời không để lại di chúc, để lại di sản 1,8 tỷ đồng. Biết bà Cúc và anh An còn sống. Cháu Tùng có được hưởng di sản thừa kế của ông nội không và được hưởng bao nhiêu?',
  [
    'Cháu Tùng được thừa kế thế vị phần của anh Bình là 600 triệu đồng',
    'Cháu Tùng không được hưởng vì cha cháu đã chết trước ông nội',
    'Chị Hoa (mẹ Tùng) được hưởng 600 triệu đồng thay con',
    'Bà Cúc và anh An mỗi người được chia 900 triệu đồng'
  ],
  0,
  'Theo Điều 652 BLDS 2015 về thừa kế thế vị: Con (anh Bình) chết trước người để lại di sản (ông Thành) thì cháu (Tùng) được hưởng phần di sản mà cha cháu được hưởng nếu còn sống. Hàng 1 gồm bà Cúc, anh An, anh Bình (Tùng thế vị) -> mỗi suất = 1,8 tỷ / 3 = 600 triệu đồng.',
  'Bộ luật Dân sự 2015, Điều 652'
);

addQ(
  'vận dụng',
  'Bà Mai cho cháu ruột là Nam mượn chiếc máy tính xách tay trị giá 20 triệu đồng để học tập. Do cần tiền chơi game, Nam đã đem chiếc máy tính này bán cho cửa hàng cầm đồ với giá 10 triệu đồng và nói dối là máy của mình. Bà Mai phát hiện và yêu cầu cửa hàng cầm đồ trả lại máy. Cửa hàng cầm đồ có bắt buộc phải trả lại máy cho bà Mai không?',
  [
    'Cửa hàng không phải trả vì đã mua có trả tiền hợp pháp',
    'Bà Mai có quyền đòi lại máy tính từ cửa hàng vì Nam không phải là chủ sở hữu và không có quyền định đoạt tài sản',
    'Bà Mai phải chuộc lại với giá 20 triệu đồng',
    'Nam và cửa hàng cùng sở hữu chung chiếc máy tính'
  ],
  1,
  'Theo Điều 166 và Điều 167 BLDS 2015, chủ sở hữu có quyền đòi lại động sản không phải đăng ký quyền sở hữu từ người chiếm hữu ngay tình nếu người đó chiếm hữu thông qua hợp đồng không có đền bù hoặc hợp đồng có đền bù nhưng tài sản bị chiếm đoạt ngoài ý chí của chủ sở hữu.',
  'Bộ luật Dân sự 2015, Điều 167'
);

addQ(
  'vận dụng',
  'Ông K và ông L là hàng xóm cạnh nhà. Cây mít cổ thụ nhà ông K có cành vươn sang sân nhà ông L và rụng nhiều quả chín thối hỏng sân. Ông L nhiều lần yêu cầu ông K chặt tỉa cành vươn sang nhưng ông K không làm. Ông L có quyền làm gì theo luật dân sự?',
  [
    'Bỏ thuốc độc làm chết toàn bộ cây mít của ông K',
    'Tự ý sang vườn nhà ông K cưa đứt gốc cây mít',
    'Yêu cầu ông K chặt tỉa cành cây; nếu ông K không thực hiện thì ông L có quyền tự chặt tỉa phần cành vươn sang ranh giới đất nhà mình hoặc yêu cầu cơ quan có thẩm quyền can thiệp',
    'Khởi kiện đòi bồi thường 1 tỷ đồng tổn thất tinh thần'
  ],
  2,
  'Theo Điều 175 BLDS 2015 về ranh giới giữa các bất động sản, người có bất động sản liền kề có quyền yêu cầu chủ sở hữu cây cối chặt tỉa cành cây, rễ cây vươn sang ranh giới đất của mình.',
  'Bộ luật Dân sự 2015, Điều 175'
);

addQ(
  'vận dụng',
  'Anh Tuấn ký hợp đồng thuê mặt bằng kinh doanh với Công ty Đại Lộc thời hạn 5 năm. Hợp đồng có công chứng. Sau 1 năm, Công ty Đại Lộc bán tòa nhà mặt bằng đó cho Tập đoàn F. Việc chuyển nhượng quyền sở hữu tòa nhà ảnh hưởng thế nào đến hợp đồng thuê của anh Tuấn?',
  [
    'Hợp đồng thuê của anh Tuấn tự động chấm dứt ngay lập tức',
    'Anh Tuấn phải trả lại mặt bằng trong vòng 3 ngày',
    'Anh Tuấn phải ký lại hợp đồng mới với giá tăng gấp đôi',
    'Hợp đồng thuê của anh Tuấn vẫn tiếp tục có hiệu lực, chủ sở hữu mới (Tập đoàn F) phải tiếp tục thực hiện hợp đồng thuê cho đến hết thời hạn'
  ],
  3,
  'Khoản 2 Điều 474 BLDS 2015 quy định: Trường hợp quyền sở hữu tài sản thuê được chuyển giao cho người khác thì bên thuê vẫn được tiếp tục thuê tài sản cho đến hết thời hạn thuê; chủ sở hữu mới có quyền và nghĩa vụ của bên cho thuê.',
  'Bộ luật Dân sự 2015, Điều 474'
);

addQ(
  'vận dụng',
  'Chị Hạnh đi taxi của Hãng taxi Mai Vàng do tài xế Long điều khiển. Trong chuyến đi, do tài xế Long vượt ẩu đâm vào dải phân cách khiến chị Hạnh bị gãy tay, phải phẫu thuật hết 40 triệu đồng. Ai là chủ thể có nghĩa vụ bồi thường trực tiếp cho chị Hạnh theo pháp luật dân sự?',
  [
    'Hãng taxi Mai Vàng có nghĩa vụ bồi thường thiệt hại cho chị Hạnh, sau đó có quyền yêu cầu tài xế Long hoàn trả',
    'Chị Hạnh tự chịu vì đã chọn đi xe taxi giá rẻ',
    'Tài xế Long phải tự trả tại chỗ, công ty taxi không liên quan',
    'Tòa án nhân dân thành phố đứng ra bồi thường thay'
  ],
  0,
  'Theo Điều 600 BLDS 2015, pháp nhân phải bồi thường thiệt hại do người của mình gây ra trong khi thực hiện nhiệm vụ được giao; sau khi bồi thường có quyền yêu cầu người có lỗi hoàn trả.',
  'Bộ luật Dân sự 2015, Điều 600'
);

addQ(
  'vận dụng',
  'Ông Ba chết để lại di chúc chia đều một mảnh đất cho 2 con trai là Nam và Bắc. Tuy nhiên, di chúc được lập bằng văn bản nhưng không có công chứng, chứng thực và không có người làm chứng, trong khi ông Ba là người không biết chữ (chỉ điểm chỉ). Di chúc này có hiệu lực pháp luật không?',
  [
    'Có hiệu lực vì đã có dấu điểm chỉ của ông Ba',
    'Vô hiệu vì di chúc của người không biết chữ bắt buộc phải được người làm chứng lập thành văn bản và có công chứng hoặc chứng thực',
    'Có hiệu lực nếu hai người con đồng thuận không tranh chấp',
    'Chỉ có hiệu lực đối với phần đất nông nghiệp'
  ],
  1,
  'Khoản 3 Điều 630 BLDS 2015 quy định: Di chúc của người bị hạn chế về thể chất hoặc của người không biết chữ phải được người làm chứng lập thành văn bản và có công chứng hoặc chứng thực. Thiếu điều kiện này thì di chúc vô hiệu.',
  'Bộ luật Dân sự 2015, Điều 630'
);

addQ(
  'vận dụng',
  'Cháu Kiên 14 tuổi dùng chiếc xe đạp điện của mình trị giá 8 triệu đồng đổi lấy chiếc điện thoại thông minh cũ của một người bạn cùng trường mà không hỏi ý kiến cha mẹ. Cha mẹ Kiên phát hiện và yêu cầu hủy bỏ việc đổi chác. Giao dịch đổi tài sản này được giải quyết thế nào?',
  [
    'Giao dịch có hiệu lực vì xe đạp điện là tài sản của Kiên',
    'Bạn của Kiên được quyền giữ xe đạp điện vĩnh viễn',
    'Giao dịch vô hiệu do người chưa đủ 15 tuổi xác lập giao dịch có giá trị lớn mà không được người đại diện theo pháp luật đồng ý',
    'Hai bên phải nộp phạt tiền cho nhà trường'
  ],
  2,
  'Theo khoản 3 Điều 21 BLDS 2015, người từ đủ 6 tuổi đến chưa đủ 15 tuổi khi xác lập, thực hiện giao dịch dân sự phải được người đại diện theo pháp luật đồng ý, trừ giao dịch phục vụ nhu cầu sinh hoạt hàng ngày phù hợp với lứa tuổi.',
  'Bộ luật Dân sự 2015, Điều 21'
);

addQ(
  'vận dụng',
  'Bà Loan gửi xe máy tại bãi giữ xe có lấy vé xe hợp lệ. Khi lấy xe, bảo vệ thông báo kẻ gian đã lấy trộm mất xe của bà. Ban quản lý bãi xe chỉ đồng ý bồi thường 1 triệu đồng với lý do vé xe có in dòng chữ nhỏ: "Bãi xe không chịu trách nhiệm khi mất xe". Nhận định nào sau đây là đúng pháp luật?',
  [
    'Dòng chữ in trên vé xe có hiệu lực miễn trừ hoàn toàn trách nhiệm của bãi xe',
    'Bà Loan phải tự chịu mất mát vì bãi xe công cộng không thể quản lý hết',
    'Bãi xe chỉ cần trả lại tiền công trông giữ xe 5.000 đồng',
    'Điều khoản in sẵn miễn trách nhiệm của bãi xe là vô hiệu; bên giữ xe vi phạm nghĩa vụ bảo quản và phải bồi thường toàn bộ giá trị thực tế chiếc xe bị mất'
  ],
  3,
  'Theo hợp đồng gửi giữ tài sản (Điều 554 BLDS 2015), bên giữ tài sản có nghĩa vụ bảo quản tài sản và phải bồi thường thiệt hại nếu làm mất mát, hư hỏng tài sản gửi giữ. Điều khoản in sẵn loại trừ trách nhiệm cơ bản là vô hiệu.',
  'Bộ luật Dân sự 2015, Điều 557'
);

addQ(
  'vận dụng',
  'Hai anh em Hoàng và Huy cùng được hưởng thừa kế chung một ngôi nhà của cha mẹ để lại, chưa phân chia. Anh Hoàng muốn bán toàn bộ ngôi nhà cho người ngoài thì có thực hiện được không?',
  [
    'Hoàng không thể tự ý bán toàn bộ ngôi nhà nếu không có sự đồng ý của Huy (chủ sở hữu chung hợp nhất hoặc theo phần)',
    'Hoàng được quyền bán toàn bộ ngôi nhà nếu là con trai trưởng',
    'Hoàng được quyền bán và chỉ cần thông báo cho Huy sau 1 năm',
    'Hoàng được tự định đoạt nếu nhận nuôi dưỡng bàn thờ gia tiên'
  ],
  0,
  'Theo Điều 218 BLDS 2015 về định đoạt tài sản chung, việc định đoạt tài sản chung hợp nhất hoặc định đoạt toàn bộ tài sản chung theo phần phải có sự đồng ý của tất cả các chủ sở hữu chung.',
  'Bộ luật Dân sự 2015, Điều 218'
);

addQ(
  'vận dụng',
  'Chị Yến mua một hộp sữa bột tại siêu thị Z. Khi về pha cho con uống, chị phát hiện sữa bị mốc hỏng dù hạn sử dụng còn 1 năm, làm cháu bé bị ngộ độc thực phẩm nhập viện. Trách nhiệm bồi thường thiệt hại của siêu thị Z được xác định ra sao?',
  [
    'Siêu thị không chịu trách nhiệm vì chỉ là đơn vị phân phối trung gian',
    'Siêu thị Z và nhà sản xuất có trách nhiệm liên đới bồi thường toàn bộ chi phí điều trị và tổn thất sức khỏe cho con chị Yến',
    'Chị Yến phải tự chi trả vì không kiểm tra kỹ hộp sữa tại quầy thu ngân',
    'Chỉ bồi thường bằng cách đổi lại một hộp sữa mới cùng loại'
  ],
  1,
  'Theo Điều 608 BLDS 2015 về bồi thường thiệt hại do vi phạm quyền lợi của người tiêu dùng: Cá nhân, pháp nhân sản xuất, kinh doanh hàng hóa không bảo đảm chất lượng mà gây thiệt hại cho người tiêu dùng thì phải bồi thường.',
  'Bộ luật Dân sự 2015, Điều 608'
);

addQ(
  'vận dụng',
  'Ông An vay của bà Bình 200 triệu đồng với mức lãi suất thỏa thuận trong hợp đồng là 30%/năm. Căn cứ quy định của Bộ luật Dân sự 2015 về trần lãi suất vay, mức lãi suất này được xử lý như thế nào?',
  [
    'Mức lãi suất 30%/năm có hiệu lực đầy đủ vì hai bên tự nguyện',
    'Hợp đồng vay tiền bị vô hiệu toàn bộ và ông An không cần trả nợ gốc',
    'Mức lãi suất vượt quá 20%/năm không có hiệu lực; phần vượt quá trần quy định sẽ không được pháp luật công nhận',
    'Bà Bình bị phạt tù ngay lập tức về tội cho vay nặng lãi'
  ],
  2,
  'Khoản 1 Điều 468 BLDS 2015 quy định lãi suất vay do các bên thỏa thuận nhưng không được vượt quá 20%/năm của khoản tiền vay. Trường hợp lãi suất thỏa thuận vượt quá thì mức lãi suất vượt quá không có hiệu lực.',
  'Bộ luật Dân sự 2015, Điều 468'
);

addQ(
  'vận dụng',
  'Cụ Thọ 82 tuổi lập di chúc bằng văn bản có công chứng để lại căn nhà cho cháu nội là Đức. Sau đó 2 năm, do Đức bất hiếu, cụ Thọ đã lập một bản di chúc mới có công chứng để lại toàn bộ căn nhà đó cho người con gái út. Khi cụ Thọ mất, di chúc nào có giá trị thi hành?',
  [
    'Bản di chúc lập trước cho cháu Đức vì lập đầu tiên là có giá trị cao nhất',
    'Hai bản di chúc triệt tiêu lẫn nhau và nhà chia theo pháp luật',
    'Căn nhà thuộc về cháu Đức vì cháu nội thuộc hàng kế vị',
    'Bản di chúc lập sau cho con gái út có hiệu lực pháp luật thi hành'
  ],
  3,
  'Khoản 5 Điều 643 BLDS 2015 quy định: Khi một người để lại nhiều bản di chúc đối với một tài sản thì chỉ bản di chúc sau cùng có hiệu lực pháp luật.',
  'Bộ luật Dân sự 2015, Điều 643'
);

addQ(
  'vận dụng',
  'Công ty M thuê mặt bằng của ông Phúc để mở nhà hàng. Trong hợp đồng có điều khoản: "Nếu bên thuê chậm thanh toán tiền thuê quá 15 ngày thì bên cho thuê có quyền khóa cửa, niêm phong tài sản bên trong". Đến hạn, Công ty M chậm trả tiền 20 ngày. Ông Phúc đến khóa xích cửa nhà hàng. Hành vi của ông Phúc được đánh giá là:',
  [
    'Hành vi thực hiện quyền thỏa thuận trong hợp đồng hợp pháp',
    'Tội bắt cóc nhân viên nhà hàng',
    'Hành vi vi phạm quy định về bảo vệ người tiêu dùng',
    'Tự động hủy tư cách sở hữu ngôi nhà'
  ],
  0,
  'Biện pháp tự bảo vệ quyền dân sự hoặc thực hiện quyền theo thỏa thuận hợp đồng không vi phạm điều cấm của luật được pháp luật công nhận.',
  'Bộ luật Dân sự 2015, Điều 12 & Điều 418'
);

addQ(
  'vận dụng',
  'Bác sĩ phẫu thuật thẩm mỹ tư nhân hứa hẹn phẫu thuật nâng mũi sẽ đẹp như diễn viên Hàn Quốc. Sau phẫu thuật, mũi bệnh nhân bị hoại tử nhiễm trùng nặng phải cắt bỏ một phần cánh mũi. Bệnh nhân có quyền yêu cầu bác sĩ bồi thường những khoản thiệt hại nào?',
  [
    'Chỉ được đòi lại tiền viện phí ban đầu 15 triệu đồng',
    'Chi phí hợp lý cho việc cứu chữa, phục hồi sức khỏe; thu nhập thực tế bị mất; chi phí phẫu thuật khắc phục và khoản tiền bù đắp tổn thất về tinh thần',
    'Chỉ được bồi thường nếu bác sĩ có cam kết bằng văn bản có công chứng',
    'Không được bồi thường vì phẫu thuật thẩm mỹ luôn có rủi ro tự nguyện'
  ],
  1,
  'Điều 590 BLDS 2015 quy định thiệt hại do sức khỏe bị xâm phạm bao gồm chi phí cứu chữa, bồi dưỡng, thu nhập bị mất, chi phí người chăm sóc và một khoản tiền bù đắp tổn thất về tinh thần.',
  'Bộ luật Dân sự 2015, Điều 590'
);

addQ(
  'vận dụng',
  'Do có xích mích ranh giới bờ ao, ông Tuấn tự ý đắp đập ngăn dòng nước chảy tự nhiên vào ruộng lúa của ông Kiên phía dưới, làm ruộng lúa nhà ông Kiên bị khô hạn chết trắng 2 sào lúa trị giá 10 triệu đồng. Hành vi của ông Tuấn vi phạm nghĩa vụ gì đối với bất động sản liền kề?',
  [
    'Nghĩa vụ tôn trọng di tích lịch sử địa phương',
    'Nghĩa vụ không được bán lúa cho thương lái ngoài tỉnh',
    'Nghĩa vụ của chủ sở hữu bất động sản về việc thoát nước tự nhiên và dẫn nước tưới tiêu qua bất động sản liền kề',
    'Nghĩa vụ bảo vệ hành lang an toàn giao thông đường thủy'
  ],
  2,
  'Điều 252 và Điều 253 BLDS 2015 quy định chủ sở hữu bất động sản có địa thế cao hơn phải dành lối thoát nước tự nhiên và lối dẫn nước tưới tiêu hợp lý cho bất động sản liền kề.',
  'Bộ luật Dân sự 2015, Điều 252'
);

addQ(
  'vận dụng',
  'Tòa án thụ lý đơn khởi kiện của anh Hùng đòi bạn là anh Dũng trả 50 triệu đồng nợ vay. Tại phiên tòa sơ thẩm, anh Hùng không xuất trình được giấy vay nợ, không có tin nhắn chuyển khoản và người làm chứng cũng không xác nhận có việc vay nợ. Bản án của Tòa án sẽ quyết định ra sao?',
  [
    'Buộc anh Dũng phải trả 25 triệu đồng theo nguyên tắc chia đôi',
    'Yêu cầu công an bắt tạm giam anh Dũng để ép khai nhận',
    'Chuyển khoản nợ sang cho cha mẹ anh Dũng trả thay',
    'Bác toàn bộ yêu cầu khởi kiện của anh Hùng vì không thực hiện được nghĩa vụ chứng minh theo quy định tố tụng'
  ],
  3,
  'Điều 91 Bộ luật Tố tụng dân sự 2015 quy định đương sự có yêu cầu Tòa án bảo vệ quyền, lợi ích hợp pháp của mình phải thu thập, cung cấp, giao nộp tài liệu, chứng cứ để chứng minh cho yêu cầu đó là có căn cứ và hợp pháp.',
  'Bộ luật Tố tụng dân sự 2015, Điều 91'
);

addQ(
  'vận dụng',
  'Ông Bình trước khi qua đời viết di chúc để lại cho Hội Khuyến học xã 100 triệu đồng. Sau khi ông Bình chết, di sản chỉ còn lại tổng cộng 60 triệu đồng và ông còn nợ ngân hàng 80 triệu đồng tiền vay sửa nhà. Thứ tự thanh toán nghĩa vụ tài sản và di sản của ông Bình được thực hiện như thế nào?',
  [
    'Ưu tiên thanh toán khoản nợ ngân hàng 60 triệu đồng từ di sản; Hội Khuyến học không nhận được tiền vì nghĩa vụ tài sản phải được thanh toán trước việc chia thừa kế',
    'Trả 100 triệu cho Hội Khuyến học trước, nợ ngân hàng xóa bỏ',
    'Chia đôi 60 triệu thành hai phần: 30 triệu trả ngân hàng và 30 triệu trả Hội Khuyến học',
    'Ngân hàng phải tự xóa nợ vì người vay đã chết'
  ],
  0,
  'Theo Điều 658 BLDS 2015 về thứ tự ưu tiên thanh toán, các khoản nợ của người chết đối với cá nhân, pháp nhân phải được thanh toán trước khi phân chia di sản theo di chúc.',
  'Bộ luật Dân sự 2015, Điều 658'
);

addQ(
  'vận dụng',
  'Anh Tâm đặt may 10 bộ vest cưới tại tiệm may Hoàng Gia, hẹn ngày 10/10 lấy đồ để tổ chức đám cưới ngày 12/10. Đến ngày 10/10, tiệm may chưa may xong bộ nào vì thợ bỏ việc. Anh Tâm buộc phải đi thuê vest khẩn cấp hết 8 triệu đồng. Anh Tâm có quyền yêu cầu tiệm may bồi thường gì?',
  [
    'Chỉ được nhận lại tiền vải đã ứng trước',
    'Đòi lại tiền ứng trước, hủy hợp đồng gia công và yêu cầu bồi thường thiệt hại 8 triệu đồng tiền thuê đồ phát sinh do lỗi vi phạm thời hạn của tiệm may',
    'Không được bồi thường vì lý do thợ bỏ việc là bất khả kháng',
    'Được sở hữu luôn cửa hàng may của tiệm Hoàng Gia'
  ],
  1,
  'Bên thuê gia công có quyền đơn phương chấm dứt hợp đồng và yêu cầu bồi thường thiệt hại thực tế phát sinh nếu bên nhận gia công vi phạm nghiêm trọng thời hạn giao sản phẩm (Điều 544 và Điều 547 BLDS 2015).',
  'Bộ luật Dân sự 2015, Điều 547'
);

addQ(
  'vận dụng',
  'Ông Cường bị xe máy của anh Khang đâm gãy chân. Trong thời gian điều trị, ông Cường và anh Khang thỏa thuận tự hòa giải: anh Khang bồi thường cho ông Cường 30 triệu đồng và ông Cường cam kết không khởi kiện ra Tòa án. Sau khi nhận đủ tiền và bình phục, ông Cường lại nộp đơn khởi kiện đòi thêm 50 triệu đồng. Tòa án sẽ xử lý ra sao?',
  [
    'Tự động buộc anh Khang phải trả thêm 50 triệu đồng',
    'Phạt tù ông Cường vì vi phạm cam kết hòa giải',
    'Tôn trọng thỏa thuận bồi thường đã hoàn thành của các bên; nếu không có chứng cứ thiệt hại mới phát sinh ngoài dự liệu thì bác yêu cầu đòi thêm của ông Cường',
    'Tuyên thỏa thuận hòa giải trước đó vô hiệu vô điều kiện'
  ],
  2,
  'Thỏa thuận bồi thường thiệt hại giữa các bên có hiệu lực bắt buộc thực hiện theo nguyên tắc tôn trọng quyền tự định đoạt dân sự, trừ khi có thiệt hại mới phát sinh thực tế ngoài thỏa thuận ban đầu.',
  'Bộ luật Dân sự 2015, Điều 585'
);

addQ(
  'vận dụng',
  'Một người phụ nữ có chồng mất tích 3 năm, Tòa án đã ra quyết định tuyên bố người chồng mất tích. Người phụ nữ này có quyền yêu cầu ly hôn với người chồng mất tích không?',
  [
    'Tuyệt đối không được ly hôn vì người chồng có thể trở về',
    'Chỉ được ly hôn khi tìm thấy thi thể người chồng',
    'Phải đợi hết thời hạn 10 năm mới được làm đơn ly hôn',
    'Có quyền yêu cầu Tòa án giải quyết cho ly hôn theo quy định tại khoản 2 Điều 56 Luật Hôn nhân và Gia đình'
  ],
  3,
  'Khoản 2 Điều 56 Luật Hôn nhân và Gia đình 2014 quy định: Trong trường hợp vợ hoặc chồng của người bị Tòa án tuyên bố mất tích yêu cầu ly hôn thì Tòa án giải quyết cho ly hôn.',
  'Luật Hôn nhân và Gia đình 2014, Điều 56'
);

addQ(
  'vận dụng',
  'Chị Ngọc mua bảo hiểm nhân thọ cho bản thân và chỉ định con gái là bé Thư (10 tuổi) là người thụ hưởng bảo hiểm. Khi chị Ngọc không may qua đời, số tiền chi trả bảo hiểm 500 triệu đồng có được coi là di sản thừa kế của chị Ngọc để chia cho cha mẹ và chồng chị Ngọc không?',
  [
    'Không phải di sản thừa kế; số tiền bảo hiểm thuộc quyền sở hữu riêng của người thụ hưởng được chỉ định là bé Thư',
    'Là di sản thừa kế và phải chia đều cho tất cả mọi người trong gia đình',
    'Thuộc sở hữu của công ty bảo hiểm',
    'Thuộc sở hữu riêng của người chồng chị Ngọc'
  ],
  0,
  'Theo Luật Kinh doanh bảo hiểm, tiền bảo hiểm trả cho người thụ hưởng được chỉ định thuộc quyền sở hữu của người thụ hưởng đó, không phải là di sản thừa kế của người mua bảo hiểm.',
  'Luật Kinh doanh bảo hiểm 2022'
);

addQ(
  'vận dụng',
  'Ông Sáu bị lừa mua phải một bức tranh giả với giá 500 triệu đồng do người bán làm giả chứng chỉ thẩm định quốc tế. Thời hiệu để ông Sáu yêu cầu Tòa án tuyên bố giao dịch mua bán bức tranh này vô hiệu do bị lừa dối là bao lâu?',
  [
    '06 tháng kể từ ngày giao tiền',
    '02 năm kể từ ngày ông Sáu biết hoặc phải biết mình bị lừa dối',
    '05 năm kể từ ngày mua tranh',
    'Không bị giới hạn thời hiệu yêu cầu tuyên bố vô hiệu'
  ],
  1,
  'Điều 132 BLDS 2015 quy định thời hiệu yêu cầu Tòa án tuyên bố giao dịch dân sự vô hiệu do bị lừa dối, đe dọa, cưỡng ép, nhầm lẫn là 02 năm kể từ ngày người có quyền biết hoặc phải biết hành vi lừa dối.',
  'Bộ luật Dân sự 2015, Điều 132'
);

addQ(
  'vận dụng',
  'Một nhân viên văn phòng đi nghỉ mát ở bãi biển nhặt được một chiếc đồng hồ Rolex trị giá 300 triệu đồng trôi dạt vào bờ cát. Nhân viên này thông báo và giao nộp cho Công an địa phương. Sau 01 năm kể từ ngày thông báo công khai mà không xác định được chủ sở hữu. Quyền sở hữu chiếc đồng hồ được xác định ra sao?',
  [
    'Đồng hồ thuộc về Trưởng công an địa phương',
    'Thuộc sở hữu của người chủ khách sạn gần bờ biển',
    'Người nhặt được được hưởng giá trị bằng 10 tháng lương cơ sở cộng 50% phần giá trị vượt quá; phần còn lại thuộc ngân sách nhà nước',
    'Đồng hồ bắt buộc phải bán đấu giá chia đều cho toàn bộ khách du lịch có mặt'
  ],
  2,
  'Khoản 2 Điều 230 BLDS 2015 quy định sau 01 năm thông báo công khai mà không tìm được chủ sở hữu tài sản bị đánh rơi có giá trị lớn hơn 10 lần mức lương cơ sở thì người nhặt được hưởng 10 lần mức lương cơ sở cộng 50% giá trị phần vượt quá, phần còn lại thuộc về Nhà nước.',
  'Bộ luật Dân sự 2015, Điều 230'
);

addQ(
  'vận dụng',
  'Anh Minh mua một chiếc điện thoại iPhone cũ tại cửa hàng với giá 15 triệu đồng. Sau 1 tháng, công an đến thu hồi máy vì chiếc máy này là tang vật một vụ cướp tài sản trước đó. Anh Minh có quyền gì đối với cửa hàng đã bán máy cho mình?',
  [
    'Không có quyền gì vì mua đồ cũ phải tự chịu rủi ro',
    'Phải chấp nhận mất tiền để làm công dân tốt',
    'Bị khởi tố hình sự về tội che giấu tội phạm',
    'Có quyền yêu cầu cửa hàng hủy hợp đồng mua bán và hoàn trả lại toàn bộ số tiền 15 triệu đồng đã thanh toán cùng tiền bồi thường thiệt hại (nếu có)'
  ],
  3,
  'Theo Điều 444 BLDS 2015 về bảo đảm quyền sở hữu của bên mua: Bên bán phải bảo đảm quyền sở hữu tài sản cho bên mua; trường hợp tài sản bị người thứ ba thu hồi thì bên bán phải hoàn trả tiền và bồi thường thiệt hại cho bên mua.',
  'Bộ luật Dân sự 2015, Điều 444'
);

addQ(
  'vận dụng',
  'Ông Thành và bà Yến ly hôn. Tòa án phân chia tài sản chung của vợ chồng gồm một thửa đất trị giá 2 tỷ đồng. Bản án sơ thẩm tuyên chia đôi mỗi người 1 tỷ đồng. Sau 10 ngày kể từ ngày tuyên án, bà Yến làm đơn kháng cáo yêu cầu được chia 70% vì bà trực tiếp nuôi 2 con nhỏ. Đơn kháng cáo của bà Yến có được chấp nhận xem xét theo thủ tục phúc thẩm không?',
  [
    'Được chấp nhận vì đơn kháng cáo nộp trong thời hạn luật định (15 ngày kể từ ngày tuyên án)',
    'Bị bác vì bản án sơ thẩm đã có hiệu lực ngay',
    'Bị bác vì phụ nữ nuôi con không được ưu tiên phân chia tài sản',
    'Chỉ được xem xét nếu ông Thành đồng ý cho xét xử lại'
  ],
  0,
  'Điều 273 Bộ luật Tố tụng dân sự 2015 quy định thời hạn kháng cáo đối với bản án sơ thẩm là 15 ngày kể từ ngày tuyên án. Bà Yến nộp đơn vào ngày thứ 10 là hoàn toàn hợp lệ trong thời hạn.',
  'Bộ luật Tố tụng dân sự 2015, Điều 273'
);

addQ(
  'vận dụng',
  'Anh Bách thuê căn hộ của chị Thoa. Trong thời gian thuê, đường ống nước chìm trong tường bị bục vỡ tự nhiên do công trình xuống cấp, nước ngấm làm bong tróc trần nhà. Trách nhiệm sửa chữa hư hỏng này thuộc về ai?',
  [
    'Anh Bách phải tự bỏ tiền sửa vì đang là người sử dụng',
    'Chị Thoa (bên cho thuê) có nghĩa vụ bảo đảm tài sản thuê trong tình trạng sử dụng và phải sửa chữa hư hỏng lớn không do lỗi của bên thuê',
    'Công ty cấp nước sạch địa phương phải sửa chữa miễn phí',
    'Tòa án nhân dân quận chi trả từ quỹ phòng chống thiên tai'
  ],
  1,
  'Theo Điều 477 BLDS 2015 về nghĩa vụ bảo đảm tình trạng tài sản thuê: Bên cho thuê phải sửa chữa những hư hỏng, khuyết tật của tài sản thuê, trừ hư hỏng nhỏ do bên thuê gây ra hoặc theo tập quán.',
  'Bộ luật Dân sự 2015, Điều 477'
);

addQ(
  'vận dụng',
  'Hai bên ký hợp đồng chuyển nhượng quyền sử dụng đất. Để trốn thuế thu nhập cá nhân và lệ phí trước bạ, hai bên thỏa thuận ghi trong hợp đồng công chứng giá chuyển nhượng là 500 triệu đồng, nhưng viết giấy tay riêng với giá thực tế thanh toán là 3 tỷ đồng. Hợp đồng ghi giá 500 triệu đồng có giá trị pháp lý ra sao?',
  [
    'Có hiệu lực vì đã có công chứng chứng thực hợp pháp',
    'Có hiệu lực nếu hai bên đã thanh toán xong',
    'Vô hiệu do giả tạo nhằm che giấu một giao dịch dân sự khác và trốn tránh nghĩa vụ thuế đối với Nhà nước',
    'Được Tòa án công nhận nếu nộp thêm 10% tiền phạt'
  ],
  2,
  'Điều 124 BLDS 2015 quy định giao dịch dân sự vô hiệu do giả tạo: Khi các bên xác lập giao dịch dân sự một cách giả tạo nhằm che giấu một giao dịch dân sự khác thì giao dịch dân sự giả tạo vô hiệu.',
  'Bộ luật Dân sự 2015, Điều 124'
);

addQ(
  'vận dụng',
  'Ông Đoàn chết năm 2022 không để lại di chúc. Ông có 3 người con là Hùng, Dũng, Tuấn. Anh Hùng đã làm giả văn bản từ chối nhận di sản của Dũng và Tuấn để một mình chiếm đoạt toàn bộ sổ tiết kiệm 1,5 tỷ đồng của ông Đoàn. Hành vi làm giả giấy tờ của anh Hùng dẫn đến hậu quả pháp lý thừa kế nào?',
  [
    'Anh Hùng được hưởng trọn vẹn số tiền vì tài sản đã sang tên',
    'Anh Hùng chỉ bị phạt tiền 5 triệu đồng và vẫn được chia 500 triệu',
    'Dũng và Tuấn mất hoàn toàn quyền thừa kế vì không trông coi sổ tiết kiệm',
    'Anh Hùng bị tước quyền hưởng di sản thừa kế theo Điều 621 BLDS do có hành vi lừa dối, giả mạo di chúc hoặc giấy tờ nhằm chiếm đoạt di sản'
  ],
  3,
  'Điểm đ khoản 1 Điều 621 BLDS 2015 quy định người có hành vi giả mạo di chúc, sửa chữa di chúc, hủy di chúc, che giấu di chúc nhằm chiếm một phần hoặc toàn bộ di sản trái với ý chí của người để lại di sản thì không được quyền hưởng di sản.',
  'Bộ luật Dân sự 2015, Điều 621'
);

addQ(
  'vận dụng',
  'Một công ty lữ hành tổ chức tour du lịch leo núi. Do hướng dẫn viên của công ty không trang bị dây bảo hiểm an toàn theo đúng quy chuẩn cho du khách, một du khách bị trượt chân ngã rạn xương đùi. Công ty lữ hành phải chịu trách nhiệm pháp lý gì?',
  [
    'Bồi thường toàn bộ thiệt hại về vật chất và tổn thất tinh thần cho du khách do vi phạm nghĩa vụ an toàn trong hợp đồng dịch vụ',
    'Chỉ cần tặng du khách một vé du lịch miễn phí vào năm sau',
    'Không phải chịu trách nhiệm vì du khách tự nguyện tham gia thể thao mạo hiểm',
    'Chỉ phải chịu trách nhiệm nếu du khách đã mua gói bảo hiểm cao cấp'
  ],
  0,
  'Theo Điều 517 BLDS 2015 về hợp đồng dịch vụ, bên cung ứng dịch vụ phải thực hiện công việc đúng chất lượng, bảo đảm an toàn theo thỏa thuận và quy chuẩn; nếu vi phạm gây thiệt hại phải bồi thường.',
  'Bộ luật Dân sự 2015, Điều 517'
);

addQ(
  'vận dụng',
  'Ông Quang bán cho ông Lâm một đàn lợn 20 con. Khi giao lợn, ông Quang biết rõ đàn lợn đang nhiễm dịch tả lợn châu Phi nhưng vẫn giấu không nói. Đàn lợn mang về lây bệnh làm chết toàn bộ 50 con lợn khỏe mạnh đang có của trang trại ông Lâm. Ông Quang phải chịu trách nhiệm gì?',
  [
    'Chỉ phải hoàn lại tiền của 20 con lợn đã bán',
    'Phải hoàn trả tiền 20 con lợn bệnh và bồi thường toàn bộ thiệt hại do dịch bệnh lây lan làm chết 50 con lợn của ông Lâm',
    'Không phải bồi thường vì lợn chết là do dịch bệnh tự nhiên',
    'Ông Lâm tự chịu vì không có chuồng nuôi cách ly'
  ],
  1,
  'Điều 445 BLDS 2015 quy định bên bán phải bồi thường thiệt hại cho bên mua nếu khuyết tật của vật làm cho vật bị hư hỏng hoặc làm thiệt hại tài sản khác của bên mua mà bên bán biết hoặc phải biết khuyết tật đó nhưng không báo cho bên mua.',
  'Bộ luật Dân sự 2015, Điều 445'
);

addQ(
  'vận dụng',
  'Một người đào giếng nước sâu 15m trong khu đất trống của mình sát đường ngõ xóm nhưng không làm nắp đậy và không có biển cảnh báo nguy hiểm. Buổi tối, một người đi bộ bị rơi xuống giếng gãy cả hai chân. Trách nhiệm bồi thường thuộc về ai?',
  [
    'Người đi bộ phải tự chịu vì đi không mang đèn pin',
    'Ủy ban nhân dân xã phải bồi thường từ quỹ phúc lợi',
    'Chủ sở hữu, người quản lý chiếc giếng phải bồi thường toàn bộ thiệt hại do công trình xây dựng gây ra',
    'Hai bên chia đôi chi phí điều trị'
  ],
  2,
  'Điều 605 BLDS 2015 quy định: Chủ sở hữu, người chiếm hữu, người được giao quản lý, sử dụng nhà cửa, công trình xây dựng khác phải bồi thường thiệt hại do nhà cửa, công trình xây dựng đó gây ra cho người khác.',
  'Bộ luật Dân sự 2015, Điều 605'
);

addQ(
  'vận dụng',
  'Chị Bích vay tiền tại tiệm cầm đồ và để lại chiếc nhẫn kim cương làm tài sản cầm cố. Tiệm cầm đồ đã tự ý mang chiếc nhẫn kim cương này cho một người bạn mượn đi dự đám cưới và bị rơi mất. Tiệm cầm đồ phải chịu trách nhiệm gì đối với chị Bích?',
  [
    'Chỉ cần xóa khoản tiền chị Bích đã vay',
    'Chỉ phải đền một chiếc nhẫn bạc tượng trưng',
    'Không phải đền vì việc rơi mất là sự cố ngoài ý muốn của người mượn',
    'Vi phạm nghĩa vụ bảo quản tài sản cầm cố, sử dụng tài sản trái phép và phải bồi thường toàn bộ giá trị thực tế của chiếc nhẫn kim cương'
  ],
  3,
  'Khoản 2 Điều 312 BLDS 2015 quy định bên nhận cầm cố không được bán, trao đổi, tặng cho, cho thuê, cho mượn tài sản cầm cố; nếu làm mất hoặc hư hại thì phải bồi thường thiệt hại cho bên cầm cố.',
  'Bộ luật Dân sự 2015, Điều 312'
);

addQ(
  'vận dụng',
  'Bà Lan và con gái cùng ngồi trên một chiếc thuyền bị lật chìm trong cơn bão lớn và cả hai mẹ con đều bị chết đuối. Cơ quan chức năng không thể xác định được ai chết trước, ai chết sau. Việc phân chia thừa kế tài sản của hai mẹ con được giải quyết thế nào?',
  [
    'Được suy đoán là chết cùng một thời điểm và họ không được thừa kế di sản của nhau; di sản của mỗi người do người thừa kế của người đó hưởng',
    'Suy đoán người mẹ chết trước, toàn bộ tài sản sang tên người con',
    'Suy đoán người con chết trước, toàn bộ tài sản sang tên người mẹ',
    'Toàn bộ tài sản của cả hai người tự động thuộc về Nhà nước'
  ],
  0,
  'Điều 619 BLDS 2015 quy định: Trường hợp những người có quyền thừa kế di sản của nhau chết cùng thời điểm hoặc được coi là chết cùng thời điểm thì họ không được thừa kế di sản của nhau và di sản của mỗi người do người thừa kế của người đó hưởng.',
  'Bộ luật Dân sự 2015, Điều 619'
);

addQ(
  'vận dụng',
  'Anh Dũng ký hợp đồng lao động làm nhân viên bảo vệ cho Công ty TNHH Vệ sĩ Thăng Long. Trong ca trực đêm tại ngân hàng theo phân công của công ty, anh Dũng hút thuốc lá và vứt tàn thuốc vào sọt giấy làm bùng phát hỏa hoạn thiêu rụi phòng giao dịch trị giá 500 triệu đồng. Ai là chủ thể có nghĩa vụ bồi thường trực tiếp cho ngân hàng?',
  [
    'Anh Dũng phải tự chịu trách nhiệm trực tiếp bồi thường cho ngân hàng',
    'Công ty TNHH Vệ sĩ Thăng Long phải bồi thường thiệt hại cho ngân hàng, sau đó yêu cầu anh Dũng hoàn trả theo quy định',
    'Ngân hàng tự chịu vì không lắp đặt hệ thống chống cháy tự động',
    'Công an phòng cháy chữa cháy phải bồi thường'
  ],
  1,
  'Theo Điều 600 BLDS 2015, pháp nhân phải bồi thường thiệt hại do người của mình gây ra trong khi thực hiện nhiệm vụ được pháp nhân giao; sau đó có quyền yêu cầu người có lỗi hoàn trả khoản tiền bồi thường.',
  'Bộ luật Dân sự 2015, Điều 600'
);

addQ(
  'vận dụng',
  'Ông Hùng cho ông Dũng thuê ngôi nhà mặt phố thời hạn 3 năm. Hết thời hạn 3 năm, hai bên không ký tiếp hợp đồng mới nhưng ông Dũng vẫn tiếp tục ở lại thêm 6 tháng và trả tiền thuê hàng tháng đều đặn được ông Hùng đồng ý nhận. Hợp đồng thuê nhà này được xác định thế nào theo pháp luật dân sự?',
  [
    'Ông Dũng đang lấn chiếm nhà bất hợp pháp',
    'Hợp đồng thuê nhà tự động chấm dứt và ông Dũng phải nộp phạt 50 triệu',
    'Hợp đồng thuê được coi là đã gia hạn với thời hạn không xác định theo cùng các điều kiện cũ',
    'Ngôi nhà tự động chuyển quyền sở hữu cho ông Dũng'
  ],
  2,
  'Theo khoản 2 Điều 474 BLDS 2015, khi hết thời hạn thuê mà bên thuê vẫn tiếp tục sử dụng tài sản và bên cho thuê không có ý kiến phản đối thì hợp đồng thuê được gia hạn với thời hạn không xác định.',
  'Bộ luật Dân sự 2015, Điều 474'
);

addQ(
  'vận dụng',
  'Tòa án nhân dân huyện thụ lý vụ kiện tranh chấp ranh giới đất đai giữa ông Nam và ông Bắc. Trong quá trình giải quyết, Tòa án tiến hành phiên họp kiểm tra việc giao nộp, tiếp cận, công khai chứng cứ và hòa giải. Mục đích chính của phiên họp này là gì?',
  [
    'Tuyên án sơ thẩm ngay tại chỗ',
    'Bắt giam bên không chịu nhường đất',
    'Ép buộc các đương sự phải ký biên bản nhận tội',
    'Công khai các tài liệu chứng cứ của vụ án và tạo điều kiện cho các đương sự tự thương lượng, hòa giải với nhau'
  ],
  3,
  'Theo Điều 208 và 209 Bộ luật Tố tụng dân sự 2015, phiên họp nhằm công khai chứng cứ để các bên biết rõ chứng cứ của nhau và tiến hành hòa giải giải quyết tranh chấp.',
  'Bộ luật Tố tụng dân sự 2015, Điều 208'
);

addQ(
  'vận dụng',
  'Bà Lan ký hợp đồng tặng cho con trai là anh Tuấn một ngôi nhà gắn liền với điều kiện: "Anh Tuấn phải có nghĩa vụ nuôi dưỡng, chăm sóc bà Lan cho đến khi bà qua đời". Sau khi sang tên sổ đỏ xong, anh Tuấn ngược đãi, đánh đập và đuổi bà Lan ra khỏi nhà. Bà Lan có quyền gì theo quy định của Bộ luật Dân sự 2015?',
  [
    'Có quyền đòi lại ngôi nhà đã tặng cho do anh Tuấn không thực hiện nghĩa vụ đã cam kết trong hợp đồng tặng cho có điều kiện',
    'Không có quyền đòi lại nhà vì tài sản đã sang tên hợp pháp',
    'Chỉ được quyền xin lỗi anh Tuấn để được ở nhờ phòng bếp',
    'Phải đợi Tòa án hình sự tuyên phạt tù anh Tuấn mới được đòi nhà'
  ],
  0,
  'Khoản 3 Điều 462 BLDS 2015 quy định về tặng cho tài sản có điều kiện: Trường hợp phải thực hiện nghĩa vụ sau khi tặng cho mà bên được tặng cho không thực hiện nghĩa vụ thì bên tặng cho có quyền đòi lại tài sản và yêu cầu bồi thường thiệt hại.',
  'Bộ luật Dân sự 2015, Điều 462'
);

addQ(
  'vận dụng',
  'Anh Quang và chị Mai chung sống như vợ chồng nhưng không đăng ký kết hôn. Trong thời gian sống chung, hai người cùng góp tiền mua một chiếc xe ô tô đứng tên chị Mai. Khi hai người chia tay phát sinh tranh chấp chiếc xe. Tranh chấp tài sản này được Tòa án giải quyết theo nguyên tắc nào?',
  [
    'Xe thuộc về chị Mai 100% vì giấy đăng ký mang tên chị Mai',
    'Giải quyết theo quy định về sở hữu chung của Bộ luật Dân sự và căn cứ vào tỷ lệ công sức đóng góp của mỗi bên',
    'Tịch thu xe bán đấu giá nộp ngân sách vì vi phạm luật hôn nhân',
    'Chia đôi 50/50 như vợ chồng có đăng ký kết hôn hợp pháp'
  ],
  1,
  'Theo Điều 16 Luật Hôn nhân và Gia đình 2014, quan hệ tài sản của nam, nữ chung sống như vợ chồng mà không đăng ký kết hôn được giải quyết theo thỏa thuận; nếu không có thỏa thuận thì giải quyết theo quy định của Bộ luật Dân sự về sở hữu chung và tính theo công sức đóng góp.',
  'Luật Hôn nhân và Gia đình 2014, Điều 16'
);

addQ(
  'vận dụng',
  'Một người thợ xây trèo lên giàn giáo thi công nhà ở cho ông Bình thì bị tuột chân rơi xuống đất bị thương. Biết rằng người thợ xây này do Công ty Xây dựng An Phát ký hợp đồng nhận thầu xây nhà trọn gói cho ông Bình đưa đến làm việc. Trách nhiệm bồi thường tai nạn lao động cho người thợ xây thuộc về ai?',
  [
    'Ông Bình (chủ nhà) phải bồi thường toàn bộ chi phí',
    'Bản thân người thợ xây phải tự chịu vì đã không bám chắc giàn giáo',
    'Công ty Xây dựng An Phát (người sử dụng lao động) có trách nhiệm bồi thường và chi trả các chế độ tai nạn lao động cho công nhân của mình',
    'Ủy ban nhân dân phường nơi xây nhà phải hỗ trợ'
  ],
  2,
  'Người sử dụng lao động (Công ty An Phát) có trách nhiệm bảo đảm an toàn lao động và bồi thường tai nạn lao động cho người lao động của mình theo quy định pháp luật lao động và dân sự.',
  'Bộ luật Dân sự 2015 & Luật ATVSLĐ 2015'
);

addQ(
  'vận dụng',
  'Ông Cường vay của ngân hàng 1 tỷ đồng có thế chấp bằng quyền sử dụng đất. Đến hạn trả nợ, ông Cường không thanh toán được. Ngân hàng có quyền xử lý tài sản thế chấp theo phương thức nào theo quy định pháp luật dân sự?',
  [
    'Tự động chiếm luôn mảnh đất mà không cần thông báo',
    'Bắt buộc phải bỏ tù ông Cường ngay lập tức',
    'Thuê các nhóm đòi nợ thuê tư nhân đến chiếm đất',
    'Xử lý tài sản thế chấp theo phương thức đã thỏa thuận trong hợp đồng (bán đấu giá tài sản thế chấp, nhận chính tài sản để thay thế thực hiện nghĩa vụ hoặc bán tài sản cho bên thứ ba)'
  ],
  3,
  'Điều 303 BLDS 2015 quy định các phương thức xử lý tài sản bảo đảm bao gồm bán đấu giá tài sản, bên nhận bảo đảm tự bán tài sản, bên nhận bảo đảm nhận chính tài sản để thay thế nghĩa vụ hoặc phương thức khác do các bên thỏa thuận.',
  'Bộ luật Dân sự 2015, Điều 303'
);

addQ(
  'vận dụng',
  'Anh Nam đặt cọc cho chị Mai 100 triệu đồng để bảo đảm việc giao kết hợp đồng mua căn hộ chung cư trong thời hạn 30 ngày. Hết thời hạn này, anh Nam đổi ý không muốn mua nữa vì tìm được căn hộ khác rẻ hơn. Theo Bộ luật Dân sự 2015, khoản tiền đặt cọc được giải quyết thế nào?',
  [
    'Thuộc về chị Mai (bên nhận đặt cọc)',
    'Chị Mai phải trả lại toàn bộ 100 triệu đồng cho anh Nam',
    'Chị Mai phải trả lại cho anh Nam 50 triệu đồng và giữ lại 50 triệu đồng',
    'Số tiền đặt cọc bị tịch thu sung vào công quỹ nhà nước'
  ],
  0,
  'Khoản 2 Điều 328 BLDS 2015 quy định trường hợp hợp đồng không được giao kết, thực hiện do bên đặt cọc từ chối thì tài sản đặt cọc thuộc về bên nhận đặt cọc.',
  'Bộ luật Dân sự 2015, Điều 328'
);

addQ(
  'vận dụng',
  'Bà Lan qua đời đột ngột không để lại di chúc. Bà có di sản là một ngôi nhà trị giá 4 tỷ đồng. Gia đình bà gồm có: chồng (ông Tuấn), con trai (anh Hưng), con dâu (chị Oanh) và cháu nội (bé Bo). Theo quy định về thừa kế theo pháp luật của Bộ luật Dân sự 2015, chị Oanh (con dâu) có quyền hưởng phần di sản nào của bà Lan không?',
  [
    'Có quyền hưởng một kỷ phần thừa kế bằng với anh Hưng',
    'Không được hưởng thừa kế theo pháp luật của mẹ chồng vì không thuộc các hàng thừa kế theo quy định',
    'Được hưởng nửa suất thừa kế của chồng mình',
    'Được hưởng toàn bộ phần di sản nếu chứng minh có công chăm sóc mẹ chồng lúc ốm đau'
  ],
  1,
  'Điều 651 BLDS 2015 quy định các hàng thừa kế theo pháp luật gồm: Hàng 1 (vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi). Con dâu không thuộc bất kỳ hàng thừa kế theo pháp luật nào của bố mẹ chồng.',
  'Bộ luật Dân sự 2015, Điều 651'
);

addQ(
  'vận dụng',
  'Gia đình anh Hải nuôi một con chó becgie lớn nhưng không xích lại và không rọ mõm. Con chó chạy ra đường ngõ công cộng cắn một em bé đi xe đạp qua gây rách chân phải phẫu thuật và tiêm phòng dại với tổng viện phí 25 triệu đồng. Trách nhiệm bồi thường thiệt hại được giải quyết như thế nào?',
  [
    'Gia đình em bé phải tự chịu vì đi xe đạp làm con chó bị giật mình',
    'Chính quyền địa phương phải trích ngân sách bồi thường tai nạn công cộng',
    'Anh Hải (chủ sở hữu súc vật) phải bồi thường toàn bộ thiệt hại về sức khỏe do súc vật gây ra',
    'Anh Hải chỉ phải xin lỗi và hỗ trợ 1 triệu đồng tiền mua thuốc'
  ],
  2,
  'Khoản 1 Điều 603 BLDS 2015 quy định chủ sở hữu súc vật phải bồi thường thiệt hại do súc vật gây ra cho người khác, trừ trường hợp người bị thiệt hại hoàn toàn có lỗi.',
  'Bộ luật Dân sự 2015, Điều 603'
);

addQ(
  'vận dụng',
  'Ông Phát và bà Hoa phát sinh tranh chấp về quyền sử dụng một thửa đất tọa lạc tại thành phố Nha Trang, tỉnh Khánh Hòa. Ông Phát cư trú tại Hà Nội, bà Hoa cư trú tại Thành phố Hồ Chí Minh. Theo Bộ luật Tố tụng Dân sự 2015, Tòa án nào có thẩm quyền thụ lý giải quyết vụ án tranh chấp này?',
  [
    'Tòa án nhân dân nơi cư trú của nguyên đơn (Hà Nội)',
    'Tòa án nhân dân nơi cư trú của bị đơn (Thành phố Hồ Chí Minh)',
    'Tòa án nhân dân cấp cao tại Đà Nẵng',
    'Tòa án nhân dân nơi có bất động sản (thành phố Nha Trang, tỉnh Khánh Hòa)'
  ],
  3,
  'Điểm c khoản 1 Điều 39 Bộ luật Tố tụng Dân sự 2015 quy định: Đối tượng tranh chấp là bất động sản thì chỉ Tòa án nơi có bất động sản mới có thẩm quyền giải quyết.',
  'Bộ luật Tố tụng Dân sự 2015, Điều 39'
);

addQ(
  'vận dụng',
  'Ông Tư lập hợp đồng tặng cho người cháu một thửa đất vườn với điều kiện người cháu phải chăm sóc, phụng dưỡng ông đến cuối đời. Sau khi sang tên quyền sử dụng đất, người cháu lập tức bỏ mặc ông cụ ốm đau không chu cấp và còn đuổi ông ra khỏi nhà. Ông Tư có quyền gì theo quy định Bộ luật Dân sự 2015?',
  [
    'Ông Tư có quyền đòi lại thửa đất đã tặng cho do người cháu vi phạm điều kiện sau khi tặng cho',
    'Ông Tư hoàn toàn không có quyền đòi lại đất vì tài sản đã hoàn thành thủ tục đăng ký sang tên',
    'Ông Tư chỉ được quyền yêu cầu Tòa án phạt tù người cháu',
    'Ông Tư phải chấp nhận chia đôi mảnh đất với người cháu'
  ],
  0,
  'Khoản 3 Điều 462 BLDS 2015 quy định trường hợp phải thực hiện nghĩa vụ sau khi tặng cho mà bên được tặng cho không thực hiện thì bên tặng cho có quyền đòi lại tài sản và yêu cầu bồi thường thiệt hại.',
  'Bộ luật Dân sự 2015, Điều 462'
);

addQ(
  'vận dụng',
  'Bà Thu quản lý, canh tác liên tục, công khai trên một mảnh đất khai hoang từ năm 2010 mà không có giấy tờ chứng nhận quyền sử dụng đất và cũng không có tranh chấp với ai. Đến năm 2024 (sau 14 năm), bà Thu yêu cầu công nhận quyền sở hữu mảnh đất theo diện chiếm hữu không có căn cứ pháp luật nhưng ngay tình, liên tục, công khai. Yêu cầu của bà Thu có phù hợp với thời hạn xác lập quyền sở hữu theo quy định của Bộ luật Dân sự 2015 không?',
  [
    'Phù hợp vì chiếm hữu liên tục từ 10 năm trở lên là tự động thành chủ sở hữu',
    'Chưa phù hợp vì thời hạn chiếm hữu đối với bất động sản phải đủ 30 năm',
    'Phù hợp vì với bất động sản khai hoang chỉ cần đủ 5 năm chiếm hữu',
    'Chưa phù hợp vì phải đủ 50 năm đối với đất đai'
  ],
  1,
  'Điều 236 BLDS 2015 quy định người chiếm hữu, người được lợi về tài sản không có căn cứ pháp luật nhưng ngay tình, liên tục, công khai trong thời hạn 10 năm đối với động sản, 30 năm đối với bất động sản thì trở thành chủ sở hữu tài sản đó.',
  'Bộ luật Dân sự 2015, Điều 236'
);

addQ(
  'vận dụng',
  'Anh Bình, anh Chiến và anh Dũng cùng nhau ký hợp đồng liên đới vay của chị Ngân số tiền 300 triệu đồng để cùng đầu tư sản xuất. Đến hạn trả nợ, cả ba người chưa trả. Chị Ngân có quyền yêu cầu anh Bình thanh toán toàn bộ 300 triệu đồng không?',
  [
    'Không, chị Ngân bắt buộc chỉ được đòi anh Bình đúng phần 100 triệu đồng của anh Bình',
    'Không, chị Ngân phải đòi cả ba người cùng lúc tại trụ sở Ủy ban nhân dân xã',
    'Có quyền, vì trong nghĩa vụ liên đới, bên có quyền có thể yêu cầu bất cứ ai trong số những người có nghĩa vụ thực hiện toàn bộ nghĩa vụ',
    'Chỉ được đòi anh Bình nếu anh Chiến và anh Dũng đã bỏ trốn khỏi địa phương'
  ],
  2,
  'Khoản 1 và khoản 3 Điều 288 BLDS 2015 quy định nghĩa vụ liên đới là nghĩa vụ do nhiều người cùng phải thực hiện và bên có quyền có thể yêu cầu bất cứ ai trong số những người có nghĩa vụ phải thực hiện toàn bộ nghĩa vụ.',
  'Bộ luật Dân sự 2015, Điều 288'
);

addQ(
  'vận dụng',
  'Cụ An mất năm 1990 để lại một căn nhà gỗ trên mảnh đất tại quê. Năm 2024, các con của cụ An nảy sinh bất hòa và một người con nộp đơn ra Tòa án yêu cầu chia di sản thừa kế là nhà đất của cụ An. Theo Bộ luật Dân sự 2015, thời hiệu để người thừa kế yêu cầu chia di sản thừa kế đối với bất động sản là bao lâu kể từ thời điểm mở thừa kế?',
  [
    '10 năm kể từ thời điểm mở thừa kế',
    '20 năm kể từ thời điểm mở thừa kế',
    'Không bị hạn chế thời hiệu đối với mọi loại tài sản thừa kế',
    '30 năm kể từ thời điểm mở thừa kế đối với bất động sản'
  ],
  3,
  'Khoản 1 Điều 623 BLDS 2015 quy định thời hiệu để người thừa kế yêu cầu chia di sản là 30 năm đối với bất động sản, 10 năm đối với động sản, kể từ thời điểm mở thừa kế.',
  'Bộ luật Dân sự 2015, Điều 623'
);

addQ(
  'vận dụng',
  'Trong quá trình Tòa án giải quyết vụ án tranh chấp hợp đồng vay nợ giữa bà Hạnh và ông Thành, hai bên đã tự nguyện thỏa thuận được với nhau về số tiền trả và thời hạn trả. Thẩm phán đã lập biên bản hòa giải thành và sau 7 ngày không bên nào thay đổi ý kiến nên Tòa án ban hành Quyết định công nhận sự thỏa thuận của các đương sự. Quyết định này có hiệu lực pháp luật ra sao?',
  [
    'Có thể bị kháng cáo phúc thẩm trong thời hạn 15 ngày kể từ ngày ban hành',
    'Có hiệu lực pháp luật ngay sau khi được ban hành và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm',
    'Phải chờ Viện kiểm sát nhân dân cùng cấp phê chuẩn mới có hiệu lực thi hành',
    'Chỉ có tính chất tham khảo, không có giá trị cưỡng chế thi hành án'
  ],
  1,
  'Khoản 1 Điều 212 BLTTDS 2015 quy định Quyết định công nhận sự thỏa thuận của các đương sự có hiệu lực pháp luật ngay sau khi được ban hành và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm.',
  'Bộ luật Tố tụng Dân sự 2015, Điều 212'
);

addQ(
  'vận dụng',
  'Giám đốc Công ty Phú Thịnh làm văn bản ủy quyền cho Trưởng phòng Kinh doanh là anh Hoàng thay mặt công ty ký kết các hợp đồng mua sắm vật tư có giá trị dưới 500 triệu đồng. Tuy nhiên, anh Hoàng đã tự ý ký hợp đồng mua lô thiết bị văn phòng trị giá 1,2 tỷ đồng với Công ty Minh Quân mà không thông báo cho Giám đốc. Khi Công ty Minh Quân giao hàng và đòi tiền, Giám đốc Công ty Phú Thịnh từ chối thanh toán phần vượt 500 triệu. Hậu quả pháp lý của hành vi ký vượt thẩm quyền ủy quyền của anh Hoàng được xác định như thế nào?',
  [
    'Công ty Phú Thịnh bắt buộc phải thanh toán toàn bộ 1,2 tỷ đồng cho bên bán',
    'Hợp đồng hoàn toàn vô hiệu từ đầu và hai bên chỉ cần trả lại những gì đã nhận',
    'Bên bán có quyền yêu cầu Ủy ban nhân dân cấp quận thanh toán thay phần tiền vượt quá',
    'Công ty Phú Thịnh không chịu trách nhiệm đối với phần nghĩa vụ vượt quá phạm vi ủy quyền, anh Hoàng phải tự chịu trách nhiệm thực hiện phần nghĩa vụ vượt quá đó với bên bán'
  ],
  3,
  'Khoản 1 Điều 143 BLDS 2015 quy định giao dịch dân sự do người đại diện xác lập, thực hiện vượt quá phạm vi đại diện không làm phát sinh quyền, nghĩa vụ của người được đại diện đối với phần giao dịch vượt quá, trừ một số trường hợp ngoại lệ.',
  'Bộ luật Dân sự 2015, Điều 143'
);

console.log(`Generated ${questions.length} questions for Chapter ${chapterId}`);
writeChapterParts(chapterId, questions);
