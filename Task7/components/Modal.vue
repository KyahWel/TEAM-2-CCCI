<template>
    <div class="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" v-if="visible" @click="closeModal">
      <div class="modal bg-white rounded-lg p-8 max-w-md" @click.stop span="6">
       <div class="flex">
        <a-avatar :size="50" :src="user.image" />
        <h2 class="text-2xl font-bold mb-4 p-2">{{ user.firstName }} {{ user.lastName }}</h2>
      </div>
        <hr class="border-2 border-amber-300 my-4" >
        <div class="grid grid-cols-2 gap-4">
        <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
        <p><span class="font-semibold">Age:</span> {{ user.age }}</p>
        <p><span class="font-semibold">Birthdate:</span> {{ user.birthDate }}</p>
        <p><span class="font-semibold">Height:</span> {{ user.height }}</p>
        <p><span class="font-semibold">Weight:</span> {{ user.weight }}</p>
        <p><span class="font-semibold">Eye Color:</span> {{ user.eyeColor }}</p>
        <p><span class="font-semibold">Gender:</span> {{ user.gender }}</p>
        <p><span class="font-semibold">Phone:</span> {{ user.phone }}</p>
        <p class="col-span-2"><span class="font-semibold">Address:</span> {{ user.address }}</p>
      </div>
        <a-button @click.stop="closeModal" class="mt-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Close</a-button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits  } from 'vue';
  
  const { user, visible } = defineProps(['user', 'visible']);
  const emit = defineEmits();
  const closeModal = () => {
    emit('close');
   
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
    background-color: #fef9c3;
    padding: 20px;
    border-radius: 5px;
    max-width: 80%;
  }
  
  button {
    margin-top: 10px;
    cursor: pointer;
  }

  .modal button {
    margin-top: 10px;
    cursor: pointer;
}
  </style>