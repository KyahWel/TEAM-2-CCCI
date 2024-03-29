<template>
    <div class="project" style="background-image: url('/assets/bg2.png');">
      <h2 style="color: #eabffa;">Some of my recent <span style="color: #f72585;">PROJECTS</span></h2>
      <div class="pcontent">
        <a-card style="width: 300px" class="animated fadeInLeft">
          <template #cover>
            <img alt="" src="~/assets/ecommerce.png" style="width: 100%; height: 100%; object-fit: cover;" />
          </template>
          <a-card-meta title="Sunshine's Kisses Shop " style="text-align: left; font-weight: bolder;">
            <template #description>Sunshine's Kisses Shop is an e-commerce platform developed using MySQL, Visual Studio Code (VS Code), Node.js, and React.js. This project enables users to browse, purchase, and manage products from the Sunshine's Kisses brand. Built on a robust tech stack, including a MySQL database for data storage, VS Code for development, Node.js for backend server implementation, and React.js for front-end user interfaces, Sunshine's Kisses Shop offers a seamless shopping experience. With features like product listings, user authentication, cart management, secure payment processing, and order tracking, this platform aims to deliver a delightful online shopping experience for customers.</template>
          </a-card-meta>
        </a-card>
        <a-card style="width: 300px;" class="animated fadeInRight">
          <template #cover>
            <img alt="" src="~/assets/tuptunes.png" style="width: 100%; height: 100%; object-fit: cover;" />
          </template>
          <a-card-meta title="TUP Tunes Store" style="text-align: left; font-weight:bolder;">
            <template #description>The "TUP Tunes Store" project is a comprehensive music album management system developed using C++. Tailored specifically for the Technological University of the Philippines (TUP) community, this system allows users to browse, purchase, and manage music albums conveniently. With features like album management, user-friendly interfaces, genre selection, secure payment integration, and order management, the TUP Tunes Store aims to provide an efficient platform for users to explore and enjoy a wide range of music genres. 
 </template>
          </a-card-meta>
        </a-card>
        <a-card style="width: 300px;" class="animated fadeInLeft">
          <template #cover>
            <img alt="" src="~/assets/figma.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
          </template>
          <a-card-meta title="Personal Portfolio" style="text-align: left; font-weight:bolder;">
            <template #description>The personal portfolio project, designed using Figma, showcases the skills, experiences, and accomplishments of an individual in a visually appealing and professional manner. This portfolio serves as a digital resume, highlighting the creator's expertise in various fields such as UI/UX design, web development, graphic design, and more. With sleek designs, interactive elements, and comprehensive content, the personal portfolio presents the creator's work and personality effectively, leaving a lasting impression on potential employers, clients, or collaborators.</template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </template>
  
  <script>
  import { Card, CardMeta } from 'ant-design-vue';
  
  export default {
    components: {
      'a-card': Card,
      'a-card-meta': CardMeta,
    }
  }
  </script>
  
  <style scoped>
  .pcontent {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 50px;
    text-align: center;
  }
  
  .project {
    text-align: center;
    width: 100%;
    color: #fdeed9;
    padding-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 95px 0 16px;
    background-size: cover;
  }
  
  h2 {
    border-right: 2px solid;
    white-space: nowrap;
    width: 50%;
    overflow: hidden;
    animation: typing 2s steps(22), cursor .6s step-end infinite alternate;
  }
  
  /* Cursor blinking */
  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }
  
  /* Typing effect */
  @keyframes typing {
    from {
      width: 0
    }
  }
  </style>
  