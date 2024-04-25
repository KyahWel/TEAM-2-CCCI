<template>
    <!-- Sidebar section of the layout -->
      <a-layout-sider 
        class="sidebar" 
        :style="{ overflow: 'auto', 
        height: '100vh', 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        bottom: 0 }" >
  
        <AppSidebarHeader/> <!-- Header section of the sidebar -->
  
        <!-- Navigation links section of the sidebar -->
        <ul class="nav-links"> 
          <li class="nav-link" @click="router.push('/app/userHome')">
            <img class="logo-dashboard" src="/assets/images/dashboard.png">
            <span>Dashboard</span> <!-- Dashboard navigation links -->
          </li>

          <li class="nav-link" @click="router.push('/app/userHome')">
            <img class="logo-applicants" src="/assets/images/admin.png">
            <span>Profile</span><!-- Application navigation links -->
          </li>
  
         
  
          <a-divider style="height: 2px; background-color: #fff" />
          
          <li class="nav-link" @click="router.push('/')">
            <LogoutOutlined />
            <span>Logout</span> <!-- Logout navigation links -->
          </li>
  
        </ul>
      </a-layout-sider>
  </template>
    
    <script setup>
    const router = useRouter();
    </script>
    
    <style scoped>
    
    .sidebar {
      background-color: rgb(25, 16, 85);
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    img{
      width: 20px;
    }
    
    .nav-links {
      display: flex;
      flex-direction: column;
    }
    
    .nav-link {
      padding: 20px 50px;
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      
    }
    
    .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    
    .nav-link span {
      margin-left: 10px;
    }
    </style>