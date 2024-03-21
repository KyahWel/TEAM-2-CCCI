<template>
  <a-layout id="projects">
    <a-layout-content>
        <h1>Projects</h1>
        <a-layout-card>
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="Website" :bordered="false">
                  <img slot="cover" src="img/project1.png" alt="project-image">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="System" :bordered="false">
                  <img slot="cover" src="img/project2.png" alt="project-image">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Others" :bordered="false">
                  <img slot="cover" src="img/project3.png" alt="project-image">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a-card>
              </a-col>
            </a-row>
        </a-layout-card>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.ant-layout-content {
  padding: 0 10px;
  margin-top: 70px;
  background: #e9d8f1;
  padding: 20px;
  min-height: 600px;
  margin-bottom: 20px;
}
.ant-layout{
  background-color: #e9d8f1;
}
.ant-card {
  background-color: #e0b5eb;
  padding: 5%;
  display: flex;
  flex-direction: column;
}


h1{
  margin-bottom: 3%;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 40px;
}




</style>
  <script>
export default {
  head() {
    return {
      title: 'Projects',
    };
  },
};
  </script>