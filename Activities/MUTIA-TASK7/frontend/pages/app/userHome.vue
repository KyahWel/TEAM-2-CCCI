<template>
  <a-layout>
    <div class="container"> 
      <a-row >
        <a-col :span="19" >

        <a-card class="flex items-center justify-center ">
          <a-avatar :size="84" class="avatar">
            <template #icon><UserOutlined /></template>
          </a-avatar>

          <div class="text-center">
            <h1 class="text-2xl font-bold" >{{ userStore.user.firstName }} {{ userStore.user.lastName }}</h1>
            <p >{{ userStore.user.email }}</p>
          </div>
        </a-card> 

        <a-card class="info-container">
          <div >
            <a-tabs v-model:activeKey="activeKey" centered>
              <a-tab-pane key="1" tab="My Application">Active Job Application</a-tab-pane>
              <a-tab-pane key="2" tab="Info And Alerts" force-render>Info And Alerts</a-tab-pane>
            </a-tabs> 
          </div>
        </a-card>  
      </a-col>

      <a-col :span="5">                                   
        <div >
          <Calendar/>
        </div>

        <div style="margin-top: 10px; padding: 10px; margin-left: 10px" class="bg-zinc-50 rounded-lg" >
          <h1 style="margin-bottom: 10px" class="font-semibold">Application Status</h1>
          <a-timeline>
            <a-timeline-item color="green">Submit Application</a-timeline-item>
            <a-timeline-item color="green">Reviewing your Application</a-timeline-item>
            <a-timeline-item color="green">Passed the Initial Interview</a-timeline-item>
            <a-timeline-item color="blue">Final Interview</a-timeline-item>
          </a-timeline>
        </div>
        
      </a-col>
    </a-row>
  </div>
</a-layout>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

definePageMeta({
  layout: 'user'
})
</script>

<style scoped>
.container{
  background-color: #a9e3ed77; 
  padding: 20px;
}
.avatar {
  display: block;
  margin: 0 auto;
}
.bg-zinc-50 {
  width: 300px;
}
.timeline{
  margin-top: 10px;
  width: 100%;
  padding: 10px;
}

.ant-timeline{
  height: 220px;
}
.table{
  margin-top: 20px;
  width: 100%;
}

.info-container{
  margin-top: 10px;
  height: 68%;
}
</style>