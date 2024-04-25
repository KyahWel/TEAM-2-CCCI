<template>
 
        <div class="form-container">
          <h2 class="form-title">WELCOME!</h2>
         <Login/>
      </div>
   

</template>

<script setup>
 

definePageMeta({
  layout: 'landing'
})

</script>

<!-- Define the styles for the component -->
<style scoped>                                                                


.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
 
}


.form-title{
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: bold;
}

</style>