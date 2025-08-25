// Trang đăng nhập admin
export default function renderAdminLogin() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <!-- Header -->
        <div class="text-center">
          <div class="mx-auto h-20 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-gem text-white text-3xl"></i>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Đăng Nhập Quản Trị</h2>
          <p class="text-xl text-gray-600">
            Vui lòng đăng nhập để truy cập hệ thống quản trị
          </p>
        </div>

        <!-- Login Form -->
        <div class="bg-white rounded-xl shadow-2xl p-8">
          <form id="admin-login-form" class="space-y-6">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                Tên đăng nhập
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-user text-gray-400"></i>
                </div>
                <input id="username" 
                       name="username" 
                       type="text" 
                       required 
                       class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                       placeholder="Nhập tên đăng nhập">
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input id="password" 
                       name="password" 
                       type="password" 
                       required 
                       class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                       placeholder="Nhập mật khẩu">
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" 
                       name="remember-me" 
                       type="checkbox" 
                       class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <!-- Login Button -->
            <div>
              <button type="submit" 
                      class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <i class="fas fa-sign-in-alt text-blue-300 group-hover:text-blue-200 transition-colors"></i>
                </span>
                Đăng Nhập
              </button>
            </div>
          </form>

          <!-- Back to Home -->
          <div class="mt-6 text-center">
            <a href="#/" class="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <i class="fas fa-arrow-left mr-1"></i>
              Quay lại trang chủ
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-sm text-gray-500">
          <p>&copy; 2024 Đá Mỹ Nghệ. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </div>
  `;
}
