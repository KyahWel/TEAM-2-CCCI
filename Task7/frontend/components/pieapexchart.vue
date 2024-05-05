<template>
   <a-card class="bg-amber-100">
     <apexchart :options="chartOptions" :series="ApplicantBatch" type="donut" :width="chartWidth" />
    </a-card>
 </template>
 
 <script>
 import { defineComponent, ref, watch } from 'vue'
 import VueApexCharts from 'vue3-apexcharts'
 import axios from 'axios'

 export default defineComponent({
   components: {
     apexchart: VueApexCharts,
   },
   setup() {
     const ApplicantBatch = ref([119, 68])
     const chartWidth = ref(500) // Initial width of the chart
 
     // Watch for window resize and adjust chart width accordingly
     watch(() => window.innerWidth, (newWidth) => {
       chartWidth.value = newWidth < 500 ? 200 : 380
     })
 
     const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users/userpie');
        const userData = response.data;

        const today = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const existingApplicants = userData.filter(user => new Date(user.createdAt) < oneWeekAgo).length;
        const newApplicants = userData.filter(user => new Date(user.createdAt) >= oneWeekAgo).length;

        ApplicantBatch.value = [existingApplicants, newApplicants];
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

     const chartOptions = {     //Configuration Apex Chart
       chart: {
         type: 'donut',
       },
       plotOptions: {
         pie: {
           startAngle: -90,
           endAngle: 270
         }
       },
       dataLabels: {
         enabled: true
       },
       fill: {
         type: 'gradient',
       },
       legend: {
         formatter: function(val, opts) {
           return  val + " - " + opts.w.globals.series[opts.seriesIndex]
         }
       },
       title: {
         text: 'Applicants'
       },
       responsive: [{
         breakpoint: 1000,
         options: {
           chart: {
             width: 400
           },
           legend: {
             position: 'bottom'
           }
         }
       }],
       labels: ['Existing', 'New Applicants'],
     }
 
     return {
      ApplicantBatch,
       chartOptions,
       chartWidth
     }
   },
 })
 </script>