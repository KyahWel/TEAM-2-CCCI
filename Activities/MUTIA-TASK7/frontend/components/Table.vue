<template>
  <a-card>
    <a-button shape="circle" @click="fetchUsers" :size="24" :style="{ border: 'none',marginBottom: '10px', marginLeft: '97%'  }"><ReloadOutlined /></a-button>
    <a-table 
        :data-source="users" 
        :columns="columns" 
        @click="showModal"
        bordered
        :style="{ 'min-height': '555px', 'overflow-y': 'auto' }"
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
      const response = await axios.get('http://localhost:5005/users');
      users.value = response.data;
    }; 
      

    const showModal = (user) => {
      console.log('showModal called with user:', user);
    selectedUser.value = user;
    modalVisible.value = true;
    };

    fetchUsers();

    // const pagination = {
    // current: 1,
    // pageSize: 10,
    // filter: {},
    // sortedInfo: {},
    // };

    
    
    return {
      users,
      columns,
      showModal,
      modalVisible,
      selectedUser,
      
    };
  },
};
</script>

<style scoped>

</style>


