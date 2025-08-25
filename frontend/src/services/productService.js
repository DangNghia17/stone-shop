// Xử lý API sản phẩm
const API_BASE = process.env.VITE_API_URL || '/api';
const API_URL = `${API_BASE}/products`;

export async function fetchProducts(params = {}) {
  const url = new URL(API_URL, window.location.origin);
  Object.entries(params).forEach(([k, v]) => v && url.searchParams.append(k, v));
  const res = await fetch(url);
  if (!res.ok) throw new Error('Lỗi tải sản phẩm');
  return res.json();
}

export async function fetchProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Không tìm thấy sản phẩm');
  return res.json();
}

export async function exportProducts(token) {
  const res = await fetch(`${API_URL}/export`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Lỗi export');
  return res.blob();
}
// ...bulk, CRUD, filter, ...
