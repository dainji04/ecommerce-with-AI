import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Favorites from '../views/Favorites.vue';
import Search from '../views/Search.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Trang chủ - EduCommerce',
        },
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        meta: {
            title: 'Chi tiết sản phẩm - EduCommerce',
        },
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
        meta: {
            title: 'Yêu thích - EduCommerce',
        },
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            title: 'Tìm kiếm - EduCommerce',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'EduCommerce';
    next();
});

export default router;
