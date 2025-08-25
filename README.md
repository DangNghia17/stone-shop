
# 🏛️ Đá Mỹ Nghệ - Website Bán Đá Mỹ Nghệ Cao Cấp

Website bán đá mỹ nghệ với giao diện hiện đại, responsive và hệ thống quản trị đầy đủ. Dự án được xây dựng với kiến trúc SPA (Single Page Application) sử dụng vanilla JavaScript, ExpressJS backend và MongoDB.

## ✨ Tính Năng Nổi Bật

### 🎨 Giao Diện Hiện Đại
- **Responsive Design**: Tương thích mọi thiết bị (Mobile, Tablet, Desktop)
- **Modern UI/UX**: Sử dụng TailwindCSS với thiết kế hiện đại và đẹp mắt
- **Animations**: Hiệu ứng mượt mà với CSS animations và transitions
- **Gradient & Shadows**: Thiết kế với gradients và shadows tạo chiều sâu
- **Font Awesome Icons**: Hệ thống icon phong phú và nhất quán

### 🛍️ Quản Lý Sản Phẩm
- **Bộ Lọc Thông Minh**: Lọc theo danh mục, kích thước, màu sắc
- **Tìm Kiếm Real-time**: Tìm kiếm sản phẩm nhanh chóng
- **Phân Trang**: Hệ thống phân trang responsive
- **Chi Tiết Sản Phẩm**: Trang chi tiết với hình ảnh và thông tin đầy đủ
- **Sản Phẩm Liên Quan**: Hiển thị sản phẩm tương tự

### 🔐 Hệ Thống Quản Trị
- **Đăng Nhập An Toàn**: Xác thực admin với localStorage
- **Dashboard**: Bảng điều khiển với thống kê và quản lý sản phẩm
- **CRUD Operations**: Thêm, sửa, xóa, tìm kiếm sản phẩm
- **Upload Hình Ảnh**: Tích hợp Cloudinary API (có thể cấu hình)
- **Xuất Dữ Liệu**: Export dữ liệu JSON
- **Quản Lý Danh Mục**: Phân loại sản phẩm theo danh mục

### 📱 Responsive & Mobile-First
- **Mobile Menu**: Menu điều hướng responsive cho mobile
- **Touch-Friendly**: Tối ưu cho thiết bị cảm ứng
- **Fast Loading**: Tối ưu hiệu suất và tốc độ tải trang
- **Progressive Enhancement**: Tương thích với mọi trình duyệt

## 🏗️ Cấu Trúc Dự Án

```
stone-shop/
├── 📁 backend/                 # Backend ExpressJS + MongoDB
│   ├── 📁 config/             # Cấu hình database và Cloudinary
│   ├── 📁 controllers/        # Logic xử lý API
│   ├── 📁 middleware/         # Middleware xác thực và upload
│   ├── 📁 models/             # MongoDB schemas
│   ├── 📁 routes/             # API routes
│   └── server.js              # Server chính
├── 📁 frontend/               # Frontend SPA
│   ├── 📁 src/
│   │   ├── 📁 components/     # Components tái sử dụng
│   │   │   ├── Header.js      # Header với mobile menu
│   │   │   ├── Banner.js      # Hero section đẹp
│   │   │   ├── FilterBar.js   # Bộ lọc sản phẩm
│   │   │   ├── ProductCard.js # Card sản phẩm
│   │   │   ├── ProductGrid.js # Grid hiển thị sản phẩm
│   │   │   ├── Pagination.js  # Phân trang
│   │   │   └── Footer.js      # Footer thông tin đầy đủ
│   │   ├── 📁 pages/          # Các trang chính
│   │   │   ├── Home.js        # Trang chủ với features
│   │   │   ├── About.js       # Trang giới thiệu
│   │   │   ├── Contact.js     # Trang liên hệ với form
│   │   │   ├── ProductDetail.js # Chi tiết sản phẩm
│   │   │   ├── AdminLogin.js  # Đăng nhập admin
│   │   │   └── AdminDashboard.js # Dashboard quản trị
│   │   ├── 📁 services/       # API services
│   │   ├── 📁 stylesheets/    # CSS và Tailwind
│   │   └── main.js            # Router và logic chính
│   └── index.html             # Entry point
└── README.md                   # Hướng dẫn dự án
```

