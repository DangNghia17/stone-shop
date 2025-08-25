# StoneShop Backend

## 1. Mô tả
Backend Node.js/Express cho website bán đá mỹ nghệ StoneShop. Bảo mật, xác thực JWT, quản lý sản phẩm, upload ảnh Cloudinary, import dữ liệu mẫu, tối ưu cho maintain.

## 2. Cấu trúc thư mục
```
backend/
├── models/         # Mongoose models
├── routes/         # Express routes
├── controllers/    # Controllers
├── config/         # Cấu hình DB, Cloudinary
├── middleware/     # Middleware xác thực, upload
├── uploads/        # (Nếu cần lưu tạm file upload)
├── .env.example    # Mẫu biến môi trường
├── server.js       # Entry point
└── ...
```

## 3. Cài đặt & chạy
1. `cd backend`
2. Tạo file `.env` từ `.env.example`, điền thông tin Cloudinary, MongoDB, admin
3. `npm install`

4. Chạy dev: `npm run dev` (http://localhost:5000)
5. Import dữ liệu mẫu: `node controllers/importSampleData.js`
6. Truy cập http://localhost:5000 để xem bảng auto-list toàn bộ API endpoint (giống swagger đơn giản, luôn cập nhật động)


## 4. API chính & auto-list
- Đăng nhập admin: `POST /api/auth/login` (body: username, password)
- CRUD sản phẩm: `GET/POST/PUT/DELETE /api/products`
- Upload ảnh: `POST /api/upload` (form-data: image, header: Authorization)
- Bulk operations: `POST /api/products/bulk` (tùy chỉnh)
- Export JSON: `GET /api/products/export` (header: Authorization)
- Tất cả API quản trị đều yêu cầu xác thực JWT

### Xem nhanh toàn bộ API
- Truy cập http://localhost:5000 để xem bảng auto-list toàn bộ endpoint (method, path) – luôn cập nhật động, không cần liệt kê thủ công.

## 5. Bảo mật
- Không lộ key/secret Cloudinary, admin ra ngoài
- Chỉ backend mới upload ảnh, xác thực API bằng JWT
- .env không commit lên git
- Luôn dùng HTTPS cho API

## 6. Lưu ý
- Có thể mở rộng thêm middleware, validate, rate limit, ...
- Xem README.md gốc dự án để biết thêm chi tiết FE/BE/data
