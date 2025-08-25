// API Configuration - Sử dụng Parcel's built-in environment variable replacement
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:5000/api',
    uploadURL: 'http://localhost:5000/api/upload'
  }
};

// Production config - sử dụng Parcel's built-in replacement
function getProductionConfig() {
  // Parcel sẽ thay thế các biến này khi build
  const API_URL = 'API_URL';
  const UPLOAD_URL = 'UPLOAD_URL';
  
  return {
    baseURL: API_URL || '/api',
    uploadURL: UPLOAD_URL || '/api/upload'
  };
}

// Tự động chọn config dựa trên môi trường
const isProduction = window.location.hostname !== 'localhost';
const currentConfig = isProduction ? getProductionConfig() : API_CONFIG.development;

export const API_BASE_URL = currentConfig.baseURL;
export const UPLOAD_URL = currentConfig.uploadURL;

// Các endpoint cụ thể
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    VERIFY: '/auth/verify'
  },
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id) => `/products/${id}`,
    CREATE: '/products',
    UPDATE: (id) => `/products/${id}`,
    DELETE: (id) => `/products/${id}`,
    SEARCH: '/products/search'
  },
  UPLOAD: {
    IMAGE: '/upload/image',
    MULTIPLE: '/upload/multiple'
  }
};

export default currentConfig;
