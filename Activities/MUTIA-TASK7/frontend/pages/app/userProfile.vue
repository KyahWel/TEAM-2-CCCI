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
                <Divider></Divider>
              
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
</style>