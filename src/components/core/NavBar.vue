<template>
  <!-- <v-app-bar color="primary">
    <v-img height="50px" src="@/assets/brick.png" />
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn class="mx-1" variant="outlined" @click="goTo('#home')">
      Home
    </v-btn>
    <v-btn class="mx-1" variant="outlined" @click="goTo('#services')">
      Services
    </v-btn>
    <v-btn class="mx-1" variant="outlined" @click="goTo('#contact-us')">
      Contact Us
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar> -->


  <v-app-bar app color="primary" height="100">
    <v-container>
      <v-row class="d-flex flex-nowrap my-2">

        <v-col class="d-flex align-center justify-center">
          <v-img alt="RS Logo" src="@/assets/brickFB.png" transition="scale-transition" max-height="72" contain />
        </v-col>

        <v-row>
          <v-col class="d-flex align-center justify-end">
            <v-btn @click="sendEmail"><v-icon color="white" size="xx-large">mdi-email</v-icon></v-btn>

          </v-col>
        </v-row>
        <v-spacer/>
        <!-- <v-col>
          <v-sheet class="pa-5" color="transparent">
            <v-switch v-model="spanishSwitch" :label="'Español'" @click="changeLanguage"></v-switch>
          </v-sheet>
        </v-col> -->
      </v-row>
    </v-container>
  </v-app-bar>
</template>
  
<script>
export default {
  name: 'NavBar',
  methods: {
    goTo(target) {
      this.$vuetify.goTo(target, { duration: 500, easing: "linear" });
    },

    sendEmail() {
      window.location.href = 'mailto:info@rocasolida.tech';
    },
  }
}
</script>
  
<style scoped></style>
  