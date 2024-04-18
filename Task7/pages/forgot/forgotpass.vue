<template>
    <div>
      kalimutan mo na ang lahat
      <a-button @click="$router.push('/')"> Change </a-button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const router = useRouter()
  definePageMeta({
    layout: 'landinglayout' //layout to para kay taguro na landingpage ko
  })
  </script>
  
  <style>
  
  </style>