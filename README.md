# Web App Thi Trắc Nghiệm Pháp Luật Đại Cương

Ứng dụng web thi trắc nghiệm môn **Pháp luật đại cương** (dành cho sinh viên đại học không chuyên luật) với ngân hàng 1.400 câu hỏi chuẩn hóa, tự động phân loại, xáo trộn câu hỏi và đáp án, hẹn giờ 90 phút và hiển thị giải thích pháp lý chi tiết.

## 1. Công nghệ sử dụng
- **React 19 + TypeScript (Strict) + Vite**
- **Tailwind CSS v4** (npm package, dark mode class-based)
- **Hash Routing tự viết** (`#/`, `#/quiz`, `#/result/:id`, `#/history`) hỗ trợ nút Back trình duyệt và điện thoại
- **System font stack** tối ưu hiển thị tiếng Việt, không phụ thuộc font mạng
- **Target build**: `['es2020', 'safari14']` hoạt động mượt mà trên mọi trình duyệt (Chrome, Safari iOS 14+, Edge, Cốc Cốc, Android/iOS)
- **Hoàn toàn static**: Không cần backend, không cần API key, không biến môi trường

## 2. Cách chạy Local
```bash
# Cài đặt dependencies
npm install

# Chạy môi trường phát triển (Port 3000)
npm run dev

# Kiểm tra kiểu dữ liệu TypeScript
npm run lint

# Build bản phát hành
npm run build

# Xem thử bản build
npm run preview
```

## 3. Cách thêm chương mới vào Ngân hàng câu hỏi
Hệ thống tự động phát hiện và nạp các chương mới từ thư mục `src/bank/raw/` bằng `import.meta.glob`:
1. Soạn thảo file câu hỏi và lưu vào thư mục `src/bank/raw/` với định dạng tên:
   `ngan_hang_cau_hoi_chuong_N_phap_luat_dai_cuong.txt` (ví dụ: `chuong_2`, `chuong_8`).
2. Tiêu đề chương khai báo ở các dòng đầu:
   ```text
   CHƯƠNG 2: HỆ THỐNG PHÁP LUẬT VIỆT NAM
   ```
3. Mỗi mục phân tách bằng tiêu đề dạng:
   ```text
   MỤC 2.1. TÊN MỤC
   ```
4. Mỗi câu hỏi theo đúng định dạng:
   ```text
   Câu 1 [Dễ]: Nội dung câu hỏi trắc nghiệm?
   A. Lựa chọn 1
   B. Lựa chọn 2
   C. Lựa chọn 3
   D. Lựa chọn 4
   Đáp án đúng: A
   Giải thích: Điều ... Luật ... quy định ...
   ```
   *(Mức độ nhận thức gồm một trong ba giá trị: `Dễ`, `Trung bình`, hoặc `Vận dụng`)*.
5. Sau khi lưu file vào `src/bank/raw/`, khởi động lại hoặc build lại app, chương mới sẽ tự động hiển thị trên giao diện trang chủ mà không cần sửa bất kỳ dòng code nào.

## 4. Hướng dẫn Deploy lên Vercel
Mã nguồn được cấu trúc chuẩn site tĩnh (Static Site):
1. Đẩy mã nguồn lên repository GitHub.
2. Đăng nhập vào [Vercel](https://vercel.com) và chọn **Add New Project** -> **Import Git Repository**.
3. Cấu hình triển khai:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (thư mục gốc)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Bấm **Deploy**. Vercel sẽ tự động build và cung cấp liên kết truy cập tốc độ cao toàn cầu với chứng chỉ SSL miễn phí.
