import { Question } from '../src/types/quiz';
import { writeChapterParts } from './utils';

const chapterId = 1;
const chapterName = 'Chương 1: Những vấn đề chung về Nhà nước và Pháp luật';

// Cần: 11 dễ, 46 trung bình, 53 vận dụng = 110 câu (IDs 11001 - 11110)
// Đáp án chia đều 0, 1, 2, 3 (~27-28 câu mỗi đáp án)
export const questions: Question[] = [];

let currentId = 11001;

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
    chapterId: 1,
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
// 11 CÂU DỄ (Nhận biết định nghĩa, khái niệm)
// ==========================================
addQ(
  'dễ',
  'Theo học thuyết Mác - Lênin, nguồn gốc sâu xa dẫn đến sự xuất hiện của Nhà nước là gì?',
  [
    'Sự phát triển của lực lượng sản xuất dẫn đến sự xuất hiện chế độ tư hữu và phân hóa giai cấp',
    'Ý chí tối cao của Thượng đế muốn thiết lập trật tự trần gian',
    'Sự thỏa thuận tự nguyện giữa các thành viên trong xã hội nguyên thủy để bảo vệ quyền lợi chung',
    'Nhu cầu liên kết các gia tộc đơn lẻ để chống lại thiên tai khắc nghiệt'
  ],
  0,
  'Theo quan điểm chủ nghĩa Mác - Lênin, nguyên nhân kinh tế sâu xa làm xuất hiện nhà nước là sự phát triển của lực lượng sản xuất làm nảy sinh chế độ tư hữu và phân chia xã hội thành các giai cấp đối kháng.',
  'Giáo trình Pháp luật đại cương - Nguồn gốc nhà nước'
);

addQ(
  'dễ',
  'Thuộc tính nào của pháp luật thể hiện ranh giới rõ ràng giữa hành vi hợp pháp và hành vi trái pháp luật?',
  [
    'Tính quy phạm phổ biến',
    'Tính xác định chặt chẽ về mặt hình thức',
    'Tính quyền lực nhà nước bắt buộc chung',
    'Tính cưỡng chế tuyệt đối của quân đội'
  ],
  1,
  'Tính xác định chặt chẽ về hình thức đòi hỏi câu từ, điều khoản pháp luật phải rõ ràng, chuẩn xác, không trừu tượng để mọi chủ thể nhận biết được ranh giới giữa được phép và bị cấm.',
  'Giáo trình Pháp luật đại cương - Bản chất và thuộc tính của pháp luật'
);

addQ(
  'dễ',
  'Cơ cấu của một quy phạm pháp luật thông thường gồm có các bộ phận nào?',
  [
    'Mở đầu, nội dung và kết luận',
    'Chủ thể, khách thể và nội dung',
    'Giả định, quy định và chế tài',
    'Điều kiện, hoàn cảnh và mức xử phạt'
  ],
  2,
  'Quy phạm pháp luật hoàn chỉnh thường gồm 3 bộ phận cấu thành: Giả định (nêu điều kiện, hoàn cảnh), Quy định (nêu quy tắc xử sự) và Chế tài (nêu biện pháp tác động bất lợi).',
  'Giáo trình Pháp luật đại cương - Cấu trúc quy phạm pháp luật'
);

addQ(
  'dễ',
  'Bộ phận nào trong quy phạm pháp luật nêu lên biện pháp tác động mà Nhà nước dự kiến áp dụng đối với chủ thể không thực hiện đúng mệnh lệnh?',
  [
    'Giả định',
    'Quy định',
    'Khách thể',
    'Chế tài'
  ],
  3,
  'Chế tài là bộ phận chỉ ra các biện pháp tác động mang tính cưỡng chế của Nhà nước dự kiến áp dụng khi chủ thể vi phạm bộ phận quy định của quy phạm.',
  'Giáo trình Pháp luật đại cương - Bộ phận Chế tài của QPPL'
);

addQ(
  'dễ',
  'Khả năng của chủ thể có được các quyền chủ thể và nghĩa vụ pháp lý theo quy định của pháp luật được gọi là gì?',
  [
    'Năng lực pháp luật',
    'Năng lực hành vi pháp lý',
    'Quyền lực công quyền',
    'Địa vị xã hội'
  ],
  0,
  'Năng lực pháp luật là khả năng của chủ thể có được quyền và nghĩa vụ pháp lý mà Nhà nước ghi nhận, có từ khi cá nhân sinh ra và chấm dứt khi chết.',
  'Giáo trình Pháp luật đại cương - Năng lực chủ thể trong quan hệ pháp luật'
);

addQ(
  'dễ',
  'Hình thức thực hiện pháp luật nào mà trong đó chủ thể tự kiềm chế không thực hiện các hành vi mà pháp luật nghiêm cấm?',
  [
    'Thi hành pháp luật',
    'Tuân thủ pháp luật',
    'Sử dụng pháp luật',
    'Áp dụng pháp luật'
  ],
  1,
  'Tuân thủ pháp luật là hình thức chủ thể kiềm chế không tiến hành những hoạt động mà pháp luật cấm (thực hiện nghĩa vụ thụ động).',
  'Giáo trình Pháp luật đại cương - Các hình thức thực hiện pháp luật'
);

addQ(
  'dễ',
  'Yếu tố nào sau đây là sự kiện pháp lý thuộc loại "sự biến pháp lý"?',
  [
    'Viết đơn xin nghỉ việc hợp pháp',
    'Ký kết hợp đồng thuê nhà ở',
    'Sét đánh gây hỏa hoạn làm thiêu rụi nhà xưởng có bảo hiểm',
    'Lái xe vượt đèn đỏ gây va quẹt giao thông'
  ],
  2,
  'Sự biến pháp lý là hiện tượng tự nhiên xảy ra ngoài ý chí chủ quan của con người (thiên tai, sét đánh, chết tự nhiên) nhưng làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật.',
  'Giáo trình Pháp luật đại cương - Sự kiện pháp lý'
);

addQ(
  'dễ',
  'Vi phạm pháp luật được định nghĩa là hành vi có các đặc trưng cơ bản nào sau đây?',
  [
    'Hành vi đạo đức bị xã hội và người thân lên án gay gắt',
    'Ý nghĩ tiêu cực có hại chưa bộc lộ ra thế giới bên ngoài',
    'Hành vi chỉ do cơ quan công quyền nhà nước gây ra trong công vụ',
    'Hành vi xác định của con người, trái pháp luật, có lỗi và do chủ thể có năng lực trách nhiệm pháp lý thực hiện'
  ],
  3,
  'Vi phạm pháp luật là hành vi xác định của con người, trái pháp luật, có lỗi, xâm hại các quan hệ xã hội được pháp luật bảo vệ và do chủ thể có năng lực trách nhiệm pháp lý thực hiện.',
  'Giáo trình Pháp luật đại cương - Khái niệm vi phạm pháp luật'
);

addQ(
  'dễ',
  'Trách nhiệm pháp lý là hậu quả bất lợi mà chủ thể vi phạm pháp luật phải gánh chịu trước yếu tố nào?',
  [
    'Nhà nước',
    'Dư luận xã hội',
    'Gia đình dòng họ',
    'Các tổ chức quốc tế'
  ],
  0,
  'Trách nhiệm pháp lý là sự bắt buộc chủ thể vi phạm pháp luật phải gánh chịu hậu quả bất lợi do Nhà nước áp dụng thông qua các chế tài luật định.',
  'Giáo trình Pháp luật đại cương - Khái niệm trách nhiệm pháp lý'
);

addQ(
  'dễ',
  'Hình thức chính thể của một nhà nước thể hiện điều gì?',
  [
    'Cách thức phân chia các đơn vị hành chính lãnh thổ trong nước',
    'Cách thức tổ chức và trình tự thành lập các cơ quan quyền lực tối cao của nhà nước',
    'Mối quan hệ ngoại giao giữa nhà nước với các quốc gia láng giềng',
    'Chính sách kinh tế và tài khóa của chính phủ đương nhiệm'
  ],
  1,
  'Hình thức chính thể là cách thức tổ chức và trình tự thành lập các cơ quan quyền lực nhà nước tối cao, xác lập mối quan hệ cơ bản giữa các cơ quan đó với nhau và với nhân dân.',
  'Giáo trình Pháp luật đại cương - Hình thức nhà nước'
);

addQ(
  'dễ',
  'Hệ thống cơ quan nào sau đây giữ vai trò là cơ quan hành chính nhà nước cao nhất ở nước ta?',
  [
    'Quốc hội',
    'Tòa án nhân dân tối cao',
    'Chính phủ',
    'Viện kiểm sát nhân dân tối cao'
  ],
  2,
  'Theo Hiến pháp 2013 và lý luận nhà nước pháp quyền, Chính phủ là cơ quan hành chính nhà nước cao nhất của nước Cộng hòa XHCN Việt Nam.',
  'Hiến pháp 2013, Điều 94'
);

// ==========================================
// 46 CÂU TRUNG BÌNH (Thông hiểu, phân biệt)
// ==========================================
addQ(
  'trung bình',
  'Điểm khác biệt cơ bản giữa quy phạm pháp luật với các quy phạm xã hội khác (đạo đức, tôn giáo) là gì?',
  [
    'Quy phạm pháp luật được đảm bảo thực hiện bằng các chế tài cưỡng chế của nhà nước',
    'Quy phạm pháp luật chỉ áp dụng cho tầng lớp lao động nghèo trong xã hội',
    'Quy phạm pháp luật không bao giờ bị thay đổi theo thời gian phát triển',
    'Quy phạm pháp luật do các tổ chức tôn giáo cùng nhà nước soạn thảo'
  ],
  0,
  'Khác với quy phạm đạo đức dựa vào lương tâm và dư luận xã hội, quy phạm pháp luật do nhà nước ban hành hoặc thừa nhận và được bảo đảm thực hiện bằng quyền lực cưỡng chế của nhà nước.',
  'Giáo trình Pháp luật đại cương - Đặc trưng của pháp luật'
);

addQ(
  'trung bình',
  'Trường hợp một công dân sử dụng quyền tự do kinh doanh để thành lập công ty TNHH là biểu hiện của hình thức thực hiện pháp luật nào?',
  [
    'Thi hành pháp luật',
    'Sử dụng pháp luật',
    'Tuân thủ pháp luật',
    'Áp dụng pháp luật'
  ],
  1,
  'Sử dụng pháp luật là hình thức các chủ thể pháp luật thực hiện quyền chủ thể của mình (làm những gì mà pháp luật cho phép làm theo ý chí của họ).',
  'Giáo trình Pháp luật đại cương - Hình thức Sử dụng pháp luật'
);

addQ(
  'trung bình',
  'Điều kiện để một tổ chức được công nhận có tư cách pháp nhân theo quy định chung của pháp luật Việt Nam gồm những yếu tố nào?',
  [
    'Phải có trụ sở đặt tại thủ đô và có vốn điều lệ tối thiểu 10 tỷ đồng',
    'Phải do Thủ tướng Chính phủ ký quyết định bổ nhiệm người đứng đầu',
    'Được thành lập hợp pháp, có cơ cấu tổ chức chặt chẽ, có tài sản độc lập và tự chịu trách nhiệm, nhân danh mình tham gia quan hệ pháp luật',
    'Được thành lập bởi ít nhất 5 cá nhân có quốc tịch Việt Nam đủ 18 tuổi trở lên'
  ],
  2,
  'Theo Điều 74 Bộ luật Dân sự 2015, pháp nhân phải có 4 điều kiện: Thành lập hợp pháp; Có cơ cấu tổ chức; Có tài sản độc lập và tự chịu trách nhiệm; Nhân danh mình tham gia các quan hệ pháp luật.',
  'Bộ luật Dân sự 2015, Điều 74'
);

addQ(
  'trung bình',
  'Yếu tố "mặt khách quan" của vi phạm pháp luật KHÔNG bao gồm thành phần nào sau đây?',
  [
    'Hành vi trái pháp luật thực tế đã diễn ra',
    'Hậu quả nguy hại do hành vi trái pháp luật gây ra cho xã hội',
    'Mối quan hệ nhân quả giữa hành vi và hậu quả thiệt hại',
    'Động cơ và mục đích thúc đẩy chủ thể thực hiện hành vi'
  ],
  3,
  'Động cơ và mục đích của người vi phạm thuộc về "mặt chủ quan" (tâm lý bên trong), không thuộc về "mặt khách quan" (biểu hiện bên ngoài của vi phạm).',
  'Giáo trình Pháp luật đại cương - Cấu thành vi phạm pháp luật'
);

