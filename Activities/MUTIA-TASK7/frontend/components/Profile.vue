<template>
  <!-- Container for the welcome message and user profile picture -->
  <a-card
    style="
      height: 95%;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    "
  >
  <!-- Contains the title and description of the card -->
  <a-card-meta 
  :title="`Welcome, ${adminStore.admin.firstName} ${adminStore.admin.lastName}!`"
  style="
    margin-left: 7px;
    text-align: left;
    justify-content: center;
    align-items: center;

    "
>
  <!-- container for the user profile picture -->
  <!-- Run npm serve -p 8080 to appear the img -->
  <template #avatar>
      <a-avatar :size="84" src="http://localhost:8080/assets/images/profile.png" /> 
      </template>
    </a-card-meta>
  </a-card>
</template>
  
  <script setup>
  import { useAdminStore } from '../stores/admin'

  const adminStore = useAdminStore()
 
  </script>

  <style scoped>
  .ant-card-meta:title{
    font-weight: bolder;
  }
  </style>

