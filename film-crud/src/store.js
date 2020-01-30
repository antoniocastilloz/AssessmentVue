import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modalCreateEdit: false,
        modalDelete: false,
        actualIndex: 0,
        jogos: [
            { name: "Sonic", date: "30/1/2020", type: "Plataforma", favorite: true, full: true, image: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/01/legiao_Z1Rr3VKwx0Qlo2bX97iTz5GNBgedWSyFJLanOs8DUu.jpg.jpeg", description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
            { name: "The King Of Fighters", date: "30/1/2020", type: "Luta", favorite: false, full: true, image: "https://www.gamerview.com.br/wp-content/uploads/2019/10/The-King-of-Fighters-All-Star_bg.jpg", description: "teste" },
            { name: "Mario", date: "30/1/2020", type: "Plataforma", favorite: false, full: false, image: "https://img.elo7.com.br/product/original/158F8C6/painel-super-mario-bros-festa-super-mario.jpg", description: "teste" },
            {}
        ]
    },
    mutations: {
        addGame(state, variable) {
            state.jogos.unshift(variable)
        },
        deleteGame(state) {
            state.jogos.splice(state.actualIndex, 1)
        },
        openModalCreateEdit(state) {
            state.modalCreateEdit = true
        },
        closeModalCreateEdit(state) {
            state.modalCreateEdit = false
        },
        openModalDelete(state) {
            state.modalDelete = true
        },
        closeModalDelete(state) {
            state.modalDelete = false
        },
        setActualIndex(state, variable) {
            state.actualIndex = variable
        }
    }

});