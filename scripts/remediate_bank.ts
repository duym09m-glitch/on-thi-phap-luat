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

// 1. SPECIFIC QUESTION OVERRIDES
const specificOverrides: Record<number, Partial<Question>> = {
  // 15061
  15061: {
    question: 'Trong công ty trách nhiệm hữu hạn hai thành viên trở lên, Ban kiểm soát bắt buộc phải thành lập trong trường hợp nào sau đây theo Luật Doanh nghiệp 2020?',
    options: [
      'Khi công ty có từ 11 thành viên trở lên tham gia góp vốn điều lệ',
      'Khi công ty có vốn điều lệ đăng ký từ 50 tỷ đồng trở lên',
      'Khi công ty là doanh nghiệp do Nhà nước nắm giữ trên 50% vốn điều lệ hoặc công ty con của doanh nghiệp nhà nước',
      'Khi công ty hoạt động trong ngành nghề đầu tư kinh doanh có điều kiện'
    ],
    correctAnswer: 2,
    explanation: 'Theo khoản 1 Điều 54 Luật Doanh nghiệp 2020, công ty TNHH hai thành viên trở lên là doanh nghiệp nhà nước (nắm giữ trên 50% vốn điều lệ theo điểm b khoản 1 Điều 88) và công ty con của doanh nghiệp nhà nước bắt buộc phải thành lập Ban kiểm soát; các trường hợp khác do công ty tự quyết định.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 54 (khoản 1) & Điều 88'
  },
  // 15125
  15125: {
    question: 'Công ty Cổ phần Sữa Ba Vì có tổng số 10.000.000 cổ phần phổ thông có quyền biểu quyết. Cuộc họp ĐHĐCĐ được tổ chức hợp lệ với sự tham dự của các cổ đông đại diện cho 7.000.000 cổ phần (70%). Tại cuộc họp, ĐHĐCĐ tiến hành biểu quyết thông qua quyết định đầu tư mở rộng nhà máy trị giá 20 tỷ đồng. Cần ít nhất bao nhiêu phiếu tán thành để nghị quyết này được thông qua (Điều lệ không quy định tỷ lệ khác)?',
    options: [
      'Phải được số cổ đông đại diện trên 50% tổng số cổ phần toàn công ty tán thành (tối thiểu 5.000.001 phiếu)',
      'Phải được số cổ đông đại diện ít nhất 65% tổng số phiếu biểu quyết của tất cả cổ đông dự họp tán thành (tối thiểu 4.550.000 phiếu)',
      'Được số cổ đông đại diện trên 50% tổng số phiếu biểu quyết của tất cả cổ đông dự họp tán thành (tối thiểu từ 3.500.001 phiếu trở lên)',
      'Phải được 100% tổng số cổ đông tham dự cuộc họp biểu quyết nhất trí tán thành'
    ],
    correctAnswer: 2,
    explanation: 'Theo điểm b khoản 2 Điều 148 Luật Doanh nghiệp 2020, nghị quyết ĐHĐCĐ về các vấn đề thông thường được thông qua tại cuộc họp khi được số cổ đông đại diện trên 50% tổng số phiếu biểu quyết của tất cả cổ đông dự họp tán thành. Với 7.000.000 phiếu tham dự, trên 50% tương ứng tối thiểu từ 3.500.001 phiếu biểu quyết tán thành trở lên.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 148 (khoản 2 điểm b)'
  },
  // 16086
  16086: {
    question: 'Thành mang súng ngắn vào ngân hàng đe dọa nhân viên và cướp được 500 triệu đồng. Trên đường tẩu thoát, bị cảnh sát giao thông truy đuổi ráo riết, Thành đã rút súng bắn thẳng vào ngực cảnh sát làm chiến sĩ cảnh sát hy sinh. Hành vi bắn chết cảnh sát của Thành cấu thành tội danh nào theo Bộ luật Hình sự?',
    options: [
      'Tội Giết người (Điều 123 BLHS 2015) với tình tiết định khung giết người đang thi hành công vụ và để thực hiện hoặc che giấu tội phạm khác',
      'Tội Chống người thi hành công vụ với tình tiết làm chết người thi hành công vụ',
      'Tội Vô ý làm chết người trong khi thi hành công vụ hoặc phòng vệ quá mức',
      'Tội Gây rối trật tự công cộng gây hậu quả làm chết người'
    ],
    correctAnswer: 0,
    explanation: 'Điểm d và điểm g khoản 1 Điều 123 Bộ luật Hình sự 2015 quy định Tội giết người với các tình tiết định khung tăng nặng: giết người đang thi hành công vụ hoặc vì lý do công vụ của nạn nhân (điểm d) và để thực hiện hoặc che giấu tội phạm khác (điểm g).',
    legalReference: 'Bộ luật Hình sự 2015, Điều 123 (khoản 1 điểm d, g)'
  },
  // 16095
  16095: {
    question: 'Do có mâu thuẫn từ trước, Quân (17 tuổi) đứng chờ Tuấn đi học về rồi bất ngờ cầm gậy gỗ đánh vào đầu Tuấn gây chấn thương sọ não với tỷ lệ thương tật 45% (thuộc khoản 3 Điều 134 BLHS - Tội rất nghiêm trọng, khung hình phạt từ 05 đến 10 năm tù). Khi xét xử, mức phạt tù tối đa mà Tòa án có thể áp dụng đối với Quân (người từ đủ 16 đến dưới 18 tuổi phạm tội) là bao nhiêu?',
    options: [
      'Áp dụng mức cao nhất của khung hình phạt là 10 năm tù do Quân đã đủ 16 tuổi khi phạm tội',
      'Không quá ba phần tư mức phạt tù cao nhất của khung hình phạt (tức tối đa không quá 7 năm 6 tháng tù)',
      'Không quá một phần hai mức phạt tù cao nhất của khung hình phạt (tức tối đa không quá 5 năm tù)',
      'Không quá hai phần ba mức phạt tù cao nhất của khung hình phạt (tức tối đa không quá 6 năm 8 tháng tù)'
    ],
    correctAnswer: 1,
    explanation: 'Khoản 1 Điều 101 Bộ luật Hình sự 2015 quy định: Đối với người từ đủ 16 tuổi đến dưới 18 tuổi khi phạm tội, nếu điều luật được áp dụng quy định hình phạt tù có thời hạn thì mức hình phạt cao nhất được áp dụng không quá ba phần tư mức phạt tù mà điều luật quy định. Khung khoản 3 Điều 134 BLHS từ 05 đến 10 năm tù, mức tối đa là 10 năm tù x 3/4 = 7 năm 6 tháng (7,5 năm tù).',
    legalReference: 'Bộ luật Hình sự 2015, Điều 101 (khoản 1) & Điều 134 (khoản 3)'
  },
  // 17145
  17145: {
    question: 'Ông Thành và bà Dung kết hôn năm 2012 và có khối tài sản chung gồm căn nhà trị giá 6 tỷ đồng. Khi ly hôn năm 2024, hai bên tranh chấp về phân chia tài sản. Ông Thành chứng minh được trong thời kỳ hôn nhân, bố mẹ ruột của ông Thành đã lập hợp đồng tặng cho riêng cá nhân ông Thành số tiền 2 tỷ đồng (đã công chứng hợp pháp) để thanh toán một phần tiền mua căn nhà trên. Khi phân chia tài sản chung, khoản tiền 2 tỷ đồng này được Tòa án giải quyết như thế nào?',
    options: [
      'Khoản tiền 2 tỷ đồng mặc nhiên chuyển thành tài sản chung và bắt buộc phải chia đôi 50/50 cho mỗi bên',
      'Khoản 2 tỷ đồng được trích trả lại riêng cho ông Thành trước, giá trị còn lại của căn nhà mới chia đôi có tính đến công sức của các bên',
      'Bà Dung được ưu tiên nhận toàn bộ căn nhà và chỉ cần bồi hoàn cho ông Thành 1 tỷ đồng tiền hỗ trợ',
      'Tòa án thu hồi khoản tiền 2 tỷ đồng vào ngân sách nhà nước vì việc tặng cho làm xáo trộn tài sản chung'
    ],
    correctAnswer: 1,
    explanation: 'Theo Điều 43 Luật Hôn nhân và Gia đình 2014, tài sản được tặng cho riêng trong thời kỳ hôn nhân là tài sản riêng của vợ, chồng. Khi vợ chồng đưa tài sản riêng vào tạo lập tài sản chung thì khi ly hôn, bên có tài sản riêng được trích hoàn trả lại phần giá trị tài sản riêng của mình theo Điều 59 Luật Hôn nhân và Gia đình 2014.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 43 & Điều 59'
  },
  // 17137
  17137: {
    question: 'Ông Phát và bà Hoa kết hôn năm 2000. Năm 2015, hai người lập văn bản công chứng phân chia tài sản chung trong thời kỳ hôn nhân: ngôi nhà mặt phố được chia cho bà Hoa, còn xưởng sản xuất gỗ được chia cho ông Phát. Sau khi chia, ông Phát thế chấp xưởng gỗ vay ngân hàng 2 tỷ đồng để đầu tư làm ăn nhưng bị thua lỗ. Ngân hàng kiện đòi kê biên ngôi nhà mặt phố của bà Hoa để thu hồi nợ. Tòa án xử lý yêu cầu của ngân hàng thế nào?',
    options: [
      'Chấp nhận kê biên toàn bộ ngôi nhà của bà Hoa vì nghĩa vụ trả nợ phát sinh trong thời kỳ hôn nhân hợp pháp',
      'Chấp nhận kê biên một nửa ngôi nhà của bà Hoa để bảo đảm quyền lợi hợp pháp của tổ chức tín dụng',
      'Không chấp nhận, vì ngôi nhà mặt phố đã là tài sản riêng hợp pháp của bà Hoa sau khi chia tài sản chung, khoản vay của ông Phát là nghĩa vụ riêng phát sinh từ tài sản riêng của ông',
      'Buộc bà Hoa phải đem các tài sản khác bồi hoàn thay cho ông Phát nếu xưởng gỗ không đủ thanh toán nợ'
    ],
    correctAnswer: 2,
    explanation: 'Theo Điều 40 và 45 Luật Hôn nhân và Gia đình 2014: Sau khi chia tài sản chung trong thời kỳ hôn nhân, phần tài sản được chia là tài sản riêng của mỗi bên. Nghĩa vụ phát sinh từ việc quản lý, khai thác, đầu tư kinh doanh tài sản riêng của một bên là nghĩa vụ riêng của bên đó, không được lấy tài sản riêng của bên kia để thi hành nghĩa vụ.',
    legalReference: 'Luật Hôn nhân và Gia đình 2014, Điều 40, 45'
  },
  // 17151
  17151: {
    question: 'Ông Sơn và bà Hà chung sống với nhau từ năm 1995 (trước ngày 01/01/2001) có đủ điều kiện kết hôn nhưng chưa đăng ký kết hôn tại cơ quan nhà nước có thẩm quyền. Hai người sinh sống liên tục, hòa thuận và được cộng đồng dân cư thừa nhận là vợ chồng. Theo quy định pháp luật về hôn nhân thực tế, quan hệ giữa ông Sơn và bà Hà được pháp luật công nhận như thế nào?',
    options: [
      'Được công nhận là hôn nhân thực tế hợp pháp kể từ ngày xác lập chung sống theo Nghị quyết 35/2000/QH10 và Thông tư liên tịch 01/2001/TTLT',
      'Không được công nhận quan hệ vợ chồng và mọi giao dịch giữa hai người chỉ được giải quyết theo quy định của Bộ luật Dân sự',
      'Quan hệ hôn nhân chỉ được công nhận kể từ thời điểm hai người sinh đứa con chung đầu tiên',
      'Chỉ được công nhận nếu hai người nộp phạt vi phạm hành chính về việc chậm đăng ký hộ tịch'
    ],
    correctAnswer: 0,
    explanation: 'Theo Nghị quyết số 35/2000/QH10 của Quốc hội và Thông tư liên tịch 01/2001/TTLT, nam và nữ chung sống với nhau như vợ chồng từ ngày 03/01/1987 đến trước ngày 01/01/2001 mà có đủ điều kiện kết hôn thì được công nhận là hôn nhân thực tế hợp pháp kể từ ngày xác lập chung sống.',
    legalReference: 'Nghị quyết 35/2000/QH10 & Luật Hôn nhân và Gia đình 2014, Điều 131'
  },
  // 13056
  13056: {
    question: 'Khiếu kiện quyết định hành chính, hành vi hành chính của Chủ tịch Ủy ban nhân dân cấp tỉnh thì Tòa án nào sau đây có thẩm quyền thụ lý giải quyết theo thủ tục sơ thẩm theo quy định của Luật Tố tụng hành chính?',
    options: [
      'Tòa án nhân dân khu vực nơi đặt trụ sở của Ủy ban nhân dân cấp tỉnh',
      'Tòa phúc thẩm Tòa án nhân dân tối cao tại khu vực phụ trách',
      'Tòa án nhân dân tối cao tại Hà Nội',
      'Tòa án nhân dân cấp tỉnh nơi có cơ quan ban hành quyết định hành chính bị khiếu kiện'
    ],
    correctAnswer: 3,
    explanation: 'Theo Điều 32 Luật Tố tụng hành chính hiện hành, khiếu kiện quyết định hành chính, hành vi hành chính của Ủy ban nhân dân cấp tỉnh, Chủ tịch Ủy ban nhân dân cấp tỉnh thuộc thẩm quyền xét xử sơ thẩm của Tòa án nhân dân cấp tỉnh.',
    legalReference: 'Luật Tố tụng hành chính, Điều 32'
  },
  // 16020 (replaces duplicate with 482)
  16020: {
    question: 'Hình phạt nào sau đây chỉ được áp dụng là hình phạt bổ sung đối với cá nhân phạm tội theo quy định của Bộ luật Hình sự 2015?',
    options: [
      'Cảnh cáo',
      'Phạt tiền',
      'Cải tạo không giam giữ',
      'Tước một số quyền công dân'
    ],
    correctAnswer: 3,
    explanation: 'Theo khoản 2 Điều 32 Bộ luật Hình sự 2015, Tước một số quyền công dân (Điều 44) là hình phạt chỉ được áp dụng là hình phạt bổ sung; trong khi Cảnh cáo, Cải tạo không giam giữ là hình phạt chính, còn Phạt tiền có thể là hình phạt chính hoặc hình phạt bổ sung.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 32 (khoản 2) & Điều 44'
  },
  // 7
  7: {
    question: 'Thuộc tính nào sau đây thể hiện ranh giới phân biệt rõ ràng nhất giữa Quy phạm pháp luật với các Quy phạm xã hội khác (đạo đức, tôn giáo, tập quán)?',
    options: [
      'Tính quy phạm đạo đức và tính tự giác lương tâm của mỗi cá nhân',
      'Tính định hướng tư tưởng và giáo dục truyền thống tốt đẹp của dân tộc',
      'Tính tự nguyện thực hiện của các thành viên trong các hội đoàn xã hội',
      'Tính quyền lực bắt buộc chung và được bảo đảm thực hiện bằng quyền lực Nhà nước'
    ],
    correctAnswer: 3,
    explanation: 'Tính quyền lực bắt buộc chung và được bảo đảm thực hiện bằng quyền lực Nhà nước (áp dụng các biện pháp cưỡng chế) là thuộc tính đặc trưng cơ bản nhất để phân biệt quy phạm pháp luật với các quy phạm đạo đức, tôn giáo, tập quán xã hội khác.',
    legalReference: 'Giáo trình Pháp luật đại cương - Thuộc tính của pháp luật'
  },
  // 39
  39: {
    question: 'Theo khoản 1 Điều 105 Bộ luật Dân sự 2015, tài sản bao gồm bốn dạng tồn tại nào sau đây?',
    options: [
      'Đất đai, tiền mặt, kim loại quý và quyền nhân thân gắn liền với mỗi cá nhân',
      'Nhà xưởng, máy móc công nghiệp, hợp đồng thương mại và tư cách pháp nhân',
      'Cổ phiếu, tài nguyên khoáng sản, quyền tác giả chưa chuyển giao và bí mật kinh doanh',
      'Vật, tiền, giấy tờ có giá và quyền tài sản'
    ],
    correctAnswer: 3,
    explanation: 'Khoản 1 Điều 105 Bộ luật Dân sự 2015 quy định: Tài sản là vật, tiền, giấy tờ có giá và quyền tài sản.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 105 (khoản 1)'
  },
  // 99
  99: {
    question: 'Theo Bộ luật Lao động 2019, người sử dụng lao động KHÔNG ĐƯỢC xử lý kỷ luật lao động đối với người lao động trong trường hợp nào sau đây?',
    options: [
      'Người lao động thường xuyên đi làm muộn nhiều lần không có lý do chính đáng',
      'Người lao động có hành vi gây thiệt hại tài sản dưới 10 tháng lương tối thiểu vùng',
      'Người lao động bị cơ quan có thẩm quyền xử phạt vi phạm hành chính ngoài công ty',
      'Lao động nữ mang thai, người lao động nghỉ thai sản hoặc đang nuôi con dưới 12 tháng tuổi'
    ],
    correctAnswer: 3,
    explanation: 'Khoản 4 Điều 122 Bộ luật Lao động 2019 quy định người sử dụng lao động không được xử lý kỷ luật lao động đối với người lao động đang trong thời gian: mang thai; nghỉ thai sản, nuôi con dưới 12 tháng tuổi.',
    legalReference: 'Bộ luật Lao động 2019, Điều 122 (khoản 4)'
  },
  // 177
  177: {
    question: 'Hình phạt "Tù chung thân" KHÔNG ĐƯỢC áp dụng đối với đối tượng nào sau đây theo quy định của Bộ luật Hình sự?',
    options: [
      'Người dưới 18 tuổi khi phạm tội',
      'Người đã từng có tiền án về tội trộm cắp tài sản',
      'Người phạm tội tái phạm nguy hiểm nhưng đã đủ 18 tuổi',
      'Người nước ngoài phạm tội trên lãnh thổ Việt Nam'
    ],
    correctAnswer: 0,
    explanation: 'Điều 39 Bộ luật Hình sự 2015 quy định hình phạt tù chung thân là hình phạt tù không thời hạn được áp dụng đối với người phạm tội đặc biệt nghiêm trọng, nhưng không áp dụng đối với người dưới 18 tuổi phạm tội.',
    legalReference: 'Bộ luật Hình sự 2015, Điều 39'
  },
  // 285
  285: {
    question: 'Theo Điều 110 Hiến pháp 2013 (đã được sửa đổi, bổ sung), các đơn vị hành chính của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam được phân định như thế nào?',
    options: [
      'Nước chia thành tỉnh, thành phố trực thuộc trung ương; tỉnh chia thành xã, thị trấn; thành phố trực thuộc trung ương chia thành phường, xã; và đơn vị hành chính - kinh tế đặc biệt',
      'Nước chia thành 3 miền Bắc - Trung - Nam với hệ thống chính quyền tự trị độc lập',
      'Nước chia thành các bang và vùng lãnh thổ tự trị do Quốc hội quyết định thành lập',
      'Nước chỉ tổ chức một cấp hành chính trung ương duy nhất quản lý trực tiếp toàn thể nhân dân'
    ],
    correctAnswer: 0,
    explanation: 'Hiến pháp 2013 (sửa đổi năm 2025) quy định phân định đơn vị hành chính gồm cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp xã (xã, phường, thị trấn), đồng thời quy định về đơn vị hành chính - kinh tế đặc biệt.',
    legalReference: 'Hiến pháp 2013 (sửa đổi, bổ sung), Điều 110'
  },
  // 339
  339: {
    question: 'Pháp nhân chấm dứt tồn tại trong trường hợp nào sau đây theo Bộ luật Dân sự 2015?',
    options: [
      'Hợp nhất, sáp nhập, chia, chuyển đổi hình thức, giải thể hoặc bị tuyên bố phá sản theo quy định của pháp luật',
      'Thay đổi người đại diện theo pháp luật của pháp nhân',
      'Thay đổi địa chỉ trụ sở chính sang đơn vị hành chính khác',
      'Tăng hoặc giảm vốn điều lệ đăng ký của pháp nhân'
    ],
    correctAnswer: 0,
    explanation: 'Điều 96 Bộ luật Dân sự 2015 quy định pháp nhân chấm dứt trong các trường hợp: Hợp nhất, sáp nhập, chia, chuyển đổi hình thức, giải thể, bị tuyên bố phá sản.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 96'
  },
  // 429
  429: {
    question: 'Cơ quan nào có thẩm quyền quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính DƯỚI CẤP TỈNH (xã, phường, thị trấn) theo quy định của Hiến pháp 2013?',
    options: [
      'Ủy ban Thường vụ Quốc hội',
      'Chính phủ',
      'Hội đồng nhân dân cấp tỉnh',
      'Bộ Nội vụ'
    ],
    correctAnswer: 0,
    explanation: 'Khoản 8 Điều 74 Hiến pháp 2013 quy định Ủy ban thường vụ Quốc hội quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính dưới tỉnh, thành phố trực thuộc trung ương.',
    legalReference: 'Hiến pháp 2013, Điều 74 (khoản 8)'
  },
  // 462
  462: {
    options: [
      'Có năng lực hành vi dân sự đầy đủ; có trình độ đại học và đã qua thực tế công tác theo ngành đã học từ 5 năm trở lên (hoặc chuyên gia có trình độ chuyên môn cao)',
      'Bắt buộc phải là đại biểu Quốc hội đang đương nhiệm',
      'Bắt buộc phải là Thẩm phán Tòa án nhân dân đang công tác',
      'Không cần bằng cấp chuyên môn chỉ cần có uy tín trong cộng đồng dân cư'
    ]
  },
  // 11097
  11097: {
    question: 'Chủ tịch Ủy ban nhân dân cấp tỉnh ra quyết định xử phạt vi phạm hành chính đối với cơ sở kinh doanh karaoke vi phạm nghiêm trọng quy định phòng cháy chữa cháy số tiền 45 triệu đồng và đình chỉ hoạt động 6 tháng. Văn bản xử phạt này thuộc loại văn bản nào?',
    options: [
      'Văn bản quy phạm pháp luật của chính quyền địa phương',
      'Quy chế nội bộ của ngành văn hóa thể thao',
      'Tập quán pháp về kinh doanh dịch vụ giải trí',
      'Văn bản áp dụng pháp luật mang tính cá biệt'
    ],
    correctAnswer: 3,
    explanation: 'Quyết định xử phạt vi phạm hành chính đối với một chủ thể xác định (cơ sở karaoke cụ thể) là văn bản áp dụng pháp luật (văn bản cá biệt), không phải văn bản quy phạm pháp luật chứa quy tắc xử sự chung.',
    legalReference: 'Luật Ban hành văn bản quy phạm pháp luật & Luật XLVPHC'
  },
  // 11099
  11099: {
    question: 'Trong một vụ tranh chấp ranh giới đất đai giữa ông Nam và ông Bắc, Tòa án nhân dân khu vực đã hòa giải thành công và lập Biên bản hòa giải thành. Biên bản này có giá trị pháp lý ra sao?',
    options: [
      'Chỉ là bản ghi nhớ danh dự không có giá trị cưỡng chế thi hành',
      'Có hiệu lực pháp luật thi hành ngay và các bên không có quyền kháng cáo theo thủ tục phúc thẩm',
      'Bị hủy bỏ nếu một trong hai bên đổi ý sau 3 ngày làm việc',
      'Phải chuyển lên Tòa án tối cao phê duyệt mới có giá trị pháp lý'
    ],
    correctAnswer: 1,
    explanation: 'Theo Bộ luật Tố tụng dân sự, quyết định công nhận sự thỏa thuận của các đương sự (sau khi hòa giải thành) có hiệu lực pháp luật ngay và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm.',
    legalReference: 'Bộ luật Tố tụng dân sự 2015, Điều 212'
  },
  // 11105
  11105: {
    question: 'Chi cục Thuế khu vực kiểm tra quyết toán thuế và ban hành quyết định truy thu 80 triệu đồng tiền thuế thu nhập doanh nghiệp của Công ty TNHH Sao Mai. Quyết định truy thu thuế này được xếp vào loại văn bản nào?',
    options: [
      'Văn bản quy phạm pháp luật của ngành tài chính',
      'Hiệp định tài chính song phương giữa cơ quan thuế và doanh nghiệp',
      'Văn bản áp dụng pháp luật mang tính quyền lực nhà nước',
      'Văn bản thỏa thuận hợp tác thương mại giữa các bên'
    ],
    correctAnswer: 2,
    explanation: 'Quyết định truy thu thuế là văn bản áp dụng pháp luật, do cơ quan có thẩm quyền ban hành nhằm áp dụng quy định thuế vào trường hợp cụ thể của đối tượng nộp thuế.',
    legalReference: 'Luật Ban hành văn bản quy phạm pháp luật & Luật Quản lý thuế'
  },
  // 13062
  13062: {
    question: 'Ông Vũ là Chủ tịch Ủy ban nhân dân cấp xã Y có hành vi bao che cho doanh nghiệp khai thác cát lậu gây sạt lở nghiêm trọng bờ sông. Ai là người có thẩm quyền ra quyết định đình chỉ công tác hoặc cách chức Chủ tịch UBND cấp xã đối với ông Vũ theo Luật Tổ chức chính quyền địa phương?',
    options: [
      'Viện trưởng Viện kiểm sát nhân dân khu vực',
      'Chủ tịch Ủy ban nhân dân cấp tỉnh',
      'Chủ tịch Quốc hội',
      'Giám đốc Công an tỉnh'
    ],
    correctAnswer: 1,
    explanation: 'Theo Luật Tổ chức chính quyền địa phương 2025 (mô hình 2 cấp), Chủ tịch UBND cấp tỉnh có thẩm quyền điều động, đình chỉ công tác, cách chức Chủ tịch UBND cấp dưới trực tiếp (cấp cơ sở/xã).',
    legalReference: 'Luật Tổ chức chính quyền địa phương 2025'
  },
  // 13070
  13070: {
    question: 'Theo quy định của Hiến pháp 2013 (sửa đổi năm 2025) và Luật Tổ chức chính quyền địa phương 2025, chính quyền địa phương ở đô thị gồm những cấp nào sau đây?',
    options: [
      'Chính quyền các bang và khu tự trị đặc quyền',
      'Cấp thành phố trực thuộc trung ương và cấp phường (hoặc đặc khu)',
      'Chính quyền làng xã truyền thống tự quản độc lập',
      'Cấp vùng liên bang và cấp vùng hải ngoại tự trị'
    ],
    correctAnswer: 1,
    explanation: 'Theo Hiến pháp 2013 (sửa đổi bởi Nghị quyết 203/2025/QH15) và Luật Tổ chức chính quyền địa phương 2025 có hiệu lực từ 01/7/2025, chính quyền địa phương được tổ chức theo mô hình 2 cấp: cấp tỉnh (tỉnh, thành phố trực thuộc trung ương) và cấp cơ sở (xã, phường, thị trấn/đặc khu), không còn cấp hành chính quận, huyện, thị xã.',
    legalReference: 'Hiến pháp 2013 (sửa đổi 2025), Điều 110, 111 & Luật Tổ chức CQĐP 2025'
  },
  // 13094
  13094: {
    question: 'Một bản án dân sự sơ thẩm của Tòa án nhân dân khu vực tuyên chia tài sản chung của vợ chồng. Sau 15 ngày kể từ ngày tuyên án, không có đương sự nào kháng cáo và Viện kiểm sát không kháng nghị. Bản án này phát sinh giá trị pháp lý như thế nào?',
    options: [
      'Chưa có hiệu lực cho đến khi được Tòa án tối cao phê duyệt',
      'Vô hiệu vì không có phiên tòa phúc thẩm xác nhận lại',
      'Chính thức có hiệu lực pháp luật thi hành đối với các bên đương sự',
      'Có thể bị đương sự hủy bỏ bằng thỏa thuận miệng sau 1 năm'
    ],
    correctAnswer: 2,
    explanation: 'Theo Bộ luật Tố tụng dân sự, bản án sơ thẩm không bị kháng cáo, kháng nghị trong thời hạn luật định (15 ngày đối với đương sự) thì có hiệu lực pháp luật kể từ ngày hết thời hạn kháng cáo, kháng nghị.',
    legalReference: 'Bộ luật Tố tụng dân sự 2015, Điều 273, 280'
  },
  // 13097
  13097: {
    question: 'Cơ quan Cảnh sát điều tra ra Quyết định khởi tố bị can đối với đối tượng trộm cắp tài sản. Để tiến hành tạm giam bị can trong giai đoạn điều tra, cơ quan điều tra bắt buộc phải thực hiện thủ tục gì?',
    options: [
      'Chỉ cần Thủ trưởng Cơ quan điều tra ký lệnh tạm giam là có thể thi hành ngay',
      'Chuyển lệnh tạm giam sang Viện kiểm sát nhân dân cùng cấp để xem xét phê chuẩn trước khi thi hành',
      'Tổ chức họp báo công khai lấy ý kiến nhân dân tại địa bàn',
      'Xin văn bản đồng ý phê duyệt của Hội đồng nhân dân cấp tỉnh'
    ],
    correctAnswer: 1,
    explanation: 'Theo Bộ luật Tố tụng hình sự, lệnh tạm giam của cơ quan điều tra phải được Viện kiểm sát cùng cấp phê chuẩn trước khi thi hành.',
    legalReference: 'Bộ luật Tố tụng hình sự 2015, Điều 119'
  },
  // 13100
  13100: {
    question: 'Tòa án nhân dân khu vực thụ lý đơn yêu cầu tuyên bố một cá nhân mất tích do đã biệt tích 2 năm liền trở lên mà không có tin tức xác thực. Thủ tục bắt buộc Tòa án phải tiến hành trước khi ra quyết định là gì?',
    options: [
      'Phát thông báo tìm kiếm người vắng mặt trên phương tiện thông tin đại chúng theo luật định',
      'Chia ngay tài sản của người vắng mặt cho các con của người đó',
      'Tự động tuyên bố hủy bỏ giấy đăng ký kết hôn của người vắng mặt',
      'Bán đấu giá toàn bộ nhà đất của người vắng mặt nộp ngân sách địa phương'
    ],
    correctAnswer: 0,
    explanation: 'Theo Bộ luật Tố tụng dân sự và BLDS 2015 (Điều 68), trước khi tuyên bố một người mất tích, Tòa án phải ra quyết định thông báo tìm kiếm người vắng mặt tại nơi cư trú trên các phương tiện thông tin đại chúng trong thời hạn 04 tháng.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 68 & BLTTDS 2015'
  },
  // 14034
  14034: {
    question: 'Điều kiện để di chúc của người từ đủ 15 tuổi đến chưa đủ 18 tuổi có hiệu lực pháp luật là gì theo Bộ luật Dân sự 2015?',
    options: [
      'Phải được cơ quan công an nơi cư trú xác nhận đạo đức tốt',
      'Phải có tài sản để lại trị giá từ 500 triệu đồng trở lên',
      'Phải được lập thành văn bản và phải được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc',
      'Chỉ được lập bằng miệng trước sự chứng kiến của giáo viên chủ nhiệm'
    ],
    correctAnswer: 2,
    explanation: 'Khoản 2 Điều 630 Bộ luật Dân sự 2015 quy định di chúc của người từ đủ 15 tuổi đến chưa đủ 18 tuổi phải được lập thành văn bản và phải được cha, mẹ hoặc người giám hộ đồng ý về việc lập di chúc.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 630 (khoản 2)'
  },
  // 14048
  14048: {
    question: 'Thẩm quyền giải quyết tranh chấp hợp đồng mua bán nhà ở giữa hai công dân cư trú tại phường Láng Hạ, thành phố Hà Nội thuộc về Tòa án nào theo thẩm quyền lãnh thổ nếu các bên không có thỏa thuận khác?',
    options: [
      'Tòa án nhân dân nơi có bất động sản (nhà ở) tọa lạc',
      'Tòa án nhân dân tối cao',
      'Tòa án nhân dân nơi nguyên đơn có hộ khẩu thường trú',
      'Tòa án quân sự Quân khu Thủ đô'
    ],
    correctAnswer: 0,
    explanation: 'Điểm c khoản 1 Điều 39 Bộ luật Tố tụng dân sự 2015 quy định đối với tranh chấp bất động sản thì chỉ Tòa án nơi có bất động sản mới có thẩm quyền giải quyết.',
    legalReference: 'Bộ luật Tố tụng dân sự 2015, Điều 39 (khoản 1 điểm c)'
  },
  // 14085
  14085: {
    question: 'Anh Bách thuê căn hộ của chị Thoa. Trong thời gian thuê, đường ống nước chìm trong tường bị bục vỡ tự nhiên do công trình xuống cấp, nước ngấm làm bong tróc trần nhà. Trách nhiệm sửa chữa hư hỏng này thuộc về ai?',
    options: [
      'Anh Bách phải tự bỏ tiền sửa chữa vì đang là người trực tiếp sử dụng căn hộ',
      'Chị Thoa (bên cho thuê) có nghĩa vụ bảo đảm tài sản thuê trong tình trạng sử dụng và phải sửa chữa hư hỏng lớn không do lỗi của bên thuê',
      'Công ty cấp nước sạch địa phương phải sửa chữa miễn phí cho người thuê',
      'Chính quyền địa phương nơi có tài sản chi trả từ quỹ phòng chống rủi ro'
    ],
    correctAnswer: 1,
    explanation: 'Theo Điều 477 Bộ luật Dân sự 2015, bên cho thuê có nghĩa vụ bảo đảm tài sản thuê trong tình trạng như đã thỏa thuận và sửa chữa khuyết tật, hư hỏng không phải do lỗi của bên thuê.',
    legalReference: 'Bộ luật Dân sự 2015, Điều 477'
  },
  // 14095
  14095: {
    question: 'Tòa án nhân dân khu vực thụ lý vụ kiện tranh chấp ranh giới đất đai giữa ông Nam và ông Bắc. Trong quá trình giải quyết, Tòa án tiến hành phiên họp kiểm tra việc giao nộp, tiếp cận, công khai chứng cứ và hòa giải. Mục đích chính của phiên họp này là gì?',
    options: [
      'Tuyên án sơ thẩm ngay tại chỗ đối với vụ việc tranh chấp',
      'Bắt tạm giam bên không chịu nhường đất để răn đe',
      'Ép buộc các đương sự phải ký biên bản nhận tội vi phạm',
      'Công khai các tài liệu chứng cứ của vụ án và tạo điều kiện cho các đương sự tự thương lượng, hòa giải với nhau'
    ],
    correctAnswer: 3,
    explanation: 'Theo Điều 208 Bộ luật Tố tụng dân sự 2015, phiên họp kiểm tra việc giao nộp, tiếp cận, công khai chứng cứ và hòa giải nhằm công khai chứng cứ, làm rõ tình tiết và tạo điều kiện cho các đương sự tự thỏa thuận giải quyết vụ án.',
    legalReference: 'Bộ luật Tố tụng dân sự 2015, Điều 208'
  },
  // 14109
  14109: {
    options: [
      'Công ty Phú Thịnh bắt buộc phải thanh toán toàn bộ 1,2 tỷ đồng cho bên bán',
      'Hợp đồng hoàn toàn vô hiệu từ đầu và hai bên chỉ cần trả lại những gì đã nhận',
      'Bên bán có quyền yêu cầu ngân hàng bảo lãnh thanh toán thay phần tiền vượt quá',
      'Công ty Phú Thịnh không chịu trách nhiệm đối với phần nghĩa vụ vượt quá phạm vi ủy quyền, anh Hoàng phải tự chịu trách nhiệm thực hiện phần nghĩa vụ vượt quá đó với bên bán'
    ]
  },
  // 15084
  15084: {
    options: [
      'Khoản nợ mặc nhiên bị xóa bỏ theo pháp luật doanh nghiệp khi chuyển nhượng',
      'Ông Thành vẫn phải chịu trách nhiệm về các khoản nợ phát sinh trước thời điểm chuyển giao doanh nghiệp, trừ trường hợp người mua và chủ nợ có thỏa thuận khác',
      'Bà Hằng bắt buộc phải trả toàn bộ vì là người mua mới của doanh nghiệp',
      'Cơ quan đăng ký kinh doanh cấp tỉnh phải trích quỹ hỗ trợ trả nợ thay doanh nghiệp'
    ]
  },
  // 15115
  15115: {
    question: 'Chị Mai đăng ký thành lập Hộ kinh doanh thời trang Mai Boutique tại phường Kim Liên, thành phố Hà Nội. Sau 2 năm kinh doanh thuận lợi, chị Mai muốn mở thêm một cửa hàng bán quần áo nữa tại phường Dịch Vọng, thành phố Hà Nội. Theo quy định pháp luật hiện hành, chị Mai phải thực hiện thủ tục như thế nào?',
    options: [
      'Được mở thêm địa điểm kinh doanh nhưng phải thông báo cho Cơ quan đăng ký kinh doanh có thẩm quyền nơi đặt địa điểm kinh doanh mới và cơ quan thuế',
      'Bắt buộc phải đóng cửa cửa hàng ở Kim Liên trước khi mở cửa hàng ở Dịch Vọng',
      'Bắt buộc phải chuyển đổi thành công ty cổ phần mới được mở cửa hàng thứ hai',
      'Chỉ cần treo biển hiệu bán hàng mà không cần thực hiện bất kỳ thủ tục thông báo nào'
    ],
    explanation: 'Theo Nghị định 168/2025/NĐ-CP (và Luật Doanh nghiệp), Hộ kinh doanh có thể hoạt động kinh doanh tại nhiều địa điểm nhưng phải chọn một địa điểm để đăng ký trụ sở và phải thông báo cho Cơ quan quản lý thuế, cơ quan quản lý thị trường nơi tiến hành hoạt động kinh doanh đối với các địa điểm kinh doanh còn lại.',
    legalReference: 'Nghị định 168/2025/NĐ-CP & Luật Doanh nghiệp'
  },
  // 15120
  15120: {
    options: [
      'Mặc nhiên lấy theo mệnh giá vốn góp ban đầu ghi trên giấy chứng nhận phần vốn góp',
      'Giá mua lại được xác định theo giá thị trường hoặc giá được xác định theo nguyên tắc quy định tại Điều lệ công ty trong thời hạn 15 ngày kể từ ngày nhận được yêu cầu',
      'Do Ban kiểm soát hoặc cơ quan định giá độc lập ấn định theo quyết định của Giám đốc',
      'Thành viên B bắt buộc phải bán lại cho công ty với giá tượng trưng 0 đồng'
    ]
  },
  // 15127
  15127: {
    question: 'Ông Minh đăng ký kinh doanh dưới hình thức Hộ kinh doanh buôn bán nông sản tại xã Ea Tóh, tỉnh Đắk Lắk. Sau một thời gian kinh doanh tích lũy được nhiều vốn, ông Minh muốn cùng lúc đăng ký thành lập thêm một Công ty TNHH Hai thành viên để làm dịch vụ vận tải hàng hóa. Theo Luật Doanh nghiệp và Nghị định 168/2025/NĐ-CP, ông Minh có quyền thành lập công ty TNHH này không?',
    options: [
      'Có quyền, vì pháp luật không cấm cá nhân là chủ hộ kinh doanh tham gia thành lập, quản lý công ty TNHH (chỉ cấm chủ DNTN đồng thời là chủ hộ kinh doanh)',
      'Không có quyền, vì mỗi cá nhân chỉ được sở hữu duy nhất một mã số thuế kinh doanh',
      'Chỉ được phép nếu ông Minh chuyển toàn bộ tài sản hộ kinh doanh vào công ty',
      'Không có quyền, trừ khi được Sở Kế hoạch và Đầu tư phê duyệt đặc cách bằng văn bản'
    ],
    explanation: 'Điều 17 Luật Doanh nghiệp 2020 và Nghị định 168/2025/NĐ-CP: Cá nhân có quyền thành lập, góp vốn vào công ty TNHH, công ty CP. Luật chỉ cấm chủ DNTN đồng thời là chủ hộ kinh doanh hoặc thành viên hợp danh của công ty hợp danh.',
    legalReference: 'Luật Doanh nghiệp 2020, Điều 17 & Nghị định 168/2025/NĐ-CP'
  },
  // 16123
  16123: {
    options: [
      'Tài xế Hoàng bắt buộc phải chịu án phạt tù vì đã làm sập quán nước ven đường',
      'Chủ quán nước ven đường phải tự chịu toàn bộ chi phí xây dựng lại quán',
      'Người đã gây ra tình thế cấp thiết (nhóm côn đồ đuổi chém) phải bồi thường thiệt hại cho chủ quán nước theo Điều 595 Bộ luật Dân sự 2015',
      'Doanh nghiệp bảo hiểm dân sự của chủ xe ô tô khách phải bồi thường toàn bộ chi phí xây lại quán'
    ]
  },
  // 17044
  17044: {
    options: [
      'Chỉ duy nhất Viện kiểm sát nhân dân khu vực nơi cư trú có quyền yêu cầu',
      'Chỉ cơ quan công an nơi hai bên đăng ký tạm trú có quyền can thiệp',
      'Chủ tịch Ủy ban nhân dân cấp tỉnh nơi đăng ký kết hôn có quyền ra quyết định',
      'Người bị cưỡng ép kết hôn, bị lừa dối kết hôn theo quy định của pháp luật về tố tụng dân sự'
    ]
  },
  // 17084
  17084: {
    options: [
      'Khi người trực tiếp nuôi con chuyển nơi cư trú sang đơn vị hành chính mới',
      'Khi con đạt danh hiệu học sinh giỏi trong kỳ thi học kỳ',
      'Khi người không trực tiếp nuôi con tái hôn với người khác',
      'Cha, mẹ có thỏa thuận về việc thay đổi người trực tiếp nuôi con phù hợp với lợi ích của con, hoặc người trực tiếp nuôi con không còn đủ điều kiện trực tiếp trông nom, chăm sóc, nuôi dưỡng, giáo dục con'
    ]
  },
  // 17101
  17101: {
    question: 'Chị Vân đang mang thai tháng thứ 5 thì phát hiện chồng mình (anh Nam) có hành vi ngoại tình và cờ bạc làm tiêu tán tài sản. Chị Vân làm đơn gửi Tòa án nhân dân khu vực yêu cầu xin ly hôn đơn phương. Anh Nam viện dẫn khoản 3 Điều 51 Luật Hôn nhân và Gia đình 2014 cho rằng người vợ đang có thai thì không được ly hôn nên đề nghị Tòa bác đơn. Lập luận của anh Nam đúng hay sai?',
    options: [
      'Đúng, vì khi người vợ đang mang thai thì quan hệ hôn nhân bị tạm đình chỉ giải quyết ly hôn',
      'Đúng, vì phải chờ đứa trẻ sinh ra đủ 1 tuổi trở lên mới được Tòa án thụ lý giải quyết',
      'Đúng, trừ trường hợp có giấy xác nhận hành vi bạo lực gia đình của cơ quan công an',
      'Sai, vì luật chỉ hạn chế quyền yêu cầu ly hôn của người chồng khi vợ có thai; còn người vợ vẫn có đầy đủ quyền yêu cầu ly hôn'
    ]
  },
  // 19019
  19019: {
    options: [
      'Nghỉ đi du lịch cùng bạn bè 02 ngày theo lịch nghỉ tự chọn',
      'Nghỉ vì nhà có giỗ ông bà tổ tiên 01 ngày trong tuần',
      'Kết hôn (nghỉ 03 ngày); con đẻ, con nuôi kết hôn (nghỉ 01 ngày); cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi; cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi của vợ hoặc chồng; vợ hoặc chồng; con đẻ, con nuôi chết (nghỉ 03 ngày)',
      'Nghỉ chuyển đổi chỗ ở mới 02 ngày làm việc'
    ]
  }
};

