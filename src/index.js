import Vue from 'vue'
import App from './components/App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
