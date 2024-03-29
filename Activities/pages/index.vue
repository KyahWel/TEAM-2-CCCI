<template>
    <div class="container">
      <div class="content">
        <h1>Hi, I'm <span style="color: #f72585; font-weight: bold"><br>Shaira</span>!</h1>
        <p style="font-weight:bold">Design with me! Where beautiful meets user-friendly!</p>
  
        <div class="button">
          <a-button class="custom-button" ghost shape="round" size="large" @click="router.push('/contact')">
            Let's talk!
          </a-button>
        </div>
      </div>
      <div class="image">
        <img src="/assets/me.png" alt="" height="390">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
    width: 100%;
    color: #000000;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    padding-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url("/assets/bg.png");
  }
  
  p {
    font-family: Lato;
    margin-top: 20px;
    margin-bottom: 30px;
    border-right: 2px solid;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    animation: typing 2s steps(50), cursor .6s step-end infinite alternate;
  }
  
  /* Cursor blinking */
  @keyframes cursor {
    50% { border-color: transparent; }
  }
  
  /* Typing effect */
  @keyframes typing {
    from { width: 0; }
  }
  
  .button {
    text-align: center;
  }
  
  h1 {
    font-size: 70px;
    margin-bottom: 30px;
  }
  
  .image {
    width: 400px;
    height: 400px;
    margin-left: 160px; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
  }
  
  .custom-button {
    /* Custom button design */
    background-color: #ffafcc;
    color: #000000;
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .custom-button:hover {
    /* Hover effect */
    background-color: #c19bff;
    transform: scale(1.05);
  }
  </style>
  