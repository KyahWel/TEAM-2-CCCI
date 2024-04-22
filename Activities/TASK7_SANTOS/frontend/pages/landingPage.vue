<template>
    <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center animate__animated animate__zoomIn">
        <!-- Mascot -->
            <img src="/public/landingPageManPointingDown.webp" class="w-80 relative z-50 mb-72" />
            <!-- Landing Page: Card -->
                <a-card :bordered="false" style="width: 475px;" class="text-center px-5 mx-5 mt-52 absolute card">
                    <!-- Landing Page: User Type Option-->
                    <p class="pathFinderChoose">
                            <p class="italic font-bold text-3xl mt-5">Welcome to Pathfinder!</p>
                    <a-row :gutter="[16,16]" class="justify-center items-center my-5">
                        
                        <!-- Option 1: Applicant  -->
                        <a-col>
                            <a-card :bordered="false" style="width: 150px" class="animate__animated animate__slideInLeft">                                
                            <NuxtLink to="/app/applicantLogin"> 
                                <p class="text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-full drop-shadow-md pb-5 pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <SolutionOutlined />
                                </p>
                            </NuxtLink>
                                <p class="mt-3 card font-bold">
                                    Applicant
                                </p>
                            </a-card>
                        </a-col>

                        <!-- Option 2: Administrator -->
                        <a-col>
                            <a-card :bordered="false" style="width: 150px" class="animate__animated animate__slideInRight">   
                                <NuxtLink to="/app/adminLogin">                             
                                    <p class="text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-full drop-shadow-md pb-5 pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                        <UserOutlined />
                                    </p>
                                </NuxtLink>
                                <p class="mt-3 card font-bold">
                                    Administrator
                                </p>
                            </a-card>
                        </a-col>
                    </a-row>
                    <!-- Instructions -->
                        <p class="card mt-3 animate__animated animate__fadeIn animate__delay-1s">Please choose from the options to proceed </p>
                    </p>
                    <NuxtLink to="/app"><a-button>BYPASS</a-button></NuxtLink>
                </a-card>
        </div>
    </div>
</template>

<script setup>
// Ant-Design Icon Import
 import {
    SolutionOutlined,
    UserOutlined
  } from '@ant-design/icons-vue';

</script>


<style>
/* Montserrat Font */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400');
.card {
  font-family: "Montserrat", sans-serif;
}
</style>