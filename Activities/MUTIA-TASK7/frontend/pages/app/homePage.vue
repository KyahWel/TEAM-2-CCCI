<template>
  <a-layout>
  <div class="container-1">         <!-- Container 1 holds a row of cards -->
    <a-row :gutter="16">
      <a-col :span="12">  
          <Profile/>                 <!-- Holds the profile component -->
      </a-col>

       <!-- Holds two cards (# of Applied and Accepted Applicants)-->  
      <a-col :span="6" v-for="(card, index) in cardData" :key="index" :cardData="cardData">
        <a-card :class="card.color" :style="{ height: '95%' }">
          <p style="text-align: right;">
            <span style="font-size: 30px; font-weight: bold; color: #333;">{{ card.count }}</span><br>
            <span style="font-size: 15px;">{{ card.title }}</span>
          </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
  
  <div class="container-2"> 
    <a-row>
      <a-col :span="18">                                      <!--Holds Pie and Column Charts-->
        <div class="chart" >
          <a-row>
          <a-col :span="9" style="margin-right: 16px;">
            <Chart/>
          </a-col>
          <a-col :span="9" style="margin-left: 80px;">
            <Chart2/>
          </a-col>
        </a-row>
      </div>
      </a-col>
      <a-col :span="6">                                         <!--Holds Calendar-->
        <div>
          <Calendar/>
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="18">                                        <!--Holds Table-->
        <div class="table">
        <Table/>
      </div>
      </a-col>
      <a-col :span="6">                                         <!--Holds Timeline-->
        <div class="timeline">
          <Timeline/>
        </div>
      </a-col>
    </a-row>
  </div>
  

  </a-layout>
</template>

<script setup>
//Define data in the cards
const cardData = [
  {
    title: 'Applied Applicants',
    count: 216,
    color: '#f56a6a'
  },
  {
    title: 'Accepted Applicants',
    count: 88,
    color: '#52c41a'
  }
]
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.container-1{
  background-color: #8db9ff; 
  padding: 8px;
  align-items: center;
  justify-content: center;
}
.container-2{
  background-color: #a9e3ed77; 
  padding: 20px;
  align-items: center;
  justify-content: center;

}

.chart{
  height: 100%;
  align-content: center;
  background-color: rgb(47, 110, 165);
  border-radius: 8px;
  padding-top: 2px;
  
}
.timeline{
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  
}
.table{
  margin-top: 20px;
  width: 100%;
}
</style>