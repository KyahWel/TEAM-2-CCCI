<template>
    <a-row class="padded-row" >
        <a-col :span="9">
            <a-card class="items-center justify-center" style="height: 625px;">
                <div class="flex items-center justify-center">
                  <a-avatar :size="180" class="avatar p-4 flex items-center justify-center mb-4 mt-28">
                    <template #icon><UserOutlined /></template>
                  </a-avatar>
                </div>
                <div class="text-center">
                  <h1 class="text-3xl font-bold">Clarisse B. Mutia</h1>
                  <p>clarissemutia@gmail.com</p>
                  <p class="mt-2">Web Developer</p>
                  <p>Pasig City</p>
                </div>
              </a-card>
        </a-col>

        <a-col :span="14" class="ml-4">
            <a-card class="items-center justify-center" style="height: 625px; width: 105%;">
                <h1 class="text-2xl font-bold">Personal Information</h1>
                <Divider/>
                <a-row>
                  <a-col :span="12">
                  <h2>First Name:</h2>
                  <h2>Last Name:</h2>
                  <h2>Birthday:</h2>
                  <h2>Address:</h2>
                </a-col>

                <a-col>
                  <h2>Gender:</h2>
                  <h2>Age:</h2>
                </a-col>
              </a-row>
              <Divider/>
              <h1 class="text-xl font-bold mb-2">Experience</h1>
              <a-row>
                <a-col :span="12" class="col-experience">
                    <a-timeline>
                      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                    </a-timeline>
              </a-col>

              <a-col>
                <a-timeline>
                  <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                  <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                </a-timeline>
              </a-col>
            </a-row>
            <Divider/>
            <h1 class="text-xl font-bold">Skills</h1>
            <div class="progress-container">
              <a-progress :percent="100" showInfo :format="percent => `HTML/CSS: ${percent}%`"/>
                <a-progress :percent="80" showInfo :format="percent => `JavaScript: ${percent}%`"/>
                <a-progress :percent="60" :format="percent => `php: ${percent}%`"/>  
              
              <a-progress :percent="50" :format="percent => `Vue: ${percent}%`"/>
              
               
            </div>
            
            <Divider/>

            </a-card> 
        </a-col>
        
    </a-row>
</template>

<script setup>
import { Divider } from 'ant-design-vue';

definePageMeta({
  layout: 'user'
})
</script>

<style scoped>
.padded-row{
    padding: 10px;
}
.progress-container{
  margin-top: 10px;
  width: 90%;
}
.col-experience{
 padding: 10px;
 height: 130px;
}
</style>