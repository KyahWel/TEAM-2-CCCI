<template>
    <div class="form-container">
        <h2 class="form-title">WELCOME, ADMIN!</h2>
        <!-- Login Form for Admin -->
    <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
  >
    <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username" placeholder="Enter username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password" placeholder="Password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a class="login-form-forgot" type="link" @click="router.push('/app/forgotPassPage')">Forgot password</a>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      
      <a-button type="link" style="color:#404040; float: left" @click="router.push('/')"><ArrowLeftOutlined /></a-button>
    </a-form-item>
  </a-form>
    </div>

</template>

<script setup>
definePageMeta({
layout: 'landing'
})

import axios from 'axios';     // For making HTTP requests
import { useAdminStore } from '../stores/admin'

const router = useRouter();
const adminStore = useAdminStore()

  
  const formState = reactive({
    username: '',
    password: '',
  });
  
   // To handle form submission
  const onFinish = async (values) => {
  try {
    await login();
  } catch (error) {
    console.error(error);
  }
};

  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });
  
  // Login Function
  const login = async () => {
  try {
    // POST request to the login API endpoint
    const response = await axios.post('http://localhost:5005/api/login-admin', formState);
    if (response.data.message === 'Login successful') {
      message.success('Login successful!', 2);
      const userData = response.data.admin
      adminStore.login(userData)
      router.push('/app/homePage');
    } else {
      message.error('Invalid username or password', 1);
    }
  } catch (error) {                       // Handle errors
    if (error.response) {
      if (error.response.status === 401) {
        message.error('Invalid username or password', 1);
        formState.username = '';
        formState.password = '';
      } else if (error.response.status === 403) {
        message.error('You do not have permission to log in as an admin user', 2);
        formState.username = '';
        formState.password = '';
      } else if (error.response.status === 404) {
        message.error('Username does not exist', 1);
        formState.username = '';
        formState.password = '';
      } else {
        message.error('Unknown error');
        
      }
    } else if (error.request) {
      message.error('No response received from server');
    } else {
      console.log('Error making request', error.message);
      message.error('Internal server error');
    }
  }
};
</script>

<style scoped>                                                                

.form-container {
  display: flex;
  padding: 131px;
  justify-content: center;
  flex-direction: column;
  height: 100%;
 
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
  background-color: rgb(115, 169, 216);
}

.form-title{
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: bold;
}

</style>