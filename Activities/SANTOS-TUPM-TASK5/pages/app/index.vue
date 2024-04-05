<template>
    <div class="animate__animated animate__zoomIn">
        <a-row gutter="16">
            <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="9">
                <a-card class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-4">
                    <p class="font-semibold text-white drop-shadow-md">Welcome to PathFinder Admin Dashboard</p>
                    <h1 class="text-3xl font-bold text-white drop-shadow-md">Jose Santos</h1>

                </a-card>
            </a-col>
            <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Total Applicants" :value="100" style="margin-right: 50px" />
                </a-card>
            </a-col>
            <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Hired Applicants" :value="32" style="margin-right: 50px" />
                </a-card>
            </a-col>
            <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                <a-card>
                    <a-statistic title="Active Applications" :value="30" style="margin-right: 50px" />
                </a-card>
            </a-col>
        </a-row>

        <a-row gutter="16" class="mt-3">
            <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <a-card title="Applicants Trend" class="flex flex-col justify-center">
                    <lineChart />
                </a-card>
            </a-col>
            <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <a-card title="Applicants Status" class="flex flex-col justify-center">
                    <donutChart />
                </a-card>
            </a-col>
            <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div :style="{ width: '417px'}">
                    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
                </div>
            </a-col>
        </a-row>



    <!-- List of Applicants Table -->
    <a-row gutter="16" class="mt-3">
        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
            <a-table :dataSource="data.users" :columns="columns" :loading="pending" style="width: 100%" />
        </a-col>
        
        <a-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
            <a-card title="Recent Activities">
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

<script  setup lang="ts">

// Dashboard Layout
definePageMeta({
    layout: 'dashboard'
})

// Chart Components
import lineChart from '~/components/lineChart.vue';
import donutChart from '~/components/donutChart.vue';

// Calendar
    import { ref } from 'vue';
    import { Dayjs } from 'dayjs';

    const value = ref<Dayjs>();
    const onPanelChange = (value: Dayjs, mode: string) => {
    console.log(value, mode);
    };

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
</script>

<style lang="scss" scoped>

</style>