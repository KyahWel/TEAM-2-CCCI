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

          <!-- Modal Component -->
          <a-modal
  v-model:visible="updateModalVisible"
  title="Update User"
  ok-text="Save"
  cancel-text="Cancel"
  @ok="saveUserChanges"
>
  <template #footer>
    <a-button key="submit" type="primary" :loading="saving" @click="saveUserChanges">
      Save
    </a-button>
    <a-button key="back" @click="updateModalVisible = false">
      Cancel
    </a-button>
  </template>
  <a-form
    :model="selectedUser"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
  >
    <a-form-item label="First Name">
      <a-input v-model:value="selectedUser.firstName" />
    </a-form-item>
    <a-form-item label="Last Name">
      <a-input v-model:value="selectedUser.lastName" />
    </a-form-item>
    <a-form-item label="Email">
      <a-input v-model:value="selectedUser.email" />
    </a-form-item>
    <a-form-item label="Contact No.">
      <a-input v-model:value="selectedUser.contactNo" />
    </a-form-item>
  </a-form>
</a-modal>
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

    const updateModalVisible = ref(false);
    const selectedUser = ref({});
    const saving = ref(false);

    const updateUser = async (user) => {
      selectedUser.value = user;
      updateModalVisible.value = true;
    };

    const saveUserChanges = async () => {
      saving.value = true;
      try {
        const response = await axios.put(`http://localhost:5005/admin/${selectedUser.value.id}`, selectedUser.value);
        users.value = response.data;
        updateModalVisible.value = false;
        await fetchUsers(); 
        message.success('User updated successfully'); 
      
      } catch (error) {
        console.error(error);
        message.error('Failed to update user');
      } finally {
        saving.value = false;
      }
    };

    return {
      users,
      columns,
      activeKey: '1',
      fetchUsers,
      deleteUser,
      updateModalVisible,
      selectedUser,
      saving,
      updateUser,
      saveUserChanges,

      
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