<template>
    
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
   
  
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="Enter username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
  
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
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
  </template>
  
  <script setup>
  
  import axios from 'axios';
  const router = useRouter();
  
  const formState = reactive({
    username: '',
    password: '',
  });
  
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
  
  const login = async () => {
  try {
    const response = await axios.post('http://localhost:5005/api/login-admin', formState);
    if (response.data.message === 'Login successful') {
      console.log('Login successful');
      message.success('Login successful!', 1);
      router.push('/app/homePage');
    } else {
      console.log('Invalid username or password');
      message.error('Invalid username or password! Please Try Again');
    }
  } catch (error) {
    console.error(error);
    message.error('Invalid username or password');
  }
};
  </script>
  
  <style scoped>
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
    background-color: rgb(115, 169, 216);
  }
  
  </style>