<template>
  <a-layout style="min-height: 100vh;">
    <AppSidebar/>
    <a-layout>
      <AppMainHeader></AppMainHeader>
      <a-layout-content class="bg-gradient-to-r from-lime-50 to-teal-200">
        <slot/>
      </a-layout-content>
      <AppFooter></AppFooter>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import AppMainHeader from '~/components/AppMainHeader.vue';


</script>

<style>

</style>