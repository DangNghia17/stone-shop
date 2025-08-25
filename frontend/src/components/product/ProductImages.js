// Product Images Component
export default function renderProductImages(product) {
  return `
    <div class="space-y-4">
      <!-- Main Image -->
      <div class="relative overflow-hidden rounded-lg">
        <img id="main-image" 
             src="${product.images[0]}" 
             alt="${product.name}"
             class="w-full h-96 object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in">
      </div>
      
      <!-- Thumbnail Images -->
      <div class="grid grid-cols-4 gap-3">
        ${product.thumbnails.map((thumb, index) => `
          <div class="relative overflow-hidden rounded-lg cursor-pointer">
            <img src="${thumb}" 
                 alt="Hình ảnh ${index + 1}"
                 onclick="changeMainImage('${product.images[index]}')"
                 class="w-full h-24 object-cover hover:scale-110 transition-transform duration-300">
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
