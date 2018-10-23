import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Documentation from './views/Documentation'

Vue.use(VueRouter)

const routes = [
    { name : 'home', path : '/home', component : Home },
    { name : 'documentation', path : '/documentation', component : Documentation },
];

const router = new VueRouter({
    routes
});

export default router