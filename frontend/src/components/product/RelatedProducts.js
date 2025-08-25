// Related Products Component
export default function renderRelatedProducts() {
  return `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div class="p-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Sản Phẩm Liên Quan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-lg mb-3">
              <img src="https://via.placeholder.com/300x200?text=Tượng+Phật" 
                   alt="Tượng Phật" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h4 class="font-semibold text-gray-800 mb-1">Tượng Phật Đá</h4>
            <p class="text-sm text-gray-600 mb-2">Tượng Phật</p>
            <a href="#" class="text-blue-600 hover:underline text-sm">Xem chi tiết</a>
          </div>
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-lg mb-3">
              <img src="https://via.placeholder.com/300x200?text=Tượng+Rồng" 
                   alt="Tượng Rồng" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h4 class="font-semibold text-gray-800 mb-1">Tượng Rồng Đá</h4>
            <p class="text-sm text-gray-600 mb-2">Tượng Rồng</p>
            <a href="#" class="text-blue-600 hover:underline text-sm">Xem chi tiết</a>
          </div>
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-lg mb-3">
              <img src="https://via.placeholder.com/300x200?text=Tượng+Hổ" 
                   alt="Tượng Hổ" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h4 class="font-semibold text-gray-800 mb-1">Tượng Hổ Đá</h4>
            <p class="text-sm text-gray-600 mb-2">Tượng Hổ</p>
            <a href="#" class="text-blue-600 hover:underline text-sm">Xem chi tiết</a>
          </div>
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-lg mb-3">
              <img src="https://via.placeholder.com/300x200?text=Tượng+Ngựa" 
                   alt="Tượng Ngựa" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h4 class="font-semibold text-gray-800 mb-1">Tượng Ngựa Đá</h4>
            <p class="text-sm text-gray-600 mb-2">Tượng Ngựa</p>
            <a href="#" class="text-blue-600 hover:underline text-sm">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
