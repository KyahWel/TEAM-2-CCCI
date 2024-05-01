<template>
  <div class="p-1">
    <a-tabs v-model="activeKey" type="card">
    
    <a-tab-pane key="1" tab="Manage Employers">
        <a-button shape="round" type="primary" :size="size" class="flex justify-center items-center m-3" @click="fetchUsers">Reload <ReloadOutlined /></a-button>
    
      <a-table 
      :data-source="users" 
      :columns="columns" 
      bordered
      :style="{ 'min-height': '450px', 'overflow-y': 'auto' }"
      :pagination="pagination" 
      :loading="loading" 
      @change="handleTableChange" 
      >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-button @click="updateUser(record)"><EditOutlined /></a-button>

              <a-popconfirm title="Delete Employer?" @confirm="deleteUser(record.id)">
                <template #icon><question-circle-outlined style="color: red" /></template>
                <a-button :style="{ color: 'red' }" type="danger"><DeleteOutlined /></a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>

        <a-modal
          v-model:visible="updateModalVisible"
          title="Update User"
          ok-text="Save"
          cancel-text="Cancel"
          @ok="saveUpdates"
        >
          <template #footer>
            <a-button key="submit" type="primary" :loading="saving" @click="saveUpdates" style="background-color: blue">
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
    
    <a-tab-pane key="2" tab="Add New Employer">
      
      <a-card class="flex flex-col justify-items-center items-center" :style="{ 'min-height': '570px' }">
        <h1 class="text-2xl"><b>Create Administrator Account</b></h1>
       <CreateEmployer/>
      </a-card>
      
    </a-tab-pane>
      
  </a-tabs>
  </div>
      
 
 
</template>

<script>
// Dashboard Layout
definePageMeta({
    layout: 'dashboard'
})

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
      title: 'Middle Name',
      dataIndex: 'middleName',
      key: 'middleName',
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
      title: 'Company',
      dataIndex: 'previousCompanyName',
      key: 'previousCompanyName',
    },
    {
      title: 'Edit / Delete',
      key: 'action'
    },
  ];

  const pagination = ref({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const loading = ref(false);

const handleTableChange = (newPagination) => {
pagination.value.current = newPagination.current;
pagination.value.pageSize = newPagination.pageSize;
fetchUsers();
};

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

  onUpdated(() => {
    fetchUsers();
  });

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5005/admin/${id}`);
    message.success('Employer Deleted'); 
    await fetchUsers(); 
  };

  const updateModalVisible = ref(false);
  const selectedUser = ref({});
  const saving = ref(false);

  const updateUser = async (user) => {
    selectedUser.value = user;
    updateModalVisible.value = true;
  };

  const saveUpdates = async () => {
    saving.value = true;
    try {
      const response = await axios.put(`http://localhost:5005/admin/${selectedUser.value.id}`, selectedUser.value);
      users.value = response.data;
      updateModalVisible.value = false;
      await fetchUsers(); 
      message.success('Updated Successfully'); 
    
    } catch (error) {
      console.error(error);
      message.error('Update Failed');
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
    saveUpdates,
    pagination,
    loading,
    handleTableChange,
    
  };
},
};

</script>

<style scoped>

</style>