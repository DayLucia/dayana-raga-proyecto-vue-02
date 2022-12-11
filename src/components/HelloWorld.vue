<template>
  <v-container class="flex-wrap  align-center">
    <v-row class="text-left space-around cont1"> 
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <h1 class="tituloMain fontTitulos">
              {{mainTitle}}
            </h1>
          </v-col>
          <v-col>
            <p class="textoMain">
              {{mainSubT}}
            </p>
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
    <v-row class="text-left align-center cont1"> <!--Section2-->
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
            <h2 class="fontTitulos tituloSection">
              {{secondTitle}}
            </h2>
          </v-col>
          <v-col cols="12">
            <p class="fontTexto">
              {{secondText}}
            </p>
          </v-col>
          <v-btn
            color="#8C0303"
            raised
            class="btn primary"
            href="#receta"
          >Compartir receta</v-btn>
        </v-row>
      </v-col>       
    </v-row>
    <v-row class="text-center cont2"> <!--Section iconos-->
      <v-col cols="4">
        <v-row class="text-center justify-center">
          <v-col cols="7">
            <v-img 
            :src="require('../assets/pencil.png')"
            />
          </v-col>
          <v-col cols="10" >
            <p >
              {{pencilText}}
            </p>
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
            <p>
            {{shareText}}
            </p>
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
            <p >
              {{foodText}}
            </p>
          </v-col>
        </v-row>
      </v-col>
    <v-row class="text-left cont1 align-center cont3 space-around"
      bg="green"> 
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <h2 class="fontTitulos A">
              {{asideTitle}}
            </h2>
          </v-col>
          <v-col cols="12">
            <h3 class="tituloChico">
              {{asideSub}}
            </h3>
          </v-col>
          <v-col cols="12">
            <p class="fontTexto">
              {{asideText}}
            </p>
          </v-col>
          <v-col cols="12" class="d-flex space-evenly">
            <v-btn
            color="#F2B705"
            primary>Play Store</v-btn>
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
    <v-row>

        
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

      alert: false,

  })}
</script>