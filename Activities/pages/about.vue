<template>
  <div class="container2">
    <img src="/assets/skills.png" height="300" class="animated fadeInDown">
    <div class="content2 animated fadeInUp">
      <h1>About <span style="color: #f72585; font-weight: bold">ME</span></h1>
      <p>I am a dedicated UI/UX designer who is passionate about creating elegant and intuitive experiences. Designing is more than just a job for me; it's a source of joy and fulfillment. 
        I specialize in building interfaces that seamlessly relate with users, according to the principle of simplicity and purposeful design. In my world, each aspect has a specific purpose, and complexity is simplified to provide pleasurable experiences. Let's go on a journey to reduce burden and design with fun.</p>
      <div class="bar"></div>
      <h1>My Skills</h1>
      <p>HTML</p>
      <a-progress :percent="80" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInLeft"/>
      <p>CSS</p>
      <a-progress :percent="60" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInRight"/>
      <p>JavaScript</p>
      <a-progress :percent="50" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInLeft"/>
      <p>VueJS</p>
      <a-progress :percent="60" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInRight"/>
      <p>AntDesign</p>
      <a-progress :percent="50" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInLeft"/>
      <p>Figma</p>
      <a-progress :percent="80" trail-color="white" stroke-color="#f18080" :size="9" :show-info="false" class="animated fadeInRight"/>
    </div>
  </div>
</template>

<style scoped>
.container2 {
  height: 150vh;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/bg.png");
  background-size: cover;
}

.content2 {
  max-width: 900px;
  padding: 10px 20px;
  text-align: center;
}

h1, p {
  margin: 3px 0;
}

.bar {
  margin: 20px auto;
  width: 100px;
  height: 2px;
  background-color: #f18080;
}
</style>
