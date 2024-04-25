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


<!-- <template>
  
  <a-card>
      
      <a-table
        :columns="filteredColumns" 
        :dataSource="filteredData"
        :pagination="pagination" 
        :loading="loading" 
        @change="handleTableChange" 
        @click="showModal"> 
        
          
          <template #bodyCell="{ column, record}">
            <template v-if="column.key === 'operation'">
                <button @click="showModal(record)"><EyeOutlined /></button>
            </template>
          </template>
      </a-table>

      
      <applicant-card
        :visible="modalVisible" 
        :selected-user="selectedUser" 
        @update:visible="(isVisible) => (modalVisible = isVisible)"/> 
  </a-card>
</template> -->

<!-- <script setup>
// Define the columns for the table
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key:'firstName',
    width: '20%',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key:'lastname',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key:'email',
  },
  {
    title: 'Contact No',
    dataIndex: 'contactNo',
    key:'contactNo',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 50,
    
  },
];
const data = ref({ users: [] });  // Define the data property for the component
const modalVisible = ref(false);  // Define the reactive variable for the visibility of the applicant card
const selectedUser = ref({});     // Define the reactive variable for the selected user

// Define the function to show the applicant card
const showModal = (user) => {
  selectedUser.value = user;
  modalVisible.value = true;
};
// Define the function to fetch the data from the API
(async () => {
  const { data: fetchedData, pending, error, refresh } = await useFetch('http://localhost:5005/users');

  if (fetchedData.value) {
    data.value.users = fetchedData.value.users;
    console.log('Fetched data:', fetchedData.value); // Check if data is fetched correctly
    console.log('Data value:', data.value.users);
  }
})();

// Use computed properties to filter and sort the data
const filteredData = computed(() => {
  let filtered = data.value.users;
  if (pagination.filters) {
    filtered = filtered.filter((item) => {
      for (const key in pagination.filters) {
        if (pagination.filters[key] && item[key]!== pagination.filters[key]) {
          return false;
        }
      }
      return true;
    });
  }
  if (pagination.sortedInfo && pagination.sortedInfo.order) {
    filtered = filtered.sort((a, b) => {
      if (pagination.sortedInfo.order === 'ascend') {
        return a[pagination.sortedInfo.field] > b[pagination.sortedInfo.field]? 1 : -1;
      } else {
        return a[pagination.sortedInfo.field] < b[pagination.sortedInfo.field]? 1 : -1;
      }
    });
  }
  console.log('Filtered data:', filtered);
  return filtered;
});

// Define the computed property for the filtered columns
const filteredColumns = computed(() => {
  return columns.map((col) => {
    if (col.sorter) {
      col.sorter = (a, b) => a[col.dataIndex] - b[col.dataIndex];
    }
    if (col.filters) {
      col.onFilter = (value, record) => record[col.dataIndex].indexOf(value) === 0;
    }
    return col;
  });
});

// Define the pagination object
const pagination = {
  current: 1,
  pageSize: 10,
  filter: {},
  sortedInfo: {},
};

const handleTableChange = (newPagination, filters, sorter) => {
  const newFilteredData = filteredData.value.slice();

  if (filters) {
    newFilteredData.filter((item) => {
      for (const key in filters) {
        if (filters[key] && item[key]!== filters[key]) {
          return false;
        }
      }
      return true;
    });
  }

  if (sorter && sorter.field) {
    newFilteredData.sort((a, b) => {
      if (sorter.order === 'ascend') {
        return a[sorter.field] > b[sorter.field]? 1 : -1;
      } else {
        return a[sorter.field] < b[sorter.field]? 1 : -1;
      }
    });
  }

  data.value.users = newFilteredData;
  pagination.current = newPagination.current;
  pagination.pageSize = newPagination.pageSize;
  pagination.filteredInfo = filters;
  pagination.sortedInfo = sorter;
};

</script> -->

