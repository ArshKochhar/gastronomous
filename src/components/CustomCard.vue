<template>
  <div>
    <v-card max-width="100vh" height="47vh" id="customcardback" class="mx-auto">
      <!-- <v-app-bar dark color="pink">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>My Music</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
      </v-app-bar>-->
      <!-- <Navbar /> -->

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-card shaped raised="12dp" class="mt-12" height="35vh" width="600" light id="card1">
                <v-card-title class="display-3 font-weight-regular white--text">Build Your Bowl</v-card-title>

                <v-card-subtitle class="title font-weight-regular white--text mt-5">
                  Select from a variety of different noodles,
                  <br />sauces, and garnishments to build
                  <br />a customized pasta bowl
                </v-card-subtitle>

                <!-- <v-card-actions>
                <v-btn text>Listen Now</v-btn>
                </v-card-actions>-->
              </v-card>
            </v-row>
          </v-col>

          <!-- <v-col cols="12">
            <v-card height="25vh" light id="card2" class="mt-3">
              <v-card-title class="display-3 font-weight-regular white--text">Choose Your Entrée</v-card-title>

              <v-card-subtitle class="title font-weight-regular white--text mt-5">
                Choose from a specially curated list of entrées,
                <br />designed to perfection by our professionals
                <br />and of course our GastroBot!
          </v-card-subtitle>-->

          <!-- </v-card>
          </v-col>-->
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
export default {
    name: "CustomCard",
    components: {
        // Navbar,
    },
     data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}

</script>

<style>
#customcardback{
  background-color: #FFCDD2;
}
#card1{
    background-image: url("../assets/pasta.jpg");
    background-size: cover;
    
}
#card2{
    background-image: url("../assets/robot.jpg");
    background-size: cover;
    
}

#link
{
    text-decoration: none;
}

</style>