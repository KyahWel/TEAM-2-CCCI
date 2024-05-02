<template>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible style="background: #FAF8ED ">
        <div class="flex items-center text-white justify-center mt-3" >
          <img src="/sitelogo.png"/>

        </div>

        <a-menu style="background: #FAF8ED"  mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <dashboard-outlined />
            <NuxtLink to ='/app'> <span v-if="!collapsed">Dashboard</span> </NuxtLink>
          </a-menu-item>
          <a-menu-item key="2">
            <user-outlined />
            <NuxtLink to ='/app/applicants'><span v-if="!collapsed">Applications</span></NuxtLink>
          </a-menu-item>
          <a-menu-item key="3">
            <logout-outlined />
            <NuxtLink to ='/'><span v-if="!collapsed">Logout</span></NuxtLink>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <a-layout-content
          :style="{ background: '#CAAAF3', padding: '40px' , minHeight: '280px' }"
        >
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>

  <script lang="ts">
  import {
    DashboardOutlined,
    UserOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      DashboardOutlined,
      UserOutlined,
      LogoutOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
    },
    setup() {
      return {
        selectedKeys: ref<string[]>(['1']),
        collapsed: ref<boolean>(false),
      };
    },
  });
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
    color: #FE6D00;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  </style>
  