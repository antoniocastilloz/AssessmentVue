<template>
  <div class="grey darken-4 white--text text-center heightFull">
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
  })
};
</script>
