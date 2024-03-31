<template>
  <div>
    <h1 class="text-black text-lg text-center font-bold">
      Dashboard
    </h1>
    <div style="background-color: #ececec; padding: 20px">
  <a-row :gutter="16">
    <a-col :span="8">
      <a-card title="Card title" :bordered="false">
        <p>card content</p>
      </a-card>
    </a-col>
    <a-col :span="8">
      <calendar/>
    </a-col>
  </a-row>
    </div>
  </div>
  <Chart/>
</template>

<script lang="ts" setup>
import Calender from '../../components/calender.vue';
definePageMeta({
    layout: 'default'
})
</script>

<style>

</style>