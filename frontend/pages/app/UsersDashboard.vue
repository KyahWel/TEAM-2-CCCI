<template>
  

<a-row>

<a-col>
  <a-card class="card1">
    <a-row type="flex" :gutter="[10,10]" align="Left" justify="Left" >
        <a-space direction="vertical" :size="32">
          <a-space wrap :size="20">
            <a-avatar :size="90" >
              <template #icon>
  
                <img src="/public/img/tanjiro.jpg">
              </template>
            </a-avatar>
          </a-space>
        </a-space>
        <div>
        <h1>asdasd</h1>
      </div>
      </a-row>
      
  </a-card>
</a-col>

  <a-col>
  <div class="calendar">
      <a-calendar  v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
    </div>
  </a-col>
  </a-row>


  
  
  
  
</template>




<script setup>
 
definePageMeta({
    layout: 'users'
})



</script>


<style scope>

.card1{
  width: 100vh;
  height: 55vh;
  background-image: linear-gradient(to right, rgb(20, 148, 52), rgb(56, 92, 200));
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
}


.calendar {
  width: 300px;
  border: 5px solid  #13cedf;
  border-radius: 4px;

}
</style>