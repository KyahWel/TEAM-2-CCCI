<template>
   <div>
     <apexchart :options="chartOptions" :series="series" type="donut" :width="chartWidth" />
   </div>
 </template>
 
 <script>
 import { defineComponent, ref, watch } from 'vue'
 import VueApexCharts from 'vue3-apexcharts'
 
 export default defineComponent({
   components: {
     apexchart: VueApexCharts,
   },
   setup() {
     const series = ref([44, 55, 41, 17, 15])
     const chartWidth = ref(380) // Initial width of the chart
 
     // Watch for window resize and adjust chart width accordingly
     watch(() => window.innerWidth, (newWidth) => {
       chartWidth.value = newWidth < 480 ? 200 : 380
     })
 
     const chartOptions = {
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
         enabled: false
       },
       fill: {
         type: 'gradient',
       },
       legend: {
         formatter: function(val, opts) {
           return val + " - " + opts.w.globals.series[opts.seriesIndex]
         }
       },
       title: {
         text: 'Gradient Donut with custom Start-angle'
       },
       responsive: [{
         breakpoint: 480,
         options: {
           chart: {
             width: 200
           },
           legend: {
             position: 'bottom'
           }
         }
       }]
     }
 
     return {
       series,
       chartOptions,
       chartWidth
     }
   },
 })
 </script>