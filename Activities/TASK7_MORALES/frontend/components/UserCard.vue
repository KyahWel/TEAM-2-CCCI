<template>
  <div class="welcome-card-container">
    <a-card class="welcome-card" title="Welcome, Shaira Morales!">
      <p>This is your user dashboard. You can view your profile information here.</p>
    </a-card>
  </div>
</template>

<style scoped>
/* Scoped styles for the welcome card container */
.welcome-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Set height to full viewport height */
}

/* Scoped styles for the welcome card */
.welcome-card {
  background-color: #a8609950;
  width: 900px; /* Adjust width to 80% of viewport width */
  max-width: 980px; /* Set maximum width */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px; /* Adjust padding */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #333; /* Font color */
  font-size: 25px;
}
</style>
