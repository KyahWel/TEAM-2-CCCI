<template>
  <!-- Container for the welcome message and user profile picture -->
  <a-card
    style="
      height: 95%;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    "
  >
  <!-- Contains the title and description of the card -->
  <a-card-meta
  title="Welcome,"
  description=" Clarisse Mutia!"
  style="
    margin-left: 7px;
    text-align: left;
    font-weight: bold;
    font-size: 22px;
    
  "
>
  <!-- container for the user profile picture -->
  <template #avatar>
      <a-avatar :size="84" src="http://localhost:8080/assets/images/profile.png" />
      </template>
    </a-card-meta>
  </a-card>
</template>
  
  <script>
 
  </script>

  <style scoped>

  </style>

