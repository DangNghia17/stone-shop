// Footer Component
export default function renderFooter() {
  return `
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src="logoweb.png" alt="Đá mỹ nghệ Hiếu Liên" class="w-full h-full object-contain">
              </div>
              <div>
                <h3 class="text-xl font-bold">Đá mỹ nghệ Hiếu Liên</h3>
                <p class="text-sm text-gray-400">Chất lượng - Uy tín - Độ bền</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Chuyên cung cấp các sản phẩm đá mỹ nghệ chất lượng cao, được chế tác tinh xảo từ đá tự nhiên với kỹ thuật điêu khắc truyền thống kết hợp hiện đại.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Liên Kết Nhanh</h4>
            <ul class="space-y-3">
              <li><a href="#/" class="text-gray-300 hover:text-white transition-colors duration-200">Trang Chủ</a></li>
              <li><a href="#/about" class="text-gray-300 hover:text-white transition-colors duration-200">Giới Thiệu</a></li>
              <li><a href="#/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Liên Hệ</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Sản Phẩm</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">Dự Án</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Thông Tin Liên Hệ</h4>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-300">
                <i class="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                <span>8C Nguyễn Duy Trinh, Phường Ngũ Hành Sơn, TP. Đà Nẵng</span>
              </li>
              <li class="flex items-center text-gray-300">
                <i class="fas fa-phone text-blue-400 mr-3"></i>
                <span>0934.714.037</span>
              </li>
              <li class="flex items-center text-gray-300">
                <i class="fas fa-envelope text-blue-400 mr-3"></i>
                <span>info@damynghe.com</span>
              </li>
              <li class="flex items-center text-gray-300">
                <i class="fas fa-clock text-blue-400 mr-3"></i>
                <span>8:00 - 18:00 (T2-T7)</span>
              </li>
            </ul>
          </div>

          <!-- Google Maps -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Vị Trí Của Chúng Tôi</h4>
            <div class="bg-gray-800 rounded-lg overflow-hidden" style="height: 200px;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.7384567890123!2d108.23456789012345!3d15.987654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU5JzE1LjYiTiAxMDjCsDE0JzA0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%" 
                height="200" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="mt-3 text-center">
              <a href="https://maps.app.goo.gl/DfteghNXhnSc15237" 
                 target="_blank"
                 class="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200">
                <i class="fas fa-external-link-alt mr-2"></i>
                Xem trên Google Maps
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            © 2024 Đá mỹ nghệ Hiếu Liên. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  `;
}
