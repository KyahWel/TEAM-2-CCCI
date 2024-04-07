<template>
  <!-- container -->
  <div>
    <div style=" padding:15px; padding-right: 50px">
      <a-row :gutter="8">
        <a-col :span="9">         <!-- User Avatar and Name Card -->
          <a-card class="bg-gradient-to-br from-teal-300 to-lime-100 shadow-md" 
          bordered="false" style="height: 100px; margin-left: 10px;">
            <div style="display: flex; align-items: center;">
              <a-avatar :size="80" style="margin-top: -15px;">
                <template #icon>
                  <img src="assets/images/myavatar.jpg" alt="Avatar Image" 
                  style="width:auto; height:auto; object-fit:cover;"/>
                </template>
              </a-avatar>
                <div style="margin-left: 20px;">
                  <div class="font-bold text-base text-teal-950">
                    <p>WELCOME,</p>
                  </div>
                  <div class="font-bold text-2xl text-teal-700 mb-3">
                    <p>JANINE DE LUNA LINGO</p>
                  </div>
                </div>
          </div>
          </a-card>
        </a-col>          <!-- Statistic Cards -->
        <a-col :span="5">
          <a-card class="bg-lime-100 shadow-md" bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p class="text-teal-950">TOTAL APPLICANTS</p>
                  </div>
                  <div>
                    <p class="text-2xl text-teal-700">168</p>
                  </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="5">
          <a-card class="bg-lime-100 shadow-md" bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p class="text-teal-950">NEW APPLICANTS</p>
                  </div>
                  <div>
                    <p class=" text-2xl text-teal-700">50</p>
                  </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="5">
          <a-card class="bg-lime-100 shadow-md" bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p class="text-teal-950">PENDING APPLICANTS</p>
                  </div>
                  <div>
                    <p class="text-2xl text-teal-700">50</p>
                  </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
<!-- container -->
<!-- CHARTS SECTION -->

    <div>
      <a-row>
        <a-card class="bg-teal-50 shadow-md" style="margin-left: 25px; width: 1265px; height: 325px;">
            <a-row :gutter ="2">
              <a-col :span="10" style="margin-top: 20px;">  <!-- Pie Chart -->
                <Piechart/>
              </a-col>
              <a-col :span="14">                            <!-- Line Chart -->
                <Linechart/>
              </a-col>
            </a-row>
        </a-card>
  <!-- Calendar Section -->
        <a-col style="margin-left: 10px;">
          <Calendar/>
        </a-col>
      </a-row>
    </div>

<!-- TABLE AND RECENT ACTIVITY SECTION-->
<div style="padding: 20px; padding-left: 32px">
      <a-row :gutter="16">
        <a-card class="bg-gradient-to-l from-lime-100 to-teal-200 shadow-md" bordered="false">
          <a-col>
            <Tableusers/>
          </a-col>
        </a-card>
          <a-col>
            <a-card title="RECENT ACTIVITIES" 
            class="shadow-md" bordered="false" style ="width: 350px; height: 100%">
              <Timeline/>
            </a-card>
          </a-col>
      </a-row>
    </div>
  </div>
</template>
<!-- TABLE AND RECENT ACTIVITY END-->

<script setup lang="ts">

/* IMPORTS FROM COMPONENTS */
import Calendar from '~/components/Calendar.vue';
import Piechart from '~/components/Piechart.vue';
import Linechart from '~/components/Linechart.vue';
import Tableusers from '~/components/Tableusers.vue';

definePageMeta({
    layout: 'default'
})
</script>
