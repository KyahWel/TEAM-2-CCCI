<template>
  <a-layout >
      <Userheader></Userheader>
      <a-layout-content>
        <div class=" w-screen bg-amber-300" style="height:32rem">
         <slot/>
        </div>
      </a-layout-content>
      <AppFooter />
    </a-layout>  

</template>

<script>

</script>

<style>
body::-webkit-scrollbar{
  display: none;
}


</style>