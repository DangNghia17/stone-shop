// Validate form
export function validateProduct(data) {
  const errors = {};
  if (!data.name) errors.name = 'Tên sản phẩm bắt buộc';
  if (!data.category) errors.category = 'Danh mục bắt buộc';
  if (!data.size) errors.size = 'Kích thước bắt buộc';
  if (!data.color) errors.color = 'Màu sắc bắt buộc';
  if (!data.description) errors.description = 'Mô tả bắt buộc';
  if (!data.imageUrl) errors.imageUrl = 'Ảnh sản phẩm bắt buộc';
  return errors;
}
