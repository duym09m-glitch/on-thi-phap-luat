import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';

// Load each exam
import { exam1Questions } from '../src/data/exam1';
import { exam2Questions } from '../src/data/exam2';
import { exam3Questions } from '../src/data/exam3';
import { exam4Questions } from '../src/data/exam4';
import { exam5Questions } from '../src/data/exam5';

console.log('Patching old exams...');

// Specific question content modifications mapping
const patches: Record<number, Partial<Question>> = {
  // === EXAM 1 ===
  14: {
    question: 'Trong quy định: "Người nào thấy người khác đang ở trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện mà không cứu giúp dẫn đến hậu quả người đó chết, thì bị phạt cảnh cáo, phạt cải tạo không giam giữ đến 02 năm hoặc phạt tù từ 03 tháng đến 02 năm". Bộ phận "thì bị phạt cảnh cáo, phạt cải tạo không giam giữ đến 02 năm hoặc phạt tù từ 03 tháng đến 02 năm" là bộ phận nào trong cơ cấu quy phạm pháp luật?',
    options: [
      'Giả định (nêu điều kiện, hoàn cảnh áp dụng quy phạm pháp luật)',
      'Quy định (nêu quy tắc xử sự được làm hoặc không được làm)',
      'Chế tài (nêu biện pháp tác động bất lợi của Nhà nước đối với người vi phạm)',
      'Năng lực pháp luật của chủ thể tham gia quan hệ pháp luật'
    ],
    correctAnswer: 2,
    explanation: 'Quy phạm pháp luật gồm 3 bộ phận: Giả định, Quy định, Chế tài. Bộ phận nêu lên các biện pháp tác động bất lợi mang tính cưỡng chế của Nhà nước khi chủ thể vi phạm được gọi là bộ phận Chế tài.',
    legalReference: 'Giáo trình Pháp luật đại cương - Cơ cấu quy phạm pháp luật'
  },
  18: {
    question: 'Cháu Bảo (7 tuổi) được ông bà tặng cho một chiếc xe đạp mini vào ngày sinh nhật. Bố mẹ cháu Bảo đã đồng ý nhận tài sản này cho cháu. Về năng lực chủ thể của cháu Bảo trong quan hệ pháp luật dân sự này, nhận định nào sau đây là đúng?',
    options: [
      'Cháu Bảo có cả năng lực pháp luật và năng lực hành vi dân sự đầy đủ',
      'Cháu Bảo có năng lực pháp luật dân sự từ khi sinh ra, nhưng năng lực hành vi chưa đầy đủ (phải có người đại diện)',
      'Cháu Bảo hoàn toàn không có năng lực pháp luật dân sự cho đến khi đủ 18 tuổi',
      'Cháu Bảo chỉ có năng lực hành vi khi có sự cho phép bằng văn bản của Tòa án'
    ],
    correctAnswer: 1,
    explanation: 'Năng lực pháp luật dân sự của cá nhân có từ khi người đó sinh ra và chấm dứt khi người đó chết. Năng lực hành vi dân sự xuất hiện dần dần theo độ tuổi và khả năng nhận thức, đối với người dưới 18 tuổi thì chưa có năng lực hành vi đầy đủ.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 16, 21'
  },
  51: {
    question: 'Theo Luật Tổ chức Tòa án nhân dân và Bộ luật Tố tụng Dân sự hiện hành, Tòa án nào có thẩm quyền xét xử sơ thẩm các tranh chấp dân sự thông thường ở địa phương?',
    options: [
      'Tòa án nhân dân khu vực',
      'Tòa án nhân dân tối cao',
      'Ủy ban nhân dân cấp tỉnh',
      'Sở Tư pháp cấp tỉnh'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức Tòa án nhân dân sửa đổi (có hiệu lực từ 01/7/2025), Tòa án nhân dân khu vực có thẩm quyền xét xử sơ thẩm hầu hết các vụ án, tranh chấp dân sự, hôn nhân gia đình, kinh doanh thương mại và lao động thuộc thẩm quyền sơ thẩm ở địa phương.',
    legalReference: 'Luật Tổ chức Tòa án nhân dân & BLTTDS'
  },
  52: {
    question: 'Anh Nam lái xe ô tô không chú ý quan sát đã đâm vào xe máy của chị Lan đang dừng chờ đèn đỏ, làm chị Lan bị gãy chân và xe máy bị hư hỏng nặng. Để anh Nam phải chịu trách nhiệm bồi thường thiệt hại ngoài hợp đồng cho chị Lan, cần đáp ứng những điều kiện nào theo Bộ luật Dân sự 2015?',
    options: [
      'Có thiệt hại thực tế xảy ra, có hành vi trái pháp luật, có mối quan hệ nhân quả giữa hành vi và thiệt hại, và người gây thiệt hại có lỗi',
      'Chỉ cần chị Lan bị thương tích mà không cần xác định hành vi của anh Nam có vi phạm pháp luật hay không',
      'Bắt buộc hai bên phải có hợp đồng dịch vụ vận tải ký kết từ trước',
      'Anh Nam phải là cán bộ công chức nhà nước đang trong giờ thi hành công vụ'
    ],
    correctAnswer: 0,
    explanation: 'Điều 584 Bộ luật Dân sự 2015 quy định căn cứ phát sinh trách nhiệm bồi thường thiệt hại gồm: có hành vi xâm phạm tính mạng, sức khỏe, tài sản (hành vi trái pháp luật), có thiệt hại thực tế xảy ra, có mối quan hệ nhân quả và yếu tố lỗi (trừ trường hợp luật có quy định khác).',
    legalReference: 'Bộ luật Dân sự 2015, Điều 584'
  },
  53: {
    question: 'Chiếc xe tải chở hàng của Công ty Vận tải Hải Hà đang lưu thông đúng tốc độ thì bất ngờ bị nổ lốp trước (sự cố kỹ thuật của phương tiện cơ giới) khiến xe mất lái va quệt làm sập tường rào của nhà ông Tuấn. Về trách nhiệm bồi thường thiệt hại do nguồn nguy hiểm cao độ gây ra, nhận định nào sau đây là đúng?',
    options: [
      'Công ty Hải Hà không phải bồi thường vì nổ lốp là sự cố kỹ thuật ngoài ý muốn',
      'Chủ sở hữu, người chiếm hữu nguồn nguy hiểm cao độ phải bồi thường thiệt hại cả khi không có lỗi, trừ trường hợp bất khả kháng hoặc lỗi cố ý của bên bị thiệt hại',
      'Chỉ người lái xe tải phải chịu trách nhiệm bồi thường bằng toàn bộ tài sản riêng của mình',
      'Thiệt hại do cơ quan bảo hiểm xã hội chi trả toàn bộ mà công ty không phải chịu trách nhiệm'
    ],
    correctAnswer: 1,
    explanation: 'Khoản 3 Điều 601 Bộ luật Dân sự 2015 quy định: Chủ sở hữu, người chiếm hữu nguồn nguy hiểm cao độ phải bồi thường thiệt hại cả khi không có lỗi, trừ trường hợp thiệt hại xảy ra hoàn toàn do lỗi cố ý của người bị thiệt hại hoặc trong tình thế cấp thiết, sự kiện bất khả kháng.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 601'
  },
  62: {
    question: 'Theo pháp luật về phục hồi và phá sản hiện hành, doanh nghiệp bị coi là mất khả năng thanh toán khi nào?',
    options: [
      'Khi doanh nghiệp có tổng số nợ lớn hơn tổng tài sản hiện có trên sổ sách kế toán',
      'Không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán',
      'Khi doanh nghiệp bị thua lỗ liên tục trong 02 năm tài chính liên tiếp',
      'Khi doanh nghiệp bị phong tỏa toàn bộ tài khoản tại các ngân hàng thương mại'
    ],
    correctAnswer: 1,
    explanation: 'Theo quy định pháp luật về phục hồi, phá sản, doanh nghiệp mất khả năng thanh toán là doanh nghiệp không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  63: {
    question: 'Cơ quan nào có thẩm quyền thụ lý và tiến hành thủ tục phục hồi, phá sản đối với doanh nghiệp mất khả năng thanh toán?',
    options: [
      'Ủy ban nhân dân cấp tỉnh nơi doanh nghiệp đặt trụ sở chính',
      'Sở Kế hoạch và Đầu tư tỉnh nơi cấp Giấy chứng nhận đăng ký kinh doanh',
      'Tòa án nhân dân có thẩm quyền theo quy định của pháp luật phục hồi, phá sản',
      'Ngân hàng Nhà nước Việt Nam nơi doanh nghiệp mở tài khoản giao dịch'
    ],
    correctAnswer: 2,
    explanation: 'Theo pháp luật về phục hồi, phá sản doanh nghiệp, Tòa án nhân dân là cơ quan duy nhất có thẩm quyền thụ lý đơn, ra quyết định mở thủ tục và tuyên bố phá sản doanh nghiệp.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  67: {
    question: 'Theo quy định hiện hành về đăng ký doanh nghiệp, cơ quan nào có thẩm quyền cấp Giấy chứng nhận đăng ký doanh nghiệp cho các công ty và doanh nghiệp tư nhân?',
    options: [
      'Phòng Đăng ký kinh doanh thuộc Sở Kế hoạch và Đầu tư cấp tỉnh',
      'Ủy ban nhân dân cấp xã nơi doanh nghiệp đặt địa điểm kinh doanh',
      'Cục Quản lý thị trường tỉnh nơi doanh nghiệp hoạt động thương mại',
      'Tòa án nhân dân khu vực nơi doanh nghiệp đặt trụ sở giao dịch'
    ],
    correctAnswer: 0,
    explanation: 'Cơ quan đăng ký kinh doanh cấp tỉnh (Phòng Đăng ký kinh doanh thuộc Sở Kế hoạch và Đầu tư) có thẩm quyền tiếp nhận hồ sơ và cấp Giấy chứng nhận đăng ký doanh nghiệp.',
    legalReference: 'Luật Doanh nghiệp 2020 & Nghị định về đăng ký doanh nghiệp'
  },
  75: {
    question: 'Theo quy định của Bộ luật Hình sự, hình phạt Tử hình KHÔNG ĐƯỢC áp dụng đối với những đối tượng nào sau đây?',
    options: [
      'Người dưới 18 tuổi khi phạm tội, phụ nữ có thai hoặc nuôi con dưới 36 tháng tuổi, người từ đủ 75 tuổi trở lên khi phạm tội hoặc khi xét xử',
      'Người từ đủ 70 tuổi trở lên và người có công với cách mạng',
      'Người phạm tội lần đầu và đã bồi thường toàn bộ thiệt hại cho nạn nhân',
      'Người có bệnh hiểm nghèo nhưng vẫn có đầy đủ năng lực nhận thức hành vi'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 40 Bộ luật Hình sự quy định: Không áp dụng hình phạt tử hình đối với người dưới 18 tuổi khi phạm tội, phụ nữ có thai, phụ nữ đang nuôi con dưới 36 tháng tuổi hoặc người đủ 75 tuổi trở lên khi phạm tội hoặc khi xét xử.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 40'
  },
  76: {
    question: 'Ban Giám đốc Công ty Hóa chất Tân Phát họp và ra nghị quyết xả thải trộm hóa chất công nghiệp độc hại chưa qua xử lý ra môi trường tự nhiên để giảm chi phí sản xuất, gây ô nhiễm nghiêm trọng nguồn nước sinh hoạt của khu dân cư. Về trách nhiệm hình sự của pháp nhân thương mại này, nhận định nào sau đây là đúng?',
    options: [
      'Chỉ các cá nhân trong Ban Giám đốc bị xử lý, pháp nhân thương mại không bao giờ phải chịu trách nhiệm hình sự',
      'Pháp nhân thương mại phải chịu trách nhiệm hình sự khi hành vi phạm tội được thực hiện nhân danh pháp nhân, vì lợi ích của pháp nhân và có sự chỉ đạo điều hành của pháp nhân',
      'Pháp nhân thương mại chỉ phải bồi thường thiệt hại dân sự mà không thể bị kết án hình sự',
      'Pháp nhân thương mại tự động bị giải thể ngay khi có quyết định khởi tố vụ án hình sự'
    ],
    correctAnswer: 1,
    explanation: 'Điều 75 Bộ luật Hình sự 2015 quy định điều kiện chịu trách nhiệm hình sự của pháp nhân thương mại: hành vi phạm tội được thực hiện nhân danh pháp nhân; vì lợi ích của pháp nhân; có sự chỉ đạo, điều hành của pháp nhân và chưa hết thời hiệu truy cứu TNHS.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 75'
  },
  81: {
    question: 'Bà Lan là kế toán trưởng của một bệnh viện công lập đã chủ động làm giả phiếu chi để rút 300 triệu đồng từ quỹ của đơn vị đem về chi tiêu cá nhân. Về mặt chủ quan của tội tham ô tài sản mà bà Lan thực hiện, hình thức lỗi được xác định là gì?',
    options: [
      'Lỗi cố ý trực tiếp (nhận thức rõ hành vi trái luật, thấy trước hậu quả và mong muốn hậu quả xảy ra)',
      'Lỗi vô ý vì quá tự tin rằng cơ quan kiểm toán sẽ không phát hiện ra sai sót',
      'Lỗi vô ý do cẩu thả trong quá trình đối soát sổ sách kế toán của bệnh viện',
      'Không có lỗi vì bà Lan có ý định sẽ hoàn trả lại số tiền vào năm sau'
    ],
    correctAnswer: 0,
    explanation: 'Các tội phạm tham nhũng như Tham ô tài sản (Điều 353), Nhận hối lộ (Điều 354) luôn được thực hiện với lỗi cố ý trực tiếp: người phạm tội nhận thức rõ hành vi lợi dụng chức vụ chiếm đoạt tài sản là nguy hiểm cho xã hội và mong muốn đạt được kết quả chiếm đoạt.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 353'
  },
  85: {
    question: 'Hai vợ chồng anh Hùng và chị Mai cùng ký đơn thuận tình ly hôn và đã thỏa thuận xong về con chung, tài sản. Theo quy định pháp luật hiện hành, cơ quan nào có thẩm quyền công nhận thuận tình ly hôn?',
    options: [
      'Tòa án nhân dân có thẩm quyền theo quy định của pháp luật tố tụng dân sự',
      'Ủy ban nhân dân cấp xã nơi hai bên đăng ký kết hôn trước đây',
      'Hội Liên hiệp Phụ nữ cấp xã nơi hai vợ chồng thường trú',
      'Cơ quan công an nơi gia đình cư trú và đăng ký tạm trú'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Hôn nhân và Gia đình 2014 và Bộ luật Tố tụng Dân sự, chỉ có Tòa án nhân dân mới có thẩm quyền công nhận thuận tình ly hôn hoặc giải quyết ly hôn theo yêu cầu của một bên.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 55 & BLTTDS'
  },

  // === EXAM 2 ===
  110: {
    question: 'Chủ tịch Ủy ban nhân dân cấp tỉnh ban hành một Quyết định xử phạt vi phạm hành chính 50 triệu đồng đối với Công ty TNHH Sao Mai về hành vi xây dựng sai phép. Văn bản xử phạt này thuộc loại văn bản nào trong hệ thống pháp luật?',
    options: [
      'Văn bản quy phạm pháp luật (áp dụng chung nhiều lần cho mọi chủ thể)',
      'Văn bản áp dụng quy phạm pháp luật (áp dụng một lần cho đối tượng cụ thể được nêu danh)',
      'Điều ước quốc tế có hiệu lực bắt buộc đối với mọi công dân',
      'Văn bản giải thích Hiến pháp do cơ quan lập pháp ban hành'
    ],
    correctAnswer: 1,
    explanation: 'Quyết định xử phạt vi phạm hành chính là văn bản áp dụng pháp luật (mang tính cá biệt, chỉ áp dụng một lần đối với chủ thể cụ thể bị xử phạt), không phải là văn bản quy phạm pháp luật.',
    legalReference: 'Luật Ban hành văn bản quy phạm pháp luật 2015'
  },
  115: {
    question: 'Y tá Nga chuẩn bị thuốc tiêm cho bệnh nhân trong ca trực tối. Do vội vã và không đối chiếu tên thuốc trên hồ sơ bệnh án theo đúng quy trình, y tá Nga đã tiêm nhầm thuốc kháng sinh liều cao làm bệnh nhân bị sốc phản vệ nguy kịch. Về mặt chủ quan, hình thức lỗi của y tá Nga là gì?',
    options: [
      'Lỗi cố ý gián tiếp vì y tá Nga bỏ mặc hậu quả xảy ra với bệnh nhân',
      'Lỗi vô ý vì quá tự tin nghĩ rằng tay nghề của mình không bao giờ sai sót',
      'Lỗi vô ý do cẩu thả vì không thấy trước hậu quả dù phải thấy trước và có thể thấy trước',
      'Hoàn toàn không có lỗi vì y tá Nga đang thực hiện nhiệm vụ trong ca trực'
    ],
    correctAnswer: 2,
    explanation: 'Khoản 2 Điều 11 Bộ luật Hình sự quy định: Vô ý do cẩu thả là trường hợp người phạm tội không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, tuy rằng phải thấy trước và có thể thấy trước hậu quả đó.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 11'
  },
  125: {
    question: 'Theo quy định của Luật Tổ chức Tòa án nhân dân hiện hành, hệ thống Tòa án nhân dân ở Việt Nam được tổ chức gồm những cấp nào?',
    options: [
      'Tòa án nhân dân tối cao; Tòa án nhân dân cấp tỉnh; Tòa án nhân dân khu vực; và các Tòa án quân sự',
      'Tòa án nhân dân tối cao; Tòa án nhân dân cấp cao; Tòa án nhân dân cấp tỉnh; Tòa án nhân dân cấp huyện',
      'Tòa án nhân dân trung ương; Tòa án nhân dân các vùng kinh tế trọng điểm; Tòa án cơ sở',
      'Tòa án Hiến pháp tối cao; Tòa án Hành chính quốc gia; Tòa án Dân sự và Hình sự khu vực'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức Tòa án nhân dân hiện hành (hiệu lực từ 01/7/2025), hệ thống Tòa án nhân dân gồm: Tòa án nhân dân tối cao; Tòa án nhân dân cấp tỉnh; Tòa án nhân dân khu vực; và các Tòa án quân sự.',
    legalReference: 'Luật Tổ chức Tòa án nhân dân & Điều 102 Hiến pháp 2013'
  },
  126: {
    question: 'Bản án sơ thẩm của Tòa án nhân dân cấp tỉnh bị đương sự kháng cáo hợp lệ theo thủ tục phúc thẩm. Theo quy định pháp luật hiện hành, cơ quan nào có thẩm quyền xét xử phúc thẩm vụ án này?',
    options: [
      'Tòa phúc thẩm thuộc Tòa án nhân dân tối cao',
      'Ủy ban Tư pháp của Quốc hội',
      'Tòa án nhân dân khu vực nơi phát sinh vụ việc tranh chấp',
      'Hội đồng Thẩm phán Tòa án nhân dân cấp tỉnh'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức TAND hiện hành, đối với bản án, quyết định sơ thẩm của TAND cấp tỉnh bị kháng cáo, kháng nghị thì Tòa phúc thẩm Tòa án nhân dân tối cao có thẩm quyền xét xử phúc thẩm.',
    legalReference: 'Luật Tổ chức Tòa án nhân dân'
  },
  135: {
    question: 'Nhân dịp sự kiện trọng đại của đất nước, Nhà nước dự kiến ban hành chính sách khoan hồng tha thứ tội hàng loạt cho người phạm tội trên phạm vi cả nước. Theo Hiến pháp 2013, cơ quan nào có thẩm quyền quyết định đại xá?',
    options: [
      'Quốc hội',
      'Chủ tịch nước',
      'Chính phủ',
      'Chánh án Tòa án nhân dân tối cao'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 11 Điều 70 Hiến pháp 2013 quy định Quốc hội có thẩm quyền quyết định đại xá. (Chủ tịch nước quyết định đặc xá theo Điều 88 Hiến pháp).',
    legalReference: 'Hiến pháp 2013, Điều 70'
  },
  142: {
    question: 'Theo quy định của Bộ luật Lao động 2019, tuổi nghỉ hưu của người lao động trong điều kiện lao động bình thường được điều chỉnh theo lộ trình như thế nào?',
    options: [
      'Nam đủ 60 tuổi và nữ đủ 55 tuổi cố định không thay đổi',
      'Nam đủ 62 tuổi vào năm 2028 và nữ đủ 60 tuổi vào năm 2035',
      'Nam đủ 65 tuổi và nữ đủ 60 tuổi áp dụng ngay lập tức',
      'Người lao động được tự chọn tuổi nghỉ hưu từ đủ 50 tuổi trở lên'
    ],
    correctAnswer: 1,
    explanation: 'Điều 169 Bộ luật Lao động 2019 quy định tuổi nghỉ hưu của người lao động trong điều kiện bình thường được điều chỉnh theo lộ trình cho đến khi đủ 62 tuổi đối với lao động nam vào năm 2028 và đủ 60 tuổi đối với lao động nữ vào năm 2035.',
    legalReference: 'Bộ luật Lao động 2019, Điều 169'
  },
  143: {
    question: 'Cụ Tuấn bị ốm nặng nguy kịch và muốn lập di chúc miệng để phân chia tài sản cho con cháu. Di chúc miệng của cụ Tuấn được coi là hợp pháp khi đáp ứng đầy đủ điều kiện nào sau đây?',
    options: [
      'Cụ Tuấn thể hiện ý chí trước ít nhất 02 người làm chứng; người làm chứng ghi chép lại, ký tên hoặc điểm chỉ; trong thời hạn 05 ngày làm việc phải được công chứng hoặc chứng thực',
      'Cụ Tuấn chỉ cần đọc to cho mọi người trong gia đình nghe mà không cần người làm chứng',
      'Bắt buộc phải có đầy đủ đại diện Ủy ban nhân dân và Tòa án đến tận giường bệnh chứng kiến',
      'Di chúc miệng có hiệu lực vĩnh viễn dù sau đó cụ Tuấn đã hồi phục sức khỏe bình thường'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 5 Điều 630 Bộ luật Dân sự 2015 quy định di chúc miệng hợp pháp nếu người di chúc miệng thể hiện ý chí trước ít nhất 02 người làm chứng và ngay sau đó được ghi chép lại, cùng ký tên hoặc điểm chỉ; trong thời hạn 05 ngày làm việc phải được công chứng viên hoặc cơ quan có thẩm quyền chứng thực.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 629, 630'
  },
  152: {
    question: 'Hai công dân cư trú tại cùng một địa bàn phát sinh tranh chấp hợp đồng vay nợ tài sản trị giá 200 triệu đồng. Tòa án nào có thẩm quyền thụ lý xét xử sơ thẩm vụ án dân sự này?',
    options: [
      'Tòa án nhân dân khu vực nơi bị đơn cư trú',
      'Tòa án nhân dân tối cao tại Hà Nội',
      'Ủy ban nhân dân cấp xã nơi lập giấy vay tiền',
      'Hội đồng trọng tài thương mại quốc tế'
    ],
    correctAnswer: 0,
    explanation: 'Theo quy định tố tụng dân sự và Luật Tổ chức TAND hiện hành, Tòa án nhân dân khu vực có thẩm quyền xét xử sơ thẩm các tranh chấp dân sự phát sinh giữa các cá nhân trên địa bàn quản lý.',
    legalReference: 'Bộ luật Tố tụng Dân sự & Luật Tổ chức TAND'
  },
  161: {
    question: 'Trong thủ tục phục hồi và giải quyết phá sản doanh nghiệp, Hội nghị chủ nợ được coi là hợp lệ khi có sự tham gia của các chủ nợ đáp ứng điều kiện nào?',
    options: [
      'Chỉ cần người đại diện theo pháp luật của doanh nghiệp có mặt',
      'Đại diện cho số nợ không có bảo đảm theo tỷ lệ luật định tham gia',
      'Phải có đầy đủ 100% tất cả các chủ nợ của doanh nghiệp dự họp',
      'Có sự phê chuẩn bằng văn bản của cơ quan thuế quản lý trực tiếp'
    ],
    correctAnswer: 1,
    explanation: 'Theo pháp luật về phục hồi và phá sản, Hội nghị chủ nợ hợp lệ khi có sự tham gia của các chủ nợ đại diện cho tỷ lệ luật định tổng số nợ không có bảo đảm của doanh nghiệp.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  166: {
    question: 'Theo quy định hiện hành về đăng ký doanh nghiệp, hồ sơ đăng ký thành lập doanh nghiệp nộp qua Cổng thông tin quốc gia được coi là hợp lệ khi nào?',
    options: [
      'Có đầy đủ giấy tờ theo quy định và các giấy tờ đó được kê khai đầy đủ, chính xác theo luật định',
      'Chỉ cần nộp bản sao chứng minh nhân dân hoặc thẻ căn cước của người thành lập',
      'Phải có văn bản phê duyệt trước của Ủy ban nhân dân cấp tỉnh',
      'Có chứng từ nộp đủ vốn điều lệ bằng tiền mặt vào kho bạc nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Hồ sơ đăng ký doanh nghiệp hợp lệ khi có đầy đủ giấy tờ theo quy định của Luật Doanh nghiệp và nội dung các giấy tờ được kê khai đầy đủ theo quy định của pháp luật.',
    legalReference: 'Luật Doanh nghiệp 2020 & Nghị định về đăng ký doanh nghiệp'
  },
  181: {
    question: 'Do muốn giải quyết nhanh thủ tục hành chính, ông Minh đã đưa cho cán bộ thụ lý hồ sơ 20 triệu đồng. Sau đó ông Minh nhận thức được hành vi sai trái và đã chủ động đến cơ quan công an khai báo toàn bộ sự việc trước khi bị phát giác. Hậu quả pháp lý đối với ông Minh như thế nào?',
    options: [
      'Vẫn bị truy cứu trách nhiệm hình sự với khung hình phạt cao nhất của tội đưa hối lộ',
      'Có thể được miễn trách nhiệm hình sự và được trả lại một phần hoặc toàn bộ tài sản đã dùng để đưa hối lộ',
      'Tự động bị tịch thu toàn bộ tài sản nhà cửa cá nhân để sung công quỹ nhà nước',
      'Bị phạt tù từ 03 năm đến 05 năm và không được áp dụng bất kỳ tình tiết giảm nhẹ nào'
    ],
    correctAnswer: 1,
    explanation: 'Khoản 7 Điều 364 Bộ luật Hình sự quy định: Người đưa hối lộ tuy không bị ép buộc nhưng đã chủ động khai báo trước khi bị phát giác, thì có thể được miễn trách nhiệm hình sự và được trả lại một phần hoặc toàn bộ của đã dùng để đưa hối lộ.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 364'
  },

  // === EXAM 3 ===
  225: {
    question: 'Theo Hiến pháp 2013 (đã được sửa đổi, bổ sung) và Luật Tổ chức chính quyền địa phương hiện hành, Hội đồng nhân dân là cơ quan quyền lực nhà nước ở địa phương được tổ chức ở những cấp nào?',
    options: [
      'Cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, thị trấn)',
      'Cấp trung ương, cấp tỉnh, cấp huyện và cấp cơ sở',
      'Chỉ được tổ chức duy nhất ở cấp thành phố trực thuộc trung ương',
      'Được tổ chức độc lập ở tất cả các thôn, bản, tổ dân phố trên cả nước'
    ],
    correctAnswer: 0,
    explanation: 'Theo mô hình chính quyền địa phương 2 cấp (có hiệu lực từ 01/7/2025), đơn vị hành chính gồm cấp tỉnh và cấp xã; Hội đồng nhân dân được tổ chức ở cấp tỉnh và cấp xã.',
    legalReference: 'Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương'
  },
  226: {
    question: 'Để kiện toàn nhân sự lãnh đạo Tòa án nhân dân tối cao, sau khi Quốc hội phê chuẩn đề nghị của Chánh án TAND tối cao, ai là người có thẩm quyền ra quyết định bổ nhiệm Thẩm phán Tòa án nhân dân tối cao?',
    options: [
      'Chủ tịch nước',
      'Thủ tướng Chính phủ',
      'Chủ tịch Quốc hội',
      'Bộ trưởng Bộ Tư pháp'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 3 Điều 88 Hiến pháp 2013 quy định Chủ tịch nước có thẩm quyền: Bổ nhiệm, miễn nhiệm, cách chức Thẩm phán Tòa án nhân dân tối cao căn cứ vào nghị quyết của Quốc hội.',
    legalReference: 'Hiến pháp 2013, Điều 88'
  },
  230: {
    question: 'Theo Hiến pháp và Luật Tổ chức chính quyền địa phương hiện hành, Ủy ban nhân dân là cơ quan hành chính nhà nước ở địa phương được tổ chức ở những cấp nào?',
    options: [
      'Ủy ban nhân dân cấp tỉnh và Ủy ban nhân dân cấp xã',
      'Ủy ban nhân dân cấp trung ương và Ủy ban nhân dân cấp cơ sở',
      'Chỉ được tổ chức tại các tỉnh miền núi đặc biệt khó khăn',
      'Ủy ban nhân dân cấp tỉnh, Ủy ban nhân dân cấp huyện và Ủy ban nhân dân cấp xã'
    ],
    correctAnswer: 0,
    explanation: 'Theo quy định hiện hành về chính quyền địa phương 2 cấp, Ủy ban nhân dân là cơ quan chấp hành của HĐND cùng cấp, cơ quan hành chính nhà nước ở địa phương, được tổ chức ở cấp tỉnh và cấp xã.',
    legalReference: 'Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương'
  },
  231: {
    question: 'Theo Luật Tổ chức Chính phủ và Hiến pháp 2013, Thủ tướng Chính phủ có thẩm quyền phê chuẩn kết quả bầu, miễn nhiệm, bãi nhiệm đối với chức danh lãnh đạo nào ở địa phương?',
    options: [
      'Chủ tịch, Phó Chủ tịch Ủy ban nhân dân cấp tỉnh',
      'Chủ tịch, Phó Chủ tịch Hội đồng nhân dân cấp xã',
      'Giám đốc các doanh nghiệp tư nhân đóng trên địa bàn tỉnh',
      'Chánh án Tòa án nhân dân khu vực'
    ],
    correctAnswer: 0,
    explanation: 'Thủ tướng Chính phủ phê chuẩn việc bầu, miễn nhiệm và quyết định điều động, đình chỉ công tác, cách chức Chủ tịch, Phó Chủ tịch Ủy ban nhân dân cấp tỉnh theo Điều 98 Hiến pháp và Luật Tổ chức Chính phủ.',
    legalReference: 'Luật Tổ chức Chính phủ & Điều 98 Hiến pháp 2013'
  },
  233: {
    question: 'Hội đồng nhân dân ở các cấp địa phương do ai bầu ra để đại diện cho ý chí, nguyện vọng của Nhân dân địa phương?',
    options: [
      'Do Cử tri ở địa phương bầu ra theo nguyên tắc phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín',
      'Do Ủy ban nhân dân cấp trên chỉ định bổ nhiệm',
      'Do Chủ tịch nước ra quyết định phê chuẩn',
      'Do Thủ tướng Chính phủ lựa chọn từ danh sách công chức'
    ],
    correctAnswer: 0,
    explanation: 'Điều 113 Hiến pháp 2013: Hội đồng nhân dân là cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân, do Nhân dân địa phương bầu ra.',
    legalReference: 'Hiến pháp 2013, Điều 113'
  },
  248: {
    question: 'Ông Hùng nhặt được một chiếc ví da đánh rơi trong công viên bên trong có 15 triệu đồng tiền mặt và giao nộp ngay cho cơ quan công an địa phương. Sau 01 năm thông báo công khai theo luật định mà không xác định được ai là chủ sở hữu, số tiền này được giải quyết như thế nào theo Bộ luật Dân sự 2015?',
    options: [
      'Ông Hùng được xác lập quyền sở hữu đối với số tiền nhặt được sau khi trừ chi phí bảo quản',
      'Toàn bộ số tiền tự động tịch thu sung vào ngân sách nhà nước mà ông Hùng không được hưởng gì',
      'Cơ quan công an giữ lại số tiền để phục vụ hoạt động nội bộ mà không cần quyết định',
      'Tiền được chia đều cho tất cả mọi người có mặt tại công viên ngày hôm đó'
    ],
    correctAnswer: 0,
    explanation: 'Điều 230 Bộ luật Dân sự 2015: Sau 01 năm thông báo công khai mà không tìm được chủ sở hữu thì đối với tài sản có giá trị đến 10 lần mức lương cơ sở, người nhặt được được xác lập quyền sở hữu tài sản đó.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 230'
  },
  252: {
    question: 'Khi công dân khởi kiện tranh chấp về quyền sử dụng đất đai giữa các hộ gia đình ở địa phương, Tòa án nào có thẩm quyền thụ lý xét xử sơ thẩm theo quy định tố tụng hiện hành?',
    options: [
      'Tòa án nhân dân khu vực nơi có thửa đất tranh chấp',
      'Tòa án nhân dân tối cao tại Hà Nội',
      'Ủy ban nhân dân cấp xã nơi công dân cư trú',
      'Bộ Tài nguyên và Môi trường'
    ],
    correctAnswer: 0,
    explanation: 'Theo Bộ luật Tố tụng Dân sự và Luật Tổ chức TAND hiện hành, Tòa án nhân dân khu vực có thẩm quyền xét xử sơ thẩm tranh chấp về bất động sản theo thẩm quyền lãnh thổ nơi có bất động sản.',
    legalReference: 'Bộ luật Tố tụng Dân sự, Điều 35, 39'
  },
  263: {
    question: 'Doanh nghiệp Xây dựng Hải Đăng bị Tòa án tuyên bố phá sản, Quản tài viên bán đấu giá tài sản thu được 1 tỷ đồng. Biết doanh nghiệp có nợ lương người lao động 300 triệu, nợ thuế 200 triệu, chi phí phá sản 50 triệu và nợ ngân hàng không bảo đảm 1 tỷ. Khoản tiền nào được ưu tiên thanh toán đầu tiên theo luật?',
    options: [
      'Chi phí phá sản (50 triệu đồng)',
      'Nợ gốc ngân hàng thương mại',
      'Nợ tiền thuế của Nhà nước',
      'Khoản nợ riêng của Giám đốc doanh nghiệp'
    ],
    correctAnswer: 0,
    explanation: 'Theo pháp luật về phục hồi và phá sản, thứ tự phân chia tài sản ưu tiên số một luôn là chi phí phục hồi, chi phí phá sản của quá trình giải quyết vụ việc.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  279: {
    question: 'Ông Hùng là Trưởng phòng Kế hoạch của một cơ quan nhà nước, không được giao nhiệm vụ quản lý tiền hay tài sản của đơn vị. Tuy nhiên, ông Hùng đã lợi dụng chức vụ và ảnh hưởng của mình để đe dọa chủ thầu thi công, yêu cầu chủ thầu phải đưa cho ông 100 triệu đồng thì mới phê duyệt tiến độ công trình. Hành vi của ông Hùng cấu thành tội danh nào theo Bộ luật Hình sự?',
    options: [
      'Tội Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản (Điều 355 BLHS)',
      'Tội Tham ô tài sản (Điều 353 BLHS)',
      'Tội Trộm cắp tài sản công vụ (Điều 173 BLHS)',
      'Tội Thiếu trách nhiệm gây hậu quả nghiêm trọng'
    ],
    correctAnswer: 0,
    explanation: 'Tội Tham ô tài sản đòi hỏi người phạm tội phải có trách nhiệm quản lý trực tiếp tài sản đó. Nếu không có trách nhiệm quản lý tài sản mà lợi dụng chức vụ, quyền hạn để chiếm đoạt tài sản của người khác thì cấu thành Tội lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản (Điều 355 BLHS).',
    legalReference: 'Bộ luật Hình sự 2015, Điều 355'
  },
  285: {
    question: 'Theo Điều 110 Hiến pháp 2013 (đã được sửa đổi, bổ sung), các đơn vị hành chính của nước Cộng hòa XHCN Việt Nam được phân định như thế nào?',
    options: [
      'Nước chia thành tỉnh, thành phố trực thuộc trung ương; tỉnh chia thành xã, thị trấn; thành phố trực thuộc trung ương chia thành phường, xã; và đơn vị hành chính - kinh tế đặc biệt',
      'Nước chia thành 3 miền Bắc - Trung - Nam độc lập về tư pháp',
      'Nước chia thành 100 quận huyện trực thuộc Văn phòng Quốc hội',
      'Nước chỉ có một cấp hành chính duy nhất từ trung ương đến cơ sở'
    ],
    correctAnswer: 0,
    explanation: 'Hiến pháp sửa đổi quy định phân định đơn vị hành chính gồm cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, thị trấn), đồng thời quy định về đơn vị hành chính - kinh tế đặc biệt.',
    legalReference: 'Hiến pháp 2013 (sửa đổi, bổ sung), Điều 110'
  },

  // === EXAM 4 ===
  307: {
    question: 'Anh Nam là nhân viên gác chắn đường ngang đường sắt. Khi có chuông báo hiệu và tín hiệu đèn tàu hỏa sắp chạy qua, nhưng do mải xem điện thoại nên anh Nam đã không kéo rào chắn đường ngang theo đúng quy trình nghiệp vụ, dẫn đến vụ tai nạn tàu hỏa đâm xe tải. Vi phạm pháp luật của anh Nam thuộc dạng hành vi nào?',
    options: [
      'Hành vi không hành động (không thực hiện nghĩa vụ pháp lý mà pháp luật bắt buộc phải thực hiện)',
      'Hành vi hành động (làm một việc mà pháp luật nghiêm cấm thực hiện)',
      'Sự biến pháp lý thuần túy xảy ra ngoài ý chí con người',
      'Sự kiện bất khả kháng do lỗi kỹ thuật của ngành đường sắt'
    ],
    correctAnswer: 0,
    explanation: 'Hành vi trái pháp luật có thể thể hiện dưới dạng hành động (làm điều pháp luật cấm) hoặc không hành động (không làm điều mà pháp luật bắt buộc phải làm dù có đủ điều kiện để thực hiện).',
    legalReference: 'Giáo trình Pháp luật đại cương - Vi phạm pháp luật'
  },
  321: {
    question: 'Theo quy định pháp luật tố tụng hiện hành, Tòa án nào có thẩm quyền xét xử sơ thẩm đối với các vụ việc tranh chấp hợp đồng mua bán tài sản giữa công dân với nhau?',
    options: [
      'Tòa án nhân dân khu vực nơi bị đơn cư trú',
      'Tòa án nhân dân tối cao',
      'Ủy ban nhân dân cấp xã',
      'Hội đồng Trọng tài quốc gia'
    ],
    correctAnswer: 0,
    explanation: 'Theo Luật Tổ chức TAND và Bộ luật Tố tụng Dân sự hiện hành, Tòa án nhân dân khu vực có thẩm quyền xét xử sơ thẩm các vụ án dân sự thuộc thẩm quyền sơ thẩm ở địa phương.',
    legalReference: 'Bộ luật Tố tụng Dân sự & Luật Tổ chức TAND'
  },
  326: {
    question: 'Theo Hiến pháp 2013 (sửa đổi, bổ sung) và Luật Tổ chức chính quyền địa phương, chính quyền địa phương gồm Hội đồng nhân dân và Ủy ban nhân dân được tổ chức ở những cấp hành chính nào?',
    options: [
      'Cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, thị trấn)',
      'Cấp trung ương, cấp vùng và cấp cơ sở',
      'Chỉ được tổ chức tại các thành phố có trên 1 triệu dân',
      'Cấp tỉnh, cấp huyện và cấp thôn xóm'
    ],
    correctAnswer: 0,
    explanation: 'Chính quyền địa phương được tổ chức ở các đơn vị hành chính gồm cấp tỉnh và cấp xã theo mô hình chính quyền địa phương 2 cấp.',
    legalReference: 'Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương'
  },
  329: {
    question: 'Ở cấp tỉnh, chức danh Chủ tịch Ủy ban nhân dân tỉnh do cơ quan nào bầu ra theo quy định của pháp luật?',
    options: [
      'Hội đồng nhân dân cấp tỉnh bầu theo giới thiệu của Chủ tịch Hội đồng nhân dân cấp tỉnh',
      'Thủ tướng Chính phủ trực tiếp chỉ định không qua bầu cử',
      'Toàn thể công dân trong tỉnh đi bỏ phiếu trực tiếp bầu ra',
      'Tòa án nhân dân cấp tỉnh ra quyết định bổ nhiệm'
    ],
    correctAnswer: 0,
    explanation: 'Chủ tịch Ủy ban nhân dân cấp tỉnh do Hội đồng nhân dân cấp tỉnh bầu trong số các đại biểu Hội đồng nhân dân theo sự giới thiệu của Chủ tịch HĐND cấp tỉnh, sau đó được Thủ tướng Chính phủ phê chuẩn.',
    legalReference: 'Luật Tổ chức chính quyền địa phương, Điều 83'
  },
  333: {
    question: 'Hội đồng nhân dân cấp tỉnh có thẩm quyền bãi bỏ văn bản quy phạm pháp luật trái pháp luật của cơ quan nào sau đây?',
    options: [
      'Văn bản trái pháp luật của Ủy ban nhân dân cấp tỉnh và văn bản trái pháp luật của Hội đồng nhân dân cấp xã',
      'Nghị định của Chính phủ áp dụng tại địa phương',
      'Thông tư của Bộ trưởng Bộ Tư pháp ban hành',
      'Bản án đã có hiệu lực của Tòa án nhân dân'
    ],
    correctAnswer: 0,
    explanation: 'HĐND cấp tỉnh có quyền bãi bỏ một phần hoặc toàn bộ văn bản trái pháp luật của UBND cùng cấp và văn bản trái pháp luật của HĐND cấp dưới trực tiếp (cấp xã).',
    legalReference: 'Luật Tổ chức chính quyền địa phương'
  },
  354: {
    question: 'Theo quy định của Bộ luật Tố tụng Dân sự hiện hành, ai có thẩm quyền kháng nghị theo thủ tục Giám đốc thẩm đối với bản án, quyết định đã có hiệu lực pháp luật của Tòa án nhân dân cấp tỉnh?',
    options: [
      'Chánh án Tòa án nhân dân tối cao và Viện trưởng Viện kiểm sát nhân dân tối cao',
      'Chủ tịch Ủy ban nhân dân cấp tỉnh nơi có đương sự cư trú',
      'Bộ trưởng Bộ Tư pháp',
      'Trưởng ban Dân nguyện của Quốc hội'
    ],
    correctAnswer: 0,
    explanation: 'Điều 331 Bộ luật Tố tụng Dân sự quy định Chánh án Tòa án nhân dân tối cao và Viện trưởng Viện kiểm sát nhân dân tối cao có thẩm quyền kháng nghị theo thủ tục giám đốc thẩm bản án, quyết định đã có hiệu lực của Tòa án nhân dân cấp tỉnh.',
    legalReference: 'Bộ luật Tố tụng Dân sự 2015, Điều 331'
  },
  356: {
    question: 'Công ty Cổ phần Thương mại Sao Việt có 15 cổ đông là cá nhân và không có cổ đông là tổ chức, hoạt động theo mô hình có Hội đồng quản trị và Ban Kiểm soát. Về cơ cấu Ban kiểm soát trong công ty này, nhận định nào sau đây là đúng?',
    options: [
      'Công ty bắt buộc phải thành lập Ban kiểm soát nếu lựa chọn mô hình tổ chức thứ nhất của Luật Doanh nghiệp',
      'Công ty cổ phần không bao giờ được phép thành lập Ban kiểm soát',
      'Ban kiểm soát do Ủy ban nhân dân cấp tỉnh trực tiếp bổ nhiệm thành viên',
      'Ban kiểm soát chỉ cần duy nhất 01 người và người đó phải là Tổng giám đốc'
    ],
    correctAnswer: 0,
    explanation: 'Điều 137 Luật Doanh nghiệp 2020 quy định công ty cổ phần có quyền lựa chọn tổ chức theo mô hình có Ban kiểm soát (mô hình 1) hoặc mô hình không có Ban kiểm soát nhưng có Ủy ban kiểm toán trực thuộc HĐQT (mô hình 2). Nếu chọn mô hình 1 thì phải có Ban kiểm soát.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 137'
  },
  361: {
    question: 'Tòa án nhân dân triệu tập Hội nghị chủ nợ lần thứ nhất trong thủ tục giải quyết phục hồi, phá sản đối với Công ty Cổ phần Thép Bắc Nam. Hội nghị chủ nợ này được coi là hợp lệ khi có sự tham gia của các chủ nợ đáp ứng điều kiện nào theo luật?',
    options: [
      'Có số chủ nợ đại diện cho tỷ lệ luật định tổng số nợ không có bảo đảm tham gia dự họp',
      'Chỉ cần Giám đốc công ty và 01 chủ nợ lớn nhất có mặt',
      'Bắt buộc toàn bộ 100% các chủ nợ có tên trong danh sách phải có mặt đầy đủ',
      'Có sự hiện diện trực tiếp của đại diện Viện kiểm sát nhân dân tối cao'
    ],
    correctAnswer: 0,
    explanation: 'Theo pháp luật về phục hồi và phá sản, Hội nghị chủ nợ lần thứ nhất hợp lệ khi có sự tham gia của số lượng chủ nợ đại diện cho tỷ lệ luật định tổng số nợ không có bảo đảm của doanh nghiệp.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  362: {
    question: 'Trong quá trình giải quyết vụ việc phục hồi, phá sản doanh nghiệp, cá nhân hành nghề quản lý, thanh lý tài sản của doanh nghiệp mất khả năng thanh toán được gọi là gì?',
    options: [
      'Quản tài viên',
      'Thừa phát lại',
      'Công chứng viên',
      'Giám định viên tư pháp'
    ],
    correctAnswer: 0,
    explanation: 'Quản tài viên là cá nhân hành nghề quản lý, thanh lý tài sản của doanh nghiệp, hợp tác xã mất khả năng thanh toán trong quá trình giải quyết thủ tục phục hồi, phá sản.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  372: {
    question: 'Chị Mai mượn chiếc xe máy SH của anh Tuấn đi làm trong 2 ngày rồi đem xe đi cầm đồ lấy 40 triệu đồng tiêu xài và bỏ trốn, không trả xe cho anh Tuấn. Hành vi của chị Mai cấu thành tội danh nào theo Bộ luật Hình sự?',
    options: [
      'Tội Lạm dụng tín nhiệm chiếm đoạt tài sản (Điều 175 BLHS 2015)',
      'Tội Lừa đảo chiếm đoạt tài sản (Điều 174 BLHS 2015)',
      'Tội Cướp tài sản (Điều 168 BLHS 2015)',
      'Tội Trộm cắp tài sản (Điều 173 BLHS 2015)'
    ],
    correctAnswer: 0,
    explanation: 'Tội Lạm dụng tín nhiệm chiếm đoạt tài sản có đặc trưng: Người phạm tội nhận tài sản của người khác một cách hợp pháp thông qua hợp đồng mượn, thuê, gửi giữ... rồi sau đó mới nảy sinh ý định chiếm đoạt.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 175'
  },
  374: {
    question: 'Sau khi anh trai ruột là Hùng thực hiện hành vi trộm cắp tài sản trị giá 30 triệu đồng (tội ít nghiêm trọng) và chạy về nhà xin ẩn nấp, người em ruột là Tuấn biết rõ hành vi của Hùng nhưng đã cho Hùng ẩn nấp trong phòng và không báo công an. Trách nhiệm hình sự của Tuấn như thế nào?',
    options: [
      'Không phải chịu trách nhiệm hình sự về tội che giấu tội phạm vì là anh chị em ruột và không thuộc tội xâm phạm an ninh quốc gia hay đặc biệt nghiêm trọng',
      'Bị truy cứu trách nhiệm hình sự với tư cách đồng phạm giúp sức tích cực',
      'Bắt buộc phải chịu mức hình phạt bằng 50% mức án của người anh trai',
      'Bị phạt tù từ 03 năm đến 07 năm về tội không tố giác tội phạm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 18 Bộ luật Hình sự 2015: Người che giấu tội phạm là ông, bà, cha, mẹ, con, cháu, anh chị em ruột, vợ hoặc chồng của người phạm tội không phải chịu trách nhiệm hình sự, trừ trường hợp che giấu các tội xâm phạm an ninh quốc gia hoặc tội đặc biệt nghiêm trọng.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 18'
  },
  394: {
    question: 'Chị Lan ký hợp đồng lao động xác định thời hạn 2 năm với Công ty X. Trong quá trình làm việc, chị Lan thường xuyên bị người quản lý phân xưởng có hành vi sàm sỡ, quấy rối tình dục tại nơi làm việc dù chị đã nhiều lần phản đối. Chị Lan có quyền chấm dứt hợp đồng lao động như thế nào?',
    options: [
      'Có quyền đơn phương chấm dứt hợp đồng lao động ngay lập tức mà không cần báo trước theo điểm d khoản 2 Điều 35 BLLĐ 2019',
      'Bắt buộc phải làm việc tiếp cho đến khi hết hạn hợp đồng 2 năm mới được nghỉ',
      'Phải nộp đơn xin phép và được Giám đốc công ty đồng ý bằng văn bản mới được nghỉ việc',
      'Bị công ty bồi thường phạt vi phạm nếu nghỉ việc mà không báo trước đủ 30 ngày'
    ],
    correctAnswer: 0,
    explanation: 'Điểm d khoản 2 Điều 35 Bộ luật Lao động 2019 quy định người lao động có quyền đơn phương chấm dứt hợp đồng lao động không cần báo trước nếu bị quấy rối tình dục tại nơi làm việc.',
    legalReference: 'Bộ luật Lao động 2019, Điều 35'
  },
  398: {
    question: 'Anh Tuấn là công nhân vận hành máy tiện, do sơ suất làm rơi một chi tiết máy trị giá 3 triệu đồng gây hư hỏng (mức thiệt hại không quá 10 tháng lương tối thiểu vùng). Về trách nhiệm bồi thường thiệt hại vật chất của anh Tuấn, pháp luật quy định như thế nào?',
    options: [
      'Chỉ phải bồi thường nhiều nhất là 03 tháng tiền lương và được khấu trừ dần vào lương hằng tháng theo quy định',
      'Bị sa thải ngay lập tức mà công ty không cần tổ chức họp xử lý kỷ luật',
      'Phải bồi thường gấp 5 lần giá trị linh kiện bị hư hỏng',
      'Không phải bồi thường bất kỳ khoản tiền nào vì thuộc rủi ro của doanh nghiệp'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 129 Bộ luật Lao động 2019: Người lao động làm hư hỏng dụng cụ, thiết bị do sơ suất với giá trị không nghiêm trọng (không quá 10 tháng lương tối thiểu vùng) thì chỉ phải bồi thường nhiều nhất là 03 tháng tiền lương và bị khấu trừ dần vào lương.',
    legalReference: 'Bộ luật Lao động 2019, Điều 129'
  },

  // === EXAM 5 ===
  415: {
    question: 'Để phối hợp hướng dẫn thi hành các quy định pháp luật về tố tụng hình sự, Chánh án Tòa án nhân dân tối cao và Viện trưởng Viện kiểm sát nhân dân tối cao cần ban hành văn bản quy phạm pháp luật chung. Văn bản phối hợp này được ban hành dưới hình thức văn bản nào?',
    options: [
      'Thông tư liên tịch',
      'Nghị định liên tịch',
      'Pháp lệnh thi hành án',
      'Lệnh của Chủ tịch nước'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 8 Điều 4 Luật Ban hành văn bản quy phạm pháp luật quy định: Thông tư liên tịch giữa Chánh án Tòa án nhân dân tối cao, Viện trưởng Viện kiểm sát nhân dân tối cao, Tổng Kiểm toán nhà nước, Bộ trưởng, Thủ trưởng cơ quan ngang bộ là văn bản quy phạm pháp luật.',
    legalReference: 'Luật Ban hành văn bản quy phạm pháp luật 2015, Điều 4'
  },
  419: {
    question: 'Theo quy định pháp luật hiện hành, các tranh chấp thương mại có giá trị tài sản tranh chấp dưới mức luật định giữa các thương nhân với nhau thuộc thẩm quyền xét xử sơ thẩm của Tòa án nào?',
    options: [
      'Tòa án nhân dân khu vực nơi bị đơn đặt trụ sở',
      'Tòa án nhân dân tối cao',
      'Ủy ban nhân dân cấp xã',
      'Bộ Công Thương'
    ],
    correctAnswer: 0,
    explanation: 'Theo Bộ luật Tố tụng Dân sự và Luật Tổ chức TAND hiện hành, Tòa án nhân dân khu vực có thẩm quyền giải quyết sơ thẩm các tranh chấp kinh doanh, thương mại thuộc thẩm quyền sơ thẩm ở địa phương.',
    legalReference: 'Bộ luật Tố tụng Dân sự & Luật Tổ chức TAND'
  },
  423: {
    question: 'Theo Hiến pháp và Luật Tổ chức chính quyền địa phương hiện hành, Hội đồng nhân dân được tổ chức ở những cấp hành chính nào?',
    options: [
      'Cấp tỉnh và cấp xã',
      'Cấp trung ương và cấp tỉnh',
      'Chỉ ở cấp thành phố trực thuộc trung ương',
      'Cấp tỉnh, cấp huyện và cấp xã'
    ],
    correctAnswer: 0,
    explanation: 'Theo mô hình chính quyền địa phương 2 cấp, Hội đồng nhân dân được tổ chức ở cấp tỉnh và cấp xã.',
    legalReference: 'Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương'
  },
  427: {
    question: 'Hệ thống Tòa án nhân dân thực hiện chế độ xét xử mấy cấp theo quy định của Hiến pháp 2013 và Luật Tổ chức Tòa án nhân dân?',
    options: [
      'Chế độ xét xử hai cấp: Sơ thẩm và Phúc thẩm (bản án sơ thẩm của TAND khu vực bị kháng cáo thì TAND cấp tỉnh xử phúc thẩm; bản án sơ thẩm của TAND cấp tỉnh bị kháng cáo thì TAND tối cao xử phúc thẩm)',
      'Chế độ xét xử một cấp duy nhất (xử sơ thẩm là có hiệu lực chung thẩm ngay)',
      'Chế độ xét xử ba cấp độc lập: Sơ thẩm, Phúc thẩm và Giám đốc thẩm',
      'Chế độ xét xử bốn cấp tương ứng với các vùng kinh tế trọng điểm'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 6 Điều 103 Hiến pháp 2013 quy định: Chế độ xét xử sơ thẩm, phúc thẩm được bảo đảm. (Giám đốc thẩm, tái thẩm là thủ tục xét lại bản án đã có hiệu lực pháp luật, không phải cấp xét xử).',
    legalReference: 'Hiến pháp 2013, Điều 103 & Luật Tổ chức TAND'
  },
  444: {
    question: 'Vợ chồng ông Long và bà Mai cùng có nguyện vọng lập một bản di chúc chung của hai vợ chồng để định đoạt khối tài sản chung gồm ngôi nhà và mảnh đất cho người con gái út. Theo Bộ luật Dân sự 2015, yêu cầu của ông Long và bà Mai được tư vấn pháp lý như thế nào?',
    options: [
      'Bộ luật Dân sự 2015 không còn quy định về di chúc chung của vợ chồng, do đó ông Long và bà Mai nên lập hai bản di chúc riêng biệt để định đoạt phần tài sản của mỗi người',
      'Di chúc chung của vợ chồng là hình thức bắt buộc duy nhất khi định đoạt tài sản chung',
      'Vợ chồng bắt buộc phải tặng cho tài sản ngay khi còn sống chứ không được lập di chúc',
      'Chỉ người chồng mới có quyền lập di chúc định đoạt khối tài sản chung của gia đình'
    ],
    correctAnswer: 0,
    explanation: 'Bộ luật Dân sự 2015 đã bãi bỏ quy định về di chúc chung của vợ chồng (từng tồn tại trong BLDS 2005). Do đó, mỗi cá nhân vợ hoặc chồng tự lập di chúc riêng để định đoạt phần tài sản thuộc sở hữu của mình trong khối tài sản chung.',
    legalReference: 'Bộ luật Dân sự 2015 - Chương Thừa kế'
  },
  449: {
    question: 'Ngày 15/04/2024, Tòa án tuyên bản án sơ thẩm giải quyết tranh chấp hợp đồng mua bán nhà đất giữa ông An và bà Bình. Viện kiểm sát nhân dân cùng cấp xét thấy bản án có vi phạm nghiêm trọng và muốn kháng nghị theo thủ tục phúc thẩm. Thời hạn kháng nghị phúc thẩm của Viện kiểm sát cùng cấp là bao nhiêu ngày kể từ ngày tuyên án?',
    options: [
      'Trong thời hạn 15 ngày kể từ ngày tuyên án',
      'Trong thời hạn 30 ngày kể từ ngày tuyên án',
      'Trong thời hạn 07 ngày kể từ ngày tuyên án',
      'Trong thời hạn 60 ngày kể từ ngày tuyên án'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 1 Điều 280 Bộ luật Tố tụng Dân sự 2015 quy định: Thời hạn kháng nghị đối với bản án của Tòa án cấp sơ thẩm của Viện kiểm sát cùng cấp là 15 ngày kể từ ngày tuyên án.',
    legalReference: 'Bộ luật Tố tụng Dân sự 2015, Điều 280'
  },
  463: {
    question: 'Theo pháp luật về phục hồi và phá sản hiện hành, doanh nghiệp mất khả năng thanh toán được áp dụng thủ tục Phục hồi hoạt động kinh doanh khi đáp ứng điều kiện nào?',
    options: [
      'Hội nghị chủ nợ thông qua phương án phục hồi hoạt động kinh doanh và được Tòa án ra quyết định công nhận',
      'Chỉ cần Giám đốc doanh nghiệp gửi văn bản cam kết tới Ủy ban nhân dân cấp tỉnh',
      'Khi doanh nghiệp được các ngân hàng thương mại xóa toàn bộ nợ lãi vay',
      'Khi doanh nghiệp có mức lỗ lũy kế vượt quá 50% vốn điều lệ đã đăng ký'
    ],
    correctAnswer: 0,
    explanation: 'Doanh nghiệp mất khả năng thanh toán được tiến hành thủ tục phục hồi khi Hội nghị chủ nợ biểu quyết thông qua Nghị quyết về phương án phục hồi và được Thẩm phán ra quyết định công nhận.',
    legalReference: 'Luật Phục hồi, phá sản 2025'
  },
  468: {
    question: 'Công ty Cổ phần Nông sản A và Công ty B ký hợp đồng mua bán gạo. Trong hợp đồng hai bên thỏa thuận mức phạt vi phạm là 8% giá trị phần nghĩa vụ bị vi phạm nếu một bên giao hàng chậm, nhưng không có điều khoản thỏa thuận về bồi thường thiệt hại. Khi Công ty B giao hàng chậm gây thiệt hại thực tế 150 triệu đồng cho Công ty A, Công ty A có quyền yêu cầu bồi thường thiệt hại không?',
    options: [
      'Công ty A chỉ có quyền yêu cầu phạt vi phạm mà không được yêu cầu bồi thường thiệt hại nếu các bên không có thỏa thuận về bồi thường',
      'Công ty A tự động được nhận cả tiền phạt vi phạm và toàn bộ tiền bồi thường thiệt hại',
      'Hợp đồng thương mại bắt buộc phải bồi thường thiệt hại gấp 3 lần giá trị hợp đồng',
      'Công ty B không phải chịu trách nhiệm gì vì điều khoản phạt vi phạm là vô hiệu'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 307 Luật Thương mại 2005 quy định: Trường hợp các bên có thỏa thuận phạt vi phạm nhưng không có thỏa thuận về việc vừa phải nộp phạt vi phạm vừa phải bồi thường thiệt hại thì bên vi phạm chỉ phải nộp tiền phạt vi phạm.',
    legalReference: 'Luật Thương mại 2005, Điều 307'
  },
  473: {
    question: 'Bà Hoa phát hiện con trai ruột là Nam vừa thực hiện hành vi phạm tội giết người cướp tài sản (tội phạm đặc biệt nghiêm trọng xâm phạm tính mạng con người) nhưng vì thương con nên bà Hoa đã không đi tố giác với cơ quan chức năng. Về trách nhiệm hình sự của bà Hoa, nhận định nào sau đây là đúng?',
    options: [
      'Bà Hoa vẫn phải chịu trách nhiệm hình sự về Tội không tố giác tội phạm vì đây là tội phạm đặc biệt nghiêm trọng xâm phạm tính mạng con người theo quy định tại khoản 2 Điều 19 BLHS',
      'Bà Hoa được miễn trách nhiệm hình sự tuyệt đối trong mọi trường hợp vì là mẹ ruột của người phạm tội',
      'Bà Hoa tự động bị coi là đồng phạm chủ mưu trong vụ án giết người cướp tài sản',
      'Bà Hoa chỉ bị xử phạt vi phạm hành chính nhắc nhở tại cuộc họp tổ dân phố'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 19 Bộ luật Hình sự 2015 quy định: Người không tố giác là cha, mẹ, con... không phải chịu trách nhiệm hình sự, TRỪ trường hợp không tố giác các tội xâm phạm an ninh quốc gia hoặc tội đặc biệt nghiêm trọng khác quy định tại Điều 389 BLHS (trong đó có tội giết người, cướp tài sản).',
    legalReference: 'Bộ luật Hình sự 2015, Điều 19, 389'
  },
  474: {
    question: 'Theo quy định của Bộ luật Hình sự Việt Nam, hình phạt Tử hình là hình phạt đặc biệt chỉ áp dụng đối với đối tượng nào?',
    options: [
      'Người phạm tội đặc biệt nghiêm trọng thuộc một trong các nhóm tội xâm phạm an ninh quốc gia, tính mạng con người, các tội phạm về ma túy, tham nhũng và một số tội phạm đặc biệt nghiêm trọng khác do luật định',
      'Tất cả mọi người thực hiện hành vi vi phạm pháp luật gây thiệt hại trên 100 triệu đồng',
      'Người tái phạm nguy hiểm đối với các tội phạm ít nghiêm trọng và nghiêm trọng',
      'Pháp nhân thương mại gây ô nhiễm môi trường nghiêm trọng kéo dài'
    ],
    correctAnswer: 0,
    explanation: 'Điều 40 Bộ luật Hình sự 2015 quy định: Tử hình là hình phạt đặc biệt chỉ áp dụng đối với người phạm tội đặc biệt nghiêm trọng thuộc một số nhóm tội do luật định. Hình phạt tử hình không áp dụng đối với pháp nhân thương mại.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 40'
  },
  488: {
    question: 'Bà Lan và ông Hùng đang trong quá trình Tòa án thụ lý giải quyết việc ly hôn thì ông Hùng không may bị tai nạn qua đời đột ngột không để lại di chúc. Về quyền thừa kế di sản của ông Hùng, nhận định nào sau đây là đúng pháp luật?',
    options: [
      'Bà Lan vẫn được hưởng thừa kế di sản của ông Hùng theo pháp luật với tư cách vợ ở hàng thừa kế thứ nhất vì hôn nhân chưa chấm dứt bằng bản án/quyết định ly hôn có hiệu lực',
      'Bà Lan bị mất hoàn toàn quyền thừa kế ngay khi Tòa án thụ lý đơn ly hôn',
      'Toàn bộ di sản của ông Hùng tự động chuyển giao cho Ủy ban nhân dân cấp xã quản lý',
      'Bà Lan chỉ được hưởng thừa kế nếu có sự đồng ý bằng văn bản của bố mẹ đẻ ông Hùng'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 2 Điều 655 Bộ luật Dân sự 2015: Trường hợp vợ, chồng xin ly hôn mà chưa được ly hôn hoặc đã được ly hôn bằng bản án hoặc quyết định chưa có hiệu lực pháp luật của Tòa án, khi một bên chết thì người còn sống vẫn được thừa kế di sản.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 655'
  },
  491: {
    question: 'Vợ chồng anh Quang và chị Hà bị vô sinh do chị Hà có bệnh lý tử cung không thể mang thai, có xác nhận của tổ chức y tế có thẩm quyền. Hai vợ chồng muốn nhờ người mang thai hộ vì mục đích nhân đạo. Theo Luật Hôn nhân và Gia đình 2014, người được nhờ mang thai hộ phải đáp ứng điều kiện nào sau đây?',
    options: [
      'Là người thân thích cùng hàng của bên vợ hoặc bên chồng; đã từng sinh con và chỉ được mang thai hộ một lần; nếu có chồng thì phải có sự đồng ý bằng văn bản của người chồng',
      'Có thể là bất kỳ phụ nữ nào tự nguyện đồng ý và được trả một khoản thù lao theo thỏa thuận',
      'Bắt buộc phải là người chưa từng kết hôn và dưới 25 tuổi',
      'Chỉ cần có giấy xác nhận sức khỏe tốt của trạm y tế cấp xã'
    ],
    correctAnswer: 0,
    explanation: 'Điều 95 Luật Hôn nhân và Gia đình 2014 quy định điều kiện của người mang thai hộ vì mục đích nhân đạo: là người thân thích cùng hàng của bên vợ hoặc bên chồng; đã từng sinh con và chỉ được mang thai hộ một lần; ở độ tuổi phù hợp và có xác nhận y tế; nếu có chồng thì phải có sự đồng ý của người chồng.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 95'
  }
};

// Function to apply patches and balance distractors
function processExam(examName: string, filePath: string, originalQuestions: Question[]) {
  const updatedQuestions = originalQuestions.map(q => {
    let current = { ...q };
    if (patches[current.id]) {
      current = { ...current, ...patches[current.id] };
    }
    // Also balance distractors so correct answer is not always the longest
    const ansIdx = current.correctAnswer;
    const correctText = current.options[ansIdx];
    const correctLen = correctText.length;
    const lens = current.options.map(o => o.length);
    const maxLen = Math.max(...lens);

    // If correct is strictly longest by >= 12 chars, expand wrong options realistically
    if (lens[ansIdx] === maxLen && maxLen > 45) {
      const newOpts: [string, string, string, string] = [...current.options] as any;
      for (let i = 0; i < 4; i++) {
        if (i === ansIdx) continue;
        const opt = newOpts[i];
        if (opt.length < correctLen - 12) {
          // Add realistic legal context to enrich distractors
          if (current.difficulty === 'vận dụng') {
            if (!opt.includes('quy định') && !opt.includes('pháp luật') && !opt.includes('theo')) {
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
            if (opt.length < 30 && correctLen > 50) {
              newOpts[i] = `${opt} theo quy định của pháp luật có liên quan`;
            }
          }
        }
      }
      current.options = newOpts;
    }
    return current;
  });

  // Write file
  const varName = examName + 'Questions';
  const content = `import { Question } from '../types/quiz';\n\nexport const ${varName}: Question[] = ${JSON.stringify(updatedQuestions, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${examName} to ${filePath} (${updatedQuestions.length} questions)`);
}

processExam('exam1', 'src/data/exam1.ts', exam1Questions);
processExam('exam2', 'src/data/exam2.ts', exam2Questions);
processExam('exam3', 'src/data/exam3.ts', exam3Questions);
processExam('exam4', 'src/data/exam4.ts', exam4Questions);
processExam('exam5', 'src/data/exam5.ts', exam5Questions);
console.log('All 5 exams successfully patched!');
