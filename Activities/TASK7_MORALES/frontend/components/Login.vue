<template>
  <div class="login-container">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="" style="border-radius: 10px;">
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
        <a-input-password v-model:value="formState.password" placeholder="" style="border-radius: 10px;">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
  
      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember Me</a-checkbox>
        </a-form-item>
        <a class="login-form-forgot" @click="router.push('/app/forgotPassPage')">Forgot Password?</a>
      </a-form-item>
  
      <a-form-item style="margin-bottom: 20px;"> 
        <!-- <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" style="border-radius: 10px;">
          Log in
        </a-button> -->
        <a-button html-type="submit" class="login-form-button" style="border-radius: 10px;">Log in </a-button>  

        
        
        <a-button type="link" @click="router.push('/app/registrationPage')" class="link-button">Not a member? Register. </a-button>  
        <a-button type="link" @click="router.push('/app/adminLoginPage')" class="admin-button">As Admin</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import axios from 'axios';

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const onFinish = values => {
  console.log('Success:', values);
};


const router = useRouter();

const disabled = computed(() => {
  return !(formState.username && formState.password);
});

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5005/api/login', formState);
    if (response.data.message === 'Login successful') {
      console.log('Login successful');
      
      router.push('/app/usersPage');
    } else {
      console.log('Invalid username or password');
      
    }
  } catch (error) {
    console.error(error);
    
  }
};
</script>

<style scoped>
.login-form-forgot {
  float: right;
  color:  #000000;
  transition: color 0.3s;
}

.login-form-forgot:hover {
  color: #5bd0ff;
}

.login-form-button {
  width: 100%;
  padding: center;
  background-image: linear-gradient(to right, #007acc, #001230);
  color: #ffffff;
  border-radius: 29px; /* Border radius */
  animation: pulse 2s infinite, bounce 1s infinite; /* Animations */
  border: 2px solid #7fbfff; /* Border to the button */
}

.login-container {
  background-color: #b3ddff93;
  padding: 50px;
  width: 60%; /* Adjust the width for the landing page */
  border-radius: 15px;
  margin-top: 20px;
}

.ant-form-item {
  margin-bottom: 20px; /* Increase the margin between form items */
}

.ant-form-item-control-input {
  min-height: 0px;
}

.link-button {
  color:  #001F56;
  transition: color 0.3s;
}

.link-button:hover {
  color: #5bd0ff;
}

.admin-button {
  color:  #001F56;
  transition: color 0.3s;
  margin-left: 100px;

}

.admin-button:hover {
  color: #5bd0ff;
}
</style>
