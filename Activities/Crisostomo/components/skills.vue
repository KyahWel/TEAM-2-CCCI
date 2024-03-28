<template>
    <div class="container6">

   <h2 class="con"><center>Skills</center></h2>
   <div id="skills" class="skills2">
   <p >With a foundational understanding of HTML, CSS, PHP, JavaScript, MySQL, and Photoshop,</p>
   <p> I possess some skills to develop and design compelling web content. HTML and CSS enable me </p>
   <p> to structure and style web pages, ensuring they are visually appealing and user-friendly.</p>
   <p> By incorporating PHP and JavaScript, I can add dynamic elements and interactivity to websites,</p>
   <p> enhancing the user experience. Utilizing MySQL, I can efficiently manage databases, allowing for</p>
   <p> seamless data organization and retrieval. Moreover, my proficiency in Photoshop equips me to edit</p>
      <p> and optimize images, creating visually striking graphics for web use. This combined expertise allows me to</p>
      <p> create engaging and functional digital experiences that meet the needs of clients and users alike. .</p>
   </div>
   
  <div class="image-container">
   <img src="img/html.jpg" alt="html">
   <img src="img/css.jpg" alt="css">
   <img src="img/myphp.jpg" alt="myphp">
   <img src="img/js.jpg" alt="js" >
   <img src="img/mysql.jpg" alt="mysql" >
   <img src="img/ps.jpg" alt="ps">
  </div>
   
  </div>
  
  </template>
   
  <style scoped>
  
  .skills2{
    background-color: bisque; /* Set your desired background color */
  padding: 20px; /* Adjust padding as needed */
  border-radius: 400px
  }
  .container6{
    background-color:904848;
   
  }
  p{
    text-align: center;
  }
  .container{
    height: 700px;
   
  }
   
  .image-container {
  display: flex;
  flex-wrap: wrap; /* Allow images to wrap to the next line if there's not enough space */
  justify-content: center; /* Center-align images horizontally */
  align-items: center; /* Center-align images vertically */
  }
   
  .image-container img {
  max-width: 10%; /* Ensure images don't exceed their container width */
  margin: 10px; /* Add some spacing between images */
  }
   
  img{
    width: 15%;
  }

  </style>