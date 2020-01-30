<template>
  <v-row class="white--text justify-center">
    <v-col cols="6">
      <v-row justify="center">
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
                  v-model="firstname"
                  :rules="nameRules"
                  placeholder="Nome*"
                  append-icon="view_headline"
                  required
                  solo
                ></v-text-field>
                <v-textarea append-icon="description" solo name="input-7-4" label="Descrição*"></v-textarea>
                <v-text-field
                  color="blue*"
                  v-model="sla"
                  :rules="nameRules"
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
                  v-model="favorite"
                  :label="`Favorito ? ${responseYesOrNoAccordBoolean(favorite)}`"
                ></v-switch>
                <v-switch
                  dark
                  prepend-icon="hourglass_full"
                  v-model="full"
                  :label="`Zerou ? ${responseYesOrNoAccordBoolean(full)}`"
                ></v-switch>
              </v-container>

              <small class="white--text">*Indica campos obrigatórios</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeModalCreateEdit">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="closeModalCreateEdit">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Forms",

  data: () => ({
    name: "",
    favorite: false,
    full: false,
    description: "",
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
  methods: {
    responseYesOrNoAccordBoolean(variable) {
      if (variable) {
        return "Sim !";
      } else {
        return "Não !";
      }
    },
    addGame() {
      this.dialog = false;
      var ObjectGame = { name: "teste" };
      this.$store.commit("addGame", ObjectGame);
    },
    closeModalCreateEdit(){
      this.$store.commit("closeModalCreateEdit");
    }
  },
  computed:{
    modalCreateEdit(){
      return this.$store.state.modalCreateEdit;
    },
  }
};
</script>
<style scoped>
</style>
