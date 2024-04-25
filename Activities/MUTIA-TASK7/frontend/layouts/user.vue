<template>
    <a-layout style="min-height: 100vh">
      
        <UserSidebar/>         <!-- Call function to display the sidebar -->
      
      <a-layout :style="{ marginLeft: '200px' }">
        
        <AppMainHeader/>      <!-- Call function to display the Main Header -->
        
        <a-layout-content :style="{ marginTop: '70px', background:'#a9e3ed77' }" >
          
          <slot/>             
        </a-layout-content>
        
        <AppFooter/>          <!-- Call function to display the footer -->
      </a-layout>
      
    </a-layout>
  </template>
  
  <script setup>
  
  
  
  </script>
  
  <style>
  
  </style>