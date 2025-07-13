<template>
    <div class="space-y-6">
        <!-- Search & Filter Bar -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <!-- Search Input -->
                <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Tìm kiếm</label
                    >
                    <div class="relative">
                        <input
                            v-model="localFilters.search"
                            @input="handleFilterChange"
                            type="text"
                            placeholder="Tìm kiếm theo tên khóa học..."
                            class="input-field pl-10"
                        />
                        <svg
                            class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                <!-- Price Filter -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Mức giá</label
                    >
                    <select
                        v-model="localFilters.priceRange"
                        @change="handleFilterChange"
                        class="input-field"
                    >
                        <option value="">Tất cả mức giá</option>
                        <option value="under500">Dưới 500.000đ</option>
                        <option value="500to1000">500.000đ - 1.000.000đ</option>
                        <option value="over1000">Trên 1.000.000đ</option>
                    </select>
                </div>

                <!-- Category Filter -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                        >Danh mục</label
                    >
                    <select
                        v-model="localFilters.category"
                        @change="handleFilterChange"
                        class="input-field"
                    >
                        <option value="">Tất cả danh mục</option>
                        <option value="Lập trình">Lập trình</option>
                        <option value="Thiết kế">Thiết kế</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Văn phòng">Văn phòng</option>
                    </select>
                </div>
            </div>

            <!-- Clear Filters -->
            <div class="mt-4 flex justify-between items-center">
                <div class="text-sm text-gray-600">
                    Tìm thấy {{ filteredProducts.length }} khóa học
                </div>
                <button
                    v-if="hasActiveFilters"
                    @click="clearAllFilters"
                    class="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                    Xóa bộ lọc
                </button>
            </div>
        </div>

        <!-- AI Suggestions -->
        <div
            v-if="showSuggestions && suggestions.products?.length > 0"
            class="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200"
        >
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div class="bg-primary-600 text-white p-2 rounded-lg">
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
                            Gợi ý thông minh từ AI
                        </h3>
                        <p class="text-sm text-gray-600">
                            {{ suggestions.reason }}
                        </p>
                    </div>
                </div>
                <button
                    @click="showSuggestions = false"
                    class="text-gray-400 hover:text-gray-600"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProductCard
                    v-for="product in suggestions.products"
                    :key="`suggestion-${product.id}`"
                    :product="product"
                />
            </div>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length > 0">
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>

        <!-- No Results -->
        <div v-else-if="!isLoading" class="text-center py-12">
            <div class="max-w-md mx-auto">
                <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                    />
                </svg>
                <h3 class="mt-4 text-lg font-medium text-gray-900">
                    Không tìm thấy kết quả
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                    Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy khóa
                    học phù hợp.
                </p>
                <button @click="clearAllFilters" class="mt-4 btn-primary">
                    Xóa bộ lọc
                </button>
            </div>
        </div>

        <!-- Loading State -->
        <div
            v-if="isLoading"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            <div v-for="i in 8" :key="i" class="card animate-pulse">
                <div class="h-48 bg-gray-200 rounded-t-xl"></div>
                <div class="p-4 space-y-3">
                    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-3 bg-gray-200 rounded w-full"></div>
                    <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                    <div class="h-8 bg-gray-200 rounded w-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useProductStore } from '../stores/product';
import { useAppStore } from '../stores/app';
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductList',
    components: {
        ProductCard,
    },
    props: {
        showFilters: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const productStore = useProductStore();
        const appStore = useAppStore();

        const localFilters = ref({
            search: '',
            priceRange: '',
            category: '',
        });

        const showSuggestions = ref(false);
        const suggestions = ref({ products: [], reason: '' });
        const isLoading = ref(false);

        const filteredProducts = computed(() => productStore.filteredProducts);

        const hasActiveFilters = computed(() => {
            return (
                localFilters.value.search ||
                localFilters.value.priceRange ||
                localFilters.value.category
            );
        });

        const handleFilterChange = () => {
            productStore.setFilters(localFilters.value);
        };

        const clearAllFilters = () => {
            localFilters.value = {
                search: '',
                priceRange: '',
                category: '',
            };
            productStore.clearFilters();
        };

        const loadSuggestions = async () => {
            try {
                const result = await productStore.getSuggestions();
                suggestions.value = result;
                showSuggestions.value = true;
            } catch (error) {
                console.error('Error loading suggestions:', error);
            }
        };

        // Watch for filter changes from store (e.g., from header search)
        watch(
            () => productStore.filters,
            (newFilters) => {
                localFilters.value = { ...newFilters };
            },
            { immediate: true }
        );

        onMounted(async () => {
            if (productStore.products.length === 0) {
                isLoading.value = true;
                try {
                    await productStore.fetchProducts();
                } finally {
                    isLoading.value = false;
                }
            }

            // Load AI suggestions after a delay
            setTimeout(() => {
                loadSuggestions();
            }, 2000);
        });

        return {
            localFilters,
            filteredProducts,
            hasActiveFilters,
            showSuggestions,
            suggestions,
            isLoading,
            handleFilterChange,
            clearAllFilters,
        };
    },
};
</script>
