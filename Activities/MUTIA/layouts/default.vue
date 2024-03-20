
<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">  
  <a-layout :style="{ background: '#e9d8f1' }">
    
    <a-layout-header :style="headerStyle"> <Navbar/> </a-layout-header>
    
      <div class="nuxt">
        <nuxt />
      </div>

      <a-layout-footer :style="footerStyle"> <Footer/> </a-layout-footer>

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
  background-color: #e9d8f1;
  padding: 24px;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  margin-top: auto;
  
}

</style>

<script>
  import Navbar from '/components/Navbar.vue';
  import Footer from '/components/Footer.vue';
  import Carousel from '/components/Carousel.vue';
  import index from '/pages/index.vue';


  export default {
    components: {
      Navbar,
      Carousel,
      Footer,
      index,
    },
  };
</script>