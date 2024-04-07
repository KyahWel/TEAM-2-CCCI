<template>
    <div class="bg-[url('/landingbgpic.png')] bg-cover landingpage h-screen flex items-center justify-center w-full p-44 flex-col">
      <div class=" flex flex-col align-middle relative mb-56 items-center justify-center">
        <h1 class="text-5xl font-extrabold title"> JOB.Nestwork</h1> 
        <p class="text-base tagline">Your Getaway to Career Success</p> 
        
      </div>
         
     <div class=" landingcontent flex flex-col items-center justify-center absolute mt-64">
        <img src="/12345.png" class="relative" width="550px">
        <NuxtLink to ="/app" class="absolute ">Proceed to Dashboard</NuxtLink>
     </div>
    </div>
</template>

<script setup>
let router = useRouter()
 let displayDashboard= () => {
    router.push('/app')
 }

</script>

<style >
.title {
   font-size: 90px;
}

.tagline {
   font-size: 35px;
}

</style>