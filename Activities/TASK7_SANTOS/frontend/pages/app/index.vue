<template>
    <div class="animate__animated animate__zoomIn">
        <a-row :gutter="[16,16]">
            <a-col :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
                <a-card class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-4">
                    <p class="font-semibold text-white drop-shadow-md">Welcome to PathFinder Admin Dashboard</p>
                    <h1 class="text-3xl font-bold text-white drop-shadow-md">Jose Santos</h1>

                </a-card>
            </a-col>
            <a-col :xs="24" :sm="8" :md="8" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Total Applicants" :value="100" style="margin-right: 50px" />
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="8" :md="8" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Hired Applicants" :value="32" style="margin-right: 50px" />
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="8" :md="8" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Active Applications" :value="30" style="margin-right: 50px" />
                </a-card>
            </a-col>
        </a-row>

        <a-row :gutter="[16,16]" class="mt-3">
            <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <a-card title="Applicants Trend" class="flex flex-col justify-center h-full">
                    <lineChart />
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <a-card title="Applicants Status" class="flex flex-col justify-center h-full">
                    <donutChart />
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div :style="{ width: '100%'}">
                    <!-- <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" class="flex flex-col items-center justify-center h-96"/> -->
                </div>
            </a-col>
        </a-row>



    <!-- List of Applicants Table -->
    <a-row gutter="16" class="mt-3">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14">
            <a-table :dataSource="users" :columns="columns" style="width: 100%; overflow: auto; " />
        </a-col>
        
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10">
            <a-card title="Recent Activities" class="h-full">
                <a-timeline pending="Fetching Recent Activities..." :reverse="reverse">
                    <a-timeline-item>[5:43:43 AM] Applicant #30 submitted application</a-timeline-item>
                    <a-timeline-item color="red">[5:45:32 AM] System Bug: Client Dashboard - Error 404</a-timeline-item>
                    <a-timeline-item color="green">[5:51:21 AM] Resolved System Bug </a-timeline-item>
                    <a-timeline-item color="green">[5:53:49 AM] Applicant #1 - Hired </a-timeline-item>
                    <a-timeline-item color="gray">[5:59:11 AM] Applicant #2 - On-Hold Status </a-timeline-item>
                    <a-timeline-item color="red">[6:08:32 AM] Applicant #3 - Rejected  </a-timeline-item>
                    <a-timeline-item color="green">[6:29:49 AM] Applicant #4 - Hired </a-timeline-item>
                    <a-timeline-item color="green">[6:43:29 A7] Applicant #5 - Hired </a-timeline-item>
                    <a-timeline-item color="gray">[6:58:24 AM] Applicant #6 - On-Hold Status </a-timeline-item>
                    <a-timeline-item color="gray">[7:12:41 AM] Applicant #7 - On-Hold Status </a-timeline-item>
                </a-timeline>
            </a-card>
        </a-col>
    </a-row>

    
    </div>
</template>

<script>

// Dashboard Layout
definePageMeta({
    layout: 'dashboard'
})



// // Calendar
//     import { ref } from 'vue';
//     import { Dayjs } from 'dayjs';

//     const value = ref<Dayjs>();
//     const onPanelChange = (value: Dayjs, mode: string) => {
//     console.log(value, mode);
//     };
import axios from 'axios';
    export default {
  setup() {
    const users = ref([]);

    const columns = [
      {
        title: 'Applicant No.',
        dataIndex: 'id',
        key: 'id',
      },
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
    ];

    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5005/users');
      users.value = response.data;
    }; 
      
    fetchUsers();
    
    
    return {
      users,
      columns,
      
    };
  },
};
// Data Source
// const users = ref([]);
// const columns = [
//           {
//             title: '#',
//             dataIndex: 'id',
//             key: 'id',
//           },
//           {
//             title: 'First Name',
//             dataIndex: 'firstName',
//             key: 'firstName',
//           },
//           {
//             title: 'Last Name',
//             dataIndex: 'lastName',
//             key: 'lastName',
//           },
//           {
//             title: 'Middle Name',
//             dataIndex: 'middleName',
//             key: 'middleName',
//           },
//           {
//             title: 'Email Address',
//             dataIndex: 'email',
//             key: 'email',
//           }
//         ]
        
//     fetch('http://localhost:5005/users',{
//       headers: {
//     'Authorization': 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTUsImRhdGUiOiIyMDI0LTA0LTAxVDIzOjE3OjA2LjA1OFoiLCJpYXQiOjE3MTIwMTM0MjYsImV4cCI6MTcxMjAxNTIyNn0.1fi4LqhYq3NQNk9Z0xj2L19FU0Ky3hEECjRcvNPFWeA' 
//     }
//     })
//       .then(response => response.json())
//       .then(data => {console.log(data),
//         users.value = data.users;})
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });


//  const data = async () => {
//       const response = await axios.get('http://localhost:5005/users',);
//       users.value = response.data;
//     };



// async fetch() {
//   try {
//     const data = await fetch('http://localhost:5005/users', {
//       headers: {
//         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTUsImRhdGUiOiIyMDI0LTA0LTAxVDIzOjE3OjA2LjA1OFoiLCJpYXQiOjE3MTIwMTM0MjYsImV4cCI6MTcxMjAxNTIyNn0.1fi4LqhYq3NQNk9Z0xj2L19FU0Ky3hEECjRcvNPFWeA',
//       }
//     });
//     const data = await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }
</script>

<style lang="scss" scoped>

</style>