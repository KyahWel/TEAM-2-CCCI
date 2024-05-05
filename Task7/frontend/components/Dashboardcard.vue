<template>
 <a-row :gutter="16" class="justify-between ">
      <a-col :span="8" > <!-- Profile Card-->
        <a-card title="Admin" :bordered="false"  class="bg-amber-100  h-48">
        <div class="flex inline">  
          <a-avatar :size="80" >
        <template #icon><img  src="~/assets/images/pictureko.png" /></template>
      </a-avatar>
          <p class="p-2 text-xl font-black ">  Name: {{ fullName }}</p></div>
          
        </a-card>
      </a-col>
      <a-col :span="8">
    <a-card title="Total Applicants" :bordered="false" class="bg-amber-100 h-48">
      <a-row>
        <a-col :span="12" class="flex">
          <div class="text-xl">
            <TeamOutlined /> &nbsp;
          </div>
          <div class="p-2">
            <a-statistic title="Total Applicants" :value="totalApplicants" style="margin-right: 50px" />
          </div>
        </a-col>
        <a-col :span="12" class="flex">
          <div class="text-xl">
            <UsergroupAddOutlined /> &nbsp;
          </div>
          <div class="p-2">
            <a-statistic title="New Applicants" :value="newApplicants" />
          </div>
        </a-col>
      </a-row>
    </a-card>
  </a-col>

      <a-col :span="7" > <!-- Time Card-->
        <a-card title="Profile" :bordered="false" class="bg-amber-100  h-48">
          <div>
    <label for="currentTime" class="text-2xl font-black">Current Time:</label>
    <div id="currentTime" class="text-xl">{{ formattedTime }}</div>
    <br>
  </div>
        </a-card>
      </a-col>
    </a-row>
    
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import dayjs from 'dayjs';

const currentTime = ref<string>(dayjs().format('HH:mm:ss'));
const formattedTime = computed(() => currentTime.value);
const fullName = ref('');

const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/users/adminname');
    const userData = response.data;

    if (Array.isArray(userData) && userData.length > 0) {
      const user = userData[0]; // Assuming you only want the first user

      // Combine first, middle, and last names
      fullName.value = `${user.firstName} ${user.middleName} ${user.lastName}`;
    } else {
      fullName.value = 'No user found';
    }
  } catch (error) {
    console.error(error);
    fullName.value = 'Error fetching user data';
  }
};
// For Applicant Counts
const totalApplicants = ref(0);
const newApplicants = ref(0);

const fetchUserCounts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/users/usercount');
    const userData = response.data;
    
    totalApplicants.value = userData.length;
    
    // Calculate new applicants based on createdAt date (you need to modify this logic)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Calculate the date one week ago

    newApplicants.value = userData.filter(user => new Date(user.createdAt) >= oneWeekAgo).length;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  setInterval(() => {
    currentTime.value = dayjs().format('HH:mm:ss');
  }, 1000);

  fetchUserData(); // Fetch  data component mount
  fetchUserCounts();
});


</script>



<style>


</style>