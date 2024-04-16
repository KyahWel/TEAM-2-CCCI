<template>
  <a-layout style="min-height: 100vh;"  >
    <AppSidebar/>
    <a-layout >
      <AppMainHeader></AppMainHeader>
      <a-layout-content :style="contentstyle">
        <slot/>
      </a-layout-content>
      <AppFooter />
    </a-layout>
    
    
  </a-layout>
 

</template>

<script lang="ts" setup>
import AppMainHeader from '~/components/AppMainHeader.vue';
const contentstyle: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #fffbeb',
  }

</script>

<style>

</style>