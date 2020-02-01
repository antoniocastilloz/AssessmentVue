<template>
  <v-card elevation="10" class="mx-auto text-center">
    <div class="bgGradient white--text py-1">Desenvolvido por</div>
    <div class="pt-5 blue-grey darken-4">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQG9QUb02I1VSA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=psPAaBE5-gY3wJ_FVUFkvU3oYuqxHkNSwY4XHaT9jgo"
        alt="Castillo"
      />
    </div>
    <v-list-item class="blue-grey darken-4">
      <v-list-item-content>
        <v-list-item-title class="headline white--text">Antonio Carlos Del Castillo Junior</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions class="bgGradient d-flex justify-space-around">
      <v-icon v-for="(item,index) in icons" v-bind:key="index" class="white--text">{{item}}</v-icon>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
img {
  border-radius: 100%;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12) !important;
}
</style>
<script>
export default {
  name: "Sobre",
  data() {
    return {
      icons: [
        "mdi-language-javascript",
        "mdi-angular",
        "mdi-vuejs",
        "mdi-angularjs",
        "mdi-language-html5",
        "mdi-language-css3",
        "mdi-bootstrap",
        "mdi-material-design",
        "mdi-nodejs",
        "mdi-jquery",
        "mdi-visual-studio-code",
        "mdi-adobe"
      ]
    };
  }
};
</script>
