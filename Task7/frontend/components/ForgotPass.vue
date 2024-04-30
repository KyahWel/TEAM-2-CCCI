<template>
    <div class="bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 md:m-4 lg:m-12 customscreen px-6 pb-8 rounded-xl justify-center">
      <div>
        <h1 class="text-amber-700 text-4xl font-black text-center pb-6 pt-4  ">Change Password</h1>
      </div>
    <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg pb-5 pt-5 pr-0 pl-0 bg-gray-900 text-white">
      
      <a-form
      :model="formState"
      name="login" 
      v-bind="aformitemlayout"  
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      style="color:white;"
      
    >
    <div class="px-20 pt-4  text-center align-center"> 
     
      <a-form-item noStyle   style="color: white;" name="username"  :rules="[{ required: true, message: 'Please input your username!' }]" ><!-- Username-->
      <label style="color:white" >Password</label>
    
        <a-input noStyle class="text-black bg-yellow-400 my-2" v-model="formState.username" placeholder="Nigga" />
     
      </a-form-item> 
  
      <a-form-item noStyle name="password" :rules="[{ required: true, message: 'Please input your password!' }]" >      <!-- Password-->
      <label style="color:white">Confirm Password</label>

        <a-input-password  class="text-black bg-yellow-400 my-2 "  v-model="formState.password" placeholder="Nigga"  />

      </a-form-item>
  
      
  
  </div> 
  
  
      <a-form-item v-bind="aformtaillayout" class=" flex justify-center items-center text-sm w-auto  text-white">
        
          <a-button    
         
            type="submit"
            class="  relative lg:w-24 lg:mx-20  text-white bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  "
            @click="$router.push('/')"
          >  <!-- Login Button-->
            Change
          </a-button>
    
          {{ route }}
         
          
      </a-form-item>
      <div class=" absolute right-0 bottom-0 pb-4 pr-4"> <!-- Back Button-->
        <RightOutlined class="text-orange-500  font-black cursor-pointer " />
        <span class="text-orange-500 hover:text-orange-600 font-black underline cursor-pointer relative " @click="$router.push('/')">
          Back
              </span>
              {{ route }}
    </div>
      
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
  
  <style scoped >
  
  .a-input-password{
  position: absolute;
  background-color: yellow;
  }
  
  @media (max-width: 1900px) {
      .customscreen {
          margin: 13.5rem;
          
      }
  }
  </style>