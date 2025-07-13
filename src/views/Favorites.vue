<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h1
                        class="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    >
                        Khóa học yêu thích
                    </h1>
                    <p class="text-xl text-gray-600">
                        {{ favoriteProducts.length }} khóa học đã lưu
                    </p>
                </div>

                <!-- Clear All Button -->
                <button
                    v-if="favoriteProducts.length > 0"
                    @click="clearAllFavorites"
                    class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                >
                    Xóa tất cả
                </button>
            </div>

            <!-- Favorites Grid -->
            <div
                v-if="favoriteProducts.length > 0"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <ProductCard
                    v-for="product in favoriteProducts"
                    :key="product.id"
                    :product="product"
                />
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-20">
                <div class="max-w-md mx-auto">
                    <!-- Animated Heart Icon -->
                    <div class="relative mb-8">
                        <div
                            class="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto animate-pulse"
                        >
                            <svg
                                class="w-12 h-12 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <!-- Floating hearts animation -->
                        <div
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                        >
                            <div
                                class="animate-bounce text-red-400 text-2xl opacity-60"
                            >
                                💕
                            </div>
                        </div>
                    </div>

                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                        Chưa có khóa học yêu thích
                    </h3>
                    <p class="text-gray-600 mb-8 leading-relaxed">
                        Hãy khám phá các khóa học thú vị và nhấn vào biểu tượng
                        trái tim để lưu lại những khóa học bạn quan tâm.
                    </p>

                    <!-- Action Buttons -->
                    <div class="space-y-4">
                        <router-link
                            to="/search"
                            class="block w-full btn-primary text-center"
                        >
                            🔍 Tìm kiếm khóa học
                        </router-link>

                        <router-link
                            to="/"
                            class="block w-full btn-outline text-center"
                        >
                            🏠 Về trang chủ
                        </router-link>
                    </div>

                    <!-- Tips -->
                    <div
                        class="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                        <h4
                            class="font-semibold text-blue-900 mb-3 flex items-center"
                        >
                            <svg
                                class="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Mẹo sử dụng
                        </h4>
                        <ul class="text-sm text-blue-800 space-y-2 text-left">
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">•</span>
                                Nhấn vào biểu tượng ❤️ trên bất kỳ khóa học nào
                                để thêm vào yêu thích
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">•</span>
                                Sử dụng tính năng gợi ý AI để tìm khóa học phù
                                hợp
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">•</span>
                                Danh sách yêu thích được lưu trữ trên thiết bị
                                của bạn
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Related Suggestions -->
            <div v-if="favoriteProducts.length > 0" class="mt-16">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                    Có thể bạn cũng thích
                </h2>
                <div
                    class="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200"
                >
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div
                                class="bg-primary-600 text-white p-2 rounded-lg"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">
                                    Gợi ý từ AI
                                </h3>
                                <p class="text-sm text-gray-600">
                                    Dựa trên sở thích của bạn
                                </p>
                            </div>
                        </div>
                        <button
                            @click="getMoreSuggestions"
                            :disabled="loadingSuggestions"
                            class="btn-outline text-sm"
                        >
                            <span v-if="!loadingSuggestions">Làm mới</span>
                            <span v-else>Đang tải...</span>
                        </button>
                    </div>

                    <div
                        v-if="suggestions.length > 0"
                        class="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <ProductCard
                            v-for="product in suggestions"
                            :key="`suggestion-${product.id}`"
                            :product="product"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '../stores/product';
import ProductCard from '../components/ProductCard.vue';

export default {
    name: 'Favorites',
    components: {
        ProductCard,
    },
    setup() {
        const productStore = useProductStore();

        const suggestions = ref([]);
        const loadingSuggestions = ref(false);

        const favoriteProducts = computed(() => productStore.favoriteProducts);

        const clearAllFavorites = () => {
            if (
                confirm('Bạn có chắc chắn muốn xóa tất cả khóa học yêu thích?')
            ) {
                productStore.favorites.splice(0);
                localStorage.setItem('favorites', JSON.stringify([]));
            }
        };

        const getMoreSuggestions = async () => {
            loadingSuggestions.value = true;
            try {
                const result = await productStore.getSuggestions();
                suggestions.value = result.products || [];
            } catch (error) {
                console.error('Error getting suggestions:', error);
            } finally {
                loadingSuggestions.value = false;
            }
        };

        onMounted(async () => {
            // Load products if not already loaded
            if (productStore.products.length === 0) {
                await productStore.fetchProducts();
            }

            // Load suggestions for users with favorites
            if (favoriteProducts.value.length > 0) {
                getMoreSuggestions();
            }
        });

        return {
            favoriteProducts,
            suggestions,
            loadingSuggestions,
            clearAllFavorites,
            getMoreSuggestions,
        };
    },
};
</script>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>
