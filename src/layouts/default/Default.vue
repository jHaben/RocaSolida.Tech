<template>
    <v-app>
        <v-sheet height="100px" />
        <default-bar />
        <default-banner />
        <default-view />
        <default-footer />
    </v-app>
</template>
  
<script setup>
import DefaultBar from '@/components/core/NavBar.vue'
import DefaultBanner from '@/components/core/Banner.vue'
import DefaultView from './View.vue'
import DefaultFooter from '@/components/core/Footer.vue'

</script>