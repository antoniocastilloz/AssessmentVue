import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Sobre from './pages/Sobre.vue'
import Aplicacao from './pages/Aplicacao.vue'
import Login from './pages/Login.vue'
import Cadastro from './pages/Cadastro.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home, children: [{ path: 'sobre', component: Sobre }] },
        { path: '/app', component: Aplicacao },
        { path: '/login', component: Login },
        { path: '/cadastro', component: Cadastro },
    ]
})