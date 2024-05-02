<template>

    <div class="bg-[url('/landingbgpic.png')] bg-cover landingpage h-screen flex items-center justify-center w-full p-44 flex-col">
            <p class="text-base tagline font-light">Your success starts here!</p> 
        <div class="bg-white w-full p-28 rounded-lg flex flex-col items-center justify-center" style="width: 1000px;">
            
            <a-form
                style="max-width: 700px"
                :model="form"
                @submit="handleSubmit"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                layout="horizontal"
            >

                <a-form-item :rules="[{ required: true, message: '*First Name Required' }]"> 
                <a-input v-model:value="form.firstName" placeholder="First Name" />
                </a-form-item>
           
                <a-form-item :rules="[{ required: true, message: '*Last Name Required' }]"> 
                <a-input v-model:value="form.lastName" placeholder="Last Name" />
                </a-form-item>

                <a-form-item :rules="[{ required: true, message: '*Email Required' }]"> 
                <a-input v-model:value="form.email" placeholder="Email" />
                </a-form-item>

                <a-form-item :rules="[{ required: true, message: '*Contact Required' }]"> 
                <a-input v-model:value="form.contactNo" placeholder="Contact Number" />
                </a-form-item>

                <a-form-item :rules="[{ required: true, message: '*Passssword Required' }]"> 
                <a-input v-model:value="form.password" placeholder="Password" />
                </a-form-item>
               
                <!-- <p class="font-semibold p-5">Recent Work Experience</p>

                <a-form-item label="Company Name">
                <a-input />
                </a-form-item>
                <a-form-item label="Position">
                <a-input />
                </a-form-item>

                <a-form-item label="Start-End date">
                <a-range-picker />
                </a-form-item>

                <a-form-item label="Upload CV/Resume">
                <a-upload action="/upload.do" list-type="picture-card">
                    <div>
                    <PlusOutlined />
                    <div style="margin-top: 8px">Upload File</div>
                    </div>
                </a-upload>
                </a-form-item> -->

                <NuxtLink to="/" class="font-thin text-base p-8" >back</NuxtLink>
                <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="w-full">Register Now</a-button>
                </a-form-item>
                </a-form>
        </div>
    

  </div>
  </template>

<script setup>
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };

import axios from 'axios';

const router = useRouter();

const form = reactive({
firstName: '',
lastName: '',
middleName: '',
// username: '',
contactNo: '',
email: '',
password: ''

});


const onFinish = values => {
console.log(values);
};

const onFinishFailed = errorInfo => {
console.log(errorInfo);
};

const disabled = computed(() => {
return !(form.firstName && form.lastName && form.contactNo && form.password && form.email);
});

const handleSubmit = async (e) => {
e.preventDefault();
const { firstName, middleName, lastName, contactNo, email, password } = form;

try {
  const response = await axios.post('http://localhost:5005/api/users', {
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    // username,
    password,
  });

  message.success('You have registered successfully!');
  router.push('/');
  
} catch (error) {
  message.error('Registration Unsuccessful');
  console.error(error);
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
  