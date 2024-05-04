<template>
<a-card :style="{ 'min-height': '555px', 'max-width': '90%', 'overflow-y': 'auto', 'marginLeft': '75px', 'background': 'transparent', border: 'none' }">
  <a-button shape="circle" @click="fetchUsers" :size="24" :style="{ border: 'none', marginLeft: '6%'}"><ReloadOutlined /></a-button>
  <div :style="{ display: 'flex', justifyContent: 'center', marginLeft: '30px' }">
    
    <!-- Container for the user cards -->
    <a-row 
      :gutter="16" 
      :style="{ margin: '0px', marginTop: '20px' }">

    <!-- Container for each user card -->
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card style="margin-bottom: 16px; width: 280px; height:200px; border: 3px solid #3248a8;">
          <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }">
            <a-avatar :size="64" :src="user.image" />
            <p :style="{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold'}">{{ user.firstName }} {{ user.lastName }}</p>
            <p :style="{ display: 'flex', textAlign: 'center' }"><img src="/assets/images/email.png" :style="{marginRight:'4px', height:'18px', marginTop:'2px'}"> {{ user.email }}</p>
            <a-button type="primary" class="button" @click="showModal(user)">View</a-button>
          </div>
        </a-card>
      </a-col>
      <div class="page" style="display: inline-block; position: absolute; right: 0; margin-top: 425px; margin-right: 40px">
        <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" />
      </div>
    </a-row>

    
    
    <!-- The modal for displaying the user information -->
    <ApplicantCard :visible="modalVisible" :selectedUser="selectedUser" @update:visible="modalVisible = $event"></ApplicantCard>
  </div>
</a-card>
</template>

<script>
import ApplicantCard from './ApplicantCard.vue';


export default {
  components: {
    ApplicantCard
  },
  setup() {
    const users = ref([]);
    const modalVisible = ref(false);
    const selectedUser = ref({});
    let currentPage = ref(1);
    const pageSize = 8;

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const showModal = (user) => {
      
      selectedUser.value = user;
      modalVisible.value = true;
    };

    // API call to backend server to fetch users
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:5005/users');
        const data = await response.json();
        users.value = data;
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();

    const updatePaginatedUsers = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedUsers.value = users.value.slice(startIndex, endIndex);
    };

    watch([currentPage, users], () => {
      updatePaginatedUsers();
    });

    const paginatedUsers = ref([]);
    updatePaginatedUsers();

    return {
      users,
      currentPage,
      paginatedUsers,
      handlePageChange,
      modalVisible,
      selectedUser,
      showModal,
      pageSize,
      fetchUsers
    };
  }
}
</script>

<style scoped>
.ant-card-meta-title {
  margin-bottom: 0;
}


.button { 
  background: #71baff;
  text-align: center;
  margin: 8px; 
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(11, 9, 9, 0.784);
  height: 30px;

}

.page{
  margin-bottom: 5px;
  position: relative;
  
}
</style>