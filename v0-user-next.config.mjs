/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For user/organization GitHub Pages (username.github.io), 
  // we don't need a basePath as it's served from the root
  trailingSlash: true,
};

export default nextConfig;

