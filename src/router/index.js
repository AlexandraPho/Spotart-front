import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/recipe/:id',
    name: 'Recipe',
    
    component: () => import( /*   webpackChunkName: "connection" */ '../views/ArtistProfile.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router