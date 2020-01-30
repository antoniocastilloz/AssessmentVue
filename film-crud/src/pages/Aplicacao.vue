<template>
  <div class="grey darken-4 white--text text-center heightFull">
    <v-btn class="bgGradient mt-10" dark large @click="openModalCreateEdit">
      Cadastrar Jogo
      <v-icon class="ml-3">add</v-icon>
    </v-btn>
    <Forms />
    <Item />
  </div>
</template>

<script>
import Forms from "../components/Forms";
import Item from "../components/Item";

export default {
  name: "Aplicacao",
  components: {
    Forms,
    Item
  },

  data: () => ({
    //
  }),
  methods:{
    openModalCreateEdit(){
      this.$store.commit("openModalCreateEdit");
    }
  }
};
</script>
