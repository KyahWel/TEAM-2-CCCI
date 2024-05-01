<template>
    <div class="flex flex-col items-center justify-center">
        <a-row :gutter="[16,16]" class="justify-center animate__animated animate__zoomIn">
            <a-col v-for="applicant in paginatedUsers" :key="applicant.id" :xs="24" :sm="12" :md="12" :lg="6" :xl="12" class="mt-5">
            <div class="w-full rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-1 border-4 rounded-xl shadow-xl">
                <a-card class="h-56 flex flex-col justify-center items-center text-center shadow-md m-1">
                    <h1 class="font-bold mt-2">{{ applicant.firstName }} {{ applicant.lastName }}</h1>
                    <p>{{ applicant.email }}</p>=
                </a-card>
            </div>
            </a-col>
        </a-row>
        <div class="flex justify-end">
            <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" class="mt-5"/>
        </div>
       
    </div>
</template>

<script>
definePageMeta({
    layout: 'dashboard'
})

import { ref, watch } from 'vue';

export default {
  setup() {
    const users = ref([]);
    let currentPage = ref(1);
    const pageSize = 10; // Number of users per page

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:5005/applicants');
        const data = await response.json();
        users.value = data;
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
    
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

<style lang="scss" scoped>

</style>