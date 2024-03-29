<template>
    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref();
const onPanelChange = (value, mode) => {
  console.log(value, mode);
};
</script>