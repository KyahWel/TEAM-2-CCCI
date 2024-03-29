<template>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <img src="/assets/icon.png" alt="icon" class="header-icon">
          <nav class="main-nav">
            <ul class="nav-links">
              <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
              <li><NuxtLink to="/projects" class="nav-link">Projects</NuxtLink></li>
              <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: transparent;
    color: #000000;
    padding: 9px 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between; /* Align items to opposite ends */
    align-items: center;
  }
  
  .main-nav {
    display: flex;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .nav-links li {
    margin-right: 30px; /* Adjusted margin */
  }
  
  .nav-links li:last-child {
    margin-right: 0;
  }
  
  /* Update font style */
  .nav-links li a {
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Lato', sans-serif; /* Add font family */
    transition: .3s;
    font-size: 18px; /* Increased font size */
  }
  
  /* Add animation effect */
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  /* Apply animation to navigation links */
  .nav-links li a {
    animation: fadeIn 0.5s ease-in-out; /* Add animation to fade in */
  }
  
  /* Add hover effect */
  .nav-links li a:hover {
    color: #ea638c; /* Change color on hover */
  }
  
  /* Additional Enhancements */
  
  /* Add underline animation on hover */
  .nav-link {
    position: relative;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ea638c;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .nav-link:hover::after {
    transform: scaleX(1);
  }
  
  /* Style for header icon */
  .header-icon {
  
    width: auto; /* Adjust the width automatically */
    height: 80px; /* Adjust the height as needed */
    margin-right: -19px; /* Adjusted margin */
  }

  </style>
  