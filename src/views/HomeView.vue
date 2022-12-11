<template>
  <div class="home">
    <HelloWorld/>
    <FormVue/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FormVue from '@/components/FormVue.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FormVue,
  }
}
</script>
