<template>
    <div id="app" class="min-h-screen bg-gray-50">
        <TheHeader />
        <main class="flex-1">
            <router-view />
        </main>
        <TheFooter />

        <!-- Global Loading -->
        <div
            v-if="isLoading"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div class="bg-white p-6 rounded-lg flex items-center space-x-3">
                <div
                    class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"
                ></div>
                <span class="text-gray-700">Đang tải...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useAppStore } from './stores/app';
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter,
    },
    setup() {
        const appStore = useAppStore();

        const isLoading = computed(() => appStore.isLoading);

        return {
            isLoading,
        };
    },
};
</script>
