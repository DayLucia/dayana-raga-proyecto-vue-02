<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div  v-if="mostrarTitulo">
                    <h2 class=" fontTitulos verde">Tus Recetas</h2>
                </div>
            </v-col>
            <div v-show="vacio">
            <v-col cols="12">
                    <h2 class="fontTitulos">No tienes recetas guardadas</h2>
                </v-col>
                <v-col><v-btn
                    color="#8C0303"
                    class="primary"
                    @click="irRecetas">
                    Crear receta
                </v-btn></v-col>
            </div>
        </v-row>
        <v-row class="flex-c">
            <div v-for="(receta, index) in recetas" v-bind:key="index"> 
            <v-col cols="12">
                    <v-card
                    elevation="6"
                    outlined
                    max-width="390"
                    >
                        <v-card-title class="titulo-card fontTitulos">{{receta.nombre}}</v-card-title>
                        <v-card-text class="texto-card">
                            <v-col>
                                <v-icon color="#dfdcdc">mdi-clock</v-icon><span>Duración : {{receta.duracion}}h.</span>
                            </v-col>
                            <v-col>
                                <v-icon color="#dfdcdc">mdi-food</v-icon><span>Tipo de Plato : {{receta.tipoPlato}}.</span>
                            </v-col>
                            <v-col>
                                <v-icon color="#dfdcdc">mdi-account</v-icon><span>Autor : {{receta.autor}}.</span>
                            </v-col>
                            
                        </v-card-text>
                        <v-card-actions class="btns-card">
                            <v-col cols="auto">
                                <v-dialog
                                transition="dialog-top-transition"
                            max-width="600"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="#f3b705"
                                v-bind="attrs"
                                v-on="on"
                                class="primary"
                            >Ver receta</v-btn>
                            </template>
                            <template v-slot:default="dialog">
                            <v-card>
                                <v-toolbar
                                color="#f3b705"
                                dark
                                class="fonTitulos titulo-card"
                                >{{receta.nombre}}</v-toolbar>
                                <v-card-text>
                                <div class="text-h2 pa-12">Ingredientes:</div>
                                <div v-for="ingrediente in receta.ingredientes">
                                    <v-col><span>{{ingrediente}}</span></v-col>
                                </div>
                                <div class="text-h2 pa-12">Preparación:</div>
                                <div v-for="pasos in receta.preparacion">
                                    <v-col><span>{{pasos}}</span></v-col>
                                </div>
                            </v-card-text>
                                <v-card-actions class="justify-end">
                                <v-btn
                                    text
                                    @click="dialog.value = false"
                                    >Cerrar</v-btn>
                                </v-card-actions>
                            </v-card>
                            </template>
                        </v-dialog>
                    </v-col>
                            <v-btn icon @click="btnDelete(index, recetas)"><v-icon color="#8c0303">mdi-delete</v-icon></v-btn> 
                        </v-card-actions>
                    </v-card>
                </v-col>
            </div>
        </v-row>
    </v-container>
</template>



<script>
  export default {
    name: 'HelloAbout',
    data: () => ({
        mostrarTitulo: false,
      vacio: true,
      recetas: [],
      mostrarModal: false,
      modalId: null,

    }),
    created: function () {
      this.getReceta();
    },
    methods: {
        irRecetas: function(){
         this.$router.push("/#receta")
    
        },
        getReceta: function(){
        // alert('aparezco');
  
        if (localStorage.recetas) {
            this.vacio = false;
            this.mostrarTitulo = true;
            let info = localStorage.getItem('recetas');
            let info2 = JSON.parse(info);
            info2.forEach(receta => {
                this.recetas.push(receta);
            });
            console.log(info)
        }
        else{
          // true si no hay nada recetas
          if(this.recetas.length == 0){
            this.vacio = true;
          }
          }
        }
      },
      //BOTON BORRAR
      btnDelete: function (locacion, array) {
        array.splice(locacion, 1);
        this.saveRecetas()
      },
      //ACTUALIZAR LOCALSTORAGE
      saveRecetas: function() {
        const parsed = JSON.stringify(this.recetas);
        localStorage.setItem('recetas', parsed);
      },
}

</script>