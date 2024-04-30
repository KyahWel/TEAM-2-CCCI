<template>
    <!-- Sidebar section -->
    <a-layout-sider class="sidebar">
      <!-- Sidebar header component -->
      <AppSidebarHeader></AppSidebarHeader>
  
      <!-- Navigation links -->
      <ul>
        <!-- Home link -->
        <li class="sidebar-link" @click="router.push('/app/usersPage')">
          <DashboardOutlined /> <span>Dashboard</span>
        </li>

        <!-- Log Out link -->
        <li class="sidebar-link" @click="router.push('/')">
          <LogoutOutlined /> <span>Log Out</span>
        </li>
      </ul>
      <!-- Display current route for debugging -->
      {{ route }}
      
    </a-layout-sider>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { HomeOutlined, LogoutOutlined } from '@ant-design/icons-vue';
  
  const router = useRouter();
  </script>
  
  <style scoped>
  /* Add custom styles for the sidebar */
  .sidebar {
    background-color: #181D31; /* Dark background color */
    padding: 10px; /* Padding for the sidebar content */
    text-align: center; /* Align text to center */
  }
  
  .sidebar ul {
    list-style-type: none; /* Remove default list styles */
    padding: 0; /* Remove default padding */
  }
  
  .sidebar-link {
    margin: 25px 0; /* Adjust margin for navigation links */
    cursor: pointer; /* Change cursor to pointer */
    font-family: 'Montserrat', sans-serif; 
    font-size: 18px; /* Adjust font size */
    color: #ffffff; /* Text color */
    display: flex; /* Set display to flex */
    align-items: center; /* Align items vertically */
  }
  
  .sidebar-link span {
    margin-left: 18px; /* Margin to the text */
  }
  
  .sidebar-link:hover {
    color: #7fbfff; /* Text color on hover */
  }
  </style>
  