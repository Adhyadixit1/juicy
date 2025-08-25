// Custom image loader for static exports
// This ensures images are loaded correctly in both development and production

module.exports = function customImageLoader({ src, width, quality }) {
  // Handle absolute URLs
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }
  
  // Handle relative paths for production
  if (process.env.NODE_ENV === 'production') {
    // Remove leading slash if present
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `./${cleanSrc}`;
  }
  
  // For development, just return the path as is
  return src;
};
