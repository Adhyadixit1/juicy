/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Only require webpack configuration in production
const withTurbopack = (config) => {
  if (process.env.TURBOPACK) {
    return config;
  }
  
  return {
    ...config,
    webpack: (config, { isServer }) => {
      // Fix for font loading in static export
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      });
      
      return config;
    }
  };
};

const nextConfig = withTurbopack({
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
  
  // Configure Turbopack
  experimental: {
    turbo: {
      // Add any Turbopack-specific configurations here
      resolveAlias: {
        // Add any necessary aliases
      }
    }
  }
});

module.exports = nextConfig;