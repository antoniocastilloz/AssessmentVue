import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jogos: [
            { name: "Sonic", date: "teste", type: "Plataforma", favorite: false, full: false, image: "https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg", description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
            { name: "Mario", date: "teste", type: "Plataforma", favorite: false, full: false, image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg", description: "teste" },
        ]
    },
    mutations: {
        addGame(state, variable) {
            state.jogos.push(variable)
        }
    }
});