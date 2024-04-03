<template>
 <a-row :gutter="16" class="justify-between ">
      <a-col :span="8" > <!-- Profile Card-->
        <a-card title="Profile" :bordered="false"  class="bg-amber-100">
        <div class="flex inline">  
          <a-avatar :size="80" >
        <template #icon><img  src="~/assets/images/pictureko.png" /></template>
      </a-avatar>
          <p class="p-2 text-xl font-black ">  Name: John Rollyver Espinosa</p></div>
          
        </a-card>
      </a-col>
      <a-col :span="8"><!-- Applicants Card-->
        <a-card title="Total Applicants" :bordered="false" class="bg-amber-100">
          <a-row>
    <a-col :span="12" class="flex">
      <div class="text-xl">
      <TeamOutlined /> &nbsp;</div>
      <div class="p-2">
      <a-statistic title= "Total Applicants" :value="187" style="margin-right: 50px" />
      </div>
    </a-col>
    <a-col :span="12" class="flex">
      <div class="text-xl">
      <UsergroupAddOutlined /> &nbsp;</div>
      <div class="p-2">
      <a-statistic title="New Applicants"  :value="68" />
    </div>
    </a-col>
  </a-row>
        </a-card>
      </a-col>

      <a-col :span="7"> <!-- Time Card-->
        <a-card title="Profile" :bordered="false" class="bg-amber-100">
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
import dayjs from 'dayjs';
import { ref, computed, onMounted } from 'vue';

// Get the current time and format it using Day.js
const currentTime = ref<string>(dayjs().format('HH:mm:ss'));
  const formattedTime = computed(() => currentTime.value);

  onMounted(() => {
  setInterval(() => {
    currentTime.value = dayjs().format('HH:mm:ss');
  }, 1000);
});
//hanggang dito yung para sa time


</script>



<style>


</style>