addQ(
  'trung bình',
  'Lỗi cố ý gián tiếp được xác định khi chủ thể thực hiện hành vi nhận thức được tính chất nguy hại của hành vi và có thái độ tâm lý như thế nào?',
  [
    'Thấy trước hậu quả nguy hại, tuy không mong muốn nhưng có ý thức để mặc cho hậu quả xảy ra',
    'Thấy trước hậu quả nguy hại và mong muốn cho hậu quả đó phát sinh trên thực tế',
    'Không thấy trước hậu quả nguy hại mặc dù phải thấy trước và có thể thấy trước',
    'Thấy trước hậu quả nhưng tin tưởng một cách thiếu căn cứ rằng hậu quả sẽ không xảy ra'
  ],
  0,
  'Lỗi cố ý gián tiếp: Nhận thức rõ hành vi nguy hại, thấy trước hậu quả, không mong muốn nhưng có ý thức bỏ mặc cho hậu quả xảy ra.',
  'Giáo trình Pháp luật đại cương - Các hình thức lỗi'
);

addQ(
  'trung bình',
  'Một đạo luật vừa được Quốc hội thông qua quy định: "Người nào vận chuyển trái phép chất ma túy thì bị phạt tù từ 02 năm đến 07 năm". Cụm từ "thì bị phạt tù từ 02 năm đến 07 năm" thuộc bộ phận nào của quy phạm?',
  [
    'Giả định',
    'Chế tài',
    'Quy định',
    'Khách thể'
  ],
  1,
  'Phần chỉ ra biện pháp tác động bất lợi mang tính cưỡng chế hình sự (phạt tù từ 2 đến 7 năm) chính là bộ phận Chế tài của quy phạm pháp luật hình sự.',
  'Giáo trình Pháp luật đại cương - Cơ cấu QPPL'
);

addQ(
  'trung bình',
  'Năng lực hành vi của cá nhân là gì?',
  [
    'Khả năng có quyền và nghĩa vụ do nhà nước thừa nhận từ khi mới sinh ra',
    'Khả năng lao động để tạo ra thu nhập nuôi sống bản thân và gia đình',
    'Khả năng bằng chính hành vi của mình xác lập, thực hiện các quyền và nghĩa vụ pháp lý',
    'Quyền được tham gia bầu cử và ứng cử đại biểu Quốc hội khi đủ tuổi'
  ],
  2,
  'Năng lực hành vi pháp lý là khả năng của chủ thể bằng chính hành vi của mình xác lập và thực hiện các quyền chủ thể cũng như nghĩa vụ pháp lý.',
  'Giáo trình Pháp luật đại cương - Năng lực hành vi pháp lý'
);

addQ(
  'trung bình',
  'Hình thức cấu trúc nhà nước nào mà lãnh thổ bao gồm nhiều bang hoặc vùng tự trị có chủ quyền pháp lý riêng biệt?',
  [
    'Nhà nước đơn nhất',
    'Nhà nước quân chủ chuyên chế',
    'Nhà nước phong kiến tập quyền',
    'Nhà nước liên bang'
  ],
  3,
  'Nhà nước liên bang là nhà nước có từ hai hay nhiều nhà nước thành viên (tiểu bang/bang) hợp lại, có hệ thống pháp luật và hiến pháp chung của liên bang cùng hiến pháp riêng của các bang.',
  'Giáo trình Pháp luật đại cương - Hình thức cấu trúc nhà nước'
);

addQ(
  'trung bình',
  'Hình thức thực hiện pháp luật nào bắt buộc phải có sự tham gia và phán quyết mang tính quyền lực của cơ quan nhà nước có thẩm quyền?',
  [
    'Áp dụng pháp luật',
    'Sử dụng pháp luật',
    'Tuân thủ pháp luật',
    'Thi hành pháp luật'
  ],
  0,
  'Áp dụng pháp luật là hoạt động mang tính quyền lực nhà nước, do cơ quan nhà nước hoặc nhà chức trách có thẩm quyền tiến hành nhằm giải quyết các vụ việc cụ thể.',
  'Giáo trình Pháp luật đại cương - Áp dụng pháp luật'
);

addQ(
  'trung bình',
  'Thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức "Nghị định" thuộc về cơ quan nào?',
  [
    'Quốc hội',
    'Chính phủ',
    'Ủy ban Thường vụ Quốc hội',
    'Tòa án nhân dân tối cao'
  ],
  1,
  'Theo Luật Ban hành văn bản quy phạm pháp luật 2015 (sửa đổi 2020), Chính phủ ban hành văn bản quy phạm pháp luật dưới hình thức Nghị định.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Trách nhiệm kỷ luật là loại trách nhiệm pháp lý áp dụng đối với chủ thể nào sau đây?',
  [
    'Mọi công dân thực hiện hành vi vi phạm trật tự an toàn giao thông',
    'Cán bộ, công chức, viên chức, người lao động vi phạm kỷ luật nội bộ, quy chế làm việc',
    'Pháp nhân thương mại trốn thuế và rửa tiền quy mô lớn',
    'Người nước ngoài cư trú bất hợp pháp trên lãnh thổ Việt Nam'
  ],
  1,
  'Trách nhiệm kỷ luật do thủ trưởng cơ quan, đơn vị sử dụng lao động áp dụng đối với cán bộ, công chức, viên chức hoặc người lao động vi phạm quy chế, kỷ luật lao động.',
  'Giáo trình Pháp luật đại cương - Trách nhiệm kỷ luật'
);

addQ(
  'trung bình',
  'Văn bản nào sau đây có hiệu lực pháp lý cao nhất trong hệ thống văn bản quy phạm pháp luật của nước Cộng hòa XHCN Việt Nam?',
  [
    'Bộ luật Hình sự',
    'Nghị quyết của Quốc hội',
    'Hiến pháp',
    'Nghị định của Chính phủ'
  ],
  2,
  'Hiến pháp là luật cơ bản của Nhà nước, có hiệu lực pháp lý tối cao. Mọi văn bản quy phạm pháp luật khác đều phải phù hợp với Hiến pháp.',
  'Hiến pháp 2013, Điều 119'
);

addQ(
  'trung bình',
  'Chủ thể của vi phạm pháp luật hình sự (tội phạm) theo quy định hiện hành của pháp luật Việt Nam có thể là ai?',
  [
    'Chỉ có cá nhân người Việt Nam đủ 18 tuổi',
    'Cá nhân và mọi tổ chức kinh tế phi pháp nhân',
    'Chỉ các tổ chức phi chính phủ và cơ quan hành chính',
    'Cá nhân có năng lực trách nhiệm hình sự và pháp nhân thương mại trong các tội luật định'
  ],
  3,
  'Theo Bộ luật Hình sự 2015 (sửa đổi 2017), chủ thể của tội phạm bao gồm cá nhân có năng lực TNHS đủ tuổi luật định và pháp nhân thương mại (đối với một số tội danh cụ thể quy định tại Điều 76).',
  'Bộ luật Hình sự 2015, Điều 12 & Điều 76'
);

addQ(
  'trung bình',
  'Tính quy phạm phổ biến của pháp luật thể hiện ở điểm nào sau đây?',
  [
    'Pháp luật là khuôn mẫu chung được áp dụng nhiều lần cho nhiều đối tượng trong phạm vi toàn quốc',
    'Pháp luật chỉ dành riêng cho công dân thuộc độ tuổi thành niên',
    'Pháp luật được ban hành bởi các hiệp hội nghề nghiệp tự nguyện',
    'Pháp luật chỉ có giá trị hiệu lực tại các đô thị lớn'
  ],
  0,
  'Tính quy phạm phổ biến là quy tắc xử sự chung, làm khuôn mẫu hướng dẫn hành vi, được áp dụng lặp đi lặp lại nhiều lần cho nhiều đối tượng khác nhau.',
  'Giáo trình Pháp luật đại cương - Tính quy phạm phổ biến'
);

addQ(
  'trung bình',
  'Thời điểm phát sinh năng lực pháp luật của cá nhân là khi nào?',
  [
    'Khi cá nhân đủ 18 tuổi và có tài sản riêng',
    'Khi cá nhân sinh ra và còn sống',
    'Khi cá nhân được cấp thẻ Căn cước công dân',
    'Khi cá nhân tốt nghiệp trung học phổ thông'
  ],
  1,
  'Theo Điều 16 Bộ luật Dân sự 2015, năng lực pháp luật dân sự của cá nhân có từ khi người đó sinh ra và chấm dứt khi người đó chết.',
  'Bộ luật Dân sự 2015, Điều 16'
);

addQ(
  'trung bình',
  'Chế độ chính trị của Nhà nước Cộng hòa XHCN Việt Nam là gì?',
  [
    'Chế độ phong kiến quân chủ tập trung',
    'Chế độ quý tộc nghị viện',
    'Chế độ dân chủ xã hội chủ nghĩa',
    'Chế độ cộng hòa tổng thống tam quyền phân lập'
  ],
  2,
  'Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam thực hiện chế độ chính trị dân chủ xã hội chủ nghĩa, quyền lực nhà nước thuộc về Nhân dân.',
  'Hiến pháp 2013, Điều 2'
);

addQ(
  'trung bình',
  'Loại văn bản quy phạm pháp luật nào sau đây do Chủ tịch nước ban hành?',
  [
    'Nghị quyết và Quyết định',
    'Nghị định và Thông tư',
    'Chỉ thị và Pháp lệnh',
    'Lệnh và Quyết định'
  ],
  3,
  'Theo Luật Ban hành văn bản quy phạm pháp luật, Chủ tịch nước ban hành văn bản quy phạm pháp luật dưới hình thức Lệnh và Quyết định.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Căn cứ vào tính chất và mức độ nguy hiểm cho xã hội, vi phạm pháp luật được chia thành mấy loại cơ bản?',
  [
    '4 loại: Vi phạm hình sự (tội phạm), vi phạm hành chính, vi phạm dân sự, vi phạm kỷ luật',
    '2 loại: Vi phạm nghiêm trọng và vi phạm không đáng kể',
    '3 loại: Vi phạm của cá nhân, vi phạm của cơ quan nhà nước, vi phạm quốc tế',
    '5 loại: Tội ác chiến tranh, vi phạm kinh tế, trộm cắp, vi phạm đạo đức, vi phạm tập quán'
  ],
  0,
  'Vi phạm pháp luật được phân thành 4 loại cơ bản: Tội phạm (vi phạm hình sự), vi phạm hành chính, vi phạm dân sự và vi phạm kỷ luật.',
  'Giáo trình Pháp luật đại cương - Phân loại vi phạm pháp luật'
);

addQ(
  'trung bình',
  'Bộ phận nào trong quan hệ pháp luật phản ánh lợi ích vật chất hoặc tinh thần mà các chủ thể hướng tới khi tham gia quan hệ?',
  [
    'Chủ thể',
    'Khách thể',
    'Nội dung',
    'Quy chế'
  ],
  1,
  'Khách thể của quan hệ pháp luật là những lợi ích vật chất, tinh thần hoặc lợi ích xã hội khác mà các chủ thể mong muốn đạt được khi tham gia vào quan hệ pháp luật.',
  'Giáo trình Pháp luật đại cương - Khách thể quan hệ pháp luật'
);

addQ(
  'trung bình',
  'Một người thợ săn nhìn thấy bụi cây rung rinh, tin rằng đó là con mồi nên nổ súng làm bị thương một người đi rừng. Lỗi của người thợ săn thuộc dạng nào?',
  [
    'Lỗi cố ý gián tiếp',
    'Lỗi vô ý vì cẩu thả',
    'Lỗi vô ý vì quá tự tin',
    'Không có lỗi do sự kiện bất ngờ'
  ],
  1,
  'Lỗi vô ý do cẩu thả là trường hợp người phạm tội không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, mặc dù phải thấy trước và có thể thấy trước được hậu quả đó.',
  'Bộ luật Hình sự 2015, Điều 11'
);

addQ(
  'trung bình',
  'Sự kiện nào sau đây được xác định là "hành vi pháp lý"?',
  [
    'Động đất gây sập nhà chung cư',
    'Một người chết do tuổi già tự nhiên',
    'Công dân A làm thủ tục đăng ký khai sinh cho con',
    'Nước lũ dâng cao cuốn trôi cầu treo'
  ],
  2,
  'Hành vi pháp lý là hành động hoặc không hành động xảy ra theo ý chí của con người và được pháp luật gắn với việc làm phát sinh, thay đổi hay chấm dứt quan hệ pháp luật.',
  'Giáo trình Pháp luật đại cương - Hành vi pháp lý'
);

