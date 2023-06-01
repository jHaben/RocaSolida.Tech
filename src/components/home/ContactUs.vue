<template>
  <div class="d-flex align-center flex-column text-center">
    <v-card class="ma-16" elevation="0" width="400" color="secondary">
      <v-card-item>
        <v-btn @click="sendEmail"><v-icon color="primary" size="xx-large">mdi-email</v-icon></v-btn>
        <v-card-title> info@rocasolida.tech </v-card-title>
        <v-card-title> St. Paul, MN </v-card-title>
      </v-card-item>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      window.location.href = 'mailto:info@rocasolida.tech';
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

  
