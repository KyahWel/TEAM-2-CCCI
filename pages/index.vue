<template>
  <div class="Landpage">
    <a-button @click="router.push('/app/dashboard')" class="a-button" type="primary"> LETS GO</a-button>
  </div> 

</template>

<script lang="ts" setup>
definePageMeta({
    layout: "landingpage"
})
const router=useRouter()
</script>

<style>
.a-button{
  position: absolute;
    bottom: 120px; 
    left: 90px;
    padding: 10px 90px 90px 90px;
    background-color: #06B6D4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 50px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
</style>