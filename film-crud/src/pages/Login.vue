<template>
  <div class="heightFull grey darken-4 d-flex align-center">
    <v-row class="white--text justify-center">
      <v-col xs="11" sm="12" md="5" lg="4" class="d-flex align-center justify-center">
        <v-row class="d-flex justify-center">
          <v-col elevation="23">
            <h1 class="display-2 font-weight-bold text-center">Login</h1>
            <br />
            <v-form ref="form">
              <v-text-field
                v-model="email"
                type="email"
                color="blue"
                placeholder="E-mail"
                append-icon="email"
                :rules="[rules.required,rules.email]"
                required
                solo
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                color="blue"
                placeholder="Senha"
                append-icon="lock"
                :rules="[rules.required,rules.counter]"
                required
                solo
              ></v-text-field>
            </v-form>
            <v-btn
              elevation="10"
              class="bgGradient white--text mb-7"
              @click="login"
              raised
              block
              large
            >Entrar</v-btn>
            <v-btn
              elevation="10"
              color="blue white--text"
              @click="login"
              to="/cadastro"
              outlined
              block
              large
            >Cadastrar-se</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <ModalError />
  </div>
</template>

<script>
import ModalError from "../components/Generic/ModalError";

import * as firebase from "firebase";

export default {
  name: "Login",
  components: {
    ModalError
  },
  data: () => ({
    email: "",
    password: "",
    rules: {
      required: value => !!value || "Campo requerido.",
      counter: value =>
        value.length >= 6 || "A senha deve contar com 6 ou mais caracteres",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail inválido.";
      }
    }
  }),
  computed: {},
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$store.dispatch("setUserData", data.user.uid);
            this.$router.push("/app");
          })
          .catch(error => {
            console.log(error); // eslint-disable-line
            let errorMessage = "";
            if (error.code == "auth/too-many-requests") {
              errorMessage =
                "Muitas tentativas de login sem sucesso, tente novamente mais tarde.";
            }
            if (error.code == "auth/wrong-password") {
              errorMessage = "Senha inválida.";
            }
            if (error.code == "auth/user-not-found") {
              errorMessage = "E-mail inválido.";
            }
            this.$store.commit("openModalErrorCadastro", errorMessage);
          });
      }
    }
  },
  watch: {}
};
</script>
