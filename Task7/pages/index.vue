<template>
  <div >
    <div class="absolute bottom-0 ">
      <h1 class="text-amber-300 text-6xl font-black ">Welcome</h1>
    </div>
 <div>
  <LoginUser />
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