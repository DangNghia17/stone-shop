# StoneShop Frontend

## 1. Mô tả
Frontend VanillaJS + Tailwind CSS cho website bán đá mỹ nghệ StoneShop. UI/UX hiện đại, tối ưu SEO, responsive, maintain dễ dàng, bám sát tinh thần theme Artcraft Multipurpose Prestashop.

## 2. Cấu trúc thư mục
```
frontend/
├── src/
│   ├── pages/         # Trang: Home, ProductDetail, Contact, About, Admin...
│   ├── components/    # Component UI: Header, Footer, Banner, Card, ...
│   ├── services/      # Xử lý API: product, auth, upload...
│   ├── utils/         # Hàm tiện ích: debounce, validate, ...
│   ├── stylesheets/   # Tailwind, custom CSS
│   └── ...
├── data/              # Dữ liệu mẫu FE
└── ...
```

## 3. Cài đặt & chạy
1. `cd frontend`
2. `npm install`
3. Chạy dev: `npm run dev` (http://localhost:1234)
4. Build production: `npm run build`

## 4. Trang & chức năng chính
- Trang chủ: Banner, filter, grid sản phẩm, phân trang, skeleton loading
- Trang chi tiết: Ảnh lớn, breadcrumb, zoom, thông tin, liên hệ, sản phẩm liên quan
- Trang liên hệ: Form đẹp, glass effect, thông tin công ty, FAQ
- Trang giới thiệu: Câu chuyện, giá trị, quy trình, số liệu, CTA liên hệ
- Admin: Đăng nhập, dashboard quản lý sản phẩm (CRUD, upload, bulk, export, validate, loading/error)
- Responsive, hiệu ứng động, tối ưu UX/UI, mobile friendly

## 5. UI/UX
- UI bám sát tinh thần theme Artcraft Multipurpose Prestashop (không clone mã nguồn, chỉ tham khảo layout, màu, hiệu ứng)
- Sử dụng TailwindCSS cho toàn bộ hiệu ứng, spacing, màu sắc, glass effect, gradient, animation, skeleton loading, ...
- Component tách biệt, dễ maintain, dễ mở rộng

## 6. Lưu ý
- FE chỉ dùng VanillaJS, không framework
- Không lộ thông tin nhạy cảm, không commit file cấu hình BE
- Xem README.md gốc dự án để biết thêm chi tiết FE/BE/data
