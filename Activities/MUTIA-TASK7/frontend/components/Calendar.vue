<template>
  <!-- Container for the calendar component -->
  <div 
  :style="{ 
    width: '300px',
    marginLeft:'12px', 
    border: '1px solid #d9d9d9', 
    borderRadius: '4px' }">
    
    <!-- Calendar component -->
    <a-calendar 
      v-model:value="value" 
      :fullscreen="false" 
      @panelChange="onPanelChange" />

  </div>
</template>

<script setup>

const value = ref(); 


const onPanelChange = (value, mode) => {
  console.log(value, mode);
};
</script>

