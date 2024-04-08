<template>
  <div >
    <a-row :gutter="16" :style="{ margin: '0px', marginTop: '20px', marginBottom: '30px' }">
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card class="user-card">
          <div >
            <a-avatar :size="64" :src="user.image" />
            <p><UserOutlined />{{ user.firstName }} {{ user.lastName }}</p>
            <p ><MailOutlined />{{ user.email }}</p>
            <a-button class="button" type="primary" @click="showModal(user)">View</a-button>
          </div>
        </a-card>
      </a-col>
     
    </a-row>
   
    <a-pagination :current="currentPage" :total="users.length" :pageSize="pageSize" @change="handlePageChange" />
 
    <a-modal v-model:visible="modalVisible" title="User Information" :footer="null">
      <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'center' }">
        <a-col :span="12">
          <a-avatar :size="128" :src="selectedUser.image" />
        </a-col>
        <a-col :span="12">
          <p :style="{ textAlign: 'center'}"><UserOutlined />{{ selectedUser.firstName }} {{ selectedUser.lastName }}</p>
        <p :style="{ textAlign: 'center' }"><HomeFilled /> {{ selectedUser.address.address }}, {{ selectedUser.address.country }}</p>
        <p :style="{ textAlign: 'center' }"><PhoneFilled />{{ selectedUser.phone}} </p>
        <p :style="{ textAlign: 'center' }"><b>Age:</b> {{ selectedUser.age }} </p>
        <p :style="{ textAlign: 'center' }"><b>Gender:</b> {{ selectedUser.gender }}</p>
        </a-col>
        
      </div>
    </a-modal>
  </div>
</template>
 
<script>
export default{
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
 
const updatePaginatedUsers = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedUsers.value = users.value.slice(startIndex, endIndex);
    };
 
(async () => {
  const { data: fetchedData, pending, error, refresh } = await useFetch('https://dummyjson.com/users');
 
  if (fetchedData.value) {
    users.value = fetchedData.value.users;
  }
})();
watch([currentPage, users], () => {
      updatePaginatedUsers();
    });
 
    // Initialize paginatedUsers
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
      pageSize
    };
 
  }
}
 
</script>
 
<style scoped>
.user-card{
  background-color: #13cedf;
}
.button{
  background: #144e53;
 
}
 
</style>