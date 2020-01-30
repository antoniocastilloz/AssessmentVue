<template>
  <v-dialog v-model="modalCreateEdit" persistent max-width="600px">
    <v-card class="blue-grey darken-4">
      <v-card-title class="bgGradient">
        <span class="headline white--text">Jogo</span>
      </v-card-title>
      <v-card-text>
        <v-container class="text-center">
          <br />
          <v-text-field
            color="blue*"
            v-model="actualGame.name"
            placeholder="Nome*"
            append-icon="view_headline"
            required
            solo
          ></v-text-field>
          <v-textarea append-icon="description" solo name="input-7-4" label="Descrição*"></v-textarea>
          <v-text-field
            color="blue*"
            v-model="actualGame.image"
            placeholder="Url da imagem"
            append-icon="camera"
            required
            solo
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-select :items="type" label="Tipo" solo></v-select>
          </div>
          <v-switch
            dark
            prepend-icon="favorite"
            v-model="actualGame.favorite"
            :label="`Favorito ? ${responseYesOrNoAccordBoolean(actualGame.favorite)}`"
          ></v-switch>
          <v-switch
            dark
            prepend-icon="hourglass_full"
            v-model="actualGame.full"
            :label="`Zerou ? ${responseYesOrNoAccordBoolean(actualGame.full)}`"
          ></v-switch>
        </v-container>

        <small class="white--text">*Indica campos obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModalCreateEdit">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="addGame">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalCreateEdit",
  data: () => ({
    actualGame: {
      name: "",
      date:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),
      type: "",
      favorite: false,
      full: false,
      image: "",
      description: ""
    },
    type: [
      "Esporte",
      "Plataforma",
      "Luta",
      "RPG",
      "Tiro",
      "Estratégia",
      "Terror"
    ]
  }),
  computed: {
    modalCreateEdit() {
      return this.$store.state.modalCreateEdit;
    }
  },
  methods: {
    responseYesOrNoAccordBoolean(variable) {
      if (variable) {
        return "Sim !";
      } else {
        return "Não !";
      }
    },
    addGame() {
      this.$store.commit("addGame", this.actualGame);
      this.closeModalCreateEdit();
    },
    closeModalCreateEdit() {
      this.$store.commit("closeModalCreateEdit");
    }
  }
};
</script>
<style scoped>
</style>
