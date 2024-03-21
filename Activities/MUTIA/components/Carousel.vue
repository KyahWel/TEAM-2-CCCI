
<template>
  <a-carousel v-if="isCarouselLoaded" autoplay>
    <div class="slide-1"><h3>Hello!</h3></div>
    <div class="slide-2"></div>
    <div class="slide-3"></div>
    <div class="slide-4"></div>
  </a-carousel>
</template>

<style scoped>
.ant-carousel {
  width: 100%;
  height: 600px;
  margin-top: 16px;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 600px;
  line-height: 500px;
  background: #6c3679;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
  font-size: 200px;
  font-family: 'Times New Roman', Times, serif;
  text-align: right;
  margin-top: 2%;
  margin-right: 5%;

}

.slide-1 {
  background-image: url("/img/banner2.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  
}

.slide-2 {
  background-image: url("/img/banner1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
}

.slide-3 {
  background-image: url("/img/banner3.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
}

.slide-4 {
  background-image: url("/img/banner4.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
}

@media screen and (max-width: 768px) {
  .ant-carousel {
    height: 300px;
  }

  .ant-carousel >>> .slick-slide {
    height: 300px;
    line-height: 300px;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
    font-size: 80px;
  }

  .slide-1,
  .slide-2,
  .slide-3,
  .slide-4 {
    min-height: 300px;
    min-width: 100%;
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