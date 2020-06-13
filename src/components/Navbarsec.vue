<template>
  <div id="nav2">
    <div>
      <v-app-bar height="60vh" color="#292b45" light dense>
        <v-btn @click="goBack" icon>
          <v-icon color="white" large>mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-toolbar-title class="mt-2" id="title">
          <img src="../assets/g(white).png" alt />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="white">mdi-cart</v-icon>
        </v-btn>

        <v-menu left bottom></v-menu>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbarsec",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>

</style>
