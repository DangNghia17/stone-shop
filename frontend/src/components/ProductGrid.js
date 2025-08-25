// Grid sản phẩm
import renderProductCard from './ProductCard.js';

export default function renderProductGrid(products) {
  if (!products || products.length === 0) {
    return `
      <div class="text-center py-16">
        <div class="w-24 h-24 mx-auto mb-6">
          <i class="fas fa-search text-6xl text-gray-300"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy sản phẩm</h3>
        <p class="text-gray-500">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
      </div>
    `;
  }

  return `
    <section class="mb-8">
      <!-- Products Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Sản Phẩm</h2>
        <div class="text-gray-600">
          Hiển thị <span class="font-semibold">1-${Math.min(products.length, 12)}</span> 
          trong tổng số <span class="font-semibold">${products.length}</span> sản phẩm
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        ${products.map(product => renderProductCard(product)).join('')}
      </div>

      <!-- No Products Message -->
      ${products.length === 0 ? `
        <div class="text-center py-16">
          <div class="w-24 h-24 mx-auto mb-6">
            <i class="fas fa-box-open text-6xl text-gray-300"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">Chưa có sản phẩm nào</h3>
          <p class="text-gray-500">Hãy quay lại sau hoặc liên hệ với chúng tôi</p>
        </div>
      ` : ''}
    </section>
  `;
}
