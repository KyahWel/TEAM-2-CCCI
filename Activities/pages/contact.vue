<template>
    <div class="container">
      <div class="image">
        <img src="/assets/contacts.png" alt="" height="200">
      </div>
      <div class="content">
        <h1 class="content3">
          Kindly <span style="color: #e34989; font-weight: bold">Contact Me</span>
        </h1>
        <p class="contactme">If you have any inquiries or recommendations, please feel free to get in touch.</p>
        <ul class="details">
          <li><MailOutlined /> mshaira304@gmail.com</li>
          <li><PhoneOutlined /> +6395261332</li>
        </ul>
        <hr style="border-color: #ff5d8f; margin-top: 30px;">
        <ol class="socials">
          <li><a href="https://github.com/shaimorales/" target="_blank"><GithubOutlined style="color: #ff5d8f;" :key="1" :class="{ 'animated bounce': isAnimated }" /></a></li>
          <li><a href="https://www.linkedin.com/in/shaira-morales-a285622b6/" target="_blank"><LinkedinOutlined style="color: #ff5d8f;" :key="2" :class="{ 'animated bounce': isAnimated }" /></a></li>
          <li><a href="https://www.facebook.com/Shyruh/" target="_blank"><FacebookOutlined style="color: #ff5d8f;" :key="3" :class="{ 'animated bounce': isAnimated }" /></a></li>
          <li><a href="https://www.instagram.com/oh_shy/" target="_blank"><InstagramOutlined style="color: #ff5d8f;" :key="4" :class="{ 'animated bounce': isAnimated }" /></a></li>
        </ol>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons-vue';
  
  const isAnimated = ref(false);
  
  async function openExternalLink(url) {
    await navigateTo(url, {
      external: true,
      open: {
        target: '_blank'
      }
    });
  }
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
    width: 100%;
    color: #000000;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/assets/bg.png");
    background-size: cover;
  }
  
  .image {
    width: 200px; /* Square size */
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 200px; /* Add margin-right to push the image to the left */
  }
  
  .image img {
    width: 100%;
    height: auto;
  }
  
  .content {
    max-width: 50%;
    text-align: left;
  }
  
  .content3 {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .contactme {
    margin-bottom: 30px;
  }
  
  .details {
    margin-bottom: 20px;
  }
  
  .details li {
    margin-bottom: 10px;
    list-style: none;
    word-spacing: 10px;
  }
  
  .socials {
    margin-top: 30px;
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  .socials li {
    margin: 0 30px;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
  }
  
  .animated {
    animation-duration: 1s;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  </style>