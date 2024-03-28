<template>
  <div class="header-container">
     
    <navbar/>
    <div class="container">
     <home/>
     <about/>
     <skills/>
    <Contact/>





    
  </div>
  </div>
             
</template>
 
 
  <style >
 
  .container {
    background: linear-gradient(to bottom, #ca7979, #532c2c); /* Define the gradient */
    width: 100%;
   
  }
 
  a {
    margin-right: 400px;
  }
 
  .logo{
    color:white;
  }
  .name{
    color: white;
  }
 
 
  .navbar {
    background-color: rgb(81, 37, 37); /* Background color for the navbar */
    padding: 10px; /* Adjust padding as needed */
    display: flex;
    width: 100%;
   
  }
 
  .navbar {
    margin-right: 1%; /* Adjust the margin between items */
  }
 
 
  .Home {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
   
  }
 
  .about{
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .contact {
  display : block;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .Skills {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .about2{
    color:white;
  }
 
  .contacts2{
    color:white;
  }
  
  .container {
    Justify-content: center; /* Align items horizontally */
  }
 
 
 
 
  .text {
    flex: 1; /* Let the text take up available space */
  }
 
  .text h2 {
    margin-bottom: 10px; /* Adjust spacing between heading and paragraph */
  }
 
 
  .email{
    color:white;
  }
 
  .icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
  .con{
    color:white;
  }

  .fb{
    color:white
  }
  </style>