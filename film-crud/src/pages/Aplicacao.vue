<template>
  <div>
    <div>Aplicacao</div>
    <Forms />
    <Listas />
  </div>
</template>

<script>
import Forms from "../components/Forms";
import Listas from "../components/Listas";

export default {
  name: "Aplicacao",

  components: {
    Forms,
    Listas
  },

  data: () => ({
    //
  })
};
</script>
