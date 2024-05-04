<template>
  <div class="dash">
  
      <a-card>
        <Chart/>

    <div class="table">
        <Table/>
      </div>
      </a-card>
  </div>
  
</template>

<script setup>
 
definePageMeta({
    layout: 'default'
})

</script>

<style setup>

.dash{
  background-color:rgb(7, 101, 242);
 
}
.table{
  margin-top: 10px;
  width: 100%;
}
</style>