import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/PostPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.name}`
    next()
})

export default router