addQ(
  'trung bình',
  'Cơ quan nào sau đây có thẩm quyền ban hành "Thông tư"?',
  [
    'Chủ tịch Ủy ban nhân dân cấp tỉnh',
    'Thủ tướng Chính phủ',
    'Ủy ban Thường vụ Quốc hội',
    'Bộ trưởng, Thủ trưởng cơ quan ngang bộ'
  ],
  3,
  'Theo Luật Ban hành văn bản quy phạm pháp luật, Bộ trưởng, Thủ trưởng cơ quan ngang bộ ban hành Thông tư để quy định chi tiết điều, khoản, điểm được giao trong luật, nghị quyết.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Mối quan hệ giữa pháp luật và kinh tế được xác định theo quan điểm khoa học pháp lý là gì?',
  [
    'Pháp luật phụ thuộc vào kinh tế, phản ánh trình độ phát triển kinh tế và tác động trở lại đối với kinh tế',
    'Pháp luật hoàn toàn độc lập và không chịu bất kỳ tác động nào từ cơ cấu kinh tế',
    'Kinh tế phụ thuộc hoàn toàn tuyệt đối vào các quyết định mang ý chí chủ quan của pháp luật',
    'Pháp luật luôn đi trước kinh tế và tạo ra của cải vật chất cho xã hội một cách trực tiếp'
  ],
  0,
  'Kinh tế quyết định sự ra đời, nội dung và sự biến đổi của pháp luật; ngược lại pháp luật có tính độc lập tương đối và tác động thúc đẩy hoặc kìm hãm sự phát triển kinh tế.',
  'Giáo trình Pháp luật đại cương - Mối quan hệ giữa Pháp luật và Kinh tế'
);

addQ(
  'trung bình',
  'Năng lực chủ thể trong quan hệ pháp luật được hợp thành bởi hai yếu tố nào?',
  [
    'Năng lực nhận thức và năng lực điều khiển hành vi',
    'Năng lực pháp luật và năng lực hành vi',
    'Năng lực kinh tế và địa vị chính trị',
    'Năng lực tài chính và uy tín nghề nghiệp'
  ],
  1,
  'Năng lực chủ thể gồm hai bộ phận hợp thành: Năng lực pháp luật (khả năng có quyền và nghĩa vụ) và Năng lực hành vi (khả năng tự mình xác lập, thực hiện quyền và nghĩa vụ).',
  'Giáo trình Pháp luật đại cương - Năng lực chủ thể'
);

addQ(
  'trung bình',
  'Khái niệm "Khách thể của vi phạm pháp luật" dùng để chỉ yếu tố nào?',
  [
    'Phương tiện và công cụ được dùng để gây ra vi phạm',
    'Nơi chốn và thời điểm xảy ra hành vi vi phạm',
    'Quan hệ xã hội được pháp luật bảo vệ nhưng bị hành vi vi phạm xâm hại',
    'Diễn biến tâm lý và mục đích tư lợi của người phạm tội'
  ],
  2,
  'Khách thể của vi phạm pháp luật là các quan hệ xã hội được pháp luật xác lập và bảo vệ, nhưng bị hành vi vi phạm xâm hại hoặc đe dọa xâm hại.',
  'Giáo trình Pháp luật đại cương - Khách thể của vi phạm pháp luật'
);

addQ(
  'trung bình',
  'Hình thức thực hiện pháp luật nào đòi hỏi công dân phải thực hiện nghĩa vụ chủ động bằng hành động tích cực theo yêu cầu của pháp luật?',
  [
    'Tuân thủ pháp luật',
    'Sử dụng pháp luật',
    'Áp dụng pháp luật',
    'Thi hành pháp luật'
  ],
  3,
  'Thi hành pháp luật là hình thức chủ thể pháp luật thực hiện nghĩa vụ pháp lý của mình bằng hành động tích cực (làm những gì mà pháp luật yêu cầu phải làm, như nộp thuế, đăng ký nghĩa vụ quân sự).',
  'Giáo trình Pháp luật đại cương - Thi hành pháp luật'
);

addQ(
  'trung bình',
  'Thuộc tính "tính quyền lực bắt buộc chung" của pháp luật thể hiện ở nội dung nào?',
  [
    'Pháp luật được ban hành bởi nhà nước và áp đặt thực hiện với mọi chủ thể trong xã hội bằng bộ máy cưỡng chế',
    'Pháp luật chỉ bắt buộc đối với những công dân có hành vi chống đối chế độ',
    'Pháp luật chỉ có hiệu lực thi hành đối với nhân viên công quyền',
    'Pháp luật được người dân tự nguyện đồng thuận không cần chế tài xử lý'
  ],
  0,
  'Tính quyền lực bắt buộc chung thể hiện ở chỗ pháp luật do nhà nước ban hành, có giá trị bắt buộc thi hành đối với mọi cá nhân, tổ chức thuộc phạm vi tác động của quy phạm.',
  'Giáo trình Pháp luật đại cương - Tính bắt buộc chung'
);

addQ(
  'trung bình',
  'Hiện tượng nào sau đây làm chấm dứt hoàn toàn năng lực pháp luật của một cá nhân?',
  [
    'Cá nhân bị Tòa án tuyên bố mất năng lực hành vi dân sự',
    'Cá nhân qua đời hoặc bị Tòa án tuyên bố là đã chết',
    'Cá nhân đi định cư ở nước ngoài và thôi quốc tịch',
    'Cá nhân bị kết án tù có thời hạn về tội xâm phạm an ninh quốc gia'
  ],
  1,
  'Theo quy định pháp luật dân sự, năng lực pháp luật của cá nhân bắt đầu từ khi sinh ra và chỉ chấm dứt hoàn toàn khi cá nhân đó chết (hoặc bị tuyên bố là đã chết).',
  'Bộ luật Dân sự 2015, Điều 16'
);

addQ(
  'trung bình',
  'Trong các hình thức pháp luật cơ bản trên thế giới, "Tiền lệ pháp" (án lệ) được hiểu là gì?',
  [
    'Văn bản quy phạm do nghị viện thảo luận và bỏ phiếu ban hành',
    'Tập quán cổ xưa được lưu truyền qua nhiều thế hệ không thành văn',
    'Bản án hoặc quyết định xét xử của tòa án được nhà nước thừa nhận làm khuôn mẫu để giải quyết các vụ việc tương tự',
    'Quy chế do các bang liên kết thỏa thuận ký kết'
  ],
  2,
  'Tiền lệ pháp (án lệ) là hình thức pháp luật trong đó các phán quyết, quyết định của cơ quan xét xử đối với vụ việc cụ thể được lấy làm khuôn mẫu để áp dụng giải quyết cho các vụ việc tương tự sau đó.',
  'Giáo trình Pháp luật đại cương - Nguồn của pháp luật'
);

addQ(
  'trung bình',
  'Bộ phận "Giả định" trong quy phạm pháp luật thường trả lời cho các câu hỏi nào sau đây?',
  [
    'Chủ thể phải gánh chịu mức phạt tù hay bồi thường bao nhiêu tiền?',
    'Chủ thể được phép làm gì và bị nghiêm cấm làm hành vi gì?',
    'Mục tiêu kinh tế xã hội mà đạo luật muốn đem lại là gì?',
    'Chủ thể nào, trong điều kiện hoàn cảnh nào thì chịu sự tác động của quy phạm?'
  ],
  3,
  'Bộ phận giả định xác định chủ thể (ai, tổ chức nào) và hoàn cảnh, điều kiện thực tế của đời sống xã hội khi xảy ra thì quy phạm sẽ phát sinh hiệu lực.',
  'Giáo trình Pháp luật đại cương - Bộ phận Giả định'
);

addQ(
  'trung bình',
  'Một người lái xe đi đúng tốc độ cho phép, chú ý quan sát nhưng bất ngờ một em bé từ ngõ hẻm lao nhanh ra sát đầu xe khiến tài xế dù đạp phanh gấp vẫn va quẹt. Trường hợp này tài xế không chịu trách nhiệm pháp lý vì lý do gì?',
  [
    'Sự kiện bất ngờ nằm ngoài khả năng thấy trước và phòng ngừa của người điều khiển phương tiện',
    'Tài xế là người đang thi hành nhiệm vụ vận tải khẩn cấp',
    'Pháp luật luôn ưu tiên miễn trách nhiệm cho phương tiện cơ giới',
    'Tài xế đã bồi thường một khoản tiền tượng trưng tại chỗ'
  ],
  0,
  'Sự kiện bất ngờ là sự kiện mà người thực hiện hành vi không thể thấy trước hoặc không buộc phải thấy trước hậu quả nguy hại, do đó không có lỗi và không phải chịu trách nhiệm.',
  'Bộ luật Hình sự 2015, Điều 20'
);

addQ(
  'trung bình',
  'Pháp luật khác với đạo đức ở điểm cơ bản nào về mặt tính chất điều chỉnh hành vi?',
  [
    'Đạo đức mang tính bắt buộc cưỡng chế cao hơn pháp luật',
    'Pháp luật xác lập rõ ràng quyền và nghĩa vụ pháp lý, còn đạo đức chủ yếu mang tính tự giác và lương tâm',
    'Đạo đức do nhà nước ban hành theo trình tự luật định khắt khe',
    'Pháp luật chỉ tồn tại trong các xã hội tiền văn minh'
  ],
  1,
  'Pháp luật có tính xác định chặt chẽ, xác lập rõ quyền và nghĩa vụ tương ứng, trong khi đạo đức điều chỉnh hành vi bằng niềm tin nội tâm, lương tâm cá nhân và áp lực dư luận xã hội.',
  'Giáo trình Pháp luật đại cương - Mối quan hệ giữa Pháp luật và Đạo đức'
);

addQ(
  'trung bình',
  'Khi nghiên cứu về cơ cấu bộ máy nhà nước, thuật ngữ "nguyên tắc tập quyền" chỉ trạng thái quyền lực nào?',
  [
    'Quyền lực được phân chia độc lập và kiềm chế đối trọng giữa 3 nhánh lập pháp, hành pháp, tư pháp',
    'Toàn bộ quyền lực nhà nước tập trung vào các tập đoàn kinh tế tư nhân lớn',
    'Toàn bộ quyền lực nhà nước thống nhất tập trung vào một cơ quan quyền lực cao nhất',
    'Quyền lực nhà nước được chia đều cho các chính quyền cấp cơ sở tự quyết định'
  ],
  2,
  'Nguyên tắc tập quyền là toàn bộ quyền lực nhà nước tối cao tập trung thống nhất vào một cơ quan đại diện quyền lực cao nhất (ở Việt Nam là Quốc hội), không phân chia tam quyền phân lập.',
  'Giáo trình Pháp luật đại cương - Nguyên tắc tổ chức bộ máy nhà nước'
);

addQ(
  'trung bình',
  'Hành vi nào sau đây là biểu hiện của vi phạm pháp luật hành chính?',
  [
    'Cố ý giết người cướp tài sản có tổ chức',
    'Không thanh toán tiền nợ vay theo đúng hạn hợp đồng vay tài sản',
    'Công chức tự ý nghỉ việc 3 ngày liên tục không có lý do chính đáng',
    'Điều khiển xe mô tô không đội mũ bảo hiểm theo quy định khi tham gia giao thông'
  ],
  3,
  'Điều khiển xe không đội mũ bảo hiểm là hành vi vi phạm các quy tắc quản lý nhà nước trong lĩnh vực trật tự an toàn giao thông nhưng chưa đến mức cấu thành tội phạm, là vi phạm hành chính.',
  'Luật Xử lý vi phạm hành chính 2012 (sửa đổi 2020)'
);

addQ(
  'trung bình',
  'Chức năng đối ngoại của Nhà nước KHÔNG bao gồm nhiệm vụ nào sau đây?',
  [
    'Bảo đảm trật tự an toàn giao thông nội địa và trấn áp tội phạm trong nước',
    'Phòng thủ bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ quốc gia',
    'Mở rộng hợp tác hữu nghị quốc tế và kinh tế đa phương',
    'Tham gia giải quyết các vấn đề toàn cầu như biến đổi khí hậu và gìn giữ hòa bình'
  ],
  0,
  'Bảo đảm trật tự giao thông và trấn áp tội phạm bên trong lãnh thổ là nội dung thuộc chức năng đối nội của Nhà nước, không thuộc chức năng đối ngoại.',
  'Giáo trình Pháp luật đại cương - Chức năng nhà nước'
);

