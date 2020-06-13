<template>
  <v-overlay id="thanks" :absolute="false" :opacity="0.2" :value="true" :z-index="8">
    <v-row class align="center" justify="center">
      <img src="../assets/BigG.png" alt />
    </v-row>
    <v-row class align="center" justify="center">
      <h1 class="display-3 white--text mt-12 font-weight-light">Thank You!</h1>
    </v-row>

    <v-card raised shaped tile class="mt-12" color="#FFD54F" dark max-width="600">
      <v-card-title class="mb-12">
        <img src="../assets/G-white.png" alt />
      </v-card-title>

      <v-card-text class="headline ml-7 pb-8 brown--text font-weight-regular mb-12">
        Thanks {{this.name}}, we hope you had a
        <span class="font-weight-bold">Gastronomously</span> amazing experience with us. See you soon :)
        <p
          class="Headline black--text mt-12 font-weight-medium"
        >Scan this to view the progress on your food:</p>
      </v-card-text>
    </v-card>

    <v-row class="mt-8" align="center" justify="center">
      <img src="../assets/QR.png" alt />
    </v-row>
  </v-overlay>
</template>

<script>
export default {
    name:"thanks",
    props:['name']
}
</script>

<style >
#thanks {
  background-color: #37474F;
  height: 100vh;
}
</style>