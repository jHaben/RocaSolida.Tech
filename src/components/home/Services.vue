<template>
  <div class="d-flex align-center flex-column text-center">


    <v-card class="ma-2" elevation="8" width="400" color="primary">
      <v-card-item>
        <v-icon size="50">mdi-laptop</v-icon>
        <v-card-title> {{ spanishStatus.webPages }} </v-card-title>
      </v-card-item>
    </v-card>

    <v-card class="ma-2" elevation="8" width="400" color="primary">
      <v-card-item>
        <v-icon size="50">mdi-web</v-icon>
        <v-card-title>
          {{ spanishStatus.domain }}</v-card-title>
        <v-card-title> </v-card-title>
      </v-card-item>
    </v-card>

    <v-card class="ma-2" elevation="8" width="400" color="primary">
      <v-card-item>
        <v-icon size="50">mdi-cellphone</v-icon>
        <v-card-title> {{ spanishStatus.mobile }}</v-card-title>
      </v-card-item>
    </v-card>


  </div>
</template>
  

<script setup>
import { useLanguageStore } from '@/store/language'
import { computed, ref } from 'vue'



const languageStore = useLanguageStore()

const english = ref({ webPages: "Custom web pages", domain: "Domain and web hosting assistance", mobile: "Mobile friendly sites" })
const spanish = ref({ webPages: "Página de internet personalizada", domain: "dominio y hosting", mobile: "Compatible con celular" })

const spanishStatus = computed(() => languageStore.getLanguage ? spanish.value : english.value)
</script>
  
<style scoped>
/* Add your styles here */
</style>
  