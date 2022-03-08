import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeApp.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/artforms/:id',
        name: 'Sculptures',
        component: () => import('../views/artworks/ArtFormsApp.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/user/LoginApp.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/user/RegistrationApp.vue')
    },
    {
        path: '/artworks/create',
        name: 'CreateArtwork',
        component: () => import('../views/artworks/CreateArtwork.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/extra/ContactApp.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/extra/AboutApp.vue')
    },
    {
        path: '/sitemap',
        name: 'SiteMap',
        component: () => import('../views/extra/SiteMapApp.vue')
    },
    {
        path: '/legal-notice',
        name: 'LegalNotice',
        component: () => import('../views/extra/LegalNoticeApp.vue')
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router