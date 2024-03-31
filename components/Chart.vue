<template>
<div id="chart">
    <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
</div>
</template>
<script>
import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
export default{
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
      },
    };
  }
}
</script>