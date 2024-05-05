<template>
  <a-layout >
      <Userheader></Userheader>
      <a-layout-content>
        <div style="min-height: 85vh ">
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