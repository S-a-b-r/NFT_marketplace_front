import IndexPage from '@/pages/IndexPage.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'indexPage',
        component: IndexPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router