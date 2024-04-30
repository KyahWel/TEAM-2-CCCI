<template>
  <div>
    <!-- Container for user cards -->
    <a-row :gutter="16" :style="{ margin: '0px', marginTop: '20px', marginBottom: '30px' }">
      <!-- Loop through paginatedUsers to display user cards -->
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card class="user-card">
          <div>
            <!-- Display user avatar, name, contact info, and View button -->
            <a-avatar :size="64" :src="user.image" />
            <p :style="{ fontWeight: 'bold'}" > <UserOutlined /> {{ user.firstName }} {{ user.lastName }}</p> 
            <p> <PhoneOutlined /> {{ user.contactNo }}</p> <!-- Display user.contact -->
            <p> <MailOutlined /> {{ user.email }}</p>
            <a-button class="button" type="primary" @click="showModal(user)">View</a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>

    <!-- Pagination for navigating through users -->
    <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" />

    <!-- Modal for displaying detailed user information -->
    <a-modal v-model:visible="modalVisible" title="User Information" :footer="null">
      <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }">
        <!-- Display user avatar and detailed information -->
        <a-avatar :size="128" :src="selectedUser.image" />
        <p :style="{ textAlign: 'center'}"> <span :style="{ fontWeight: 'bold'} ">Name:</span> {{ selectedUser.firstName }} {{ selectedUser.lastName }}</p>
        <p :style="{ textAlign: 'center' }"> <span :style="{ fontWeight: 'bold'} ">Username:</span> {{ selectedUser.username }}</p>
        <p :style="{ textAlign: 'center' }"> <span :style="{ fontWeight: 'bold'} ">Email:</span> {{ selectedUser.email }}</p>
        <p :style="{ textAlign: 'center' }"> <span :style="{ fontWeight: 'bold'} ">Contact:</span> {{ selectedUser.contactNo }}</p>
      </div>
    </a-modal>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  setup() {
    // Define reactive variables
    const users = ref([]);
    const modalVisible = ref(false);
    const selectedUser = ref({});
    let currentPage = ref(1);
    const pageSize = 8;

    // Function to handle page change
    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    // Function to show modal with user details
    const showModal = (user) => {
      selectedUser.value = user;
      modalVisible.value = true;
    };

    // Function to update paginatedUsers based on current page
    const updatePaginatedUsers = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedUsers.value = users.value.slice(startIndex, endIndex);
    };

    // Fetch user data from API
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:5005/users');
        const data = await response.json();
        users.value = data;
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();

    // Watch for changes in currentPage and users to update paginatedUsers
    watch([currentPage, users], () => {
      updatePaginatedUsers();
    });

    // Initialize paginatedUsers
    const paginatedUsers = ref([]);
    updatePaginatedUsers();

    // Return variables and functions to be used in template
    return {
      users,
      currentPage,
      paginatedUsers,
      handlePageChange,
      modalVisible,
      selectedUser,
      showModal,
      pageSize
    };
  }
}
</script>

<style scoped>
.user-card {
  background-image: url('/assets/images/bg1.png');
  margin-bottom: 15px;
  border-radius: 10px;
  border-color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.button {
  background: #8b004d;
  margin-top: 4px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
