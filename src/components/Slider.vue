<template>
  <div id="app">
    <v-app id="inspire">
      <v-carousel
        id="blur"
        height="100vh"
        cycle
        interval="2000"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item id="blur" v-for="(item,i) in items" :key="i" :src="item.ImageURL"></v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>

<script>
export default {
    name:"Slider",
  data () {
    return {
      items: [
        {
          ImageURL: 'https://www.seriouseats.com/2019/08/20190809-burst-tomato-xo-pasta-vicky-wasik21--1500x1125.jpg',
        },
        {
          ImageURL: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        },
        {
          ImageURL: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        },
        {
          ImageURL: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      
    }
  },

}
    
</script>

<style>
#blur{
    filter: brightness(20%);
}

</style>