<template>
<!--      
        <div class="grid p-4 fixed top-0 z-50 header">
            <p class="text-5xl font-extrabold justify-self-start"> JOB.Nestwork</p>
            <div class="text-lg justify-self-end"><NuxtLink to="/"><a-button type="primary" danger class="px-7">Log Out</a-button></NuxtLink></div>
        </div>
         -->
<div class="userView">
    <div>
        <slot />
    </div>
        

  </div>  
</template>

<script>
    export default {
        
    }
</script>

<style>
.header {
    background-color: #FAF8ED;
}
</style>