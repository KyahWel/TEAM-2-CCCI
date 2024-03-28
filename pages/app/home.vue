<template>
    <div>
      <h1 class="text-black text-lg text-center font-bold">
        Home
      </h1>
    </div>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
  </template>
  
  <script lang="ts" setup>
   
  definePageMeta({
      layout: 'default'
  })
  
  </script>
  
  <style>
  
  </style>