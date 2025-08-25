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
    try {
      const fs = require('fs');
      const path = require('path');
      
      // Ensure outDir exists
      if (!outDir) {
        outDir = path.join(process.cwd(), 'out');
      }
      
      // Create out directory if it doesn't exist
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      // Copy public directory
      const publicDir = path.join(process.cwd(), 'public');
      const outPublicDir = path.join(outDir, 'public');
      
      if (fs.existsSync(publicDir)) {
        // Create destination directory if it doesn't exist
        if (!fs.existsSync(path.dirname(outPublicDir))) {
          fs.mkdirSync(path.dirname(outPublicDir), { recursive: true });
        }
        
        // Use fs-extra for better file copying
        const fse = require('fs-extra');
        await fse.copy(publicDir, outPublicDir, { overwrite: true });
      }
      
      return defaultPathMap || {};
    } catch (error) {
      console.error('Error in exportPathMap:', error);
      return defaultPathMap || {};
    }
  },
};

module.exports = nextConfig;