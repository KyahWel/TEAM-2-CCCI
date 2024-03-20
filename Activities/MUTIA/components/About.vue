<template>
  <a-layout id="about">
    <a-layout-content>
      <div class="about-container">
        <div class="about-text">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. </p>
        </div>
        <div class="about-image">
          <img src="img/profile1.png" alt="profile">
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.ant-layout {
  background: #e9d8f1;
}
.ant-layout-content {
  margin-top: 70px;
  background: #e9d8f1;
  padding: 20px;
  min-height: 550px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about-text {
  flex: 1;
  margin-right: 20px;
}

.about-image {
  flex: 1;
  width: 70%;
}

.about-image img {
  max-width: 100%;
  height: auto;
}

h1{
  text-align: center;
  font-size: 50px;
  font-family: 'Times New Roman', Times, serif;
}

@media screen and (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .about-text {
    margin: 0 0 20px;
    justify-content: center;
  }

  .about-image {
    width: 100%;
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: 'About Me',
    };
  },
};
</script>