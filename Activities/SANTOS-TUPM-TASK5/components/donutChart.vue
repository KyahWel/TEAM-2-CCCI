<template>
    <div>
        <apexchart width="350" type="donut" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>

export default{
        data(){
            return {
      options: {},
      series: [100, 32, 30],
    }
        }
    }
</script>

<style scoped>

</style>