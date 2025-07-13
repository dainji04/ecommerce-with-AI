<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section
            class="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div class="text-center">
                    <h1
                        class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
                    >
                        Học tập thông minh với
                        <span class="text-yellow-300">AI</span>
                    </h1>
                    <p
                        class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up"
                    >
                        Khám phá hàng nghìn khóa học chất lượng cao với gợi ý cá
                        nhân hóa từ trí tuệ nhân tạo
                    </p>

                    <!-- Search Bar -->
                    <div class="max-w-2xl mx-auto mb-8 animate-slide-up">
                        <div class="relative">
                            <input
                                v-model="heroSearchQuery"
                                @keyup.enter="handleHeroSearch"
                                type="text"
                                placeholder="Tìm kiếm khóa học yêu thích..."
                                class="w-full px-6 py-4 text-lg rounded-full border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
                            />
                            <button
                                @click="handleHeroSearch"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-200"
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>

                    <!-- AI Suggestion Button -->
                    <div class="animate-bounce-in">
                        <button
                            @click="getAISuggestions"
                            :disabled="loadingSuggestions"
                            class="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                        >
                            <span
                                v-if="!loadingSuggestions"
                                class="flex items-center"
                            >
                                <svg
                                    class="w-6 h-6 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Gợi ý thông minh từ AI
                            </span>
                            <span v-else class="flex items-center">
                                <div
                                    class="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"
                                ></div>
                                Đang phân tích...
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div
                            class="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                        >
                            {{ stats.courses }}+
                        </div>
                        <div class="text-gray-600">Khóa học</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                        >
                            {{ stats.students }}K+
                        </div>
                        <div class="text-gray-600">Học viên</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                        >
                            {{ stats.instructors }}+
                        </div>
                        <div class="text-gray-600">Giảng viên</div>
                    </div>
                    <div class="text-center">
                        <div
                            class="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                        >
                            {{ stats.rating }}
                        </div>
                        <div class="text-gray-600">Đánh giá</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Courses -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Khóa học nổi bật
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Những khóa học được yêu thích nhất từ cộng đồng học viên
                    </p>
                </div>

                <ProductList />
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Tại sao chọn EduCommerce?
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trải nghiệm học tập hiện đại với công nghệ AI tiên tiến
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center p-6">
                        <div
                            class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-primary-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">
                            Gợi ý thông minh
                        </h3>
                        <p class="text-gray-600">
                            AI phân tích sở thích và đề xuất khóa học phù hợp
                            với bạn nhất
                        </p>
                    </div>

                    <div class="text-center p-6">
                        <div
                            class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">
                            Yêu thích & Theo dõi
                        </h3>
                        <p class="text-gray-600">
                            Lưu lại các khóa học quan tâm và theo dõi tiến độ
                            học tập
                        </p>
                    </div>

                    <div class="text-center p-6">
                        <div
                            class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <svg
                                class="w-8 h-8 text-yellow-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">
                            Chất lượng cao
                        </h3>
                        <p class="text-gray-600">
                            Các khóa học được tuyển chọn kỹ lưỡng từ giảng viên
                            chuyên nghiệp
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section
            class="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
        >
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Bắt đầu hành trình học tập ngay hôm nay!
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                    Tham gia cùng hàng nghìn học viên đã thành công với
                    EduCommerce
                </p>
                <div class="space-x-4">
                    <router-link
                        to="/search"
                        class="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
                    >
                        Khám phá ngay
                    </router-link>
                    <button
                        @click="getAISuggestions"
                        class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                    >
                        Gợi ý cho tôi
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product';
import ProductList from '../components/ProductList.vue';

export default {
    name: 'Home',
    components: {
        ProductList,
    },
    setup() {
        const router = useRouter();
        const productStore = useProductStore();

        const heroSearchQuery = ref('');
        const loadingSuggestions = ref(false);

        const stats = ref({
            courses: 1000,
            students: 50,
            instructors: 200,
            rating: '4.8⭐',
        });

        const handleHeroSearch = () => {
            if (heroSearchQuery.value.trim()) {
                productStore.setFilters({
                    search: heroSearchQuery.value.trim(),
                });
                router.push('/search');
            }
        };

        const getAISuggestions = async () => {
            loadingSuggestions.value = true;
            try {
                await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate AI processing
                router.push('/search');
            } finally {
                loadingSuggestions.value = false;
            }
        };

        onMounted(() => {
            // Animate stats on mount
            const animateStats = () => {
                const targets = {
                    courses: 1000,
                    students: 50,
                    instructors: 200,
                };
                const duration = 2000;
                const steps = 60;
                const stepDuration = duration / steps;

                Object.keys(targets).forEach((key) => {
                    let current = 0;
                    const target = targets[key];
                    const increment = target / steps;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stats.value[key] = Math.round(current);
                    }, stepDuration);
                });
            };

            setTimeout(animateStats, 0);
        });

        return {
            heroSearchQuery,
            loadingSuggestions,
            stats,
            handleHeroSearch,
            getAISuggestions,
        };
    },
};
</script>
