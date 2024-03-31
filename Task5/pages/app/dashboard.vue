<template>
    <div class="p-10">
       <Dashboardcard />
    </div>
    <div class="p-10">
        <ClientOnly >
            <Pieapexchart />
        </ClientOnly>
     
    </div>
  </template>
  
  <script lang="ts" setup>
  const { data, pending, error, status, refresh } = await useFetch('https://dummyjson.com/users')
  definePageMeta({
      layout: 'default'
  })
  
  </script>
  
  <style>
  
  </style>