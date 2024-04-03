<template>
  <!-- Add the search bar here -->
  <a-input-search
  placeholder="Search by name"
  :style="{ marginBottom: '20px', width: '280px', marginLeft: '40px' }"
  @search="searchUser"
/>

  <div :style="{ display: 'flex', justifyContent: 'center', marginLeft: '30px' }">

    <!-- Container for the user cards -->
    <a-row 
      :gutter="16" 
      :style="{ margin: '0px' }">

    <!-- Container for each user card -->
      <a-col v-for="user in paginatedUsers" :key="user.id" :span="6">
        <a-card style="margin-bottom: 16px; width: 280px; height:200px; border: 3px solid #3248a8;">
          <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }">
            <a-avatar :size="64" :src="user.image" />
            <p :style="{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold'}">{{ user.firstName }} {{ user.lastName }}</p>
            <p :style="{ display: 'flex', textAlign: 'center' }"><img src="/assets/images/phone.png" :style="{marginRight:'4px', height:'18px', marginTop:'2px'}"> {{ user.phone }}</p>
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
</template>

<script>
export default{
  setup() {
const users = ref([]);              // Define the list of users
const modalVisible = ref(false);    // Define the modal visibility
const selectedUser = ref({});       // Define the selected user object
let currentPage = ref(1);
const pageSize = 8; // Number of users per page

const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const showModal = (user) => {       // Define the selected user object
  selectedUser.value = user;        // Set the selected user object to the user passed in as an argument
  modalVisible.value = true;        // Set the modal visibility to true
};
// const searchQuery = ref('');        // Define the search query

// const filteredUsers = computed(() => {  // Define a computed property for the filtered users
//   return users.value.filter(user => {
//     return user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase());
//   });
// });

// const onSearch = (query) => {       // Define the function to handle the search
//   searchQuery.value = query;
// };



// Define the function to fetch the user data from the API
(async () => {
  const { data: fetchedData, pending, error, refresh } = await useFetch('https://dummyjson.com/users');

  if (fetchedData.value) {
    users.value = fetchedData.value.users;
  }
})();

const updatePaginatedUsers = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedUsers.value = users.value.slice(startIndex, endIndex);
    };
// Watch currentPage and users, and update paginatedUsers accordingly
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