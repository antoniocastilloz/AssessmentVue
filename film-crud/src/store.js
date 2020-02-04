import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isEdit: false,
        actualIndex: 0,
        modalCreateEdit: false,
        modalDelete: false,
        modalCadastro: {
            open: false,
            title: "Parabéns!",
            message: "Sua conta foi criada com sucesso.",
            labelBtn: "Fazer Login",
        },
        jogos: [
            { name: "Sonic", date: "30/1/2020", type: "Plataforma", favorite: true, full: true, image: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/01/legiao_Z1Rr3VKwx0Qlo2bX97iTz5GNBgedWSyFJLanOs8DUu.jpg.jpeg", description: "Sonic The Hedgedog ou apenas Sonic é o principal personagem de um dos games mais famosos da atualidade e o principal símbolo da SEGA." },
            { name: "The King Of Fighters", date: "30/1/2020", type: "Luta", favorite: false, full: true, image: "https://www.gamerview.com.br/wp-content/uploads/2019/10/The-King-of-Fighters-All-Star_bg.jpg", description: "The King of Fighters foi criado para ser um jogo que estrelasse os principais personagens da SNK independentemente de qualquer detalhe cronológico ou canônico." },
            { name: "Mario", date: "30/1/2020", type: "Plataforma", favorite: false, full: false, image: "https://img.elo7.com.br/product/original/158F8C6/painel-super-mario-bros-festa-super-mario.jpg", description: "Super Mario é o mascote mais popular da Nintendo. Com 29 anos de história, o personagem já estrelou dezenas de jogos, entre eles os da série principal, Super Mario Bros." },
            {}
        ]
    },
    mutations: {
        //CRUD
        addGame(state, object) {
            state.jogos.unshift(object)
        },
        editGame(state, object) {
            state.jogos.splice(state.actualIndex, 1, object)
        },
        deleteGame(state) {
            state.jogos.splice(state.actualIndex, 1)
        },
        setActualIndex(state, index) {
            state.actualIndex = index
        },
        //Abertura e Fechamento dos Modals
        openModalCreateEdit(state, isEdit) {
            state.modalCreateEdit = true
            state.isEdit = isEdit
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
        openModalCadastro(state) {
            state.modalCadastro.open = true
        },
        closeModalCadastro(state) {
            state.modalCadastro = {
                open: false,
                title: "Parabéns!",
                message: "Sua conta foi criada com sucesso.",
                labelBtn: "Fazer Login",
            }
        },
        //mensagem ModalCadastro
        updateMessageModalCadastro(state, message){
            state.modalCadastro.title = "Erro"
            state.modalCadastro.message = message
            state.modalCadastro.labelBtn = "voltar"
        }
    }

});