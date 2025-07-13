<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tìm kiếm khóa học
                </h1>
                <p class="text-xl text-gray-600">
                    Khám phá hàng nghìn khóa học chất lượng cao
                </p>
            </div>

            <!-- AI Suggestions Banner -->
            <div
                class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl mb-8"
            >
                <div
                    class="flex flex-col md:flex-row items-center justify-between"
                >
                    <div class="flex items-center space-x-4 mb-4 md:mb-0">
                        <div class="bg-white bg-opacity-20 p-3 rounded-lg">
                            <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg">
                                Để AI gợi ý cho bạn
                            </h3>
                            <p class="text-blue-100">
                                Nhận đề xuất cá nhân hóa dựa trên sở thích
                            </p>
                        </div>
                    </div>
                    <button
                        @click="getAISuggestions"
                        :disabled="loadingSuggestions"
                        class="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
                    >
                        <span v-if="!loadingSuggestions">Gợi ý ngay</span>
                        <span v-else class="flex items-center">
                            <div
                                class="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600 mr-2"
                            ></div>
                            Đang phân tích...
                        </span>
                    </button>
                </div>
            </div>

            <!-- Product List with Filters -->
            <ProductList />

            <!-- Empty State for Favorites -->
            <div
                v-if="showEmptyFavoritesHint && favoriteCount === 0"
                class="mt-12 text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200"
            >
                <div class="max-w-md mx-auto">
                    <div
                        class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <svg
                            class="w-8 h-8 text-red-500"
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
                    <h3 class="text-lg font-medium text-gray-900 mb-2">
                        Chưa có khóa học yêu thích
                    </h3>
                    <p class="text-sm text-gray-500 mb-4">
                        Nhấn vào biểu tượng trái tim trên các khóa học để thêm
                        vào danh sách yêu thích
                    </p>
                    <router-link to="/favorites" class="btn-outline">
                        Xem danh sách yêu thích
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '../stores/product';
import ProductList from '../components/ProductList.vue';

export default {
    name: 'Search',
    components: {
        ProductList,
    },
    setup() {
        const productStore = useProductStore();

        const loadingSuggestions = ref(false);
        const showEmptyFavoritesHint = ref(false);

        const favoriteCount = computed(() => productStore.favorites.length);

        const getAISuggestions = async () => {
            loadingSuggestions.value = true;
            try {
                const suggestions = await productStore.getSuggestions();
                // The ProductList component will automatically show suggestions
                console.log('AI suggestions loaded:', suggestions);
            } catch (error) {
                console.error('Error getting AI suggestions:', error);
            } finally {
                loadingSuggestions.value = false;
            }
        };

        onMounted(() => {
            // Show empty favorites hint after some time if user hasn't favorited anything
            setTimeout(() => {
                showEmptyFavoritesHint.value = true;
            }, 5000);
        });

        return {
            loadingSuggestions,
            showEmptyFavoritesHint,
            favoriteCount,
            getAISuggestions,
        };
    },
};
</script>
