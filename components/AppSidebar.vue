<template>
    <a-layout-sider>
        <AppSidebarHeader></AppSidebarHeader>
        <ul>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/dashboard')"><DashboardOutlined /> Dashboard</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/applicants')"><IdcardOutlined /> Applicants</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/test')">test</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/')"><LogoutOutlined />Logout</li>
            {{ route }}
        </ul>
    </a-layout-sider>
</template>
  
  <script lang="ts" setup>

  const router = useRouter()


  
  </script>
  
  <style>
  
  </style>