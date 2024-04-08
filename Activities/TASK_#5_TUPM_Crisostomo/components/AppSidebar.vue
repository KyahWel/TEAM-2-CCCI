<template>
  <a-layout-sider style="background-color: #094045;">
      <AppSidebarHeader></AppSidebarHeader>
      <ul class="nav">
          
          <li class="text-white m-10 cursor-pointer" @click="router.push('/app/Dashboard')">
        <img class="logo-dashboard" src="/public/img/dashboard.png" style=" display: flex;
  flex-direction: column;">
        <span >Dashboard</span> <!-- Dashboard navigation links -->
      </li>
      <li class="text-white m-10 cursor-pointer" @click="router.push('/app/applicants')">
        <img class="logo-applicants" src="/public/img/applicants.png">
        <span>Applicants</span> <!-- Dashboard navigation links -->
      </li>
      <li class="text-white m-10 cursor-pointer" @click="router.push('/')">
        <img class="logo-lagout" src="/public/img/lagout.png">
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
    width: 30px;
    height: 30px;
   
  }
.logo-applicants{
  width: 30px;
    height: 30px;
  
}
.logo-lagout{
  width: 20px;
    height: 20px;
  
}
</style>

