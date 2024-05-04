<template>
    <a-layout-sider class="userside">
        <AppSidebarHeader></AppSidebarHeader>
        <ul class="nav">
            
            <li class="text-white m-10 cursor-pointer flex" @click="router.push('/app/UsersDashboard')">
          <img class="logo-dashboard px-2" src="/public/img/dashboard.png">
          <span >Dashboard</span> <!-- Dashboard navigation links -->
        </li>
       

        <a-divider style="height: 2px; background-color: #000" />
        <li class="text-white m-10 cursor-pointer flex" @click="router.push('/')">
          <img class="logo-lagout" src="/public/img/lagout.png" >
          <span>Logout</span> <!-- Dashboard navigation links -->
        </li>
        </ul>
    </a-layout-sider>
  </template>
    
  <script  setup>
  
  const router = useRouter()
  
  
  
  </script>
  
  <style scoped>
  .nav{
    display: flex;
    flex-direction: column;
  }
  
  
    .logo-dashboard{
      width: 45px;
      height: 30px;
   
    }
  .logo-applicants{
    width: 40px;
      height: 35px;
    
  }
  .logo-lagout{
    width: 35px;
      height: 25px;
    
  }
  .userside{
    background-image: linear-gradient(to right, rgb(20, 148, 52), rgb(56, 92, 200));
  }
  </style>
  
  