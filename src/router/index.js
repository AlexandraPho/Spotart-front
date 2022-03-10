import {
  createRouter,
  createWebHistory
} from 'vue-router'
import SingleArtwork from '../views/SingleArtwork.vue'
import Home from '../views/Home.vue'


<<<<<<< HEAD





=======
>>>>>>> bd90ff6c0f8cf78dfddc8f02d1117d64b50fa933
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
<<<<<<< HEAD
=======

>>>>>>> bd90ff6c0f8cf78dfddc8f02d1117d64b50fa933
  },
  {
    path: '/artwork/:id',
    name: 'SingleArtwork',
    component: SingleArtwork
  },
<<<<<<< HEAD
  {
    path: '/publishartwork',
    name: 'PublishArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "connection" */ '../views/user/PublishArtwork.vue')
  },
  {
    path: '/editartwork',
    name: 'EditArtwork',
=======
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
>>>>>>> bd90ff6c0f8cf78dfddc8f02d1117d64b50fa933
    // route level code-splitting
    // this generates a separate chunk (category.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
    component: () => import( /* webpackChunkName: "connection" */ '../views/user/EditArtwork.vue')
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
    path: '/connection',
    name: 'Connection',

    component: () => import(  '../views/ConnectionUser.vue')
  },
  {
    path: '/user/:id',
    name: 'UserAccount',

    component: () => import( /* webpackChunkName: "connection" */ '../views/UserProfile.vue')
  }
=======
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
},
>>>>>>> bd90ff6c0f8cf78dfddc8f02d1117d64b50fa933

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router