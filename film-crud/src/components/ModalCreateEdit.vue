<template>
  <v-dialog v-model="modalCreateEdit" persistent max-width="600px">
    <v-card class="blue-grey darken-4">
      <v-card-title class="bgGradient">
        <span class="headline white--text">Jogo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <small v-if="isEdit" class="white--text">
            <small class="white--text">Informações antes de atualizar</small>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-center">Nome: {{jogos[actualIndex].name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>Descrição: {{jogos[actualIndex].description}}</v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>Image-Url: {{jogos[actualIndex].image}}</v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-center">Tipo: {{jogos[actualIndex].type}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-center"
                  >Favorito: {{responseYesOrNoAccordBoolean(jogos[actualIndex].favorite)}} / Zerou: {{responseYesOrNoAccordBoolean(jogos[actualIndex].full)}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </small>
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
        this.clearInputs();
        this.closeModalCreateEdit();
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
  }
};
</script>
<style scoped>
</style>
