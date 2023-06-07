<template>
  <div class="d-flex align-center flex-column text-center">
    <v-card class="ma-16" elevation="0" width="600" color="secondary">
      <v-card-item>

        <v-card-title>{{
          spanishStatus
        }}</v-card-title>
        <v-btn @click="sendEmail"><v-icon color="primary" size="xx-large">mdi-email</v-icon></v-btn>
        <v-card-title> info@rocasolida.tech </v-card-title>
        <v-card-title> St. Paul, MN </v-card-title>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
import { useLanguageStore } from '@/store/language'
import { computed, ref } from 'vue'

function sendEmail() {
  window.location.href = 'mailto:info@rocasolida.tech';
}

const languageStore = useLanguageStore()

const english = ref("Stay in Touch")
const spanish = ref("Visítanos")

const spanishStatus = computed(() => languageStore.getLanguage ? spanish.value : english.value)
</script>




<style scoped>
/* Add your styles here */
</style>

  
