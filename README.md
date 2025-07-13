# EduCommerce - Sàn Giáo Dục Thương Mại Điện Tử

## 🎓 Mô tả dự án

EduCommerce là một nền tảng giáo dục thương mại điện tử hiện đại được xây dựng với Vue.js 3, tích hợp công nghệ AI để cung cấp trải nghiệm học tập thông minh và cá nhân hóa.

### ✨ Tính năng chính

1. **📚 Hiển thị danh sách sản phẩm**

    - Danh sách khóa học với thông tin đầy đủ
    - Ảnh thumbnail, giá, mô tả, đánh giá
    - Responsive design trên mọi thiết bị

2. **🔍 Tìm kiếm và lọc thông minh**

    - Tìm kiếm theo tên khóa học
    - Lọc theo mức giá (< 500K, 500K-1M, > 1M)
    - Lọc theo danh mục (Lập trình, Thiết kế, Marketing, etc.)

3. **🤖 Gợi ý thông minh từ AI**

    - API gợi ý sản phẩm phù hợp
    - Phân tích hành vi người dùng
    - Đề xuất cá nhân hóa

4. **📋 Modal chi tiết sản phẩm**

    - Thông tin chi tiết đầy đủ
    - Ảnh chất lượng cao
    - Đánh giá và nhận xét từ học viên
    - Tính năng chia sẻ

5. **❤️ Quản lý yêu thích**
    - Đánh dấu khóa học yêu thích
    - Trang riêng quản lý danh sách
    - Lưu trữ local storage

## 🛠️ Công nghệ sử dụng

-   **Frontend Framework**: Vue.js 3 với Composition API
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **State Management**: Pinia
-   **Routing**: Vue Router 4
-   **Icons**: Heroicons
-   **HTTP Client**: Axios

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống

-   Node.js >= 16
-   npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Dự án sẽ chạy tại: `http://localhost:3000`

### Build production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📁 Cấu trúc dự án

```
src/
├── components/           # Vue components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── ProductCard.vue  # Card hiển thị sản phẩm
│   └── ProductList.vue  # Danh sách sản phẩm với filter
├── views/               # Các trang chính
│   ├── Home.vue         # Trang chủ
│   ├── Search.vue       # Trang tìm kiếm
│   ├── Favorites.vue    # Trang yêu thích
│   └── ProductDetail.vue # Chi tiết sản phẩm
├── stores/              # Pinia stores
│   ├── app.js          # Global app state
│   └── product.js      # Product management
├── services/            # API services
│   └── productService.js # Mock API và data
├── router/              # Vue Router config
└── style.css           # Global styles
```

## 🎨 UI/UX Features

### Design System

-   **Primary Colors**: Blue gradient (primary-600 to secondary-600)
-   **Typography**: Inter font family
-   **Components**: Reusable với Tailwind CSS
-   **Animations**: Smooth transitions và micro-interactions

### Responsive Design

-   Mobile-first approach
-   Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
-   Adaptive grid layouts
-   Touch-friendly interface

### Accessibility

-   Semantic HTML
-   ARIA labels
-   Keyboard navigation
-   Color contrast compliance

## 🤖 AI Features

### Gợi ý thông minh

```javascript
// API endpoint mô phỏng
GET /api/suggestions?userId=xxx

// Response format
{
  "reason": "Dựa trên lịch sử học tập và sở thích của bạn",
  "products": [...]
}
```

### Thuật toán gợi ý

-   Phân tích lịch sử xem sản phẩm
-   Tracking sản phẩm yêu thích
-   Machine learning recommendations (mô phỏng)

## 📊 Mock Data

Dự án sử dụng mock data phong phú với:

-   8+ khóa học mẫu
-   Đa dạng danh mục
-   Thông tin chi tiết (giảng viên, thời lượng, đánh giá)
-   Reviews và ratings thực tế

## 🔧 Configuration

### Tailwind CSS

-   Custom color palette
-   Extended animations
-   Utility classes tùy chỉnh

### Vite Config

-   Fast development server
-   Optimized build
-   Path aliases (@/)

### ESLint & Prettier

-   Code formatting standards
-   Vue.js best practices
-   Consistent code style

## 📱 Features nâng cao

### Performance

-   Lazy loading images
-   Code splitting
-   Optimized bundle size
-   Caching strategies

### SEO

-   Meta tags dynamic
-   Structured data
-   Open Graph tags
-   Twitter Cards

### PWA Ready

-   Service Worker support
-   Offline capabilities
-   App-like experience
-   Install prompts

## 🎯 User Experience

### Loading States

-   Skeleton screens
-   Progressive loading
-   Error boundaries
-   Retry mechanisms

### Interactive Elements

-   Hover effects
-   Click feedback
-   Smooth transitions
-   Micro-animations

### Navigation

-   Breadcrumbs
-   Back button
-   Deep linking
-   Browser history

## 🔮 Future Enhancements

-   [ ] User authentication
-   [ ] Shopping cart functionality
-   [ ] Payment integration
-   [ ] Real-time notifications
-   [ ] Video previews
-   [ ] Advanced filtering
-   [ ] Social features
-   [ ] Mobile app version

## 📄 License

MIT License - see LICENSE file for details

## 👥 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Support

Nếu có vấn đề hoặc đóng góp ý kiến, vui lòng tạo issue trên GitHub repository.

---

**EduCommerce** - Học tập thông minh với công nghệ AI 🚀
