import Vue from 'vue'
import App from './components/App.vue'

const VueApp = Vue.extend(App)

new VueApp({
  el: '#app'
})
