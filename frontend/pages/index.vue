<template>
  <div class="Login">
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"

  >
  <a-card>
  <div class="user">
    Users
  </div>
  <div class="container1 flex flex-col items-center">
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your Email!' }]"
    >
      <a-input v-model:value="formState.email">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
      <router-link to ="/app/Forgotpass" class="button">
         <a-button type="primary" class="button-text">
          Forgot password
          </a-button>
        </router-link>
    </a-form-item>

    <a-form-item>

    
          <a-button type="primary" html-type="submit" class="login-button">
          Login
          </a-button>
        
      <br>  
      <br>
        <a-col>
      
          <a-button type="button" @click="router.push('/app/Register')"> Register!</a-button>
          <a-button type="button" @click="router.push('/app/Adminlogin')"> Admin</a-button>
      
      </a-col>
      </a-form-item>
  </div>
</a-card>
  </a-form>
</div>
</template>
<script setup>
import axios from 'axios';
const router = useRouter();

import { reactive, computed } from 'vue';
definePageMeta({
  layout:'Landing',
    
})

const formState = reactive({
  email: '',
  password: '',
  remember: true,
});

const onFinish = async (values) => {
  try {
    await login();
  } catch (error) {
    console.error(error);
  }
};

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5005/api/login', formState);
    if (response.data.message === 'Login successful') {
      console.log('Login successful');
      router.push('/app/UsersDashboard');
    } else {
      console.log('Invalid username or password');
    }
  } catch (error) {
    console.error(error);
    
  }
};


const disabled = computed(() => {
  return !(formState.email && formState.password);
});
</script>


<style scoped>
.login-form {
  max-width: 350px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 50%;
}

.Login {
  background-image: url('public/img/rec.png'); /* Specify the path to your background image */
  background-size: cover; /* Cover the entire background */
  background-position: center; /* Center the background */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}
.user
{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.login-button{
  width:250px;
}

</style>
