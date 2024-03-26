<template>
    <div class="splashImageContainer">
      <img src="/joseLogoLight.png" :class="{ 'fade-out': isFadeOut }" class="splashImage" width="300px" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFadeOut: false
      };
    },
    mounted() {
      // Start the fade-out effect
      this.isFadeOut = true;
      
      // Reroute to homepage
      setTimeout(() => {
        this.$router.push('/home');
      }, 3000); // Delay
    }
  };
  </script>
  
  <style>

  .splashImage{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .splashImageContainer{
    max-width: 100%;
    max-height: 100%;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }

  body{
    background-color: #0d0d0d;
  }
  </style>
  