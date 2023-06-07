<template>


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
        <v-spacer />
        <v-col>
          <v-sheet class="pa-5" color="transparent">
            <v-switch v-model="spanishSwitch" :label="'Español'" @click="changeLanguage"></v-switch>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
  
<script>
import { useLanguageStore } from '@/store/language'

export default {
  name: 'NavBar',
  data() {
    return {
      spanishSwitch: true,
    };
  },
  methods: {
    goTo(target) {
      this.$vuetify.goTo(target, { duration: 500, easing: "linear" });
    },

    sendEmail() {
      window.location.href = 'mailto:info@rocasolida.tech';
    },

    changeLanguage() {
      this.spanishSwitch = !this.spanishSwitch;
      this.languageStore.setLanguage(this.spanishSwitch);
    },
  },
  setup() {
    const languageStore = useLanguageStore()

    return {
      languageStore,
    }
  },
}
</script>

  
<style scoped></style>
  