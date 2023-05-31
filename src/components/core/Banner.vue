<template>
  <v-container class="fill-height">
    <v-responsive class=" align-top-center text-center fill-height">




      <div class="pyramid-container">
        <v-img height="300" width="300" src="@/assets/pyramid.png" alt="Pyramid of 5 bricks" />
        <div class="brick" @animationend="changeImage">
          <v-img :src="brickImage" :class="{ 'brick-rotated': isImageChanged }" height="300" alt="Floating brick" />
        </div>

      </div>



      <h2>Juntos construimos sobre 

      </h2>

      <h1 class="title  font-weight-bold my-1">
        <span style="color: #07689F;">ROCA</span>
        <span style="color: #A2D5F2;">SOLIDA</span>
        <span style="color: #07689F;">.TECH</span>
      </h1>

    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import brick from '@/assets/brick.png';
import brick2 from '@/assets/brick2.png';

let isImageChanged = ref(false);

let brickImage = ref(brick);

function changeImage() {
  brickImage.value = brick2;
  isImageChanged.value = true;
}
</script>
<style scoped>
.pyramid-container {
  position: relative;
  width: 300px;
  /* match the width of your pyramid image */
  height: 300px;
  /* match the height of your pyramid image */
  margin: 0 auto;
  /* center the container */

}

.pyramid {
  width: 100%;
  height: auto;
}

.brick {
  position: absolute;
  top: 0px;
  animation: rotate 2s linear;

}

@keyframes rotate {
  0% {
    transform: scale(1.2) rotateY(0deg);
  }

  5% {
    transform: scale(1.2) rotateY(-360deg);
  }

  25% {
    transform: scale(1.18) rotateY(-500deg);
  }

  50% {
    transform: scale(1.16) rotateY(-640deg);
  }

  75% {
    transform: scale(1.1) rotateY(-1000deg);
  }

  100% {
    transform: scale(1) rotateY(-1700deg);

  }
}

.brick-rotated {
  animation: rotate-in .5s linear;
}

@keyframes rotate-in {
  0% {
    transform: scale(1.1) rotateY(-1000deg);
  }

  80% {
    transform: scale(1) rotateY(-3600deg);
  }

  100% {
    transform: rotateY(0deg);

  }
}

.title {
  font-size: 3.5em;
}

@media (max-width: 600px) {
  .title {
    font-size: 2em;
  }
}</style>