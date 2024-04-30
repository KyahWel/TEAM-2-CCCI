<template>
  <div class="home">
    <h1 class="page-title">
      User
    </h1>
    <a-row>
      <a-col  :span="20">
        <a-card class="container-profile">
          <UserCard/>
        </a-card>
      </a-col>
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
.calendar{
  margin-right: 10%;
}
.table{
  width: 100%;
  margin-left: 5px;
}

.container-profile{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 165px;
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