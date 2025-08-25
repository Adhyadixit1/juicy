/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
    domains: [],
  },
  
  // Configure asset handling for static export
  assetPrefix: isProd ? '' : undefined,
  basePath: isProd ? '' : undefined,
  
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
  webpack: (config, { isServer, dev }) => {
    // Copy 3D models to the output directory
    config.module.rules.push({
      test: /\.(glb|gltf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
      },
    });
    
    // Handle font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });

    // Copy files from public directory to output
    if (!isServer && !dev) {
      config.plugins.push(
        new (require('copy-webpack-plugin'))({
          patterns: [
            {
              from: 'public',
              to: '.',
              globOptions: {
                ignore: ['**/.DS_Store', '**/README.md'],
              },
              noErrorOnMissing: true,
            },
          ],
        })
      );
    }
    
    return config;
  },
};

// Only apply Turbopack in development
const withTurbopack = (config) => {
  if (process.env.TURBOPACK) {
    return {
      ...config,
      experimental: {
        turbo: {
          resolveAlias: {
            // Add any necessary aliases for Turbopack
          }
        }
      }
    };
  }
  return config;
};

module.exports = withTurbopack(nextConfig);

module.exports = nextConfig;