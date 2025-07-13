<template>
    <header class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <router-link to="/" class="flex items-center space-x-2">
                    <div class="bg-primary-600 text-white p-2 rounded-lg">
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                            />
                        </svg>
                    </div>
                    <span class="text-xl font-bold text-gray-900"
                        >EduCommerce</span
                    >
                </router-link>

                <!-- Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <router-link
                        to="/"
                        class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        :class="{ 'text-primary-600': $route.name === 'Home' }"
                    >
                        Trang chủ
                    </router-link>
                    <router-link
                        to="/search"
                        class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        :class="{
                            'text-primary-600': $route.name === 'Search',
                        }"
                    >
                        Tìm kiếm
                    </router-link>
                    <router-link
                        to="/favorites"
                        class="text-gray-700 hover:text-primary-600 font-medium transition-colors relative"
                        :class="{
                            'text-primary-600': $route.name === 'Favorites',
                        }"
                    >
                        Yêu thích
                        <span
                            v-if="favoriteCount > 0"
                            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        >
                            {{ favoriteCount }}
                        </span>
                    </router-link>
                </nav>

                <!-- Search Bar -->
                <div class="flex-1 max-w-lg mx-8 hidden lg:block">
                    <div class="relative">
                        <input
                            v-model="searchQuery"
                            @keyup.enter="handleSearch"
                            type="text"
                            placeholder="Tìm kiếm khóa học..."
                            class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <button
                            @click="handleSearch"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600"
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
                                    d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    @click="mobileMenuOpen = !mobileMenuOpen"
                    class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div
                v-if="mobileMenuOpen"
                class="md:hidden border-t border-gray-200 py-4"
            >
                <div class="space-y-4">
                    <!-- Mobile Search -->
                    <div class="relative">
                        <input
                            v-model="searchQuery"
                            @keyup.enter="handleSearch"
                            type="text"
                            placeholder="Tìm kiếm khóa học..."
                            class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <button
                            @click="handleSearch"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600"
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
                                    d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    <!-- Mobile Navigation -->
                    <nav class="space-y-2">
                        <router-link
                            to="/"
                            @click="mobileMenuOpen = false"
                            class="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                        >
                            Trang chủ
                        </router-link>
                        <router-link
                            to="/search"
                            @click="mobileMenuOpen = false"
                            class="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                        >
                            Tìm kiếm
                        </router-link>
                        <router-link
                            to="/favorites"
                            @click="mobileMenuOpen = false"
                            class="flex items-center py-2 text-gray-700 hover:text-primary-600 font-medium"
                        >
                            Yêu thích
                            <span
                                v-if="favoriteCount > 0"
                                class="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                            >
                                {{ favoriteCount }}
                            </span>
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../../stores/product';

export default {
    name: 'TheHeader',
    setup() {
        const router = useRouter();
        const productStore = useProductStore();

        const mobileMenuOpen = ref(false);
        const searchQuery = ref('');

        const favoriteCount = computed(() => productStore.favorites.length);

        const handleSearch = () => {
            if (searchQuery.value.trim()) {
                productStore.setFilters({ search: searchQuery.value.trim() });
                router.push('/search');
                mobileMenuOpen.value = false;
            }
        };

        return {
            mobileMenuOpen,
            searchQuery,
            favoriteCount,
            handleSearch,
        };
    },
};
</script>
