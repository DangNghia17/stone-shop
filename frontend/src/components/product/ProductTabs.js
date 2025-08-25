// Product Tabs Component
export default function renderProductTabs() {
  return `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div class="border-b border-gray-200">
        <nav class="flex space-x-8 px-8">
          <button onclick="showTab('description')" 
                  class="tab-btn active py-4 px-1 border-b-2 border-blue-500 text-blue-600 font-medium">
            Mô Tả Chi Tiết
          </button>
          <button onclick="showTab('meaning')" 
                  class="tab-btn py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
            Ý Nghĩa Phong Thủy
          </button>
          <button onclick="showTab('specifications')" 
                  class="tab-btn py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
            Thông Số Kỹ Thuật
          </button>
          <button onclick="showTab('warranty')" 
                  class="tab-btn py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
            Bảo Hành & Dịch Vụ
          </button>
        </nav>
      </div>

      <div class="p-8">
        <!-- Description Tab -->
        <div id="description" class="tab-content active">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Mô Tả Chi Tiết</h3>
          <div class="prose max-w-none text-gray-600">
            <p class="mb-4 leading-relaxed">
              Tượng Lân đá tự nhiên là một tác phẩm nghệ thuật độc đáo, được chế tác từ đá cẩm thạch trắng cao cấp 
              với độ tinh khiết và độ bền vượt trội. Sản phẩm được thiết kế theo phong cách truyền thống Việt Nam, 
              kết hợp với kỹ thuật điêu khắc hiện đại để tạo ra một tác phẩm hoàn hảo.
            </p>
            <p class="mb-4 leading-relaxed">
              Mỗi chi tiết của tượng Lân đều được chạm khắc tỉ mỉ, từ những vảy nhỏ li ti đến bộ râu uy nghiêm, 
              từ đôi mắt tinh anh đến bộ móng sắc bén. Đặc biệt, phần đuôi được tạo hình uyển chuyển, 
              thể hiện sự mềm mại nhưng không kém phần mạnh mẽ.
            </p>
            <p class="mb-4 leading-relaxed">
              Đá cẩm thạch trắng được chọn lọc kỹ lưỡng từ những mỏ đá chất lượng cao, đảm bảo độ trong suốt, 
              độ cứng và khả năng chống chịu thời tiết tốt. Sản phẩm có thể sử dụng trong nhà hoặc ngoài trời 
              mà không bị ảnh hưởng bởi mưa nắng, nhiệt độ thay đổi.
            </p>
            <p class="leading-relaxed">
              Tượng Lân đá tự nhiên không chỉ là một tác phẩm trang trí mà còn mang ý nghĩa tâm linh sâu sắc, 
              phù hợp để đặt tại các vị trí trang trọng như sảnh chính, phòng khách, hoặc sân vườn của biệt thự, 
              nhà hàng, khách sạn cao cấp.
            </p>
          </div>
        </div>

        <!-- Meaning Tab -->
        <div id="meaning" class="tab-content hidden">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Ý Nghĩa Phong Thủy</h3>
          <div class="prose max-w-none text-gray-600">
            <p class="mb-4 leading-relaxed">
              Trong văn hóa Á Đông, Lân (Kỳ Lân) là một trong tứ linh (Long, Lân, Quy, Phụng), 
              biểu tượng của sự may mắn, thịnh vượng và bình an. Tượng Lân đá tự nhiên mang đến 
              nhiều ý nghĩa phong thủy tích cực cho gia chủ và không gian sống.
            </p>
            <p class="mb-4 leading-relaxed">
              <strong>Về mặt phong thủy:</strong> Lân được coi là loài vật hiền lành, không ăn thịt, 
              chỉ ăn cỏ và uống sương mai, tượng trưng cho sự thuần khiết và nhân từ. 
              Việc đặt tượng Lân trong nhà sẽ giúp xua đuổi tà khí, mang lại năng lượng tích cực 
              và bảo vệ gia đình khỏi những điều xấu.
            </p>
            <p class="mb-4 leading-relaxed">
              <strong>Về mặt kinh doanh:</strong> Lân còn được coi là biểu tượng của sự thịnh vượng 
              trong kinh doanh. Đặt tượng Lân tại cửa hàng, văn phòng hoặc nhà hàng sẽ giúp thu hút 
              khách hàng, tăng doanh số và mang lại may mắn trong các giao dịch thương mại.
            </p>
            <p class="leading-relaxed">
              <strong>Về mặt gia đình:</strong> Lân cũng tượng trưng cho sự hòa thuận, hạnh phúc 
              trong gia đình. Việc đặt tượng Lân tại phòng khách hoặc sảnh chính sẽ giúp tạo không khí 
              ấm cúng, thúc đẩy mối quan hệ tốt đẹp giữa các thành viên trong gia đình.
            </p>
          </div>
        </div>

        <!-- Specifications Tab -->
        <div id="specifications" class="tab-content hidden">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Thông Số Kỹ Thuật</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Chất liệu:</span>
                <span class="text-gray-600">Đá cẩm thạch trắng tự nhiên</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Kích thước:</span>
                <span class="text-gray-600">Cao 2.5m x Rộng 1.2m x Sâu 0.8m</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Trọng lượng:</span>
                <span class="text-gray-600">Khoảng 800-1000kg</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Kỹ thuật:</span>
                <span class="text-gray-600">Điêu khắc thủ công</span>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Độ bền:</span>
                <span class="text-gray-600">Vĩnh cửu</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Chống thời tiết:</span>
                <span class="text-gray-600">Tốt</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Bảo trì:</span>
                <span class="text-gray-600">Không cần</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-medium text-gray-700">Xuất xứ:</span>
                <span class="text-gray-600">Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Warranty Tab -->
        <div id="warranty" class="tab-content hidden">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Bảo Hành & Dịch Vụ</h3>
          <div class="prose max-w-none text-gray-600">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Chính Sách Bảo Hành</h4>
                <ul class="space-y-3">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Bảo hành chất lượng đá vĩnh viễn</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Bảo hành kỹ thuật điêu khắc 5 năm</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Hỗ trợ bảo trì, vệ sinh miễn phí</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Thay thế miễn phí nếu có lỗi kỹ thuật</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Dịch Vụ Đi Kèm</h4>
                <ul class="space-y-3">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Tư vấn vị trí đặt phong thủy</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Vận chuyển và lắp đặt miễn phí</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Hướng dẫn bảo quản chi tiết</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-600 mt-1"></i>
                    <span>Hỗ trợ 24/7 qua Zalo/SĐT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
