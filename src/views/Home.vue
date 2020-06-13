<template>
  <router-link to="/about" v-touch>
    <div class="home" id="landing-page"></div>
  </router-link>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style>
#landing-page {
  background-image: url("../assets/G.png");
  background-color: #000000;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 500px;
  position: relative;
}
</style>
