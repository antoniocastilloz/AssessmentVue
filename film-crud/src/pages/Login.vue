<template>
  <div class="heightFull grey darken-4 d-flex align-center">
    <v-row class="white--text justify-center">
      <v-col xs="11" sm="12" md="5" lg="4" class="d-flex align-center justify-center">
        <v-row class="d-flex justify-center">
          <v-col elevation="23">
            <h1 class="display-2 font-italic font-weight-bold text-center">Login</h1>
            <br />
            <v-form ref="form">
              <v-text-field
                v-model="email"
                type="email"
                color="blue"
                placeholder="E-mail"
                append-icon="email"
                required
                solo
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                color="blue"
                placeholder="Senha"
                append-icon="lock"
                required
                solo
              ></v-text-field>
            </v-form>
            <v-btn elevation="10" class="bgGradient white--text" @click="login" raised block large>Entrar</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Login",
  components: {},
  data: () => ({
    email: "",
    password: ""
  }),
  computed: {},
  methods: {
    login() {
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred.user); // eslint-disable-line
        });
    }
  },
  watch: {}
};
</script>
