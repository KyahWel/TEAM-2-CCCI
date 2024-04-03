<template>
    <div class="chart2">
      <a-card style="padding: 10px; width: 495px;">
        <apexchart type="bar" width="350" :options="chartOptions" :series="series"></apexchart>
      </a-card>
    </div>
  </template>

<script>
export default {
  data() {
    return {
        series: [{
            name: 'Applied',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Accepted',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: 'Numbers'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
    }
  }
}
</script>

<style scoped>
.chart2{
    width: 100%;
    padding-left: 10px;
}
</style>