<template>
    <div class="overflow-hidden">
    
    <div  :class="{ 'fade-out': isFadeOut }" class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center relative z-40">
        <img src="/public/briefcase-2.png" class="relative z-50 mt-24 animate__animated animate__slideOutUp animate__delay-2s" />
        <img src="/public/briefcase-1.png" class="absolute animate__animated animate__slideOutDown animate__delay-2s"/>
    </div>

    </div>
</template>

<script>
 
 export default {
    data() {
      return {
        isFadeOut: false
      };
    },
    mounted() {
      // Start the fade-out effect
      this.isFadeOut = true;
      
      // Re-route to homepage
      setTimeout(() => {
        this.$router.push('/landingPage');
      }, 2100); // Delay
    }
  };

</script>

<style>
</style>