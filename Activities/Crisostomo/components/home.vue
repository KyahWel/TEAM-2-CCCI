<template>
  <div class=" image-container">
 <a-row :gutter="16" type="flex" justify="center" align="middle">
           <a-col :xs="24" :sm="30" :md="16" :lg="8"  type="flex" justify="center" align="left" >
         <div class="cris">
  
           <img src="img/cris.jpg"  style="width: 400px; height: 400px;" alt="cris" align="left" >
       </div>
           </a-col>
           <a-col :xs="24" :sm="30" :md="16" :lg="8"  type="flex" justify="center" align="right">
        
             <div id="home2" class="home2">
       <h2 class="con2"><b>Edmondo S. Crisostomo Jr.</b></h2>
      
       <p>Bachelor of Science in Information Technology at Technological University of the Philippines.".</p>        
            
     </div>
           </a-col>
           </a-row>
  
  
          
         </div>
  
        
 </template>
  
  
 <script>
 export default {
   props: {
     imageSrc: String,
     altText: String
   }
 }
 </script>
  
 <style scoped>
 .cris{
  padding:10%;
   display: inline-block;
 }
  
 .rounded-image {
   border-radius: 50%; /* Makes the image circular */
 }
  
 .p{
  text-align:center;
  border-radius: 30px
 }
  .con2{
    color:black;
  }
 .with-shadow {
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
 }
 .image-container{
   height: 600px;
   
 }
 .home2{
  background-color:bisque;
 }
 </style>