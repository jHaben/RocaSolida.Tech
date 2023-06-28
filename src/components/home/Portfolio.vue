<template>
    <div class="d-flex align-center flex-column text-center">
        <v-card class="ma-2 " max-width="272" max-height="300" color="primary">
            <v-carousel :show-arrows="false" cycle interval="5000">


                <v-carousel-item>
                    <div style="height: 100%;" @click="goToUrl('https://vjtotalservices.com')">
                        <v-sheet color="#29264a" height="100%" min-width="272" class="d-flex flex-column align-center">
                            <h2 class="font-weight-bold text-center mx-2">
                                <span style="color: white;">VJ TOTAL SERVICES</span>
                            </h2>
                            <h4 class="text-center mb-2" style="color: white;">
                                <ul>
                                    <li>Taxes</li>
                                    <li>Seguros</li>
                                    <li>Auditorials</li>
                                    <li>Real Estate</li>
                                </ul>
                            </h4>
                            <v-img width="50%" max-height="150" src="@/assets/vjlogo.png" aspect-ratio="1" contain></v-img>
                        </v-sheet>
                    </div>
                </v-carousel-item>
                <v-carousel-item>
                    <div style="height: 100%;" @click="goToUrl('https://stpaulstents.netlify.app')">
                        <v-sheet color="white" height="100%" min-width="272" class="d-flex flex-column align-center">
                            <v-img width="75%" max-height="175" src="@/assets/tent.png" aspect-ratio="1" contain></v-img>

                            <h2 class="font-weight-bold text-center mx-2">
                                <span style="color: #be3144;">St. Paul's Tents and More</span>
                            </h2>
                        </v-sheet>
                    </div>
                </v-carousel-item>
                <v-carousel-item>
                    <div style="height: 100%;" @click="goToUrl('https://recetamex.com')">
                        <v-sheet color="#efbf1c" height="100%" min-width="272" class="d-flex flex-column align-center">
                            <v-img width="75%" max-height="175" src="@/assets/taco.jpg" aspect-ratio="1" contain></v-img>

                            <h2 class="font-weight-bold text-center mx-2">
                                <span style="color: #73cb2b; ">Daily Mexican Recipe</span>
                            </h2>
                        </v-sheet>
                    </div>
                </v-carousel-item>

                <v-carousel-item>
                    <div style="height: 100%;" @click="goToUrl('https://rocasolida.tech')">
                        <v-sheet color="primary" height="100%" min-width="272"
                            class="d-flex flex-column align-center justify-center">
                            <v-btn color="secondary">
                                <h2 class="font-weight-bold text-center">
                                    <span>ADVERTISE HERE</span>
                                </h2>
                            </v-btn>
                        </v-sheet>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </div>
</template>
  
<script setup>

// methods
const goToUrl = (url) => {
    window.open(url);
};
</script>
  
  
  
<style scoped>
/* Add your styles here */
</style>
  