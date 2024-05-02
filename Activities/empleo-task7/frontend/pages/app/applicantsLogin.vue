<template>

  <div class="bg-[url('/landingbgpic.png')] bg-cover landingpage h-screen flex items-center justify-center w-full p-44 flex-col">

  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: '*Email Address Required' }]"
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
      :rules="[{ required: true, message: '*Password is Required' }]"
    >
      <a-input v-model:value="formState.passsword">
        <template #prefix>
        <UserOutlined class="site-form-item-icon" />
        </template>
        </a-input>
        </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="">register now!</a>
    </a-form-item>
  </a-form>
</div>
</template>


<script setup>
import axios from 'axios';


const router = useRouter();

const formState = reactive({
  email: '',
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
  return !(formState.email && formState.password);
});

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5005/api/login', formState);
    if (response.data.message === 'Login Success') {
      console.log('Valid Credentials');
      message.success('Login Success!');
      router.push('/app/applicantsPage');
    } else {
      console.log('Invalid Credentials');
      message.error('Invalid Credentials');
    }
  } catch (error) {
    console.error(error);
    message.error('Invalid Credentials');
  }
};
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
