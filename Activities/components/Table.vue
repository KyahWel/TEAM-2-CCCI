<template>
  <!-- Card component containing a table -->
  <a-card>
    <!-- Table component displaying user data -->
    <a-table
      :columns="columns"
      :dataSource="data.users"
      :pagination="pagination"
      :loading="loading"
    >
    </a-table>
  </a-card>
</template>

<script setup>
// Importing necessary dependencies and defining reactive variables

// Array of column configurations for the table
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    width: '20%',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastname', // Typo: should be 'lastName'
    width: '20%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '10%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

// Fetching user data from an API endpoint using the useFetch hook
const { data, pending, error, status, refresh } = await useFetch('https://dummyjson.com/users');
</script>
