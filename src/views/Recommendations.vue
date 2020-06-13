<template>
  <div id="recommend">
    <Navbarsec />
    <h2
      class="display-2 mr-3 ml-8 font-weight-regular mt-12 white--text"
      align="left"
    >Let's Get Started!</h2>

    <p
      class="headline mr-3 ml-8 font-weight-regular mt-3 white--text"
      align="left"
    >Hi {{this.name}}, Choose your preferences below and we will create a recommended meal based on your taste!</p>
    <RecommendBox />
  </div>
</template>

<script>
import Navbarsec from '@/components/Navbarsec'
import RecommendBox from '@/components/RecommendBox'
// import NameBox from '@/components/NameBox'


export default {
  name: "Recommendations",
  // props:['name'],
  components: {  
     Navbarsec,
     RecommendBox,
    //  NameBox,
     
  },
  
};
</script>

<style>

#recommend {
  
  background-color: #0d1017;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 500px;
  position: relative;
}
</style>
