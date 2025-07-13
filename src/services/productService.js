// Mock data cho các sản phẩm giáo dục
export const mockProducts = [
    {
        id: 1,
        name: 'Khóa học Vue.js từ cơ bản đến nâng cao',
        price: 899000,
        originalPrice: 1200000,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500',
        description: 'Học Vue.js một cách toàn diện với dự án thực tế',
        longDescription:
            'Khóa học Vue.js này sẽ đưa bạn từ những kiến thức cơ bản nhất về JavaScript framework này đến việc xây dựng các ứng dụng web phức tạp. Bạn sẽ học cách sử dụng Vue Router, Vuex/Pinia, và tích hợp với các API thực tế.',
        category: 'Lập trình',
        instructor: 'Nguyễn Văn A',
        duration: '40 giờ',
        level: 'Trung cấp',
        rating: 4.8,
        students: 1250,
        features: [
            '40+ giờ video HD',
            '100+ bài tập thực hành',
            '5 dự án thực tế',
            'Hỗ trợ 24/7',
            'Chứng chỉ hoàn thành',
        ],
        reviews: [
            {
                id: 1,
                user: 'Trần Thị B',
                rating: 5,
                comment:
                    'Khóa học rất chi tiết và dễ hiểu. Giảng viên giải thích rất tốt!',
                date: '2024-01-15',
            },
            {
                id: 2,
                user: 'Lê Văn C',
                rating: 4,
                comment: 'Nội dung phong phú, có nhiều ví dụ thực tế.',
                date: '2024-01-10',
            },
        ],
    },
    {
        id: 2,
        name: 'Thiết kế UX/UI với Figma',
        price: 650000,
        originalPrice: 850000,
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500',
        description: 'Nắm vững thiết kế giao diện và trải nghiệm người dùng',
        longDescription:
            'Khóa học UX/UI toàn diện giúp bạn thành thạo Figma và các nguyên tắc thiết kế hiện đại. Từ nghiên cứu người dùng đến prototype và testing.',
        category: 'Thiết kế',
        instructor: 'Phạm Thị D',
        duration: '35 giờ',
        level: 'Cơ bản',
        rating: 4.7,
        students: 890,
        features: [
            '35+ giờ video chất lượng cao',
            '50+ template Figma',
            '3 dự án thiết kế thực tế',
            'Workshop trực tiếp',
            'Cộng đồng học viên',
        ],
        reviews: [
            {
                id: 1,
                user: 'Hoàng Văn E',
                rating: 5,
                comment: 'Khóa học hay nhất về UX/UI mà tôi từng học!',
                date: '2024-01-12',
            },
        ],
    },
    {
        id: 3,
        name: 'Python cho Data Science',
        price: 1200000,
        originalPrice: 1500000,
        image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=500',
        description: 'Phân tích dữ liệu và machine learning với Python',
        longDescription:
            'Khóa học Python Data Science từ cơ bản đến nâng cao. Bạn sẽ học Pandas, NumPy, Matplotlib, Scikit-learn và xây dựng các mô hình machine learning thực tế.',
        category: 'Data Science',
        instructor: 'Vũ Minh F',
        duration: '60 giờ',
        level: 'Nâng cao',
        rating: 4.9,
        students: 2100,
        features: [
            '60+ giờ học tập',
            '200+ bài tập',
            '10 dự án thực tế',
            'Dataset thực tế',
            'Mentor 1-1',
        ],
        reviews: [],
    },
    {
        id: 4,
        name: 'Digital Marketing toàn diện',
        price: 750000,
        originalPrice: 950000,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
        description: 'Chiến lược marketing online hiệu quả',
        longDescription:
            'Học cách xây dựng và triển khai các chiến dịch marketing digital thành công. Từ SEO, SEM, Social Media đến Email Marketing và Analytics.',
        category: 'Marketing',
        instructor: 'Đặng Thị G',
        duration: '45 giờ',
        level: 'Trung cấp',
        rating: 4.6,
        students: 1580,
        features: [
            '45 giờ video training',
            '20+ case study',
            'Tools marketing chuyên nghiệp',
            'Template chiến dịch',
            'Group thảo luận',
        ],
        reviews: [],
    },
    {
        id: 5,
        name: 'React Native - Phát triển App Mobile',
        price: 1100000,
        originalPrice: 1400000,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
        description: 'Xây dựng ứng dụng di động đa nền tảng',
        longDescription:
            'Khóa học React Native giúp bạn phát triển ứng dụng mobile cho cả iOS và Android. Học cách tối ưu performance và deploy app lên store.',
        category: 'Lập trình',
        instructor: 'Bùi Văn H',
        duration: '50 giờ',
        level: 'Nâng cao',
        rating: 4.8,
        students: 950,
        features: [
            '50 giờ video',
            '3 app hoàn chỉnh',
            'Deploy lên App Store',
            'Push notification',
            'Performance optimization',
        ],
        reviews: [],
    },
    {
        id: 6,
        name: 'Photoshop & Illustrator cho Designer',
        price: 580000,
        originalPrice: 780000,
        image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=500',
        description: 'Thành thạo 2 công cụ thiết kế hàng đầu',
        longDescription:
            'Khóa học toàn diện về Photoshop và Illustrator. Từ chỉnh sửa ảnh cơ bản đến thiết kế logo, poster và các sản phẩm đồ họa chuyên nghiệp.',
        category: 'Thiết kế',
        instructor: 'Lưu Thị I',
        duration: '30 giờ',
        level: 'Cơ bản',
        rating: 4.5,
        students: 1820,
        features: [
            '30 giờ hướng dẫn',
            '100+ file practice',
            'Template thiết kế',
            'Shortcuts chuyên nghiệp',
            'Portfolio guidance',
        ],
        reviews: [],
    },
    {
        id: 7,
        name: 'Node.js Backend Development',
        price: 950000,
        originalPrice: 1250000,
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500',
        description: 'Xây dựng API và backend với Node.js',
        longDescription:
            'Học cách xây dựng backend scalable với Node.js, Express, MongoDB. Từ RESTful API đến real-time application với Socket.io.',
        category: 'Lập trình',
        instructor: 'Ngô Văn J',
        duration: '55 giờ',
        level: 'Trung cấp',
        rating: 4.7,
        students: 1100,
        features: [
            '55 giờ coding',
            '5 API projects',
            'Database design',
            'Authentication & Security',
            'Deployment & DevOps',
        ],
        reviews: [],
    },
    {
        id: 8,
        name: 'Excel nâng cao cho doanh nghiệp',
        price: 450000,
        originalPrice: 600000,
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
        description: 'Thành thạo Excel trong công việc và kinh doanh',
        longDescription:
            'Khóa học Excel từ cơ bản đến nâng cao. Pivot Table, VBA, Dashboard, và các kỹ thuật phân tích dữ liệu doanh nghiệp.',
        category: 'Văn phòng',
        instructor: 'Mai Thị K',
        duration: '25 giờ',
        level: 'Trung cấp',
        rating: 4.4,
        students: 2850,
        features: [
            '25 giờ thực hành',
            '50+ template Excel',
            'VBA automation',
            'Business cases',
            'Certificate Microsoft',
        ],
        reviews: [],
    },
];

// Mock API service
export const productService = {
    async getProducts() {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return mockProducts;
    },

    async getProductById(id) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockProducts.find((product) => product.id === parseInt(id));
    },

    async getSuggestions(userId) {
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Simulate AI suggestions based on user behavior
        const suggestions = [
            mockProducts[0], // Vue.js
            mockProducts[4], // React Native
            mockProducts[6], // Node.js
        ];

        return {
            reason: 'Dựa trên lịch sử học tập và sở thích của bạn',
            products: suggestions,
        };
    },

    async searchProducts(query) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockProducts.filter(
            (product) =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
        );
    },
};
