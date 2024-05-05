<template>
  <a-layout-header  >
    <a-menu  :theme="state.theme" mode="horizontal"  style="display: flex; justify-content: flex-end;"  @click="handleMenuClick" >
      <a-menu-item key="1">
        <a-button :class="{ 'light-theme': state.theme === 'light', 'dark-theme': state.theme === 'dark' }"><HomeOutlined /> Home</a-button>
      </a-menu-item>
      <a-menu-item key="2">
        <a-button :class="{ 'light-theme': state.theme === 'light', 'dark-theme': state.theme === 'dark' }"><FolderViewOutlined /> Job</a-button>
      </a-menu-item>
      <a-menu-item >
        <a-dropdown>
      <template #overlay>
        <a-menu  @click="handleMenuClick" >
          <a-menu-item key="3.1" >
            <UserOutlined />
           Profile
          </a-menu-item>
          <a-menu-item key="3.2">
            <PoweroffOutlined />
           Logout
          </a-menu-item>
         
        </a-menu>
      </template>
      <a-button :class="{ 'light-theme': state.theme === 'light', 'dark-theme': state.theme === 'dark' }">
        Mandoe123
        <DownOutlined />
      </a-button>
    </a-dropdown>
      </a-menu-item>
      <a-menu-item>
        <a-switch :checked="state.theme === 'dark'" @change="changeTheme" />
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuTheme } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const state = reactive({

  theme: 'light' as MenuTheme, 
 }
)

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
        case '3.1':
            router.push('/user/profile');
            break;
        case '3.2':
            router.push('/');
            break;
        default:
            break;
    }
};

</script>

<style>
.light-theme {
  background-color: papayawhip;
  color: black;
}

.dark-theme {
  background-color: darkkhaki;
  color: white;
}
</style>