addQ(
  'trung bình',
  'Biện pháp chế tài nào sau đây thuộc thẩm quyền xử phạt vi phạm hành chính?',
  [
    'Phạt cải tạo không giam giữ',
    'Phạt tiền và tước quyền sử dụng giấy phép, chứng chỉ hành nghề có thời hạn',
    'Buộc xin lỗi công khai và bồi thường thiệt hại ngoài hợp đồng',
    'Cách chức Bí thư Đảng ủy cơ sở'
  ],
  1,
  'Theo Luật Xử lý vi phạm hành chính, phạt tiền và tước quyền sử dụng giấy phép có thời hạn là các hình thức xử phạt vi phạm hành chính chính và bổ sung.',
  'Luật Xử lý vi phạm hành chính 2012, Điều 21'
);

addQ(
  'trung bình',
  'Bộ phận "Quy định" trong quy phạm pháp luật giữ vai trò gì?',
  [
    'Nêu hậu quả trừng phạt nếu chủ thể không nghe theo mệnh lệnh',
    'Nêu bối cảnh không gian thời gian phát sinh đạo luật',
    'Chỉ ra mẫu hành vi, quy tắc xử sự mà chủ thể được làm, phải làm hoặc không được làm',
    'Nêu giải thích từ ngữ chuyên ngành dùng trong văn bản'
  ],
  2,
  'Quy định là bộ phận trung tâm của quy phạm pháp luật, chỉ ra quy tắc xử sự: được phép làm gì (cho phép), phải làm gì (bắt buộc), hoặc không được làm gì (cấm đoán).',
  'Giáo trình Pháp luật đại cương - Bộ phận Quy định'
);

addQ(
  'trung bình',
  'Quyền lực công cộng đặc biệt của Nhà nước khác với quyền lực thị tộc thời nguyên thủy ở đặc điểm nổi bật nào?',
  [
    'Chỉ được thực hiện thông qua thỏa thuận miệng giữa các già làng',
    'Dựa trên tinh thần hòa giải đạo đức hoàn toàn tự giác của nhân dân',
    'Không cần sử dụng bất kỳ khoản thu thuế nào từ cư dân',
    'Tách rời khỏi xã hội, có bộ máy chuyên chế cưỡng chế chuyên nghiệp (quân đội, cảnh sát, nhà tù)'
  ],
  3,
  'Quyền lực công đặc biệt của nhà nước tách rời khỏi xã hội và đứng trên xã hội, được thực hiện bằng bộ máy quản lý và cưỡng chế chuyên nghiệp như quân đội, cảnh sát, nhà tù, tòa án.',
  'Giáo trình Pháp luật đại cương - Đặc trưng nhà nước'
);

addQ(
  'trung bình',
  'Trong quan hệ pháp luật, cách xử sự mà pháp luật bắt buộc một bên chủ thể phải tiến hành nhằm đáp ứng quyền của bên kia được gọi là gì?',
  [
    'Nghĩa vụ pháp lý của chủ thể',
    'Tiền bạc và hiện vật giao dịch giữa hai bên',
    'Tư cách công dân và năng lực lao động của người tham gia',
    'Trụ sở cơ quan và tài sản đăng ký kinh doanh'
  ],
  0,
  'Nghĩa vụ pháp lý là cách xử sự có tính bắt buộc do pháp luật quy định hoặc do các bên thỏa thuận phù hợp pháp luật mà một bên phải thực hiện để đáp ứng quyền của bên kia.',
  'Giáo trình Pháp luật đại cương - Quan hệ pháp luật'
);

addQ(
  'trung bình',
  'Khi hai bên ký hợp đồng mua bán xe máy, bên mua có nghĩa vụ trả tiền và bên bán có quyền nhận tiền. Quyền nhận tiền của bên bán được gọi là gì?',
  [
    'Năng lực pháp luật',
    'Quyền chủ thể',
    'Nghĩa vụ pháp lý',
    'Sự kiện pháp lý'
  ],
  1,
  'Quyền chủ thể là khả năng của chủ thể được xử sự theo những cách thức nhất định hoặc yêu cầu bên kia thực hiện nghĩa vụ để bảo đảm quyền lợi hợp pháp của mình.',
  'Giáo trình Pháp luật đại cương - Quyền chủ thể'
);

addQ(
  'trung bình',
  'Một người mắc bệnh tâm thần nặng dẫn đến mất hoàn toàn khả năng nhận thức và làm chủ hành vi thì địa vị pháp lý của người này được xác định thế nào?',
  [
    'Bị mất hoàn toàn năng lực pháp luật',
    'Vẫn có đầy đủ năng lực hành vi nếu có người bảo lãnh',
    'Có thể bị Tòa án ra quyết định tuyên bố mất năng lực hành vi dân sự theo yêu cầu của người có quyền lợi',
    'Tự động bị tước quốc tịch Việt Nam'
  ],
  2,
  'Theo Điều 22 Bộ luật Dân sự 2015, khi một người do bệnh tâm thần mà không thể nhận thức, làm chủ hành vi thì theo yêu cầu của người có quyền, Tòa án ra quyết định tuyên bố người này mất năng lực hành vi dân sự.',
  'Bộ luật Dân sự 2015, Điều 22'
);

addQ(
  'trung bình',
  'Chủ thể thực hiện hành vi vi phạm pháp luật nhưng nhận thức rằng hành vi của mình có thể gây nguy hại cho xã hội, tuy nhiên tự tin cho rằng hậu quả sẽ được ngăn chặn do tài năng lái xe của mình. Đây là hình thức lỗi nào?',
  [
    'Lỗi vô ý do cẩu thả',
    'Lỗi cố ý gián tiếp',
    'Lỗi cố ý trực tiếp',
    'Lỗi vô ý vì quá tự tin'
  ],
  3,
  'Lỗi vô ý vì quá tự tin là trường hợp người vi phạm thấy trước hành vi của mình có thể gây ra hậu quả nguy hại, nhưng tin rằng hậu quả sẽ không xảy ra hoặc có thể ngăn chặn được.',
  'Bộ luật Hình sự 2015, Điều 11'
);

addQ(
  'trung bình',
  'Văn bản nào sau đây KHÔNG phải là văn bản quy phạm pháp luật theo Luật Ban hành văn bản quy phạm pháp luật?',
  [
    'Quyết định kỷ luật sa thải một nhân viên của Giám đốc Công ty TNHH tư nhân',
    'Nghị định của Chính phủ',
    'Nghị quyết của Hội đồng nhân dân cấp tỉnh',
    'Thông tư của Bộ trưởng Bộ Tư pháp'
  ],
  0,
  'Quyết định của giám đốc doanh nghiệp tư nhân áp dụng nội bộ cho cá nhân cụ thể là văn bản áp dụng pháp luật cá biệt, không mang tính quy phạm pháp luật bắt buộc toàn xã hội.',
  'Luật Ban hành VBQPPL 2015, Điều 4'
);

addQ(
  'trung bình',
  'Khái niệm "Hình thức nhà nước" được cấu thành bởi 3 yếu tố cơ bản nào sau đây?',
  [
    'Hệ tư tưởng, tôn giáo quốc gia và chính sách đối ngoại',
    'Hình thức chính thể, hình thức cấu trúc nhà nước và chế độ chính trị',
    'Địa lý lãnh thổ, quy mô dân số và nguồn tài nguyên thiên nhiên',
    'Ngân sách quốc gia, lực lượng vũ trang và ngôn ngữ hành chính'
  ],
  1,
  'Hình thức nhà nước là cách thức tổ chức và thực hiện quyền lực nhà nước, hợp thành từ 3 yếu tố: Hình thức chính thể, hình thức cấu trúc nhà nước và chế độ chính trị.',
  'Giáo trình Pháp luật đại cương - Hình thức nhà nước'
);

addQ(
  'trung bình',
  'Hiện tượng "áp dụng tương tự pháp luật" được áp dụng khi thỏa mãn điều kiện nào sau đây?',
  [
    'Trong mọi vụ án hình sự khi cơ quan điều tra thiếu chứng cứ buộc tội',
    'Khi các bên đương sự yêu cầu thẩm phán tự sáng tạo ra luật mới',
    'Khi quan hệ xã hội phát sinh cần giải quyết nhưng không có quy phạm pháp luật trực tiếp điều chỉnh và không có tập quán hay tương tự quy phạm pháp luật khác',
    'Khi có sự thỏa thuận ngầm giữa viện kiểm sát và bị can'
  ],
  2,
  'Áp dụng tương tự pháp luật được sử dụng trong lĩnh vực dân sự khi phát sinh vụ việc cần giải quyết mà không có điều luật trực tiếp điều chỉnh, áp dụng tương tự quy định điều chỉnh quan hệ tương tự.',
  'Bộ luật Dân sự 2015, Điều 6'
);

addQ(
  'trung bình',
  'Hình thức chính thể Cộng hòa đại nghị (Cộng hòa nghị viện) có đặc điểm căn bản nào?',
  [
    'Tổng thống nắm toàn quyền hành pháp độc lập và không chịu trách nhiệm trước nghị viện',
    'Chính phủ do Vua chỉ định và hoạt động suốt đời',
    'Nghị viện chỉ mang tính tư vấn danh dự cho nguyên thủ quốc gia',
    'Chính phủ do nghị viện thành lập và chịu trách nhiệm chính trị trước nghị viện'
  ],
  3,
  'Trong chính thể cộng hòa đại nghị (như Đức, Ý, Ấn Độ), chính phủ được thành lập từ đa số trong nghị viện, thủ tướng đứng đầu hành pháp và chính phủ phải chịu trách nhiệm trước nghị viện.',
  'Giáo trình Pháp luật đại cương - Chính thể cộng hòa'
);

// ==========================================
// 53 CÂU VẬN DỤNG (Tình huống cụ thể)
// ==========================================
addQ(
  'vận dụng',
  'Anh Bình (22 tuổi, có đầy đủ năng lực hành vi) điều khiển xe máy đi vào đường ngược chiều vì muốn rút ngắn thời gian đến cơ quan. Cảnh sát giao thông đã lập biên bản xử phạt hành chính đối với anh Bình. Hành vi của anh Bình có lỗi gì và vi phạm loại pháp luật nào?',
  [
    'Lỗi cố ý trực tiếp, vi phạm pháp luật hành chính',
    'Lỗi vô ý vì quá tự tin, vi phạm pháp luật dân sự',
    'Lỗi vô ý vì cẩu thả, vi phạm pháp luật kỷ luật',
    'Không có lỗi do hoàn cảnh vội vàng, không phải là vi phạm'
  ],
  0,
  'Anh Bình nhận thức rõ hành vi đi vào đường ngược chiều là trái luật và thấy trước hành vi này vi phạm trật tự an toàn giao thông nhưng vẫn cố tình thực hiện -> Lỗi cố ý trực tiếp. Đây là vi phạm quy tắc quản lý nhà nước về giao thông -> Vi phạm hành chính.',
  'Luật Xử lý vi phạm hành chính 2012'
);

addQ(
  'vận dụng',
  'Bà Hoa ký hợp đồng cho ông Tuấn thuê một căn nhà mặt phố với thời hạn 3 năm, giá thuê 20 triệu đồng/tháng. Sau 6 tháng, ông Tuấn tự ý đập phá một bức tường chịu lực để mở rộng gian bán hàng mà không có sự đồng ý của bà Hoa. Hành vi của ông Tuấn cấu thành loại vi phạm pháp luật nào chủ yếu?',
  [
    'Vi phạm pháp luật hình sự nguy hiểm',
    'Vi phạm pháp luật dân sự (xâm hại quan hệ hợp đồng và tài sản)',
    'Vi phạm kỷ luật lao động công chức',
    'Vi phạm quy chế quản lý hành chính nội bộ'
  ],
  1,
  'Hành vi tự ý phá dỡ, cải tạo tài sản thuê trái với thỏa thuận hợp đồng và nghĩa vụ gìn giữ tài sản thuê xâm hại trực tiếp đến quyền sở hữu tài sản của bên cho thuê, cấu thành vi phạm pháp luật dân sự.',
  'Bộ luật Dân sự 2015, Điều 472'
);

addQ(
  'vận dụng',
  'Ông Thành là Trưởng phòng Tài chính của một cơ quan nhà nước, thường xuyên đi làm muộn 2 tiếng và tự ý bỏ nhiệm sở đi đánh golf trong giờ hành chính. Cơ quan đã họp hội đồng kỷ luật và ra quyết định khiển trách ông Thành. Loại trách nhiệm pháp lý áp dụng đối với ông Thành là gì?',
  [
    'Trách nhiệm pháp lý dân sự',
    'Trách nhiệm pháp lý hành chính',
    'Trách nhiệm pháp lý kỷ luật',
    'Trách nhiệm pháp lý hình sự'
  ],
  2,
  'Hành vi vi phạm kỷ luật lao động, nghĩa vụ của cán bộ, công chức trong hoạt động công vụ thì bị người đứng đầu cơ quan áp dụng hình thức xử lý kỷ luật (khiển trách, cảnh cáo, hạ bậc lương, cách chức, buộc thôi việc).',
  'Luật Cán bộ, công chức 2008 (sửa đổi 2019)'
);

