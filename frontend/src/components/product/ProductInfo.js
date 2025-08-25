// Product Info Component
export default function renderProductInfo(product) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-3">${product.name}</h1>
        <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <span class="flex items-center">
            <i class="fas fa-tag text-blue-600 mr-2"></i>
            ${product.category}
          </span>
          <span class="flex items-center">
            <i class="fas fa-ruler text-green-600 mr-2"></i>
            ${product.size}
          </span>
          <span class="flex items-center">
            <i class="fas fa-palette text-purple-600 mr-2"></i>
            ${product.material}
          </span>
        </div>
      </div>

      <!-- Product Description -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Mô Tả Sản Phẩm</h3>
        <p class="text-gray-600 leading-relaxed">
          ${product.description}
        </p>
      </div>

      <!-- Contact Buttons -->
      <div class="pt-4 space-y-3">
        <a href="https://zalo.me/0914629031" 
           target="_blank"
           class="inline-flex items-center justify-center w-full bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <i class="fab fa-zalo mr-3 text-xl"></i>
          Chat Zalo Ngay
        </a>
        
        <a href="tel:0914629031" 
           class="inline-flex items-center justify-center w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <i class="fas fa-phone mr-3"></i>
          Gọi Điện Ngay
        </a>
      </div>

      <!-- Product Features -->
      <div class="grid grid-cols-2 gap-4 pt-4">
        ${product.features.map(feature => `
          <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-check-circle text-green-600"></i>
            <span class="text-sm text-gray-700">${feature}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
