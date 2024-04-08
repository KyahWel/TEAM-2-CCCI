<template>
  <div class="calendar-container">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dayjs } from 'dayjs';

const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};
</script>

<style scoped>
/* Add scoped styles for the calendar container */
.calendar-container {
  width: 100px; /* Set width */
  margin: 0px auto; /* Add margin for centering */
  border: 1px solid #4cacaf; /* Add border */
  border-radius: 4px; /* Add border radius */
  font-family: Arial, Helvetica, sans-serif; /* Set font family */
  display: flex; /* Use flexbox */
  justify-content: center; /* Align to the right */
  margin-right: 1000px; /* Adjust margin to move it further to the right */
}

/* Customize Ant Design calendar component */
.ant-fullcalendar {
  background-color: #f5f5f5; /* Background color */
  color: #333; /* Font color */
}
</style>
