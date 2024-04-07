<template>
    <div>
        <a-card  style="width: 1230px" class="border-4">
            <p class="font-bold text-3xl"> Welcome to your Dashboard,</p>
            <p class="text-xl">Jairlyn Empleo</p>
        </a-card>

    <a-row :gutter="[16,16]">
      <a-col :span="4">
        <br />
        <a-card>
            <a-statistic title="Pending Applicants" :value="100" style="margin-right: 5px"/> 
        </a-card><br>

        <a-card>
            <a-statistic title="Waitlisted" :value="20" style="margin-right: 50px"/>
        </a-card><br>

        <a-card>
            <a-statistic title="Total Hired" :value="50" style="margin-right: 50px"/>
        </a-card>
       </a-col>
       
       <a-col class="mt-6 h-full" :span="10">
            <a-card title="Applicants Trend" class="flex flex-col justify-center w-full h-96">
                <linechart />
            </a-card>
       </a-col>

        <a-col :span="10" class="mt-6">
            <div>
            <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar v-model:value="value" :style="{height: '385px'}" :fullscreen="false" @panelChange="onPanelChange" class=" h-96"/>
            </div>


            </div>
        </a-col>
    </a-row>

    <a-table class="mt-6" :dataSource="data.users" :columns="columns" :loading="pending" style="width: 100%" />

    </div>
</template>

<script setup lang="ts">

definePageMeta ({
    layout: 'navbar'
})

// Data Source
const columns = [
          {
            title: '#',
            dataIndex: 'id',
            key: 'id',
          },
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
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Contact Number',
            dataIndex: 'phone',
            key: 'phone',
          },
        ]
    const { data, pending, error, status, refresh } = await useFetch('https://dummyjson.com/users')

//chart
import linechart from '~/components/linechart.vue';


import { ref } from 'vue';
import { Dayjs } from 'dayjs';

const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};
</script>

<style lang="scss" scoped>

</style>