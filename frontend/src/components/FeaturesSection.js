// Features Section Component
export default function renderFeaturesSection() {
  return `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Tại Sao Chọn Chúng Tôi?</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến những sản phẩm đá mỹ nghệ chất lượng cao nhất với dịch vụ tốt nhất
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1: Chất Lượng Đảm Bảo -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-award text-blue-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Chất Lượng Đảm Bảo</h3>
            <p class="text-gray-600 text-sm">
              Cam kết sản phẩm 100% bằng đá tự nhiên, bền đẹp. Chất lượng đảm bảo. 
              Được điêu khắc bởi những người thợ lành nghề nhất cơ sở.
            </p>
          </div>

          <!-- Feature 2: Sản Xuất Trực Tiếp -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-industry text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Sản Xuất Trực Tiếp</h3>
            <p class="text-gray-600 text-sm">
              Xưởng sản xuất trực tiếp, không qua trung gian. Kiểm soát chất lượng từ khâu 
              chọn nguyên liệu đến thành phẩm cuối cùng.
            </p>
          </div>

          <!-- Feature 3: Giá Thành Rẻ Nhất -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-tags text-yellow-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Giá Thành Rẻ Nhất</h3>
            <p class="text-gray-600 text-sm">
              Sản phẩm được bán với giá cả phải chăng, tốt nhất. Với nhiều ưu đãi và khuyến mãi! 
              Giá cả tốt cạnh tranh nhất thị trường.
            </p>
          </div>

          <!-- Feature 4: Hỗ Trợ -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-headset text-purple-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Hỗ Trợ</h3>
            <p class="text-gray-600 text-sm">
              Đội ngũ bán hàng nhiệt tình, thân thiện. Tư vấn trách nhiệm và luôn lắng nghe khách hàng. 
              Hỗ trợ kiểm tra hàng trước khi thanh toán.
            </p>
          </div>

          <!-- Feature 5: Giao Hàng Tận Tâm -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-truck text-red-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Giao Hàng Tận Tâm</h3>
            <p class="text-gray-600 text-sm">
              Ship toàn quốc, nhanh chóng, đảm bảo, an toàn. Mọi sản phẩm đều được chuyên chở 
              bằng xe riêng của cơ sở. Linh hoạt với phương thức giao hàng.
            </p>
          </div>

          <!-- Feature 6: Theo Yêu Cầu Khách Hàng -->
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-cogs text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Theo Yêu Cầu Khách Hàng</h3>
            <p class="text-gray-600 text-sm">
              Sản xuất theo đơn đặt hàng riêng biệt. Đáp ứng mọi nhu cầu thiết kế, kích thước, 
              màu sắc theo yêu cầu cụ thể của từng khách hàng.
            </p>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="mt-12 text-center">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto hover:shadow-lg transition-all duration-300">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Liên Hệ Tư Vấn Miễn Phí</h3>
            <p class="text-gray-600 mb-8">
              Chúng tôi cung cấp dịch vụ tư vấn miễn phí về thiết kế, lựa chọn sản phẩm 
              và bố trí không gian phù hợp với nhu cầu của bạn.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="https://zalo.me/0914629031" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="group bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-3">
                <i class="fas fa-comments text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span>Zalo: 0914629031</span>
              </a>
              
              <a href="tel:0914629031" 
                 class="group bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-3">
                <i class="fas fa-phone text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span>SĐT: 0914629031</span>
              </a>
              
              <a href="tel:0987654321" 
                 class="group bg-purple-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center space-x-3">
                <i class="fas fa-phone text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span>SĐT: 0987654321</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Company Commitment -->
        <div class="mt-12 text-center">
          <h3 class="text-2xl font-bold text-green-600 mb-4">SẢN PHẨM CỦA ĐÁ MỸ NGHỆ</h3>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Cam kết chất lượng, giá cả hợp lý và dịch vụ tận tâm. 
            Chúng tôi tự tin mang đến những sản phẩm đá mỹ nghệ tốt nhất cho bạn.
          </p>
        </div>
      </div>
    </section>
  `;
}
