<template>
  <div class="heightFull grey darken-4 d-flex align-center">
    <v-row v-if="this.$route.path == '/'" class="white--text justify-center">
      <v-col xs="11" sm="11" md="5" lg="4" offset-lg="1" class="d-flex align-center justify-center">
        <v-row class="d-flex justify-center">
          <v-col elevation="23">
            <h1 class="display-2 font-italic font-weight-bold">⚡GameCatalog</h1>
            <br />
            <p
              class="headline"
            >O GameCatalog é o melhor sistema para catalogar os jogos que você já completou ou está jogando.</p>
            <br />
            <v-btn elevation="10" class="bgGradient white--text" to="/app" raised block large>
              Ir para o aplicativo
              <v-icon dark right>double_arrow</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="11" md="5" class="d-none d-sm-flex align-center">
        <v-row class="d-flex justify-center">
          <v-col elevation="23" sm="10" md="8">
            <img
              v-if="visualizeGif"
              :src="actualGif"
              alt="jogo"
              style="width:100%; border-radius:10px;"
              class="v-application elevation-10"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <router-view></router-view>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "Home",

  data: () => ({
    gifs: [
      "https://media.giphy.com/media/txcIHRNl2vcDm/source.gif",
      "https://media.giphy.com/media/3oz8xyCpOResKKsoXm/source.gif",
      "https://media.giphy.com/media/YqiO23Q2gfurS/source.gif",
      "https://media.giphy.com/media/KzWAhzWD3HrJyAcLEM/source.gif",
      "https://media.giphy.com/media/l3vR1lFJYOSLXVNYI/giphy.gif",
      "https://media.giphy.com/media/rD3qr1kIfSPsI/source.gif",
      "https://media.giphy.com/media/WdqlhBrNj2W3u/source.gif",
      "https://media.giphy.com/media/1wh06XT53tPGw/source.gif",
      "https://media.giphy.com/media/247U9uYBNscCc/source.gif",
      "https://media.giphy.com/media/uQKc2CfocyFJ6/source.gif",
      "https://media.giphy.com/media/9MIzdMaj7PkE4Tn2TD/source.gif"
    ],
    actualGif: "https://media.giphy.com/media/txcIHRNl2vcDm/source.gif",
    visualizeGif: true
  }),
  mounted() {
    this.rollGifs();
  },
  methods: {
    async rollGifs() {
      /* eslint-disable */
      while (true) {
        for (let x = 0; x < this.gifs.length; x++) {
          this.actualGif = this.gifs[x];
          /* eslint-disable */
          await new Promise(r => setTimeout(r, 1500));
          /* eslint-enable */
        }
      }
    }
    /* eslint-enable */
  }
};
</script>
