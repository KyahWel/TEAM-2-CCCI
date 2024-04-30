<template>
    <div class="form-container">
      <a-form
        :model="formState"
        name="forgot_pass"
        class="forgotpass-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <!-- Other form items -->

        <a-form-item
        name="Email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" placeholder="Enter email">
          <template #prefix>
          </template>
        </a-input>
      </a-form-item>
  
        <a-form-item>
          <!-- Login button -->
          <a-button type="primary" html-type="submit" class="login-form-button">
            Submit
          </a-button>
        </a-form-item>

        <a-form-item>
          <a-button type="link" @click="router.push('/')" class="back-button">Back</a-button>
           </a-form-item>
         

      </a-form>
    </div>
  </template>
  
  <script setup>
  const router = useRouter();
  
  import { useRouter } from 'vue-router';
  import { reactive, computed } from 'vue';
  
  const formState = reactive({
    username: '',
    password: '',
    remember: true,
  });
  
  const onFinish = values => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });
  </script>
  
  <style scoped>
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
    background-color: #1399ad;
    color: #ffffff;
  }
  
  .form-container {
  background-color: #b3ddff93;
  padding: 50px;
  width: 110%; /* Adjust the width for the landing page */
  border-radius: 15px;
  }
  
  .ant-form-item {
    margin-bottom: 10px;
  }

  .back-button {
  color:  #001F56;
  transition: color 0.3s;
}


  .back-button:hover {
  color: #5bd0ff;
}
  </style>
  