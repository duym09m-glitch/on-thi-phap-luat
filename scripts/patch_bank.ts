import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

const bankDir = path.resolve('./src/data/bank');
const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort();

console.log(`Found ${bankFiles.length} bank files to patch...`);

// Mapping of specific bank question replacements
const bankPatches: Record<number, Partial<Question>> = {
  // === CHAPTER 1 DUPLICATES & REWRITES ===
  11015: {
    question: 'Văn bản áp dụng pháp luật có đặc điểm cơ bản nào sau đây để phân biệt với Văn bản quy phạm pháp luật?',
    options: [
      'Mang tính cá biệt, chỉ áp dụng một lần cho đối tượng cụ thể được xác định trong văn bản',
      'Được áp dụng nhiều lần trong thực tế đời sống cho mọi chủ thể trong xã hội',
      'Chứa đựng các quy tắc xử sự chung bắt buộc đối với toàn thể nhân dân',
      'Do Quốc hội ban hành theo trình tự lập pháp nghiêm ngặt của Hiến pháp'
    ],
    correctAnswer: 0,
    explanation: 'Văn bản áp dụng pháp luật là văn bản do cơ quan, người có thẩm quyền ban hành nhằm giải quyết một vụ việc cụ thể, mang tính cá biệt và chỉ áp dụng một lần đối với đối tượng được xác định rõ.',
    legalReference: 'Giáo trình Pháp luật đại cương - Văn bản áp dụng pháp luật'
  },
  11023: {
    question: 'Theo Luật Ban hành văn bản quy phạm pháp luật, nguyên tắc áp dụng văn bản quy phạm pháp luật theo thời gian được quy định như thế nào?',
    options: [
      'Văn bản quy phạm pháp luật được áp dụng từ thời điểm có hiệu lực và không có hiệu lực trở về trước (trừ trường hợp thật cần thiết do luật định có lợi cho đối tượng áp dụng)',
      'Mọi văn bản quy phạm pháp luật tự động có hiệu lực hồi tố về trước 05 năm',
      'Văn bản chỉ có hiệu lực thi hành sau khi được đăng tải trên mạng xã hội 30 ngày',
      'Chỉ áp dụng đối với các sự việc xảy ra sau khi văn bản đã hết hiệu lực thi hành'
    ],
    correctAnswer: 0,
    explanation: 'Điều 152 Luật Ban hành văn bản quy phạm pháp luật 2015 quy định văn bản QPPL được áp dụng từ thời điểm có hiệu lực. Không được quy định hiệu lực trở về trước trừ trường hợp thật cần thiết để bảo đảm lợi ích chung của xã hội, thực hiện các quyền có lợi hơn cho đối tượng áp dụng.',
    legalReference: 'Luật Ban hành văn bản quy phạm pháp luật 2015, Điều 152'
  },
  11032: {
    question: 'Trong các sự kiện pháp lý sau đây, sự kiện nào được phân loại là "Sự biến pháp lý" làm phát sinh quan hệ pháp luật?',
    options: [
      'Hiện tượng sét đánh làm đổ cây cổ thụ đè bẹp xe ô tô đang đỗ trên đường (sự kiện phát sinh bồi thường bảo hiểm)',
      'Anh An ký hợp đồng thuê nhà trọ với ông Bình bằng văn bản',
      'Chị Mai nộp đơn xin việc làm tại Công ty Dệt may Hoàng Hà',
      'Hai bên thỏa thuận thanh toán tiền mua xe máy tại văn phòng công chứng'
    ],
    correctAnswer: 0,
    explanation: 'Sự biến pháp lý là những sự kiện xảy ra trong tự nhiên hoặc đời sống xã hội diễn ra ngoài ý chí chủ quan của con người nhưng được pháp luật gắn với việc làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật.',
    legalReference: 'Giáo trình Pháp luật đại cương - Sự kiện pháp lý'
  },
  11041: {
    question: 'Mặt khách quan của vi phạm pháp luật bao gồm những yếu tố cơ bản nào sau đây?',
    options: [
      'Hành vi trái pháp luật, hậu quả nguy hại cho xã hội, và mối quan hệ nhân quả giữa hành vi và hậu quả',
      'Động cơ, mục đích phạm tội và thái độ tâm lý của người vi phạm đối với hành vi',
      'Khả năng nhận thức và điều khiển hành vi của cá nhân khi thực hiện hành vi',
      'Độ tuổi và nghề nghiệp của người thực hiện hành vi vi phạm pháp luật'
    ],
    correctAnswer: 0,
    explanation: 'Mặt khách quan của vi phạm pháp luật là những biểu hiện bên ngoài của vi phạm pháp luật, bao gồm: hành vi trái pháp luật, hậu quả nguy hiểm cho xã hội, mối quan hệ nhân quả giữa hành vi và hậu quả, cùng các yếu tố thời gian, địa điểm, công cụ, phương tiện vi phạm.',
    legalReference: 'Giáo trình Pháp luật đại cương - Cấu thành vi phạm pháp luật'
  },
  11057: {
    question: 'Trong hệ thống trách nhiệm pháp lý, "Trách nhiệm kỷ luật" được áp dụng đối với nhóm đối tượng nào?',
    options: [
      'Cán bộ, công chức, viên chức, người lao động có hành vi vi phạm nội quy, quy chế, kỷ luật nội bộ cơ quan, đơn vị',
      'Mọi công dân tham gia giao thông trên đường bộ vi phạm tín hiệu đèn giao thông',
      'Các thương nhân vi phạm hợp đồng thương mại quốc tế với đối tác nước ngoài',
      'Bất kỳ người nào thực hiện hành vi nguy hiểm cho xã hội bị coi là tội phạm'
    ],
    correctAnswer: 0,
    explanation: 'Trách nhiệm kỷ luật là loại trách nhiệm pháp lý do cơ quan, tổ chức, người sử dụng lao động áp dụng đối với cán bộ, công chức, viên chức hoặc người lao động thuộc quyền quản lý khi họ vi phạm kỷ luật lao động hoặc kỷ luật công vụ.',
    legalReference: 'Giáo trình Pháp luật đại cương - Trách nhiệm pháp lý'
  },
  11065: {
    question: 'Anh Tuấn là công nhân cơ khí, trong ca làm việc đã sơ suất làm rơi vỡ máy khoan trị giá 2 triệu đồng của công ty. Giám đốc ra quyết định trừ 10% lương tháng của anh Tuấn để bồi thường thiệt hại theo quy định nội bộ và Bộ luật Lao động. Quy định này của pháp luật mang tính chất của loại quy phạm nào?',
    options: [
      'Quy phạm bắt buộc (buộc chủ thể phải thực hiện nghĩa vụ theo luật định)',
      'Quy phạm tùy nghi cho phép doanh nghiệp tự đặt ra mức phạt vô hạn',
      'Quy phạm cấm đoán người lao động không được phép đi làm',
      'Quy phạm khuyến khích không có giá trị cưỡng chế thi hành'
    ],
    correctAnswer: 0,
    explanation: 'Quy phạm bắt buộc là quy phạm pháp luật đòi hỏi các chủ thể phải thực hiện những hành vi nhất định khi gặp điều kiện, hoàn cảnh đã nêu trong quy phạm.',
    legalReference: 'Giáo trình Pháp luật đại cương - Phân loại quy phạm pháp luật'
  },
  11069: {
    question: 'Anh Nam là nhân viên chuyển phát nhanh bưu chính, do tò mò đã bóc thư riêng của khách hàng để đọc nội dung cá nhân bên trong rồi mới dán lại đem giao. Hành vi của anh Nam đã xâm phạm trực tiếp đến quyền hiến định cơ bản nào của công dân?',
    options: [
      'Quyền được bảo đảm bí mật thư tín, điện thoại, điện tín và các hình thức thông tin liên lạc riêng tư khác (Điều 21 Hiến pháp 2013)',
      'Quyền tự do kinh doanh trong các ngành nghề mà pháp luật không cấm',
      'Quyền được suy đoán vô tội trong quá trình xét xử của Tòa án',
      'Quyền khiếu nại, tố cáo hành vi sai phạm của cơ quan nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 21 Hiến pháp 2013: Mọi người có quyền bí mật thư tín, điện thoại, điện tín và các hình thức trao đổi thông tin riêng tư khác. Không ai được bóc mở, kiểm soát, thu giữ trái luật thư tín của người khác.',
    legalReference: 'Hiến pháp 2013, Điều 21'
  },
  11070: {
    question: 'Hội đồng xét xử của Tòa án nhân dân mở phiên tòa xét xử sơ thẩm công khai và tuyên phạt bị cáo Tuấn 3 năm tù giam về tội cướp giật tài sản. Hoạt động xét xử và ban hành bản án của Tòa án là hình thức thực hiện pháp luật nào?',
    options: [
      'Áp dụng pháp luật (cơ quan nhà nước có thẩm quyền căn cứ quy phạm pháp luật để ra quyết định mang tính cá biệt)',
      'Tuân thủ pháp luật (kiềm chế không thực hiện điều pháp luật cấm)',
      'Sử dụng pháp luật (thực hiện quyền mà pháp luật cho phép)',
      'Thi hành pháp luật (thực hiện nghĩa vụ chủ động bằng hành động)'
    ],
    correctAnswer: 0,
    explanation: 'Áp dụng pháp luật là hoạt động có tính quyền lực nhà nước do cơ quan, người có thẩm quyền tiến hành theo trình tự do pháp luật quy định nhằm giải quyết các vụ việc cụ thể.',
    legalReference: 'Giáo trình Pháp luật đại cương - Hình thức thực hiện pháp luật'
  },

  // === CHAPTER 3 DUPLICATES & REWRITES ===
  13004: {
    question: 'Theo Hiến pháp 2013, Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là cơ quan duy nhất có quyền năng nào sau đây?',
    options: [
      'Quyền lập hiến và quyền lập pháp',
      'Quyền công tố và kiểm sát tư pháp',
      'Quyền xét xử các vụ án hình sự và dân sự',
      'Quyền ban hành lệnh tổng động viên đất nước'
    ],
    correctAnswer: 0,
    explanation: 'Điều 69 Hiến pháp 2013 quy định: Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước CHXHCN Việt Nam. Quốc hội thực hiện quyền lập hiến, quyền lập pháp.',
    legalReference: 'Hiến pháp 2013, Điều 69'
  },
  13006: {
    question: 'Theo Hiến pháp 2013 và Luật Tổ chức Chính phủ, nguyên tắc hoạt động cơ bản của Chính phủ nước Cộng hòa XHCN Việt Nam là gì?',
    options: [
      'Chính phủ làm việc theo chế độ tập thể, quyết định theo đa số kết hợp đề cao trách nhiệm cá nhân của Thủ tướng Chính phủ',
      'Thủ trưởng chế tuyệt đối, các Bộ trưởng không được tham gia biểu quyết tại phiên họp',
      'Mọi quyết định của Chính phủ phải được sự đồng ý trước của Tòa án tối cao',
      'Chính phủ hoạt động độc lập và không chịu sự giám sát của Quốc hội'
    ],
    correctAnswer: 0,
    explanation: 'Chính phủ làm việc theo chế độ tập thể, quyết định theo đa số kết hợp với đề cao trách nhiệm của Thủ tướng Chính phủ và từng thành viên Chính phủ theo quy định của Hiến pháp và Luật Tổ chức Chính phủ.',
    legalReference: 'Hiến pháp 2013, Điều 95 & Luật Tổ chức Chính phủ'
  },
  13007: {
    question: 'Theo Điều 102 Hiến pháp 2013 và Luật Tổ chức Tòa án nhân dân, Tòa án nhân dân là cơ quan xét xử và có nhiệm vụ trọng tâm hàng đầu nào?',
    options: [
      'Bảo vệ công lý, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ XHCN, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân',
      'Thực hành quyền công tố và giám sát toàn bộ hoạt động của các bộ ngành trung ương',
      'Ban hành các nghị định hướng dẫn thi hành các bộ luật và luật',
      'Quản lý thu chi ngân sách nhà nước và phê chuẩn các dự án đầu tư công'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 102 Hiến pháp 2013: Tòa án nhân dân có nhiệm vụ bảo vệ công lý, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ XHCN, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.',
    legalReference: 'Hiến pháp 2013, Điều 102'
  },
  13008: {
    question: 'Viện kiểm sát nhân dân thực hiện hai chức năng cơ bản theo quy định của Hiến pháp 2013 và Luật Tổ chức Viện kiểm sát nhân dân là gì?',
    options: [
      'Thực hành quyền công tố và kiểm sát hoạt động tư pháp',
      'Xét xử các vụ án hình sự và tuyên phạt mức án đối với bị cáo',
      'Thi hành các bản án dân sự và cưỡng chế kê biên tài sản nợ',
      'Ban hành văn bản luật và tổ chức bầu cử đại biểu Quốc hội'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 107 Hiến pháp 2013 quy định: Viện kiểm sát nhân dân thực hành quyền công tố, kiểm sát hoạt động tư pháp nhằm bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất.',
    legalReference: 'Hiến pháp 2013, Điều 107'
  },
  13012: {
    question: 'Chủ tịch nước có nhiệm vụ, quyền hạn công bố Hiến pháp, luật, pháp lệnh trong thời hạn bao nhiêu ngày kể từ ngày được thông qua?',
    options: [
      'Chậm nhất là 15 ngày kể từ ngày luật, pháp lệnh được thông qua',
      'Chậm nhất là 30 ngày kể từ ngày kết thúc kỳ họp Quốc hội',
      'Chậm nhất là 60 ngày kể từ ngày Chính phủ trình dự thảo',
      'Tự động công bố ngay trong ngày Quốc hội biểu quyết thông qua'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 88 Hiến pháp 2013 quy định Chủ tịch nước có quyền hạn công bố Hiến pháp, luật, pháp lệnh chậm nhất là 15 ngày kể từ ngày luật, pháp lệnh được thông qua (trừ trường hợp đề nghị xem xét lại pháp lệnh).',
    legalReference: 'Hiến pháp 2013, Điều 88'
  },
  13016: {
    question: 'Quốc hội họp bất thường khi có yêu cầu của những chủ thể nào theo quy định của Hiến pháp 2013?',
    options: [
      'Khi Chủ tịch nước, Ủy ban Thường vụ Quốc hội, Thủ tướng Chính phủ hoặc ít nhất một phần ba tổng số đại biểu Quốc hội yêu cầu',
      'Chỉ khi có yêu cầu bằng văn bản của Chánh án Tòa án nhân dân tối cao',
      'Khi có kiến nghị của các tổ chức quốc tế hoặc các nhà đầu tư nước ngoài',
      'Khi toàn bộ 100% đại biểu Hội đồng nhân dân cấp tỉnh yêu cầu'
    ],
    correctAnswer: 0,
    explanation: 'Điều 83 Hiến pháp 2013: Trong trường hợp Chủ tịch nước, Ủy ban thường vụ Quốc hội, Thủ tướng Chính phủ hoặc ít nhất một phần ba tổng số đại biểu Quốc hội yêu cầu thì Quốc hội họp bất thường.',
    legalReference: 'Hiến pháp 2013, Điều 83'
  },
  13045: {
    question: 'Hội đồng Thẩm phán Tòa án nhân dân tối cao có thẩm quyền quan trọng nào sau đây?',
    options: [
      'Giám đốc thẩm, tái thẩm bản án, quyết định của các Tòa án đã có hiệu lực pháp luật bị kháng nghị và lựa chọn, phát triển án lệ',
      'Xét xử sơ thẩm tất cả các tranh chấp dân sự xảy ra trên toàn quốc',
      'Bãi nhiệm các Bộ trưởng và thành viên của Chính phủ',
      'Phê chuẩn các điều ước quốc tế do Chủ tịch nước ký kết'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức Tòa án nhân dân, Hội đồng Thẩm phán TAND tối cao là cơ quan xét xử cao nhất, giám đốc thẩm, tái thẩm bản án có hiệu lực bị kháng nghị, đồng thời lựa chọn, phát triển án lệ và ban hành nghị quyết hướng dẫn áp dụng thống nhất pháp luật.',
    legalReference: 'Luật Tổ chức Tòa án nhân dân, Điều 22'
  },
  13056: {
    question: 'Công dân Trần Văn Bình phát hiện một quyết định hành chính do cơ quan hành chính nhà nước có thẩm quyền ở địa phương ban hành thu hồi đất của gia đình mình có dấu hiệu trái luật. Anh Bình muốn khởi kiện vụ án hành chính thì Tòa án nào có thẩm quyền thụ lý xét xử sơ thẩm theo quy định tố tụng hành chính hiện hành?',
    options: [
      'Tòa án nhân dân cấp tỉnh (hoặc TAND có thẩm quyền theo quy định của Luật Tố tụng hành chính)',
      'Tòa án nhân dân tối cao tại Hà Nội',
      'Ủy ban nhân dân cấp xã nơi công dân cư trú',
      'Thanh tra Chính phủ'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tố tụng hành chính và Luật Tổ chức TAND hiện hành, khiếu kiện quyết định hành chính, hành vi hành chính thuộc thẩm quyền giải quyết sơ thẩm của Tòa án nhân dân cấp tỉnh hoặc TAND có thẩm quyền theo quy định phân cấp tố tụng.',
    legalReference: 'Luật Tố tụng hành chính & Luật Tổ chức TAND'
  },
  13060: {
    question: 'Bản án sơ thẩm của Tòa án nhân dân khu vực bị đương sự kháng cáo hợp lệ theo thủ tục phúc thẩm. Cơ quan nào có thẩm quyền xét xử phúc thẩm vụ án này theo quy định hiện hành?',
    options: [
      'Tòa án nhân dân cấp tỉnh',
      'Tòa án nhân dân tối cao',
      'Ủy ban nhân dân cấp tỉnh',
      'Viện kiểm sát nhân dân khu vực'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức Tòa án nhân dân hiện hành, bản án, quyết định sơ thẩm của Tòa án nhân dân khu vực khi bị kháng cáo, kháng nghị sẽ do Tòa án nhân dân cấp tỉnh thụ lý xét xử theo thủ tục phúc thẩm.',
    legalReference: 'Luật Tổ chức Tòa án nhân dân & BLTTDS'
  },
  13078: {
    question: 'Trong kỳ họp Quốc hội, đại biểu Quốc hội Nguyễn Văn A nhận thấy một nghị định do Chính phủ ban hành có nội dung mâu thuẫn trực tiếp với quy định của một Bộ luật đang có hiệu lực. Theo Hiến pháp 2013, cơ quan nào có thẩm quyền bãi bỏ văn bản này của Chính phủ?',
    options: [
      'Quốc hội bãi bỏ văn bản của Chính phủ trái với Hiến pháp, luật, nghị quyết của Quốc hội',
      'Tòa án nhân dân tối cao tự động hủy bỏ nghị định bằng một bản án hình sự',
      'Ủy ban nhân dân cấp tỉnh nơi đại biểu A ứng cử ra quyết định thu hồi',
      'Đại biểu Quốc hội A tự mình ký quyết định tuyên bố văn bản vô hiệu'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 9 Điều 70 Hiến pháp 2013 quy định Quốc hội có thẩm quyền: Bãi bỏ văn bản của Chủ tịch nước, Ủy ban thường vụ Quốc hội, Chính phủ, Thủ tướng Chính phủ, Tòa án nhân dân tối cao, Viện kiểm sát nhân dân tối cao trái với Hiến pháp, luật, nghị quyết của Quốc hội.',
    legalReference: 'Hiến pháp 2013, Điều 70'
  },

  // === CHAPTER 4 DUPLICATES & REWRITES ===
  14004: {
    question: 'Theo Điều 611 Bộ luật Dân sự 2015, thời điểm mở thừa kế là thời điểm nào sau đây?',
    options: [
      'Thời điểm người có tài sản chết hoặc thời điểm Tòa án tuyên bố một người là đã chết',
      'Thời điểm các con họp gia đình để kiểm kê các giấy tờ nhà đất',
      'Thời điểm cơ quan công chứng nhận được hồ sơ xin khai nhận di sản',
      'Thời điểm kết thúc 100 ngày tính từ ngày mai táng người đã chết'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 611 Bộ luật Dân sự 2015 quy định: Thời điểm mở thừa kế là thời điểm người có tài sản chết. Trường hợp Tòa án tuyên bố một người là đã chết thì thời điểm mở thừa kế là ngày được xác định tại quyết định của Tòa án.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 611'
  },
  14006: {
    question: 'Theo Điều 611 Bộ luật Dân sự 2015, địa điểm mở thừa kế được xác định là nơi nào?',
    options: [
      'Nơi cư trú cuối cùng của người để lại di sản; nếu không xác định được thì là nơi có toàn bộ hoặc phần lớn di sản',
      'Nơi người thừa kế lớn tuổi nhất trong gia đình đang sinh sống và làm việc',
      'Bắt buộc phải là nơi Tòa án nhân dân tối cao đặt trụ sở xét xử',
      'Nơi người để lại di sản đã sinh ra thời thơ ấu theo giấy khai sinh'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 611 Bộ luật Dân sự 2015: Địa điểm mở thừa kế là nơi cư trú cuối cùng của người để lại di sản; nếu không xác định được nơi cư trú cuối cùng thì địa điểm mở thừa kế là nơi có toàn bộ di sản hoặc phần lớn di sản.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 611'
  },
  14022: {
    question: 'Người thành niên do tình trạng thể chất hoặc tinh thần mà không đủ khả năng nhận thức, làm chủ hành vi nhưng chưa đến mức mất năng lực hành vi dân sự thì theo yêu cầu của người này hoặc người có quyền lợi liên quan, Tòa án ra quyết định tuyên bố người này là:',
    options: [
      'Người có khó khăn trong nhận thức, làm chủ hành vi và chỉ định người giám hộ',
      'Người bị hạn chế năng lực hành vi dân sự do nghiện ma túy',
      'Người đương nhiên mất toàn bộ quyền công dân theo quy định của pháp luật',
      'Người mất năng lực pháp luật dân sự vĩnh viễn không thể hồi phục'
    ],
    correctAnswer: 0,
    explanation: 'Điều 23 Bộ luật Dân sự 2015: Người thành niên do tình trạng thể chất hoặc tinh thần mà không đủ khả năng nhận thức, làm chủ hành vi nhưng chưa đến mức mất năng lực hành vi dân sự thì được Tòa án tuyên bố là người có khó khăn trong nhận thức, làm chủ hành vi và chỉ định người giám hộ.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 23'
  },
  14023: {
    question: 'Khi các bên xác lập giao dịch dân sự một cách giả tạo nhằm che giấu một giao dịch dân sự khác, giá trị pháp lý của các giao dịch này được xác định như thế nào theo Điều 124 BLDS 2015?',
    options: [
      'Giao dịch dân sự giả tạo vô hiệu, còn giao dịch dân sự bị che giấu vẫn có hiệu lực nếu đủ điều kiện luật định',
      'Cả hai giao dịch đều đương nhiên có hiệu lực đầy đủ vì các bên đã tự nguyện thỏa thuận',
      'Cả hai giao dịch đều bị chuyển sang cơ quan điều tra hình sự để xử lý',
      'Chỉ giao dịch giả tạo có hiệu lực còn giao dịch bị che giấu đương nhiên bị hủy bỏ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 124 Bộ luật Dân sự 2015 quy định: Khi các bên xác lập giao dịch dân sự một cách giả tạo nhằm che giấu một giao dịch dân sự khác thì giao dịch dân sự giả tạo vô hiệu, còn giao dịch dân sự bị che giấu vẫn có hiệu lực, trừ trường hợp giao dịch đó cũng vô hiệu theo quy định.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 124'
  },
  14032: {
    question: 'Trường hợp con của người để lại di sản chết trước hoặc cùng một thời điểm với người để lại di sản thì quyền hưởng thừa kế của cháu được xác định như thế nào theo Điều 652 BLDS 2015?',
    options: [
      'Cháu được hưởng phần di sản mà cha hoặc mẹ của cháu được hưởng nếu còn sống (thừa kế thế vị)',
      'Cháu hoàn toàn không được hưởng di sản vì không thuộc hàng thừa kế thứ nhất',
      'Phần di sản đó đương nhiên bị sung vào công quỹ nhà nước',
      'Cháu chỉ được hưởng thừa kế nếu có di chúc hợp pháp của ông bà để lại'
    ],
    correctAnswer: 0,
    explanation: 'Điều 652 Bộ luật Dân sự 2015 quy định về thừa kế thế vị: Trường hợp con của người để lại di sản chết trước hoặc cùng một thời điểm với người để lại di sản thì cháu được hưởng phần di sản mà cha hoặc mẹ của cháu được hưởng nếu còn sống.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 652'
  },
  14035: {
    question: 'Theo quy định của Bộ luật Dân sự và Luật Đất đai, hợp đồng chuyển nhượng quyền sử dụng đất có hiệu lực pháp luật kể từ thời điểm nào?',
    options: [
      'Kể từ thời điểm được đăng ký vào sổ địa chính tại cơ quan đăng ký đất đai có thẩm quyền',
      'Kể từ thời điểm bên mua giao đủ 100% tiền mặt cho bên bán tại nhà',
      'Kể từ thời điểm hai bên tự viết giấy tay và nhờ hàng xóm ký tên làm chứng',
      'Kể từ thời điểm bên mua chuyển đồ đạc dọn về sinh sống trên thửa đất'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 188 Luật Đất đai và Điều 503 BLDS 2015 quy định việc chuyển nhượng quyền sử dụng đất phải đăng ký tại cơ quan đăng ký đất đai và có hiệu lực kể từ thời điểm đăng ký vào sổ địa chính.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 503 & Luật Đất đai'
  },

  // === CHAPTER 5 DUPLICATES & BANKRUPTCY ===
  15013: {
    question: 'Theo Luật Thương mại 2005, thương nhân bao gồm những chủ thể nào sau đây?',
    options: [
      'Tổ chức kinh tế được thành lập hợp pháp, cá nhân hoạt động thương mại một cách độc lập, thường xuyên và có đăng ký kinh doanh',
      'Tất cả mọi công dân từ đủ 18 tuổi trở lên đang sinh sống tại Việt Nam',
      'Các cơ quan quản lý hành chính nhà nước ở trung ương và địa phương',
      'Các tổ chức chính trị - xã hội hoạt động phi lợi nhuận'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 6 Luật Thương mại 2005: Thương nhân bao gồm tổ chức kinh tế được thành lập hợp pháp, cá nhân hoạt động thương mại một cách độc lập, thường xuyên và có đăng ký kinh doanh.',
    legalReference: 'Luật Thương mại 2005, Điều 6'
  },
  15022: {
    question: 'Cơ quan nào có thẩm quyền thụ lý đơn và mở thủ tục phục hồi, phá sản đối với doanh nghiệp mất khả năng thanh toán theo quy định hiện hành?',
    options: [
      'Tòa án nhân dân có thẩm quyền theo quy định của pháp luật phục hồi, phá sản',
      'Ủy ban nhân dân cấp tỉnh nơi doanh nghiệp đặt trụ sở chính',
      'Sở Kế hoạch và Đầu tư nơi cấp giấy chứng nhận đăng ký kinh doanh',
      'Thanh tra Ngân hàng Nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Theo quy định của pháp luật về phục hồi và phá sản, Tòa án nhân dân là cơ quan có thẩm quyền thụ lý đơn, xem xét mở thủ tục và quyết định tuyên bố phá sản doanh nghiệp.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  15025: {
    question: 'Trong công ty cổ phần, cổ đông sở hữu loại cổ phần nào sau đây có quyền nhận cổ tức ở mức cao hơn so với cổ phần phổ thông nhưng KHÔNG có quyền biểu quyết?',
    options: [
      'Cổ phần ưu đãi cổ tức',
      'Cổ phần ưu đãi biểu quyết',
      'Cổ phần phổ thông của cổ đông sáng lập',
      'Cổ phần ưu đãi hoàn lại có bảo đảm bằng tài sản'
    ],
    correctAnswer: 0,
    explanation: 'Điều 117 Luật Doanh nghiệp 2020: Cổ phần ưu đãi cổ tức là cổ phần được trả cổ tức với mức cao hơn so với mức cổ tức của cổ phần phổ thông... Cổ đông sở hữu cổ phần ưu đãi cổ tức không có quyền biểu quyết, dự họp ĐHĐCĐ.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 117'
  },
  15029: {
    question: 'Theo Luật Doanh nghiệp 2020, công ty trách nhiệm hữu hạn một thành viên có đặc điểm cơ bản nào sau đây?',
    options: [
      'Do một tổ chức hoặc một cá nhân làm chủ sở hữu; chủ sở hữu chịu trách nhiệm về các khoản nợ trong phạm vi số vốn điều lệ của công ty',
      'Chủ sở hữu phải chịu trách nhiệm vô hạn bằng toàn bộ tài sản riêng của mình',
      'Được quyền phát hành cổ phần rộng rãi ra công chúng để huy động vốn',
      'Bắt buộc phải có từ 02 người đại diện theo pháp luật trở lên'
    ],
    correctAnswer: 0,
    explanation: 'Điều 74 Luật Doanh nghiệp 2020: Công ty TNHH một thành viên là doanh nghiệp do một tổ chức hoặc một cá nhân làm chủ sở hữu; chủ sở hữu công ty chịu trách nhiệm về các khoản nợ và nghĩa vụ tài sản khác của công ty trong phạm vi số vốn điều lệ của công ty.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 74'
  },
  15030: {
    question: 'Theo pháp luật phục hồi và phá sản hiện hành, thứ tự phân chia tài sản sau khi có quyết định tuyên bố phá sản ưu tiên chi trả cho đối tượng nào đầu tiên?',
    options: [
      'Chi phí phục hồi, chi phí phá sản của quá trình giải quyết vụ việc',
      'Các khoản nợ không có bảo đảm của các ngân hàng thương mại',
      'Vốn góp ban đầu của các thành viên sáng lập doanh nghiệp',
      'Tiền phạt vi phạm hành chính của các cơ quan quản lý thị trường'
    ],
    correctAnswer: 0,
    explanation: 'Theo nguyên tắc phân chia tài sản phá sản, chi phí phá sản luôn là khoản được thanh toán đầu tiên trước khi chi trả lương người lao động và các nghĩa vụ tài chính khác.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  15036: {
    question: 'Theo Luật Thương mại 2005, hoạt động thương mại mà theo đó bên nhượng quyền cho phép và yêu cầu bên nhận quyền tự mình tiến hành việc mua bán hàng hoá, cung ứng dịch vụ theo hệ thống và nhãn hiệu của bên nhượng quyền được gọi là gì?',
    options: [
      'Nhượng quyền thương mại (Franchising)',
      'Đại lý mua bán hàng hóa thông thường',
      'Ủy thác mua bán hàng hóa quốc tế',
      'Gia công thương mại trong khu chế xuất'
    ],
    correctAnswer: 0,
    explanation: 'Điều 284 Luật Thương mại 2005 quy định: Nhượng quyền thương mại là hoạt động thương mại, theo đó bên nhượng quyền cho phép và yêu cầu bên nhận quyền tự mình tiến hành việc mua bán hàng hoá, cung ứng dịch vụ theo các điều kiện quy định.',
    legalReference: 'Luật Thương mại 2005, Điều 284'
  },
  15042: {
    question: 'Theo Luật Doanh nghiệp 2020, thành viên hợp danh trong công ty hợp danh bị hạn chế quyền nào sau đây?',
    options: [
      'Không được làm chủ doanh nghiệp tư nhân hoặc làm thành viên hợp danh của công ty hợp danh khác (trừ khi được sự nhất trí của các thành viên hợp danh còn lại)',
      'Không được quyền tham gia quản lý và điều hành hoạt động kinh doanh của công ty',
      'Không được nhân danh công ty tiến hành các hoạt động kinh doanh ngành nghề đã đăng ký',
      'Không được chia lợi nhuận tương ứng với tỷ lệ phần vốn góp vào công ty'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 180 Luật Doanh nghiệp 2020: Thành viên hợp danh không được làm chủ doanh nghiệp tư nhân; không được làm thành viên hợp danh của công ty hợp danh khác trừ trường hợp được sự nhất trí của các thành viên hợp danh còn lại.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 180'
  },
  15049: {
    question: 'Theo quy định của Luật Thương mại, hạn mức tối đa về giá trị vật phẩm dùng để khuyến mại trong các chương trình khuyến mại thông thường không được vượt quá bao nhiêu phần trăm giá trị của đơn vị hàng hóa, dịch vụ được khuyến mại?',
    options: [
      'Không được vượt quá 50% giá của đơn vị hàng hóa, dịch vụ được khuyến mại trước thời gian khuyến mại (trừ các đợt khuyến mại tập trung do luật định)',
      'Không được vượt quá 10% giá của đơn vị hàng hóa khuyến mại',
      'Thương nhân được quyền khuyến mại lên tới 100% không giới hạn trong mọi ngày',
      'Bắt buộc phải khuyến mại bằng tiền mặt ít nhất 70% giá bán lẻ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 94 Luật Thương mại và Nghị định hướng dẫn quy định hạn mức giá trị vật phẩm dùng để khuyến mại không được vượt quá 50% giá hàng hóa, dịch vụ trước khuyến mại, trừ các đợt khuyến mại tập trung.',
    legalReference: 'Luật Thương mại 2005, Điều 94'
  },
  15058: {
    question: 'Theo quy định pháp luật về phục hồi và phá sản hiện hành, trong thời hạn bao nhiêu ngày kể từ ngày hết hạn gửi giấy đòi nợ, Quản tài viên, doanh nghiệp quản lý, thanh lý tài sản phải hoàn thành việc lập danh sách chủ nợ?',
    options: [
      'Trong thời hạn 15 ngày kể từ ngày hết hạn gửi giấy đòi nợ',
      'Trong thời hạn 60 ngày kể từ ngày hết hạn nộp đơn',
      'Trong thời hạn 90 ngày kể từ ngày mở thủ tục phá sản',
      'Trong thời hạn 30 ngày kể từ ngày Tòa án ra quyết định đình chỉ'
    ],
    correctAnswer: 0,
    explanation: 'Theo quy định pháp luật phục hồi, phá sản, trong thời hạn 15 ngày kể từ ngày hết hạn gửi giấy đòi nợ, Quản tài viên, doanh nghiệp quản lý, thanh lý tài sản phải lập xong danh sách chủ nợ và số tiền nợ.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },

  // === CHAPTER 6 DUPLICATES & REWRITES ===
  16001: {
    question: 'Theo Điều 22 Bộ luật Hình sự 2015, hành vi của người vì bảo vệ quyền hoặc lợi ích chính đáng của mình, của người khác hoặc lợi ích Nhà nước mà chống trả lại một cách cần thiết người đang có hành vi xâm phạm được gọi là gì?',
    options: [
      'Phòng vệ chính đáng (không phải là tội phạm)',
      'Tình thế cấp thiết gây hậu quả nghiêm trọng',
      'Phạm tội chưa đạt do nguyên nhân khách quan',
      'Sự kiện bất ngờ hoàn toàn được miễn hình phạt'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 22 Bộ luật Hình sự 2015 quy định: Phòng vệ chính đáng là hành vi của người vì bảo vệ quyền hoặc lợi ích chính đáng của mình, của người khác hoặc lợi ích của Nhà nước, của cơ quan, tổ chức mà chống trả lại một cách cần thiết người đang có hành vi xâm phạm. Phòng vệ chính đáng không phải là tội phạm.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 22'
  },
  16004: {
    question: 'Hành vi của người vì muốn tránh gây thiệt hại cho quyền, lợi ích của Nhà nước, của mình hoặc người khác mà không còn cách nào khác là phải gây một thiệt hại nhỏ hơn thiệt hại cần ngăn ngừa được gọi là gì theo Bộ luật Hình sự?',
    options: [
      'Tình thế cấp thiết (không phải là tội phạm)',
      'Phòng vệ chính đáng vượt quá giới hạn',
      'Tội thiếu trách nhiệm gây hậu quả nghiêm trọng',
      'Tự ý nửa chừng chấm dứt việc phạm tội'
    ],
    correctAnswer: 0,
    explanation: 'Điều 23 Bộ luật Hình sự 2015 quy định: Tình thế cấp thiết là tình thế của người vì muốn tránh gây thiệt hại cho quyền, lợi ích của Nhà nước, của cơ quan, tổ chức, quyền, lợi ích chính đáng của mình hoặc của người khác mà không còn cách nào khác là phải gây một thiệt hại nhỏ hơn thiệt hại cần ngăn ngừa. Tình thế cấp thiết không phải là tội phạm.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 23'
  },
  16006: {
    question: 'Theo Điều 14 Bộ luật Hình sự 2015, hành vi tìm kiếm, sửa soạn công cụ, phương tiện hoặc tạo ra những điều kiện khác để thực hiện tội phạm được gọi là giai đoạn nào của tội phạm?',
    options: [
      'Chuẩn bị phạm tội',
      'Phạm tội chưa đạt đã hoàn thành',
      'Tội phạm hoàn thành trên thực tế',
      'Tự ý nửa chừng chấm dứt phạm tội'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 14 Bộ luật Hình sự 2015 quy định: Chuẩn bị phạm tội là tìm kiếm, sửa soạn công cụ, phương tiện hoặc tạo ra những điều kiện khác để thực hiện tội phạm hoặc thành lập, tham gia nhóm tội phạm.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 14'
  },
  16009: {
    question: 'Cố ý thực hiện tội phạm nhưng không thực hiện được đến cùng vì những nguyên nhân ngoài ý muốn của người phạm tội được gọi là gì theo Điều 15 BLHS 2015?',
    options: [
      'Phạm tội chưa đạt',
      'Chuẩn bị phạm tội',
      'Tự ý nửa chừng chấm dứt việc phạm tội',
      'Tội phạm đã hoàn thành'
    ],
    correctAnswer: 0,
    explanation: 'Điều 15 Bộ luật Hình sự 2015: Phạm tội chưa đạt là cố ý thực hiện tội phạm nhưng không thực hiện được đến cùng vì những nguyên nhân ngoài ý muốn của người phạm tội.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 15'
  },
  16011: {
    question: 'Theo khoản 6 Điều 364 Bộ luật Hình sự 2015, người nào đưa hoặc sẽ đưa hối lộ cho người có chức vụ, quyền hạn trong các doanh nghiệp, tổ chức NGOÀI NHÀ NƯỚC thì bị xử lý như thế nào?',
    options: [
      'Vẫn bị truy cứu trách nhiệm hình sự về Tội đưa hối lộ theo quy định của điều luật',
      'Không bị truy cứu trách nhiệm hình sự vì chỉ áp dụng cho khu vực nhà nước',
      'Chỉ bị phạt vi phạm hành chính nhắc nhở tại phường xã',
      'Tự động được miễn mọi hình phạt nếu đối tác là công ty tư nhân'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 6 Điều 364 Bộ luật Hình sự 2015 quy định rõ: Người nào đưa hoặc sẽ đưa hối lộ cho người có chức vụ, quyền hạn trong các doanh nghiệp, tổ chức ngoài nhà nước cũng bị xử lý hình sự theo Tội đưa hối lộ.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 364'
  },
  16013: {
    question: 'Theo Điều 60 Bộ luật Hình sự 2015, thời hiệu thi hành bản án hình sự là gì?',
    options: [
      'Thời hạn do Bộ luật Hình sự quy định mà khi hết thời hạn đó người bị kết án không phải chấp hành bản án đã tuyên',
      'Thời hạn Tòa án mở phiên tòa phúc thẩm kể từ ngày nhận hồ sơ',
      'Thời hạn tạm giam bị can để điều tra vụ án hình sự',
      'Thời hạn công dân nộp đơn yêu cầu bồi thường oan sai'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 60 Bộ luật Hình sự 2015 quy định: Thời hiệu thi hành bản án hình sự là thời hạn do Bộ luật này quy định mà khi hết thời hạn đó người bị kết án, pháp nhân thương mại bị kết án không phải chấp hành bản án đã tuyên.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 60'
  },
  16043: {
    question: 'Theo Điều 53 Bộ luật Hình sự 2015, "Tái phạm" được xác định khi người phạm tội đáp ứng điều kiện nào sau đây?',
    options: [
      'Đã bị kết án, chưa được xóa án tích mà lại thực hiện hành vi phạm tội do cố ý hoặc phạm tội rất nghiêm trọng, đặc biệt nghiêm trọng do vô ý',
      'Đã từng bị xử phạt vi phạm hành chính về trật tự giao thông đường bộ',
      'Bị truy tố nhiều tội danh khác nhau trong cùng một vụ án hình sự',
      'Thực hiện hành vi phạm tội nhiều lần đối với cùng một người bị hại'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 53 Bộ luật Hình sự 2015: Tái phạm là trường hợp đã bị kết án, chưa được xóa án tích mà lại thực hiện hành vi phạm tội do cố ý hoặc thực hiện hành vi phạm tội rất nghiêm trọng, tội đặc biệt nghiêm trọng do vô ý.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 53'
  },
  16047: {
    question: 'Theo Điều 27 Bộ luật Hình sự 2015, thời hiệu truy cứu trách nhiệm hình sự đối với Tội phạm rất nghiêm trọng là bao nhiêu năm?',
    options: [
      '15 năm kể từ ngày tội phạm được thực hiện',
      '05 năm kể từ ngày tội phạm được thực hiện',
      '10 năm kể từ ngày tội phạm được thực hiện',
      '20 năm kể từ ngày tội phạm được thực hiện'
    ],
    correctAnswer: 0,
    explanation: 'Điểm c khoản 2 Điều 27 Bộ luật Hình sự 2015 quy định thời hiệu truy cứu trách nhiệm hình sự là 15 năm đối với tội phạm rất nghiêm trọng. (5 năm với tội ít nghiêm trọng, 10 năm với tội nghiêm trọng, 20 năm với tội đặc biệt nghiêm trọng).',
    legalReference: 'Bộ luật Hình sự 2015, Điều 27'
  },
  16050: {
    question: 'Theo Điều 82 Bộ luật Hình sự 2015, hình phạt bổ sung nào sau đây có thể được áp dụng đối với pháp nhân thương mại phạm tội?',
    options: [
      'Cấm kinh doanh, cấm hoạt động trong một số lĩnh vực nhất định; cấm huy động vốn; phạt tiền khi không áp dụng là hình phạt chính',
      'Tịch thu toàn bộ nhà ở của các cổ đông công ty',
      'Tước quyền công dân của Hội đồng quản trị trong 5 năm',
      'Phạt cải tạo không giam giữ đối với ban giám đốc'
    ],
    correctAnswer: 0,
    explanation: 'Điều 82 Bộ luật Hình sự 2015 quy định các hình phạt bổ sung đối với pháp nhân thương mại gồm: Cấm kinh doanh, cấm hoạt động trong một số lĩnh vực nhất định; Cấm huy động vốn; Phạt tiền khi không áp dụng là hình phạt chính.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 82'
  },

  // === CHAPTER 7 DUPLICATES & REWRITES ===
  17006: {
    question: 'Theo Điều 37 Luật Hôn nhân và Gia đình 2014, nghĩa vụ chung về tài sản của vợ chồng bao gồm những nghĩa vụ nào sau đây?',
    options: [
      'Nghĩa vụ phát sinh từ giao dịch do vợ chồng cùng thỏa thuận xác lập, nghĩa vụ bồi thường thiệt hại mà theo quy định vợ chồng cùng phải chịu trách nhiệm',
      'Nghĩa vụ riêng phát sinh từ việc đánh bạc, nợ nần cá nhân của người chồng trước khi kết hôn',
      'Mọi khoản vay riêng của người vợ mà người chồng hoàn toàn không biết và không phục vụ gia đình',
      'Nghĩa vụ cấp dưỡng của một bên đối với con riêng của họ với người khác'
    ],
    correctAnswer: 0,
    explanation: 'Điều 37 Luật Hôn nhân và Gia đình 2014 quy định các nghĩa vụ chung về tài sản của vợ chồng, gồm nghĩa vụ phát sinh từ giao dịch do vợ chồng cùng thỏa thuận xác lập, nghĩa vụ bồi thường thiệt hại mà vợ chồng cùng chịu trách nhiệm, nghĩa vụ do vợ/chồng thực hiện nhằm đáp ứng nhu cầu thiết yếu của gia đình.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 37'
  },
  17018: {
    question: 'Theo Điều 95 Luật Hôn nhân và Gia đình 2014, người được nhờ mang thai hộ vì mục đích nhân đạo bắt buộc phải đáp ứng điều kiện nào?',
    options: [
      'Là người thân thích cùng hàng của bên vợ hoặc bên chồng; đã từng sinh con và chỉ được mang thai hộ một lần',
      'Là người phụ nữ bất kỳ dưới 30 tuổi đồng ý nhận thù lao tài chính',
      'Chỉ cần là bạn bè thân thiết của gia đình hai bên vợ chồng',
      'Bắt buộc phải là người chưa từng đăng ký kết hôn lần nào'
    ],
    correctAnswer: 0,
    explanation: 'Điểm a, c khoản 2 Điều 95 Luật Hôn nhân và Gia đình 2014: Người được nhờ mang thai hộ phải là người thân thích cùng hàng của bên vợ hoặc bên chồng nhờ mang thai hộ; đã từng sinh con và chỉ được mang thai hộ một lần.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 95'
  },
  17020: {
    question: 'Theo Điều 47 Luật Hôn nhân và Gia đình 2014, thỏa thuận về chế độ tài sản của vợ chồng phải được lập vào thời điểm nào và dưới hình thức gì?',
    options: [
      'Phải được lập trước khi kết hôn, bằng hình thức văn bản có công chứng hoặc chứng thực',
      'Có thể lập bằng lời nói trước sự chứng kiến của họ hàng hai bên trong tiệc cưới',
      'Chỉ được lập sau khi hai người đã chung sống với nhau được 05 năm',
      'Do Tòa án nhân dân lập và phê duyệt sau khi đã sinh con đầu lòng'
    ],
    correctAnswer: 0,
    explanation: 'Điều 47 Luật Hôn nhân và Gia đình 2014 quy định: Trong trường hợp hai bên kết hôn lựa chọn chế độ tài sản theo thoả thuận thì thoả thuận này phải được lập trước khi kết hôn, bằng hình thức văn bản có công chứng hoặc chứng thực.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 47'
  },
  17028: {
    question: 'Theo Điều 85 Luật Hôn nhân và Gia đình 2014, cha, mẹ bị Tòa án hạn chế quyền đối với con chưa thành niên trong trường hợp nào sau đây?',
    options: [
      'Bị kết án về một trong các tội xâm phạm tính mạng, sức khỏe, nhân phẩm, danh dự của con với lỗi cố ý hoặc có hành vi phá tán tài sản của con',
      'Cha mẹ đi công tác xa nhà dài ngày tại nước ngoài có ủy quyền nuôi dưỡng',
      'Cha mẹ không đồng ý cho con kết hôn với người mà con yêu thương',
      'Cha mẹ có thu nhập hàng tháng dưới mức lương cơ sở của nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Điều 85 Luật Hôn nhân và Gia đình 2014 quy định cha, mẹ bị hạn chế quyền đối với con nếu: bị kết án về một trong các tội xâm phạm tính mạng, sức khỏe, nhân phẩm, danh dự của con với lỗi cố ý; vi phạm nghiêm trọng nghĩa vụ chăm sóc, nuôi dưỡng; phá tán tài sản của con; xúi giục, ép buộc con làm điều trái pháp luật.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 85'
  },
  17033: {
    question: 'Theo khoản 3 Điều 51 Luật Hôn nhân và Gia đình 2014, người chồng KHÔNG CÓ QUYỀN yêu cầu Tòa án giải quyết ly hôn trong trường hợp nào sau đây?',
    options: [
      'Vợ đang có thai, sinh con hoặc đang nuôi con dưới 12 tháng tuổi',
      'Vợ đang trong thời gian đi học tập hoặc công tác ở nước ngoài',
      'Hai vợ chồng đang cùng đứng tên chung trong một khoản vay ngân hàng',
      'Người vợ chưa tìm được việc làm có thu nhập ổn định hàng tháng'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 51 Luật Hôn nhân và Gia đình 2014 quy định: Chồng không có quyền yêu cầu ly hôn trong trường hợp vợ đang có thai, sinh con hoặc đang nuôi con dưới 12 tháng tuổi. (Quy định này nhằm bảo vệ tuyệt đối sức khỏe của người mẹ và trẻ sơ sinh; người vợ vẫn có quyền yêu cầu ly hôn).',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 51'
  },
  17079: {
    question: 'Theo quy định của Luật Hôn nhân và Gia đình 2014, việc định đoạt tài sản chung nào của vợ chồng bắt buộc phải có sự thỏa thuận bằng văn bản của cả hai vợ chồng?',
    options: [
      'Bất động sản; động sản mà theo quy định của pháp luật phải đăng ký quyền sở hữu; tài sản đang là nguồn tạo ra thu nhập chủ yếu của gia đình',
      'Các đồ dùng sinh hoạt cá nhân thông thường trong gia đình',
      'Tiền mua sắm thực phẩm hằng ngày phục vụ bữa ăn gia đình',
      'Quần áo và đồ trang sức có giá trị dưới 5 triệu đồng'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 35 Luật Hôn nhân và Gia đình 2014 quy định: Việc định đoạt tài sản chung phải có sự thoả thuận bằng văn bản của vợ chồng trong các trường hợp: Bất động sản; Động sản mà theo quy định phải đăng ký quyền sở hữu; Tài sản đang là nguồn tạo ra thu nhập chủ yếu của gia đình.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 35'
  },

  // === CHAPTER 9 DUPLICATES & REWRITES ===
  19004: {
    question: 'Theo quy định của Bộ luật Lao động 2019, người sử dụng lao động KHÔNG ĐƯỢC áp dụng thử việc đối với người lao động trong trường hợp nào?',
    options: [
      'Giao kết hợp đồng lao động có thời hạn dưới 01 tháng',
      'Giao kết hợp đồng lao động có thời hạn 12 tháng',
      'Giao kết hợp đồng lao động không xác định thời hạn',
      'Người lao động đã từng có kinh nghiệm làm việc 5 năm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 24 Bộ luật Lao động 2019 quy định: Không áp dụng thử việc đối với người lao động giao kết hợp đồng lao động có thời hạn dưới 01 tháng.',
    legalReference: 'Bộ luật Lao động 2019, Điều 24'
  },
  19013: {
    question: 'Theo khoản 3 Điều 98 Bộ luật Lao động 2019, người lao động làm thêm giờ vào ban đêm thì ngoài tiền lương làm thêm giờ và tiền lương ban đêm, còn được trả thêm bao nhiêu tiền lương?',
    options: [
      'Được trả thêm 20% tiền lương tính theo đơn giá tiền lương hoặc tiền lương thực trả của công việc làm vào ban ngày của ngày làm việc bình thường hoặc ngày nghỉ',
      'Được trả thêm 50% tiền lương của ngày làm việc lễ, tết',
      'Được hưởng trọn vẹn gấp 5 lần tiền lương ngày bình thường',
      'Không được hưởng thêm bất kỳ khoản phụ cấp nào khác'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 98 Bộ luật Lao động 2019: Ngoài tiền lương quy định tại khoản 1 và khoản 2 Điều này, người lao động còn được trả thêm 20% tiền lương tính theo đơn giá tiền lương hoặc tiền lương thực trả theo công việc làm vào ban ngày của ngày làm việc bình thường hoặc của ngày nghỉ hằng tuần hoặc của ngày nghỉ lễ, tết.',
    legalReference: 'Bộ luật Lao động 2019, Điều 98'
  },
  19016: {
    question: 'Theo Điều 16 Bộ luật Lao động 2019, người sử dụng lao động có nghĩa vụ nào sau đây trước khi giao kết hợp đồng lao động?',
    options: [
      'Cung cấp thông tin trung thực về công việc, địa điểm làm việc, điều kiện lao động, thời giờ làm việc, thời giờ nghỉ ngơi, an toàn lao động, tiền lương và các chế độ bảo hiểm',
      'Yêu cầu người lao động nộp bản chính bằng tốt nghiệp đại học để công ty cất giữ',
      'Buộc người lao động phải đóng một khoản tiền đặt cọc cam kết làm việc 3 năm',
      'Yêu cầu người lao động ký cam kết không được kết hôn trong 2 năm đầu'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 16 Bộ luật Lao động 2019 quy định người sử dụng lao động phải cung cấp thông tin trung thực cho người lao động về công việc, địa điểm làm việc, điều kiện lao động, thời giờ làm việc, tiền lương...',
    legalReference: 'Bộ luật Lao động 2019, Điều 16'
  },
  19029: {
    question: 'Theo Điều 149 Bộ luật Lao động 2019, việc giao kết hợp đồng lao động đối với người lao động cao tuổi được quy định như thế nào?',
    options: [
      'Hai bên có thể thỏa thuận giao kết nhiều lần hợp đồng lao động xác định thời hạn',
      'Bắt buộc người sử dụng lao động phải ký hợp đồng lao động không xác định thời hạn',
      'Nghiêm cấm người sử dụng lao động ký hợp đồng lao động với người đã nghỉ hưu',
      'Người lao động cao tuổi chỉ được làm việc tối đa 02 giờ trong một ngày'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 149 Bộ luật Lao động 2019 quy định: Khi sử dụng người lao động cao tuổi, hai bên có thể thỏa thuận giao kết nhiều lần hợp đồng lao động xác định thời hạn.',
    legalReference: 'Bộ luật Lao động 2019, Điều 149'
  },
  19039: {
    question: 'Người sử dụng lao động khi đơn phương chấm dứt hợp đồng lao động hợp pháp đối với hợp đồng lao động xác định thời hạn từ 12 tháng đến 36 tháng thì phải báo trước cho người lao động ít nhất bao nhiêu ngày?',
    options: [
      'Ít nhất 30 ngày trước ngày chấm dứt hợp đồng lao động',
      'Ít nhất 45 ngày đối với hợp đồng lao động xác định thời hạn',
      'Ít nhất 03 ngày làm việc đối với mọi loại hợp đồng lao động',
      'Không cần báo trước trong bất kỳ trường hợp nào'
    ],
    correctAnswer: 0,
    explanation: 'Điểm b khoản 2 Điều 36 Bộ luật Lao động 2019 quy định thời hạn báo trước khi NSDLĐ đơn phương chấm dứt HĐLĐ: Ít nhất 30 ngày đối với hợp đồng lao động xác định thời hạn có thời hạn từ 12 tháng đến 36 tháng. (Ít nhất 45 ngày đối với HĐLĐ không xác định thời hạn).',
    legalReference: 'Bộ luật Lao động 2019, Điều 36'
  }
};

// Process all files
let totalPatched = 0;

for (const file of bankFiles) {
  const filePath = path.join(bankDir, file);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const rawContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse questions from file
  const jsonMatch = rawContent.match(/const questions:\s*Question\[\]\s*=\s*(\[[\s\S]*\]);\s*export default questions;/);
  if (!jsonMatch) {
    console.error(`Could not parse questions from ${file}`);
    continue;
  }
  
  let questionsList: Question[];
  try {
    questionsList = JSON.parse(jsonMatch[1]);
  } catch (e) {
    console.error(`JSON parse error in ${file}:`, e);
    continue;
  }

  let fileModified = false;

  // If this is chapter9_part2.ts, remove 19044 (which will be moved to chapter4_part4.ts)
  if (file === 'chapter9_part2.ts') {
    const origLen = questionsList.length;
    questionsList = questionsList.filter(q => q.id !== 19044);
    if (questionsList.length !== origLen) {
      console.log(`Removed question 19044 from ${file} to transfer to Chapter 4`);
      fileModified = true;
    }
  }

  // If this is chapter4_part4.ts, add question 19044 rewritten as Chapter 4 Civil Law
  if (file === 'chapter4_part4.ts') {
    const exists = questionsList.some(q => q.id === 19044);
    if (!exists) {
      const q19044: Question = {
        id: 19044,
        chapterId: 4,
        chapterName: "Chương 4: Luật Dân sự và Luật Tố tụng Dân sự",
        question: "Theo quy định của Bộ luật Dân sự 2015, hợp đồng dân sự được coi là giao kết vào thời điểm nào khi các bên giao kết bằng văn bản hoặc bằng lời nói?",
        options: [
          "Thời điểm bên đề nghị nhận được chấp thuận giao kết hợp đồng của bên được đề nghị",
          "Thời điểm bên được đề nghị bắt đầu soạn thảo văn bản trả lời đề nghị",
          "Thời điểm cơ quan công chứng chứng thực chữ ký của bên đề nghị giao kết",
          "Thời điểm các bên đã hoàn thành xong toàn bộ nghĩa vụ bàn giao tài sản trên thực tế"
        ],
        correctAnswer: 0,
        explanation: "Khoản 1 Điều 400 Bộ luật Dân sự 2015 quy định: Hợp đồng được giao kết vào thời điểm bên đề nghị nhận được chấp thuận giao kết.",
        legalReference: "Bộ luật Dân sự 2015, Điều 400",
        difficulty: "trung bình"
      };
      questionsList.push(q19044);
      console.log(`Added question 19044 to ${file} with chapterId 4`);
      fileModified = true;
    }
  }

  // Update questions with patches and balance distractors
  const updatedList = questionsList.map(q => {
    let current = { ...q };

    // Apply specific patch if available
    if (bankPatches[current.id]) {
      current = { ...current, ...bankPatches[current.id] };
      totalPatched++;
      fileModified = true;
    }

    // Eliminate any remaining "cấp huyện" in question/options/explanation
    if (current.question.includes('cấp huyện') || current.question.includes('UBND huyện') || current.question.includes('Chủ tịch UBND huyện')) {
      current.question = current.question
        .replace(/UBND huyện/g, 'UBND một địa phương')
        .replace(/Chủ tịch UBND huyện/g, 'Chủ tịch UBND cấp xã')
        .replace(/cấp huyện/g, 'cấp xã');
      fileModified = true;
    }

    // Ensure legalReference does not reference outdated Law on Bankruptcy 2014
    if (current.legalReference && current.legalReference.includes('Luật Phá sản 2014')) {
      current.legalReference = current.legalReference.replace(/Luật Phá sản 2014/g, 'Luật Phục hồi, phá sản 2025');
      if (current.explanation.includes('Luật Phá sản 2014')) {
        current.explanation = current.explanation.replace(/Luật Phá sản 2014/g, 'Luật Phục hồi, phá sản 2025');
      }
      fileModified = true;
    }

    // Distractor balancing: expand wrong options realistically so correct answer is NOT always the longest
    const ansIdx = current.correctAnswer;
    const correctText = current.options[ansIdx];
    const correctLen = correctText.length;
    const lens = current.options.map(o => o.length);
    const maxLen = Math.max(...lens);

    if (lens[ansIdx] === maxLen && maxLen > 40) {
      const newOpts: [string, string, string, string] = [...current.options] as any;
      for (let i = 0; i < 4; i++) {
        if (i === ansIdx) continue;
        const opt = newOpts[i];
        if (opt.length < correctLen - 10) {
          if (current.difficulty === 'vận dụng') {
            if (!opt.includes('theo') && !opt.includes('quy định') && !opt.includes('pháp luật')) {
              newOpts[i] = `${opt} theo các quy định hiện hành của pháp luật chuyên ngành`;
            } else if (!opt.includes('thỏa thuận') && !opt.includes('văn bản')) {
              newOpts[i] = `${opt} mà không cần có thêm văn bản thỏa thuận của các bên liên quan`;
            } else {
              newOpts[i] = `${opt} theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành`;
            }
          } else if (current.difficulty === 'trung bình') {
            if (!opt.includes('pháp luật') && !opt.includes('quy định')) {
              newOpts[i] = `${opt} theo quy định của pháp luật hiện hành và điều lệ áp dụng`;
            } else if (!opt.includes('cơ quan')) {
              newOpts[i] = `${opt} trừ trường hợp cơ quan nhà nước có thẩm quyền có văn bản khác`;
            } else {
              newOpts[i] = `${opt} trừ trường hợp pháp luật có quy định cụ thể khác`;
            }
          } else {
            if (opt.length < 35 && correctLen > 50) {
              newOpts[i] = `${opt} theo quy định của pháp luật có liên quan`;
            }
          }
        }
      }
      current.options = newOpts;
      fileModified = true;
    }

    return current;
  });

  if (fileModified) {
    const fileOutput = `import type { Question } from '../../types/quiz';\n\nconst questions: Question[] = ${JSON.stringify(updatedList, null, 2)};\n\nexport default questions;\n`;
    fs.writeFileSync(filePath, fileOutput, 'utf8');
    console.log(`Updated ${file} (${updatedList.length} questions)`);
  }
}

console.log(`Bank patching completed! Total specific patches applied: ${totalPatched}`);
