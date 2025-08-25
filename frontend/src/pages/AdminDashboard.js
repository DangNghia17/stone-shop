// Trang dashboard admin: quản lý sản phẩm
export default function renderAdminDashboard() {
  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Admin Header -->
      <header class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <i class="fas fa-gem text-white text-xl"></i>
              </div>
              <h1 class="ml-3 text-2xl font-bold text-gray-900">Bảng Điều Khiển Quản Trị</h1>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-gray-700">Xin chào, <span class="font-semibold">Admin</span></span>
              <button id="logout-btn" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <i class="fas fa-sign-out-alt mr-2"></i>Đăng Xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center">
              <div class="p-3 bg-blue-100 rounded-full">
                <i class="fas fa-box text-blue-600 text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Tổng Sản Phẩm</p>
                <p class="text-2xl font-bold text-gray-900" id="total-products">0</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center">
              <div class="p-3 bg-green-100 rounded-full">
                <i class="fas fa-eye text-green-600 text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Lượt Xem</p>
                <p class="text-2xl font-bold text-gray-900" id="total-views">0</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center">
              <div class="p-3 bg-purple-100 rounded-full">
                <i class="fas fa-users text-purple-600 text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Khách Hàng</p>
                <p class="text-2xl font-bold text-gray-900" id="total-customers">0</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center">
              <div class="p-3 bg-orange-100 rounded-full">
                <i class="fas fa-chart-line text-orange-600 text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Doanh Thu</p>
                <p class="text-2xl font-bold text-gray-900" id="total-revenue">0đ</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Products Management -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-sm">
              <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900">Quản Lý Sản Phẩm</h2>
                  <button id="add-product-btn" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <i class="fas fa-plus mr-2"></i>Thêm Sản Phẩm
                  </button>
                </div>
              </div>

              <!-- Search and Filters -->
              <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row gap-4">
                  <div class="flex-1">
                    <input type="text" 
                           id="product-search" 
                           placeholder="Tìm kiếm sản phẩm..." 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  </div>
                  <select id="category-filter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tất cả danh mục</option>
                    <option value="lan">Tượng Lân</option>
                    <option value="binh-hoa">Bình Hoa</option>
                    <option value="dia">Dĩa</option>
                    <option value="lu-huong">Lư Hương</option>
                  </select>
                  <button id="export-btn" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <i class="fas fa-download mr-2"></i>Xuất Dữ Liệu
                  </button>
                </div>
              </div>

              <!-- Products Table -->
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sản Phẩm
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Danh Mục
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Giá
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng Thái
                      </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao Tác
                      </th>
                    </tr>
                  </thead>
                  <tbody id="products-table-body" class="bg-white divide-y divide-gray-200">
                    <!-- Products will be dynamically loaded here -->
                  </tbody>
                </table>
              </div>

              <!-- Pagination -->
              <div id="admin-pagination" class="px-6 py-4 border-t border-gray-200">
                <!-- Pagination will be dynamically loaded here -->
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Quick Actions -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Thao Tác Nhanh</h3>
              <div class="space-y-3">
                <button class="w-full bg-blue-100 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-200 transition-colors text-left">
                  <i class="fas fa-upload mr-2"></i>
                  Upload Hình Ảnh
                </button>
                <button class="w-full bg-green-100 text-green-700 px-4 py-3 rounded-lg hover:bg-green-200 transition-colors text-left">
                  <i class="fas fa-database mr-2"></i>
                  Sao Lưu Dữ Liệu
                </button>
                <button class="w-full bg-purple-100 text-purple-700 px-4 py-3 rounded-lg hover:bg-purple-200 transition-colors text-left">
                  <i class="fas fa-cog mr-2"></i>
                  Cài Đặt Hệ Thống
                </button>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Hoạt Động Gần Đây</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p class="text-sm text-gray-600">Sản phẩm mới được thêm</p>
                    <p class="text-xs text-gray-500">2 phút trước</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p class="text-sm text-gray-600">Cập nhật thông tin sản phẩm</p>
                    <p class="text-xs text-gray-500">15 phút trước</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p class="text-sm text-gray-600">Xuất dữ liệu thành công</p>
                    <p class="text-xs text-gray-500">1 giờ trước</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- System Info -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Thông Tin Hệ Thống</h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Phiên bản:</span>
                  <span class="text-gray-900">v1.0.0</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Cập nhật:</span>
                  <span class="text-gray-900">2 giờ trước</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Trạng thái:</span>
                  <span class="text-green-600">Hoạt động</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add/Edit Product Modal -->
      <div id="product-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden z-50">
        <div class="flex items-center justify-center min-h-screen p-4">
          <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div class="px-6 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900" id="modal-title">Thêm Sản Phẩm Mới</h3>
                <button id="close-modal" class="text-gray-400 hover:text-gray-600">
                  <i class="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>

            <form id="product-form" class="p-6 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Tên sản phẩm</label>
                  <input type="text" id="product-name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                  <select id="product-category" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Chọn danh mục</option>
                    <option value="lan">Tượng Lân</option>
                    <option value="binh-hoa">Bình Hoa</option>
                    <option value="dia">Dĩa</option>
                    <option value="lu-huong">Lư Hương</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Giá</label>
                  <input type="number" id="product-price" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Kích thước</label>
                  <input type="text" id="product-size" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Màu sắc</label>
                  <input type="text" id="product-color" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Hình ảnh URL</label>
                  <input type="url" id="product-image" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mô tả</label>
                <textarea id="product-description" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <div class="flex justify-end space-x-3">
                <button type="button" id="cancel-btn" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Hủy
                </button>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Lưu Sản Phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}
