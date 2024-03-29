<template>
    <a-layout-sider>
        <AppSidebarHeader></AppSidebarHeader>
        <ul>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/dashboard')">Dashboard</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/applicants')">Applicants</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/')">Logout</li>
            {{ route }}
        </ul>
    </a-layout-sider>
</template>
  
  <script lang="ts" setup>

  const router = useRouter()


  
  </script>
  
  <style>
  
  </style>