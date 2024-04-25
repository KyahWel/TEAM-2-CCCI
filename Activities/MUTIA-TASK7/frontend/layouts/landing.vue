<template>
    <div class="landing-layout">
      <div class="login-container">
      <div :style="{ display: 'flex', flexDirection: 'row', height: '100%', padding: '20px' }" >
  
        <a-col :span="12" style="justify-content: center; align-items: center; background-color: #0B3041; height: 100%; border-radius: 25px;  ">
          
          <div class="logo-container">
            <img class="logo-main"  src="/assets/images/main-logo.png">
          </div>
          <h1>RECRUITMENT <br>SYSTEM</h1>
          </a-col>
  
  
        <a-col :span="12">
          <slot/>
      </a-col>
      
    </div>
      </div>
  
        
    </div>
  </template>
  
  <script>
  definePageMeta({
    layout: 'landing'
  })
  </script>
  
  <!-- Define the styles for the component -->
  <style scoped>                                                                
  .landing-layout {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('/assets/images/bg-landing.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .login-container{
    background-color: rgba(236, 245, 253, 0.499);
    width: 80%;
    height: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 25px;
  
  }
  
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
   
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15%;
  }
  
  .logo-main{
    width: 170px;
  }
  
  h1{
    font-size: 50px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(255, 255, 255);
    font-weight: 700;
   
  }
  
  .container-welcome{
    margin-bottom: 50px;
    font-size: 25px;
  }
  
  </style>