// Testimonials Section Component
export default function renderTestimonialsSection() {
  return `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Khách Hàng Nói Gì Về Chúng Tôi?</h2>
          <p class="text-xl text-gray-600">
            Những đánh giá chân thực từ khách hàng đã sử dụng sản phẩm của chúng tôi
          </p>
        </div>

        <!-- Testimonials Carousel -->
        <div class="max-w-6xl mx-auto">
          <div id="testimonials-carousel" class="relative overflow-hidden">
            <!-- Testimonial 1 -->
            <div class="testimonial-slide active bg-gray-50 p-8 rounded-xl text-center">
              <div class="flex justify-center mb-6">
                <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  N
                </div>
              </div>
              <div class="flex justify-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "Tôi đã từng mua nhiều sản phẩm đá mỹ nghệ ở nhiều nơi, nhưng chưa bao giờ hài lòng như khi mua ở đây. 
                Chất lượng sản phẩm tuyệt vời, đường nét điêu khắc tinh xảo đến từng chi tiết nhỏ. 
                Đội ngũ nhân viên rất nhiệt tình và chuyên nghiệp, tư vấn rất kỹ lưỡng về phong thủy và thiết kế. 
                Sản phẩm được giao đúng hẹn và lắp đặt hoàn hảo. Tôi sẽ giới thiệu cho bạn bè và sẽ mua lại!"
              </p>
              <h4 class="font-semibold text-gray-800 text-lg">Nguyễn Văn Anh</h4>
              <p class="text-gray-600">Chủ biệt thự tại Hà Nội</p>
            </div>

            <!-- Testimonial 2 -->
            <div class="testimonial-slide hidden bg-gray-50 p-8 rounded-xl text-center">
              <div class="flex justify-center mb-6">
                <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  T
                </div>
              </div>
              <div class="flex justify-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "Là một kiến trúc sư, tôi rất khắt khe về chất lượng và thẩm mỹ của sản phẩm. 
                Khi làm dự án cho khách hàng, tôi luôn chọn đá mỹ nghệ từ cơ sở này. 
                Họ không chỉ đáp ứng được yêu cầu kỹ thuật khắt khe mà còn vượt quá mong đợi về mặt thẩm mỹ. 
                Quy trình làm việc rất chuyên nghiệp, từ tư vấn, thiết kế đến thi công và bàn giao. 
                Khách hàng của tôi luôn hài lòng và đánh giá cao chất lượng sản phẩm."
              </p>
              <h4 class="font-semibold text-gray-800 text-lg">Trần Thị Bình</h4>
              <p class="text-gray-600">Kiến trúc sư tại TP.HCM</p>
            </div>

            <!-- Testimonial 3 -->
            <div class="testimonial-slide hidden bg-gray-50 p-8 rounded-xl text-center">
              <div class="flex justify-center mb-6">
                <div class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  L
                </div>
              </div>
              <div class="flex justify-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "Tôi đã mua một bộ lư hương đá tự nhiên cho đền thờ gia đình. 
                Sản phẩm không chỉ đẹp về mặt thẩm mỹ mà còn có ý nghĩa tâm linh sâu sắc. 
                Đội ngũ thợ điêu khắc rất tài hoa, họ hiểu rõ văn hóa truyền thống và thể hiện điều đó qua từng đường nét. 
                Quá trình sản xuất được cập nhật thường xuyên, tôi có thể theo dõi tiến độ qua hình ảnh. 
                Khi nhận hàng, tôi thực sự xúc động vì sản phẩm đẹp hơn cả mong đợi."
              </p>
              <h4 class="font-semibold text-gray-800 text-lg">Lê Văn Cường</h4>
              <p class="text-gray-600">Chủ đền thờ tại Đà Nẵng</p>
            </div>

            <!-- Testimonial 4 -->
            <div class="testimonial-slide hidden bg-gray-50 p-8 rounded-xl text-center">
              <div class="flex justify-center mb-6">
                <div class="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  P
                </div>
              </div>
              <div class="flex justify-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "Là một doanh nhân người Việt tại Mỹ, tôi rất tự hào khi giới thiệu sản phẩm đá mỹ nghệ Việt Nam cho bạn bè quốc tế. 
                Chất lượng sản phẩm không thua kém gì các sản phẩm cao cấp tại đây. 
                Đội ngũ nhân viên rất chuyên nghiệp, giao hàng quốc tế đúng hẹn và đóng gói cẩn thận. 
                Sản phẩm được khách hàng Mỹ đánh giá rất cao về chất lượng và thẩm mỹ. 
                Tôi sẽ tiếp tục hợp tác lâu dài với cơ sở này."
              </p>
              <h4 class="font-semibold text-gray-800 text-lg">Phạm Thị Dung</h4>
              <p class="text-gray-600">Doanh nhân tại California, Mỹ</p>
            </div>

            <!-- Navigation Arrows - Đặt bên trong carousel container -->
            <button onclick="previousTestimonial()" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10">
              <i class="fas fa-chevron-left text-gray-600"></i>
            </button>
            <button onclick="nextTestimonial()" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10">
              <i class="fas fa-chevron-right text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
