<template>
    <a-card class="form-container" >
      <h2 class="form-title">Forgot Password?</h2>
      <p>Please provide your email for verification code.</p>
      <a-form
        :model="form"
      >
      <!-- @submit="handleSubmit" -->
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
definePageMeta({
  layout:'Landing',
    
})
  
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
    background-image: url('public/img/rec.png'); /* Specify the path to your background image */
    padding: 15px;
  
    height: 100vh;
    
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .form-title{
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  </style>


























