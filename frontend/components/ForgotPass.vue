<template>
    <div class="form-container">
      <h1 class="form-title">Forgot Password</h1>
      <a-form
        :model="formState"
        @submit.prevent="handleSubmit"
      >
        <!-- Other form items -->
        
        <a-form-item
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" placeholder="Enter email">
          <template #prefix>
          </template>
        </a-input>
      </a-form-item>
  
        <a-form-item>
          <!-- Login button -->
          <a-button type="primary" html-type="submit" class="login-form-button">
            Submit
          </a-button>
        </a-form-item>

        <a-form-item>
          <a-button type="link" @click="router.push('/')" class="back-button">Back</a-button>
           </a-form-item>
         

      </a-form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';

  const router = useRouter();
  
  
  const formState = reactive({
   email: ''
  });
  
  const disabled = computed(() => {
    return !(formState.email);
  });

  const handleSubmit = async () => {
  try {
  
      const response = await axios.post('http://localhost:5005/api/check-email', {
      email: formState.email
    });
 
    if (response.data.exists) {
 
      const response2 = await axios.post('http://localhost:5005/api/send-verification-code', {
      email: formState.email
    });
 
    if (response2.data.success) {
      message.success("We've sent a verification code to your email.", 2);
      router.push('/app/verificationPage');
    } else {
      message.error("Failed to send verification code. Please try again.", 2);
    }
    } else {
      message.destroy();
      message.error("Email does not exist. Please try again.", 2);
      form.email = '';
    }
  } catch (error) {
    console.error(error);
    message.error("Failed to send verification code. Please try again.", 2);
    form.email = '';
  }
};
  </script>
  
  <style scoped>
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    margin-top: 10px;
    width: 100%;
    background-color: #1399ad;
    color: #ffffff;
  }
  
  .form-title{
    margin-bottom: 22px;
    font-size: 22px;
    font-weight: normal;
    font-family: sans-serif;
    text-align: center;
  }
  
  .form-container {
  background-color: #b3ddff93;
  padding: 30px;
  width: 410px; /* Adjust the width for the landing page */
  height: 243px;
  border-radius: 15px;
  }
  
  .ant-form-item {
    margin-bottom: 10px;
  }

  .back-button {
  color:  #001F56;
  transition: color 0.3s;
}


  .back-button:hover {
  color: #5bd0ff;
}
  </style>
  