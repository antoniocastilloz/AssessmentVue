<template>
  <v-dialog v-model="modalSuccess" persistent max-width="300">
    <v-card class="blue-grey darken-4">
      <v-card-title class="bgGradient headline white--text">Parabéns</v-card-title>
      <v-card-text class="pb-4 pt-4 white--text">Sua conta foi criada com sucesso.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue darken-1 white--text" block @click="closeModalCadastro">Fazer Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalSuccess",
  computed: {
    modalSuccess() {
      return this.$store.state.modalSuccess;
    }
  },
  methods: {
    closeModalCadastro() {
      this.$store.commit("closeModalSuccessCadastro");
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
</style>
