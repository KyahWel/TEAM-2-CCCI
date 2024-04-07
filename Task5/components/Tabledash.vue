<template>
    <div class="p-8 flex " >
        <a-table 
        
        :dataSource="data.users"
        :columns="columns"
        :loading="pending"
        style="width:100%; background:#fef3c7; header:#fef3c7;" />
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

    const column: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #fef3c7',
  }
</script>