// Product Detail Page
import renderProductImages from '../components/product/ProductImages.js';
import renderProductInfo from '../components/product/ProductInfo.js';
import renderProductTabs from '../components/product/ProductTabs.js';
import renderRelatedProducts from '../components/product/RelatedProducts.js';
import renderProductScripts from '../components/product/ProductScripts.js';
import renderProductStyles from '../components/product/ProductStyles.js';

export default function renderProductDetail() {
  // Lấy ID sản phẩm từ URL hash
  const getProductIdFromUrl = () => {
    const hash = window.location.hash;
    const match = hash.match(/#\/product\/(.+)/);
    return match ? match[1] : null;
  };

  // Lấy thông tin sản phẩm dựa trên ID
  const getProductInfo = (productId) => {
    // Trong thực tế, bạn sẽ gọi API: fetchProductById(productId)
    // Hiện tại tôi sẽ tạo dữ liệu mẫu dựa trên ID
    const products = {
      'lan-statue-001': {
        id: 'lan-statue-001',
        name: 'Tượng Lân Đá Tự Nhiên',
        category: 'Tượng Đá',
        size: 'Cao 2.5m',
        material: 'Đá Cẩm Thạch Trắng',
        images: [
          'https://via.placeholder.com/600x500?text=Tượng+Lân+Đá+Tự+Nhiên+1',
          'https://via.placeholder.com/600x500?text=Tượng+Lân+Đá+Tự+Nhiên+2', 
          'https://via.placeholder.com/600x500?text=Tượng+Lân+Đá+Tự+Nhiên+3',
          'https://via.placeholder.com/600x500?text=Tượng+Lân+Đá+Tự+Nhiên+4'
        ],
        thumbnails: [
          'https://via.placeholder.com/150x120?text=Hình+1',
          'https://via.placeholder.com/150x120?text=Hình+2',
          'https://via.placeholder.com/150x120?text=Hình+3',
          'https://via.placeholder.com/150x120?text=Hình+4'
        ],
        description: 'Tượng Lân đá tự nhiên được chế tác từ đá cẩm thạch trắng cao cấp, thể hiện sự uy nghiêm và may mắn. Sản phẩm được điêu khắc thủ công bởi đội ngũ thợ lành nghề với kỹ thuật truyền thống kết hợp hiện đại.',
        features: [
          'Chất liệu tự nhiên',
          'Điêu khắc tinh xảo', 
          'Bền đẹp vĩnh cửu',
          'Giao hàng tận nơi'
        ]
      },
      'phat-statue-002': {
        id: 'phat-statue-002',
        name: 'Tượng Phật Đá Tự Nhiên',
        category: 'Tượng Phật',
        size: 'Cao 1.8m',
        material: 'Đá Granite Xanh',
        images: [
          'https://via.placeholder.com/600x500?text=Tượng+Phật+Đá+Tự+Nhiên+1',
          'https://via.placeholder.com/600x500?text=Tượng+Phật+Đá+Tự+Nhiên+2',
          'https://via.placeholder.com/600x500?text=Tượng+Phật+Đá+Tự+Nhiên+3',
          'https://via.placeholder.com/600x500?text=Tượng+Phật+Đá+Tự+Nhiên+4'
        ],
        thumbnails: [
          'https://via.placeholder.com/150x120?text=Hình+1',
          'https://via.placeholder.com/150x120?text=Hình+2',
          'https://via.placeholder.com/150x120?text=Hình+3',
          'https://via.placeholder.com/150x120?text=Hình+4'
        ],
        description: 'Tượng Phật đá tự nhiên được chế tác từ đá granite xanh cao cấp, thể hiện sự thanh tịnh và từ bi. Sản phẩm được điêu khắc thủ công với độ tinh xảo cao.',
        features: [
          'Đá granite tự nhiên',
          'Điêu khắc tinh xảo',
          'Màu sắc bền vững',
          'Phù hợp thờ cúng'
        ]
      }
    };
    
    // Nếu có ID thực từ database, tạo dữ liệu dựa trên ID đó
    if (productId && !products[productId]) {
      // Tạo dữ liệu mẫu dựa trên ID thực
      return {
        id: productId,
        name: `Sản phẩm ${productId}`,
        category: 'Đá Mỹ Nghệ',
        size: 'Kích thước tùy chỉnh',
        material: 'Đá tự nhiên cao cấp',
        images: [
          'https://via.placeholder.com/600x500?text=Sản+Phẩm+1',
          'https://via.placeholder.com/600x500?text=Sản+Phẩm+2', 
          'https://via.placeholder.com/600x500?text=Sản+Phẩm+3',
          'https://via.placeholder.com/600x500?text=Sản+Phẩm+4'
        ],
        thumbnails: [
          'https://via.placeholder.com/150x120?text=Hình+1',
          'https://via.placeholder.com/150x120?text=Hình+2',
          'https://via.placeholder.com/150x120?text=Hình+3',
          'https://via.placeholder.com/150x120?text=Hình+4'
        ],
        description: 'Sản phẩm đá mỹ nghệ chất lượng cao, được chế tác tinh xảo từ đá tự nhiên với kỹ thuật điêu khắc truyền thống kết hợp hiện đại.',
        features: [
          'Chất liệu tự nhiên',
          'Điêu khắc tinh xảo', 
          'Bền đẹp vĩnh cửu',
          'Giao hàng tận nơi'
        ]
      };
    }
    
    return products[productId] || products['lan-statue-001']; // Fallback nếu không tìm thấy
  };

  const productId = getProductIdFromUrl();
  const product = getProductInfo(productId);

  if (!product) {
    return `
      <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy sản phẩm</h1>
          <a href="#/" class="text-blue-600 hover:underline">Quay về trang chủ</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <!-- Breadcrumbs -->
        <nav class="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="#/" class="hover:text-blue-600 transition-colors duration-200">Trang Chủ</a>
          <i class="fas fa-chevron-right text-gray-400"></i>
          <a href="#" class="hover:text-blue-600 transition-colors duration-200">Sản Phẩm</a>
          <i class="fas fa-chevron-right text-gray-400"></i>
          <span class="text-gray-800 font-medium">${product.name}</span>
        </nav>

        <!-- Product Main Section -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <!-- Product Images -->
            ${renderProductImages(product)}

            <!-- Product Info -->
            ${renderProductInfo(product)}
          </div>
        </div>

        <!-- Product Details Tabs -->
        ${renderProductTabs()}

        <!-- Related Products -->
        ${renderRelatedProducts()}
      </div>
    </div>

    ${renderProductScripts()}
    ${renderProductStyles()}
  `;
}
