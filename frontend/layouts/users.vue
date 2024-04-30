<template>
    <!-- Main layout structure -->
    <a-layout style="min-height: 100vh;">
      <!-- Sidebar component -->
      <SidebarUsers/>
      <!-- Main content layout -->
      <a-layout>
        <!-- Main header component -->
        <AppMainHeader></AppMainHeader>
        <!-- Content slot -->
        <a-layout-content>
          <slot/>
        </a-layout-content>
        <!-- Footer component -->
        <AppFooter/>
      </a-layout>
    </a-layout>
  </template>
  
  <script setup>
  // Importing the AppMainHeader component
  </script>
  
  <style>
  /* No specific styles defined in the component */
  </style>
  