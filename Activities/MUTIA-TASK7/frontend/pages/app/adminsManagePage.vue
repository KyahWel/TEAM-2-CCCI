<template>
    <div style="padding: 20px">
      <a-tabs v-model="activeKey" type="card">
      
      <a-tab-pane key="1" tab="View Admins">
        <a-button shape="circle" @click="fetchUsers" :size="24" :style="{ border: 'none',marginBottom: '10px', marginLeft: '97%'  }"><ReloadOutlined /></a-button>
        <a-table 
        :data-source="users" 
        :columns="columns" 
        bordered
        :style="{ 'min-height': '450px', 'overflow-y': 'auto' }"
        >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'action'">
                <a-button @click="updateUser(record)"><EditOutlined /></a-button>

                <a-popconfirm title="Sure to delete?" @confirm="deleteUser(record.id)">
                  <template #icon><question-circle-outlined style="color: red" /></template>
                  <a-button :style="{ color: 'red' }" type="danger"><DeleteOutlined /></a-button>
                </a-popconfirm>
              </template>
            </template>
            
          </a-table>
      </a-tab-pane>
      
      <a-tab-pane key="2" tab="Manage Admin">
        
        <a-card class="container-manage">
          <h1 class="text">Create Account</h1>
          <AdminManage/>
        </a-card>
        
      </a-tab-pane>
        
    </a-tabs>
    </div>
        
   
   
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
      {
        title: 'Action',
        key: 'action',
      },
    ];

    

    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5005/admins');
      users.value = response.data;
    };

    onUpdated(() => {
      fetchUsers();
    });

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:5005/admin/${id}`)
    };

    
    // const updateUser = (user) => {
    //   // Open a modal or a form to update the user
    // };

    const updateUser = async (id) => {
      const response = await axios.put(`http://localhost:5005/admin/${id}`);
      users.value = response.data;
    };


    return {
      users,
      columns,
      activeKey: '1',
      fetchUsers,
      deleteUser,
      updateUser,
      
    };
  },
};

  </script>

  <style scoped>
 .container-manage{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin-left: 27%;
  margin-top: 20px;
  background-color: rgba(106, 156, 255, 0.627);
 }

 .text{
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
 }

  </style>