/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './', // Output directly to root
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

