<template>
  <div id="garnish" height="100vh">
    <v-overlay :absolute="false" :opacity="0.2" :value="true" :z-index="8" id>
      <v-card id="garnishcard" class="mx-auto red lighten-1" max-width="700" max-height="1500">
        <v-toolbar-title>
          <v-btn class="mt-3" @click="goBack" icon>
            <v-icon large>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-row class align="center" justify="center">
          <h1 class="display-2 white--text mt-3 font-weight-light">Garnishments</h1>
        </v-row>
        <v-row class align="center" justify="center">
          <p
            class="headline white--text mb-5 font-weight-light mx-auto"
          >Granish to cater your Taste Buds.</p>
        </v-row>

        <v-divider></v-divider>

        <v-list flat subheader three-line class="orange lighten-3">
          <v-subheader class="red--text headline">Choices</v-subheader>

          <v-list-item-group multiple active-class>
            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox v-model="garnishes" value="Salt, " :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content class="red--text">
                  <v-list-item-title class="title font-weight-light">Salt</v-list-item-title>
                  <v-list-item-subtitle
                    class="black--text"
                  >Describe the garnish in a line so the box expands in width just a little more please alittle</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox v-model="garnishes" value="Pepper, " :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content class="red--text">
                  <v-list-item-title class="title font-weight-light">Pepper</v-list-item-title>
                  <v-list-item-subtitle
                    class="black--text"
                  >Describe the garnish in a line so the box expands in width</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox v-model="garnishes" value="Parmesean, " :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content class="red--text">
                  <v-list-item-title class="title font-weight-light">Parmesean</v-list-item-title>
                  <v-list-item-subtitle
                    class="black--text"
                  >Describe the garnish in a line so the box expands in widthh</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item class="mb-7">
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox v-model="garnishes" value="Cilantro " :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content class="red--text">
                  <v-list-item-title class="title font-weight-light">Cilantro</v-list-item-title>
                  <v-list-item-subtitle
                    class="black--text"
                  >Describe the garnish in a line so the box expands in width</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card-content>
          <!-- <p v-for="garnish in garnishes" :key="garnish.garnishes">{{garnish}}</p> -->
        </v-card-content>
      </v-card>
      <v-row align="center" justify="center" class="mt-8">
        <v-btn @click="toCart" rounded class="headline" color="white" x-large light>NEXT</v-btn>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
    name:"Garnishment",
    props:['pastaname', 'saucename', 'name'],
    data() {
        return {
           garnishes:[]
        }

    },
     methods: {
    goBack() {
      this.$router.go(-1);
    },
    toCart () {
         this.$router.push({name:'Cart', params: {pastaname: this.pastaname, saucename: this.saucename, name: this.name, garnishes: this.garnishes}})
    },
}
}
</script>


<style>

#garnish{
    background-image: url(../assets/garnish.png);
    height: 100vh;
    background-size: 1000px;
}

#garnishalign{
    margin-top: 100rem;
}

#garnishcard{
    filter: opacity(0.95);
}



</style>