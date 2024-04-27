<template>
  <div class="applicants-list-container">
    <h1 class="page-title">List of Applicants</h1>
 
    <div>
      <ApplicantsView/>
    </div>
  </div>
</template>
 
<script setup>
// No script setup logic needed for this component
</script>
 
<style scoped>
/* Add scoped styles for the applicants list container */
.applicants-list-container {
  background-image: url('/assets/images/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 20px; /* Padding */
  text-align: center; /* Align text to center */
}
 
/* Style for the page title */
.page-title {
  font-family:'Times New Roman', Times, serif;
  color: #333; /* Font color */
  font-size: 24px;  
  font-weight: bold;  
}
</style>