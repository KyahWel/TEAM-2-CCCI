<template>
  <div class="p-8">
    <a-row :gutter="16">
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card class ="user-card">
          <div>
            <a-avatar :size="64" :src="user.image" />
            <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
            <p>{{ user.email }}</p>
            <a-button type="primary" @click="showModal(user)">View</a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-modal v-model:visible="modalVisible" title="User Information" :footer="null">
      <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }">
        <a-avatar :size="128" :src="selectedUser.image" />
        <p :style="{ textAlign: 'center'}">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</p>
        <p :style="{ textAlign: 'center' }">{{ selectedUser.address.address }}, {{ selectedUser.address.country }}</p>
      </div>
    </a-modal>
  </div>
  <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" />
</template>

<script setup>
import { ref, watch } from 'vue';

const users = ref([]);
const modalVisible = ref(false);
const selectedUser = ref({});
const currentPage = ref(1);
const pageSize = 12; // Number of users per page

const showModal = (user) => {
  selectedUser.value = user;
  modalVisible.value = true;
};

const handlePageChange = (page) => {
  currentPage.value = page;
};

// Initialize paginatedUsers
const paginatedUsers = ref([]);


watch([users, currentPage], () => {    // Watch currentPage and users, and update paginatedUsers accordingly
  const startIndex = (currentPage.value - 1) * pageSize; // Function to update paginatedUsers based on currentPage and users
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
  margin-top: 8px; /* Adjust this value as needed */
}
</style>
