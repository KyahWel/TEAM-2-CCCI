<template>
<div class="p-8 flex">
    <a-row :gutter="16" :style="{ margin: '0px'}">
      <a-col v-for="(user, index) in displayedUsers" :key="user.id" :span="6">
        <a-card class="user-card" @click="openModal(user)">
          <a-avatar :size="64" :src="user.image" />
          <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
          <p>{{ user.email }}</p>
        </a-card>
      </a-col>
    </a-row>
    <Modal :visible="modalVisible" @close="closeModal" :user="selectedUser" />
  </div>
  <div class="p-10">
      <a-button @click="prevPage" :disabled="currentPage === 1">Previous</a-button>
      &nbsp;
      <span>Page {{ currentPage }} of {{ totalPages }} </span>
      &nbsp;
      <a-button @click="nextPage" :disabled="currentPage === totalPages"> Next</a-button>
    </div>
  </template>
  
  <script setup>
  const users = ref([]);
  
  (async () => {
    const { data: fetchedData, pending, error, refresh } = 
    await useFetch('https://dummyjson.com/users');
  
    if (fetchedData.value) {
      users.value = fetchedData.value.users;
    }
  })();

  import { ref, computed } from 'vue';
  import Modal from '~/components/Modal.vue';

const usersPerPage = 10;
let currentPage = ref(1);
let modalVisible = ref(false);
let selectedUser = ref(null);
const displayedUsers = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage;
  const end = currentPage.value * usersPerPage;
  return users.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage));

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
const openModal = (user) => {
  selectedUser.value = user;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
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