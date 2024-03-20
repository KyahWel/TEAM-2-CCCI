<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed',  width: '100%' }">
      
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}">

        <a-menu-item key="/">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <router-link to="#about">About Me</router-link>
        </a-menu-item>
        <a-menu-item key="/academic">
          <router-link to="#academic">Achievements</router-link>
        </a-menu-item>
        <a-menu-item key="/projects">
          <router-link to="#projects">Projects</router-link>
        </a-menu-item>
      </a-menu>
      
    </a-layout-header>
  </a-layout>
</template>


<script setup>



</script>


<style scoped>
.ant-layout-header{
  height: 64px;
  line-height: 64px;
  background: #39203f;
  z-index: 1000;
  display:flex;

}
.ant-menu {
  padding: 0 10px;
  background: #39203f;
}

</style>