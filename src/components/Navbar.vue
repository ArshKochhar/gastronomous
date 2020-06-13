<template>
  <div id="nav">
    <div>
      <v-app-bar color="red accent-2" light dense>
        <v-btn @click="goBack" icon>
          <v-icon large>mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-toolbar-title class="mt-2" id="title">
          <img src="../assets/g(white).png" alt />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-menu left bottom></v-menu>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>

</style>
