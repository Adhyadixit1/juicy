/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable production source maps
  productionBrowserSourceMaps: false,
  
  // Skip linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Set the output directory for static export
  distDir: 'dist',
};

module.exports = nextConfig;