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
        component: () => import('../views/Posts.vue'),
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: () => import('../views/Post.vue'),
    },
    {
        path: '/store/',
        name: 'PostWithStore',
        component: () => import('../views/PostsWithStore.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/select',
        name: 'Select',
        component: () => import('../views/Select.vue'),
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