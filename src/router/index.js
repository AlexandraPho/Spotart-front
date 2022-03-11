import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeApp
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
      path: '/artwork/:id',
      name: 'SingleArtwork',
      component: () => import('../views/SingleArtwork.vue')
    },
    {
        path: '/artworks/create',
        name: 'CreateArtwork',
        component: () => import( '../views/artworks/CreateArtworkApp.vue')
    },
    {
        path: '/artworks/update/:id',
        name: 'UpdateArtwork',
        component: () => import( '../views/artworks/UpdateArtworkApp.vue')
    },
    {
        path: '/artists/:id',
        name: 'ArtistProfile',
        component: () => import('../views/user/ArtistProfileApp.vue')
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
    {
        path: '/art-form/:id',
        name: 'ArtForms',
        component: () => import('../views/artworks/ArtFormsApp.vue')
    },
    {
      path: '/user/:id',
      name: 'UserAccount',
      component: () => import('../views/UserProfile.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router