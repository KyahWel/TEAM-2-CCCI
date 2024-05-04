<template>
  <div class="Register">
    <a-form
      :model="form"
      v-bind="layout"
      @finish="onFinish"
      @submit="handleSubmit"
    >
    <a-card>
      <a-form-item name="firtsName" label="Firstname" :rules="[{ required: true }]">
        <a-input v-model:value="form.firstName" />
      </a-form-item>
      <a-form-item name="lastName" label="Lastname" :rules="[{ required: true }]">
        <a-input v-model:value="form.lastName" />
      </a-form-item>
      <a-form-item name="contactNo" label="Contact:" :rules="[{ type: 'number',required: true }]">
        <a-input v-model:value="form.contactNo" />
      </a-form-item>
      <a-form-item name="address" label="Address:" :rules="[{required: true }]">
        <a-input v-model:value="form.address" />
      </a-form-item>
      <a-form-item name="gender" label="gender:" :rules="[{required: true }]">
        <a-input v-model:value="form.gender" />
      </a-form-item>
      <a-form-item name="email" label="Email" :rules="[{ type: 'email' }]">
        <a-input v-model:value="form.email" />
      </a-form-item>
      <a-form-item name="age" label="Age" :rules="[{ type: 'number', min: 0, max: 99 }]">
        <a-input-number v-model:value="form.age" />
      </a-form-item>   
      <a-form-item name="password" label="Password" :rules="[{ required: true }]">
        <a-input v-model:value="form.password" type="password" autocomplete="new-password" />
      </a-form-item>
      <!-- <a-form-item :name="['user', 'confirmPassword']" label="Confirm Password" :dependencies="['user', 'password']" :rules="[{ required: true, message: 'Please confirm your password' }, { validator: validateConfirmPassword }]">
        <a-input v-model:value="form.user.confirmPassword" type="password" autocomplete="new-password" />
      </a-form-item> -->
      
      <a-form-item>
       
        <a-button type="primary" html-type="submit" class="button">Submit</a-button>
   
      </a-form-item>
    </a-card>
    </a-form>
  </div>
 
</template>

<script setup lang="ts" >
import { reactive } from 'vue';
import axios from 'axios';
definePageMeta({
  layout:'Landing',
    
})
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const form = reactive({
    firstName: '',
    lastName:'',
    age: undefined,
    email: '',
    password: '',
    address: '',
    contactNo: '',
    gender: ''

});

const onFinish = values => {
  console.log('Success:', values);
};

// const validateConfirmPassword = (_, value) => {
//   if (value !== form.user.password) {
//     return Promise.reject(new Error('The two passwords that you entered do not match!'));
//   }
//   return Promise.resolve();
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { firstName, lastName, contactNo, age, email, password, address, gender, } = form;

  try {
    // Make a POST request to the backend server to register a new user
    const response = await axios.post('http://localhost:5005/api/users', {
      firstName,
      contactNo,
      lastName,
      age,
      email,
      password,
      address,
      gender,
    });

    message.success('Account added successfully!');
    // Redirect to home page after successful registration
    router.push('/');
    
  } catch (error) {
    message.error('Account Invalid');
    console.error(error);
  }
};
</script>

<style scoped>
.Register {
  background-image: url('public/img/rec.png'); /* Specify the path to your background image */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 10px 20px; /* Adjust padding as needed */
  border-radius: 5px;
  cursor: pointer;
}

.container {
  width: 300px;
  background-color: rgb(250, 251, 252);
  padding-top: 40px;
}
</style>
