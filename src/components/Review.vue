<template>
  <div id="review">
    <v-row class align="center" justify="center">
      <h1 class="display-2 black--text mt-9 mb-5 font-weight-light">Reviews & Reccomendations</h1>
      <p></p>
    </v-row>

    <!-- __________________________________________________________REVIEW 1 _______________________________________________________________________________ -->

    <v-card class="mx-auto mt-5 elevation-20" color="red accent-1" dark style="max-width: 550px;">
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title primary-title>
            <div>
              <v-row>
                <v-avatar class="ml-3">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="headline ml-3 mt-2">Calvin Hood</div>
              </v-row>
              <p class="overline black--text ml-12">(Tuesday, April 7, 2020)</p>
              <p
                class="subtitle-1 font-weight-light ml-12"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink ma-2"
          contain
          height="125px"
          src="../assets/p1.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider light></v-divider>
      <v-card-actions class="pa-4 ml-12">
        Calvin's Rating:
        <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-2">({{ rating }})</span>
        <v-rating
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <!-- __________________________________________________________REVIEW 2 _______________________________________________________________________________ -->

    <v-card
      class="mx-auto mt-5 elevation-20"
      color="purple lighten-4"
      dark
      style="max-width: 550px;"
    >
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title primary-title>
            <div>
              <v-row>
                <v-avatar class="ml-3">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="headline ml-3 mt-2">Calvin Hood</div>
              </v-row>
              <p class="overline black--text ml-12">(Tuesday, April 7, 2020)</p>
              <p
                class="subtitle-1 font-weight-light ml-12"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink ma-2"
          contain
          height="125px"
          src="../assets/p1.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider light></v-divider>
      <v-card-actions class="pa-4 ml-12">
        Calvin's Rating:
        <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-2">({{ rating1 }})</span>
        <v-rating
          v-model="rating1"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <!-- __________________________________________________________REVIEW 3 _______________________________________________________________________________ -->

    <v-card
      class="mx-auto mt-5 elevation-20 mb-5"
      color="red accent-1"
      dark
      style="max-width: 550px;"
    >
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title primary-title>
            <div>
              <v-row>
                <v-avatar class="ml-3">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="headline ml-3 mt-2">Calvin Hood</div>
              </v-row>
              <p class="overline black--text ml-12">(Tuesday, April 7, 2020)</p>
              <p
                class="subtitle-1 font-weight-light ml-12"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink ma-2"
          contain
          height="125px"
          src="../assets/p1.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider light></v-divider>
      <v-card-actions class="pa-4 ml-12">
        Calvin's Rating:
        <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-2">({{ rating2 }})</span>
        <v-rating
          v-model="rating2"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <!-- __________________________________________________________REVIEW 4 _______________________________________________________________________________ -->

    <v-card
      class="mx-auto mt-5 elevation-20"
      color="purple lighten-4"
      dark
      style="max-width: 550px;"
    >
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title primary-title>
            <div>
              <v-row>
                <v-avatar class="ml-3">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="headline ml-3 mt-2">Calvin Hood</div>
              </v-row>
              <p class="overline black--text ml-12">(Tuesday, April 7, 2020)</p>
              <p
                class="subtitle-1 font-weight-light ml-12"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink ma-2"
          contain
          height="125px"
          src="../assets/p1.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider light></v-divider>
      <v-card-actions class="pa-4 ml-12">
        Calvin's Rating:
        <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-2">({{ rating3 }})</span>
        <v-rating
          v-model="rating3"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    name:"Review",
    data () {
    return {
     rating:"4.3",
     rating1:"3.3",
     rating2:"4",
     rating3:"5",

    }
  },
}
 
  
</script>

<style>

#review{
    background-color: #C5CAE9;
}

</style>