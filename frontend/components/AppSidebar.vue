<template>
    <a-layout-sider :style="{ background: '#04364a' }">
        <AppSidebarHeader></AppSidebarHeader>
        <ul>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/dashboard')"><DashboardOutlined />
                <span style="position:absolute; margin-top:3px; margin-left:10px">Dashboard</span></li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/applicants')"><IdcardOutlined />
                <span style="position:absolute; margin-top:3px; margin-left:10px">Applicants</span></li>
            <hr>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/')"><LogoutOutlined />
                <span style="position:absolute; margin-top:3px; margin-left:10px"> Logout</span></li>
            {{ route }}
        </ul>
    </a-layout-sider>
</template>
  
  <script lang="ts" setup>
  const router = useRouter()
  
  </script>
  
  <style>
  
  </style>