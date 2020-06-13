<template>
  <div>
    <v-overlay :absolute="false" :opacity="0.2" :value="true" :z-index="8" id="over">
      <NameBox />
      <v-row class="mt-8" align="center" justify="center"></v-row>
    </v-overlay>
    <Slider />
  </div>
</template>

<script>
import Slider from "@/components/Slider";
// import Navbar from "@/components/Navbar";
import NameBox from "@/components/NameBox";

export default {
  name: "Name",
  components: {
    Slider,
    NameBox,
  },
 
  
};
</script>

<style >
#start{
    padding-bottom: -30px;
}


</style>
