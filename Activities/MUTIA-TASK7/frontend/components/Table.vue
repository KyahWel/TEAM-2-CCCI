<template>
  <a-card>
    <a-button shape="circle" @click="fetchUsers" :size="24" :style="{ border: 'none',marginBottom: '10px', marginLeft: '97%'  }"><ReloadOutlined /></a-button>
    <a-table 
        :data-source="users" 
        :columns="columns" 
        @click="showModal"
        bordered
        :style="{ 'min-height': '555px', 'overflow-y': 'auto' }"
        :pagination="pagination" 
        :loading="loading" 
        @change="handleTableChange" 
        >
        <template #bodyCell="{ column, record}">
          <template v-if="column.key === 'action'">
              <button @click="showModal(record)"><EyeOutlined /></button>
          </template>
        </template>
    </a-table>


        <applicant-card
        :visible="modalVisible" 
        :selected-user="selectedUser" 
        @update:visible="(isVisible) => (modalVisible = isVisible)"/> 
  </a-card>
</template>

<script>
  import axios from 'axios';
  import ApplicantCard from './ApplicantCard.vue';


  export default {
    components: {
    ApplicantCard
  },
  setup() {
    const users = ref([]);
    const modalVisible = ref(false);
    const selectedUser = ref({});

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
        width: 220,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        width: 180,
      },
      {
        title: 'Contact',
        dataIndex: 'contactNo',
        key: 'contactNo',
        width: 110,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 280,
      },
      {
        title: 'Action',
        key: 'action',
        width: 70,
      },
    ];

    const pagination = ref({
      current: 1,
      pageSize: 9,
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
      try{
        const response = await axios.get('http://localhost:5005/users');
      users.value = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
      
    }; 
      

    const showModal = (user) => {
      console.log('showModal called with user:', user);
    selectedUser.value = user;
    modalVisible.value = true;
    };

    fetchUsers();



   

    
    
    return {
      users,
      columns,
      showModal,
      modalVisible,
      selectedUser,
      pagination,
      loading,
      handleTableChange,
      
    };
  },
};
</script>

<style scoped>

</style>


