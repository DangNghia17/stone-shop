// API Configuration - Frontend gọi trực tiếp backend
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:5000/api',
    uploadURL: 'http://localhost:5000/api/upload'
  },
  production: {
    // Production gọi backend Vercel - URLs được ẩn trong environment
    baseURL: '/api',
    uploadURL: '/api/upload'
  }
};

// Tự động chọn config dựa trên môi trường
const isProduction = window.location.hostname !== 'localhost';
const currentConfig = isProduction ? API_CONFIG.production : API_CONFIG.development;

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
