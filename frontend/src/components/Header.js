// Header Component
import logowebPng from '../logoweb.png';

export default function renderHeader() {
  return `
    <header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img src="${logowebPng}" alt="Đá mỹ nghệ Hiếu Liên" class="w-full h-full object-contain">
            </div>
            <div>
              <h1 class="text-xl font-bold">Đá mỹ nghệ Hiếu Liên</h1>
              <p class="text-xs text-blue-100">Chất lượng - Uy tín - Độ bền</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#/" class="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Trang Chủ
            </a>
            <a href="#/about" class="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Giới Thiệu Về Chúng Tôi
            </a>
            <a href="#/contact" class="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Liên Hệ
            </a>
          </nav>

          <!-- Contact Info -->
          <div class="hidden lg:flex items-center space-x-4 text-sm">
            <div class="flex items-center space-x-2">
              <i class="fas fa-phone text-blue-200"></i>
              <span>0914 629 031</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-envelope text-blue-200"></i>
              <span>info@damynghe.com</span>
            </div>
            <!-- Admin Login -->
            <div>
            <a href="#/admin" 
               class="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
              <i class="fas fa-user"></i>
              <span>Đăng Nhập</span>
            </a>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden hidden bg-blue-700 rounded-lg mt-2 p-4">
          <nav class="flex flex-col space-y-4">
            <a href="#/" class="hover:text-blue-200 transition-colors duration-200 font-medium">Trang Chủ</a>
            <a href="#/about" class="hover:text-blue-200 transition-colors duration-200 font-medium">Giới Thiệu</a>
            <a href="#/products" class="hover:text-blue-200 transition-colors duration-200 font-medium">Sản Phẩm</a>
            <a href="#/contact" class="hover:text-blue-200 transition-colors duration-200 font-medium">Liên Hệ</a>
            <div class="border-t border-blue-600 pt-4">
              <div class="flex items-center space-x-2 mb-2">
                <i class="fas fa-phone text-blue-200"></i>
                <span>0914 629 031</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-envelope text-blue-200"></i>
                <span>info@damynghe.com</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
}
