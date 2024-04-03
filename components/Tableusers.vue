<template>
    <div>
        <a-table 
        :dataSource="data.users"
        :columns="columns"
        :loading="pending"
        style="width:1200px"/>
    </div>
</template>
<script lang="ts" setup>
const columns = [
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          }
        ]
    const { data, pending, error, status, refresh } = await useFetch('https://dummyjson.com/users')
</script>