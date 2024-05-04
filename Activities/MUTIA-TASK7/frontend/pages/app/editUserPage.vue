<template>
  <div class="card-container">
    <a-card
      class="items-center justify-center"
      style="height: 625px; width: 100%; overflow-y: auto;"
      @ok="saveUserChanges"
    >
      <h1 class="text-2xl font-bold">Edit Personal Information</h1>
      <Divider />
      <div class="flex flex-wrap">
        <div class="w-/3 px-4">
          <a-form-item label="Profile Picture">
            <a-upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="/api/upload"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="avatar" :src="avatar" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
              </div>
            </a-upload>
          </a-form-item>
        </div>
        <div class="w-1/3 px-4">
          <a-form
            :model="userStore.user"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
          >
            <a-form-item label="First Name">
              <a-input v-model:value="userStore.user.firstName" />
            </a-form-item>
            <a-form-item label="Last Name">
              <a-input v-model:value="userStore.user.lastName" />
            </a-form-item>
            <a-form-item label="Email">
              <a-input v-model:value="userStore.user.email" />
            </a-form-item>
            <a-form-item label="Contact No.">
              <a-input v-model:value="userStore.user.contactNo" />
            </a-form-item>
            <a-form-item label="Address">
              <a-input v-model:value="userStore.user.address" />
            </a-form-item>
          </a-form>
        </div>

        <div class="w-1/3 px-4">
          <a-form
            :model="userStore.user"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
          >
            <a-form-item label="Position">
              <a-input v-model:value="userStore.user.position" />
            </a-form-item>
            <a-form-item label="Gender">
              <a-input v-model:value="userStore.user.gender" />
            </a-form-item>
            <a-form-item label="Birthday">
              <a-input v-model:value="userStore.user.birthday" />
            </a-form-item>
            <a-form-item label="Age">
              <a-input v-model:value="userStore.user.age" />
            </a-form-item>
          </a-form>
        </div>
      </div>

      <div class="container-btn">
        <a-button type="primary$@$v=v1.16$@$" shape="circle" class="save-button p-4 flex items-center justify-center" :loading="saving" @click="saveUserChanges"><CheckOutlined /></a-button>
        <a-button type="danger" shape="circle" class="cancel-button p-4 flex items-center justify-center" @click="router.push('/app/userProfile')"><CloseOutlined /></a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import { Divider } from 'ant-design-vue';
import { useUserStore } from '../stores/user'
import axios from 'axios';      // For making HTTP requests

const userStore = useUserStore()
const router = useRouter();

definePageMeta({
  layout: 'user'
})

const loading = ref(false);
const saving = ref(false);

// Save user changes function
const saveUserChanges = async () => {
  saving.value = true;
  try {
    const response = await axios.put(`http://localhost:5005/api/user/${userStore.id}`, userStore.user);
    await userStore.login(response.data);
    message.success('Updated successfully');
    router.push('/app/userProfile');
  } catch (error) {
    console.error(error);
    message.error('Failed to update user');
  } finally {
    saving.value = false;
  }
};
</script>

<style scoped>
.card-container{
  padding: 10px;
}

.px-4{
  margin-left: 3%;
}
.container-btn{
  display: flex;
  justify-content: right;
  margin-top: 10%;
}
.save-button {
  background-color: #34c759;
  margin-right: 20px;
  
}
.save-button:hover {
  background-color: #00fa68;

}

.cancel-button {
  background-color: #ff4d4f;

}
</style>