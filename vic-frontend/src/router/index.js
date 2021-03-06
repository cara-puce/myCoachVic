import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import Overview from '@/components/Overview'
import Connect from '@/components/Connect'
import Register from '@/components/Register'
import NewEntry from '@/components/NewEntry'
import NewSport from '@/components/NewSport'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview,
      beforeEnter: (to, from, next) => {
        store.state.user ? next() : next('/')
      }
    },
    {
      path: '/newentry',
      name: 'NewEntry',
      component: NewEntry,
      beforeEnter: (to, from, next) => {
        store.state.user ? next() : next('/')
      }
    },
    {
      path: '/newsport',
      name: 'NewSport',
      component: NewSport,
      beforeEnter: (to, from, next) => {
        store.state.user ? next() : next('/')
      }
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
