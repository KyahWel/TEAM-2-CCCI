<template>
  <!--Login Form for Applicants/Users-->
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish">

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

      <a class="register-btn" type="link" @click="router.push('/app/registrationPage')">Not a member? Register</a>

      <a class="admin-btn" type="link" @click="router.push('/app/adminLoginPage')">Are you an Admin?</a>

      
    </a-form-item>

  </a-form>
</template>

<script setup>
import axios from 'axios';            // For making HTTP requests
import { useUserStore } from '../stores/user'

const router = useRouter();
const userStore = useUserStore()

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
    const response = await axios.post('http://localhost:5005/api/login', formState);
    if (response.data.message === 'Login successful') {
      message.success('Login successful!', 2);
      const userData = response.data.user
      userStore.login(userData)
      router.push('/app/userHome');
    } else {
      message.error('Unknown error');
      
    }
  } catch (error) {               // Handle errors
    if (error.response) {
      if (error.response.status === 401) {
        message.error('Invalid username or password', 2);
        formState.username = '';
        formState.password = '';
      } else if (error.response.status === 403) {
        message.error('You do not have permission to log in as a non-admin user', 2);
        formState.username = '';
        formState.password = '';
      } else if (error.response.status === 404) {
        message.error('Username does not exist', 2);
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


.login-form-forgot {
  float: right;
}
.login-form-forgot:hover {
  color: #e8f4fe; 
  text-decoration: underline;
}
.login-form-button {
  width: 100%;
  background-color: rgb(115, 169, 216);
  margin-bottom: 10px;
}
.register-btn:hover {
  color: #e8f4fe; 
  text-decoration: underline; 
}
.admin-btn{
  margin-left: 64px;
}
.admin-btn:hover {
  color: #e8f4fe; 
  text-decoration: underline; 
}


</style>