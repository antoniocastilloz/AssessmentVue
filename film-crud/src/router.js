import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Aplicacao from './pages/Aplicacao.vue'

import ModalCreateEdit from './components/ModalCreateEdit'
import ModalDelete from './components/ModalDelete'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/app', component: Aplicacao, children: [
            { path: "createoredit", name: "ModalCreateEdit", component: ModalCreateEdit },
            { path: "delete", name: "ModalDelete", component: ModalDelete }
        ] },
    ]
})