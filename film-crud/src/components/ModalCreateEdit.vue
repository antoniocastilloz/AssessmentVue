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
          <v-textarea
            append-icon="description"
            v-model="actualGame.description"
            solo
            name="input-7-4"
            label="Descrição*"
          ></v-textarea>
          <v-text-field
            color="blue*"
            v-model="actualGame.image"
            placeholder="Url da imagem"
            append-icon="camera"
            required
            solo
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-select :items="types" label="Tipo" v-model="actualGame.type" solo></v-select>
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
        <v-btn color="blue darken-1" text @click="addOrEditGame">Salvar</v-btn>
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
    types: [
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
    },
    isEdit() {
      return this.$store.state.isEdit;
    },
    jogos() {
      return this.$store.state.jogos;
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
    addOrEditGame() {
      console.log(this.isEdit); // eslint-disable-line
      var newObject = {
        name: this.actualGame.name,
        date: this.actualGame.date,
        type: this.actualGame.type,
        favorite: this.actualGame.favorite,
        full: this.actualGame.full,
        image: this.actualGame.image,
        description: this.actualGame.description
      };
      if (this.isEdit) {
        this.editGame(newObject);
      } else {
        this.addGame(newObject);
      }
      this.closeModalCreateEdit();
      this.clearInputs();
    },
    addGame(object) {
      this.$store.commit("addGame", object);
    },
    editGame(object) {
      this.$store.commit("editGame", object);
    },
    closeModalCreateEdit() {
      this.$store.commit("closeModalCreateEdit");
    },
    clearInputs() {
      this.actualGame.name = "";
      this.actualGame.type = "";
      this.actualGame.favorite = false;
      this.actualGame.full = false;
      this.actualGame.image = "";
      this.actualGame.description = "";
    }
  }
};
</script>
<style scoped>
</style>
