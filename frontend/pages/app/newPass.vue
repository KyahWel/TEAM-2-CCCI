<template>
    <div class="form-container">
        <h1 class="form-title">Create New Password</h1>
      <a-form
        :model="formState"
        @submit.prevent="handleSubmit"
      >
        <!-- Other form items -->

        <a-form-item
        name="email"
        :rules="[{ required: true, message: 'Please input your new password!' }]"
      >
        <a-input v-model:value="formState.email" placeholder="Email" style="border-radius: 10px;">
        </a-input>
      </a-form-item>

      <a-form-item
        name="newPass"
        :rules="[{ required: true, message: 'Please input your new password!' }]"
      >
        <a-input-password v-model:value="formState.newPass" placeholder="New Password" style="border-radius: 10px;">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>


      <a-form-item
        name="confirmPassword"
        :rules="[{ required: true, message: 'Please input your new password!' }]"
      >
        <a-input-password v-model:value="formState.confirmPassword" placeholder="Confirm New Password" style="border-radius: 10px;">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
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
definePageMeta({
  layout: 'landing'
})

import axios from 'axios';

const router = useRouter();


const formState = reactive({
  email: '',
  newPass: '',
  confirm: ''
});

const disabled = computed(() => {
  return !(formState.newPassword && formState.confirmPassword && formState.email);
});


// Resetting Password Function
const handleSubmit = async () => {
  if (formState.newPass!== formState.confirmPassword) {
    message.error('Passwords do not match');
    return;
  }

  try {
    // GET request to the backend server to Check if username exists
    const emailResponse = await axios.get(`http://localhost:5005/api/users/${formState.email}`);
    if (!emailResponse.data.exists) {
      message.error('email does not exist');
      return;
    }

    // PUT request to the backend server to Reset password
    const response = await axios.put('http://localhost:5005/api/reset-password', {
      email: formState.email,
      password: formState.newPass
    });

    if (response.data.success) {
      message.success('Password updated successfully!');
      router.push('/');
    } else {
      message.error('Failed to update password');
    }
  } catch (error) {
    console.error(error);
    message.error('Failed to update password');
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
    font-size: 20px;
    font-weight: normal;
    font-family: sans-serif;
    text-align: center;
  }
  
  .form-container {
  background-color: #b3ddff93;
  padding: 40px;
  width: 30%; /* Adjust the width for the landing page */
  height: 54%;
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
  