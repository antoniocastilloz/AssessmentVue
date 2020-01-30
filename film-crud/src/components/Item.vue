<template>
  <v-row class="mx-3">
    <v-col
      v-for="(jogo,index) in jogos"
      v-bind:key="index"
      xs="6"
      sm="6"
      md="3"
      lg="3"
      xl="2"
      class="d-flex align-center"
    >
      <v-card max-width="100%" class="mx-auto" style="width:100%; height:100%;">
        <v-list-item class="bgGradient">
          <v-list-item-content>
            <v-list-item-title class="headline white--text">{{jogo.name}}</v-list-item-title>
            <v-list-item-subtitle class="mb-2 white--text">Data: {{jogo.date}}</v-list-item-subtitle>
            <v-list-item-subtitle class="mb-2 white--text">Tipo: {{jogo.type}}</v-list-item-subtitle>
            <div>
              <v-icon color="white" v-if="jogo.favorite">mdi-heart</v-icon>
              <v-icon color="white" v-if="jogo.full">hourglass_full</v-icon>
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-img :src="jogo.image" min-height="194"></v-img>

        <v-card-text>{{jogo.description}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="openModalCreateEdit">
            <v-icon color="primary">create</v-icon>
          </v-btn>

          <v-dialog v-model="modalDelete" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn icon>
                <v-icon color="primary" v-on="on">delete</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline bgGradient white--text">Excluir</v-card-title>
              <v-card-text class="pb-0 pt-4">Tem certeza que deseja excluir este jogo?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green white--text" raised @click="deleteGame(index)">Sim</v-btn>
                <v-btn color="red white--text" raised @click="modalDelete = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Item",

  data: () => ({
    modalDelete: false,
    modalEdit: false
  }),
  computed: {
    jogos() {
      return this.$store.state.jogos;
    }
  },
  methods: {
    openModalCreateEdit() {
      this.$store.commit("openModalCreateEdit");
    },
    deleteGame(variable){
      this.modalDelete = false
      this.$store.commit("deleteGame",variable)
    }
  }
};
</script>
<style scoped>
</style>
