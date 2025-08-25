// Projects Section Component
export default function renderProjectsSection() {
  return `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Các Dự Án Đã Thực Hiện</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Những dự án tiêu biểu thể hiện năng lực và kinh nghiệm của chúng tôi trong lĩnh vực đá mỹ nghệ
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Tượng+Lân+Đá+Tự+Nhiên"
                   alt="Tượng Lân Đá Tự Nhiên"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Tượng Lân Đá Tự Nhiên</h3>
              <p class="text-gray-600 mb-4">Tượng lân đá tự nhiên cao 2.5m, được điêu khắc tinh xảo theo phong cách truyền thống</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>Hà Nội</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Bàn+Thờ+Đá+Tự+Nhiên"
                   alt="Bàn Thờ Đá Tự Nhiên"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Bàn Thờ Đá Tự Nhiên</h3>
              <p class="text-gray-600 mb-4">Bàn thờ đá tự nhiên cao cấp, thiết kế hiện đại kết hợp truyền thống</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>TP.HCM</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Đài+Phun+Nước+Đá"
                   alt="Đài Phun Nước Đá"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Đài Phun Nước Đá</h3>
              <p class="text-gray-600 mb-4">Đài phun nước đá tự nhiên với thiết kế độc đáo, tạo điểm nhấn cho không gian</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>Đà Nẵng</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Cột+Đá+Trang+Trí"
                   alt="Cột Đá Trang Trí"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Cột Đá Trang Trí</h3>
              <p class="text-gray-600 mb-4">Cột đá trang trí cao 3m, hoa văn tinh xảo, phù hợp với kiến trúc cổ điển</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>Huế</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Lư+Hương+Đá+Tự+Nhiên"
                   alt="Lư Hương Đá Tự Nhiên"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Lư Hương Đá Tự Nhiên</h3>
              <p class="text-gray-600 mb-4">Lư hương đá tự nhiên cao cấp, thiết kế truyền thống, phù hợp với đền thờ</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>Nha Trang</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x250?text=Tượng+Phật+Đá+Tự+Nhiên"
                   alt="Tượng Phật Đá Tự Nhiên"
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hoàn Thành
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Tượng Phật Đá Tự Nhiên</h3>
              <p class="text-gray-600 mb-4">Tượng Phật đá tự nhiên cao 2m, thể hiện sự tôn kính và trang nghiêm</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span><i class="fas fa-map-marker-alt mr-1"></i>Vũng Tàu</span>
                <span><i class="fas fa-calendar mr-1"></i>2023</span>
              </div>
            </div>
          </div>
        </div>

        <!-- International Projects -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Dự Án Quốc Tế</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group bg-gray-50">
              <div class="w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img src="https://flagcdn.com/w40/us.png" alt="Hoa Kỳ" class="w-12 h-8 object-cover rounded-sm">
              </div>
              <h4 class="font-semibold text-gray-800 mb-1">Hoa Kỳ</h4>
              <p class="text-sm text-gray-600">Tượng đá trang trí cho biệt thự tại California</p>
            </div>

            <div class="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group bg-gray-50">
              <div class="w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img src="https://flagcdn.com/w40/es.png" alt="Tây Ban Nha" class="w-12 h-8 object-cover rounded-sm">
              </div>
              <h4 class="font-semibold text-gray-800 mb-1">Tây Ban Nha</h4>
              <p class="text-sm text-gray-600">Đài phun nước đá tại Barcelona</p>
            </div>

            <div class="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group bg-gray-50">
              <div class="w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img src="https://flagcdn.com/w40/fi.png" alt="Phần Lan" class="w-12 h-8 object-cover rounded-sm">
              </div>
              <h4 class="font-semibold text-gray-800 mb-1">Phần Lan</h4>
              <p class="text-sm text-gray-600">Cột đá trang trí cho công viên tại Helsinki</p>
            </div>

            <div class="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group bg-gray-50">
              <div class="w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img src="https://flagcdn.com/w40/in.png" alt="Ấn Độ" class="w-12 h-8 object-cover rounded-sm">
              </div>
              <h4 class="font-semibold text-gray-800 mb-1">Ấn Độ</h4>
              <p class="text-sm text-gray-600">Tượng đá cho đền thờ tại Mumbai</p>
            </div>
          </div>

          <div class="text-center mt-6">
            <p class="text-gray-600">+ Còn các dự án nước ngoài khác</p>
          </div>
        </div>

        <div class="text-center">
          <a href="#" class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Xem Tất Cả Dự Án →
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}
