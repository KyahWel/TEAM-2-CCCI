<template>
    <a-layout id="skills">
      <a-layout-content>
        <h1>Skills</h1>
        <a-layout-card>
          <a-row :gutter="16">
            <a-col :span="6">
              <a-card>
                <img src="img/html.png" alt="project-image" />
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/css.png" alt="project-image" />
             </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/js.png" alt="project-image" />
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/vue.png" alt="project-image" />
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="6">
              <a-card>
                <img src="img/php.png" alt="project-image" />
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/antd.png" alt="project-image" />
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/mysql.png" alt="project-image" />
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card>
                <img src="img/bootstrap.png" alt="project-image" />
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
      background: #e9d8f1;
      min-height: 600px;
      margin-bottom: 20px;
      padding: 5%;
    }

    .ant-layout {
        background-color: #e9d8f1;
    }
    .ant-card {
      background-color: #e9d8f1;
      width: 100%;
      border: 0;
      margin: 8%;
    }
    .ant-card img{
        width: 50%;
    }
    h1 {
      margin-bottom: 3%;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 40px;
    }
    @media screen and (max-width: 768px) {
        .ant-layout-content {
            margin-top: 70px;
            min-height: 350px;
            margin-bottom: 10px;
            padding: 5%;
          }
        
          .ant-card {
            width: 100%;
            
          }
          .ant-card img{
              width: 80%;
          }
      }
      
  </style>
    

<script>

</script>