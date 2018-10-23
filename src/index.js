import Vue from 'vue/dist/vue.js'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
