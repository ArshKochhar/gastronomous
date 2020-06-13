<template>
  <div>
    <v-overlay :absolute="false" :opacity="0.2" :value="true" :z-index="8" id="cartback">
      <v-row class align="center" justify="center">
        <h1 class="display-2 white--text mb-4 mr-4 font-weight-light">Your</h1>

        <h1 class="display-2 white--text mb-4 font-weight-medium">Bucket</h1>
      </v-row>
      <v-card class="mx-auto mb-7" color="#FFB74D" shaped="10" dark height="41vh" max-width="700">
        <v-card-title>
          <v-icon large left>mdi-currency-usd</v-icon>
          <span class="headline mr-3 font-weight-regular">This one's on us:)</span>
        </v-card-title>

        <v-card-content>
          <v-row class="ml-12 pl-12" align="center" justify="center">
            <img class="ml-12 pl-12" src="../assets/cart.png" alt />
          </v-row>
        </v-card-content>

        <v-card-text class="headline font-weight-light white--text">
          <span class="font-weight-bold">{{this.pastaname}}</span>
          topped off with fresh
          <span class="font-weight-bold">{{this.saucename}} Sauce</span>
          garnished with
          <span
            v-for="garnish in garnishes"
            :key="garnish.garnishes"
          >{{garnish}}</span> .
        </v-card-text>

        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{this.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <!-- _____________________________________________________________________NUTRIOTION_______________________________________________ -->

      <v-card class="mx-auto" color="#9FA8DA" shaped="10" dark height="37vh" max-width="700">
        <v-card-title>
          <v-icon large left>mdi-nutrition</v-icon>
          <span
            class="title mr-3 font-weight-regular"
          >{{this.name}}, In case you wanted some nutritional info...</span>
        </v-card-title>

        <v-row class>
          <v-col>
            <v-row align="center" justify="center">
              <h2 class="headline font-weight-medium black--text">{{this.pastaname}}</h2>
            </v-row>
            <v-card-text class="title font-weight-regular white--text">
              <span v-if="this.pastaname == 'Whole Wheat Pasta'">
                <span v-for="pasta0 in pasta" :key="pasta0.pasta">
                  <ul>
                    <li>{{pasta0}}</li>
                  </ul>
                </span>
              </span>
              <span v-else-if="this.pastaname == 'White Pasta'">
                <span v-for="pastaone in pasta1" :key="pastaone.pasta">
                  <ul>
                    <li>{{pastaone}}</li>
                  </ul>
                </span>
              </span>
              <span v-else>
                <span v-for="pastatwo in pasta2" :key="pastatwo.pasta2">
                  <ul>
                    <li>{{pastatwo}}</li>
                  </ul>
                </span>
              </span>
            </v-card-text>
          </v-col>
          <!-- ___________________________________________________________________________________ -->
          <v-col>
            <v-row align="center" justify="center">
              <h2 class="headline font-weight-medium black--text">{{this.saucename}} Sauce</h2>
            </v-row>
            <v-card-text class="title font-weight-regular white--text">
              <span v-if="this.saucename == 'Tomato'">
                <span v-for="sauce0 in sauce" :key="sauce0.sauce">
                  <ul>
                    <li>{{sauce0}}</li>
                  </ul>
                </span>
              </span>
              <span v-else-if="this.saucename == 'Garlic'">
                <span v-for="sauceone in sauce1" :key="sauceone.sauce1">
                  <ul>
                    <li>{{sauceone}}</li>
                  </ul>
                </span>
              </span>
              <span v-else>
                <span v-for="saucetwo in sauce2" :key="saucetwo.sauce2">
                  <ul>
                    <li>{{saucetwo}}</li>
                  </ul>
                </span>
              </span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-row align="center" justify="center" class="mt-5">
        <v-btn color="white" light x-large @click="thankYou">Next</v-btn>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
    name:"Cart",
     props:['pastaname', 'saucename', 'name','garnishes'],
     methods: {
      thankYou () {
         this.$router.push({name:'Thanks', params: { name: this.name}})
      },
     },
     data() {
        return {
          pasta: [
            '230 Calories, ',
             '2g of Sodium, ',
             '3g of fat, ' ,
             '4g of Carbohydrates, ',
             '5g of Fibre, ',
            '6g of Sugar, ',
             '7g of Protein, '
          ],
          pasta1: [
            '230 Calories, ',
             '8g of Sodium, ',
             '9g of fat, ' ,
             '10g of Carbohydrates, ',
             '11g of Fibre, ',
            '12g of Sugar, ',
             '13g of Sodium, '
          ],
          pasta2: [
            '230 Calories, ',
             '14g of Sodium, ',
             '15g of fat, ' ,
             '16g of Carbohydrates, ',
             '17g of Fibre, ',
            '18g of Sugar, ',
             '19g of Sodium, '
          ],
          sauce: [
            '230 Calories, ',
             '2g of Sodium, ',
             '3g of fat, ' ,
             '4g of Carbohydrates, ',
             '5g of Fibre, ',
            '6g of Sugar, ',
             '7g of Protein, '
          ],
          sauce1: [
            '230 Calories, ',
             '8g of Sodium, ',
             '9g of fat, ' ,
             '10g of Carbohydrates, ',
             '11g of Fibre, ',
            '12g of Sugar, ',
             '13g of Sodium, '
          ],
          sauce2: [
            '230 Calories, ',
             '14g of Sodium, ',
             '15g of fat, ' ,
             '16g of Carbohydrates, ',
             '17g of Fibre, ',
            '18g of Sugar, ',
             '19g of Sodium, '
          ],

        }

       
}

}

</script>

<style>
#cartback{
    background-color:#EF5350; 

}

</style>