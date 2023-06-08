<template>
  <div class="d-flex align-center flex-column text-center">
    <v-card class="ma-16" elevation="0" width="600" color="secondary">
      <v-card-item>

        <v-card-title>{{
          spanishStatus
        }}</v-card-title>
        <v-btn class="mt-2" @click="sendEmail"><v-icon color="primary" size="xx-large">mdi-email</v-icon></v-btn>
        <v-card-title> info@rocasolida.tech </v-card-title>
        <v-row justify="center" class="ma-4">

          <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4"
            style="font-size: 20px; background-color: white" rounded size="x-large" target="_blank"
            href="https://www.facebook.com/RocaSolidaTech">
            <v-icon color="primary" size="50">
              {{ "mdi-facebook" }}</v-icon></v-btn>
              <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4"
            style="font-size: 20px; background-color: white" rounded size="x-large" target="_blank"
            href="https://wa.me/6514421267">
            <v-icon color="primary" size="50">
              {{ "mdi-whatsapp" }}</v-icon></v-btn>
        </v-row>
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
