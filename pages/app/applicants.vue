<template>
  <div class="p-8 flex">
    <a-row :gutter="16" :style="{ margin: '0px'}">
      <a-col v-for="user in users" :key="user.id" :span="6">
        <a-card class ="user-card">
          <a-avatar :size="64" :src="user.image" />
          <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
          <p>{{ user.email }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
const users = ref([]);

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