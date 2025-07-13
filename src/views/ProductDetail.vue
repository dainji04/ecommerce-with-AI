<template>
    <div v-if="product" class="min-h-screen bg-gray-50">
        <!-- Back Button -->
        <div class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <button
                    @click="goBack"
                    class="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Quay lại
                </button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Product Header -->
                    <div
                        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        <!-- Product Image -->
                        <div class="relative h-64 md:h-80">
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="w-full h-full object-cover"
                                @error="handleImageError"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                            ></div>

                            <!-- Floating Info -->
                            <div class="absolute bottom-4 left-4 right-4">
                                <div class="flex items-center space-x-2 mb-2">
                                    <span class="badge badge-primary">{{
                                        product.category
                                    }}</span>
                                    <span
                                        class="badge"
                                        :class="levelBadgeClass"
                                        >{{ product.level }}</span
                                    >
                                </div>
                                <h1
                                    class="text-2xl md:text-3xl font-bold text-white mb-2"
                                >
                                    {{ product.name }}
                                </h1>
                                <div
                                    class="flex items-center text-white text-sm space-x-4"
                                >
                                    <span>👨‍🏫 {{ product.instructor }}</span>
                                    <span>⏱️ {{ product.duration }}</span>
                                    <span
                                        >👥
                                        {{ formatNumber(product.students) }} học
                                        viên</span
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- Product Description -->
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <template v-for="star in 5" :key="star">
                                            <svg
                                                class="w-5 h-5"
                                                :class="
                                                    star <=
                                                    Math.floor(product.rating)
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                "
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </template>
                                    </div>
                                    <span
                                        class="ml-2 text-lg font-semibold text-gray-900"
                                        >{{ product.rating }}</span
                                    >
                                    <span class="ml-2 text-gray-600"
                                        >({{
                                            product.reviews?.length || 0
                                        }}
                                        đánh giá)</span
                                    >
                                </div>

                                <!-- Favorite Button -->
                                <button
                                    @click="toggleFavorite"
                                    class="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200"
                                    :class="
                                        isFavorite
                                            ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
                                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                    "
                                >
                                    <svg
                                        class="w-5 h-5"
                                        :fill="
                                            isFavorite ? 'currentColor' : 'none'
                                        "
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
                                    <span>{{
                                        isFavorite
                                            ? 'Đã yêu thích'
                                            : 'Yêu thích'
                                    }}</span>
                                </button>
                            </div>

                            <p class="text-gray-700 leading-relaxed">
                                {{ product.longDescription }}
                            </p>
                        </div>
                    </div>

                    <!-- Features -->
                    <div
                        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">
                            Điểm nổi bật
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                                v-for="feature in product.features"
                                :key="feature"
                                class="flex items-center space-x-3"
                            >
                                <div class="bg-green-100 p-1 rounded-full">
                                    <svg
                                        class="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span class="text-gray-700">{{ feature }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Reviews -->
                    <div
                        v-if="product.reviews && product.reviews.length > 0"
                        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">
                            Đánh giá từ học viên
                        </h2>
                        <div class="space-y-6">
                            <div
                                v-for="review in product.reviews"
                                :key="review.id"
                                class="border-b border-gray-200 pb-6 last:border-b-0"
                            >
                                <div
                                    class="flex items-center justify-between mb-3"
                                >
                                    <div class="flex items-center space-x-3">
                                        <div
                                            class="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center"
                                        >
                                            <span
                                                class="text-primary-600 font-semibold text-sm"
                                            >
                                                {{
                                                    review.user
                                                        .charAt(0)
                                                        .toUpperCase()
                                                }}
                                            </span>
                                        </div>
                                        <div>
                                            <h4
                                                class="font-medium text-gray-900"
                                            >
                                                {{ review.user }}
                                            </h4>
                                            <div class="flex items-center">
                                                <template
                                                    v-for="star in 5"
                                                    :key="star"
                                                >
                                                    <svg
                                                        class="w-4 h-4"
                                                        :class="
                                                            star <=
                                                            review.rating
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300'
                                                        "
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-sm text-gray-500">{{
                                        formatDate(review.date)
                                    }}</span>
                                </div>
                                <p class="text-gray-700">
                                    {{ review.comment }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6">
                    <!-- Price Card -->
                    <div
                        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24"
                    >
                        <div class="text-center mb-6">
                            <div
                                class="flex items-center justify-center space-x-3 mb-2"
                            >
                                <span
                                    class="text-3xl font-bold text-primary-600"
                                >
                                    {{ formatPrice(product.price) }}
                                </span>
                                <span
                                    v-if="
                                        product.originalPrice &&
                                        product.originalPrice > product.price
                                    "
                                    class="text-lg text-gray-400 line-through"
                                >
                                    {{ formatPrice(product.originalPrice) }}
                                </span>
                            </div>
                            <div
                                v-if="discountPercentage > 0"
                                class="text-sm text-red-600 font-medium"
                            >
                                Tiết kiệm {{ discountPercentage }}%
                            </div>
                        </div>

                        <div class="space-y-4 mb-6">
                            <button
                                class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Đăng ký ngay
                            </button>
                            <button
                                class="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>

                        <!-- Course Info -->
                        <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Thời lượng:</span>
                                <span class="font-medium">{{
                                    product.duration
                                }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Cấp độ:</span>
                                <span class="font-medium">{{
                                    product.level
                                }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Học viên:</span>
                                <span class="font-medium">{{
                                    formatNumber(product.students)
                                }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Giảng viên:</span>
                                <span class="font-medium">{{
                                    product.instructor
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Share -->
                    <div
                        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                        <h3 class="font-semibold text-gray-900 mb-4">
                            Chia sẻ khóa học
                        </h3>
                        <div class="flex space-x-3">
                            <button
                                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                            >
                                <svg
                                    class="w-5 h-5 mx-auto"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    />
                                </svg>
                            </button>
                            <button
                                class="flex-1 bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-lg transition-colors"
                            >
                                <svg
                                    class="w-5 h-5 mx-auto"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                                    />
                                </svg>
                            </button>
                            <button
                                class="flex-1 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                            >
                                <svg
                                    class="w-5 h-5 mx-auto"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Loading State -->
    <div
        v-else-if="isLoading"
        class="min-h-screen bg-gray-50 flex items-center justify-center"
    >
        <div class="text-center">
            <div
                class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"
            ></div>
            <p class="text-gray-600">Đang tải chi tiết khóa học...</p>
        </div>
    </div>

    <!-- Error State -->
    <div
        v-else
        class="min-h-screen bg-gray-50 flex items-center justify-center"
    >
        <div class="text-center max-w-md mx-auto px-4">
            <div
                class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
                <svg
                    class="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5C2.962 18.333 3.924 20 5.464 20z"
                    />
                </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
                Không tìm thấy khóa học
            </h3>
            <p class="text-gray-600 mb-4">
                Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <router-link to="/" class="btn-primary"> Về trang chủ </router-link>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../stores/product';

export default {
    name: 'ProductDetail',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const productStore = useProductStore();

        const product = ref(null);
        const isLoading = ref(true);

        const isFavorite = computed(() =>
            product.value ? productStore.isFavorite(product.value.id) : false
        );

        const discountPercentage = computed(() => {
            if (
                !product.value?.originalPrice ||
                product.value.originalPrice <= product.value.price
            ) {
                return 0;
            }
            return Math.round(
                ((product.value.originalPrice - product.value.price) /
                    product.value.originalPrice) *
                    100
            );
        });

        const levelBadgeClass = computed(() => {
            if (!product.value) return 'badge-primary';

            switch (product.value.level) {
                case 'Cơ bản':
                    return 'bg-green-100 text-green-800';
                case 'Trung cấp':
                    return 'bg-yellow-100 text-yellow-800';
                case 'Nâng cao':
                    return 'bg-red-100 text-red-800';
                default:
                    return 'badge-primary';
            }
        });

        const toggleFavorite = () => {
            if (product.value) {
                productStore.toggleFavorite(product.value.id);
            }
        };

        const goBack = () => {
            router.go(-1);
        };

        const formatPrice = (price) => {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        };

        const formatNumber = (num) => {
            return new Intl.NumberFormat('vi-VN').format(num);
        };

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        };

        const handleImageError = (event) => {
            event.target.src =
                'https://via.placeholder.com/800x400?text=No+Image';
        };

        onMounted(async () => {
            const productId = route.params.id;

            try {
                // Load products if not already loaded
                if (productStore.products.length === 0) {
                    await productStore.fetchProducts();
                }

                // Get product details
                const productData = await productStore.fetchProductById(
                    productId
                );
                product.value = productData;
            } catch (error) {
                console.error('Error loading product:', error);
            } finally {
                isLoading.value = false;
            }
        });

        return {
            product,
            isLoading,
            isFavorite,
            discountPercentage,
            levelBadgeClass,
            toggleFavorite,
            goBack,
            formatPrice,
            formatNumber,
            formatDate,
            handleImageError,
        };
    },
};
</script>
