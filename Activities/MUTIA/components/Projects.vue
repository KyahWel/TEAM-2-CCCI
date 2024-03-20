<template>
  <a-layout id="projects">
    <a-layout-content>
        <h1>Projects</h1>
        <p>This is where I will list my projects.</p> 
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.ant-layout-content {
  padding: 0 10px;
  margin-top: 70px;
  background: #e0b5eb;
  padding: 20px;
  min-height: 600px;
  margin-bottom: 20px;
}
.ant-layout{
  background-color: #e9d8f1;
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