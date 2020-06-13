<template>
  <v-app>
    <v-content>
      <transition name="slide-x-transition">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  
  data: () => ({
    //
  }),
};
</script>
