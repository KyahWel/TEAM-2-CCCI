<template>
    <div class="p-10">
       <Dashboardcard />
    </div>
    <div class="p-10 flex justify-between">
        <ClientOnly >
            <Pieapexchart />
        </ClientOnly>
       
        <Calendar />
    
         
    </div>
    <tabledash />
  </template>
  
  <script lang="ts" setup>
 
  definePageMeta({
      layout: 'default'
  })
  
  </script>
  
  <style>
  
  </style>