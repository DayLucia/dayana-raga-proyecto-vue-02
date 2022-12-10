<template>
  <v-container>
    <v-row class="text-left align-center space-around"> 
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-title>
              {{mainTitle}}
            </v-title>
          </v-col>
          <v-col>
            <v-sub-title>
              {{mainSubT}}
            </v-sub-title>
          </v-col>
        </v-row>
      </v-col>       
      <v-col cols="6">
        <v-img
        :src="require('../assets/mainPlato.png')"
        class="my-6"
        contain 
        />
      </v-col>       
    </v-row>
    <v-row class="text-left align-center"> <!--Section2-->
      <v-col cols="6">
        <v-img
        :src="require('../assets/segundoPlato.png')"
        class="my-6"
        contain 
        />
      </v-col>       
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-title>
              {{secondTitle}}
            </v-title>
          </v-col>
          <v-col cols="12">
            <v-text>
              {{secondText}}
            </v-text>
          </v-col>
          <v-btn
            color="red"
            raised
            class="error"
          >Compartir receta</v-btn>
        </v-row>
      </v-col>       
    </v-row>
    <v-row class="text-center"> <!--Section iconos-->
      <v-col cols="4">
        <v-row class="text-center justify-center">
          <v-col cols="7">
            <v-img 
            :src="require('../assets/pencil.png')"
            />
          </v-col>
          <v-col cols="10" >
            <v-text >
              {{pencilText}}
            </v-text>
          </v-col>
        </v-row>
      </v-col>       
      <v-col cols="4">
        <v-row class="text-center justify-center">
          <v-col cols="7">
            <v-img 
            :src="require('../assets/share.png')"
            />
          </v-col>
          <v-col cols="10" >
            <v-text >
            {{shareText}}
            </v-text>
          </v-col>
        </v-row>
      </v-col>       
      <v-col cols="4">
        <v-row class="text-center justify-center">
          <v-col cols="7">
            <v-img 
            :src="require('../assets/food-fork.png')"
            />
          </v-col>
          <v-col cols="10" >
            <v-text >
              {{foodText}}
            </v-text>
          </v-col>
        </v-row>
      </v-col>
      <v-row class="text-left align-center space-around"
      bg="green"> 
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-text>
              {{asideTitle}}
            </v-text>
          </v-col>
          <v-col cols="12">
            <v-text>
              {{asideSub}}
            </v-text>
          </v-col>
          <v-col cols="12">
            <v-text>
              {{asideText}}
            </v-text>
          </v-col>
          <v-col cols="12" class="space-evenly">
            <v-btn
            color="green
            primary">Play Store</v-btn>
            <v-btn
            color="#ffffff"
            normal>Apple store</v-btn>
          </v-col>
        </v-row>
      </v-col>       
      <v-col cols="6">
        <v-img
        :src="require('../assets/mainPlato.png')"
        class="my-6"
        contain 
        />
      </v-col>       
    </v-row>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      mainTitle: 'Tu plato favorito',
      mainSubT: 'Guarda y comparte tus recetas favoritas en un solo lugar.',
      secondTitle: 'Desayuno, Almuerzo, Cena u Merienda',
      secondText: 'Publica el tipo de plato que más te guste y detalla para que ocasión lo prepararías.',
      pencilText: 'Redacta y publica tus propias recetas',
      shareText: 'Compartelas sin necesidad de descargarlas',
      foodText: '¡Animate a probar nuevas comidas!',
      asideTitle: 'Conoce nuestra App',
      asideSub: 'Y prepara tu propio menu semanal',
      asideText: '¡Asi es! Encuentra las recetas que más se adapten a ti segun tu alimentación diaria',

  })}
</script>