addQ(
  'vận dụng',
  'Do có mâu thuẫn cá nhân từ trước, Long (19 tuổi) mang theo dao nhọn đến nhà Hùng để trả thù. Tại đây, Long đã đâm Hùng gây thương tích nặng với tỷ lệ tổn thương cơ thể 45%. Khách thể bị hành vi của Long xâm phạm là gì?',
  [
    'Trật tự quản lý tài sản công cộng',
    'Sự tôn nghiêm của pháp luật dân sự',
    'Quyền sở hữu hung khí nguy hiểm của gia đình',
    'Tính mạng, sức khỏe của con người được luật hình sự bảo vệ'
  ],
  3,
  'Khách thể của hành vi cố ý gây thương tích là quyền được bảo vệ tính mạng, sức khỏe của con người - quan hệ xã hội được luật hình sự bảo vệ nghiêm ngặt.',
  'Bộ luật Hình sự 2015, Điều 134'
);

addQ(
  'vận dụng',
  'Chị Mai (25 tuổi) đến Ủy ban nhân dân xã X để làm thủ tục đăng ký kết hôn với anh Cường (27 tuổi). Khi hai bên đáp ứng đầy đủ các điều kiện luật định, Chủ tịch UBND xã đã trao Giấy chứng nhận kết hôn cho hai người. Hành vi cấp giấy chứng nhận kết hôn của UBND xã thuộc hình thức thực hiện pháp luật nào?',
  [
    'Áp dụng pháp luật',
    'Tuân thủ pháp luật',
    'Sử dụng pháp luật',
    'Thi hành pháp luật'
  ],
  0,
  'Cơ quan nhà nước có thẩm quyền căn cứ vào quy định pháp luật để công nhận hoặc xác lập quyền, nghĩa vụ cho các chủ thể cụ thể là hoạt động Áp dụng pháp luật.',
  'Giáo trình Pháp luật đại cương - Áp dụng pháp luật'
);

addQ(
  'vận dụng',
  'Trong giờ làm việc tại công trường, kỹ sư Nam thấy lan can an toàn tầng 5 bị lỏng lẻo. Nam nghĩ rằng sẽ không có ai đến gần khu vực đó nên không tiến hành rào chắn cảnh báo. Chiều hôm đó, một công nhân đi qua và ngã rơi xuống gãy chân. Lỗi của Nam trong tình huống này thuộc dạng nào?',
  [
    'Lỗi cố ý gián tiếp',
    'Lỗi vô ý vì quá tự tin',
    'Lỗi vô ý do cẩu thả',
    'Lỗi cố ý trực tiếp'
  ],
  1,
  'Nam đã thấy trước nguy cơ tai nạn từ lan can lỏng lẻo nhưng vì quá tự tin cho rằng không ai tới gần nên không rào chắn, dẫn đến hậu quả xảy ra -> Lỗi vô ý vì quá tự tin.',
  'Bộ luật Hình sự 2015, Điều 11'
);

addQ(
  'vận dụng',
  'Tập đoàn vận tải Hoàng Gia ký hợp đồng mua 10 chiếc xe tải của Công ty Cơ khí An Khang. Hợp đồng có hiệu lực pháp luật. Yếu tố nào sau đây là "nội dung" của quan hệ hợp đồng mua bán này?',
  [
    '10 chiếc xe tải được giao dịch',
    'Tập đoàn Hoàng Gia và Công ty Cơ khí An Khang',
    'Quyền yêu cầu giao xe, nhận tiền và nghĩa vụ giao xe, trả tiền của các bên',
    'Lợi nhuận kinh tế mà hai bên hy vọng nhận được'
  ],
  2,
  'Nội dung của quan hệ pháp luật mua bán tài sản chính là quyền và nghĩa vụ pháp lý của bên mua và bên bán (quyền nhận hàng, nghĩa vụ giao hàng đúng chuẩn, quyền nhận tiền, nghĩa vụ thanh toán).',
  'Giáo trình Pháp luật đại cương - Nội dung quan hệ pháp luật'
);

addQ(
  'vận dụng',
  'Khoản 1 Điều 102 Bộ luật Lao động 2019 quy định: "Người sử dụng lao động chỉ được khấu trừ tiền lương của người lao động để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị của người sử dụng lao động...". Quy định này thuộc loại quy phạm pháp luật nào xét theo tính chất mệnh lệnh?',
  [
    'Quy phạm tùy nghi lựa chọn',
    'Quy phạm khuyến khích đạo đức',
    'Quy phạm định nghĩa thuật ngữ',
    'Quy phạm cấm đoán kết hợp cho phép có điều kiện'
  ],
  3,
  'Quy phạm này vừa cấm người sử dụng lao động tùy tiện trừ lương (chỉ được khấu trừ trong trường hợp cụ thể), vừa cho phép khấu trừ có điều kiện hạn chế để bảo vệ người lao động.',
  'Bộ luật Lao động 2019, Điều 102'
);

addQ(
  'vận dụng',
  'Thầy giáo Dũng (giáo viên dạy thực hành lái xe) ngồi cạnh học viên Tâm. Khi thấy Tâm đạp nhầm chân ga hướng về dải phân cách, Dũng kịp thời đạp phanh phụ bên ghế phụ, làm xe dừng lại an toàn. Hành vi can thiệp phanh của thầy giáo Dũng là biểu hiện của:',
  [
    'Thực hiện nghĩa vụ pháp lý trong hoạt động nghề nghiệp',
    'Hành vi trái pháp luật cản trở người khác điều khiển xe',
    'Hành vi vượt quá thẩm quyền quản lý giao thông',
    'Áp dụng biện pháp cưỡng chế nhà nước đặc biệt'
  ],
  0,
  'Giáo viên dạy lái xe ngồi cạnh có nghĩa vụ pháp lý phải giám sát, can thiệp phanh phụ để bảo đảm an toàn giao thông theo quy chế đào tạo sát hạch lái xe.',
  'Luật Giao thông đường bộ 2008'
);

addQ(
  'vận dụng',
  'Do mưa bão cực lớn, nước sông dâng tràn ngập lụt toàn bộ kho hàng của Công ty Dệt Kim Hương Sen, làm hư hại 5.000 mét vải đã bán cho khách hàng nhưng chưa kịp giao. Hiện tượng ngập lụt do bão này trong quan hệ pháp luật được xác định là:',
  [
    'Hành vi pháp lý bất hợp pháp',
    'Sự biến pháp lý (sự kiện bất khả kháng)',
    'Hành vi pháp lý hợp pháp của thiên nhiên',
    'Vi phạm nghĩa vụ giao hàng có lỗi'
  ],
  1,
  'Hiện tượng thiên tai bão lũ xảy ra ngoài ý chí của con người làm phát sinh hậu quả pháp lý (miễn trừ trách nhiệm bồi thường do bất khả kháng) được xếp vào loại "sự biến pháp lý".',
  'Bộ luật Dân sự 2015, Điều 156'
);

addQ(
  'vận dụng',
  'Cháu Huy 8 tuổi được cha mẹ cho phép sang nhà hàng xóm chơi. Trong lúc chơi đùa, Huy lấy que sắt ném làm vỡ màn hình tivi trị giá 15 triệu đồng của nhà hàng xóm. Ai là chủ thể có trách nhiệm bồi thường thiệt hại dân sự trong trường hợp này?',
  [
    'Cháu Huy phải tự chịu trách nhiệm bằng tài sản thừa kế trong tương lai',
    'Hàng xóm tự chịu vì đã cho cháu Huy vào nhà chơi',
    'Cha, mẹ của cháu Huy phải bồi thường toàn bộ thiệt hại',
    'Nhà nước bồi thường từ quỹ phúc lợi xã hội'
  ],
  2,
  'Theo Điều 586 Bộ luật Dân sự 2015, người chưa đủ 15 tuổi gây thiệt hại mà còn cha mẹ thì cha, mẹ phải bồi thường toàn bộ thiệt hại; nếu tài sản của cha mẹ không đủ mà con có tài sản riêng thì lấy tài sản đó để bồi thường phần còn thiếu.',
  'Bộ luật Dân sự 2015, Điều 586'
);

addQ(
  'vận dụng',
  'Một nhân viên bưu điện mở trộm thư của khách hàng để đọc lén nội dung riêng tư. Hành vi của nhân viên này đã xâm phạm trực tiếp đến quyền hiến định nào của công dân?',
  [
    'Quyền tự do ngôn luận và tự do báo chí',
    'Quyền bất khả xâm phạm về thân thể',
    'Quyền tự do kinh doanh dịch vụ viễn thông',
    'Quyền bí mật thư tín, điện thoại, điện tín và các hình thức thông tin riêng tư khác'
  ],
  3,
  'Điều 21 Hiến pháp 2013 quy định mọi người có quyền bí mật thư tín, điện thoại, điện tín và các hình thức trao đổi thông tin riêng tư khác. Hành vi bóc trộm thư xâm phạm quyền này.',
  'Hiến pháp 2013, Điều 21'
);

addQ(
  'vận dụng',
  'Tòa án nhân dân quận Hoàn Kiếm mở phiên tòa xét xử sơ thẩm và tuyên phạt bị cáo Quang 3 năm tù về tội "Trộm cắp tài sản". Hoạt động xét xử và ra bản án của Tòa án là ví dụ điển hình của:',
  [
    'Áp dụng pháp luật',
    'Sử dụng pháp luật',
    'Tuân thủ pháp luật',
    'Quy ước tập quán'
  ],
  0,
  'Tòa án nhân dân là cơ quan tư pháp nhân danh Nhà nước giải quyết vụ án cụ thể và ban hành bản án cưỡng chế là hoạt động Áp dụng pháp luật.',
  'Hiến pháp 2013, Điều 102'
);

addQ(
  'vận dụng',
  'Anh Minh vay của chị Lan 100 triệu đồng, hẹn ngày 01/01/2023 trả. Đến hạn, anh Minh trốn tránh không chịu trả tiền dù có đủ khả năng tài chính. Chị Lan đã làm đơn khởi kiện ra Tòa án. Trong quan hệ này, nghĩa vụ trả tiền của anh Minh thuộc thành phần nào?',
  [
    'Khách thể của quan hệ pháp luật',
    'Nội dung của quan hệ pháp luật',
    'Chủ thể của quan hệ pháp luật',
    'Sự kiện pháp lý chấm dứt giao dịch'
  ],
  1,
  'Nội dung của quan hệ pháp luật vay tài sản bao gồm quyền đòi nợ của chị Lan và nghĩa vụ trả nợ của anh Minh theo đúng cam kết.',
  'Bộ luật Dân sự 2015, Điều 463'
);

addQ(
  'vận dụng',
  'Bác sĩ An trong ca trực cấp cứu, do mải xem điện thoại nên không nhận ra bệnh nhân bị tụt huyết áp nghiêm trọng dẫn đến việc bệnh nhân ngừng tim tử vong. Thái độ tâm lý của bác sĩ An thuộc dạng lỗi nào?',
  [
    'Lỗi cố ý gián tiếp',
    'Lỗi cố ý trực tiếp',
    'Lỗi vô ý do cẩu thả',
    'Lỗi vô ý vì quá tự tin'
  ],
  2,
  'Bác sĩ An với trách nhiệm chuyên môn nghề nghiệp phải biết và có thể nhận ra dấu hiệu tụt huyết áp nhưng do chểnh mảng mải xem điện thoại nên không thấy trước hậu quả nguy hại -> Lỗi vô ý do cẩu thả.',
  'Bộ luật Hình sự 2015, Điều 11'
);

addQ(
  'vận dụng',
  'Nhà máy hóa chất Hưng Thịnh lén lút xả chất thải chưa qua xử lý ra dòng sông cạnh bên vào ban đêm nhằm tiết kiệm chi phí vận hành hệ thống lọc. Hành vi xả thải trái phép của nhà máy có dấu hiệu mặt chủ quan là:',
  [
    'Lỗi vô ý vì hoàn cảnh kỹ thuật bất khả kháng',
    'Không có lỗi vì công ty là pháp nhân kinh doanh',
    'Lỗi vô ý vì tin tưởng dòng sông có khả năng tự làm sạch',
    'Lỗi cố ý trực tiếp nhằm thu lợi nhuận bất chính'
  ],
  3,
  'Hành vi xả trộm ban đêm chứng tỏ chủ thể nhận thức rõ hành vi vi phạm pháp luật bảo vệ môi trường, thấy trước hậu quả và mong muốn thực hiện để trục lợi -> Lỗi cố ý trực tiếp.',
  'Luật Bảo vệ môi trường 2020'
);

