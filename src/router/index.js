import { createRouter, createWebHistory } from 'vue-router'
import SingleArtwork from '../views/SingleArtwork.vue'

const routes = [

  {
    path: '/artwork/:id',
    name: 'SingleArtwork',
    component: SingleArtwork
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
