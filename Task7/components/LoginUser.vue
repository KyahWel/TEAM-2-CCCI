<template>
  <div class="bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 m-24 p-12 rounded-xl justify-center">
    <div>
      <h1 class="text-amber-700 text-4xl font-black text-center p-12  ">Welcome User</h1>
    </div>
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Sign In</h2>
    <a-form
    :model="formState"
    name="login" 
    v-bind="aformitemlayout"  
    autocomplete="on"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    style="color:white;"
  >
  <div class="pl-16 text-center "> 
   
    <a-form-item   style="color: white;" name="username"  :rules="[{ required: true, message: 'Please input your username!' }]" ><!-- Username-->
    <label style="color:white" >Username</label>
  
      <a-input v-model:value="formState.username" />
   
    </a-form-item> 

    <a-form-item  name="password" :rules="[{ required: true, message: 'Please input your password!' }]" >      <!-- Password-->
    <label style="color:white">Password</label>
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

</div> 
    <a-form-item v-bind="aformtaillayout">
        <a-button    
          
          type="submit"
          class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/app/dashboard')"
        >  <!-- Login Button-->
          Login
        </a-button>
        {{ route }}
        <div class=" flex justify-center items-center text-sm w-64 p-2 text-white"> <!-- Register Button-->
          <p>New here?</p>
          <p class="text-amber-500 hover:text-amber-600 underline cursor-pointer ml-1" @click="$router.push('/signin/signupuser')">Register</p>
          {{ route }}
        </div>
      
    </a-form-item>
    </a-form>
  </div>
  <div class="flex items-center py-4"> <!-- Back Button-->
    <RightOutlined class="text-orange-700  font-black cursor-pointer" /> <span class="text-orange-700 hover:text-orange-600 font-black underline cursor-pointer ml-1" @click="$router.push('/')">
                Back
            </span>
            {{ route }}
  </div>
</div>
</template>

<script lang="ts" setup>
const router = useRouter()

import { reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const aformitemlayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
 
};
const aformtaillayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

</script>

<style >


</style>