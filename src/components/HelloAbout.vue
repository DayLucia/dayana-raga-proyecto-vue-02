<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2 class="V fontTitulos" v-if="mostrarTitulo">Tus Recetas</h2>
            </v-col>
            <v-col cols="12">
                <div v-show="vacio">

                    <h2 class="fontTitulos">No tienes recetas guardadas</h2>
                </div>
            </v-col>
            <v-col><v-btn
                color="#8C0303"
                primary
                @click="irCrear">
                Crear receta
            </v-btn></v-col>
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
    methods: {
        irRecetas: function(){
         this.$router.push("/index#recetas")
    },
    }
}
</script>