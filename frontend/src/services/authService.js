import { API_BASE_URL, ENDPOINTS } from '../config/api.js';

// Xử lý API đăng nhập admin
const API_URL = `${API_BASE_URL}${ENDPOINTS.AUTH.LOGIN}`;

export async function login(username, password) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Sai tài khoản hoặc mật khẩu');
  return res.json();
}
