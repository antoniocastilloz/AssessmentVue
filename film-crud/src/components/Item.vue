<template>
  <v-row class="mx-3">
    <v-col v-for="(jogo,index) in jogos" v-bind:key="index" cols="2" class="d-flex align-center">
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

        <v-img :src="jogo.image" min-height="194" ></v-img>

        <v-card-text>{{jogo.description}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>create</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Item",

  data: () => ({}),
  computed: {
    jogos() {
      return this.$store.state.jogos;
    }
  }
};
</script>
<style scoped>
</style>
