<template>
    <div style="background-color: #13cedf; padding: 10px">
     <a-row :gutter="24">
    <a-col :span="12">
        <a-card>
            <div class="ed">
              <center>
            <h1 >Welcome! </h1>
            <h1 > Admin: Edmondo S. Crisostomo Jr</h1>
              </center>
          </div>
        </a-card>
    </a-col>

             <a-col :span="12" >
                      <a-card >
                        <div class="number">
                                  <p >Number of Applicants:</p>
                                <h1 >30 Persons</h1>
                          </div>
                    </a-card>
                  </a-col>
             </a-row>
          
  </div>
  
  <br>
  
  <div class="container">
    <div id="chart" class="chart">
      <apexchart type="pie" width="350" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div id="chart2" class="chart">
      <apexchart type="bar" height="300" width="350" :options="chartOptions2" :series="series2"></apexchart>
    </div>
    <div class="calendar">
      <a-calendar  v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
    </div>
  </div>
  

  


</template>





<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
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
      series2: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      chartOptions2: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        }
      },
      value: null
    };
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
});

</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.chart {
  width: 100%;
  border: 5px solid#13cedf;
  border-radius: 4px;

}

.calendar {
  width: 300px;
  border: 5px solid  #13cedf;
  border-radius: 4px;
}
.ed{
  font-family: Palatino Linotype, Book Antiqua, Palatino,serif; /* Change the font family here */
    font-weight: bold; /* Optional: Set font weight */
    font-size: 20px;
}
.number{
  font-family: Palatino Linotype, Book Antiqua, Palatino,serif; /* Change the font family here */
    font-weight: bold; /* Optional: Set font weight */
    font-size: 20px;
    text-align: center;
}
</style>
