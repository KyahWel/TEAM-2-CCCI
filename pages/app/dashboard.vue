<template>
  <!-- container -->
  <div>
    <div style="background-color: #ececec; padding: 20px">
      <a-row :gutter="16">
        <a-col :span="9">
          <a-card bordered="false" style="height: 100px;">
            <div style="display: flex; align-items: center;">
              <a-avatar :size="64">
                <template #icon>
                  <img src="assets/images/myavatar.jpg" alt="Avatar Image" style="width: auto; height: auto; object-fit: cover; border-radius: 50%;" />
                </template>
              </a-avatar>
                <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p>WELCOME,</p>
                  </div>
                  <div style="font-size: large; font-weight: bolder;">
                    <p>Janine Rose D. Lingo</p>
                  </div>
                </div>
          </div>
          </a-card>
        </a-col>
        <a-col :span="5">
          <a-card bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p>TOTAL APPLICANTS</p>
                  </div>
                  <div style="font-size: large; font-weight: bolder;">
                    <p>168</p>
                  </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="5">
          <a-card bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p>NEW APPLICANTS</p>
                  </div>
                  <div style="font-size: large; font-weight: bolder;">
                    <p>50</p>
                  </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="5">
          <a-card bordered="false" style="height: 100px;">
            <div style="margin-left: 20px;">
                  <div style="font-weight: bold;">
                    <p>PENDING APPLICANTS</p>
                  </div>
                  <div style="font-size: large; font-weight: bolder;">
                    <p>50</p>
                  </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
<!-- container -->
<!-- CHARTS STARTS HERE -->

    <div style="margin-top: 20px">
      <a-row :gutter="16">
        <a-card style="margin-left: 30px; width: 1270px; height: 325px;">
            <a-row :gutter ="16">
              <a-col :span="10" style="margin-top: 20px;">
                <Piechart/>
              </a-col>
              <a-col :span="14">
                <Linechart/>
              </a-col>
            </a-row>
        </a-card>
<!-- CHARTS END  HERE -->
        <a-col :span="5" style="margin-left: 1px;">
          <Calendar/>
        </a-col>
      </a-row>
    </div>

<!-- TABLE AND RECENT ACTIVITY -->
    <div class="p-8 flex justify-between">
      <a-row :gutter="16">
        <a-card bordered="false">
          <a-col>
            <Tableusers/>
          </a-col>
        </a-card>
          <a-col>
            <a-card bordered="false" style ="width: 350px; height: 100%">
                <div style="font-weight: bold; margin-bottom: 20px; margin-top: 20px;">
                    <p>RECENT ACTIVITIES</p>
                </div>
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

<style scoped>
/* Add your scoped styles here */
</style>
