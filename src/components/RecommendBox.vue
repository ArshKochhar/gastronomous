<template>
  <div id="app">
    <div class="text-center flex-wrap mt-10">
      <v-btn
        class="mt-2"
        v-for="(description1,i) in descriptions1"
        :key="i"
        :src="description1.title"
        fab
        x-large
        height="15vh"
        width="15vh"
        id="circle"
        outlined
        dark
      >
        <p class="title" id="bubbletext">{{description1.title}}</p>
      </v-btn>

      <!-- _________________________________________________________________________________________________________________________ -->
    </div>
  </div>
</template>

<style >

#bubbletext{
    color: white;
    font-weight: 500;
    text-align: center;
}


</style>

<script>
export default {
    name:'RecommendBox' ,
    data () {
    return {
      descriptions1: [
        {
          title: 'Nut-free',
        },
        {
          title: 'Flavourful',
        },
          {
          title: 'Aromatic',
        },
        {
          title: 'Antioxidant',
        },
        {
          title: 'Low fat',
        },
        {
          title: 'Cardio', 
        //   title:'benefits',
        },
        {
          title: 'Italian',
        },
        {
          title: 'Fiber',
        },
        {
          title: 'Healthy',
        },
        {
          title: 'Vegetarian',
        },
        {
          title: 'Protein',
        },
        {
          title: 'Gluten-free',
        },


      ],
        
      
}
    },
}
    
</script>