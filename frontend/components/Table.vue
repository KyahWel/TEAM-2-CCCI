<template>
  <a-card>
    
    <a-table 
        :data-source="users" 
        :columns="columns" 
      
        bordered
        :style="{ 'min-height': '555px', 'overflow-y': 'auto' }"
        >
        
    </a-table>


       
  </a-card>
</template>

<script>
  
import axios from 'axios';

  export default {
   
  setup() {
    const users = ref([]);
  

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
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Contact',
        dataIndex: 'contactNo',
        key: 'contactNo',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      
    ];

    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5005/users');
      users.value = response.data;
    }; 
      


    fetchUsers();

  

    
    
    return {
      users,
      columns,
      
      
    };
  },
};
</script>