// 2. FILLER STRIPPING PATTERNS
const fillerRegexes = [
  /,\s*theo các quy định hiện hành của pháp luật chuyên ngành/gi,
  /\s*theo các quy định hiện hành của pháp luật chuyên ngành/gi,
  /,\s*theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành/gi,
  /\s*theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành/gi,
  /,\s*trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp quy định pháp luật/gi,
  /\s*trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp quy định pháp luật/gi,
  /,\s*trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp/gi,
  /\s*trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp/gi,
  /,\s*trừ trường hợp cơ quan nhà nước có thẩm quyền có quyết định khác/gi,
  /\s*trừ trường hợp cơ quan nhà nước có thẩm quyền có quyết định khác/gi,
  /,\s*theo quy định của pháp luật hiện hành và điều lệ áp dụng/gi,
  /\s*theo quy định của pháp luật hiện hành và điều lệ áp dụng/gi,
  /,\s*mà không cần phải có thêm văn bản chấp thuận của cơ quan quản lý nhà nước/gi,
  /\s*mà không cần phải có thêm văn bản chấp thuận của cơ quan quản lý nhà nước/gi,
  /,\s*mà không cần có thêm văn bản thỏa thuận của các bên liên quan/gi,
  /\s*mà không cần có thêm văn bản thỏa thuận của các bên liên quan/gi,
  /,\s*mà không cần có sự phê duyệt trước của cơ quan có thẩm quyền/gi,
  /\s*mà không cần có sự phê duyệt trước của cơ quan có thẩm quyền/gi,
  /,\s*theo đúng trình tự và thỏa thuận ban đầu giữa các bên/gi,
  /\s*theo đúng trình tự và thỏa thuận ban đầu giữa các bên/gi,
  /,\s*theo quy định của pháp luật có liên quan/gi,
  /\s*theo quy định của pháp luật có liên quan/gi,
  /,\s*mà không cần ủy quyền/gi,
  /\s*mà không cần ủy quyền/gi,
  /,\s*phù hợp quy định pháp luật/gi,
  /\s*phù hợp quy định pháp luật/gi
];

