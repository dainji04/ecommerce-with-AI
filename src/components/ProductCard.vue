<template>
    <div
        class="card group cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
        <!-- Product Image -->
        <div class="relative overflow-hidden">
            <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
            />

            <!-- Discount Badge -->
            <div v-if="discountPercentage > 0" class="absolute top-3 left-3">
                <span
                    class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                >
                    -{{ discountPercentage }}%
                </span>
            </div>

            <!-- Favorite Button -->
            <button
                @click.stop="toggleFavorite"
                class="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                :class="{
                    'text-red-500': isFavorite,
                    'text-gray-400': !isFavorite,
                }"
            >
                <svg
                    class="w-5 h-5"
                    :fill="isFavorite ? 'currentColor' : 'none'"
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
            </button>

            <!-- Category Badge -->
            <div class="absolute bottom-3 left-3">
                <span class="badge badge-primary">{{ product.category }}</span>
            </div>
        </div>

        <!-- Product Info -->
        <div class="p-4">
            <h3
                class="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors"
            >
                {{ product.name }}
            </h3>

            <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ product.description }}
            </p>

            <!-- Instructor & Students -->
            <div class="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                <span>👨‍🏫 {{ product.instructor }}</span>
                <span>👥 {{ formatNumber(product.students) }} học viên</span>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-3">
                <div class="flex items-center">
                    <template v-for="star in 5" :key="star">
                        <svg
                            class="w-4 h-4"
                            :class="
                                star <= Math.floor(product.rating)
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
                <span class="ml-2 text-sm text-gray-600">{{
                    product.rating
                }}</span>
            </div>

            <!-- Price -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <span class="text-xl font-bold text-primary-600">
                        {{ formatPrice(product.price) }}
                    </span>
                    <span
                        v-if="
                            product.originalPrice &&
                            product.originalPrice > product.price
                        "
                        class="text-sm text-gray-400 line-through"
                    >
                        {{ formatPrice(product.originalPrice) }}
                    </span>
                </div>
                <span class="text-xs text-gray-500">{{
                    product.duration
                }}</span>
            </div>

            <!-- Action Button -->
            <button
                @click.stop="viewDetail"
                class="w-full btn-primary text-sm py-2"
            >
                Xem chi tiết
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product';

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const router = useRouter();
        const productStore = useProductStore();

        const isFavorite = computed(() =>
            productStore.isFavorite(props.product.id)
        );

        const discountPercentage = computed(() => {
            if (
                !props.product.originalPrice ||
                props.product.originalPrice <= props.product.price
            ) {
                return 0;
            }
            return Math.round(
                ((props.product.originalPrice - props.product.price) /
                    props.product.originalPrice) *
                    100
            );
        });

        const toggleFavorite = () => {
            productStore.toggleFavorite(props.product.id);
        };

        const viewDetail = () => {
            router.push(`/product/${props.product.id}`);
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

        const handleImageError = (event) => {
            event.target.src =
                'https://via.placeholder.com/400x300?text=No+Image';
        };

        return {
            isFavorite,
            discountPercentage,
            toggleFavorite,
            viewDetail,
            formatPrice,
            formatNumber,
            handleImageError,
        };
    },
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
