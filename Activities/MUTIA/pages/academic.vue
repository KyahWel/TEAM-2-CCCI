<template>
  <a-layout id="academic">
    <a-layout-content>
      <a-divider><h1>Achievements</h1></a-divider>
      <a-layout-card>
        <a-row :gutter="16">
          <a-col :span="6">
            <a-card>
              <img src="img/ach1.png" alt="acad-image" />
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <img src="img/ach2.png" alt="acad-image" />
           </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <img src="img/ach3.png" alt="acad-image" />
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card>
              <img src="img/ach4.png" alt="acad-image" />
            </a-card>
          </a-col>
        </a-row>
      </a-layout-card>
    </a-layout-content>
  </a-layout>
</template>


<style scoped>
  .ant-layout-content {
    margin-top: 70px;
    background: #e0b5eb;
    min-height: 500px;
    margin-bottom: 20px;
    padding: 5%;
  }
  .ant-col-6{
    display: flex;
  }


  .ant-layout {
      background-color: #e9d8f1;
  }
  .ant-card {
    background-color: #e0b5eb;
    width: 100%;
    border: 0;
  }
  .ant-card img{
      width: 85%;
  }
  h1 {
    margin-bottom: 3%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
      .ant-layout-content {
          min-height: 350px;
          margin-bottom: 10px;
          flex-direction: column;
          
        }
        .ant-card {
          width: 150%;

          
        }
        .ant-card img{
          width: 150%;
            
        }
    }
    
</style>
  

<script>

</script>