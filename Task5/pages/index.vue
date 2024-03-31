<template>
  <div  class="p-64 flex" >
    <div class="shadow-2xl shadow-cyan-300/75 " >
      <!-- Para sa Card Size ko po-->
    <a-card  :bordered="false" style="width: 700px; height: 450px " class="bg-amber-600 ">
  <div class="flex justify-center">
      <img width="300px" height=" 600px" class="m-4 mb-10 "
        alt="example"
        src="~/assets/images/1.png"
      /></div>
   
      <h1 class="font-black text-4xl p-3 text-center text-amber-300">Hi  <a-avatar :size="96">
        <template #icon><img  src="~/assets/images/pictureko.png" /></template>
      </a-avatar> John Rollyver Espinosa Welcome back!</h1>
      
      <div class="flex justify-center"><a-button type="primary" style="width: 200px; height:75px;" class="mx-auto  bg-amber-500 absolute bottom-5 " @click="$router.push('/app/dashboard')" >Login  </a-button>
        {{ route }}
      </div>
    </a-card>
  </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landinglayout' //layout to para kay taguro na landingpage ko
})

const router = useRouter()

</script>

<style>

</style>