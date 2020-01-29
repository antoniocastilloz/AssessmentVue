import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Aplicacao from './pages/Aplicacao.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/app', component: Aplicacao },
    ]
})