const fs = require('fs');
const path = require('path');

const junkTails = [
  'theo các quy định hiện hành của pháp luật chuyên ngành',
  'theo đúng trình tự và thủ tục do cơ quan có thẩm quyền ban hành',
  'trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp quy định pháp luật',
  'trừ trường hợp các bên có văn bản thỏa thuận khác phù hợp',
  'trừ trường hợp cơ quan nhà nước có thẩm quyền có quyết định khác',
  'theo quy định của pháp luật hiện hành và điều lệ áp dụng',
  'mà không cần phải có thêm văn bản chấp thuận của cơ quan quản lý nhà nước',
  'theo đúng trình tự và thỏa thuận ban đầu giữa các bên',
  'mà không cần có sự phê duyệt trước của cơ quan có thẩm quyền',
  'theo quy định của pháp luật có liên quan',
  'nhằm tôn trọng nguyên tắc tự nguyện, tiến bộ, một vợ một chồng và bình đẳng gia đình',
  'đồng thời khi con từ đủ 7 tuổi trở lên bày tỏ nguyện vọng được sống chung với người cha hoặc người mẹ',
  'do nghĩa vụ phát sinh từ giao dịch phục vụ nhu cầu thiết yếu hàng ngày của gia đình',
  'nhằm bảo đảm quyền và lợi ích hợp pháp chính đáng của người phụ nữ và con chưa thành niên',
  'khi hai bên vợ chồng đã lập văn bản thỏa thuận phân chia có công chứng hoặc chứng thực',
  'sau khi Tòa án nhân dân đã tiến hành thủ tục hòa giải đoàn tụ nhưng không thành',
  'khi một bên vợ hoặc chồng có hành vi bạo lực gia đình nghiêm trọng làm hôn nhân tan vỡ',
  'trừ khi các bên đã lập thỏa thuận về chế độ tài sản trước khi đăng ký kết hôn',
  'theo nghị quyết hợp lệ được thông qua bởi đa số thành viên dự họp có quyền biểu quyết',
  'sau khi được Hội đồng thành viên hoặc Đại hội đồng cổ đông phê duyệt trong kỳ họp thường niên',
  'khi người quản lý doanh nghiệp đã được miễn trừ trách nhiệm dân sự theo quyết định nội bộ',
  'nhằm bảo toàn vốn đầu tư và quyền lợi hợp pháp của các chủ nợ không có bảo đảm',
  'trừ trường hợp Điều lệ doanh nghiệp có quy định tỷ lệ biểu quyết tán thành cao hơn',
  'theo đúng phương án phục hồi hoạt động kinh doanh đã được Hội nghị chủ nợ thông qua',
  'khi doanh nghiệp đã công bố thông tin công khai trên Cổng thông tin đăng ký doanh nghiệp',
  'khi doanh nghiệp bảo đảm khả năng thanh toán đầy đủ các khoản nợ đến hạn',
  'do người sử dụng lao động thay đổi cơ cấu tổ chức, công nghệ hoặc vì lý do kinh tế',
  'khi người sử dụng lao động đã báo trước cho người lao động đủ thời hạn luật định',
  'sau khi đã trao đổi ý kiến chính thức với tổ chức đại diện người lao động tại cơ sở',
  'trừ trường hợp nội quy lao động hợp pháp của doanh nghiệp có quy định hình thức xử lý khác',
  'nhằm bảo vệ quyền lợi việc làm bền vững và bảo đảm an toàn vệ sinh cho người lao động',
  'khi hợp đồng lao động đã được hai bên tự nguyện giao kết bằng văn bản theo luật định',
  'nhằm bảo vệ quyền và lợi ích hợp pháp của người thứ ba ngay tình theo luật định',
  'khi bên có quyền đã có văn bản đôn đốc thực hiện nghĩa vụ nhiều lần mà không được đáp ứng',
  'khi các bên đã hoàn thành đầy đủ nghĩa vụ giao nhận tài sản trên thực tế',
  'nhằm bảo đảm nguyên tắc bình đẳng, tự nguyện cam kết và thiện chí trong giao lưu dân sự',
  'khi có sự làm chứng của ít nhất hai người có đầy đủ năng lực hành vi dân sự',
  'trừ khi hợp đồng có điều khoản bảo lưu quyền sở hữu rõ ràng bằng văn bản',
  'trừ trường hợp sự kiện bất khả kháng hoặc lỗi hoàn toàn thuộc về bên có quyền',
  'do người phạm tội chưa gây ra hậu quả vật chất nguy hiểm và nghiêm trọng trên thực tế',
  'khi người phạm tội đã tự nguyện bồi thường đầy đủ toàn bộ thiệt hại trước khi xét xử',
  'nhằm bảo đảm mục đích trừng trị kết hợp cải tạo, giáo dục riêng và phòng ngừa chung đối với xã hội',
  'nhằm bảo đảm tính tập trung dân chủ và kỷ cương trong bộ máy hành chính nhà nước',
  'khi được trên một phần hai tổng số đại biểu có mặt tại phiên họp biểu quyết tán thành',
  'sau khi hoàn tất quy trình lấy ý kiến rộng rãi của cử tri tại địa bàn cư trú',
  'sau khi được Thường trực Hội đồng nhân dân cấp tỉnh chấp thuận bằng văn bản',
  'sau khi có ý kiến thẩm tra và chấp thuận bằng văn bản của Thường trực HĐND',
  'theo quyết định phân công nhiệm vụ cụ thể của người đứng đầu cơ quan quản lý',
  'theo đề nghị bằng văn bản của cơ quan thanh tra nhà nước có thẩm quyền',
  'khi có văn bản phê duyệt của cơ quan đại diện quyền làm chủ của nhân dân',
  'trừ khi có sự chỉ đạo bằng văn bản của cơ quan quản lý hành chính cấp trên',
  'do phù hợp với quy tắc đạo đức và phong tục tập quán truyền thống tốt đẹp',
  'nhằm bảo đảm quyền và lợi ích hợp pháp cao nhất cho giai cấp công nhân',
  'nhằm thể hiện ý chí và nguyện vọng tự nguyện giữa các thành viên trong xã hội'
];

function cleanOption(text) {
  let prev = '';
  let current = text;
  while (prev !== current) {
    prev = current;
    for (const tail of junkTails) {
      const escaped = tail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const reg = new RegExp('[,;]?\\s*(?:đồng thời\\s+)?' + escaped + '[.]?$', 'i');
      current = current.replace(reg, '').trim();
    }
    current = current.replace(/[,;]\s*$/, '').trim();
  }
  return current;
}

// Test on sample
const s1 = 'Bị cắt giảm 50% để chia đều cho các chủ nợ vải, khi doanh nghiệp bảo đảm khả năng thanh toán đầy đủ các khoản nợ đến hạn';
console.log('Test 1:', cleanOption(s1));

const s2 = 'Nước chia thành 3 miền Bắc - Trung - Nam với hệ thống chính quyền tự trị độc lập, nhằm tôn trọng nguyên tắc tự nguyện, tiến bộ, một vợ một chồng và bình đẳng gia đình, đồng thời khi con từ đủ 7 tuổi trở lên bày tỏ nguyện vọng được sống chung với người cha hoặc người mẹ';
console.log('Test 2:', cleanOption(s2));

module.exports = { cleanOption, junkTails };
