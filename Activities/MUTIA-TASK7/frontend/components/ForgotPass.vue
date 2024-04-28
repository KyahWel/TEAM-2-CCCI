<template>
    <a-card class="form-container" >
      <h2 class="form-title">Forgot Password?</h2>
      <p>Please provide your email for verification code.</p>
      <a-form
        :model="form"
      >
  
      
  
      <a-form-item
        name="email"
        :rules="[{ required: true, message: 'Please input your Email!' }]">
        <a-input v-model:value="form.email"
          placeholder="Email">
  
          </a-input>
      </a-form-item>
  
  
      <a-form-item >
        <a-button type="primary" html-type="submit" class="forgot-form-button">
          Submit
        </a-button>
  
        
      </a-form-item>
      <a-button type="link" style="color:#404040; float: left" @click="router.push('/')"><ArrowLeftOutlined /></a-button>
      </a-form>
    </a-card>
  </template>
  
  <script setup>
  
  const router = useRouter();
  
  const form = reactive({ 
    email: ''
  
  });
  

  
  
  </script>
  
  <style scoped>
  .forgot-form-button {
    width: 70%;
    margin-top: 20px;
    background-color: rgb(115, 169, 216);
  }
  
  .form-container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    background-color: azure;
   
   
  }
  
  .form-title{
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  </style>