<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-4" dark>
      <div class="align-center font-italic font-weight-bold d-none d-sm-flex">
        <router-link to="/">
          ⚡Game
          <strong>Catalog</strong>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="this.$route.path != '/'" @click="logout" text>
        <v-icon class="mr-3">arrow_back</v-icon>Sair
      </v-btn>
      <v-btn v-if="this.$route.path != '/app'" to="/" text>
        <v-icon class="mr-3">home</v-icon>Home
      </v-btn>
      <v-btn v-if="this.$route.path != '/app'" to="/sobre" text class="ml-3">
        <v-icon class="mr-3">person</v-icon>Sobre
      </v-btn>
      <v-btn v-if="this.$route.path != '/app'" to="/login" text class="ml-3">
        <v-icon class="mr-3">exit_to_app</v-icon>Login
      </v-btn>
      <v-btn v-if="this.$route.path != '/app'" to="/cadastro" text class="ml-3">
        <v-icon class="mr-3">assignment</v-icon>Cadastrar-se
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { auth } from "firebase";

export default {
  name: "App",
  methods: {
    logout() {
      auth()
        .signOut()
        .then(
          data => console.log(data) // eslint-disable-line
        )
        .catch(
          error => console.log(error) // eslint-disable-line
        );
      this.$router.push("/");
    }
  },
  created() {
    if (this.$route.path == "/Vue-GameCatalog/") {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
@import "./style.css";

a {
  color: white !important;
  text-decoration: none;
}
</style>
