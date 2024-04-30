<template>
  <div class="p-8 flex">
    <a-table
      :dataSource="data"
      :columns="columns"
      :loading="pending"
      style="width: 100%; background: #fef3c7; header: #fef3c7;"
    />
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const columns = [
{
    title: 'Account Type ',
    dataIndex: 'accountType',
    key: 'accountType',
  },
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
    title: 'Middle Name',
    dataIndex: 'middleName',
    key: 'middleName',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }
];

const data = ref<UserData[]>([]);
const pending = ref(false);

interface UserData {
  accountType: string;
  firstName: string;
  lastName: string;
  middleName: string;
  username: string;
  email: string;
}

onMounted(async () => {
  pending.value = true;
  try {
    const response = await axios.get('http://localhost:3001/users/');
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    pending.value = false;
  }
});
    const column: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #fef3c7',
  }
</script>