/** @type {import('next').NextConfig} */
const nextConfig = {
  // Xuất ra file tĩnh (thư mục /out) để host miễn phí trên GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
