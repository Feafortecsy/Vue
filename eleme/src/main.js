// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Miste from './components/miste/miste'
import Discover from './components/discover/discover'
import Order from './components/order/order'
import Profile from './components/profile/profile'
import LogIn from './components/login/login'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import store from './store'

const routes = [
    { path: '/miste', component: Miste},
    { path: '/discover', component: Discover},
    { path: '/order', component: Order},
    { path: '/profile', component: Profile},
    { path: '/login', component: LogIn},
]
const router = new VueRouter({
    //不能写成 Router
    routes // （缩写）相当于 routes: routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
//   router,
//   store,
// })
const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    // store,
    router
}).$mount('#app')
