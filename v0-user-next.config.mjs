/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Don't use distDir: './' as it causes issues
  trailingSlash: true,
};

export default nextConfig;

