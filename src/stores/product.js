import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { productService } from '../services/productService';

export const useProductStore = defineStore('product', () => {
    const products = ref([]);
    const favorites = ref(
        JSON.parse(localStorage.getItem('favorites') || '[]')
    );
    const currentProduct = ref(null);
    const filters = ref({
        search: '',
        priceRange: '',
        category: '',
    });

    // Computed
    const filteredProducts = computed(() => {
        let filtered = products.value;

        // Tìm kiếm theo tên
        if (filters.value.search) {
            filtered = filtered.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(filters.value.search.toLowerCase()) ||
                    product.description
                        .toLowerCase()
                        .includes(filters.value.search.toLowerCase())
            );
        }

        // Lọc theo giá
        if (filters.value.priceRange) {
            filtered = filtered.filter((product) => {
                const price = product.price;
                switch (filters.value.priceRange) {
                    case 'under500':
                        return price < 500000;
                    case '500to1000':
                        return price >= 500000 && price <= 1000000;
                    case 'over1000':
                        return price > 1000000;
                    default:
                        return true;
                }
            });
        }

        // Lọc theo danh mục
        if (filters.value.category) {
            filtered = filtered.filter(
                (product) => product.category === filters.value.category
            );
        }

        return filtered;
    });

    const favoriteProducts = computed(() => {
        return products.value.filter((product) =>
            favorites.value.includes(product.id)
        );
    });

    // Actions
    const fetchProducts = async () => {
        try {
            const data = await productService.getProducts();
            products.value = data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchProductById = async (id) => {
        try {
            const product = await productService.getProductById(id);
            currentProduct.value = product;
            return product;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    };

    const toggleFavorite = (productId) => {
        const index = favorites.value.indexOf(productId);
        if (index > -1) {
            favorites.value.splice(index, 1);
        } else {
            favorites.value.push(productId);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    };

    const isFavorite = (productId) => {
        return favorites.value.includes(productId);
    };

    const setFilters = (newFilters) => {
        filters.value = { ...filters.value, ...newFilters };
    };

    const clearFilters = () => {
        filters.value = {
            search: '',
            priceRange: '',
            category: '',
        };
    };

    const getSuggestions = async (userId = 'user123') => {
        try {
            return await productService.getSuggestions(userId);
        } catch (error) {
            console.error('Error getting suggestions:', error);
            return [];
        }
    };

    return {
        products,
        favorites,
        currentProduct,
        filters,
        filteredProducts,
        favoriteProducts,
        fetchProducts,
        fetchProductById,
        toggleFavorite,
        isFavorite,
        setFilters,
        clearFilters,
        getSuggestions,
    };
});
