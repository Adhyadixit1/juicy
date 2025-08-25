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
  
  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;