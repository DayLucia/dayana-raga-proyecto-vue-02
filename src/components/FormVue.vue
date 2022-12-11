<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">

                <h2 class="fontTitulos V" id="receta">¡Publica tu receta!</h2>
            </v-col>
        </v-row>
        <div>
            <v-alert
                :value="alert"
                color="error"
                dark
                icon="mdi-home"
                transition="scale-transition"
                >
                {{mensajeAlert}}
            </v-alert>
            <v-alert
                :value="success"
                color="success"
                dark
                icon="mdi-home"
                transition="scale-transition"
                >
                La receta se publicó correctamente.
            </v-alert>
            <v-form v-on:submit.prevent="checkForm" method="get">
                <v-row>
                <v-col cols="6">
                    <v-text-field v-model="autor" label="Autor del plato" placeholder="Autor"></v-text-field>
                    <v-text-field v-model="nReceta" label="Nombre del plato" placeholder="Nombre de la receta"></v-text-field>
                    <v-row>
                        <v-col cols="6">
                            <v-select
                                label="Tipo de plato"
                            ></v-select>
                        </v-col>
                        <v-col cols="6">
                        <v-text-field label="Duración" placeholder="2 horas" v-model="tiempo"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="ingredientes" label="Ingredientes" placeholder="Separar los ingredientes con , (coma)"></v-text-field>
                    <v-textarea v-model="preparacion" rows="4" label="Preparación" placeholder="Separar los parrafos con un salto de linea"></v-textarea>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn color="#AFCC0F"
                    primary
                     v-on:click.prevent="validateForm">Publicar</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
        <v-row class="align-center cont1">
            <v-col cols="6">
        <v-img
        :src="require('../assets/platoTerciario.png')"
        class="my-6"
        contain 
        />
      </v-col>       
      <v-col cols="6">
          <v-row>
              <v-col cols="12">
                  <h2 class="fontTitulos tituloSection">
                      {{publicadoTitle}}
                    </h2>
                </v-col>
                <v-col cols="12">
                    <p class="publicadoText fontTexto">
                        {{publicadoText}}
                    </p>
                    <v-btn
                    color="#8C0303"
                    primary
                    raised
                    class="error"
                    @click="irRecetas"
                    >Mis recetas</v-btn>
                </v-col>
            </v-row>
        </v-col>       
    </v-row>
</v-container>

</template>
<script>
export default {
    name: 'FormVue',
    data: () => ({
        autor: null,
        nReceta: null,
        tiempo: null,
        tipo: 'Almuerzo',
        ingredientes: null,
        preparacion: null,
        contador : 0, //Contador para el id de la receta
        // duracionExtraida: [], //Aqui se guardan los tiempos extraidos de la cadena de texto
        ingredientesExtraidos: [], //separados con ,
        preparacionExtraida: [], //separados con saltos de linea
        tipos: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'],
        // nombreNews: null,
        // emailNews: null,
        alert: false,
        mensajeAlert: '',
        success: false,
        publicadoTitle: '¿Ya publicaste tu receta?',
        publicadoText: 'Mirala ahora en',

    }),

  methods: {
    validateForm: function(e){
        this.alert = false;
        this.success = false;
        this.mensajeAlert= '';
        console.log(e);
        if (!this.autor) {
            this.mensajeAlert += 'El nombre del autor es obligatorio, ';
            this.alert = true;
        }
        if (!this.nReceta) {
            this.mensajeAlert += 'El nombre del plato es obligatorio, ';
            this.alert = true;
        }
        if (!this.tiempo) {
            this.mensajeAlert += 'El tiempo de preparación es obligatorio, ';
            this.alert = true;
        }
        if (!this.ingredientes) {
            this.mensajeAlert += 'Los ingredientes son obligatorios, ';
            this.alert = true;
        }
        if (!this.preparacion) {
            this.mensajeAlert += 'La preparación es obligatoria.';
            this.alert = true;
        }
        if(!this.mensajeAlert){
            this.success = true;
            this.checkForm()
        }
        setTimeout(()=>{
            this.success = false;
            this.alert = false;
        }, 2000);
    },
//     //Recibimos y verificamos los datos
    checkForm: function() {
      if (this.ingredientes !== null) {
        let arrayIngredientes = this.ingredientes.split(",");
          //For para guardar los ingredientes en un array        
        for (var i = 0; i < arrayIngredientes.length; i++) {
          this.ingredientesExtraidos.push(arrayIngredientes[i]);
        } //Fin del for
        
        let arrayPreparacion = this.preparacion.split("\n");
        //For para separar la preparacion en un array
        for (var item = 0; item < arrayPreparacion.length; item++) {
          this.preparacionExtraida.push(arrayPreparacion[item]);
        } //Fin del for
        
        let contador2 = this.contador++;
        //Añadimos la receta
        this.armarReceta(this.autor, this.nReceta, this.tiempo, this.tipo, this.ingredientesExtraidos, this.preparacionExtraida, this.contador)
  
        this.autor = null;
        this.nReceta = null;
        this.tiempo = null;
        // this.tipo = null;
        this.ingredientes = null;
        this.preparacion = null;
        this.contador = contador2 ;
        this.ingredientesExtraidos = [];
        this.preparacionExtraida = [];
        // this.duracionExtraida = [];
      }
    },
    irRecetas: function(){
         this.$router.push("/recetas")
    }, //Metodo de armar los datos del array recetas
    armarReceta: function(nombre, receta, duracion, tipoPlato, ingredientes, preparacion, id) {
      let info = localStorage.getItem('recetas');
      if (info == null) {
        info = [];
      } else {
        info = JSON.parse(info);
      }
      info.push({
        nombre: receta,
        autor: nombre,
        duracion: duracion,
        tipoPlato: tipoPlato,
        ingredientes: ingredientes,
        preparacion: preparacion,
        id : id,
      })
      localStorage.setItem('recetas', JSON.stringify(info))
    },
    //Metodo para resetear newsletter
    resetNews: function() {
      this.nombreNews = null;
      this.emailNews = null;

    },
}}
</script>