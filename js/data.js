// Sample Products Data với 40 hình ảnh mẫu từ Cloudinary
const sampleProducts = [
    { id: 1, name: 'Tượng Lân Đá Tự Nhiên', category: 'Lân', size: '20cm', color: 'Đen', description: 'Tượng Lân đá tự nhiên, được chế tác tỉ mỉ, màu sắc vân đá tự nhiên tạo nên sự huyền bí và sang trọng.', imageUrl: 'https://picsum.photos/400/400?random=1' },
    { id: 2, name: 'Bình Hoa Đá Cẩm Thạch', category: 'Bình hoa', size: '25cm', color: 'Trắng', description: 'Bình hoa đá cẩm thạch trắng, với đường vân tự nhiên, thích hợp làm vật trang trí cho không gian sống thêm phần sang trọng.', imageUrl: 'https://picsum.photos/400/400?random=2' },
    { id: 3, name: 'Dĩa Đá Vân Tự Nhiên', category: 'Dĩa', size: '30cm', color: 'Vàng', description: 'Dĩa đá ấn tượng với màu sắc vân đá tự nhiên, tạo điểm nhấn độc đáo cho không gian nội thất.', imageUrl: 'https://picsum.photos/400/400?random=3' },
    { id: 4, name: 'Lư Hương Rồng', category: 'Lư hương rồng', size: '40cm', color: 'Ấn Độ', description: 'Lư hương rồng được chạm khắc tinh xảo, thể hiện sự uy nghiêm và linh thiêng.', imageUrl: 'https://picsum.photos/400/400?random=4' },
    { id: 5, name: 'Tượng Sư Tử Đá', category: 'Sư tử', size: '25cm', color: 'Đen', description: 'Tượng sư tử đá đen, biểu tượng của sức mạnh và uy quyền, phù hợp trang trí phòng khách.', imageUrl: 'https://picsum.photos/400/400?random=5' },
    { id: 6, name: 'Ống Hương Đá', category: 'Ống hương', size: '20cm', color: 'Trắng', description: 'Ống hương đá trắng tinh khiết, thiết kế đơn giản nhưng tinh tế.', imageUrl: 'https://picsum.photos/400/400?random=6' },
    { id: 7, name: 'Tượng Lân Đá Trắng', category: 'Lân', size: '25cm', color: 'Trắng', description: 'Tượng lân đá trắng tinh khôi, thể hiện sự thanh cao và linh thiêng.', imageUrl: 'https://picsum.photos/400/400?random=7' },
    { id: 8, name: 'Bình Hoa Đá Đen', category: 'Bình hoa', size: '30cm', color: 'Đen', description: 'Bình hoa đá đen huyền bí, tạo điểm nhấn độc đáo cho không gian.', imageUrl: 'https://picsum.photos/400/400?random=8' },
    { id: 9, name: 'Dĩa Đá Cẩm Thạch', category: 'Dĩa', size: '25cm', color: 'Trắng', description: 'Dĩa đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=9' },
    { id: 10, name: 'Lư Hương Phụng', category: 'Lư hương rồng', size: '35cm', color: 'Vàng', description: 'Lư hương phụng hoàng với thiết kế tinh xảo, phù hợp thờ cúng.', imageUrl: 'https://picsum.photos/400/400?random=10' },
    { id: 11, name: 'Tượng Sư Tử Trắng', category: 'Sư tử', size: '30cm', color: 'Trắng', description: 'Tượng sư tử đá trắng, biểu tượng của sức mạnh và uy quyền.', imageUrl: 'https://picsum.photos/400/400?random=11' },
    { id: 12, name: 'Ống Hương Đá Vàng', category: 'Ống hương', size: '25cm', color: 'Vàng', description: 'Ống hương đá vàng sang trọng, phù hợp trang trí và thờ cúng.', imageUrl: 'https://picsum.photos/400/400?random=12' },
    { id: 13, name: 'Hủ Cốt Đá Đen', category: 'Hủ cốt', size: '20cm', color: 'Đen', description: 'Hủ cốt đá đen với thiết kế truyền thống, phù hợp thờ cúng.', imageUrl: 'https://picsum.photos/400/400?random=13' },
    { id: 14, name: 'Lư Đá Cẩm Thạch', category: 'Lư', size: '30cm', color: 'Trắng', description: 'Lư đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=14' },
    { id: 15, name: 'Tượng Lân Đá Vàng', category: 'Lân', size: '35cm', color: 'Vàng', description: 'Tượng lân đá vàng sang trọng, biểu tượng của may mắn.', imageUrl: 'https://picsum.photos/400/400?random=15' },
    { id: 16, name: 'Bình Hoa Đá Ấn Độ', category: 'Bình hoa', size: '40cm', color: 'Ấn Độ', description: 'Bình hoa đá Ấn Độ với màu sắc độc đáo và thiết kế tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=16' },
    { id: 17, name: 'Dĩa Đá Đen', category: 'Dĩa', size: '35cm', color: 'Đen', description: 'Dĩa đá đen huyền bí với bề mặt được đánh bóng tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=17' },
    { id: 18, name: 'Lư Hương Rồng Đen', category: 'Lư hương rồng', size: '45cm', color: 'Đen', description: 'Lư hương rồng đá đen với kích thước lớn, phù hợp không gian rộng.', imageUrl: 'https://picsum.photos/400/400?random=18' },
    { id: 19, name: 'Tượng Sư Tử Vàng', category: 'Sư tử', size: '40cm', color: 'Vàng', description: 'Tượng sư tử đá vàng với kích thước lớn, tạo ấn tượng mạnh.', imageUrl: 'https://picsum.photos/400/400?random=19' },
    { id: 20, name: 'Ống Hương Đá Đen', category: 'Ống hương', size: '30cm', color: 'Đen', description: 'Ống hương đá đen với thiết kế đơn giản nhưng tinh tế.', imageUrl: 'https://picsum.photos/400/400?random=20' },
    { id: 21, name: 'Hủ Cốt Đá Trắng', category: 'Hủ cốt', size: '25cm', color: 'Trắng', description: 'Hủ cốt đá trắng tinh khiết, phù hợp thờ cúng và trang trí.', imageUrl: 'https://picsum.photos/400/400?random=21' },
    { id: 22, name: 'Lư Đá Vàng', category: 'Lư', size: '35cm', color: 'Vàng', description: 'Lư đá vàng sang trọng với thiết kế truyền thống.', imageUrl: 'https://picsum.photos/400/400?random=22' },
    { id: 23, name: 'Tượng Lân Đá Ấn Độ', category: 'Lân', size: '40cm', color: 'Ấn Độ', description: 'Tượng lân đá Ấn Độ với màu sắc độc đáo và thiết kế tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=23' },
    { id: 24, name: 'Bình Hoa Đá Vàng', category: 'Bình hoa', size: '35cm', color: 'Vàng', description: 'Bình hoa đá vàng sang trọng với thiết kế hiện đại.', imageUrl: 'https://picsum.photos/400/400?random=24' },
    { id: 25, name: 'Dĩa Đá Ấn Độ', category: 'Dĩa', size: '40cm', color: 'Ấn Độ', description: 'Dĩa đá Ấn Độ với màu sắc độc đáo và hoa văn tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=25' },
    { id: 26, name: 'Lư Hương Rồng Trắng', category: 'Lư hương rồng', size: '50cm', color: 'Trắng', description: 'Lư hương rồng đá trắng với kích thước lớn, phù hợp không gian rộng.', imageUrl: 'https://picsum.photos/400/400?random=26' },
    { id: 27, name: 'Tượng Sư Tử Ấn Độ', category: 'Sư tử', size: '45cm', color: 'Ấn Độ', description: 'Tượng sư tử đá Ấn Độ với màu sắc độc đáo và thiết kế tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=27' },
    { id: 28, name: 'Ống Hương Đá Ấn Độ', category: 'Ống hương', size: '35cm', color: 'Ấn Độ', description: 'Ống hương đá Ấn Độ với màu sắc độc đáo và thiết kế tinh xảo.', imageUrl: 'https://picsum.photos/400/400?random=28' },
    { id: 29, name: 'Hủ Cốt Đá Vàng', category: 'Hủ cốt', size: '30cm', color: 'Vàng', description: 'Hủ cốt đá vàng sang trọng với thiết kế truyền thống.', imageUrl: 'https://picsum.photos/400/400?random=29' },
    { id: 30, name: 'Lư Đá Đen', category: 'Lư', size: '40cm', color: 'Đen', description: 'Lư đá đen huyền bí với thiết kế truyền thống.', imageUrl: 'https://picsum.photos/400/400?random=30' },
    { id: 31, name: 'Tượng Lân Đá Cẩm Thạch', category: 'Lân', size: '45cm', color: 'Trắng', description: 'Tượng lân đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=31' },
    { id: 32, name: 'Bình Hoa Đá Cẩm Thạch Vàng', category: 'Bình hoa', size: '50cm', color: 'Vàng', description: 'Bình hoa đá cẩm thạch vàng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=32' },
    { id: 33, name: 'Dĩa Đá Cẩm Thạch Vàng', category: 'Dĩa', size: '45cm', color: 'Vàng', description: 'Dĩa đá cẩm thạch vàng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=33' },
    { id: 34, name: 'Lư Hương Rồng Cẩm Thạch', category: 'Lư hương rồng', size: '55cm', color: 'Trắng', description: 'Lư hương rồng đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=34' },
    { id: 35, name: 'Tượng Sư Tử Cẩm Thạch', category: 'Sư tử', size: '50cm', color: 'Trắng', description: 'Tượng sư tử đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=35' },
    { id: 36, name: 'Ống Hương Đá Cẩm Thạch', category: 'Ống hương', size: '40cm', color: 'Trắng', description: 'Ống hương đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=36' },
    { id: 37, name: 'Hủ Cốt Đá Cẩm Thạch', category: 'Hủ cốt', size: '35cm', color: 'Trắng', description: 'Hủ cốt đá cẩm thạch trắng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=37' },
    { id: 38, name: 'Lư Đá Cẩm Thạch Vàng', category: 'Lư', size: '45cm', color: 'Vàng', description: 'Lư đá cẩm thạch vàng với vân đá tự nhiên đẹp mắt.', imageUrl: 'https://picsum.photos/400/400?random=38' },
    { id: 39, name: 'Tượng Lân Đá Ấn Độ Lớn', category: 'Lân', size: '60cm', color: 'Ấn Độ', description: 'Tượng lân đá Ấn Độ với kích thước lớn, phù hợp không gian rộng.', imageUrl: 'https://picsum.photos/400/400?random=39' },
    { id: 40, name: 'Bình Hoa Đá Ấn Độ Lớn', category: 'Bình hoa', size: '65cm', color: 'Ấn Độ', description: 'Bình hoa đá Ấn Độ với kích thước lớn, phù hợp không gian rộng.', imageUrl: 'https://picsum.photos/400/400?random=40' }
];

