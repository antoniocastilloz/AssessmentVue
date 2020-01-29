<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item class="bgGradient">
      <v-list-item-content>
        <v-list-item-title class="headline white--text">Nome</v-list-item-title>
        <v-list-item-subtitle class="mb-2 white--text">Data</v-list-item-subtitle>
        <div>
            <v-icon color="white">mdi-heart</v-icon><v-icon color="white">hourglass_full</v-icon>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

    <v-card-text>Descrição.</v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon></v-btn>
      <v-btn icon>
        <v-icon>create</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Item",

  data: () => ({})
};
</script>
