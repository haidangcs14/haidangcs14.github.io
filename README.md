# Portfolio (Next.js)

## Chạy thử
```bash
npm install
npm run dev        # http://localhost:3000
```

## Tuỳ chỉnh
1. Sửa nội dung trong `data/profile.ts`: `common` (thông tin chung), `content.vi` / `content.en` (nội dung hai ngôn ngữ), `ui` (nhãn giao diện).
2. Thêm ảnh/CV vào `public/` (xem `public/README.txt`).
3. Đổi màu/font trong `app/globals.css` (biến ở đầu file, có bộ màu sáng và tối) và `app/layout.tsx`.
4. Chỉnh kích thước ô ly bằng biến `--cell` (mặc định 24px) và độ đậm đường kẻ bằng `--grid-minor`, `--grid-major`.

Nút đổi sáng/tối và VI/EN nằm ở góc phải thanh menu; lựa chọn được lưu trong trình duyệt.

## Triển khai lên GitHub Pages
1. Tạo repo tên `<username>.github.io` và push code lên nhánh `main`.
2. Vào Settings → Pages → Source: chọn **GitHub Actions**.
3. Mỗi lần push, workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.

Nếu repo có tên khác, bỏ comment `basePath` trong `next.config.mjs`.
