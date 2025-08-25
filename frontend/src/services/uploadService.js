// Xử lý upload ảnh
const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_URL = `${API_BASE}/upload`;

export async function uploadImage(file, token) {
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData
  });
  if (!res.ok) throw new Error('Lỗi upload ảnh');
  return res.json();
}
