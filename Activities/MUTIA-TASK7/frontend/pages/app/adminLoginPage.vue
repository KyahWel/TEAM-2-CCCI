<template>
    <div class="form-container">
        <h2 class="form-title">WELCOME, ADMIN!</h2>
       <AdminLogin/>
    </div>

</template>

<script setup>
definePageMeta({
layout: 'landing'
})


</script>

<style scoped>                                                                

.form-container {
  display: flex;
  padding: 131px;
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