<template>
    
  <a-form
    :model="form"
    @submit="handleSubmit"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    layout="horizontal"
    style="max-width: 800px"
    class="flex flex-col justify-items-center items-center p-3"
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

    <a-form-item 
      label="Company"
      :rules="[{ required: true, message: '*Company Required' }]">
      <a-input v-model:value="form.previousCompanyName" placeholder="Company" class="w-72"/>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="w-96">Register Now</a-button>
    </a-form-item>

  </a-form>
 
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
password: '',
previousCompanyName: '',

});


const onFinish = values => {
console.log(values);
};

const onFinishFailed = errorInfo => {
console.log(errorInfo);
};

const disabled = computed(() => {
return !(form.firstName && form.lastName && form.email && form.contactNo && form.city && form.state && form.username &&form.password && form.previousCompanyName);
});

const handleSubmit = async (e) => {
e.preventDefault();
const { firstName, middleName, lastName, email, contactNo, city, state, username, password, previousCompanyName } = form;

try {
  const response = await axios.post('http://localhost:5005/api/adminRegister', {
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    city,
    state,
    username,
    password,
    previousCompanyName,
  });

  message.success('Employer registered successfully!');
  router.push('/app/adminManageAdmin');
  
} catch (error) {
  message.error('Registration Unsuccessful');
  console.error(error);
}
};
</script>
