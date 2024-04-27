<template>
    <!-- Footer section -->
    <a-layout-footer class="footer">
      <!-- Centered row -->
      <a-row justify="center" align="middle">
        <!-- Column with copyright information -->
        <a-col :span="24">
          <!-- Stylish copyright information -->
          <p class="copyright">&copy; 2024 Recruitify Nexus. All Rights Reserved.</p>
        </a-col>
      </a-row>
    </a-layout-footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter' // Component name
  }
  </script>
  
  <style scoped>
  /* Footer styles */
  .footer {
    background-color: #181D31; /* Background color for the footer */
    padding: 20px 0; /* Padding for the footer content */
    text-align: center; /* Align text to center */
  }
  
  /* Copyright text styles */
  .footer p {
    margin: 0; /* Default margin */
  }
  
  /* Stylish copyright text */
  .footer .copyright {
    font-size: 16px; /* Font size */
    color: #ffffff; /* Text color */
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; /* Font family */
  }
  </style> 
  