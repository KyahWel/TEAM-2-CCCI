<template>
  <div class="home">
    <h1 class="page-title">
      User
    </h1>

    <a-row>
      <a-col>
        <a-card class="container-profile">
          <UserCard/>
        </a-card>
      </a-col>

      <a-row>
        <a-col>
        <a-card class="container-calendar">
        <a-card class="card-calendar"><h1 class="calendar-title">Calendar</h1>
          <Calendar1/>
        </a-card>
        </a-card>
      </a-col>

      <a-col>
        <a-card class="container-experience">
         <a-card class="card-experience"><h1 class="exp-title">EXPERIENCE</h1>
          
  <a-timeline>
    <a-timeline-item>Full Stack Development Intern at Centralized Cloud Computing International, Inc. - 2024-2024</a-timeline-item>
    <a-timeline-item>IT Consulting Intern at Amazon Web Services (AWS) - 2022-2023</a-timeline-item>
    <a-timeline-item>Network Engineering Intern at Cisco Systems - 2021-2022</a-timeline-item>
    <a-timeline-item>Cybersecurity Intern at Fujitsu Philippines - 2020-2021</a-timeline-item>
    <a-timeline-item>Freelance UI Developer - 2018-2020</a-timeline-item>
  </a-timeline>

        </a-card>

        </a-card>
      </a-col>

      </a-row>

    </a-row>


</div>
</template>

<script setup>
 
definePageMeta({
    layout: 'users'
})

</script>

<style scoped>

.container{
  margin-top: 10px;
  align-content: center;
  justify-content: center;
}

.container-profile{
  width:122%;
  margin-left: 12px;
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

  .container-calendar{
    padding: 5px;
    margin-left: 10px;
    margin-top: 10px;
    height: 95%;
    background-image: url('/assets/images/1.png');
  }

  .calendar-title{
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .container-experience{
    background-image: url('/assets/images/1.png');
    margin-top: 10px;
    margin-left: 5px;
    width: 101%;
    height: 95%;
  }
  .card-experience{
    margin-left: 1px;
    margin-top: 12px;
    width: 100%;
    height: 370px;
  }
  .exp-title{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 16px;
    text-align: center;
  }

</style>