<template>
   <div class="bg-[url('/landingbgpic.png')] bg-cover landingpage h-screen flex items-center justify-center w-full p-44 flex-col">
     <div class=" flex flex-col align-middle relative items-center justify-center">
       <h1 class="text-5xl font-extrabold title"> JOB.Nestwork</h1> 
       <p class="text-base tagline">Your Getaway to Career Success</p> 
       <br>
       <br>
       <br>

     <div class="bg-white w-full p-28 rounded-lg flex flex-col items-center justify-center" style="width: 800px;">
     <a-row :gutter="[16,16]" class="">
        <a-col :span="8" class="">
         <div >
           <a-space direction="vertical" :size="32">
              <a-space wrap :size="16">
                 <a-avatar shape="square" :size="120" style="background-color: #FE6D00" class="flex items-center justify-center">
                 <template #icon><UserOutlined /></template>
                 </a-avatar>
              </a-space>
           </a-space>
         </div>
        </a-col> <br> <br>
        <br>
        <br>

        <a-col class="p-4" :span="16">
           <a-form
           :model="formState"
       name="normal_login"
       class="mt-5 login-form"
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
       :rules="[{ required: true, message: '*Password Required' }]"
       >
       <a-input-password v-model:value="formState.password">
           <template #prefix>
           <LockOutlined class="site-form-item-icon" />
           </template>
       </a-input-password>
       </a-form-item>
            
               <br>

               <a-form-item>
               <a-button  type="primary" html-type="submit" class="w-full login-form-button">
                   Log in
               </a-button>     
               </a-form-item>    
         
            </a-form>
        </a-col>
     
     </a-row>
     <div>
        <NuxtLink to="/app/passwordreset" class="font-normal text-sm p-5" >Forgot Password</NuxtLink>
        <NuxtLink to="/app/applicantSignup" class="font-normal text-sm p-5" >Sign Up</NuxtLink>
     </div> 
    
     </div>
        <div class="bg-white w-full flex items-center justify-center p-5">
           <NuxtLink to="/app/adminLogin" class="font-thin text-sm" >Login as Administrator</NuxtLink>
        </div>
     </div>

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
      router.push('/app/userOnly');
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

<style >
.title {
  font-size: 90px;
}

.tagline {
  font-size: 35px;
}

</style>