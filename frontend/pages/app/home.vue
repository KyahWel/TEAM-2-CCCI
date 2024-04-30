<template>
  <div class="home">
    <h1 class="page-title">
      Admin
    </h1>
    <a-row>
      <a-col  :span="9">
        <a-card>
          <Profile/>
        </a-card>
      </a-col>
      <a-col>
        <a-card  :span="6">
          <NumApplicants/>
        </a-card>
      </a-col>
      <a-col  >
        <a-card>
          <AcceptedApplicants/>
        </a-card>
      </a-col>
    </a-row>
   
<div class="container">
  <a-row>
    <a-col :span="18" >                                    
      <div class="chart">
        <Chart/>
      </div>
    </a-col>

    <a-col :span="6" >                                        
      <div class="calendar">
        <Calendar/>
      </div>
    </a-col>
  </a-row>
</div>
  <div class="container-table">
    <a-row>
      <a-col :span="18" >                                    
        <div class="table">
          <Table/>
        </div>
      </a-col>

      <a-col :span="6" >                                        
        <div class="recent">
          <RecentAct/>
        </div>
      </a-col>
    </a-row>
 </div>
</div>
</template>

<script setup>
 
definePageMeta({
    layout: 'default'
})

</script>

<style scoped>

.container{
  margin-top: 10px;
  align-content: center;
  justify-content: center;
}
.calendar{
  margin-right: 10%;
}
.table{
  width: 100%;
  margin-left: 5px;
}

.chart{
  margin-left: 20%;
}

.home{
  background-image: url('/assets/images/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.page-title {
  font-family: 'Times New Roman', Times, serif;  
  color: #333; /* Font color */
  font-size: 26px;  
  font-weight: bold;  
  text-align: center;
}

.container-table {
  margin-top: 20px;
}

 .recent{
    margin: 10px;
    background-color: #ffffff;
    height: 95%;
    padding: 20px;
    margin-right: 8px;
  }

</style>