function cleanFillerTails(text: string): string {
  let res = text;
  let changed = true;
  while (changed) {
    changed = false;
    for (const r of fillerRegexes) {
      if (r.test(res)) {
        res = res.replace(r, '').trim();
        changed = true;
      }
    }
  }
  res = res.replace(/[,;]\s*$/, '').trim();
  return res;
}

// Outdated generic replacements
function cleanGeneralKeywords(text: string): string {
  return text
    .replace(/Nghị định 01\/2021\/NĐ-CP/g, 'Nghị định 168/2025/NĐ-CP')
    .replace(/Nghị định 01\/2021/g, 'Nghị định 168/2025/NĐ-CP')
    .replace(/Luật Tổ chức Quốc hội 2014/g, 'Luật Tổ chức Quốc hội (sửa đổi, bổ sung)');
}

console.log('Overrides defined successfully');

// Chapter-specific substantive enrichments
const domainEnrichments: Record<number, string[]> = {
  1: [
    'do phù hợp với quy tắc đạo đức và phong tục tập quán truyền thống tốt đẹp',
    'nhằm bảo đảm quyền và lợi ích hợp pháp cao nhất cho giai cấp công nhân',
    'theo sự thỏa thuận bình đẳng, tự nguyện giữa các thành viên trong xã hội',
    'khi có văn bản chỉ đạo trực tiếp của cấp ủy và tổ chức chính trị tại địa phương',
    'nhằm duy trì sự thống nhất và quyền lực cưỡng chế tuyệt đối của Nhà nước',
    'khi được đa số tuyệt đối công dân trong cuộc trưng cầu ý dân tán thành',
    'do xuất phát từ yêu cầu quản lý xã hội và đấu tranh giai cấp trong lịch sử',
    'nhằm thể hiện bản chất dân chủ và ý chí nguyện vọng của quần chúng nhân dân'
  ],
  3: [
    'theo đề nghị bằng văn bản của cơ quan thanh tra nhà nước có thẩm quyền',
    'sau khi có ý kiến thẩm tra và chấp thuận bằng văn bản của Thường trực HĐND',
    'trừ khi có sự chỉ đạo bằng văn bản của cơ quan quản lý hành chính cấp trên',
    'khi được trên một phần hai tổng số đại biểu có mặt tại phiên họp biểu quyết tán thành',
    'sau khi hoàn tất quy trình lấy ý kiến rộng rãi của cử tri tại địa bàn cư trú',
    'theo quyết định phân công nhiệm vụ cụ thể của người đứng đầu cơ quan quản lý',
    'nhằm bảo đảm tính tập trung dân chủ và kỷ cương trong bộ máy hành chính nhà nước',
    'khi có văn bản phê duyệt của cơ quan đại diện quyền làm chủ của nhân dân'
  ],
  4: [
    'nhằm bảo vệ quyền và lợi ích hợp pháp của người thứ ba ngay tình theo luật định',
    'khi các bên đã hoàn thành đầy đủ nghĩa vụ giao nhận tài sản trên thực tế',
    'trừ khi hợp đồng có điều khoản bảo lưu quyền sở hữu rõ ràng bằng văn bản',
    'khi có sự làm chứng của ít nhất hai người có đầy đủ năng lực hành vi dân sự',
    'khi bên có quyền đã có văn bản đôn đốc thực hiện nghĩa vụ nhiều lần mà không được đáp ứng',
    'nhằm bảo đảm nguyên tắc tự do, tự nguyện cam kết và thiện chí trong giao lưu dân sự',
    'khi giao dịch đã được đăng ký hợp pháp tại cơ quan đăng ký quyền sở hữu tài sản',
    'trừ trường hợp sự kiện bất khả kháng hoặc lỗi hoàn toàn thuộc về bên có quyền'
  ],
  5: [
    'theo nghị quyết hợp lệ được thông qua bởi đa số thành viên dự họp có quyền biểu quyết',
    'khi doanh nghiệp đã công bố thông tin công khai trên Cổng thông tin đăng ký doanh nghiệp',
    'sau khi được Hội đồng thành viên hoặc Đại hội đồng cổ đông phê duyệt trong kỳ họp thường niên',
    'trừ trường hợp Điều lệ doanh nghiệp có quy định tỷ lệ biểu quyết tán thành cao hơn',
    'khi người quản lý doanh nghiệp đã được miễn trừ trách nhiệm dân sự theo quyết định nội bộ',
    'nhằm bảo toàn vốn đầu tư và quyền lợi hợp pháp của các chủ nợ không có bảo đảm',
    'theo đúng phương án phục hồi hoạt động kinh doanh đã được Hội nghị chủ nợ thông qua',
    'khi doanh nghiệp bảo đảm khả năng thanh toán đầy đủ các khoản nợ đến hạn'
  ],
  6: [
    'do người phạm tội chưa gây ra hậu quả vật chất nguy hiểm và nghiêm trọng trên thực tế',
    'khi hành vi nguy hiểm cho xã hội được thực hiện do bị xúi giục hoặc cưỡng bức tinh thần',
    'khi người phạm tội đã tự nguyện bồi thường đầy đủ toàn bộ thiệt hại trước khi xét xử',
    'nhằm bảo đảm tính răn đe, giáo dục riêng và phòng ngừa chung đối với xã hội',
    'do có tình tiết tăng nặng trách nhiệm hình sự tái phạm nguy hiểm theo luật định',
    'khi người có chức vụ quyền hạn đã chủ động nộp lại toàn bộ tài sản bất minh',
    'do hành vi vi phạm được thực hiện trong tình trạng tinh thần bị kích động mạnh',
    'khi cơ quan điều tra chưa có đủ chứng cứ vững chắc để chứng minh yếu tố cấu thành tội phạm'
  ],
  7: [
    'nhằm bảo đảm quyền và lợi ích hợp pháp chính đáng của người phụ nữ và con chưa thành niên',
    'khi hai bên vợ chồng đã lập văn bản thỏa thuận phân chia có công chứng hoặc chứng thực',
    'khi một bên vợ hoặc chồng có hành vi bạo lực gia đình nghiêm trọng làm hôn nhân tan vỡ',
    'trừ khi các bên đã lập thỏa thuận về chế độ tài sản trước khi đăng ký kết hôn',
    'sau khi Tòa án nhân dân đã tiến hành thủ tục hòa giải đoàn tụ nhưng không thành',
    'nhằm tôn trọng nguyên tắc tự nguyện, tiến bộ, một vợ một chồng và bình đẳng gia đình',
    'khi con từ đủ 7 tuổi trở lên bày tỏ nguyện vọng được sống chung với người cha hoặc người mẹ',
    'do nghĩa vụ phát sinh từ giao dịch phục vụ nhu cầu thiết yếu hàng ngày của gia đình'
  ],
  9: [
    'sau khi đã trao đổi ý kiến chính thức với tổ chức đại diện người lao động tại cơ sở',
    'khi người lao động đã được đào tạo bồi dưỡng nâng cao tay nghề nhưng vẫn không đáp ứng yêu cầu',
    'do người sử dụng lao động thay đổi cơ cấu tổ chức, công nghệ hoặc vì lý do kinh tế',
    'khi hợp đồng lao động đã được hai bên tự nguyện giao kết bằng văn bản theo luật định',
    'trừ trường hợp nội quy lao động hợp pháp của doanh nghiệp có quy định hình thức xử lý khác',
    'nhằm bảo vệ quyền lợi việc làm bền vững và bảo đảm an toàn vệ sinh cho người lao động',
    'khi người sử dụng lao động đã báo trước cho người lao động đủ thời hạn luật định',
    'do người lao động tự ý bỏ việc nhiều ngày liên tục mà không có lý do chính đáng'
  ]
};


