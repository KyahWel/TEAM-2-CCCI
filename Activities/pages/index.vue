<template>
  <div class="landing-layout">
      <div class="button-container">
        <router-link to="/app/home" class="button">                    
           <a-button type="primary" class="animated-button">
      <span style="display: flex; align-items: center;"><RocketOutlined style="margin-right: 8px;" /> Get Started</span>
    </a-button>
        </router-link>
      </div>
  </div>
</template>
 
<script lang="ts" setup>
definePageMeta({
  layout: 'landing'
})
import { RocketOutlined } from '@ant-design/icons-vue';
</script>
 
 
<style scoped>                                                                
.landing-layout {
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: url('/assets/images/bg444.png');
  background-repeat: no-repeat;
  background-size: 100% 120%;
}
 
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30%;
  border-radius: 39px;
}

img{
  width: 170px;
  padding-bottom: 10px;
}
 
 /* Animation for the button */
.animated-button {
  height: 50px;
  font-size: 18px;
  margin-top: 0%; 
  margin-bottom: 0%;
  background-image: linear-gradient(to right, #007acc, #001230); /* Adjusted gradient background */
  border-radius: 29px; /* Border radius */
  animation: pulse 2s infinite, bounce 1s infinite; /* Animations */
  border: 2px solid #7fbfff; /* Border to the button */
}

.animated-button:hover {
  background-image: linear-gradient(to right, #005b9e, #000f29); /* Gradient background on hover */
}

.animated-button:active {
  background-image: linear-gradient(to right, #00487b, #000b1b); /* Gradient background on click */
}

.animated-button:hover:active {
  background-image: linear-gradient(to right, #003663, #00060c); /* Gradient background on click */
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
