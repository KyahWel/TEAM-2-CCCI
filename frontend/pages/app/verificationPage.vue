<template>
    <div class="form-container">
      <h1 class="form-title">Verification</h1>
      <a-form
        :model="formState"
        @submit.prevent="handleSubmit"
      >
        <!-- Other form items -->

        <a-form-item
        name="code"
        :rules="[{ required: true, message: 'Please input your verification code!' }]"
      >
        <a-input v-model:value="formState.code" placeholder="verification code!">
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
definePageMeta({
  layout: 'landing'
})

const router = useRouter();

const formState = reactive({ 
  code: ''
});

const disabled = computed(() => {
  return !(formState.code);
});

// Verification Code Function
const handleSubmit = async () => {
  try {
    // POST request to the backend server to verify the code
    const response = await axios.post('http://localhost:5005/api/verify-code', {
      code: formState.code
    });

    if (response.data.success) {
      message.success('Verification code is valid!');
      router.push('/app/newPass');
    } else {
      message.error('Invalid verification code. Please try again.');
      formState.code = ''; // clear the form
    }
  } catch (error) {
    console.error(error);
    message.error('Invalid verification code. Please try again.');
    formState.code = ''; // clear the form
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
    margin-bottom: 20px;
    font-size: 23px;
    font-weight: normal;
    font-family: sans-serif;
    text-align: center;
    margin-top: auto;
  }
  
  .form-container {
  background-color: #b3ddff93;
  padding: 30px;
  width: 30%; /* Adjust the width for the landing page */
  height: 40%;
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
  