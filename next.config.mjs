/** @type {import('next').NextConfig} */
const nextConfig = {
  // Xuất ra file tĩnh (thư mục /out) để host miễn phí trên GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  // Nếu repo KHÔNG phải dạng <username>.github.io thì bỏ comment dòng dưới:
  // basePath: "/ten-repo",
};

export default nextConfig;
