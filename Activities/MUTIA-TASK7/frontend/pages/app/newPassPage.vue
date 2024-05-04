<template>
    <div class="container">
      <a-card class="form-container" >
        <h2 class="form-title">Create New Password</h2>
       
        <!--Reset Password Form-->
        <a-form
          :model="form"
          @submit.prevent="handleSubmit">
        
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Provide your username!' }]">
          <a-input v-model:value="form.username" placeholder="Username"></a-input>
        </a-form-item>
    
        <a-form-item
          name="newPass"
          :rules="[{ required: true, message: 'Provide your new Password!' }]">
          <a-input 
            v-model:value="form.newPass"
            :type="showPassword? 'text' : 'password'"
            placeholder="New Password">
          </a-input>
        </a-form-item>

        <a-form-item
          name="confirm"
          :rules="[{ required: true, message: 'Please confirm your password!' }]">
          <a-input 
            v-model:value="form.confirm"
            :type="showPassword? 'text' : 'password'"
            placeholder="Confirm Your Password">
          </a-input>
        </a-form-item>
        
        <a-checkbox v-model:checked="showPassword" >Show password</a-checkbox>

        <a-button :disabled="disabled" type="primary" html-type="submit" class="forgot-form-button">
          Submit
        </a-button>

      
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import axios from 'axios';

definePageMeta({
  layout: 'landing'
});

const router = useRouter();
const showPassword = ref(false);

const form = reactive({
  username: '',
  newPass: '',
  confirm: ''
});

const disabled = computed(() => {
  return !(form.newPass && form.confirm && form.username);
});


// Resetting Password Function
const handleSubmit = async () => {
  if (form.newPass!== form.confirm) {
    message.error('Passwords do not match');
    return;
  }

  try {
    // GET request to the backend server to Check if username exists
    const usernameResponse = await axios.get(`http://localhost:5005/api/users/${form.username}`);
    if (!usernameResponse.data.exists) {
      message.error('Username does not exist');
      return;
    }

    // PUT request to the backend server to Reset password
    const response = await axios.put('http://localhost:5005/api/reset-password', {
      username: form.username,
      password: form.newPass
    });

    if (response.data.success) {
      message.success('Password updated successfully!');
      router.push('/');
    } else {
      message.error('Failed to update password');
    }
  } catch (error) {
    console.error(error);
    message.error('Failed to update password');
  }
};
</script>

<style scoped>                                                                
.container {
  margin-top: 20%;
  margin-left: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
}

.forgot-form-button {
  width: 100%;
  margin-top: 20px;
  background-color: rgb(115, 169, 216);
}

.form-container {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background-color: azure;
  width: 90%;
}

.form-title{
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
}

.ant-checkbox-wrapper {
  margin-right: 60%;
}

.ant-form-item{
  text-align: left;
}
</style>