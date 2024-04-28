  <template>
      <div class="form-container">
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
          name="contactNo"
          :rules="[{ required: true, message: 'Please input your contact no.!' }]">
        <a-input v-model:value="form.contactNo"
          placeholder="Contact No.">
    
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
    
        
        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="register-form-button">
            Register
          </a-button>

          <a-button type="primary" @click="clear" class="clear-button">
            Clear
          </a-button>
    
        </a-form-item>
    
        </a-form>
      </div>
    </template>
  
  <script setup>
  import axios from 'axios';
  

  
  const form = reactive({
    firstName: '',
    lastName: '',
    username: '',
    contactNo: '',
    email: '',
    password: ''
  
  });
  

  const onFinish = values => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
  const disabled = computed(() => {
    return !(form.firstName && form.lastName &&  form.username && form.contactNo && form.password && form.email);
  });
  

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { firstName, lastName, contactNo, username, email, password } = form;

  try {
    // Make a POST request to the backend server to register a new user
    const response = await axios.post('http://localhost:5005/api/admins', {
      firstName,
      contactNo,
      lastName,
      username,
      email,
      password,
    });

    message.success('Account added successfully!');
    // Redirect to home page after successful registration
    router.push('/');
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      if (error.response.data.message === 'Username already taken') {
        message.error('Username already taken');
      } else if (error.response.data.message === 'Email already taken') {
        message.error('Email already taken');
      } else if (error.response.data.message === 'Contact Number already taken') {
        message.error('Contact Number already taken');
      } else {
        message.error('Account Invalid');
      }
    } else {
      message.error('Account Invalid');
    }
    form.firstName = '';
    form.lastName = '';
    form.username = '';
    form.contactNo = '';
    form.email = '';
    form.password = '';
    console.error(error);
  }
};

  
  </script>
  
  <style scoped>
  .register-form-button {
    background-color: rgb(78, 135, 185);
    width: 75%;
  }
  .clear-button{
    background-color: rgb(50, 97, 239);
    margin-left: 5%;
  }

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .ant-form{
    width: 160%;
  }

  
  </style>