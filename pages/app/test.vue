<template>
  <div class="p-8 flex">
    <a-row :gutter="16" :style="{ margin: '0px'}">
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card class ="user-card">
          <a-avatar :size="64" :src="user.image" />
          <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
          <p>{{ user.email }}</p>
        </a-card>
      </a-col>
    </a-row>
    <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" />
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const users = ref([]);
    let currentPage = ref(1);
    const pageSize = 10; // Number of users per page

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    // Fetch data and update users
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        users.value = data.users;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    // Function to update paginatedUsers based on currentPage and users
    const updatePaginatedUsers = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedUsers.value = users.value.slice(startIndex, endIndex);
    };

    // Watch currentPage and users, and update paginatedUsers accordingly
    watch([currentPage, users], () => {
      updatePaginatedUsers();
    });

    // Initialize paginatedUsers
    const paginatedUsers = ref([]);
    updatePaginatedUsers();

    return {
      users,
      currentPage,
      paginatedUsers,
      handlePageChange,
      pageSize
    };
  }
};
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
