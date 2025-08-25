# 🎯 Giải Pháp Hoàn Chỉnh: Xem Cả Hai Phiên Bản Website

## 📝 Tổng Quan Giải Pháp

Bạn đã có một website đá mỹ nghệ được deploy trên Vercel và vừa nâng cấp giao diện. Giờ đây bạn có thể xem cả hai phiên bản cùng lúc!

## 🌟 Những Gì Đã Được Thiết Lập

### 1. **Hai Nhánh Riêng Biệt**
- **`production`**: Phiên bản chính thức (giao diện cũ ổn định)
- **`staging`**: Phiên bản thử nghiệm (giao diện mới nâng cấp)

### 2. **Cấu Hình Tự Động**
- **Environment configs**: Tự động phân biệt production vs staging
- **Vercel configs**: Riêng biệt cho từng môi trường
- **Version banners**: Staging hiển thị banner cảnh báo, production không

### 3. **Tools Hỗ Trợ**
- **Version switcher script**: Chuyển đổi nhanh giữa các phiên bản
- **Deployment guide**: Hướng dẫn chi tiết deploy
- **Configuration management**: Quản lý cấu hình tự động

## 🚀 Cách Sử Dụng

### Chuyển Đổi Phiên Bản Local
```bash
# Xem phiên bản chính thức (giao diện cũ)
./switch-version.sh production

# Xem phiên bản thử nghiệm (giao diện mới)
./switch-version.sh staging
```

### Deploy Lên Vercel

#### Option 1: Tạo 2 Project Riêng Biệt (Khuyến nghị)
1. **Production Project**:
   - Tên: `stone-shop-production`
   - Branch: `production`
   - Domain: Sử dụng domain chính của bạn

2. **Staging Project**:
   - Tên: `stone-shop-staging`
   - Branch: `staging`
   - Domain: Subdomain hoặc staging URL

#### Option 2: Sử dụng Preview Deployments
- Production branch → Main domain
- Staging branch → Preview URLs tự động

## 🎨 Sự Khác Biệt Giữa Hai Phiên Bản

### 🏭 Production (Giao Diện Cũ)
- ✅ Giao diện ổn định, đã test kỹ
- ✅ Không có banner cảnh báo
- ✅ Performance tối ưu
- ✅ Thích hợp cho người dùng cuối

### 🧪 Staging (Giao Diện Mới)
- ✅ Banner cảnh báo "PHIÊN BẢN THỬ NGHIỆM - GIAO DIỆN MỚI"
- ✅ Tính năng debug bật
- ✅ Version info popup
- ✅ Thích hợp cho testing và demo

## 📋 Quy Trình Cập Nhật

### Khi Muốn Cập Nhật Giao Diện Mới:
1. Thực hiện thay đổi trên branch `staging`
2. Test kỹ trên staging environment
3. Khi hài lòng, merge từ `staging` sang `production`

### Khi Muốn Rollback:
1. Có thể nhanh chóng switch về production branch
2. Hoặc redirect traffic về production domain

## 🌐 URLs Mẫu Sau Khi Deploy

```
🏭 Production:  https://your-domain.com (giao diện cũ ổn định)
🧪 Staging:     https://staging.your-domain.com (giao diện mới)
```

## 💡 Lợi Ích Của Giải Pháp Này

1. **Zero Downtime**: Website chính luôn hoạt động
2. **Easy Testing**: Có thể test giao diện mới mà không ảnh hưởng production
3. **Quick Rollback**: Nếu có vấn đề, có thể quay lại ngay
4. **User Choice**: Có thể cho một số user beta test giao diện mới
5. **SEO Safe**: Search engines chỉ index production site

## 📞 Hỗ Trợ & Troubleshooting

### Các File Quan Trọng:
- `DEPLOYMENT.md`: Hướng dẫn chi tiết deployment
- `switch-version.sh`: Script chuyển đổi phiên bản
- `js/config.*.js`: Cấu hình environment
- `vercel*.json`: Cấu hình Vercel

### Nếu Có Vấn Đề:
1. Kiểm tra current branch: `git branch --show-current`
2. Xem deployment logs trên Vercel
3. Test local trước khi deploy
4. Sử dụng script để switch giữa các phiên bản

## 🎉 Kết Luận

Giờ đây bạn có thể:
- ✅ Xem cả hai phiên bản website cùng lúc
- ✅ Dễ dàng chuyển đổi và so sánh
- ✅ Deploy an toàn với zero downtime
- ✅ Test tính năng mới mà không ảnh hưởng production
- ✅ Quản lý deployment một cách chuyên nghiệp

Chúc bạn thành công với website đá mỹ nghệ! 🏛️✨