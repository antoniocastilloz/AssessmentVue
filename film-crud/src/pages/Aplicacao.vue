<template>
  <div class="grey darken-4 white--text text-center heightFull">
    <v-btn class="bgGradient mt-10 mb-8 elevation-10" dark large @click="openModalCreateEdit">
      Cadastrar Jogo
      <v-icon class="ml-3">add</v-icon>
    </v-btn>
    <ModalCreateEdit />
    <ModalDelete />
    <Item />
    <div class="text-center">
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :top="true"
        color="info"
        class="text-center"
      >Você já adicionou 5 jogos !!!</v-snackbar>
    </div>
  </div>
</template>

<script>
import ModalCreateEdit from "../components/ModalCreateEdit";
import ModalDelete from "../components/ModalDelete";
import Item from "../components/Item";

export default {
  name: "Aplicacao",
  components: {
    ModalCreateEdit,
    ModalDelete,
    Item
  },
  data: () => ({
    snackbar: false,
    timeout: 3000
  }),
  computed: {
    jogos() {
      return this.$store.state.jogos;
    }
  },
  methods: {
    openModalCreateEdit() {
      this.$store.commit("openModalCreateEdit", false);
    }
  },
  watch: {
    jogos: function() {
      if (this.jogos.length == 6) {
        this.snackbar = true;
      }
    }
  }
};
</script>
