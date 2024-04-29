<template>
  <div class="p-8">
    <div class="pb-4"style="display: flex; align-items: center;">
      <!-- Search bar -->
      <a-input-search 
      v-model:value="value"
      placeholder="input search text" 
      style="width: 500px"
      @search="onSearch"
    />
    <!-- Radio buttons for switching between views -->
    <div style="margin-left: auto;">
      <a-space direction="vertical">
    <a-radio-group v-model:value="size"> <!-- Navigate to different routes on radio button click -->
      <a-radio-button value="small" @click="router.push('/app/applicants')"><AppstoreOutlined /></a-radio-button>
      <a-radio-button value="small" @click="router.push('/app/Table')"><BarsOutlined /></a-radio-button>
    </a-radio-group>
  </a-space>
  </div>
  </div>
    <!-- Display user cards in a grid -->
    <a-row :gutter="[16,16]">
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card @click="showModal(user)" class="user-card shadow-md bg-emerald-50 border-amber-100 border-2">
          <div>
            <a-avatar :size="70" :src="user.image" />
            <p class="user-name text-2xl font-medium font-serif text-teal-700">{{ user.firstName }} {{ user.lastName }}</p>
            <p class="text-base font-seriffont-normal text-teal-700"> 
              <span style="position: absolute; margin-top: -3px; margin-left: -18px"><PhoneOutlined /></span> {{ user.phone }}</p>
          </div>
        </a-card>
      </a-col>
    </a-row>
     <!-- Modal for displaying user information -->
    <a-modal v-model:visible="modalVisible" title="User Information" :footer="null" style="width: 800px;">
      <div style="display:flex; align-items:normal;">
        <a-avatar :size="128" :src="selectedUser.image" style="margin-right: 30px;" />
        <div class="font-medium text-base text-teal-950" style="margin-left: 30px;">
          <p>Name:  </p>
          <p>Gender:  </p>
          <p>Birthday:  </p>
          <p>Address: </p>
        </div>
        <div class="text-base" style="margin-left: 10px;">
          <p> {{ selectedUser.firstName }} {{ selectedUser.maidenName }} {{ selectedUser.lastName }}</p>
          <p> {{ selectedUser.gender }}</p>
          <p> {{ selectedUser.birthDate }}</p>
          <p> {{ selectedUser.address.address }}, {{ selectedUser.address.city }}</p>
        </div>
        <div class="font-medium  text-base text-teal-950" style="margin-left: 30px;">
          <p>Height:  </p>
          <p>Weight:  </p>
        </div>
        <div class="text-base" style="margin-left: 10px;">
          <p>{{ selectedUser.height }}</p>
          <p>{{ selectedUser.weight }}</p>
        </div>
      </div>
    </a-modal>
  </div>
   <!-- Pagination -->
  <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" class="pb-5 pl-5" />
</template>

<script setup>
import { ref, watch } from 'vue';

const users = ref([]);
const modalVisible = ref(false);
const selectedUser = ref({});
const currentPage = ref(1);
const pageSize = 16; // Number of users per page 
const router = useRouter()

// Function to show modal with user information
const showModal = (user) => {
  selectedUser.value = user;
  modalVisible.value = true;
};
// Function to handle page change
const handlePageChange = (page) => {
  currentPage.value = page;
};

// Initialize paginatedUsers
const paginatedUsers = ref([]);

// Watch currentPage and users, and update paginatedUsers accordingly
watch([users, currentPage], () => {    
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  paginatedUsers.value = users.value.slice(startIndex, endIndex); 
});


// Fetch data and update users
(async () => { 
  const { data: fetchedData, pending, error, refresh } = await useFetch('https://dummyjson.com/users');

  if (fetchedData.value) {
    users.value = fetchedData.value.users;
  }
})();
</script>

<style>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.user-name {
  margin-top: 8px;
}

</style>
