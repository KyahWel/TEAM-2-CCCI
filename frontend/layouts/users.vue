<template>
    <a-layout style="min-height: 100vh;">
      <Usersidebar/>
      <a-layout>
        <AppMainHeader></AppMainHeader>
        <a-layout-content>
          <slot/>
        </a-layout-content>
      </a-layout>
      
    </a-layout>
   
  
  </template>
  
  <script setup>
  import AppMainHeader from '/components/AppMainHeader.vue';
  
  
  </script>
  
  <style>
  
  </style>