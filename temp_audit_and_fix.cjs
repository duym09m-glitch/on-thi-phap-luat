const fs = require('fs');
const path = require('path');
const { cleanOption, junkTails } = require('./temp_cleaner.cjs');

const DRY_RUN = process.argv.includes('--dry-run');

console.log('DRY_RUN mode:', DRY_RUN);

const examFiles = [
  'src/data/exam1.ts',
  'src/data/exam2.ts',
  'src/data/exam3.ts',
  'src/data/exam4.ts',
  'src/data/exam5.ts'
];

const bankDir = path.resolve('./src/data/bank');
const bankFiles = fs.readdirSync(bankDir).filter(f => f.startsWith('chapter') && f.endsWith('.ts')).sort().map(f => path.join('src/data/bank', f));

const allFiles = [...examFiles, ...bankFiles];

let totalQuestionsProcessed = 0;
let totalOptionsCleaned = 0;
let specificFixesApplied = 0;

for (const relPath of allFiles) {
  const fullPath = path.resolve(relPath);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Identify file export format
  let isBank = relPath.includes('src/data/bank');
  let match;
  let questions = [];

  if (isBank) {
    match = content.match(/const questions: Question\[\] = (\[[\s\S]*\]);\s*export default questions;/);
    if (!match) {
      console.error('Could not match bank questions in:', relPath);
      continue;
    }
  } else {
    match = content.match(/export const (exam\dQuestions): Question\[\] = (\[[\s\S]*\]);/);
    if (!match) {
      console.error('Could not match exam questions in:', relPath);
      continue;
    }
  }

  questions = JSON.parse(isBank ? match[1] : match[2]);

  for (const q of questions) {
    totalQuestionsProcessed++;

    // 1. SPECIFIC MANDATORY LEGAL FIXES
    if (q.id === 62) {
      q.question = "Theo pháp luật về phục hồi và phá sản hiện hành, doanh nghiệp bị coi là mất khả năng thanh toán khi nào?";
      q.options = [
        "Khi doanh nghiệp có tổng số nợ lớn hơn tổng tài sản hiện có trên sổ sách kế toán",
        "Không thực hiện nghĩa vụ thanh toán khoản nợ sau 06 tháng kể từ ngày đến hạn thanh toán",
        "Không thực hiện nghĩa vụ thanh toán khoản nợ sau 03 tháng kể từ ngày đến hạn thanh toán",
        "Khi doanh nghiệp bị phong tỏa toàn bộ tài khoản tại các ngân hàng thương mại"
      ];
      q.correctAnswer = 1;
      q.explanation = "Theo Điều 5 Luật Phục hồi, phá sản số 142/2025/QH15, doanh nghiệp mất khả năng thanh toán là doanh nghiệp không thực hiện nghĩa vụ thanh toán khoản nợ sau 06 tháng kể từ ngày đến hạn thanh toán.";
      q.legalReference = "Luật Phục hồi, phá sản 2025, Điều 5";
      q.difficulty = "trung bình";
      specificFixesApplied++;
    } else if (q.id === 15130) {
      q.question = "Một doanh nghiệp nợ lương công nhân 3 tháng liên tiếp với tổng số tiền lớn. Đại diện Ban chấp hành Công đoàn cơ sở đã nhiều lần thương lượng nhưng lãnh đạo công ty cố tình lẩn tránh. Theo pháp luật về phục hồi và phá sản hiện hành, Công đoàn cơ sở có quyền nộp đơn yêu cầu mở thủ tục phá sản đối với doanh nghiệp này không?";
      q.options = [
        "Không có quyền, vì chỉ có các ngân hàng cho vay tiền mới có quyền nộp đơn phá sản",
        "Không có quyền, vì công đoàn chỉ có chức năng chăm lo đời sống và hòa giải tranh chấp",
        "Chỉ được nộp đơn nếu có sự đồng ý bằng văn bản của Giám đốc doanh nghiệp",
        "Có quyền, vì người lao động hoặc tổ chức đại diện người lao động có quyền nộp đơn yêu cầu mở thủ tục phá sản khi doanh nghiệp không trả được nợ lương đến hạn"
      ];
      q.correctAnswer = 3;
      q.explanation = "Theo Luật Phục hồi, phá sản số 142/2025/QH15, người lao động hoặc tổ chức đại diện người lao động tại cơ sở có quyền nộp đơn yêu cầu mở thủ tục phá sản khi hết thời hạn thanh toán mà doanh nghiệp không thực hiện nghĩa vụ trả lương, các khoản nợ khác đến hạn đối với người lao động.";
      q.legalReference = "Luật Phục hồi, phá sản 2025";
      q.difficulty = "vận dụng";
      specificFixesApplied++;
    } else if (q.id === 15070) {
      q.question = "Khi nào Thẩm phán ra quyết định đình chỉ thủ tục phục hồi hoạt động kinh doanh của doanh nghiệp mất khả năng thanh toán theo quy định hiện hành?";
      q.options = [
        "Khi doanh nghiệp tuyển thêm được đối tác đầu tư chiến lược mới",
        "Khi các cổ đông không còn tranh chấp nội bộ trong công ty",
        "Khi thời gian phục hồi mới trôi qua 03 tháng",
        "Doanh nghiệp đã thực hiện xong phương án phục hồi hoạt động kinh doanh hoặc Hội nghị chủ nợ không thông qua phương án phục hồi"
      ];
      q.correctAnswer = 3;
      q.explanation = "Theo quy định pháp luật về phục hồi và phá sản, Thẩm phán ra quyết định đình chỉ thủ tục phục hồi hoạt động kinh doanh khi doanh nghiệp đã thực hiện xong phương án phục hồi hoạt động kinh doanh hoặc Hội nghị chủ nợ không thông qua phương án phục hồi.";
      q.legalReference = "Luật Phục hồi, phá sản 2025";
      specificFixesApplied++;
    } else if (q.id === 285) {
      q.chapterId = 3;
      q.chapterName = "Chương 3: Bộ máy Nhà nước Cộng hòa XHCN Việt Nam";
      q.question = "Theo Điều 110 Hiến pháp 2013 (đã được sửa đổi, bổ sung), các đơn vị hành chính của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam được phân định như thế nào?";
      q.options = [
        "Nước chia thành tỉnh, thành phố trực thuộc trung ương; tỉnh, thành phố trực thuộc trung ương chia thành xã, phường, đặc khu; và đơn vị hành chính - kinh tế đặc biệt",
        "Nước chia thành 3 miền Bắc - Trung - Nam với hệ thống chính quyền tự trị độc lập",
        "Nước chia thành các bang và vùng lãnh thổ tự trị do Quốc hội quyết định thành lập",
        "Nước chỉ tổ chức một cấp hành chính trung ương duy nhất quản lý trực tiếp toàn thể nhân dân"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo Điều 110 Hiến pháp 2013 (sửa đổi bởi Nghị quyết số 203/2025/QH15) và Luật Tổ chức chính quyền địa phương 2025, đơn vị hành chính gồm cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, đặc khu); đơn vị hành chính - kinh tế đặc biệt do Quốc hội thành lập.";
      q.legalReference = "Hiến pháp 2013 (sửa đổi 2025), Điều 110 & Luật Tổ chức CQĐP 2025";
      q.difficulty = "trung bình";
      specificFixesApplied++;
    } else if (q.id === 225) {
      q.options = [
        "Cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, đặc khu)",
        "Cấp trung ương, cấp tỉnh, cấp vùng và cấp xã",
        "Chỉ được tổ chức duy nhất ở cấp thành phố trực thuộc trung ương",
        "Được tổ chức độc lập ở tất cả các thôn, bản, tổ dân phố trên cả nước"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo mô hình chính quyền địa phương 2 cấp (có hiệu lực từ 01/7/2025), đơn vị hành chính gồm cấp tỉnh và cấp xã (xã, phường, đặc khu); Hội đồng nhân dân được tổ chức ở cấp tỉnh và cấp xã.";
      q.legalReference = "Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương 2025";
      specificFixesApplied++;
    } else if (q.id === 326) {
      q.options = [
        "Cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, đặc khu)",
        "Cấp trung ương, cấp vùng và cấp cơ sở",
        "Chỉ được tổ chức tại các thành phố có trên 1 triệu dân",
        "Cấp tỉnh, cấp khu vực và cấp thôn xóm"
      ];
      q.correctAnswer = 0;
      q.explanation = "Chính quyền địa phương gồm Hội đồng nhân dân và Ủy ban nhân dân được tổ chức ở các đơn vị hành chính gồm cấp tỉnh và cấp xã (xã, phường, đặc khu) theo mô hình chính quyền địa phương 2 cấp.";
      q.legalReference = "Hiến pháp 2013 & Luật Tổ chức chính quyền địa phương 2025";
      specificFixesApplied++;
    } else if (q.id === 429) {
      q.question = "Cơ quan nào có thẩm quyền quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính DƯỚI CẤP TỈNH (xã, phường, đặc khu) theo quy định của Hiến pháp 2013?";
      q.options = [
        "Ủy ban Thường vụ Quốc hội",
        "Chính phủ",
        "Hội đồng nhân dân cấp tỉnh",
        "Bộ Nội vụ"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo Hiến pháp 2013 và Luật Tổ chức chính quyền địa phương, Ủy ban Thường vụ Quốc hội có thẩm quyền quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính dưới cấp tỉnh (xã, phường, đặc khu).";
      q.legalReference = "Hiến pháp 2013, Điều 74 & Luật Tổ chức chính quyền địa phương 2025";
      specificFixesApplied++;
    } else if (q.id === 13070) {
      q.options = [
        "Cấp tỉnh (thành phố trực thuộc trung ương) và cấp xã (phường, đặc khu)",
        "Cấp vùng đô thị và cấp khu phố",
        "Chỉ có duy nhất cấp thành phố trung ương, không tổ chức cấp cơ sở",
        "Cấp trung ương, cấp tỉnh và cấp tiểu khu"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo Hiến pháp 2013 (sửa đổi năm 2025) và Luật Tổ chức chính quyền địa phương 2025, cấp chính quyền địa phương ở đô thị gồm 2 cấp: cấp tỉnh (thành phố trực thuộc trung ương) và cấp xã (phường, đặc khu); không còn cấp huyện/thị trấn.";
      q.legalReference = "Luật Tổ chức chính quyền địa phương 2025 (Luật 72/2025/QH15)";
      specificFixesApplied++;
    } else if (q.id === 13052) {
      q.options = [
        "Tòa án nhân dân khu vực",
        "Viện kiểm sát nhân dân khu vực",
        "Ủy ban nhân dân cấp tỉnh và sự giám sát của HĐND cùng cấp",
        "Đoàn Đại biểu Quốc hội tỉnh"
      ];
      q.correctAnswer = 2;
      q.explanation = "Theo Luật Tổ chức chính quyền địa phương số 72/2025/QH15, UBND cấp xã là cơ quan hành chính ở địa phương, chịu sự chỉ đạo trực tiếp của UBND cấp tỉnh (cơ quan cấp trên trực tiếp) và chịu sự giám sát của HĐND cùng cấp.";
      q.legalReference = "Luật Tổ chức chính quyền địa phương 2025 (Luật 72/2025/QH15)";
      specificFixesApplied++;
    } else if (q.id === 13037) {
      q.options = [
        "Ủy ban nhân dân cấp tỉnh",
        "Đoàn Luật sư cấp tỉnh",
        "Thường trực Tòa án nhân dân tỉnh",
        "Thường trực Hội đồng nhân dân cấp tỉnh"
      ];
      q.correctAnswer = 3;
      q.explanation = "Theo Luật Tổ chức chính quyền địa phương số 72/2025/QH15, Thường trực HĐND cấp tỉnh giám sát và hướng dẫn hoạt động của HĐND cấp dưới trực tiếp (HĐND cấp xã).";
      q.legalReference = "Luật Tổ chức chính quyền địa phương 2025 (Luật 72/2025/QH15)";
      specificFixesApplied++;
    } else if (q.id === 14047) {
      q.question = "Bản án sơ thẩm của Tòa án nhân dân khu vực bị Viện kiểm sát nhân dân cùng cấp hoặc cấp trên trực tiếp kháng nghị theo thủ tục phúc thẩm. Thời hạn kháng nghị của Viện kiểm sát là bao lâu theo Bộ luật Tố tụng dân sự 2015?";
      q.options = [
        "Viện kiểm sát cùng cấp là 15 ngày, Viện kiểm sát cấp trên trực tiếp là 30 ngày kể từ ngày tuyên án",
        "Viện kiểm sát cùng cấp là 30 ngày, Viện kiểm sát cấp trên là 60 ngày",
        "Viện kiểm sát cùng cấp là 07 ngày, Viện kiểm sát cấp trên là 15 ngày",
        "Chỉ có Viện kiểm sát cấp trên mới có quyền kháng nghị trong thời hạn 20 ngày"
      ];
      q.correctAnswer = 0;
      q.explanation = "Điều 280 Bộ luật Tố tụng dân sự 2015 quy định thời hạn kháng nghị đối với bản án của Tòa án cấp sơ thẩm của Viện kiểm sát cùng cấp là 15 ngày, của Viện kiểm sát cấp trên trực tiếp là 30 ngày, kể từ ngày tuyên án.";
      q.legalReference = "Bộ luật Tố tụng dân sự 2015, Điều 280";
      specificFixesApplied++;
    } else if (q.id === 13089) {
      q.question = "Một công dân gửi đơn tố giác một nhóm đối tượng tổ chức đánh bạc ăn tiền quy mô lớn trên địa bàn. Viện kiểm sát nhân dân khu vực sau khi tiếp nhận nguồn tin về tội phạm có trách nhiệm gì theo Bộ luật Tố tụng hình sự?";
      q.options = [
        "Vào sổ tiếp nhận, chuyển ngay cho Cơ quan điều tra có thẩm quyền kèm theo tài liệu và thực hiện kiểm sát việc giải quyết nguồn tin về tội phạm",
        "Tự ý tiêu hủy đơn tố giác nếu người tố giác không nộp lệ phí thụ lý",
        "Đăng tải toàn bộ nội dung tố giác và thông tin người tố giác lên mạng xã hội",
        "Chỉ tiếp nhận giải quyết nếu vụ việc có sự tham gia của cán bộ cơ quan nhà nước"
      ];
      q.correctAnswer = 0;
      q.explanation = "Điều 145 Bộ luật Tố tụng hình sự 2015 quy định Viện kiểm sát có trách nhiệm tiếp nhận tố giác, tin báo về tội phạm, chuyển ngay cho Cơ quan điều tra có thẩm quyền và kiểm sát việc giải quyết nguồn tin về tội phạm.";
      q.legalReference = "Bộ luật Tố tụng hình sự 2015, Điều 145";
      specificFixesApplied++;
    } else if (q.id === 13096) {
      q.question = "Theo Luật Tổ chức Tòa án nhân dân hiện hành, Hội đồng Thẩm phán Tòa án nhân dân tối cao gồm bao nhiêu thành viên và quyết định của Hội đồng Thẩm phán được thông qua theo nguyên tắc nào?";
      q.options = [
        "Gồm từ 23 đến 27 Thẩm phán; quyết định được thông qua khi có quá nửa tổng số thành viên biểu quyết tán thành",
        "Gồm cố định 15 Thẩm phán; quyết định phải được 100% thành viên biểu quyết đồng ý",
        "Gồm không quá 17 Thẩm phán; do Chánh án TAND tối cao toàn quyền quyết định cá nhân",
        "Gồm tất cả các Thẩm phán cao cấp trên toàn quốc; biểu quyết theo đa số đại biểu có mặt"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo Luật Tổ chức Tòa án nhân dân số 34/2024/QH15 và Luật số 81/2025/QH15, Hội đồng Thẩm phán Tòa án nhân dân tối cao gồm Chánh án, các Phó Chánh án và các Thẩm phán TAND tối cao với số lượng không ít hơn 23 người và không quá 27 người. Quyết định của Hội đồng Thẩm phán phải được quá nửa tổng số thành viên biểu quyết tán thành.";
      q.legalReference = "Luật Tổ chức Tòa án nhân dân 2024 (sửa đổi, bổ sung 2025)";
      specificFixesApplied++;
    } else if (q.id === 13035) {
      q.explanation = "Theo Điều 72 Luật Tổ chức Tòa án nhân dân 2024 (Luật 34/2024/QH15), Chánh án Tòa án nhân dân tối cao trình Quốc hội phê chuẩn việc bổ nhiệm, miễn nhiệm, cách chức Thẩm phán TAND tối cao.";
      q.legalReference = "Luật Tổ chức Tòa án nhân dân 2024 (Luật 34/2024/QH15)";
      specificFixesApplied++;
    } else if (q.id === 13077) {
      q.explanation = "Theo Luật Tổ chức Tòa án nhân dân 2024 (Luật 34/2024/QH15), khi khuyết Chánh án TAND tối cao giữa nhiệm kỳ, Chủ tịch nước quyết định giao một Phó Chánh án TAND tối cao phụ trách cơ quan cho đến khi Quốc hội bầu Chánh án mới.";
      q.legalReference = "Luật Tổ chức Tòa án nhân dân 2024 (Luật 34/2024/QH15)";
      specificFixesApplied++;
    } else if (q.id === 17113) {
      q.question = "Anh Long (quốc tịch Việt Nam) kết hôn với chị Anna (quốc tịch Pháp). Hai người cùng cư trú tại Hà Nội. Cơ quan nào có thẩm quyền đăng ký kết hôn có yếu tố nước ngoài giữa anh Long và chị Anna theo quy định pháp luật hộ tịch hiện hành?";
      q.options = [
        "Ủy ban nhân dân cấp xã nơi anh Long cư trú",
        "Ủy ban nhân dân cấp tỉnh nơi anh Long cư trú",
        "Sở Ngoại vụ thành phố Hà Nội",
        "Tòa án nhân dân thành phố Hà Nội"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo quy định pháp luật hộ tịch hiện hành (Luật Hộ tịch 2014 và Nghị định 120/2025/NĐ-CP có hiệu lực từ 01/7/2025 về phân cấp thẩm quyền giải quyết thủ tục hành chính trong lĩnh vực hộ tịch), thẩm quyền đăng ký kết hôn có yếu tố nước ngoài đã được phân cấp cho Ủy ban nhân dân cấp xã nơi cư trú của công dân Việt Nam.";
      q.legalReference = "Luật Hộ tịch 2014 & Nghị định 120/2025/NĐ-CP";
      specificFixesApplied++;
    } else if (q.id === 17132) {
      q.question = "Anh Nam (quốc tịch Việt Nam) kết hôn với chị Maria (quốc tịch Nga) tại cơ quan có thẩm quyền của Liên bang Nga. Sau khi về Việt Nam sinh sống, hai người muốn quan hệ hôn nhân của mình được công nhận tại Việt Nam. Hai bên phải thực hiện thủ tục gì theo quy định pháp luật hộ tịch hiện hành?";
      q.options = [
        "Thực hiện thủ tục ghi chú kết hôn vào sổ hộ tịch tại Ủy ban nhân dân cấp xã nơi công dân Việt Nam cư trú",
        "Bắt buộc phải tổ chức đăng ký kết hôn lại từ đầu tại Tòa án nhân dân",
        "Chỉ cần làm thủ tục hợp pháp hóa lãnh sự giấy chứng nhận kết hôn mà không cần ghi chú hộ tịch",
        "Xin giấy phép đặc cách công nhận hôn nhân của Bộ Ngoại giao"
      ];
      q.correctAnswer = 0;
      q.explanation = "Theo Luật Hộ tịch 2014 và quy định về phân cấp hộ tịch hiện hành, công dân Việt Nam đã đăng ký kết hôn tại cơ quan có thẩm quyền của nước ngoài khi về Việt Nam sinh sống phải làm thủ tục ghi chú việc kết hôn vào sổ hộ tịch tại Ủy ban nhân dân cấp xã nơi cư trú.";
      q.legalReference = "Luật Hộ tịch 2014 & Nghị định 120/2025/NĐ-CP";
      specificFixesApplied++;
    } else if (q.id === 19012) {
      q.question = "Hợp đồng lao động xác định thời hạn là hợp đồng mà trong đó hai bên xác định thời hạn, thời điểm chấm dứt hiệu lực của hợp đồng trong khoảng thời gian nào?";
      q.options = [
        "Trong thời gian không quá 12 tháng kể từ thời điểm có hiệu lực của hợp đồng",
        "Trong khoảng thời gian từ 12 tháng đến 36 tháng",
        "Trong khoảng thời gian từ 03 tháng đến 05 năm",
        "Trong thời gian không quá 36 tháng kể từ thời điểm có hiệu lực của hợp đồng"
      ];
      q.correctAnswer = 3;
      q.explanation = "Điểm b khoản 1 Điều 20 Bộ luật Lao động 2019 quy định Hợp đồng lao động xác định thời hạn là hợp đồng mà trong đó hai bên xác định thời hạn, thời điểm chấm dứt hiệu lực của hợp đồng trong thời gian không quá 36 tháng kể từ thời điểm có hiệu lực của hợp đồng.";
      q.legalReference = "Bộ luật Lao động 2019, Điều 20";
      specificFixesApplied++;
    } else if (q.id === 13075) {
      q.legalReference = "Luật Đất đai 2024 & Luật Xử lý vi phạm hành chính";
      specificFixesApplied++;
    } else if ([123, 325, 424, 426, 434, 13065, 13108].includes(q.id)) {
      q.legalReference = "Luật Tổ chức chính quyền địa phương 2025 (Luật 72/2025/QH15)";
      specificFixesApplied++;
    } else if ([235, 13023, 13033, 13087, 13099].includes(q.id)) {
      q.legalReference = "Luật Tổ chức Viện kiểm sát nhân dân (sửa đổi, bổ sung 2025)";
      specificFixesApplied++;
    }

    // 2. CLEAN OPTIONS
    for (let i = 0; i < q.options.length; i++) {
      const orig = q.options[i];
      const cleaned = cleanOption(orig);
      if (cleaned !== orig) {
        totalOptionsCleaned++;
        q.options[i] = cleaned;
      }
    }
  }

  if (!DRY_RUN) {
    let out;
    if (isBank) {
      out = `import type { Question } from '../../types/quiz';\n\nconst questions: Question[] = ${JSON.stringify(questions, null, 2)};\n\nexport default questions;\n`;
    } else {
      const examVar = match[1];
      out = `import { Question } from '../types/quiz';\n\nexport const ${examVar}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
    }
    fs.writeFileSync(fullPath, out, 'utf8');
  }
}

console.log(`Finished processing!`);
console.log(`Total questions checked: ${totalQuestionsProcessed}`);
console.log(`Total options cleaned: ${totalOptionsCleaned}`);
console.log(`Specific legal fixes: ${specificFixesApplied}`);
