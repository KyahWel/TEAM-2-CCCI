<template>
    <a-layout-sider>
        <AppSidebarHeader></AppSidebarHeader>
        <ul>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/home')">Home</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/about')">About</li>
            <li class="text-white m-10 cursor-pointer" @click="router.push('/app/home')">Contact</li>
            {{ route }}
        </ul>
    </a-layout-sider>
</template>
  
  <script lang="ts" setup>

  const router = useRouter()


  
  </script>
  
  <style>
  
  </style>