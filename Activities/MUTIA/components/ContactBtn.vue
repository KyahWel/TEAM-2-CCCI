<template>
  
  <div class="button-container">
      <a-button type="primary" class="button" @click="scrollToFooter">Let's Connect</a-button>
  </div>
         
  </template>
    
    <style scoped>
    .button-container {
      margin-top: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #bdc4cd;
      width: 100%;
      height: 11%;
    }
    .button {
      background: #1890FF;
      border: 2px; 
      color: white; 
      text-align: center; 
      font-size: 18px; 
      margin: 8px; 
      cursor: pointer; 
      border-radius: 12px; 
      box-shadow: 0px 8px 15px rgba(11, 9, 9, 0.784); 
    }
    .button:active {
      background-color: #72288d;
    }
    
    </style>
    
    <script>
    export default {
      methods: {
        scrollToFooter() {
          // Scroll to the footer using JavaScript
          const footer = document.querySelector('#footer');
          if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
          }
        },
      },
    };
    </script>