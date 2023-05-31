<template>
  <v-app-bar color="primary">
    <v-spacer></v-spacer>
    <v-btn variant="outlined" @click="goTo('#home')">
      Home
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn variant="outlined" @click="goTo('#services')">
      Services
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn variant="outlined" @click="goTo('#contact-us')">
      Contact Us
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
  
<script>
export default {
  name: 'NavBar',
  methods: {
    goTo(target) {
      this.$vuetify.goTo(target, { duration: 500, easing: "linear" });
    }
  }
}
</script>
  
<style scoped></style>
  