// Categories data
const categories = [
    { value: 'Lân', label: 'Lân' },
    { value: 'Bình hoa', label: 'Bình hoa' },
    { value: 'Dĩa', label: 'Dĩa' },
    { value: 'Lư', label: 'Lư' },
    { value: 'Lư hương rồng', label: 'Lư hương rồng' },
    { value: 'Sư tử', label: 'Sư tử' },
    { value: 'Ống hương', label: 'Ống hương' },
    { value: 'Hủ cốt', label: 'Hủ cốt' }
];

// Sizes data
const sizes = [
    { value: '15cm', label: '15cm' },
    { value: '20cm', label: '20cm' },
    { value: '25cm', label: '25cm' },
    { value: '30cm', label: '30cm' },
    { value: '35cm', label: '35cm' },
    { value: '40cm', label: '40cm' },
    { value: '45cm', label: '45cm' },
    { value: '60cm', label: '60cm' }
];

// Colors data
const colors = [
    { value: 'Đen', label: 'Đen' },
    { value: 'Trắng', label: 'Trắng' },
    { value: 'Vàng', label: 'Vàng' },
    { value: 'Ấn Độ', label: 'Ấn Độ' }
];

// Export data
window.sampleProducts = sampleProducts;
window.categories = categories;
window.sizes = sizes;
window.colors = colors;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sampleProducts };
} 