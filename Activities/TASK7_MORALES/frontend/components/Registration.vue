<template>
  <div class="form-container">
    <h2 class="form-title">Registration</h2>
    <a-form
      :model="form"
      @submit="handleSubmit"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >

    <a-form-item
      name="firstName"
      :rules="[{ required: true, message: 'Please input your firstame!' }]">
    <a-input v-model:value="form.firstName"
      placeholder="First Name">

      </a-input>
    </a-form-item>

    <a-form-item
      name="lastName"
      :rules="[{ required: true, message: 'Please input your lastname!' }]">
    <a-input v-model:value="form.lastName"
      placeholder="Last Name">

      </a-input>
    </a-form-item>

    <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]">
    <a-input v-model:value="form.username"
      placeholder="Username">

      </a-input>
    </a-form-item>

    <a-form-item
      name="email"
      :rules="[{ required: true, message: 'Please input your Email!' }]">
      <a-input v-model:value="form.email"
        placeholder="Email">

        </a-input>
    </a-form-item> 

    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="form.password" placeholder="Password">

      </a-input-password>
    </a-form-item>

    <a-form-item
      name="contactNo"
      :rules="[{ message: 'Please input your contact No.!' }]">
    <a-input v-model:value="form.contactNo"
      placeholder="Contact No.">

      </a-input>
    </a-form-item>

    <a-form-item >
      <a-button :disabled="disabled" type="primary" html-type="submit" class="register-form-button">
        Register
      </a-button>

      <a-button class="member-button" type="link" @click="router.push('/')">Already a member? Login</a-button>
    </a-form-item>

    </a-form>
  </div>
</template>

<script setup>
import axios from 'axios';

const router = useRouter();

const form = reactive({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  contactNo: ''

});



const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
  return !(form.firstName && form.lastName && form.contactNo &&  form.username && form.password && form.email);
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const { firstName, lastName, contactNo, username, email, password } = form;

  try {
    // Make a POST request to the backend server to register a new user
    const response = await axios.post('http://localhost:5005/api/users', {
      firstName,
      lastName,
      username,
      email,
      password,
      contactNo,
    });

    
    // Redirect to home page after successful registration
    router.push('/');
    
  } catch (error) {
    
    console.error(error);
  }
};
</script>
 
<style scoped>
.register-form-button {
  width: 100%;
  margin-top: 20px;
  background-color: #0c5d92;
  color: #ffffff;
}
 
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: #b3ddff93;
  padding: 20px;
  width: 40%;
  height: 82%;
  margin-top: 70px;
  border-radius: 15px;
 

}
 
.form-title{
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.member-button {
  color:  #001F56;
  transition: color 0.3s;
}

.member-button:hover {
  color: #5bd0ff;
}
</style>