<template>
  <!-- Container for the calendar component -->
  <div 
  :style="{ 
    width: '340px',
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
// Define a new `value` reactive reference using the `ref` function
const value = ref(); 

// Define the `onPanelChange` method that will be called when the user changes the calendar view
const onPanelChange = (value, mode) => {
  console.log(value, mode);
};
</script>

