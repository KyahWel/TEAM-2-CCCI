<template>
    <div class="container">
      <a-card class="form-container" >
        <h2 class="form-title">Forgot Password?</h2>
        <p>Please provide your email for verification code.</p>
        <a-form
          :model="form"
          @submit.prevent="handleSubmit" >
    
        <a-form-item
          name="email"
          :rules="[{ required: true, message: 'Please input your Email!' }]">
          <a-input v-model:value="form.email" placeholder="Email"></a-input>
        </a-form-item>
    
        <a-button :disabled="disabled" type="primary" html-type="submit" class="forgot-form-button">
          Submit
        </a-button>

        <a-button type="link" style="color:#404040; float: left" @click="router.push('/')">
          <ArrowLeftOutlined />
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

const form = reactive({
  email: ''
});

const disabled = computed(() => {
  return!(form.email);
});

//handleSubmit function to handle form submission
const handleSubmit = async () => {
  try {
      // POST request to check if the email exists
      const response = await axios.post('http://localhost:5005/api/check-email', {
      email: form.email
    });

    if (response.data.exists) {
      message.destroy();
      message.loading('Sending verification code...',0); 
      
      // POST request to send the verification code
      const response2 = await axios.post('http://localhost:5005/api/send-verification-code', {
      email: form.email
    });

    if (response2.data.success) {
      message.destroy();
      message.success("We've sent a verification code to your email.", 2);
      router.push('/app/verificationPage');
    } else {
      message.error("Failed to send verification code. Please try again.", 2);
    }
    } else {
      message.destroy(); 
      message.error("Email does not exist. Please try again.", 2);
      form.email = '';
    }
  } catch (error) {
    console.error(error);
    message.error("Failed to send verification code. Please try again.", 2);
    form.email = '';
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
</style>