<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-4" dark>
      <div class="align-center font-italic font-weight-bold d-none d-sm-block">
        <router-link to="/">
          ⚡Game<strong>Catalog</strong>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/" text><v-icon class="mr-3">home</v-icon>Home</v-btn>
      <v-btn to="/app" text class="mx-4"><v-icon class="mr-3">exit_to_app</v-icon>App</v-btn>
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
