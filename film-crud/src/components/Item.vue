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
      <v-card
        v-if="index != jogos.length -1"
        max-width="100%"
        class="mx-auto"
        style="width:100%; height:100%;"
      >
        <v-list-item class="bgGradient">
          <v-list-item-content>
            <v-list-item-title class="headline white--text">{{jogo.name}}</v-list-item-title>
            <v-list-item-subtitle class="mb-2 white--text">Data: {{jogo.date}}</v-list-item-subtitle>
            <v-list-item-subtitle class="mb-2 white--text">Tipo: {{jogo.type}}</v-list-item-subtitle>
            <div style="min-height:24px;">
              <v-icon color="white" v-if="jogo.favorite">mdi-heart</v-icon>
              <v-icon color="white" v-if="jogo.full">hourglass_full</v-icon>
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-img :src="jogo.image" min-height="194"></v-img>

        <v-card-text>{{jogo.description}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="openModalCreateEdit(index)">
            <v-icon color="primary">create</v-icon>
          </v-btn>
          <v-btn icon @click="openModalDelete(index)">
            <v-icon color="primary">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Item",
  computed: {
    jogos() {
      return this.$store.state.jogos;
    }
  },
  methods: {
    openModalCreateEdit(index) {
      if (index > -1) {
        this.$store.commit("setActualIndex", index);
      }
      this.$store.commit("openModalCreateEdit");
    },
    openModalDelete(index) {
      this.$store.commit("setActualIndex", index);
      this.$store.commit("openModalDelete");
      console.log("variable"); // eslint-disable-line
    }
  }
};
</script>
<style scoped>
</style>
