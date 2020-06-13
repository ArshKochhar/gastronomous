<template>
  <div id="app">
    <v-card
      class="mx-auto"
      color="#FF5252"
      dark
      max-width="400"
      height="35vh"
      width="60vh"
      id="box"
    >
      <v-card-title class="ml-12">
        <v-btn @click="goBack" icon>
          <v-icon large left>mdi-arrow-left</v-icon>
        </v-btn>
        <img src="../assets/G-white.png" alt />
      </v-card-title>
      <v-card-text class="display-2 font-weight-bold pt-8">Hungry? Let's get you started...</v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-form>
            <v-text-field type="text" v-model="first" label="First Name" outlined shaped></v-text-field>
            <div class="text-center mt-12">
              <!-- <button rounded class="headline" color="white" x-large light>NEXT</button> -->
              <p v-if="feedback">{{feedback}}</p>
              <v-btn @click="submit" rounded class="headline" color="white" x-large light>NEXT</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NameBox",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submit() {
      if(this.first){
        this.$router.push({name:'Customize', params: {name: this.first}})
      } else{
          this.feedback = 'You must enter a name'
      }
    }

    
   
  },

  data() {
      return {
          first:null,
          feedback:null,
      }

  },
  
};
</script>

<style >

#box{
    opacity: 0.7;
}

</style>
