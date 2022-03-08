import {
  createRouter,
  createWebHistory
} from 'vue-router'
import SingleArtwork from '../views/SingleArtwork.vue'
import Home from '../views/Home.vue'


const routes = [{
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

{
    path: '/artist/:id',
    name: 'Artist',
    component: () => import( /*   webpackChunkName: "connection" */ '../views/ArtistProfile.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "connection" */ '../views/Registration.vue')
  },
  {
    path: '/category/:id',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (category.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
},

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router