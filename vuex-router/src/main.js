import Vue from 'vue'
import VueApp from './components/App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router) // `store.state.route`

const app = new Vue({
  router,
  store,
  ...VueApp
})

export { app, router, store }
