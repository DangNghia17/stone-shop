// Filter bar
export default function renderFilterBar(categories, sizes, colors) {
  return `
    <section id="filter" class="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div class="flex flex-col space-y-4">
        <!-- Filter Title and Clear Button Row -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <i class="fas fa-filter text-blue-600 text-xl"></i>
            <h2 class="text-xl font-semibold text-gray-800">Lọc Sản Phẩm</h2>
          </div>
          
          <button class="filter-btn bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 whitespace-nowrap">
            <i class="fas fa-times"></i>
            <span>Xóa Bộ Lọc</span>
          </button>
        </div>

        <!-- Filter Controls Row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <!-- Search Input -->
          <div class="sm:col-span-2 lg:col-span-1">
            <div class="flex items-center space-x-2 mb-2">
              <div class="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                <i class="fas fa-search text-blue-600 text-sm"></i>
              </div>
              <label class="text-sm font-medium text-gray-700">Tìm Kiếm</label>
            </div>
            <div class="relative">
              <input type="text" 
                     placeholder="Tìm kiếm sản phẩm..." 
                     class="filter-search w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                     id="search-input">
              <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <div class="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <i class="fas fa-tag text-green-600 text-sm"></i>
              </div>
              <label class="text-sm font-medium text-gray-700">Danh Mục</label>
            </div>
            <select class="filter-category w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white">
              <option value="">Tất Cả Danh Mục</option>
              ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
            </select>
          </div>

          <!-- Size Filter -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <div class="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                <i class="fas fa-ruler text-purple-600 text-sm"></i>
              </div>
              <label class="text-sm font-medium text-gray-700">Kích Thước</label>
            </div>
            <select class="filter-size w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white">
              <option value="">Tất Cả Kích Thước</option>
              ${sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
          </div>

          <!-- Color Filter -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <div class="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                <i class="fas fa-palette text-orange-600 text-sm"></i>
              </div>
              <label class="text-sm font-medium text-gray-700">Màu Sắc</label>
            </div>
            <select class="filter-color w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white">
              <option value="">Tất Cả Màu Sắc</option>
              ${colors.map(color => `<option value="${color}">${color}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Active Filters Display -->
        <div id="active-filters" class="mt-4 flex flex-wrap gap-2 hidden">
          <!-- Active filters will be dynamically added here -->
        </div>
      </div>
    </section>
  `;
}