<template>
  <div class="profile">
  <a-card class="welcome-card">
    <a-card-meta title="Greetings, Administrator." description="I'm Shaira Morales!" class="card-meta">
      <template #avatar>
        <a-avatar :size="70" icon="user" class="avatar" src="http://localhost:3001/assets/images/me.jpg"/>
      </template>
    </a-card-meta>
  </a-card>
</div>
</template>

<style scoped>
/* Scoped styles for the welcome card */
.welcome-card {
  background-color: #f0f2f5;  
  width: 380px;  
  border-radius: 8px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  padding: 5px;  
}

/* Customize Ant Design card meta component */
.card-meta {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;  
  color: #333; /* Font color */
  font-size: 25px;
  margin-left: 10px;
}

/* Style for the avatar */
.avatar {
  border: 2px solid #1890ff; /* Add border with accent color */
}

.profile{
  width: 50px;
}
</style>
