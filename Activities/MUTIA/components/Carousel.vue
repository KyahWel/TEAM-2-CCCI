<template>
  <a-carousel v-if="isCarouselLoaded" autoplay>
    <div><h3>Hello!</h3></div>
    <div><h3>2</h3></div>
    <div>
      <p style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); color: #fff;">This is some text about the image.</p>
    </div>
    <div>
      <img src="img/banner1.jpg" alt="Image"/>
    </div>
  </a-carousel>
</template>

<style scoped>
.ant-carousel {
  width: 100%;
  height: 500px;
  margin-top: 16px;
}

:deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 500px;
  background: #6c3679;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
  font-size: 200px;
}

:deep(.slick-slide img) {
  width: 100%;
  height: 600px;
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .ant-carousel {
    height: 300px;
  }

  :deep(.slick-slide) {
    height: 300px;
    line-height: 300px;
  }

  :deep(.slick-slide h3) {
    font-size: 120px;
  }

  :deep(.slick-slide img) {
    height: 300px;
 }
}
</style>

<script>
export default {
  data() {
    return {
      isCarouselLoaded: false,
    };
  },
  mounted() {
    // Simulate loading the carousel component
    setTimeout(() => {
      this.isCarouselLoaded = true;
    }, 50);
  },
};
</script>