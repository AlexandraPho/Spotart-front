import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/publishartwork',
    name: 'PublishArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "connection" */ '../views/user/PublishArtwork.vue')
},
{
    path: '/editartwork',
    name: 'EditArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "connection" */ '../views/user/EditArtwork.vue')
},
// {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router