<template>
<a-space direction="vertical" :style="{ width: '100%' }">  
  <a-layout :style="{ background: '#e9d8f1' }">
    
    <a-layout-header> <Navbar/> </a-layout-header>
    
    <div class="nuxt"><nuxt /></div>

    <a-layout-footer> <Footer/> </a-layout-footer>

   </a-layout> 
</a-space>  
</template>

<style scoped>
.ant-layout-header {
  position: fixed;
  z-index: 1000;
  height: 64px;
  background: #39203f;

}
.ant-layout-footer {
  background-color: #39203f;
  padding: 24px;
  text-align: center;
  margin-top: auto;
  
}

</style>

<script>
  import Navbar from '/components/Navbar.vue';
  import Footer from '/components/Footer.vue';


  export default {
  components: {
    Navbar,
    Footer,
    
  },
}
</script>