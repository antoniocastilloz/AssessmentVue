<template>
  <v-dialog v-model="modalCadastro" persistent max-width="300">
    <v-card class="blue-grey darken-4">
      <v-card-title class="headline bgGradient white--text">Parabéns!</v-card-title>
      <v-card-text
        class="pb-4 pt-4 white--text"
      >Sua conta foi criada com sucesso.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1 white--text" block @click="closeModalCadastro">fazer login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalCadastro",
  computed: {
    modalCadastro() {
      return this.$store.state.modalCadastro;
    },
  },
  methods: {
    closeModalCadastro() {
      this.$store.commit("closeModalCadastro");
      this.$router.push("/login")
    }
  }
};
</script>
<style scoped>
</style>