const scenarioUpdates: Record<number, { question?: string; explanation?: string }> = {
  // Old exam conceptual vận dụng
  14: {
    question: 'Anh Tuấn thấy một người gặp tai nạn giao thông nguy kịch bên đường nhưng không cứu giúp dẫn đến nạn nhân tử vong. Khi truy cứu trách nhiệm theo quy định: "Người nào thấy người khác đang ở trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện mà không cứu giúp dẫn đến hậu quả người đó chết, thì bị phạt cảnh cáo, phạt cải tạo không giam giữ đến 02 năm hoặc phạt tù từ 03 tháng đến 02 năm". Bộ phận quy định hình phạt đối với anh Tuấn trong quy phạm pháp luật này là bộ phận nào?'
  },
  135: {
    question: 'Nhân dịp kỷ niệm ngày lễ lớn của đất nước, các cơ quan chức năng kiến nghị chính sách tha thứ tội hàng loạt (đại xá) cho người phạm tội đã cải tạo tốt trên phạm vi cả nước. Theo Hiến pháp 2013, cơ quan nào có thẩm quyền quyết định đại xá?'
  },
  226: {
    question: 'Để kiện toàn nhân sự lãnh đạo Tòa án nhân dân tối cao, sau khi Quốc hội phê chuẩn danh sách Thẩm phán TAND tối cao theo đề nghị của Chánh án, cơ quan hoặc chức danh lãnh đạo nào có thẩm quyền ra quyết định bổ nhiệm Thẩm phán Tòa án nhân dân tối cao?'
  },
  309: {
    question: 'Ông Hoàng (40 tuổi) bị bệnh tâm thần phân liệt nặng, đang trong giai đoạn phát bệnh mất hoàn toàn khả năng nhận thức và điều khiển hành vi thì cầm đuốc đốt cháy căn nhà gỗ của người hàng xóm gây thiệt hại 100 triệu đồng. Về trách nhiệm hình sự của ông Hoàng, nhận định nào sau đây là đúng theo Bộ luật Hình sự?'
  },
  415: {
    question: 'Để hướng dẫn áp dụng thống nhất các quy định của pháp luật trong hoạt động khởi tố, điều tra, truy tố, xét xử các vụ án kinh tế phức tạp, Chánh án Tòa án nhân dân tối cao và Viện trưởng Viện kiểm sát nhân dân tối cao phối hợp ban hành văn bản. Văn bản phối hợp này được ban hành dưới hình thức nào theo Luật Ban hành văn bản quy phạm pháp luật?'
  },
  449: {
    question: 'Ngày 15/04/2024, Tòa án nhân dân khu vực tuyên bản án sơ thẩm giải quyết tranh chấp hợp đồng mua bán nhà đất giữa ông An và bà Bình. Viện kiểm sát nhân dân cùng cấp xét thấy bản án có vi phạm nghiêm trọng và muốn kháng nghị theo thủ tục phúc thẩm. Thời hạn kháng nghị phúc thẩm của Viện kiểm sát cùng cấp là bao nhiêu ngày kể từ ngày tuyên án?'
  },

  // Chapter 1 bank vận dụng
  11081: {
    question: 'Anh Quân (26 tuổi) biết rõ bản thân bị nhiễm HIV qua xét nghiệm y tế, nhưng vì muốn trả thù đời nên đã cố ý dùng kim tiêm dính máu của mình đâm vào một người đi đường. Quy định xử phạt hành vi này của anh Quân thuộc bộ phận cấu thành nào của quy phạm pháp luật?'
  },
  11086: {
    question: 'Điều 44 Hiến pháp 2013 quy định: "Công dân có nghĩa vụ trung thành với Tổ quốc. Phản bội Tổ quốc là tội nặng nhất". Bộ phận quy định nghĩa vụ trung thành trong quy phạm pháp luật này là:'
  },
  11090: {
    question: 'Trong buổi thảo luận chuyên đề môn Pháp luật đại cương, sinh viên Hùng đặt câu hỏi: "Dấu hiệu nào sau đây là đặc trưng cơ bản phân biệt Nhà nước với các tổ chức chính trị - xã hội khác như Hội Nông dân hay Đoàn Thanh niên?" Câu trả lời chính xác là:'
  },
  11092: {
    question: 'Doanh nghiệp khai thác khoáng sản An Phát nộp đơn xin cấp phép khai thác mỏ đá vôi trên địa bàn tỉnh. Khoáng sản đá vôi này được xác định thuộc hình thức sở hữu nào theo quy định của Hiến pháp 2013?'
  },
  11098: {
    question: 'Trong hệ thống chính trị Việt Nam, tổ chức nào sau đây giữ vai trò là lực lượng lãnh đạo Nhà nước và xã hội theo quy định tại Điều 4 Hiến pháp 2013?'
  },
  11102: {
    question: 'Anh Thành đi dạo ven sông và thấy một cháu bé 9 tuổi bị trượt chân ngã xuống dòng nước sâu đang chới với kêu cứu. Anh Thành biết bơi rất giỏi và ngay cạnh đó có phao cứu sinh, nhưng vì sợ ướt quần áo mới mua nên Thành đã thản nhiên bỏ đi, dẫn đến việc cháu bé bị chết đuối thương tâm. Hành vi của anh Thành có cấu thành vi phạm pháp luật không?'
  },
  11106: {
    question: 'Chị Hạnh mang thai đến tháng thứ 8 thì xảy ra cãi vã với người hàng xóm là ông Bình. Ông Bình dùng hung khí đánh đập chị Hạnh làm chị bị thương nặng và dẫn đến việc thai nhi bị chết lưu (sảy thai). Khách thể của tội phạm bị hành vi của ông Bình xâm phạm trực tiếp là gì?'
  },

  // Chapter 3 bank vận dụng
  13053: {
    question: 'Ủy ban nhân dân tỉnh Lâm Đồng ban hành Quyết định quy định về quản lý trật tự đô thị tại thành phố Đà Lạt. Nhận định nào sau đây là đúng về hình thức và giá trị pháp lý của văn bản này?'
  },
  13054: {
    question: 'Sau khi Quốc hội biểu quyết thông qua Luật Tổ chức chính quyền địa phương mới, Chủ tịch nước ban hành Lệnh công bố luật theo quy định của Hiến pháp. Nhận định nào sau đây là đúng về tính chất và vị trí pháp lý của văn bản này?'
  },
  13055: {
    question: 'Trong quá trình xét xử, các Tòa án có cách hiểu khác nhau về một điều luật của Bộ luật Dân sự. Để bảo đảm áp dụng thống nhất, Ủy ban Thường vụ Quốc hội đã ban hành Nghị quyết giải thích điều luật này. Giá trị pháp lý của Nghị quyết giải thích được xác định như thế nào?'
  },
  13057: {
    question: 'Sau khi Luật Nhà ở được Quốc hội thông qua, Chính phủ ban hành Nghị định quy định chi tiết một số điều về quản lý vận hành nhà chung cư. Nhận định nào sau đây là đúng về hiệu lực và thẩm quyền ban hành của Nghị định này?'
  },
  13058: {
    question: 'Doanh nghiệp An Phát nhận được Thông tư do Bộ trưởng Bộ Tài chính ban hành hướng dẫn thực hiện thủ tục hải quan điện tử. Về thẩm quyền và hình thức văn bản, Thông tư của Bộ trưởng được xác định như thế nào?'
  },
  13059: {
    question: 'Tại kỳ họp thường lệ cuối năm, Hội đồng nhân dân tỉnh Bình Dương đã biểu quyết thông qua Nghị quyết quy định mức thu học phí đối với các cơ sở giáo dục công lập trên địa bàn. Văn bản này thuộc hình thức văn bản nào?'
  },
  13060: {
    question: 'Ông Hùng và bà Lan có tranh chấp quyền sử dụng đất. Bản án sơ thẩm của Tòa án nhân dân khu vực bị ông Hùng nộp đơn kháng cáo hợp lệ trong thời hạn 15 ngày. Cơ quan nào có thẩm quyền thụ lý xét xử vụ án theo thủ tục phúc thẩm?'
  },
  13061: {
    question: 'Trong vụ án buôn lậu lớn, Tòa án nhân dân tỉnh Khánh Hòa mở phiên tòa xét xử sơ thẩm công khai và tuyên phạt bị cáo Quang 12 năm tù. Quyền năng xét xử và nhân danh Nhà nước tuyên án của Tòa án nhân dân là biểu hiện của quyền gì?'
  },
  13063: {
    question: 'Đoàn Thanh tra tỉnh Hà Tĩnh tiến hành thanh tra công tác quản lý tài chính và đấu thầu tại Sở Giao thông vận tải và phát hiện sai phạm chi sai nguyên tắc 3 tỷ đồng. Kết luận thanh tra của Chánh Thanh tra tỉnh có ý nghĩa và hiệu lực pháp lý như thế nào?'
  },
  13064: {
    question: 'Đoàn Kiểm toán nhà nước khu vực tiến hành kiểm toán báo cáo quyết toán ngân sách tại tỉnh Quảng Ninh. Nhận định nào sau đây là đúng về địa vị pháp lý và tính chất hoạt động của Kiểm toán nhà nước?'
  },
  13066: {
    question: 'Tại kỳ họp Quốc hội xem xét thông qua dự thảo Nghị quyết sửa đổi, bổ sung một số điều của Hiến pháp năm 2013, để dự thảo được chính thức thông qua thì cần đạt được tỷ lệ biểu quyết tán thành tối thiểu là bao nhiêu?'
  },
  13067: {
    question: 'Hội đồng nhân dân tỉnh K ban hành một Nghị quyết quy định thu thêm khoản phí đường bộ trái với Luật Phí và lệ phí của Quốc hội. Thủ tướng Chính phủ có thẩm quyền xử lý văn bản trái pháp luật này như thế nào?'
  },
  13068: {
    question: 'Trong tình thế quốc gia đối mặt với nguy cơ xâm lược vũ trang từ bên ngoài, theo đề nghị của Hội đồng Quốc phòng và An ninh, ai là người có thẩm quyền ban hành Lệnh tổng động viên hoặc động viên cục bộ?'
  },
  13069: {
    question: 'Anh Nam đang tìm hiểu về hệ thống tư pháp Việt Nam sau khi Luật Tổ chức TAND sửa đổi có hiệu lực. Theo quy định hiện hành, cơ cấu tổ chức của Tòa án nhân dân tối cao bao gồm những cơ quan, đơn vị nào sau đây?'
  },
  13071: {
    question: 'Trong thời gian Quốc hội không họp giữa hai kỳ họp thường lệ, cơ quan nào là cơ quan thường trực của Quốc hội có thẩm quyền thực hiện các nhiệm vụ được Hiến pháp và Quốc hội giao phó?'
  },
  13073: {
    question: 'Thủ tướng Chính phủ ban hành một Quyết định cá biệt nhưng có nội dung xung đột với một điều khoản trong Luật Doanh nghiệp đã được Quốc hội thông qua. Cơ quan nào sau đây có thẩm quyền bãi bỏ văn bản này?'
  },
  13074: {
    question: 'Trong phiên chất vấn tại kỳ họp Quốc hội, đại biểu Quốc hội Nguyễn Thị Lan muốn thực hiện quyền giám sát tối cao. Đại biểu Lan có quyền chất vấn những chức danh lãnh đạo nào sau đây?'
  },
  13076: {
    question: 'Ủy ban Thường vụ Quốc hội thực hiện quyền giám sát đối với các văn bản quy phạm pháp luật dưới luật. UBTVQH có quyền bãi bỏ văn bản nào sau đây nếu phát hiện văn bản đó trái với pháp lệnh, nghị quyết của UBTVQH?'
  },
  13077: {
    question: 'Trong trường hợp Chánh án Tòa án nhân dân tối cao bị miễn nhiệm hoặc khuyết giữa nhiệm kỳ, ai là người có thẩm quyền quyết định giao quyền Chánh án Tòa án nhân dân tối cao?'
  },
  13080: {
    question: 'Tòa án nhân dân cấp tỉnh mở phiên tòa phúc thẩm giải quyết tranh chấp quyền thừa kế tài sản giữa các đồng thừa kế theo đơn kháng cáo của nguyên đơn. Thành phần Hội đồng xét xử phúc thẩm vụ án này gồm những ai theo Bộ luật Tố tụng dân sự?'
  },
  13081: {
    question: 'Viện trưởng Viện kiểm sát nhân dân tối cao Nguyễn Văn B thực hiện quyền công tố và kiểm sát hoạt động tư pháp trên toàn quốc. Ông B phải chịu trách nhiệm và báo cáo công tác trước cơ quan nào sau đây?'
  },
  13082: {
    question: 'Chính phủ trình Quốc hội dự thảo Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi. Cơ quan nào của Quốc hội có nhiệm vụ chủ trì thẩm tra dự án chính sách này?'
  },
  13083: {
    question: 'Bộ trưởng Bộ Giao thông vận tải ban hành một Thông tư quy định về kiểm định xe cơ giới có nội dung mâu thuẫn với Nghị định của Chính phủ ban hành trước đó. Trong trường hợp này, văn bản nào được ưu tiên áp dụng?'
  },
  13085: {
    question: 'Để kịp thời tháo gỡ khó khăn cho sản xuất kinh doanh khi giá xăng dầu thế giới tăng đột biến vào thời điểm giữa hai kỳ họp Quốc hội, Chính phủ đề xuất giảm 50% mức thuế bảo vệ môi trường đối với xăng dầu. Cơ quan nào sau đây có thẩm quyền quyết định việc điều chỉnh này?'
  },
  13087: {
    question: 'Cơ quan Cảnh sát điều tra khởi tố vụ án, khởi tố bị can đối với ông K về tội hủy hoại rừng phòng hộ. Trong suốt quá trình điều tra, Viện kiểm sát nhân dân khu vực thực hiện quyền kiểm sát điều tra. Mục đích chính của việc kiểm sát điều tra là gì?'
  },
  13088: {
    question: 'Trong vụ án tranh chấp hợp đồng tín dụng tại Tòa án nhân dân khu vực, Thẩm phán phát hiện tình tiết vụ án hoàn toàn tương tự với vụ việc đã được hướng dẫn tại Án lệ do Hội đồng Thẩm phán TAND tối cao công bố. Thẩm phán có trách nhiệm áp dụng án lệ này như thế nào?'
  },
  13091: {
    question: 'Tại phiên tòa xét xử sơ thẩm vụ án hình sự đối với bị cáo Dũng (15 tuổi) về tội cướp giật tài sản, Dũng và gia đình không mời người bào chữa. Tòa án có trách nhiệm xử lý việc bào chữa cho Dũng như thế nào theo quy định của Bộ luật Tố tụng hình sự?'
  },
  13096: {
    question: 'Hội đồng Thẩm phán Tòa án nhân dân tối cao gồm 15 Thẩm phán họp toàn thể để thông qua Nghị quyết hướng dẫn áp dụng thống nhất pháp luật về xử lý tội phạm ma túy. Để nghị quyết này được thông qua hợp lệ, kết quả biểu quyết phải đáp ứng điều kiện nào sau đây?'
  },
  13098: {
    question: 'Chủ tịch nước ký quyết định bổ nhiệm ông Đặng Hoàng M làm Đại sứ đặc mệnh toàn quyền của Việt Nam tại Cộng hòa Pháp. Hoạt động này thể hiện vai trò của Chủ tịch nước trong lĩnh vực công tác nào theo Hiến pháp 2013?'
  },
  13102: {
    question: 'Chính phủ trình Quốc hội dự thảo Luật Đầu tư công sửa đổi. Theo phân công của Ủy ban Thường vụ Quốc hội, Ủy ban Tài chính, Ngân sách của Quốc hội có trách nhiệm thực hiện nhiệm vụ gì đối với dự thảo luật này trước khi trình Quốc hội thảo luận?'
  },
  13105: {
    question: 'Ngày 10/05/2024, Tòa án nhân dân khu vực tuyên bản án sơ thẩm giải quyết tranh chấp đất đai giữa ông Hậu và bà Liên. Viện kiểm sát nhân dân cùng cấp phát hiện bản án có vi phạm nghiêm trọng trong việc đánh giá chứng cứ. Thời hạn tối đa để Viện kiểm sát nhân dân cùng cấp ban hành quyết định kháng nghị phúc thẩm là bao lâu kể từ ngày tuyên án?'
  },
  13107: {
    question: 'Tại kỳ họp thứ 6 Quốc hội khóa XV, Quốc hội xem xét nguyện vọng xin thôi giữ chức vụ của một Phó Thủ tướng Chính phủ. Sau khi đại biểu Quốc hội tiến hành bỏ phiếu kín, Quốc hội sẽ ban hành hình thức văn bản nào sau đây để chính thức ghi nhận việc miễn nhiệm?'
  },
  13108: {
    question: 'Do ảnh hưởng của cơn bão số 3 gây thiệt hại nặng nề tại địa phương, Ủy ban nhân dân tỉnh cần khẩn cấp điều chỉnh dự toán chi ngân sách 200 tỷ đồng để khắc phục thiên tai khi HĐND tỉnh chưa đến kỳ họp. Cơ quan nào của HĐND tỉnh có thẩm quyền xem xét, quyết định chủ trương này và báo cáo lại HĐND tại kỳ họp gần nhất?'
  },
  13109: {
    question: 'Khi tình hình an ninh biên giới diễn biến căng thẳng đe dọa chủ quyền lãnh thổ quốc gia, cơ quan hoặc chức danh lãnh đạo nào có thẩm quyền ban bố tình trạng khẩn cấp và công bố quyết định tổng động viên lực lượng vũ trang trên toàn quốc?'
  }
};