addQ(
  'vận dụng',
  'Ông Dân ký di chúc hợp pháp để lại toàn bộ ngôi nhà thuộc sở hữu riêng của mình cho con gái út. Khi ông Dân qua đời, di chúc phát sinh hiệu lực phân chia di sản. Sự kiện "ông Dân qua đời" được gọi là gì trong khoa học pháp lý?',
  [
    'Sự biến pháp lý làm phát sinh quyền thừa kế của người con',
    'Hành vi pháp lý của người con gái',
    'Vi phạm nghĩa vụ cấp dưỡng',
    'Hành vi hành chính của cơ quan công chứng'
  ],
  0,
  'Cái chết của một người là hiện tượng tự nhiên (sự biến pháp lý) ngoài ý muốn chủ quan của người thừa kế nhưng làm phát sinh quan hệ mở thừa kế và chuyển giao quyền sở hữu tài sản.',
  'Bộ luật Dân sự 2015, Điều 611'
);

addQ(
  'vận dụng',
  'Chị Thu kinh doanh quán cà phê, hàng tháng đều kê khai và nộp thuế giá trị gia tăng, thuế thu nhập cá nhân đầy đủ vào Kho bạc Nhà nước. Việc nộp thuế của chị Thu thuộc hình thức thực hiện pháp luật nào?',
  [
    'Sử dụng pháp luật',
    'Thi hành pháp luật',
    'Tuân thủ pháp luật',
    'Áp dụng pháp luật'
  ],
  1,
  'Chị Thu chủ động thực hiện nghĩa vụ nộp thuế mà pháp luật quy định phải làm bằng hành động tích cực, đó là hình thức Thi hành pháp luật.',
  'Giáo trình Pháp luật đại cương - Thi hành pháp luật'
);

addQ(
  'vận dụng',
  'Một nhân viên lái xe chở hàng vượt đèn vàng tại ngã tư và đâm vào dải phân cách gây hư hỏng cột đèn chiếu sáng công cộng trị giá 30 triệu đồng. Nhân viên này có thể phải chịu đồng thời những loại trách nhiệm pháp lý nào?',
  [
    'Chỉ chịu trách nhiệm kỷ luật nội bộ cơ quan',
    'Chỉ chịu trách nhiệm hình sự phạt tù',
    'Trách nhiệm hành chính (phạt vi phạm giao thông) và trách nhiệm dân sự (bồi thường thiệt hại cột đèn)',
    'Miễn trừ hoàn toàn trách nhiệm vì đang thực hiện nhiệm vụ vận chuyển'
  ],
  2,
  'Hành vi vừa vi phạm quy tắc hành chính giao thông (bị phạt tiền vi phạm hành chính), vừa gây thiệt hại tài sản công cộng (phải bồi thường thiệt hại dân sự ngoài hợp đồng) nên phải chịu cả trách nhiệm hành chính và trách nhiệm dân sự.',
  'Luật Giao thông đường bộ & Bộ luật Dân sự 2015'
);

addQ(
  'vận dụng',
  'Do muốn giải quyết tranh chấp đất đai nhanh chóng, ông Hậu đưa 50 triệu đồng cho cán bộ địa chính xã để làm sai lệch hồ sơ trích đo. Hành vi của ông Hậu cấu thành loại vi phạm pháp luật nào?',
  [
    'Vi phạm kỷ luật hành chính',
    'Vi phạm dân sự về giao dịch vô hiệu',
    'Vi phạm đạo đức làng xóm không đáng xử lý',
    'Vi phạm pháp luật hình sự (tội đưa hối lộ)'
  ],
  3,
  'Hành vi đưa tiền hoặc lợi ích vật chất cho người có chức vụ quyền hạn để làm theo yêu cầu của mình cấu thành tội Đưa hối lộ theo Điều 364 Bộ luật Hình sự.',
  'Bộ luật Hình sự 2015, Điều 364'
);

addQ(
  'vận dụng',
  'Anh Tuấn (17 tuổi) đi xe máy có dung tích xi lanh 110cc. Cảnh sát giao thông phát hiện và lập biên bản vì chưa đủ tuổi điều khiển loại xe này theo luật định. Biện pháp xử lý của CSGT đối với anh Tuấn thể hiện tính chất gì của pháp luật?',
  [
    'Tính quyền lực bắt buộc chung và cưỡng chế nhà nước',
    'Tính tự nguyện thỏa hiệp giữa cá nhân và chính quyền',
    'Tính giáo dục khuyên răn không mang tính pháp lý',
    'Tính định hướng dư luận xã hội'
  ],
  0,
  'Xử phạt cưỡng chế đối với hành vi chưa đủ tuổi điều khiển xe thể hiện tính quyền lực bắt buộc chung và tính cưỡng chế nhà nước của pháp luật.',
  'Luật Giao thông đường bộ 2008'
);

addQ(
  'vận dụng',
  'Vợ chồng ông Nam có một người con trai chung là Dũng (15 tuổi). Dũng đánh nhau làm rách tai bạn học phải vào viện khâu 10 mũi hết 6 triệu đồng. Trách nhiệm bồi thường chi phí chữa trị này thuộc về ai?',
  [
    'Bản thân Dũng phải tự làm thêm kiếm tiền bồi thường',
    'Cha mẹ của Dũng (ông bà Nam) phải bồi thường thiệt hại',
    'Nhà trường nơi hai em theo học phải trả toàn bộ viện phí',
    'Gia đình bạn bị đánh tự chi trả vì con xô xát bên ngoài'
  ],
  1,
  'Theo quy định pháp luật dân sự, người từ đủ 15 tuổi đến chưa đủ 18 tuổi nếu gây thiệt hại mà có tài sản riêng thì bồi thường bằng tài sản của mình, nếu không có tài sản riêng thì cha mẹ phải bồi thường thay.',
  'Bộ luật Dân sự 2015, Điều 586'
);

addQ(
  'vận dụng',
  'Một nhân viên phòng kế toán phát hiện thủ quỹ công ty chuyển tiền trái phép vào tài khoản cá nhân nhưng nhân viên này im lặng không tố giác để nhận chia tiền hoa hồng. Hành vi của nhân viên kế toán thể hiện yếu tố nào trong vi phạm pháp luật?',
  [
    'Hành vi hợp pháp mang lại lợi nhuận phụ',
    'Hành vi không thể xử lý vì không trực tiếp lấy tiền',
    'Hành vi vi phạm pháp luật dưới dạng không hành động (không tố giác, đồng lõa)',
    'Sự kiện bất khả kháng do sức ép từ cấp trên'
  ],
  2,
  'Vi phạm pháp luật có thể thể hiện dưới dạng hành động hoặc không hành động (không thực hiện nghĩa vụ tố giác, ngăn chặn mà pháp luật bắt buộc phải làm khi phát hiện tội phạm).',
  'Bộ luật Hình sự 2015, Điều 19'
);

addQ(
  'vận dụng',
  'Quy định: "Người nào biết mình bị nhiễm HIV mà cố ý lây truyền bệnh cho người khác thì bị phạt tù từ 01 năm đến 03 năm". Bộ phận "Người nào biết mình bị nhiễm HIV mà cố ý lây truyền bệnh cho người khác" đóng vai trò là bộ phận nào?',
  [
    'Chế tài hình sự',
    'Quy định pháp lý',
    'Khách thể quan hệ',
    'Giả định của quy phạm pháp luật'
  ],
  3,
  'Phần nêu chủ thể (người biết mình bị nhiễm HIV) và hoàn cảnh, hành vi thực tế (cố ý lây truyền cho người khác) chính là bộ phận Giả định của quy phạm.',
  'Bộ luật Hình sự 2015, Điều 148'
);

addQ(
  'vận dụng',
  'Hai doanh nghiệp A và B ký kết hợp đồng đại lý mua bán phân bón. Sau đó, Nhà nước ban hành lệnh cấm lưu hành loại phân bón này do chứa hoạt chất độc hại môi trường, khiến hợp đồng không thể tiếp tục thực hiện. Văn bản cấm của Nhà nước tác động đến quan hệ hợp đồng này như thế nào?',
  [
    'Làm chấm dứt quan hệ hợp đồng do đối tượng hợp đồng trở thành bất hợp pháp',
    'Buộc bên B phải trả tiền phạt vi phạm cho bên A',
    'Doanh nghiệp A được quyền khởi kiện đòi Nhà nước trả lợi nhuận kỳ vọng',
    'Hợp đồng vẫn tiếp tục có hiệu lực nếu hai bên đồng ý thanh toán bằng ngoại tệ'
  ],
  0,
  'Khi đối tượng của hợp đồng không còn được phép lưu hành theo quy định mới của pháp luật thì hợp đồng chấm dứt do đối tượng không thể thực hiện được.',
  'Bộ luật Dân sự 2015, Điều 422'
);

addQ(
  'vận dụng',
  'Tài xế xe khách thấy xe tải phía trước phanh gấp, nếu đâm thẳng thì hành khách trên xe mình sẽ thương vong nặng nề, nên đã đánh lái sang phải va quẹt vào một xe máy đang đỗ bên đường làm gãy gương và bẹp sườn xe máy. Hành động của tài xế xe khách được đánh giá là:',
  [
    'Cố ý hủy hoại tài sản công dân',
    'Hành động trong tình thế cấp thiết nhằm tránh thiệt hại lớn hơn cho tính mạng hành khách',
    'Vi phạm giao thông nghiêm trọng phải tước bằng lái vĩnh viễn',
    'Tự vệ phòng vệ chính đáng đối với xe tải'
  ],
  1,
  'Tình thế cấp thiết là tình thế người vì muốn tránh một nguy cơ đang đe dọa lợi ích hợp pháp của người khác mà không còn cách nào khác phải có hành vi gây thiệt hại nhỏ hơn thiệt hại cần ngăn ngừa.',
  'Bộ luật Hình sự 2015, Điều 23'
);

addQ(
  'vận dụng',
  'Công ty X sa thải một công nhân vì người này tham gia đình công đòi tăng lương hợp pháp theo đúng trình tự luật Lao động. Quyết định sa thải của Công ty X bị xác định là:',
  [
    'Hành vi sử dụng quyền quản lý hợp pháp của chủ doanh nghiệp',
    'Quyết định mang tính áp dụng pháp luật tuyệt đối',
    'Hành vi trái pháp luật lao động xâm phạm quyền đình công hợp pháp của người lao động',
    'Hành vi dân sự vô hại chỉ cần bồi thường 1 tháng lương'
  ],
  2,
  'Người lao động có quyền đình công hợp pháp theo trình tự luật định. Người sử dụng lao động trù dập, sa thải người lao động vì lý do tham gia đình công hợp pháp là hành vi trái pháp luật lao động.',
  'Bộ luật Lao động 2019, Điều 208'
);

addQ(
  'vận dụng',
  'Một nhân viên bảo vệ cửa hàng điện máy bắt quả tang đối tượng trộm cắp máy tính bảng. Nhân viên bảo vệ đã khống chế đối tượng và lập tức áp giải đến trụ sở Công an phường gần nhất. Hành vi của nhân viên bảo vệ thuộc hình thức:',
  [
    'Lạm quyền xâm phạm tự do thân thể người khác',
    'Sử dụng vũ lực trái thẩm quyền điều tra tư pháp',
    'Hành vi hành chính đặc biệt của lực lượng dân phòng',
    'Bắt người phạm tội quả tang hợp pháp được pháp luật cho phép mọi công dân thực hiện'
  ],
  3,
  'Theo Bộ luật Tố tụng hình sự, đối với người đang thực hiện tội phạm hoặc ngay sau khi thực hiện tội phạm thì bị phát hiện hoặc bị đuổi bắt (phạm tội quả tang) thì bất kỳ người nào cũng có quyền bắt và giải ngay đến cơ quan có thẩm quyền.',
  'Bộ luật Tố tụng hình sự 2015, Điều 111'
);

