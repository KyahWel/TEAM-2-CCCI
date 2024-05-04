<template>
    <div class="container">
      <h1  class="text-black text-lg text-center font-bold">
        List of Applicants  </h1>
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