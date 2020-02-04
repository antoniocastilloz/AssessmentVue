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
                type="email"
                color="blue"
                placeholder="E-mail"
                append-icon="email"
                required
                solo
              ></v-text-field>
              <v-text-field
                type="password"
                color="blue"
                placeholder="Senha"
                append-icon="lock"
                required
                solo
              ></v-text-field>
              <v-text-field
                type="password"
                color="blue"
                placeholder="Confirmarção da senha"
                append-icon="lock"
                required
                solo
              ></v-text-field>
            </v-form>
            <v-btn
              elevation="10"
              class="bgGradient white--text"
              to="/app"
              raised
              block
              large
            >Registrar-se</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {}
};
</script>
