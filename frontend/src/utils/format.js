// Format text, số, ...
export function formatPrice(price) {
  return price ? price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '';
}
