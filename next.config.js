
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable Image Optimization API as it's not needed on Vercel
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Enable static exports for the 'out' directory
  output: 'export',
  // Add base path if your app is not served from the root
  // basePath: '/juicy',
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Enable production browser source maps
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;