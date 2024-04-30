<template>
  <!-- Recruitment portal card -->
  <div class="recruitment-card">
    <!-- Card with number of accepted applicants -->
    <a-card class="accepted-applicants-card" :bordered="false">
      <!-- Title: Number of Accepted Applicants -->
      <p slot="title" class="card-title">Number of Accepted Applicants</p>
      <!-- Content: Number of accepted applicants (95) -->
      <p class="accepted-applicants">95</p>
    </a-card>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
</script>

<style scoped>
/* Custom styles for the recruitment card */
.recruitment-card {
  background-color: #f0f2f5;  
  padding: px;  
  border-radius: 4px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
}

/* Custom styles for the card title */
.card-title {
  font-size: 18px;  
  margin-bottom: 10px;  
  margin-right: 9px;
 
}

/* Custom styles for the number of accepted applicants */
.accepted-applicants {
  font-size: 24px;  
  font-weight: bold;  
  color: #333; /* Font color */
  margin: 0; /* Default margin */
}

/* Override Ant Design card styles */
.ant-card {
  font-family: Arial, Helvetica, sans-serif;  
  background-color: #E2FFED;
}
</style>
