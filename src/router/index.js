import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo from '../views/demo.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import mystere from '../views/mystere.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/mystere',
    name: 'mystere',
    component: mystere
  },



  {
    path: '/pokemons/:id',
    name: 'Pokemon',
    component: PokemonDetails
  },

  {
    path: '/demo',
    name: 'demo',
    component: demo
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
