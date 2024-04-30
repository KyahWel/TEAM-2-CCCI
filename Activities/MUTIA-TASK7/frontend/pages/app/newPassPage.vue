<template>
    <div class="container">
      <a-card class="form-container" >
        <h2 class="form-title">Create New Password</h2>
       
        <a-form
          :model="form"
          @submit.prevent="handleSubmit"
        >
    
        
    
        <a-form-item
        
          name="newPass"
          :rules="[{ required: true, message: 'Please enter your new passwood' }]">
          
          <a-input v-model:value="form.newPass"
            placeholder="New Password">
            </a-input>
        </a-form-item>

        <a-form-item
          name="confirm"
          :rules="[{ required: true, message: 'Please confirm your password!' }]">
          <a-input v-model:value="form.confirm"
            placeholder="Confirm Your Password">
    
            </a-input>
        </a-form-item>
    
    
        <a-form-item >
          <a-button :disabled="disabled" type="primary" html-type="submit" class="forgot-form-button">
            Submit
          </a-button>
    
          
        </a-form-item>
        <a-button type="link" style="color:#404040; float: left" @click="router.push('/')"><ArrowLeftOutlined /></a-button>
        </a-form>
      </a-card>
    </div>

</template>

<script setup>
import { message } from 'ant-design-vue';



definePageMeta({
  layout: 'landing'
});

const router = useRouter();

const form = reactive({
  newPass: '',
  confirm: ''
});

const disabled = computed(() => {
  return !(form.newPass && form.confirm);
});

const handleSubmit = () => {
  // You can add validation logic here if needed
  //...
  message.success("Password Updated Successfully");
  router.push('/');
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