// API Configuration - Sử dụng relative paths để tránh lộ API endpoints
const API_CONFIG = {
  development: {
    baseURL: '/api',
    uploadURL: '/api/upload'
  },
  production: {
    // Sử dụng relative paths - sẽ tự động trỏ đến domain hiện tại
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