addQ(
  'vận dụng',
  'Quy định: "Công dân có nghĩa vụ trung thành với Tổ quốc. Phản bội Tổ quốc là tội nặng nhất". Quy phạm pháp luật này đặt ra nghĩa vụ gì cho công dân?',
  [
    'Nghĩa vụ thi hành pháp luật bắt buộc mang tính thiêng liêng cao nhất',
    'Quyền lựa chọn tự do tùy theo nguyện vọng cá nhân',
    'Quy tắc ứng xử đạo đức chỉ mang tính kêu gọi',
    'Nghĩa vụ dân sự có thể chuyển giao cho người khác thay thế'
  ],
  0,
  'Nghĩa vụ trung thành với Tổ quốc là nghĩa vụ hiến định tối cao bắt buộc mọi công dân phải thi hành, vi phạm sẽ bị xử lý nghiêm khắc nhất bằng pháp luật hình sự.',
  'Hiến pháp 2013, Điều 44'
);

addQ(
  'vận dụng',
  'Anh Quang ký hợp đồng lao động có thời hạn 1 năm với Công ty K. Trong hợp đồng có điều khoản: "Người lao động không được kết hôn trong suốt thời hạn hợp đồng". Điều khoản này có giá trị pháp lý như thế nào?',
  [
    'Có hiệu lực vì hai bên đã tự nguyện ký kết và cam kết',
    'Vô hiệu vì vi phạm điều cấm của luật và xâm phạm quyền tự do kết hôn hiến định của công dân',
    'Có hiệu lực nếu công ty có hỗ trợ thêm phụ cấp độc thân',
    'Chỉ vô hiệu khi anh Quang gửi đơn khiếu nại lên Bộ Lao động'
  ],
  1,
  'Quyền kết hôn là quyền tự do nhân thân cơ bản được Hiến pháp và Luật Hôn nhân & Gia đình bảo vệ. Mọi thỏa thuận hạn chế hoặc tước bỏ quyền kết hôn đều vi phạm điều cấm của luật và bị vô hiệu.',
  'Bộ luật Dân sự 2015 & Luật Hôn nhân và Gia đình 2014'
);

addQ(
  'vận dụng',
  'Ông Quang bán đàn bò 10 con cho ông Thắng. Hai bên thỏa thuận ông Thắng trả trước 50% tiền, nhận bò về nuôi, số tiền còn lại sẽ trả sau 2 tháng và khi đó quyền sở hữu đàn bò mới chính thức chuyển giao cho ông Thắng. Sau 1 tuần, một con bò sinh ra một chú bê con khỏe mạnh. Chú bê con này thuộc sở hữu của ai theo nguyên tắc pháp luật dân sự nếu không có thỏa thuận khác?',
  [
    'Thuộc sở hữu của ông Quang vì chưa nhận đủ 100% tiền mua bò',
    'Thuộc sở hữu của chính quyền địa phương nơi chăn thả',
    'Thuộc sở hữu của ông Thắng vì hoa lợi, lợi tức sinh ra từ thời điểm tài sản được chuyển giao quyền chiếm hữu sử dụng',
    'Thuộc sở hữu chung chia đôi giữa hai ông'
  ],
  2,
  'Theo quy định về chuyển quyền sở hữu và hưởng hoa lợi, lợi tức từ tài sản: bên mua được hưởng hoa lợi, lợi tức từ tài sản kể từ thời điểm tài sản được giao, trừ trường hợp có thỏa thuận khác.',
  'Bộ luật Dân sự 2015, Điều 448'
);

addQ(
  'vận dụng',
  'Bà Lan thuê căn nhà của ông Sơn. Hợp đồng quy định bà Lan chỉ được dùng để ở. Tuy nhiên, bà Lan lại tự ý cải tạo mở xưởng sản xuất pháo hoa trái phép trong nhà, gây nguy cơ cháy nổ cao cho cả khu phố. Ông Sơn có quyền gì căn cứ theo pháp luật dân sự?',
  [
    'Buộc phải im lặng chờ hết thời hạn 3 năm hợp đồng',
    'Tự ý tịch thu toàn bộ pháo hoa và bán ra thị trường để trừ tiền nhà',
    'Chỉ được quyền tăng tiền thuê nhà gấp 3 lần',
    'Đơn phương chấm dứt hợp đồng thuê nhà và yêu cầu bồi thường thiệt hại nếu có'
  ],
  3,
  'Bên cho thuê có quyền đơn phương chấm dứt thực hiện hợp đồng thuê tài sản và yêu cầu bồi thường thiệt hại nếu bên thuê sử dụng tài sản không đúng mục đích, không đúng công dụng của tài sản thuê.',
  'Bộ luật Dân sự 2015, Điều 481'
);

addQ(
  'vận dụng',
  'Khi nghiên cứu về nhà nước, dấu hiệu phân biệt cơ bản nhất giữa Nhà nước với các tổ chức chính trị - xã hội khác trong cùng một quốc gia là gì?',
  [
    'Nhà nước nắm giữ chủ quyền quốc gia và có quyền ban hành pháp luật có tính bắt buộc chung toàn xã hội',
    'Nhà nước có trụ sở đặt tại các vị trí trung tâm',
    'Nhà nước kết nạp thành viên thông qua kết nạp đảng viên',
    'Nhà nước có các tổ chức từ thiện quy mô lớn'
  ],
  0,
  'Chỉ có Nhà nước mới nắm giữ chủ quyền quốc gia, đại diện chính thức cho toàn xã hội và có quyền ban hành pháp luật mang tính quyền lực bắt buộc chung được bảo đảm bằng sức mạnh cưỡng chế.',
  'Giáo trình Pháp luật đại cương - Đặc trưng của nhà nước'
);

addQ(
  'vận dụng',
  'Một công dân gửi đơn tố cáo hành vi tham nhũng của giám đốc sở lên Chủ tịch UBND tỉnh. Hành vi gửi đơn tố cáo của công dân là biểu hiện của hình thức thực hiện pháp luật nào?',
  [
    'Tuân thủ pháp luật',
    'Sử dụng pháp luật',
    'Áp dụng pháp luật',
    'Thi hành pháp luật'
  ],
  1,
  'Công dân thực hiện quyền tố cáo được pháp luật trao cho mình nhằm bảo vệ lợi ích công cộng và quyền lợi hợp pháp là hình thức Sử dụng pháp luật.',
  'Luật Tố cáo 2018'
);

addQ(
  'vận dụng',
  'Quy định: "Tài sản thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lý...". Khách thể của quyền sở hữu toàn dân này bao gồm những tài sản nào?',
  [
    'Tất cả xe máy và ô tô của người dân đăng ký lưu hành',
    'Tất cả hàng hóa trong các siêu thị tư nhân',
    'Đất đai, tài nguyên nước, khoáng sản, vùng trời, vùng biển và các tài sản do Nhà nước đầu tư quản lý',
    'Tiền tiết kiệm gửi tại các ngân hàng thương mại cổ phần'
  ],
  2,
  'Theo Điều 53 Hiến pháp 2013, đất đai, tài nguyên nước, khoáng sản, nguồn lợi ở vùng biển, vùng trời, tài nguyên thiên nhiên khác và các tài sản do Nhà nước đầu tư, quản lý là tài sản công thuộc sở hữu toàn dân.',
  'Hiến pháp 2013, Điều 53'
);

addQ(
  'vận dụng',
  'Ông Minh phát hiện một cổ vật bằng đồng chôn sâu dưới lòng đất trong vườn nhà mình khi đào móng xây nhà. Theo quy định pháp luật hiện hành, quyền sở hữu đối với cổ vật này thuộc về ai?',
  [
    'Hoàn toàn thuộc về ông Minh vì nằm trong đất thuộc quyền sử dụng của ông',
    'Thuộc về người chủ đất đời trước đã bán mảnh đất đó cho ông Minh',
    'Thuộc về thợ hồ đã trực tiếp xúc đất phát hiện ra cổ vật',
    'Thuộc sở hữu toàn dân do Nhà nước đại diện quản lý, ông Minh được thưởng một khoản tiền theo luật định'
  ],
  3,
  'Di vật, cổ vật, bảo vật quốc gia tìm thấy trong lòng đất thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu. Người phát hiện và giao nộp được thưởng một khoản tiền theo quy định.',
  'Bộ luật Dân sự 2015, Điều 229 & Luật Di sản văn hóa'
);

addQ(
  'vận dụng',
  'Cán bộ hải quan phát hiện lô hàng nhập khẩu của Công ty Á Đông khai báo là vải lụa nhưng thực tế bên trong chứa 500 chiếc điện thoại di động thông minh nhằm trốn thuế 1,2 tỷ đồng. Hành vi của công ty đã xâm hại trực tiếp đến khách thể nào?',
  [
    'Trật tự quản lý kinh tế và chính sách quản lý thuế xuất nhập khẩu của Nhà nước',
    'Quyền lợi của hãng sản xuất điện thoại ở nước ngoài',
    'Quyền sở hữu công nghiệp đối với nhãn hiệu điện thoại',
    'Trật tự an toàn giao thông đường biển quốc tế'
  ],
  0,
  'Khách thể bị xâm hại trực tiếp là trật tự quản lý kinh tế của Nhà nước trong lĩnh vực hải quan và chính sách thu ngân sách thuế xuất nhập khẩu.',
  'Bộ luật Hình sự 2015, Điều 200'
);

addQ(
  'vận dụng',
  'Anh Quân lái xe chở khách từ Hà Nội về Hải Phòng. Do buồn ngủ, Quân đã đi lấn làn đường ngược chiều và đâm vào dải phân cách. Hậu quả làm 2 hành khách trên xe bị chấn thương sọ não. Lỗi của Quân là:',
  [
    'Lỗi cố ý trực tiếp vì biết buồn ngủ nguy hiểm vẫn lái',
    'Lỗi vô ý vì cẩu thả do không giữ sự tỉnh táo và làm chủ tay lái',
    'Không có lỗi vì buồn ngủ là phản ứng sinh lý tự nhiên ngoài tầm kiểm soát',
    'Lỗi cố ý gián tiếp muốn hành khách bị thương'
  ],
  1,
  'Tài xế có nghĩa vụ bắt buộc phải bảo đảm sức khỏe và tỉnh táo khi lái xe, biết buồn ngủ nhưng vẫn chủ quan lái tiếp dẫn đến tai nạn -> Lỗi vô ý vì cẩu thả.',
  'Bộ luật Hình sự 2015, Điều 260'
);

addQ(
  'vận dụng',
  'Chị Hạnh vay ngân hàng 500 triệu đồng để mở rộng xưởng may. Để bảo đảm khoản vay, chị Hạnh đã thế chấp quyền sử dụng đất mang tên mình. Trong quan hệ thế chấp này, quyền sử dụng đất của chị Hạnh đóng vai trò là:',
  [
    'Chủ thể của hợp đồng thế chấp',
    'Nội dung của hợp đồng tín dụng',
    'Khách thể của biện pháp bảo đảm thực hiện nghĩa vụ',
    'Sự biến pháp lý phát sinh khoản vay'
  ],
  2,
  'Quyền sử dụng đất là tài sản dùng để bảo đảm, đóng vai trò là khách thể mà quyền xử lý nợ của ngân hàng hướng tới nếu chị Hạnh không trả được nợ.',
  'Bộ luật Dân sự 2015, Điều 317'
);

addQ(
  'vận dụng',
  'Chủ tịch Ủy ban nhân dân huyện ra quyết định xử phạt vi phạm hành chính đối với cơ sở karaoke vi phạm quy định phòng cháy chữa cháy số tiền 35 triệu đồng và đình chỉ hoạt động 6 tháng. Văn bản xử phạt này thuộc loại văn bản nào?',
  [
    'Văn bản quy phạm pháp luật của chính quyền địa phương',
    'Quy chế nội bộ của ngành văn hóa thể thao',
    'Tập quán pháp về kinh doanh dịch vụ giải trí',
    'Văn bản áp dụng pháp luật mang tính cá biệt'
  ],
  3,
  'Quyết định xử phạt vi phạm hành chính áp dụng cho một đối tượng cụ thể (cơ sở karaoke) giải quyết vụ việc cụ thể là văn bản áp dụng pháp luật cá biệt.',
  'Luật Xử lý vi phạm hành chính 2012'
);

addQ(
  'vận dụng',
  'Tổ chức nào sau đây giữ vai trò là lực lượng lãnh đạo Nhà nước và xã hội Việt Nam theo quy định tại Điều 4 Hiến pháp 2013?',
  [
    'Đảng Cộng sản Việt Nam',
    'Mặt trận Tổ quốc Việt Nam',
    'Tổng Liên đoàn Lao động Việt Nam',
    'Quốc hội nước Cộng hòa XHCN Việt Nam'
  ],
  0,
  'Điều 4 Hiến pháp 2013 quy định: Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội.',
  'Hiến pháp 2013, Điều 4'
);

