<template>
  <div class="landing-layout">
    <img class="logo-main" src="/assets/images/main-logo.png">
    <h1>RECRUITMENT SYSTEM</h1>

      <div class="button-container">
        <router-link to="/app/homePage" class="button">                     <!-- Router-link component to navigate to the home page -->
          <a-button type="primary" class="button-text">ENTER</a-button>
        </router-link>
      </div>
  </div>
</template>

<script>
definePageMeta({
  layout: 'landing'
})
</script>

<!-- Define the styles for the component -->
<style scoped>                                                                
.landing-layout {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/assets/images/bg-landing.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}


.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  width: 110px;
  max-width: 200px;
  background: #1890FF;
  border: 5px;
  text-align: center; 
  font-size: 18px; 
  margin: 8px; 
  border-radius: 20px;
  box-shadow: 0px 10px 18px rgba(11, 9, 9, 0.784);
  transition: all 0.3s ease;

}

.button-text {
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  border-radius: 20px;
  width: 110px;
}

img{
  width: 170px;
  padding-bottom: 10px;
}
h1{
  font-size: 50px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-weight: 700;
  padding-bottom: 30px;
}

</style>