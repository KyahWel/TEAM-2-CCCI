<template>
  <div class="landing-layout">
    
        <slot/>
  </div>
</template>
 
<script setup>
definePageMeta({
  layout: 'landing'
})
</script>
 
 
<style scoped>                                                                
.landing-layout {
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vh;
  
  justify-content: center;
  background-image: url('/assets/images/bg44.png');
  background-repeat: no-repeat;
  background-size: 100% 120%;
}
 
img{
  width: 170px;
  padding-bottom: 10px;
}
 
</style>
