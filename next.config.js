/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Set asset prefix for production
  assetPrefix: isProd ? './' : '',
  basePath: isProd ? '' : '',
  
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/image-loader.js',
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
  
  // Webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;