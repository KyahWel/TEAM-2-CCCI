<template>
    <div>
      <!-- Ant Design components can be used here -->
      <button @click="fetchUsers">Fetch Users</button>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await this.$axios.get('http://localhost:5005/users');
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  