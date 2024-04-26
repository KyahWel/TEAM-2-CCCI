<template>
  <!-- Container for the chart component -->
  <a-card style="padding: 10px; width: 480px; height: 302px; margin-left: 10px">
    <!-- Chart component -->  
    <apexchart 
        type="donut" 
        :options="chartOptions" 
        :series="series">
      </apexchart>
</a-card> 


</template>

<style scoped>

</style>

<script>
// Define the data properties for the component
export default {
  data() {
    return {
      // Define the series data for the donut chart
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
  }
}
</script>