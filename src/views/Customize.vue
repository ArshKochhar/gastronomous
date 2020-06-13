<template>
  <div>
    <Navbar />
    <v-row align="center" justify="center" class="mt-4">
      <h2
        class="display-1 font-weight-light mt-3 black--text mb-3"
      >Hey, {{this.name}}! Let's design your meal...</h2>
    </v-row>

    <CustomCard />

    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card class="mt-12" width="700" height="27vh" light id="card3">
          <v-card-title
            class="display-1 font-weight-regular black--text text-center justify-center"
          >Get Started!</v-card-title>

          <div class="text-center">
            <v-btn
              @click="goBuild"
              raised
              icon
              elevation="15"
              height="15vh"
              width="30vh"
              class="ma-2"
              tile
              color="black"
              dark
            >
              <h1>BUILD A BOWL</h1>
            </v-btn>

            <!-- <v-btn height="15vh" width="36vh" class="ma-2" tile color="black" dark>
                  <h1>ChOOSE AN ENTRÉE</h1>
            </v-btn>-->
          </div>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>



<script>
import CustomCard from '@/components/CustomCard';
import Navbar from '@/components/Navbar'
export default {
    name: "Customize",
    props:['name'],
    components: {
        CustomCard,
        Navbar,
    },

    methods: {
      goBuild () {
        this.$router.push({name:'Stepper', params: {name: this.name}})
      }
    },


  
}
</script>

<style >
#card3{
    background-color: #F0F4C3;
}
</style>