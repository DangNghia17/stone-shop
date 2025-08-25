// API Configuration - Sử dụng environment variables
const API_CONFIG = {
  development: {
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    uploadURL: import.meta.env.VITE_UPLOAD_URL || 'http://localhost:5000/api/upload'
  },
  production: {
    // Sử dụng environment variables từ Vercel
    baseURL: import.meta.env.VITE_API_URL || '/api',
    uploadURL: import.meta.env.VITE_UPLOAD_URL || '/api/upload'
  }
};

// Tự động chọn config dựa trên môi trường
const isProduction = import.meta.env.PROD;
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
