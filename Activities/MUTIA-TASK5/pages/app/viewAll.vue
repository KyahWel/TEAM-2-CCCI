<template>
    <div class="container">
      <h1  class="text-black text-lg text-center font-bold">
        List of Applicants  </h1>

        <!-- Search bar for applicant names
        <div style="width: 23%; padding: 10px; margin-left: 27px">
          <a-input-search
          v-model:value="value"
          placeholder="Search names"
          enter-button
          @search="onSearch"
        />
        </div> -->

        <!-- Container for the applicant cards -->
        <div class="cards-container">
          <ApplicantsView/>
        </div>
          
  
    
    </div>
  </template>
  
  <script setup>
 definePageMeta({
  layout: 'default'
})
  
  </script>
  
  <style scoped>
 .container{
  padding-top: 10px ;
 }
 .cards-container{
  margin-top: 20px;

 }
  </style>