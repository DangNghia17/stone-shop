# 🚀 Hướng Dẫn Triển Khai Đa Môi Trường - Stone Shop

## 📋 Tổng Quan

Dự án Stone Shop hiện hỗ trợ triển khai đa môi trường để bạn có thể xem cả hai phiên bản:
- **Production**: Phiên bản chính thức đã deploy (giao diện cũ)
- **Staging**: Phiên bản thử nghiệm với giao diện nâng cấp

## 🌿 Cấu Trúc Nhánh

```
main/copilot/... (development)
├── production   → Phiên bản chính thức (giao diện cũ)
└── staging      → Phiên bản thử nghiệm (giao diện mới)
```

## ⚙️ Cách Thiết Lập

### 1. Triển Khai Production (Giao Diện Cũ)

```bash
# Chuyển sang nhánh production
git checkout production

# Deploy lên Vercel
vercel --prod --name=stone-shop-production
```

**Hoặc sử dụng Vercel Dashboard:**
1. Tạo project mới: `stone-shop-production`
2. Connect với GitHub repository
3. Đặt branch thành `production`
4. Deploy settings:
   - Build Command: (để trống)
   - Output Directory: `.`
   - Install Command: (để trống)

### 2. Triển Khai Staging (Giao Diện Mới)

```bash
# Chuyển sang nhánh staging
git checkout staging

# Deploy lên Vercel
vercel --name=stone-shop-staging
```

**Hoặc sử dụng Vercel Dashboard:**
1. Tạo project mới: `stone-shop-staging`
2. Connect với GitHub repository
3. Đặt branch thành `staging`
4. Deploy settings tương tự production

## 🔧 Cấu Hình Environment

### Production Environment
- **File config**: `js/config.production.js`
- **Vercel config**: `vercel.json`
- **Features**: Chỉ bao gồm tính năng cơ bản
- **Debug**: Tắt

### Staging Environment
- **File config**: `js/config.staging.js`
- **Vercel config**: `vercel.json`
- **Features**: Bao gồm tính năng thử nghiệm
- **Debug**: Bật
- **Banner**: Hiển thị thông báo "Phiên bản thử nghiệm"

## 🌐 Cập Nhật Domain

Sau khi deploy, cập nhật URLs trong config files:

### `js/config.production.js`
```javascript
urls: {
    production: 'https://your-production-domain.vercel.app',
    staging: 'https://your-staging-domain.vercel.app'
}
```

### `js/config.staging.js`
```javascript
urls: {
    production: 'https://your-production-domain.vercel.app',
    staging: 'https://your-staging-domain.vercel.app'
}
```

## 🔄 Quy Trình Cập Nhật

### Cập Nhật Giao Diện Mới (Staging)
1. Thực hiện thay đổi trên nhánh `staging`
2. Push changes
3. Vercel sẽ tự động deploy lại

### Đưa Giao Diện Mới Lên Production
1. Test kỹ trên staging
2. Merge từ `staging` vào `production`:
   ```bash
   git checkout production
   git merge staging
   git push origin production
   ```
3. Vercel sẽ tự động deploy production

## 📱 Tính Năng Phân Biệt

### Staging Features:
- ✅ Banner cảnh báo "Phiên bản thử nghiệm"
- ✅ Link chuyển đổi giữa các phiên bản
- ✅ Debug mode bật
- ✅ Version info popup

### Production Features:
- ❌ Không có banner cảnh báo
- ✅ UI sạch sẽ, chuyên nghiệp
- ❌ Debug mode tắt
- ✅ Performance tối ưu

## 🛠️ Troubleshooting

### Lỗi thường gặp:

**1. Domain không cập nhật**
- Kiểm tra file config có đúng URLs không
- Clear cache browser
- Đợi vài phút để Vercel propagate

**2. Changes không hiển thị**
- Kiểm tra đã push lên đúng branch chưa
- Xem build logs trên Vercel Dashboard

**3. Version banner không hiển thị đúng**
- Kiểm tra file config.js đã load chưa
- Kiểm tra initVersionBanner() được gọi chưa

## 📞 Hỗ Trợ

Nếu gặp vấn đề, hãy:
1. Kiểm tra Vercel build logs
2. Kiểm tra browser console for errors
3. Verify branch và config files
4. Test local trước khi deploy

## 🎯 Kết Quả Mong Đợi

Sau khi setup thành công:
- **Production URL**: Giao diện cũ ổn định
- **Staging URL**: Giao diện mới với banner thông báo
- **Dễ dàng chuyển đổi**: Click link để xem phiên bản khác
- **Auto-deploy**: Mọi thay đổi tự động cập nhật