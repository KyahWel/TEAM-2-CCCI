<template>
    <!-- Sidebar header section -->
    <a-layout-sider>
      <!-- Row for logo alignment -->
      <a-row type="flex" :gutter="[10, 10]" align="middle" justify="center">
        <!-- Logo image -->
        <img class="logo" src="/assets/images/logo.png" alt="Logo">
      </a-row>
    </a-layout-sider>
  </template>
  
  <script setup>
  // No script setup logic needed for this component
  </script>
  
  <style scoped>
  /* Add scoped styles for the sidebar header */
  .logo {
    width: 100%; /* Full width */
    height: auto; /* Maintain aspect ratio */
    background-color: transparent; /* Remove background color */
  }
  </style>
  