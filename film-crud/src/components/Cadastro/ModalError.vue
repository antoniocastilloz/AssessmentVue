<template>
  <v-dialog v-model="modalError.open" persistent max-width="300">
    <v-card class="blue-grey darken-4">
      <v-card-title class="bgGradientError headline white--text">Erro</v-card-title>
      <v-card-text class="pb-4 pt-4 white--text">{{modalError.message}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="orange darken-1 white--text" block @click="closeModalCadastro">Voltar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalError",
  computed: {
    modalError() {
      return this.$store.state.modalError;
    }
  },
  methods: {
    closeModalCadastro() {
      this.$store.commit("closeModalErrorCadastro");
    }
  }
};
</script>
<style scoped>
</style>
