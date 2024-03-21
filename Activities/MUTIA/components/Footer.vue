<template>
  <a-layout id="footer">
  <a-layout-footer :style="footerStyle">
    <h1>Contact Me</h1>
    <div class="social-media-container">
      <a href="https://www.facebook.com/profile.php?id=100006277759226" target="_blank">
        <img src="img/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.linkedin.com/in/clarisse-m-953631136/" target="_blank">
        <img src="img/linkedin.svg" alt="Linkedin" />
      </a>
      <a href="https://www.instagram.com/clarizzse/" target="_blank">
        <img src="img/instagram.svg" alt="Instagram" />
      </a>
    </div>
    <p>&copy;2024 by Clarisse Mutia</p>
  </a-layout-footer>
</a-layout>
</template>

<style scoped>
.ant-layout-footer {
  background-color: #39203f;
  padding: 24px;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  margin-top: auto;
}

.ant-layout-footer h1 {
  font-size: 20px;
  color: rgb(255, 248, 248);
}

.social-media-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 16px;
  margin-bottom: 20px;
}

.social-media-container img {
  width: 25px;
}
</style>

<script setup>
const footerStyle = {
  textAlign: 'center',
};
</script>