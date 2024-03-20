<template>
<div class="button-container">
    <a-button type="primary" @click="scrollToFooter">Contact Me</a-button>
</div>
       
</template>
  
  <style scoped>
  .button-container {
    margin-top: 10%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
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