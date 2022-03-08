import { createRouter, createWebHistory } from 'vue-router'
import SingleArtwork from '../views/SingleArtwork.vue'
import Home from '../views/Home.vue'


const routes = [
{
    path: '/',
    name: 'Home',
    component: Home
},
{
  path: '/artwork/:id',
  name: 'SingleArtwork',
  component: SingleArtwork
},
{
    path: '/artwork/create',
    name: 'CreateArtwork',
    component: () => import( '../views/user/CreateArtwork.vue')
},
{
    path: '/artwork/update/'/*[i:artwokID]*/,
    name: 'UpdateArtwork',
    component: () => import( '../views/user/UpdateArtwork.vue')
},

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