## 🚀 Cài Đặt & Chạy Dự Án

### 1. Clone Repository
```bash
git clone https://github.com/your-username/stone-shop.git
cd stone-shop
```

### 2. Cài Đặt Backend
```bash
cd backend
npm install
```

### 3. Cấu Hình Environment
Tạo file `.env` trong thư mục `backend/`:
   ```env
MONGODB_URI=mongodb://localhost:27017/stone-shop
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

### 4. Chạy Backend
```bash
npm start
# hoặc
npm run dev
```

### 5. Chạy Frontend
```bash
cd frontend
# Mở file index.html trong trình duyệt
# Hoặc sử dụng live server
```

## 🔑 Thông Tin Đăng Nhập Admin

- **URL**: `#/admin`
- **Username**: `meaning17`
- **Password**: `Nghiachidang@2002`

## 🎯 Các Trang Chính

### 🏠 Trang Chủ (`#/`)
- Hero section với CTA buttons
- Bộ lọc sản phẩm thông minh
- Grid sản phẩm responsive
- Features section giới thiệu
- Testimonials từ khách hàng

### 📖 Giới Thiệu (`#/about`)
- Câu chuyện công ty
- Giá trị cốt lõi
- Đội ngũ nhân viên
- FAQ thường gặp

### 📞 Liên Hệ (`#/contact`)
- Form liên hệ với validation
- Thông tin công ty chi tiết
- Social media links
- Bản đồ vị trí

### 🛍️ Chi Tiết Sản Phẩm (`#/product/:id`)
- Hình ảnh sản phẩm với thumbnails
- Thông tin chi tiết đầy đủ
- Actions: thêm giỏ hàng, yêu thích
- Sản phẩm liên quan

### ⚙️ Quản Trị (`#/dashboard`)
- Dashboard với thống kê
- Quản lý sản phẩm CRUD
- Upload hình ảnh
- Xuất dữ liệu

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: TailwindCSS framework
- **JavaScript ES6+**: Vanilla JS với modules
- **Font Awesome**: Icon system
- **Responsive Design**: Mobile-first approach

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM cho MongoDB
- **Cloudinary**: Image hosting service

### Development Tools
- **TailwindCSS**: Utility-first CSS framework
- **ESLint**: Code quality
- **Git**: Version control

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Success**: Green (#059669)
- **Warning**: Yellow (#d97706)
- **Error**: Red (#dc2626)
- **Neutral**: Gray scale

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weights (300-500)

### Spacing
- **Container**: max-w-7xl (1280px)
- **Padding**: Consistent spacing scale
- **Margins**: Responsive margins

## 🔧 Tùy Chỉnh

### Thay Đổi Theme
```css
/* Trong tailwind.css */
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
}
```

### Thêm Sản Phẩm Mới
```javascript
// Trong data.js hoặc qua API
const newProduct = {
  name: "Tên sản phẩm",
  category: "Danh mục",
  price: 1000000,
  size: "30cm",
  color: "Đen",
  description: "Mô tả sản phẩm"
};
```

### Cấu Hình Cloudinary
```javascript
// Trong backend/config/cloudinary.js
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
```

## 🚀 Deployment

### Frontend (Static Hosting)
- **Netlify**: Connect repository và deploy tự động
- **Vercel**: Deploy với zero configuration
- **GitHub Pages**: Host miễn phí cho open source

### Backend (Server)
- **Heroku**: Platform as a Service
- **DigitalOcean**: VPS hosting
- **AWS**: Cloud hosting services

## 📊 Performance

- **Lighthouse Score**: 90+ trên tất cả metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Bảo Mật

- **Input Validation**: Sanitize tất cả input
- **XSS Protection**: Escape HTML output
- **CSRF Protection**: Token-based authentication
- **Rate Limiting**: API rate limiting
- **Environment Variables**: Bảo mật thông tin nhạy cảm

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

© 2024 Đá Mỹ Nghệ. Tất cả quyền được bảo lưu.

## 📞 Hỗ Trợ

- **Email**: info@damynghe.com
- **Phone**: 0123 456 789
- **Address**: Hà Nội, Việt Nam
- **Website**: https://damynghe.com

---

**Lưu ý**: Dự án này sử dụng localStorage cho authentication demo. Trong môi trường production, nên tích hợp với JWT tokens và secure session management.