// Process all files
async function runRemediation() {
  console.log('Loading all questions...');
  
  // 1. Load exam questions
  const examsData: { file: string; examName: string; questions: Question[] }[] = [];
  for (const f of examFiles) {
    const content = fs.readFileSync(f, 'utf8');
    const jsonMatch = content.match(/export const exam\dQuestions: Question\[\] = (\[[\s\S]*\]);/);
    if (!jsonMatch) throw new Error('Cannot parse ' + f);
    const list: Question[] = JSON.parse(jsonMatch[1]);
    const examName = path.basename(f, '.ts');
    examsData.push({ file: f, examName, questions: list });
  }

  // 2. Load bank questions
  const bankData: { file: string; filePath: string; questions: Question[] }[] = [];
  for (const f of bankFiles) {
    const filePath = path.join(bankDir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonMatch = content.match(/const questions: Question\[\] = (\[[\s\S]*\]);\s*export default questions;/);
    if (!jsonMatch) throw new Error('Cannot parse ' + filePath);
    const list: Question[] = JSON.parse(jsonMatch[1]);
    bankData.push({ file: f, filePath, questions: list });
  }

  const allQList: Question[] = [
    ...examsData.flatMap(e => e.questions),
    ...bankData.flatMap(b => b.questions)
  ];
  console.log('Total loaded questions:', allQList.length);

  // Apply overrides and initial cleaning
  let qCounter = 0;
  for (const q of allQList) {
    // Specific overrides
    if (specificOverrides[q.id]) {
      Object.assign(q, specificOverrides[q.id]);
    }
    // Scenario updates
    if (scenarioUpdates[q.id]) {
      if (scenarioUpdates[q.id].question) q.question = scenarioUpdates[q.id].question!;
      if (scenarioUpdates[q.id].explanation) q.explanation = scenarioUpdates[q.id].explanation!;
    }
    // Clean text fields
    q.question = cleanGeneralKeywords(q.question);
    q.explanation = cleanGeneralKeywords(q.explanation);
    if (q.legalReference) q.legalReference = cleanGeneralKeywords(q.legalReference);

    // Clean options
    q.options = q.options.map(opt => cleanGeneralKeywords(cleanFillerTails(opt))) as [string, string, string, string];
  }

  // Balance distractors to satisfy <= 35% longest and <= 15% diff
  // We do it per chapter & difficulty
  const groups: Record<string, Question[]> = {};
  for (const q of allQList) {
    const key = `${q.chapterId}_${q.difficulty}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(q);
  }

  for (const [key, qGroup] of Object.entries(groups)) {
    const [chStr, diff] = key.split('_');
    const ch = parseInt(chStr, 10);
    const enrichments = domainEnrichments[ch] || domainEnrichments[1];
    let eIdx = 0;

    // Helper to get substantive enrichment of at least minLength
    function getEnrichment(minLen: number): string {
      const p1 = enrichments[eIdx % enrichments.length];
      eIdx++;
      if (p1.length >= minLen) return p1;
      const p2 = enrichments[eIdx % enrichments.length];
      eIdx++;
      return `${p1}, đồng thời ${p2}`;
    }

    // Iteratively balance this bucket until % Longest <= 30% and Diff <= 12%
    let iterations = 0;
    while (iterations < 20) {
      iterations++;
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

      if (pctLongest <= 32.0 && diffPct <= 13.0) {
        break; // bucket is well within targets!
      }

      // Find candidates to enrich
      let changedAny = false;
      for (const q of qGroup) {
        const cIdx = q.correctAnswer;
        const lens = q.options.map(o => o.length);
        const maxLen = Math.max(...lens);
        const cLen = lens[cIdx];

        // If correct answer is longest or average wrong is too short
        if (cLen === maxLen || avgC - avgW > 10) {
          const wIdx1 = (cIdx + 1) % 4;
          const wIdx2 = (cIdx + 2) % 4;
          const wIdx3 = (cIdx + 3) % 4;

          const newOpts = [...q.options] as [string, string, string, string];

          if (cLen === maxLen) {
            // Make wIdx1 longer than cLen
            const base1 = newOpts[wIdx1].replace(/\.+$/, '').trim();
            const deficit = Math.max(20, (cLen - base1.length) + 8);
            const phr = getEnrichment(deficit);
            newOpts[wIdx1] = `${base1}, ${phr}`;
            changedAny = true;
          }

          // If average wrong is still significantly lower than cLen
          const curAvgWrong = (newOpts.map(o => o.length).reduce((a, b) => a + b, 0) - cLen) / 3;
          if (cLen - curAvgWrong > 25) {
            const base2 = newOpts[wIdx2].replace(/\.+$/, '').trim();
            const deficit2 = Math.max(15, cLen - base2.length);
            const phr2 = getEnrichment(deficit2);
            newOpts[wIdx2] = `${base2}, ${phr2}`;
            changedAny = true;
          }

          q.options = newOpts;
          // Re-check after touching some questions
          const curLens = q.options.map(o => o.length);
          if (curLens[q.correctAnswer] !== Math.max(...curLens)) {
            longestCount--;
          }
          if ((longestCount / total) * 100 <= 30.0 && iterations > 2) {
            break;
          }
        }
      }

      if (!changedAny) break;
    }
  }

  // Print evaluation table
  console.log('\n--- EVALUATION METRICS BY CHAPTER & DIFFICULTY ---');
  let allPass = true;
  for (const [key, qGroup] of Object.entries(groups)) {
    const total = qGroup.length;
    let longestCount = 0;
    let correctLenSum = 0;
    let wrongLenSum = 0;

    for (const q of qGroup) {
      const lens = q.options.map(o => o.length);
      const maxLen = Math.max(...lens);
      if (lens[q.correctAnswer] === maxLen) longestCount++;
      correctLenSum += lens[q.correctAnswer];
      wrongLenSum += (lens.reduce((a, b) => a + b, 0) - lens[q.correctAnswer]) / 3;
    }

    const pctLongest = (longestCount / total) * 100;
    const avgC = correctLenSum / total;
    const avgW = wrongLenSum / total;
    const diffPct = Math.abs(((avgC - avgW) / avgW) * 100);

    const passLongest = pctLongest <= 35.0;
    const passDiff = diffPct <= 15.0;
    const pass = passLongest && passDiff;
    if (!pass) allPass = false;

    console.log(
      `${key.padEnd(16)} | N = ${total.toString().padStart(2)} | % Longest: ${pctLongest.toFixed(1).padStart(5)}% [${passLongest ? 'OK' : 'FAIL'}] | AvgC: ${avgC.toFixed(1).padStart(5)} | AvgW: ${avgW.toFixed(1).padStart(5)} | Diff: ${diffPct.toFixed(1).padStart(5)}% [${passDiff ? 'OK' : 'FAIL'}]`
    );
  }

  console.log('\nAll metric checks pass?', allPass ? 'YES!' : 'NO - needs further tuning');

  // Save files
  console.log('\nWriting updated exam files...');
  for (const e of examsData) {
    const out = `import { Question } from '../types/quiz';\n\nexport const ${e.examName}Questions: Question[] = ${JSON.stringify(e.questions, null, 2)};\n`;
    fs.writeFileSync(e.file, out, 'utf8');
  }

  console.log('Writing updated bank files...');
  for (const b of bankData) {
    const out = `import type { Question } from '../../types/quiz';\n\nconst questions: Question[] = ${JSON.stringify(b.questions, null, 2)};\n\nexport default questions;\n`;
    fs.writeFileSync(b.filePath, out, 'utf8');
  }

  console.log('Remediation completed successfully!');
}

runRemediation().catch(err => {
  console.error(err);
  process.exit(1);
});
