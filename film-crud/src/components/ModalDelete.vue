<template>
  <v-dialog v-model="modalDelete" persistent max-width="300">
    <v-card class="blue-grey darken-4">
      <v-card-title class="headline bgGradient white--text">Excluir</v-card-title>
      <v-card-text
        class="pb-4 pt-4 white--text"
      >Tem certeza que deseja excluir "{{jogos[actualIndex].name}}" da sua lista de jogos ?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text to="/app" @click="deleteGame">Sim</v-btn>
        <v-btn color="blue darken-1" text to="/app" @click="closeModalDelete">Não</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDelete",
  computed: {
    modalDelete() {
      return this.$store.state.modalDelete;
    },
    actualIndex() {
      return this.$store.state.actualIndex;
    },
    jogos() {
      return this.$store.state.jogos;
    }
  },
  methods: {
    deleteGame() {
      this.closeModalDelete();
      this.$store.commit("deleteGame");
    },
    closeModalDelete() {
      this.$store.commit("closeModalDelete");
    }
  }
};
</script>
<style scoped>
</style>
