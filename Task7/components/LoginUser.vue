<template>
  <div class="flex justify-center">
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Sign In</h2>
    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/app/dashboard')"
        >
          Login
        </a-button>
        {{ route }}
        <div class="flex items-center text-sm">
          <p>New here?</p>
          <p class="underline cursor-pointer ml-1" @click="$router.push('/register')">Register</p>
          {{ route }}
        </div>
      
    </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script lang="ts" setup>
const router = useRouter()

import { reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style>
a-form-item{
  color: white;
}
</style>