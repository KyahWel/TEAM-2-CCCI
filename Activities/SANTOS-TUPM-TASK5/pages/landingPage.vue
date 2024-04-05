<template>
    <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center animate__animated animate__zoomIn">
            <img src="/public/landingPageManPointingDown.webp" class="w-80 relative z-50 mb-48" />
            <!-- Landing Page Card -->
                <a-card title="Path Finder" :bordered="false" style="width: 475px;" class="text-center px-5 mx-5 mt-52 absolute card">
                    <!-- Landing Page Description -->
                    <p class="pathFinderDescription"> 
                        Welcome to Path Finder, your trusted partner in navigating the 
                        ever-evolving landscape of talent acquisition. 
                        At Path Finder, we are here to simplify the process and guide you every 
                        step of the way.
                    </p>
                <!-- Landing Page Button -->
                    <a-button type="primary" class="w-full mt-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
                    @click="displayDashboard">
                        Proceed to Dashboard
                    </a-button>
                </a-card>
        </div>
    </div>
</template>

<script setup>
let router  = useRouter()
 let displayDashboard = () => {
    router.push('/app')
 }

</script>


<style>
/* Montserrat Font */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400');
.card {
  font-family: "Montserrat", sans-serif;
}
</style>