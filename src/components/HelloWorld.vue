<template>
  <v-container class="fill-height">
    <v-responsive class=" align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.png" />
     
      <div class="text-body-2 font-weight-light mb-n1"> </div>

      
      <h1 class="title  font-weight-bold my-1">
        <span style="color: #07689F;">ROCA</span>
        <span style="color: #A2D5F2;">SOLIDA</span>
        <span style="color: #07689F;">.TECH</span>
      </h1>
      <h2 class="pulse">Coming Soon</h2>

    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pulse {
  animation: pulse 2s infinite;
}



.title {
  font-size: 3.5em;
}

@media (max-width: 600px) {
  .title {
    font-size: 2em;
  }
}
</style>