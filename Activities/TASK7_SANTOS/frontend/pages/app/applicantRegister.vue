<template>
      <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center w-full overflow-hidden">
        <img src="/public/manSideViewPointingleft.webp" class="relative z-50 mt-96 animate__animated animate__slideInRight" style="width: 41%; margin-left:51%;"/>
    <a-card class="card absolute border-8 border-white animate__animated animate__slideInDown">
        <p class="text-2xl font-bold italic text-center m-1"> Applicant Registration Form</p>
    <a-form
      :model="form"
      @submit="handleSubmit"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 800px"
      class="flex flex-col justify-items-center items-center"
    >
      <a-form-item 
      label="First Name" 
      :rules="[{ required: true, message: '*First Name Required' }]">
        <a-input v-model:value="form.firstName" placeholder="Enter First Name" class="w-72"/>
      </a-form-item>
      <a-form-item
      label="Middle Name">
        <a-input v-model:value="form.middleName" placeholder="Enter Middle Name" class="w-72"/>
      </a-form-item>
      <a-form-item 
      label="Last Name"
      :rules="[{ required: true, message: '*Last Name Required' }]">
        <a-input v-model:value="form.lastName" placeholder="Enter Last Name" class="w-72"/>
      </a-form-item>

      <a-form-item 
        label="Email Address"
        :rules="[{ required: true, message: '*Email Required' }]">
          <a-input v-model:value="form.email" placeholder="Email Address" class="w-72"/>
      </a-form-item>

      <a-form-item 
        label="Contact Number:"
        :rules="[{ required: true, message: '*Contact Number Required' }]">
          <a-input v-model:value="form.contactNo" placeholder="Contact Number" class="w-72"/>
      </a-form-item>

      <a-form-item 
        label="Current City"
        :rules="[{ required: true, message: '*City Required' }]">
        <a-input v-model:value="form.city" placeholder="City" class="w-72"/>
      </a-form-item>
      <a-form-item 
        label="Current State"
        :rules="[{ required: true, message: '*State Required' }]">
        <a-input v-model:value="form.state" placeholder="State" class="w-72"/>
      </a-form-item>

      <a-form-item 
        label="Username"
        :rules="[{ required: true, message: '*Username Required' }]">
        <a-input v-model:value="form.username" placeholder="Username" class="w-72"/>
      </a-form-item> 

      <a-form-item 
        label="Password"
        :rules="[{ required: true, message: '*Password Required' }]">
        <a-input v-model:value="form.password" placeholder="Password" class="w-72"/>
      </a-form-item>

      <a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="w-96">Register Now</a-button>
      </a-form-item>

    </a-form>
    <div class="flex mt-3">
        <p>Already have an account?</p> 
        <NuxtLink to="/app/applicantLogin" class="font-bold ml-2">Login Account</NuxtLink>
    </div>
   
</a-card>
</div>
  </template>
  <script setup>
  const labelCol = { style: { width: '150px' } };
  const wrapperCol = { span: 14 };

  import axios from 'axios';

const router = useRouter();

const form = reactive({
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  contactNo: '',
  city: '',
  state: '',
  username: '',
  password: ''

});


const onFinish = values => {
  console.log(values);
};

const onFinishFailed = errorInfo => {
  console.log(errorInfo);
};

const disabled = computed(() => {
  return !(form.firstName && form.lastName && form.email && form.contactNo && form.city && form.state && form.username &&form.password);
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const { firstName, middleName, lastName, email, contactNo, city, state, username, password } = form;

  try {
    const response = await axios.post('http://localhost:5005/api/users', {
      firstName,
      middleName,
      lastName,
      email,
      contactNo,
      city,
      state,
      username,
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
