<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-4" dark>
      <div class="d-flex align-center font-italic font-weight-bold">
        <router-link to="/">
          ⚡Game<strong>Catalog</strong>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/app" text class="ml-4">App</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style scoped>
@import "./style.css";

a{
  color: white!important;
  text-decoration: none;
}
</style>
