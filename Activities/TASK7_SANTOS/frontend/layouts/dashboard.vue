<template>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="light" class="animate__animated animate__fadeInLeft">
        <div class="flex items-center">
          <img src="/public/pathFinder.png" class="w-16 m-2"/>
          <h3 v-if="!collapsed" class="font-bold italic text-lg">PathFinder</h3>
        </div>

        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="1">
            <dashboard-outlined />
            <NuxtLink to="/app">
              <span v-if="!collapsed"> Dashboard</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="2">
            <user-outlined />
            <NuxtLink to="/app/applicants">
              <span v-if="!collapsed"> Applicants</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="3">
            <logout-outlined />
            <NuxtLink to="/">
              <span v-if="!collapsed"> Logout</span>
            </NuxtLink>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" class="flex items-center justify-start animate__animated animate__fadeInRight">
          <menu-unfold-outlined v-if="collapsed" class="px-3 trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="px-3 trigger" @click="() => (collapsed = !collapsed)" />  
        <h3 class="px-3">Dashboard</h3>
        </a-layout-header>

        <a-layout-content class="p-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-full">
          <slot />
          
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import {
    UserOutlined,
    DashboardOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  const selectedKeys = ref<string[]>(['1']);
  const collapsed = ref<boolean>(false);
  </script>
  <style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  </style>