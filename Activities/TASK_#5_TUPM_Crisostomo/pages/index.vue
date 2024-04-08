<template>
  

   
        
  <div  class="landing-page">
   
<div>
        <br>
        <div class="button-container">
        <router-link to="/app/Dashboard" class="button">
          <a-button type="primary" class="button-text">Go to Dashboard</a-button>
        </router-link>
      </div>
   </div>
   </div>
<!---button to redirect to dashboard-->
  



</template>


<script>
definePageMeta({
  layout:'landing'
})
</script>


<style>
/* CSS for landing page */
.landing-page {
  position: relative;
  height: 100vh; /* Set height to viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000; /* Text color */
  background-image: url('/public/img/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
 
}


.content {
  text-align: left;
  border: 5px solid #000; /* Adjust border width and color as needed */
    padding: 100px;
    text-align: left;
 
}

.sen{
  font-size: 50px;
}

.button {
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 16px; /* Adjust font size as needed */
  border: none; /* Remove border */
  border-radius: 5px;
  background-color: #031c24; /* Button background color */
  color: #ffffff; /* Button text color */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-container {
  position: absolute;
  bottom: 70px; /* Adjust the distance from the bottom as needed */
 
  text-align: center;
}

button:hover {
  background-color: #090909; /* Button background color on hover */
}
img{
  width:450px;
  height:400px;
 
  align-items: center;
}

</style>