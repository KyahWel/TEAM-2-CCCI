<template>
  <div class="admin-container">
    <a-form
      :model="formState"
      name="normal_login"
      class="admin-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
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
        
        <a class="login-form-forgot" @click="router.push('/app/forgotPassPage')">Forgot Password?</a>
      </a-form-item>
  
      <a-form-item style="margin-bottom: 20px;"> 
        <!-- <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" style="border-radius: 10px;">
          Log in
        </a-button> -->
        <a-button @click="router.push('/app/home')" class="login-form-button" style="border-radius: 10px;">Log in </a-button>  

        <a-button type="link" @click="router.push('/')" class="back-button">Back</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>





const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const router = useRouter();

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
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

.admin-container {
  background-color: #b3ddff93;
  padding: 50px;
  width: 100%; /* Adjust the width for the landing page */
  border-radius: 15px;
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

.back-button {
  color:  #001F56;
  transition: color 0.3s;
}


.back-button:hover {
  color: #5bd0ff;
}
</style>
