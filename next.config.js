/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Base path for static assets
  assetPrefix: isProd ? '.' : '',
  
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
  
  // Webpack configuration for asset handling
  webpack: (config) => {
    // Fix for font loading in static export
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|glb|gltf|bin|png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    
    return config;
  },
  
  // Copy static assets during export
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const fs = require('fs');
    const path = require('path');
    
    // Copy public directory
    const publicDir = path.join(dir, 'public');
    const outPublicDir = path.join(outDir, 'public');
    
    if (fs.existsSync(publicDir)) {
      await fs.promises.cp(publicDir, outPublicDir, { recursive: true });
    }
    
    return {
      ...defaultPathMap,
    };
  },
};

module.exports = nextConfig;