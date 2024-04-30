<template>
    <a-card class="table-container">
      
      <a-table 
          :data-source="users" 
          :columns="columns" 
          bordered
          :style="{ 'min-height': '555px', 'overflow-y': 'auto' }"
          >
          <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-button @click="updateUser(record)"><EditOutlined /></a-button>

                <a-popconfirm title="Sure to delete?" @confirm="deleteUser(record.id)">
                  
                  <a-button type="danger"><DeleteOutlined /></a-button>
                </a-popconfirm>
              </template>
            </template>
      </a-table>

      <a-modal
            v-model:visible="updateModalVisible"
            title="Update User"
            ok-text="Save"
            cancel-text="Cancel"
            @ok="saveUserChanges"
          >
            <template #footer>
              <a-button key="submit" type="primary" :loading="saving" @click="saveUserChanges" style="background-color: blue">
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
        {
            title: 'Action',
            key: 'action',
        }
        
      ];
  
      const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5005/users');
      users.value = response.data;
    }; 
      


    fetchUsers();

    onUpdated(() => {
      fetchUsers();
    });

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:5005/admin/${id}`);
      message.success('Deleted successfully'); 
      await fetchUsers(); 
    };

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
        message.success('Updated successfully'); 
      
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
.table-container{
    background-color: rgb(126, 209, 209);
    width: 1000px;
   
}
</style>