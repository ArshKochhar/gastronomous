<template>
  <div>
    <v-stepper v-model="e1" id="step">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Pasta</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Sauce</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Garnishes</v-stepper-step>
      </v-stepper-header>
      <!-- _______________________________________________________________________________STEP 1____________________________________________________________________ -->
      <v-stepper-item>
        <v-stepper-content step="1">
          <v-row align="center" justify="center">
            <h2 id="changefont" class="display-2 font-weight-light">Choose Your Pasta...</h2>
          </v-row>
          <v-row align="center" justify="center">
            <p class="headline font-weight-light red--text">Add a Description here</p>
          </v-row>
        </v-stepper-content>
      </v-stepper-item>

      <v-stepper-item>
        <v-stepper-content step="2" id="fix2">
          <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-light">Choose Your Sauce...</h2>
          </v-row>
        </v-stepper-content>
      </v-stepper-item>

      <v-container id="fix">
        <v-row align="center" justify="center">
          <div id="abs">
            <img v-if="!isHidden" src="../assets/pbowl2.png" alt />
            <img v-if="!isHidden1" src="../assets/pbowl1.png" alt />
            <img v-if="!isHidden2" src="../assets/pbowl3.png" alt />
            <!-- ____________________STEP 2____________________________ -->
            <img v-if="!isHidden3" src="../assets/sbowl1.png" alt />
            <img v-if="!isHidden4" src="../assets/sbowl1.png" alt />
            <img v-if="!isHidden5" src="../assets/sbowl1.png" alt />
          </div>
        </v-row>
      </v-container>

      <v-stepper-items id="move">
        <v-stepper-content step="1">
          <v-container class="ml-12" max-height="200px">
            <v-row no-gutters align="center" justify="center">
              <v-col id="shiftbtn" cols="12" sm="4">
                <v-btn
                  @click="hide(pasta)"
                  v-model="pasta"
                  width="120"
                  height="90"
                  color="rgb(255, 0, 0, 0)"
                  id="btn1"
                  depressed
                ></v-btn>

                <v-dialog v-model="dialog" width="500" id>
                  <template v-slot:activator="{ on }">
                    <v-row>
                      <p class="font-weight-regular white--text ml-4 mt-2">Calories: 100</p>
                      <v-icon
                        class="ml-2 mb-3"
                        size="25"
                        v-on="on"
                        outlined
                        light
                      >mdi-help-circle-outline</v-icon>
                    </v-row>
                    <!-- <v-btn depressed color="rgb(255, 0, 0, 0)" dark class="body-2">Learn More</v-btn> -->
                  </template>

                  <v-card height="50vh" id="learnmore">
                    <v-card-title
                      class="display-1 font-weight-regular white--text justify-center mb-12"
                    >Whole Wheat Pasta</v-card-title>

                    <p
                      id="shift"
                      class="title text-center font-weight-light"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn bottom="false" color="primary" text @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>

              <v-col class="mt-12" cols="12" sm="4">
                <v-btn
                  @click="hide1(pasta1)"
                  v-model="pasta1"
                  width="120"
                  height="90"
                  color="rgb(255, 0, 0, 0)"
                  depressed
                  id="btn2"
                ></v-btn>
                <v-dialog v-model="dialog1" width="500" id>
                  <template v-slot:activator="{ on }">
                    <v-row>
                      <p class="font-weight-regular white--text ml-4 mt-2">Calories: 100</p>
                      <v-icon class="ml-2 mb-3" size="25" v-on="on" outlined>mdi-help-circle-outline</v-icon>
                    </v-row>
                  </template>

                  <v-card height="50vh" id="learnmore">
                    <v-card-title
                      class="display-1 font-weight-regular white--text justify-center mb-12"
                    >White Pasta</v-card-title>

                    <p
                      id="shift"
                      class="title text-center font-weight-light"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn bottom="false" color="primary" text @click="dialog1 = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>

              <v-col id="shiftbtn" class="mb-12" cols="12" sm="4">
                <v-btn
                  @click="hide2(pasta2)"
                  v-model="pasta2"
                  width="130"
                  height="90"
                  color="rgb(255, 0, 0, 0)"
                  id="btn3"
                  depressed
                ></v-btn>
                <v-dialog v-model="dialog2" width="500" id>
                  <template v-slot:activator="{ on }">
                    <v-row>
                      <p class="font-weight-regular white--text ml-4 mt-2">Calories: 100</p>
                      <v-icon
                        class="ml-2 mb-3"
                        size="25"
                        v-on="on"
                        outlined
                        light
                      >mdi-help-circle-outline</v-icon>
                    </v-row>
                  </template>

                  <v-card height="50vh" id="learnmore">
                    <v-card-title
                      class="display-1 font-weight-regular white--text justify-center mb-12"
                    >Penne Pasta</v-card-title>

                    <p
                      id="shift"
                      class="title text-center font-weight-light"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn bottom="false" color="primary" text @click="dialog2 = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
          <v-btn id="shiftbtn" color="primary" @click="e1 = 2">Continue</v-btn>
        </v-stepper-content>

        <!-- _______________________________________________________________________________STEP 2____________________________________________________________________ -->

        <v-stepper-content step="2">
          <v-container class="ml-12" max-height="200px">
            <v-row no-gutters align="center" justify="center">
              <v-col class="mb-12" cols="12" sm="4">
                <v-btn
                  @click="hide3(sauce)"
                  v-model="sauce"
                  class="mb-12"
                  width="100"
                  height="120"
                  color="rgb(255, 0, 0, 0)"
                  id="btn4"
                ></v-btn>
              </v-col>

              <v-col class="mt-12" cols="12" sm="4">
                <v-btn
                  @click="hide4(sauce1)"
                  v-model="sauce1"
                  min-width="120"
                  height="120"
                  color="rgb(255, 0, 0, 0)"
                  class
                  id="btn5"
                ></v-btn>
              </v-col>
              <!-- v-on:click="isHidden1 = !isHidden1" -->

              <v-col class="mb-12" cols="12" sm="4">
                <v-btn
                  @click="hide5(sauce2)"
                  v-model="sauce2"
                  class="mb-12"
                  min-width="120"
                  height="120"
                  color="rgb(255, 0, 0, 0)"
                  id="btn6"
                ></v-btn>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="toGarnish">Continue</v-btn>
          </v-container>
        </v-stepper-content>
        <!-- _______________________________________________________________________________STEP 3____________________________________________________________________ -->
      </v-stepper-items>
    </v-stepper>
    <Review />
  </div>
