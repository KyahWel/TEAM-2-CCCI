<template>
  <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
   <div class="flex flex-col items-center justify-center animate__animated animate__flipInY">
     <img src="/public/manPointingleft.webp" class="w-96 relative z-50 mt-44 ml-96" />
   
     <a-card class="card absolute border-0 border-white p-5" style="width: 450px; height: 450px">
         <p class="text-2xl font-bold italic text-center">
           Welcome Aboard Admin!
          <NuxtLink to="/landingPage"><a-button type=link class="p-0" >< Back to Options</a-button></NuxtLink>
         </p>
     <a-form 
         :model="formState"
         name="normal_login"
         class="mt-5 login-form"
         @finish="onFinish"
     >
         <a-form-item
         label="Username"
         name="username"
         :rules="[{ required: true, message: '*Username Required' }]"
         >
         <a-input v-model:value="formState.username">
             <template #prefix>
             <UserOutlined class="site-form-item-icon" />
             </template>
         </a-input>
         </a-form-item>
 
         <a-form-item
         label="Password"
         name="password"
         :rules="[{ required: true, message: '*Password Required' }]"
         >
         <a-input-password v-model:value="formState.password">
             <template #prefix>
             <LockOutlined class="site-form-item-icon" />
             </template>
         </a-input-password>
         </a-form-item>
 
         <a-form-item>
         <a-button :disabled="disabled" type="primary" html-type="submit" class="w-full login-form-button">
             Log in
         </a-button>     
         </a-form-item>
     </a-form>
     
 </a-card>
 </div> 
 
 </div>
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
     const response = await axios.post('http://localhost:5005/api/adminLogin', formState);
     if (response.data.message === 'Login Success') {
       console.log('Valid Credentials');
       message.success('Login Success!');
       router.push('/app/');
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
 /* Montserrat Font */
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400');
 .card {
   font-family: "Montserrat", sans-serif;
 }
 
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
 