addQ(
  'vận dụng',
  'Trong một vụ tranh chấp ranh giới đất đai giữa ông Nam và ông Bắc, Tòa án nhân dân huyện đã hòa giải thành công và lập Biên bản hòa giải thành. Biên bản này có giá trị pháp lý ra sao?',
  [
    'Chỉ là bản ghi nhớ danh dự không có giá trị cưỡng chế thi hành',
    'Có hiệu lực pháp luật thi hành ngay và các bên không có quyền kháng cáo theo thủ tục phúc thẩm',
    'Bị hủy bỏ nếu một trong hai bên đổi ý sau 3 ngày làm việc',
    'Phải chuyển lên Tòa án tối cao phê duyệt mới có giá trị'
  ],
  1,
  'Quyết định công nhận sự thỏa thuận của các đương sự (sau khi hòa giải thành) có hiệu lực pháp luật ngay sau khi được ban hành và không bị kháng cáo, kháng nghị theo thủ tục phúc thẩm.',
  'Bộ luật Tố tụng dân sự 2015, Điều 212'
);

addQ(
  'vận dụng',
  'Một công ty cổ phần xây dựng không đóng bảo hiểm xã hội bắt buộc cho 150 công nhân trong suốt 2 năm dù công ty vẫn khấu trừ tiền đóng bảo hiểm hàng tháng từ lương của công nhân. Hành vi của công ty này vi phạm điều gì?',
  [
    'Vi phạm đạo đức kinh doanh nhưng không vi phạm luật',
    'Vi phạm hợp đồng mua bán dịch vụ tư nhân',
    'Vi phạm pháp luật lao động và pháp luật bảo hiểm xã hội, có dấu hiệu tội trốn đóng BHXH',
    'Chỉ phải chịu xử lý nội bộ của ban kiểm soát công ty'
  ],
  2,
  'Hành vi trốn đóng bảo hiểm xã hội bắt buộc cho người lao động là vi phạm nghiêm trọng pháp luật lao động và có thể bị xử lý hình sự theo Điều 216 Bộ luật Hình sự.',
  'Bộ luật Hình sự 2015, Điều 216'
);

addQ(
  'vận dụng',
  'Hai sinh viên đại học thuê phòng trọ. Sau 1 tháng, chủ trọ tự ý tăng tiền phòng lên gấp đôi so với hợp đồng đã ký và dọa đuổi nếu không trả thêm. Nhận định nào sau đây là đúng về mặt pháp lý?',
  [
    'Chủ nhà có quyền tuyệt đối tăng giá bất cứ lúc nào vì là chủ sở hữu',
    'Sinh viên phải nghe theo vì bên đi thuê không có quyền dân sự',
    'Hợp đồng thuê phòng trọ giữa cá nhân không có giá trị pháp lý',
    'Chủ trọ đã vi phạm nghĩa vụ hợp đồng, bên thuê có quyền yêu cầu thực hiện đúng giá thỏa thuận hoặc khiếu nại khởi kiện'
  ],
  3,
  'Hợp đồng thuê tài sản có giá trị bắt buộc thi hành đối với các bên. Bên cho thuê không được tự ý đơn phương tăng giá thuê trái với thỏa thuận trong thời hạn hợp đồng.',
  'Bộ luật Dân sự 2015, Điều 472'
);

addQ(
  'vận dụng',
  'Một người phát hiện người khác đang đuối nước kêu cứu nhưng bản thân biết bơi giỏi và có phao cứu sinh bên cạnh lại bỏ đi vì ghét người đó, dẫn đến nạn nhân tử vong. Hành vi của người này bị coi là:',
  [
    'Vi phạm pháp luật hình sự (tội không cứu giúp người đang ở trong tình trạng nguy hiểm đến tính mạng)',
    'Hành vi bình thường vì không ai bắt buộc phải cứu người lạ',
    'Vi phạm đạo đức nhưng pháp luật không có chế tài xử lý',
    'Sự kiện tự nhiên do nạn nhân tự bơi không cẩn thận'
  ],
  0,
  'Điều 132 Bộ luật Hình sự quy định tội không cứu giúp người đang ở trong tình trạng nguy hiểm đến tính mạng khi người đó thấy người khác đang trong tình trạng nguy hiểm, có điều kiện cứu giúp mà không cứu dẫn đến hậu quả chết người.',
  'Bộ luật Hình sự 2015, Điều 132'
);

addQ(
  'vận dụng',
  'Chị Mai (16 tuổi, làm thuê tại quán ăn) tự mình dùng số tiền tiết kiệm 30 triệu đồng mua một chiếc xe máy điện cũ để đi làm mà không cần cha mẹ đồng ý. Giao dịch này của chị Mai có hiệu lực pháp luật không?',
  [
    'Hoàn toàn vô hiệu vì người dưới 18 tuổi không được mua bán bất kỳ tài sản nào',
    'Có hiệu lực pháp luật vì người từ đủ 15 đến dưới 18 tuổi có quyền tự mình xác lập giao dịch bằng tài sản riêng của mình',
    'Bị vô hiệu nếu cha mẹ đến quán ăn đòi lại tiền',
    'Phải có công chứng nhà nước mới có hiệu lực'
  ],
  1,
  'Theo khoản 4 Điều 21 Bộ luật Dân sự 2015, người từ đủ 15 tuổi đến chưa đủ 18 tuổi tự mình xác lập, thực hiện giao dịch dân sự, trừ giao dịch liên quan đến bất động sản, động sản phải đăng ký và giao dịch khác theo quy định phải được người đại diện đồng ý.',
  'Bộ luật Dân sự 2015, Điều 21'
);

addQ(
  'vận dụng',
  'Ông Thành lái ô tô trên cao tốc với tốc độ 110 km/h (đúng tốc độ cho phép). Bất ngờ xe đi trước bị nổ lốp quay ngang đường. Nhờ duy trì khoảng cách an toàn 100m, ông Thành đã phanh xe dừng lại cách xe trước 5m, không xảy ra va chạm. Việc ông Thành giữ khoảng cách an toàn là biểu hiện của:',
  [
    'Sử dụng pháp luật giao thông',
    'Thi hành pháp luật (thực hiện nghĩa vụ giữ khoảng cách an toàn bắt buộc)',
    'Áp dụng pháp luật xử lý tình huống',
    'Thỏa thuận dân sự trên đường'
  ],
  1,
  'Giữ khoảng cách an toàn khi điều khiển xe trên đường cao tốc là nghĩa vụ bắt buộc mà pháp luật yêu cầu tài xế phải thực hiện tích cực, thuộc hình thức Thi hành pháp luật.',
  'Luật Giao thông đường bộ 2008'
);

addQ(
  'vận dụng',
  'Cơ quan Thuế quận Đống Đa kiểm tra quyết toán thuế và ban hành quyết định truy thu 80 triệu đồng tiền thuế thu nhập doanh nghiệp của Công ty TNHH Sao Mai. Quyết định truy thu thuế này được xếp vào loại văn bản nào?',
  [
    'Văn bản quy phạm pháp luật của ngành tài chính',
    'Hiệp định tài chính song phương',
    'Văn bản áp dụng pháp luật mang tính quyền lực nhà nước',
    'Văn bản thỏa thuận hợp tác thương mại'
  ],
  2,
  'Quyết định của cơ quan Thuế áp dụng trực tiếp cho đối tượng nộp thuế cụ thể để truy thu số tiền cụ thể là văn bản áp dụng pháp luật.',
  'Luật Quản lý thuế 2019'
);

addQ(
  'vận dụng',
  'Một người phụ nữ mang thai đến tháng thứ 8 bị người khác cố ý đánh đập dã man dẫn đến việc sảy thai. Khách thể của tội phạm trong trường hợp này bị tăng nặng mức độ nguy hiểm là do yếu tố nào?',
  [
    'Xâm phạm tài sản vô giá của gia đình',
    'Gây bức xúc cho dư luận phụ nữ địa phương',
    'Vi phạm đạo lý kính trên nhường dưới',
    'Xâm hại trực tiếp sức khỏe của người phụ nữ mà người phạm tội biết rõ là đang có thai'
  ],
  3,
  'Hành vi phạm tội đối với phụ nữ mà người phạm tội biết là có thai là tình tiết tăng nặng trách nhiệm hình sự hoặc định khung tăng nặng trong các tội xâm phạm tính mạng, sức khỏe con người.',
  'Bộ luật Hình sự 2015, Điều 134'
);

addQ(
  'vận dụng',
  'Anh Dũng (20 tuổi) tự ý phá khóa xe máy của người khác để lấy đi bán lấy tiền tiêu xài cá nhân. Giá trị chiếc xe được định giá là 45 triệu đồng. Hành vi của Dũng thỏa mãn cấu thành của loại vi phạm nào?',
  [
    'Tội phạm (vi phạm pháp luật hình sự về tội trộm cắp tài sản)',
    'Vi phạm hành chính về trật tự vỉa hè',
    'Tranh chấp dân sự về việc chiếm hữu tài sản không có căn cứ',
    'Vi phạm kỷ luật thanh niên'
  ],
  0,
  'Hành vi lén lút chiếm đoạt tài sản của người khác có giá trị từ 2 triệu đồng trở lên cấu thành Tội trộm cắp tài sản quy định tại Điều 173 Bộ luật Hình sự.',
  'Bộ luật Hình sự 2015, Điều 173'
);

addQ(
  'vận dụng',
  'Một công ty phần mềm phát hiện một cựu nhân viên của mình sau khi nghỉ việc đã mang toàn bộ mã nguồn sản phẩm độc quyền sang bán cho đối thủ cạnh tranh. Công ty có thể yêu cầu cơ quan có thẩm quyền xử lý cựu nhân viên này về hành vi gì?',
  [
    'Vi phạm quyền tự do chuyển đổi nghề nghiệp',
    'Xâm phạm bí mật kinh doanh và sở hữu trí tuệ',
    'Vi phạm nghĩa vụ tôn trọng cấp trên',
    'Giao dịch chuyển nhượng công nghệ thông thường'
  ],
  1,
  'Hành vi đánh cắp, mang bí mật kinh doanh, mã nguồn độc quyền của doanh nghiệp đem bán hoặc tiết lộ là hành vi xâm phạm quyền sở hữu công nghiệp đối với bí mật kinh doanh, bị chế tài dân sự, hành chính hoặc hình sự.',
  'Luật Sở hữu trí tuệ 2005 (sửa đổi 2022)'
);

addQ(
  'vận dụng',
  'Anh Hải (17 tuổi) cùng bạn rủ nhau đua xe trái phép trên đường phố. Khi CSGT ra tín hiệu dừng xe, Hải không chấp hành mà tăng ga bỏ chạy đâm bị thương một chiến sĩ công an. Hành vi của Hải bị truy cứu trách nhiệm hình sự về tội:',
  [
    'Vi phạm quy định giao thông thông thường',
    'Lỗi vô ý vì cẩu thả do hoảng loạn',
    'Chống người thi hành công vụ và vi phạm quy định về an toàn giao thông',
    'Gây mất trật tự công cộng mức độ nhẹ'
  ],
  2,
  'Hải đủ tuổi chịu trách nhiệm hình sự (17 tuổi) đối với hành vi chống người thi hành công vụ và đua xe gây hậu quả thương tích cho người đang thi hành nhiệm vụ.',
  'Bộ luật Hình sự 2015, Điều 330'
);

addQ(
  'vận dụng',
  'Một nhân viên lái xe buýt phát hiện trên sàn xe có một chiếc ví da bên trong có 20 triệu đồng và nhiều giấy tờ tùy thân của hành khách đánh rơi. Người tài xế đã mang nộp cho ban điều hành bến xe để tìm trả lại cho hành khách. Việc làm của tài xế thể hiện:',
  [
    'Hành vi thi hành mệnh lệnh điều tra tư pháp',
    'Hành vi tuân thủ điều cấm của pháp luật hình sự',
    'Hành vi sử dụng quyền sở hữu tài sản vô chủ',
    'Thực hiện nghĩa vụ giao nộp tài sản do người khác đánh rơi theo quy định pháp luật dân sự'
  ],
  3,
  'Người phát hiện tài sản do người khác đánh rơi, bỏ quên có nghĩa vụ thông báo hoặc giao nộp cho cơ quan có thẩm quyền hoặc người có tài sản theo quy định tại Điều 230 Bộ luật Dân sự 2015.',
  'Bộ luật Dân sự 2015, Điều 230'
);

console.log(`Generated ${questions.length} questions for Chapter ${chapterId}`);
writeChapterParts(chapterId, questions);
