<template>
    <div class="flex flex-col items-center justify-center">
        <a-row :gutter="[16,16]" class="justify-center animate__animated animate__zoomIn">
            <a-col v-for="applicant in paginatedUsers" :key="applicant.id" :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="mt-5">
            <div class="w-full rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-1 border-4 rounded-xl shadow-xl">
                <a-card class="h-56 flex flex-col justify-center items-center text-center shadow-md m-1">
                    <a-avatar :size="64" :src="applicant.avatar" />
                    <h1 class="font-bold mt-2">{{ applicant.firstName }} {{ applicant.lastName }}</h1>
                    <p>{{ applicant.email }}</p>
                    <NuxtLink :to="`/app/${applicant.id}`" class="button"><a-button type="primary" class="mt-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                        View {{ applicant.firstName }} Profile
                    </a-button></NuxtLink>

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

    // Fetch data and update users
    fetch('http://localhost:5005/users',{
    })
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

<style lang="scss" scoped>

</style>