// Banner/Hero section
export default function renderBanner() {
  return `
    <section id="hero" class="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div class="relative container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <!-- Main Title -->
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Đá Mỹ Nghệ Cao Cấp
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Khám phá bộ sưu tập đá mỹ nghệ tinh xảo, được chế tác từ những khối đá tự nhiên quý giá
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col space-y-4">
            <!-- Main Location Button -->
            <div class="flex justify-center">
              <a href="https://maps.app.goo.gl/DfteghNXhnSc15237" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 btn-animate text-center">
                <i class="fas fa-map-marker-alt text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"></i>
                <span class="text-sm sm:text-base leading-tight">Xem Vị Trí Cửa Hàng & Xưởng Sản Xuất</span>
              </a>
            </div>
            
            <!-- Contact Buttons Row -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#/contact" 
                 class="group bg-white text-gray-800 px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-colors duration-300 border-2 border-gray-200 hover:border-blue-300 flex items-center space-x-2 sm:space-x-3 btn-animate text-center">
                <i class="fas fa-envelope text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"></i>
                <span class="text-sm sm:text-base leading-tight">Hãy để chúng tôi liên lạc với bạn tại đây!!</span>
              </a>
              
              <a href="https://zalo.me/0914629031" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="group bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 btn-animate text-center">
                <i class="fas fa-comments text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"></i>
                <span class="text-sm sm:text-base leading-tight">Chat Zalo Ngay !!</span>
              </a>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="mt-8 text-center">
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-600">
              <div class="flex items-center justify-center">
                <i class="fas fa-map-marker-alt text-blue-600 mr-2 flex-shrink-0"></i>
                <span class="text-left"><strong>Địa chỉ:</strong> 8C Nguyễn Duy Trinh, Phường Ngũ Hành Sơn, TP. Đà Nẵng</span>
              </div>
              <div class="flex items-center justify-center">
                <i class="fas fa-phone text-green-600 mr-2 flex-shrink-0"></i>
                <span class="text-left"><strong>Zalo:</strong> 0934.714.037 / 0914.629.031</span>
              </div>
            </div>
            <p class="text-gray-500 text-base mt-4">
              Hãy đến thăm xưởng của chúng tôi để xem trực tiếp quy trình sản xuất và chọn lựa sản phẩm
            </p>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-bounce animation-delay-2000"></div>
    </section>
  `;
}
