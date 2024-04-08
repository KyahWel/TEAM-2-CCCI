<template>
  <!-- Recruitment portal card -->
  <div class="recruitment-card">
    <!-- Card with number of applied applicants -->
    <a-card :bordered="false" style="width: 300px">
      <!-- Title: Number of Applied Applicants -->
      <p slot="title" class="card-title">Number of Applied Applicants</p>
      <!-- Content: Number of applied applicants (295) -->
      <p class="applied-applicants">295</p>
    </a-card>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
</script>

<style scoped>
/* Custom styles for the recruitment card */
.recruitment-card {
  background-color: #f0f2f5; /* Background color */
  padding: 0px; /* Padding */
  border-radius: 8px; /* Border radius */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
}

/* Custom styles for the card title */
.card-title {
  font-size: 18px; /* Font size */
  margin-bottom: 10px; /* Margin bottom */
}

/* Custom styles for the number of applied applicants */
.applied-applicants {
  font-size: 24px; /* Font size */
  font-weight: bold; /* Font weight */
  color: #333; /* Font color */
  margin: 0; /* Default margin */
}

/* Override Ant Design card styles */
.ant-card {
  font-family: Arial, Helvetica, sans-serif; /* Font family */
}
</style>
