// About Us Page
export default function renderAbout() {
  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Giới Thiệu Về Chúng Tôi</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Đá mỹ nghệ Hiếu Liên - Nơi kết tinh nghệ thuật điêu khắc truyền thống với công nghệ hiện đại
          </p>
        </div>
      </div>

      <!-- Company Story -->
      <div class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Đá mỹ nghệ Hiếu Liên được thành lập từ năm 2000, với hơn 20 năm kinh nghiệm trong lĩnh vực sản xuất và cung cấp các sản phẩm đá mỹ nghệ cao cấp. 
                  Chúng tôi bắt đầu từ một xưởng nhỏ với 5 thợ thủ công lành nghề, đến nay đã phát triển thành một doanh nghiệp với hơn 50 nhân viên và 3 xưởng sản xuất.
                </p>
                <p>
                  Từ những sản phẩm đơn giản như bình hoa, lư hương, chúng tôi đã mở rộng sang các sản phẩm phức tạp như tượng Phật, tượng Lân, tượng Rồng, 
                  và các tác phẩm nghệ thuật độc đáo theo yêu cầu của khách hàng.
                </p>
                <p>
                  Chúng tôi tự hào đã thực hiện hơn 2000+ dự án lớn nhỏ, từ các công trình tâm linh, biệt thự cao cấp, 
                  đến các dự án quốc tế tại Mỹ, Barcelona, Phần Lan, Ấn Độ và nhiều quốc gia khác.
                </p>
              </div>
            </div>
            <div class="relative">
              <img src="https://via.placeholder.com/600x400?text=Xưởng+Sản+Xuất" 
                   alt="Xưởng sản xuất đá mỹ nghệ" 
                   class="rounded-xl shadow-2xl">
              <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">20+</div>
                  <div class="text-sm text-gray-600">Năm Kinh Nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-gem text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Chất Lượng Tuyệt Đối</h3>
              <p class="text-gray-600">
                Chúng tôi cam kết chỉ sử dụng đá tự nhiên cao cấp và áp dụng kỹ thuật điêu khắc tinh xảo nhất để tạo ra những sản phẩm hoàn hảo.
              </p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-handshake text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Uy Tín - Tin Cậy</h3>
              <p class="text-gray-600">
                Với hơn 20 năm hoạt động, chúng tôi đã xây dựng được uy tín vững chắc và là đối tác tin cậy của hàng nghìn khách hàng.
              </p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-lightbulb text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Sáng Tạo Không Ngừng</h3>
              <p class="text-gray-600">
                Chúng tôi luôn tìm tòi, sáng tạo để mang đến những thiết kế độc đáo, phù hợp với xu hướng hiện đại.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Members -->
      <div class="py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Đội Ngũ Của Chúng Tôi</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Những nghệ nhân tài hoa và chuyên gia giàu kinh nghiệm
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-user-tie text-gray-400 text-4xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Nguyễn Văn Hiếu</h3>
              <p class="text-blue-600 font-medium">Giám Đốc & Sáng Lập</p>
              <p class="text-sm text-gray-600 mt-2">20+ năm kinh nghiệm trong ngành đá mỹ nghệ</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-user-tie text-gray-400 text-4xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Trần Thị Liên</h3>
              <p class="text-blue-600 font-medium">Phó Giám Đốc Kinh Doanh</p>
              <p class="text-sm text-gray-600 mt-2">Chuyên gia tư vấn và chăm sóc khách hàng</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-user-tie text-gray-400 text-4xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Lê Văn Nam</h3>
              <p class="text-blue-600 font-medium">Trưởng Xưởng Sản Xuất</p>
              <p class="text-sm text-gray-600 mt-2">Nghệ nhân điêu khắc bậc thầy</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-user-tie text-gray-400 text-4xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Phạm Thị Mai</h3>
              <p class="text-blue-600 font-medium">Quản Lý Chất Lượng</p>
              <p class="text-sm text-gray-600 mt-2">Đảm bảo mọi sản phẩm đạt tiêu chuẩn cao nhất</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">2000+</div>
              <div class="text-blue-100">Dự Án Hoàn Thành</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">50+</div>
              <div class="text-blue-100">Nhân Viên</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">20+</div>
              <div class="text-blue-100">Năm Kinh Nghiệm</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">15+</div>
              <div class="text-blue-100">Quốc Gia Phục Vụ</div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Câu Hỏi Thường Gặp</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Những thắc mắc phổ biến của khách hàng về chúng tôi
            </p>
          </div>
          <div class="max-w-4xl mx-auto space-y-6">
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Chất liệu đá của các bạn có bền không?</h3>
              <p class="text-gray-600">
                Chúng tôi chỉ sử dụng đá tự nhiên cao cấp như đá cẩm thạch, đá granite, đá onyx... 
                Các loại đá này có độ bền vĩnh cửu, chống chịu tốt với thời tiết và không bị phai màu theo thời gian.
              </p>
            </div>
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Thời gian sản xuất một sản phẩm là bao lâu?</h3>
              <p class="text-gray-600">
                Tùy thuộc vào độ phức tạp của sản phẩm, thời gian sản xuất dao động từ 7-30 ngày. 
                Với các sản phẩm đơn giản như bình hoa, lư hương: 7-15 ngày. 
                Với các tác phẩm phức tạp như tượng Phật, tượng Lân: 20-30 ngày.
              </p>
            </div>
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Các bạn có bảo hành không?</h3>
              <p class="text-gray-600">
                Chúng tôi cam kết bảo hành chất lượng đá vĩnh viễn và bảo hành kỹ thuật điêu khắc 5 năm. 
                Ngoài ra còn hỗ trợ bảo trì, vệ sinh miễn phí và thay thế miễn phí nếu có lỗi kỹ thuật.
              </p>
            </div>
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Có thể đặt hàng theo yêu cầu riêng không?</h3>
              <p class="text-gray-600">
                Hoàn toàn có thể! Chúng tôi chuyên nhận đặt hàng theo yêu cầu riêng của khách hàng. 
                Đội ngũ thiết kế sẽ tư vấn và tạo ra những sản phẩm độc đáo, phù hợp với không gian và phong cách của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="py-16 bg-gray-900 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Sẵn Sàng Tạo Ra Tác Phẩm Cho Bạn?</h2>
          <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/contact" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Liên Hệ Ngay
            </a>
            <a href="#/products" 
               class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Xem Sản Phẩm
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
