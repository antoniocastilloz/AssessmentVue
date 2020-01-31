<template>
  <div class="grey darken-4 white--text text-center heightFull">
    <v-btn class="bgGradient mt-10 mb-8 elevation-10" dark large @click="openModalCreateEdit">
      Cadastrar Jogo
      <v-icon class="ml-3">add</v-icon>
    </v-btn>
    <ModalCreateEdit />
    <ModalDelete />
    <Item />
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
  methods: {
    openModalCreateEdit() {
      this.$store.commit("openModalCreateEdit", false);
    }
  }
};
</script>
