<template>
    <a-layout id="about">
      <a-layout-content>
        <div class="about-container">
          <div class="about-text">
            <h1>About Me</h1>
             
            <p>Greetings and welcome to my corner of the internet! Hi! I'm Clarisse, and I'm 22 years old. I've been immersing myself in the wonderful world of technology at TUP Manila, where I'm pursuing a Bachelor of Science in Information Technology. I love exploring into the many creative and entertainment domains outside of the area of code and algorithms. When I need to relax, you may find me engaging in a Netflix binge, where I explore new shows and movies. I find great excitement in crocheting intricate patterns out of yarn when I'm not engaged in digital world. In the middle of all the stress of school, I escape into books every once in a while and let myself be swept away in fantastical realms.  Thank you for visiting, and I can't wait to connect with you as I navigate through the complexities of IT while savoring the simple joys of life.  </p>
          </div>
          <div class="about-image">
            <img src="img/profile1.png" alt="profile">
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </template>
  
  
  
  <style scoped>
  .ant-layout {
    background: #e9d8f1;
  }
  .ant-layout-content {
    margin-top: 70px;
    background: #e9d8f1;
    padding: 20px;
    min-height: 550px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  
  .about-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .about-text {
    flex: 1;
    margin-right: 20px;
    font-size: 18px;
    text-align: justify;
    font-family:cursive;
  }
  
  .about-image {
    flex: 1;
    width: 70%;
  }
  
  .about-image img {
    max-width: 100%;
    height: auto;
  }
  
  h1{
    text-align: center;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
  }
  
  @media screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
    }
  
    .about-text {
      margin: 0 0 20px;
      justify-content: center;
    }
  
    .about-image {
      width: 100%;
    }
  }
  </style>
  
  <script>
  export default {
    head() {
      return {
        title: 'About Me',
      };
    },
  };
  </script>