<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">

                <h2 class="fontTitulos">¡Publica tu receta!</h2>
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
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    
          Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-alert>
        <v-form v-on:submit.prevent="checkForm" method="get">
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="autor" label="Autor del plato" placeholder="Autor"></v-text-field>
                    <v-text-field v-model="nReceta" label="Nombre del plato" placeholder="Nombre de la receta"></v-text-field>
                    <v-row>
                        <v-col cols="6">
                            <v-select
                                :tipos="items"
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
                    <v-btn color="green primary" v-on:click="!alert">Publicar</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
    </v-container>

</template>
<script>
export default {
    name: 'FormVue',
    data: () => ({
        alert: false,
        autor: null,
        nReceta: null,
        tiempo: null,
        tipo: 'Almuerzo',
        ingredientes: null,
        preparacion: null,
        // contador : 0, //Contador para el id de la receta
        // duracionExtraida: [], //Aqui se guardan los tiempos extraidos de la cadena de texto
        // ingredientesExtraidos: [], //separados con ,
        // preparacionExtraida: [], //separados con saltos de linea
        tipos: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'],
        // nombreNews: null,
        // emailNews: null,
    }),
  
  /*
  
    `*/

//   methods: {
//     //Recibimos y verificamos los datos
//     checkForm: function() {
//       if (this.ingredientes !== null) {
//         arrayIngredientes = this.ingredientes.split(",");
//           //For para guardar los ingredientes en un array        
//         for (var i = 0; i < arrayIngredientes.length; i++) {
//           this.ingredientesExtraidos.push(arrayIngredientes[i]);
//         } //Fin del for
        
//         arrayPreparacion = this.preparacion.split("\\n");
//         //For para separar la preparacion en un array
//         for (var i = 0; i < arrayPreparacion.length; i++) {
//           this.preparacionExtraida.push(arrayPreparacion[i]);
//         } //Fin del for
        
//         this.contador++;
//         //Añadimos la receta
//         this.armarReceta(this.autor, this.nReceta, this.tiempo, this.tipo, this.ingredientesExtraidos, this.preparacionExtraida, this.contador)
  
//         this.autor = null;
//         this.nReceta = null;
//         this.tiempo = null;
//         this.tipo = null;
//         this.ingredientes = null;
//         this.preparacion = null;
//         this.contador = this.contador 
//         this.ingredientesExtraidos = [];
//         this.preparacionExtraida = [];
//         // this.duracionExtraida = [];
//       }
//     },
//     //Metodo de armar los datos del array recetas
//     armarReceta: function(nombre, receta, duracion, tipoPlato, ingredientes, preparacion, id) {
//       info = localStorage.getItem('recetas');
//       if (info == null) {
//         info = [];
//       } else {
//         info = JSON.parse(info);
//       }
//       info.push({
//         nombre: receta,
//         autor: nombre,
//         duracion: duracion,
//         tipoPlato: tipoPlato,
//         ingredientes: ingredientes,
//         preparacion: preparacion,
//         id : id,
//       })
//       localStorage.setItem('recetas', JSON.stringify(info))
//     },
//     //Metodo para resetear newsletter
//     resetNews: function() {
//       this.nombreNews = null;
//       this.emailNews = null;

//     },
}
</script>