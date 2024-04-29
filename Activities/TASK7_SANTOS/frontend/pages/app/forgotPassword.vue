<template>
    <div>
        <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center animate__animated animate__zoomIn">
        <!-- Mascot -->
            <img src="/public/landingPageManPointingDown.webp" class="w-96 relative z-50 mb-72" />
            <!-- Landing Page: Card -->
                <a-card :bordered="false" style="width: 475px;" class="text-center px-5 mx-5 mt-52 absolute card">
                   <p class="fw-bold text-4xl py-20">Forgot Password</p>
                </a-card>
        </div>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboardApplicants'
})
</script>

<style>

</style>