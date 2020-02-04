<template>
  <v-dialog v-model="modalCadastro" persistent max-width="300">
    <v-card class="blue-grey darken-4">
      <v-card-title class="headline  white--text" v-bind:class="{'bgGradient': modalCadastroTitle != 'Erro','bgGradientError': modalCadastroTitle == 'Erro'}">{{modalCadastroTitle}}</v-card-title>
      <v-card-text class="pb-4 pt-4 white--text">{{modalCadastroMessage}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="darken-1 white--text" v-bind:class="{'blue': modalCadastroTitle != 'Erro','orange': modalCadastroTitle == 'Erro'}" block @click="closeModalCadastro">{{modalCadastroLabelBtn}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalCadastro",
  computed: {
    modalCadastro() {
      return this.$store.state.modalCadastro.open;
    },
    modalCadastroTitle() {
      return this.$store.state.modalCadastro.title;
    },
    modalCadastroMessage() {
      return this.$store.state.modalCadastro.message;
    },
    modalCadastroLabelBtn() {
      return this.$store.state.modalCadastro.labelBtn;
    }
  },
  methods: {
    closeModalCadastro() {
      this.$store.commit("closeModalCadastro");
      if (this.modalCadastroTitle != "Erro") {
        this.$router.push("/login");
      }
    }
  },
};
</script>
<style scoped>
</style>
