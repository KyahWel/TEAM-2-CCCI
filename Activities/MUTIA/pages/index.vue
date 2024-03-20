<template>

  <div>
    <Home/>
    <ContactBtn/>
  
   <div class="container">
    <About/>
    <Academic/>
    <Projects/>
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

import Home from '/components/Home.vue'
import About from '/components/About.vue'
import Academic from '/components/Academic.vue'
import Projects from '/components/Projects.vue'

export default {
  components: {
    
    Home,
    About,
    Academic,
    Projects
  }
}
</script>