<!-- <template>
  <v-app>
    <banner />
    <nav-bar />
    <view />
    <footer-view />

  </v-app>
</template>

<script >
import Banner from './components/core/Banner.vue';
import NavBar from './components/core/NavBar.vue';
import FooterView from './components/core/Footer.vue';
import View from "./layouts/default/View.vue"


export default {
  name: "App",

  components: {
    Banner,
    NavBar,
    FooterView,
    View

  },
};
  //
</script> -->


<template>
  <router-view />
</template>

<script setup>
  //
</script>