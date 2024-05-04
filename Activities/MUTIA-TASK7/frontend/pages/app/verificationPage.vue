<template>
    <div class="container">
      <a-card class="form-container" >
        <h2 class="form-title">Verification Code</h2>
        <p>Please provide the verification code.</p>

        <!--Form for Verification Code-->
        <a-form
          :model="form"
          @submit.prevent="handleSubmit">
 
        <a-form-item
          name="code"
          :rules="[{ required: true, message: 'Enter Verification Code!' }]">
          <a-input v-model:value="form.code" placeholder="Verification Code"></a-input>
        </a-form-item>
      
        <a-button :disabled="disabled" type="primary" html-type="submit" class="submit-form-button">
          Submit
        </a-button>
        
        <a-button style="color:#404040" type="link" @click="router.push('/app/forgotPassPage')">
          Didn't receive an email? Try again
        </a-button>

        <a-form-item>
          <a-button type="link" style="color:#404040; float: left" @click="router.push('/')">
            <ArrowLeftOutlined />
          </a-button>
        </a-form-item>
        
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
  code: ''
});

const disabled = computed(() => {
  return !(form.code);
});

// Verification Code Function
const handleSubmit = async () => {
  try {
    // POST request to the backend server to verify the code
    const response = await axios.post('http://localhost:5005/api/verify-code', {
      code: form.code
    });

    if (response.data.success) {
      message.success('Verification code is valid!');
      router.push('/app/newPassPage');
    } else {
      message.error('Invalid verification code. Please try again.');
      form.code = ''; // clear the form
    }
  } catch (error) {
    console.error(error);
    message.error('Invalid verification code. Please try again.');
    form.code = ''; // clear the form
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

.submit-form-button {
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