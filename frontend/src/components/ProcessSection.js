// Process Section Component
export default function renderProcessSection() {
  return `
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Process Column - Centered -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="text-center mb-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">QUY TRÌNH TƯ VẤN VÀ SẢN XUẤT</h2>
              <p class="text-gray-600 text-sm">Quy trình làm việc chuyên nghiệp, đảm bảo chất lượng và tiến độ</p>
            </div>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">1</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Xác định nhu cầu của khách hàng</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Lắng nghe và phân tích yêu cầu cụ thể về sản phẩm, kích thước, phong cách và ngân sách</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">2</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Tư vấn lựa chọn sản phẩm phù hợp</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Đề xuất loại đá, thiết kế và giải pháp tối ưu nhất cho không gian và mục đích sử dụng</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">3</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Lên mẫu và thiết kế tổng thể cho sản phẩm</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Tạo bản vẽ chi tiết, mẫu 3D và phối cảnh để khách hàng hình dung rõ sản phẩm cuối cùng</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">4</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Thi công điêu khắc sản phẩm</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Thực hiện điêu khắc thủ công bởi đội ngũ thợ lành nghề với kỹ thuật truyền thống kết hợp hiện đại</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">5</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Cập nhật tiến độ sản phẩm từng giai đoạn</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Gửi hình ảnh và báo cáo tiến độ thường xuyên để khách hàng theo dõi quá trình sản xuất</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">6</div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800 text-sm mb-1">Vận chuyển, lắp đặt và bàn giao cho khách hàng</h3>
                  <p class="text-gray-600 text-xs leading-relaxed">Vận chuyển an toàn, lắp đặt chuyên nghiệp và bàn giao hoàn thiện với hướng dẫn bảo quản</p>
                </div>
              </div>
            </div>
            
            <!-- Statistics Section at Bottom -->
            <div class="border-t border-gray-200 pt-4">
              <h3 class="text-center text-lg font-semibold text-gray-700 mb-4">Thống Kê Nổi Bật</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
                <div class="text-center p-2 sm:p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-lg sm:text-xl font-bold mb-1">20,000+</div>
                  <div class="text-xs text-green-100">Sản phẩm</div>
                </div>
                
                <div class="text-center p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-lg sm:text-xl font-bold mb-1">25+</div>
                  <div class="text-xs text-blue-100">Năm</div>
                </div>
                
                <div class="text-center p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-lg sm:text-xl font-bold mb-1">2,500+</div>
                  <div class="text-xs text-purple-100">Khách hàng</div>
                </div>
                
                <div class="text-center p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg text-white hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-lg sm:text-xl font-bold mb-1">63</div>
                  <div class="text-xs text-orange-100">Tỉnh</div>
                </div>
                
                <div class="text-center p-2 sm:p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-lg sm:text-xl font-bold mb-1">98%</div>
                  <div class="text-xs text-red-100">Hài lòng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
