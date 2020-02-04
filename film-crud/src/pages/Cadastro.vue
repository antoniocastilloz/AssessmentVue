<template>
  <div class="heightFull grey darken-4 d-flex align-center">
    <v-row class="white--text justify-center">
      <v-col xs="11" sm="12" md="5" lg="4" class="d-flex align-center justify-center">
        <v-row class="d-flex justify-center">
          <v-col elevation="23">
            <h1 class="display-2 font-italic font-weight-bold text-center">Cadastro</h1>
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
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                color="blue"
                placeholder="Senha"
                append-icon="lock"
                required
                solo
                :rules="[rules.required, rules.counter]"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                type="password"
                color="blue"
                placeholder="Confirmarção da senha"
                :rules="[rules.required, rules.counter,comparePasswords]"
                append-icon="lock"
                required
                solo
              ></v-text-field>
            </v-form>
            <v-btn
              elevation="10"
              class="bgGradient white--text"
              @click="onSignup"
              raised
              block
              large
            >Registrar-se</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <ModalCadastro />
  </div>
</template>

<script>
import ModalCadastro from "../components/Cadastro/ModalCadastro";

import * as firebase from "firebase";

export default {
  name: "Cadastro",
  components: {
    ModalCadastro
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      rules: {
        required: value => !!value || "Campo requerido.",
        counter: value =>
          value.length >= 6 || "A senha deve contar com 6 ou mais caracteres",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido.";
        }
      }
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "As senhas devem ser iguais!"
        : true;
    }
  },
  methods: {
    onSignup() {
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(error =>
            this.$store.commit("updateMessageModalCadastro", error.message)
          );
          this.$store.commit("openModalCadastro")
      }
    }
  },
  watch: {}
};
</script>
