<template>
  
    <a-layout-sider   breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint" :style="sidebarstyle"  >
        <AppSidebarHeader></AppSidebarHeader>
       
    <a-menu mode="vertical"  :style="menustyle" >
        
    <a-menu-item :style="menuitemstyle" class="text-white m-10 cursor-pointer "><pie-chart-outlined /> <span ><nuxt-link to="/app/dashboard">Dashboard</nuxt-link></span></a-menu-item>
    <a-menu-item :style="menuitemstyle" class="text-white m-10 cursor-pointer " ><desktop-outlined /> <span> <nuxt-link to="/app/users">Users</nuxt-link></span></a-menu-item>
    <a-menu-item :style="menuitemstyle" class="text-white m-10 cursor-pointer  absolute bottom-0 left-0" > <LogoutOutlined /><span><nuxt-link to="/">Logout</nuxt-link></span></a-menu-item>
 
  </a-menu>

       
      
    </a-layout-sider>

</template>
  
  <script lang="ts" setup>
import { ref } from 'vue';  
const collapsed = ref<boolean>(false);


  const sidebarstyle: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #b45309',
  }

  const menuitemstyle: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #b45309',
    color: 'white'
  }

  const menustyle: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #b45309',
  }
  
  </script>
  
  <style>
  .ant-layout-sider-trigger {
  background-color: #b45309; /* Change to your desired color */
  color: #fff; /* Text color */
}

/* Hover styles for the collapsible button */
.ant-layout-sider-trigger:hover {
  background-color: #b45309; /* Change to your desired hover color */
}

/* Active/focused styles for the collapsible button */
.ant-layout-sider-trigger:focus {
  background-color:#b45309; /* Change to your desired active/focus color */
}
  </style>