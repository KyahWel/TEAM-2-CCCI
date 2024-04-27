<template>
    <div class="grid-container">
      <div class="calendar-container">
        <a-card>
          <!-- Previous calendar component goes here -->
        </a-card>
      </div>
      <div class="chart-container">
        <a-card>
          <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
        </a-card>
      </div>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'apexcharts';
  
  export default {
    data() {
      return {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          chart: {
            width: 380,
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
            text: ''
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'center'
              }
            }
          }]
        }
      }
    },
    components: {
      ApexCharts
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here to adjust the appearance of the grid and containers if needed */
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns, each taking 50% width */
    gap: 20px; /* Gap between grid items */
    width: 65%;
   
    
  }
  
  
  
  .calendar-container {
    align-self: center; /* Align to the start of the grid column */
    
  }
  
  .chart-container {
    align-content: center; /* End of the grid column */
  }
  </style>
  