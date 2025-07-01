# 🏛️ Đá Mỹ Nghệ - Website Bán Đá Mỹ Nghệ

Website bán đá mỹ nghệ với giao diện hiện đại, tích hợp Cloudinary API và hệ thống quản trị đầy đủ.

## 📁 Cấu Trúc Dự Án

```
StoneShop/
├── 📁 components/          # Components HTML tái sử dụng
│   ├── navbar.html         # Thanh điều hướng
│   └── footer.html         # Chân trang
├── 📁 css/                 # File CSS
│   └── common.css          # CSS chung cho toàn bộ website
├── 📁 js/                  # File JavaScript
│   ├── common.js           # JavaScript chung (utils, storage, API)
│   ├── data.js             # Dữ liệu mẫu sản phẩm
│   ├── index.js            # JavaScript trang chủ
│   ├── login.js            # JavaScript trang đăng nhập
│   ├── admin.js            # JavaScript trang quản trị
│   ├── product-detail.js   # JavaScript trang chi tiết sản phẩm
│   ├── contact.js          # JavaScript trang liên hệ
│   └── about.js            # JavaScript trang giới thiệu
├── 📁 images/              # Hình ảnh tĩnh
├── 📄 index.html           # Trang chủ
├── 📄 login.html           # Trang đăng nhập
├── 📄 admin.html           # Trang quản trị
├── 📄 product-detail.html  # Trang chi tiết sản phẩm
├── 📄 contact.html         # Trang liên hệ
├── 📄 about.html           # Trang giới thiệu
└── 📄 README.md            # Hướng dẫn dự án
```

## 🚀 Tính Năng Chính

### ✨ Giao Diện
- **Responsive Design**: Tương thích mọi thiết bị
- **Modern UI**: Sử dụng TailwindCSS với thiết kế hiện đại
- **Animations**: Hiệu ứng mượt mà và đẹp mắt
- **Loading States**: Trạng thái tải với spinner
- **Notifications**: Hệ thống thông báo toast

### 🛍️ Quản Lý Sản Phẩm
- **40 Sản Phẩm Mẫu**: Tích hợp Cloudinary với hình ảnh chất lượng cao
- **Bộ Lọc Thông Minh**: Lọc theo danh mục, kích thước, màu sắc
- **Phân Trang**: 12 sản phẩm/trang với navigation
- **Tìm Kiếm**: Tìm kiếm real-time
- **Chi Tiết Sản Phẩm**: Trang chi tiết với sản phẩm liên quan

### 🔐 Hệ Thống Quản Trị
- **Đăng Nhập An Toàn**: Xác thực với localStorage
- **Quản Lý Sản Phẩm**: Thêm, sửa, xóa, tìm kiếm
- **Upload Hình Ảnh**: Tích hợp Cloudinary API
- **Xuất Dữ Liệu**: Export JSON
- **Bảo Mật**: Kiểm tra quyền truy cập

### 📞 Liên Hệ & Tương Tác
- **Form Liên Hệ**: Validation và lưu trữ
- **FAQ**: Accordion với animation
- **Social Media**: Liên kết mạng xã hội
- **Chia Sẻ**: Share sản phẩm lên mạng xã hội

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: TailwindCSS framework
- **JavaScript ES6+**: Vanilla JS với modules
- **Cloudinary**: CDN cho hình ảnh
- **Font Awesome**: Icons
- **LocalStorage**: Lưu trữ dữ liệu client-side

## 📋 Hướng Dẫn Sử Dụng

### 1. Cài Đặt
```bash
# Clone repository
git clone [repository-url]
cd StoneShop

# Mở file index.html trong trình duyệt
# Hoặc sử dụng live server
```

### 2. Đăng Nhập Quản Trị
- **URL**: `login.html`
- **Username**: `meaning17`
- **Password**: `Nghiachidang@2002`

### 3. Quản Lý Sản Phẩm
- Thêm sản phẩm mới với hình ảnh
- Chỉnh sửa thông tin sản phẩm
- Xóa sản phẩm không cần thiết
- Tìm kiếm và lọc sản phẩm
- Xuất dữ liệu JSON

### 4. Tùy Chỉnh
- **Thay đổi Cloudinary**: Cập nhật `cloudName` trong `js/common.js`
- **Thêm sản phẩm**: Chỉnh sửa `js/data.js`
- **Tùy chỉnh giao diện**: Sửa `css/common.css`
- **Thêm tính năng**: Mở rộng các file JS tương ứng

## 🔧 Cấu Trúc Code

### JavaScript Modules
```javascript
// Utils - Tiện ích chung
Utils.formatCurrency()
Utils.showNotification()
Utils.validateEmail()

// Storage - Quản lý localStorage
Storage.get()
Storage.set()
Storage.remove()

// API - Tương tác với Cloudinary
API.uploadImage()
API.delay()

// Auth - Xác thực
Auth.isLoggedIn()
Auth.login()
Auth.logout()

// ProductManager - Quản lý sản phẩm
ProductManager.getAllProducts()
ProductManager.addProduct()
ProductManager.updateProduct()
ProductManager.deleteProduct()

// Pagination - Phân trang
Pagination.getPaginatedData()
Pagination.createPaginationControls()
```

### CSS Classes
```css
/* Animations */
.floating, .glow, .fade-in-up
.gradient-bg, .glass-effect

/* Utilities */
.input-focus, .btn-hover
.line-clamp-2, .loading-spinner
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Bảo Mật

- Xác thực quyền truy cập admin
- Validation form client-side
- Sanitize input data
- Secure Cloudinary upload

## 🚀 Deployment

### GitHub Pages
1. Push code lên GitHub
2. Enable GitHub Pages trong Settings
3. Chọn branch main
4. Website sẽ có sẵn tại `https://username.github.io/repository-name`

### Netlify
1. Connect repository với Netlify
2. Build command: `none`
3. Publish directory: `.`
4. Deploy tự động

## 📞 Hỗ Trợ

- **Email**: info@damynghe.com
- **Phone**: 0123 456 789
- **Address**: Hà Nội, Việt Nam

## 📄 License

© 2024 Đá Mỹ Nghệ. Tất cả quyền được bảo lưu.

---

**Lưu ý**: Dự án này sử dụng localStorage để lưu trữ dữ liệu. Trong môi trường production, nên tích hợp với backend database thực tế. # stone-shop
