<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <AppSidebarHeader></AppSidebarHeader>

       
        <ul ">
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/dashboard')" > <pie-chart-outlined /> <span>Dashboard</span></li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/users')" ><desktop-outlined /> <span>Users</span></li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/')" ><PoweroffOutlined /> <span>Logout</span></li>
            
            {{ route }}
        </ul>
    </a-layout-sider>
</template>
  
  <script lang="ts" setup>

  const router = useRouter()


  
  </script>
  
  <style>
  
  </style>