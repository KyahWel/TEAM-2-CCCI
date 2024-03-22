<template>

  <div>
    <home/>
    <ContactBtn/>
  
   <div class="container">
    <about/>
    <academic/>
    <projects/>
   </div>
   
</div>

</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
</style>


<script>

import home from '/pages/home.vue'
import about from '/pages/about.vue'
import academic from '/pages/academic.vue'
import projects from '/pages/projects.vue'

export default {
  components: {
    
    home,
    about,
    academic,
    projects,
  }
}
</script>