</template>




<script>
import Review from '@/components/Review'
export default {
    name: "Stepper",
    props:['name'],
    components:{
        Review,
    },
      data () {
    return {
      e1: 1,
      isHidden: true,
      isHidden1: true,
      isHidden2: true,
      isHidden3: true,
      isHidden4: true,
      isHidden5: true,
       dialog: false,
       dialog1: false,
       dialog2: false,
       pasta: "Whole Wheat Pasta",
       pasta1: "White Pasta",
       pasta2: "Spaghetti",
       sauce: "Tomato",
       sauce1: "Garlic",
       sauce2: "Vodka"
    }
  },

  methods: {



      toGarnish() {
        
           this.$router.push({name:'Garnishment', params: {pastaname: this.pastatype, saucename: this.saucetype, name: this.name}})
      },
      
      hide(pasta) {
          
          this.isHidden = !this.isHidden 
          this.isHidden1 = true
          this.isHidden2 = true
          this.pastatype = pasta 
 
      },
      hide1(pasta1) {
          this.isHidden1 = !this.isHidden1 
          this.isHidden = true
          this.isHidden2 = true
          this.pastatype = pasta1
          
      },

      hide2(pasta2) {
          this.isHidden2 = !this.isHidden2 
          this.isHidden1 = true
          this.isHidden = true
          this.pastatype = pasta2 
          
      },
    //   _______________________________________________________________STEP 2__________________________________________________________________________
      hide3(sauce) {
          this.isHidden3 = !this.isHidden3 
          this.isHidden4 = true
          this.isHidden5 = true
          this.isHidden1 = true
          this.isHidden2 = true
          this.isHidden = true
          this.saucetype = sauce
          
      },
      hide4(sauce1) {
          this.isHidden4 = !this.isHidden5 
          this.isHidden3 = true
          this.isHidden5 = true
          this.isHidden1 = true
          this.isHidden2 = true
          this.isHidden = true
          this.saucetype = sauce1
          
      },
      hide5(sauce2) {
          this.isHidden5 = !this.isHidden5 
          this.isHidden4 = true
          this.isHidden3 = true
          this.isHidden1 = true
          this.isHidden2 = true
          this.isHidden = true
          this.saucetype = sauce2
          
      },
      //   _______________________________________________________________STEP 3__________________________________________________________________________

  }
    
}
</script>

<style>
/* #changefont {
    font-family:
} */
#shiftbtn{
    margin-bottom: 50px;
}
#shift{
    margin-top: 190px;
}
#learnmore{
      background-image: url("../assets/learnmore.png");
  
  background-position: contain;
  background-repeat: no-repeat;
  background-size: 500px;
  position: relative;
}
#fix{
    min-height: 47vh;
    padding-top: 90px;
    position: relative;
    
}

#move{
    margin-bottom:100px;
}
#step{
    background-image: url("../assets/build.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 850px;
  position: relative;
}

.trans{
    filter: opacity(0%);
}
#container{
     position: relative;
  padding-top: 400px;

}
#btn1{
    background-image: url('../assets/p1.png');
    background-size: cover;
   
}
#btn2{
    background-image: url('../assets/p2.png');
    background-size: cover;
}
#btn3{
    background-image: url('../assets/p3.png');
    background-size: cover;
}

#btn4{
    background-image: url('../assets/s1.png');
    background-size: cover;
   
}
#btn5{
    background-image: url('../assets/s2.png');
    background-size: cover;
}
#btn6{
    background-image: url('../assets/s3.png');
    background-size: cover;
}

   

</style>