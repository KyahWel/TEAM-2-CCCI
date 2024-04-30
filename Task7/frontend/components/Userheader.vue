<template>
    <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    style="display: flex; justify-content: flex-end;"
    
    :mode="state.mode"
    :items="items"
    :theme="state.theme"
    @click="handleMenuClick"
>
    <a-menu-item style="display: flex; align-items: center;" >
        <img src="~/assets/images/logo.png" alt="Logo" style="width: 40px; height: 40px; margin-right: 10px;">
        Logo
    </a-menu-item>
    
    <a-divider style="margin: 0 1em;"></a-divider>
    
    <a-menu-item style="display: flex; align-items: center;">
        <a-switch :checked="state.theme === 'dark'" @change="changeTheme" />
        Change Theme
    </a-menu-item>
</a-menu>

  </template>
  
  <script lang="ts" setup>
  import { h, reactive } from 'vue';
  import {
    MailOutlined,
    CalendarOutlined,
    PoweroffOutlined,
    
  } from '@ant-design/icons-vue';
  import type { MenuMode, MenuTheme } from 'ant-design-vue';
  import { ItemType } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const state = reactive({
    mode: 'horizontal' as MenuMode,
    theme: 'light' as MenuTheme,
    selectedKeys: ['1'],
    
  });
  
  function getItem(
    label: string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
  ): ItemType {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as ItemType;
  }
  
  const items: ItemType[] = reactive([
    getItem('Home', '1', h(MailOutlined)),
    getItem('Job', '2', h(CalendarOutlined)),
    getItem('Logout', '3', h(PoweroffOutlined)),
  ]);
  
  
  const changeTheme = (checked: boolean) => {
    state.theme = checked ? 'dark' : 'light';
  };

  const handleMenuClick = ({ key }: { key: string }) => {
  switch (key) {
    case '1':
      router.push('/user/home');
      break;
    case '2':
      router.push('/user/job');
      break;
    case '3':
      router.push('/');
      break;
    default:
      break;
  }
};
  </script>
  
  