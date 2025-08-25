/**
 * Helper function to ensure correct asset paths in both development and production
 * @param {string} path - The path to the asset
 * @returns {string} - The correct path to the asset
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, we need to ensure the path is relative to the root
  if (process.env.NODE_ENV === 'production') {
    return `/${cleanPath}`;
  }
  
  // In development, we can use the path as is
  return `/${cleanPath}`;
};

/**
 * Helper function to load 3D models with proper error handling
 * @param {string} modelPath - Path to the 3D model
 * @returns {Promise<Object>} - Loaded 3D model
 */
export const loadModel = async (modelPath) => {
  try {
    const fullPath = getAssetPath(modelPath);
    const response = await fetch(fullPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load model: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error loading 3D model:', error);
    throw error;
  }
};
