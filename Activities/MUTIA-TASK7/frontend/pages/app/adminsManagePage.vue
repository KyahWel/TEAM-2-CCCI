<template>
    <div style="padding: 20px">
      <!-- Tabs component -->
      <a-tabs v-model="activeKey" type="card">
      <a-tab-pane key="1" tab="View Admins">    <!-- First tab: View Admins -->
        <a-button shape="circle" @click="fetchUsers" :size="24" :style="{ border: 'none',marginBottom: '10px', marginLeft: '97%'  }"><ReloadOutlined /></a-button>
        <a-table 
        :data-source="users" 
        :columns="columns" 
        bordered
        :style="{ 'min-height': '450px', 'overflow-y': 'auto' }"
        :pagination="pagination" 
        :loading="loading" 
        @change="handleTableChange" >

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

          <!-- Modal Component For Updating Info of Admin-->
          <a-modal
            v-model:visible="updateModalVisible"
            title="Update User"
            ok-text="Save"
            cancel-text="Cancel"
            @ok="saveUserChanges">

            <template #footer>
              <a-button key="submit" type="primary" :loading="saving" @click="saveUserChanges" style="background-color: blue">
                Save
              </a-button>
              <a-button key="back" @click="updateModalVisible = false">
                Cancel
              </a-button>
            </template>

             <!-- Form component for updating Admin -->
            <a-form
              :model="selectedUser"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 18 }">
              
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
      
      <!-- Second tab: Manage Admin -->
      <a-tab-pane key="2" tab="Manage Admin">
        <a-card class="container-manage">
          <h1 class="text">Create Account</h1>
          <AdminManage/>    <!-- AdminManage component -->
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
        width: 250,
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: 250,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        width: 250,
      },
      {
        title: 'Contact',
        dataIndex: 'contactNo',
        key: 'contactNo',
        width: 220,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 350,
      },
      {
        title: 'Action',
        key: 'action',
        width: 150,
      },
    ];

    const pagination = ref({
      current: 1,
      pageSize: 5,
      total: 0,
    });

    const loading = ref(false);
    const updateModalVisible = ref(false);
    const selectedUser = ref({});
    const saving = ref(false);

    const handleTableChange = (newPagination) => {
    pagination.value.current = newPagination.current;
    pagination.value.pageSize = newPagination.pageSize;
    fetchUsers();
    };

  // Fetch users function
  const fetchUsers = async () => {
      loading.value = true;
      try {
        const response = await axios.get(`http://localhost:5005/admins`);
        users.value = response.data;

      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

  // Delete user function
  const deleteUser = async (id) => {
      await axios.delete(`http://localhost:5005/admin/${id}`);
      message.success('Deleted successfully'); 
      await fetchUsers(); 
    };

  // Update user function
  const updateUser = async (user) => {
      selectedUser.value = user;
      updateModalVisible.value = true;
    };

  // Save user changes function
  const saveUserChanges = async () => {
    saving.value = true;
    try {
        const response = await axios.put(`http://localhost:5005/admin/${selectedUser.value.id}`, selectedUser.value);
        users.value = response.data;
        updateModalVisible.value = false;
        await fetchUsers(); 
        message.success('Updated successfully'); 
      
      } catch (error) {
        console.error(error);
        message.error('Failed to update user');
      } finally {
        saving.value = false;
      }
    }; 
    
  // Call fetchUsers function when component is updated
  onUpdated(() => {
    fetchUsers();
  });

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
      pagination,
      loading,
      handleTableChange,
      
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