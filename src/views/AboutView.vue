<template>
  <div class="about">
    <HelloAbout/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloAbout from '@/components/HelloAbout.vue'
export default {
  name: 'about-view',
  components: {
    HelloAbout,
  },
  data: ()=>({
  })
}
</script>