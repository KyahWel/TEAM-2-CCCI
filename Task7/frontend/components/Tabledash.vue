<template>
  <div class="p-8 flex">
    <a-table
      :dataSource="data"
      :columns="columns"
      :loading="pending"
      style="width: 100%; background: #fef3c7; header: #fef3c7;"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          
          <a-button @click="deleteUser(record._id)" class="bg-amber-500 text-white">Delete</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { type } from '../.nuxt/types/imports';


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
  },
  {
    title: '',
    key: 'operation',
    
    
  },
];

const data = ref<UserData[]>([]);
const pending = ref(false);

interface UserData {
  _id: string;
  accountType: string;
  firstName: string;
  lastName: string;
  middleName: string;
  username: string;
  email: string;
}

const editUser = async (user: UserData): Promise<void> => {
  // Implementation of editUser function
};



const deleteUser = async (_id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3001/users/${_id}`);
    console.log(response.data);
    // Add code to update your table after successful deletion
  } catch (error) {
    console.error(error);
    // Add error handling code if needed
  }
};

onMounted(async () => {
  pending.value = true;
  try {
    const response = await axios.get('http://localhost:3001/users/userprof');
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