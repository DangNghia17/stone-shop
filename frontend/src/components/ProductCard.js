// Card sản phẩm
export default function renderProductCard(product) {
  const { _id, name, description, price, category, size, color, imageUrl } = product;
  
  return `
    <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer" 
         onclick="window.location.hash='#/product/${_id}'">
      <!-- Product Image -->
      <div class="relative overflow-hidden">
        <img src="${imageUrl || 'https://via.placeholder.com/300x200?text=Đá+Mỹ+Nghệ'}" 
             alt="${name}" 
             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
        
        <!-- Category Badge -->
        <div class="absolute top-3 right-3">
          <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            ${category || 'Nổi bật'}
          </span>
        </div>

        <!-- Quick View Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href="#/product/${_id}" 
             class="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200 transform scale-90 group-hover:scale-100"
             onclick="event.stopPropagation()">
            <i class="fas fa-eye mr-2"></i>Xem Chi Tiết
          </a>
        </div>
      </div>

      <!-- Product Info -->
      <div class="p-6">
        <!-- Product Name -->
        <h3 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          ${name}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          ${description || 'Sản phẩm đá mỹ nghệ chất lượng cao, được chế tác tinh xảo từ đá tự nhiên.'}
        </p>

        <!-- Product Details -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-4 text-sm text-gray-500">
            <span class="flex items-center">
              <i class="fas fa-ruler mr-1"></i>
              ${size || 'N/A'}
            </span>
            <span class="flex items-center">
              <i class="fas fa-palette mr-1"></i>
              ${color || 'N/A'}
            </span>
          </div>
        </div>

        <!-- Price and Contact -->
        <div class="flex items-center justify-end">
          <a href="#/contact" 
             class="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
             onclick="event.stopPropagation()">
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  `;
}
