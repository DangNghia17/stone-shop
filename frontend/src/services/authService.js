// Xử lý API đăng nhập admin
const API_BASE = process.env.VITE_API_URL || '/api';
const API_URL = `${API_BASE}/auth`;

export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Sai tài khoản hoặc mật khẩu');
  return res.json();
}
