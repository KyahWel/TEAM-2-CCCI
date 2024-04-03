<template>
    <div class="modal-overlay" v-if="visible" @click="closeModal">
      <div class="modal">
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
        <p>Email: {{ user.email }}</p>
        <!-- Add more user details here as needed -->
        <button @click.stop="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const { user, visible } = defineProps(['user', 'visible']);
  
  const closeModal = () => {
    $emit('close');
  };

  
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 80%;
  }
  
  button {
    margin-top: 10px;
    cursor: pointer;
  }
  </style>