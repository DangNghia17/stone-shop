// API Configuration - Local sử dụng localhost, Production sử dụng .env
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:5000/api',
    uploadURL: 'http://localhost:5000/api/upload'
  }
};

// Production config - chỉ được tạo khi cần thiết
function getProductionConfig() {
  return {
    baseURL: process.env.API_URL || '/api',
    uploadURL: process.env.UPLOAD_URL || '/api/upload'
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
