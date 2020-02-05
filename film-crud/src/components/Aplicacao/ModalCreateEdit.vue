<template>
  <v-dialog v-model="modalCreateEdit" persistent max-width="600px">
    <v-card class="blue-grey darken-4">
      <v-card-title class="bgGradient">
        <span class="headline white--text">Jogo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <br />
          <small class="white--text">Formulário</small>
          <v-form ref="form">
            <v-text-field
              color="blue*"
              v-model="actualGame.name"
              placeholder="Nome*"
              append-icon="view_headline"
              :rules="inputRules"
              required
              solo
            ></v-text-field>
            <v-textarea
              append-icon="description"
              v-model="actualGame.description"
              solo
              :rules="inputRules"
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
              <v-select
                :items="types"
                :rules="inputRules"
                label="Tipo*"
                v-model="actualGame.type"
                solo
              ></v-select>
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
          </v-form>
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
import * as firebase from "firebase";

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
    ],
    inputRules: [v => v.length > 0 || "Campo obrigatório"]
  }),
  computed: {
    userID() {
      return this.$store.state.user.id;
    },
    modalCreateEdit() {
      return this.$store.state.modalCreateEdit;
    },
    isEdit() {
      return this.$store.state.isEdit;
    },
    jogos() {
      return this.$store.state.jogos;
    },
    actualIndex() {
      return this.$store.state.actualIndex;
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
      if (this.$refs.form.validate()) {
        // console.log(this.isEdit); // eslint-disable-line
        let newObject = {
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
          firebase
            .firestore()
            .collection("Users")
            .doc(this.userID)
            .collection("games")
            .add(newObject)
            .then(data => {
              console.log(data); // eslint-disable-line
            })
            .catch(error => {
              console.log(error); // eslint-disable-line
            });
        }
        this.clearInputs();
        this.closeModalCreateEdit();
        console.log(this.jogos.slice()[this.actualIndex]); // eslint-disable-line
      }
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
  },
  watch: {
    modalCreateEdit: function() {
      if (this.modalCreateEdit && this.isEdit) {
        this.actualGame.name = this.jogos.slice()[this.actualIndex].name;
        this.actualGame.data = this.jogos.slice()[this.actualIndex].data;
        this.actualGame.type = this.jogos.slice()[this.actualIndex].type;
        this.actualGame.favorite = this.jogos.slice()[
          this.actualIndex
        ].favorite;
        this.actualGame.full = this.jogos.slice()[this.actualIndex].full;
        this.actualGame.image = this.jogos.slice()[this.actualIndex].image;
        this.actualGame.description = this.jogos.slice()[
          this.actualIndex
        ].description;
      } else {
        this.clearInputs();
      }
    }
  }
};
</script>
<style scoped>
</style>
