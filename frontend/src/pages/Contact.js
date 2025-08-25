// Contact Us Page
export default function renderContact() {
  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hãy để lại thông tin hoặc liên hệ trực tiếp để được tư vấn miễn phí về sản phẩm đá mỹ nghệ
          </p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Details -->
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h2>
                <p class="text-gray-600 mb-8 leading-relaxed">
                  Đá mỹ nghệ Hiếu Liên luôn sẵn sàng phục vụ và tư vấn cho quý khách hàng. 
                  Hãy liên hệ với chúng tôi để được hỗ trợ tốt nhất.
                </p>
              </div>

              <!-- Contact Items -->
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Địa Chỉ</h3>
                    <p class="text-gray-600 leading-relaxed">
                      123 Đường ABC, Phường XYZ, Quận 1, TP.HCM<br>
                      Xưởng sản xuất: Lô số 10 -  Phân khu sản xuất Làng nghề Non Nước, đường Quán Khái 11, P.Ngũ Hành Sơn , TP.Đà Nẵng
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-phone text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Điện Thoại</h3>
                    <div class="space-y-2">
                      <p class="text-gray-600">
                        <span class="font-medium">Hotline:</span> 
                        <a href="tel:0914629031" class="text-blue-600 hover:text-blue-700">0914 629 031</a>
                      </p>
                      <p class="text-gray-600">
                        <span class="font-medium">Văn phòng:</span> 
                        <a href="tel:02812345678" class="text-blue-600 hover:text-blue-700">028 1234 5678</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-envelope text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <p class="text-gray-600">
                      <a href="mailto:info@damynghe.com" class="text-blue-600 hover:text-blue-700">info@damynghe.com</a><br>
                      <a href="mailto:sales@damynghe.com" class="text-blue-600 hover:text-blue-700">sales@damynghe.com</a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-clock text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Giờ Làm Việc</h3>
                    <div class="space-y-1 text-gray-600">
                      <p><span class="font-medium">Thứ 2 - Thứ 6:</span> 8:00 - 18:00</p>
                      <p><span class="font-medium">Thứ 7:</span> 8:00 - 17:00</p>
                      <p><span class="font-medium">Chủ nhật:</span> 9:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fab fa-zalo text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Zalo</h3>
                    <p class="text-gray-600">
                      <a href="https://zalo.me/0914629031" target="_blank" class="text-blue-600 hover:text-blue-700">
                        0914 629 031
                      </a>
                      <br>
                      <span class="text-sm text-gray-500">Chat trực tuyến 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h3>
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                    <input type="text" id="firstName" name="firstName" required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                    <input type="tel" id="phone" name="phone" required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Chủ đề *</label>
                  <select id="subject" name="subject" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
                    <option value="">Chọn chủ đề</option>
                    <option value="tu-van">Tư vấn sản phẩm</option>
                    <option value="bao-gia">Báo giá</option>
                    <option value="dat-hang">Đặt hàng</option>
                    <option value="bao-hanh">Bảo hành</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Nội dung tin nhắn *</label>
                  <textarea id="message" name="message" rows="5" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Mô tả chi tiết yêu cầu của bạn..."></textarea>
                </div>

                <button type="submit" 
                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <i class="fas fa-paper-plane mr-2"></i>
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps Section -->
      <div class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Vị Trí Của Chúng Tôi</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Hãy ghé thăm cửa hàng và xưởng sản xuất của chúng tôi để xem trực tiếp các sản phẩm
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Store Location -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-800">Cửa Hàng Chính</h3>
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex items-start space-x-4 mb-4">
                  <i class="fas fa-map-marker-alt text-red-500 text-xl mt-1"></i>
                  <div>
                    <p class="font-medium text-gray-800">123 Đường ABC, Phường XYZ, Quận 1, TP.HCM</p>
                    <p class="text-sm text-gray-600 mt-1">Cửa hàng trưng bày và bán sản phẩm</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/DfteghNXhnSc15237" 
                   target="_blank"
                   class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  Xem trên Google Maps
                </a>
              </div>
            </div>

            <!-- Factory Location -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-800">Xưởng Sản Xuất</h3>
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex items-start space-x-4 mb-4">
                  <i class="fas fa-industry text-blue-500 text-xl mt-1"></i>
                  <div>
                    <p class="font-medium text-gray-800">456 Đường DEF, Quận 2, TP.HCM</p>
                    <p class="text-sm text-gray-600 mt-1">Xưởng sản xuất và chế tác sản phẩm</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/DfteghNXhnSc15237" 
                   target="_blank"
                   class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  Xem trên Google Maps
                </a>
              </div>
            </div>
          </div>

          <!-- Embedded Google Maps -->
          <div class="mt-12">
            <div class="bg-gray-200 rounded-lg overflow-hidden shadow-lg" style="height: 400px;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4240989443407!2d106.6983153!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQxJzUzLjkiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media & Quick Contact -->
      <div class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Kết Nối Với Chúng Tôi</h2>
          <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
            Theo dõi chúng tôi trên mạng xã hội để cập nhật những sản phẩm mới nhất và các dự án đã hoàn thành
          </p>
          
          <div class="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" class="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-200">
              <i class="fab fa-facebook-f text-2xl"></i>
              <span>Facebook</span>
            </a>
            <a href="https://zalo.me/0914629031" target="_blank" class="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-200">
              <i class="fab fa-zalo text-2xl"></i>
              <span>Zalo</span>
            </a>
            <a href="#" class="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-200">
              <i class="fab fa-youtube text-2xl"></i>
              <span>YouTube</span>
            </a>
            <a href="#" class="flex items-center space-x-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-200">
              <i class="fab fa-instagram text-2xl"></i>
              <span>Instagram</span>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-phone text-2xl"></i>
              </div>
              <h3 class="text-lg font-semibold mb-2">Gọi Điện Ngay</h3>
              <p class="text-blue-100">0914 629 031</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-zalo text-2xl"></i>
              </div>
              <h3 class="text-lg font-semibold mb-2">Chat Zalo</h3>
              <p class="text-blue-100">0914 629 031</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-envelope text-2xl"></i>
              </div>
              <h3 class="text-lg font-semibold mb-2">Gửi Email</h3>
              <p class="text-blue-100">info@damynghe.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
