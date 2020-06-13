<template>
  <div class="about mt-3" id="welcome">
    <Navbar />

    <h1
      class="mt-8 .font-weight-black display-2 black--text"
      id="intro"
    >Welcome to the Kitchen of the Future</h1>

    <h2 class="font-weight-thin grey-darken4--text" id="welcomemsg">
      Without a doubt there is something very comfortable
      <br />and delicious about cooking food.
    </h2>

    <v-responsive>
      <img src="../assets/bowl.png" alt id="fork" />
    </v-responsive>
    <div class id="started">
      <router-link to="/name" id="link" v-touch>
        <v-btn class="mt-0 mb-5" color="error" dark x-large>Get Started</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "About",
  components: {
    Navbar,
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
    },
  },
};
</script>

<style>
#welcome {
  text-align: center;
  height: 100vh;
}
#intro {
  padding-top: 10px;
  padding-bottom: 10px;
}
#welcomemsg {
  padding-top: 20px;
}
#fork {
  padding-left: 200px;
  padding-top: 20px;
  padding-bottom:30px ;
}
#started {
  padding-top: 20px;
}
#link
{
    text-decoration: none;
}


</style>
