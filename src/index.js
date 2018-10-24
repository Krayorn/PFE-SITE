import Vue from 'vue/dist/vue.js'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

Vue.use(VueTabs)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
