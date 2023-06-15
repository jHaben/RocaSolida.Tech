<template>
  <v-app-bar app color="primary" height="100">
    <v-container>
      <v-row class="d-flex flex-nowrap my-2">

        <v-col cols="3"  sm="4" class="d-flex mt-6">
          <v-img alt="Roca Solida Logo" src="@/assets/brickFB.png" transition="scale-transition" max-height="60" contain />
        </v-col>

        <v-col cols="2" sm="4" class="d-flex align-center  justify-center ">
          <v-btn @click="sendEmail"><v-icon color="white" size="xx-large">mdi-email</v-icon></v-btn>
        </v-col>

        <v-col cols="3" sm="4" class="d-flex align-center  justify-center mt-6">
          <v-switch v-model="spanishSwitch" :label="'Español'" @click="changeLanguage"></v-switch>
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

  
<style >
div.v-input__control>div {
  flex-direction: column;

}

div>label {
  justify-content: center;
  
}

#app > div > div > header > div > div > div > div.v-col-sm-4.v-col-3.d-flex.align-center.justify-center.mt-6 > div > div.v-input__control > div > label {
  font-size: 14px;
}

</style>
  