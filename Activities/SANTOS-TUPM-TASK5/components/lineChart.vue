<template>
    <div>
        <apexchart width="328" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>

export default{
        data(){
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [2020, 2021, 2022, 2023, 2024]
        }
      },
      series: [{
        name: 'Total Applicants',
        data: [10, 15, 10, 5, 30]
      }]
    }
        }
    }
</script>

<style scoped>

</style>