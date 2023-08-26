<template>
  <div class="d-flex align-center flex-column text-center">
    <v-card class="ma-16" elevation="0"  color="secondary">
      <v-card-item>
        <!-- <div id="rumble_v2u206c"></div> -->
        <v-card-title>{{
          spanishStatus
        }}</v-card-title>
        <v-btn class="mt-2" @click="sendEmail"><v-icon color="primary" size="xx-large">mdi-email</v-icon></v-btn>
        <v-card-title> info@rocasolida.tech </v-card-title>
        <v-row justify="center" class="ma-4">
          <!-- <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4" style="font-size: 20px; background-color: white"
            rounded size="x-large" target="_blank" href="https://twitter.com/rocaSolidaTech">
            <v-icon color="primary" size="50">
              {{ "mdi-twitter" }}</v-icon></v-btn> -->

          <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4" style="font-size: 20px; background-color: white"
            rounded size="x-large" target="_blank" href="https://wa.me/6514421267">
            <v-icon color="primary" size="50">
              {{ "mdi-whatsapp" }}</v-icon></v-btn>
          <!-- <v-btn elevation="2" icon outlined class="emailBtn ma-2 text4" style="font-size: 20px; background-color: white"
            rounded size="x-large" target="_blank" href="https://www.facebook.com/RocaSolidaTech">
            <v-icon color="primary" size="50">
              {{ "mdi-facebook" }}</v-icon></v-btn> -->
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

!function (r, u, m, b, l, e) { r._Rumble = b, r[b] || (r[b] = function () { (r[b]._ = r[b]._ || []).push(arguments); if (r[b]._.length == 1) { l = u.createElement(m), e = u.getElementsByTagName(m)[0], l.async = 1, l.src = "https://rumble.com/embedJS/u28fvq4" + (arguments[1].video ? '.' + arguments[1].video : '') + "/?url=" + encodeURIComponent(location.href) + "&args=" + encodeURIComponent(JSON.stringify([].slice.apply(arguments))), e.parentNode.insertBefore(l, e) } }) }(window, document, "script", "Rumble");


Rumble("play", { "video": "v2u206c", "div": "rumble_v2u206c" });
</script>



<style scoped>
/* Add your styles here */
</style>
