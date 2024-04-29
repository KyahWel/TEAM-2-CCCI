<template>
    <div>
        <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
        <a-row :gutter="[16,16]" class="w-screen">
            <a-col :span="16">
                <a-card title="Job Title" :bordered="false" class="w-full m-3">
                    <p class="text-2xl">
                        <b>
                            Job Title
                        </b>
                    </p>
                    <p>Job Description</p>
                    <div class="flex flex-col justify-items-end items-end">
                        <a-button type="primary" >Apply to this Job</a-button>
                    </div>
                </a-card>
                <a-card title="Job Title" :bordered="false" class="w-full m-3">
                    <p class="text-2xl">
                        <b>
                            Job Title
                        </b>
                    </p>
                    <p>Job Description</p>
                    <div class="flex flex-col justify-items-end items-end">
                        <a-button type="primary" >Apply to this Job</a-button>
                    </div>
                </a-card>
                <a-card title="Job Title" :bordered="false" class="w-full m-3">
                    <p class="text-2xl">
                        <b>
                            Job Title
                        </b>
                    </p>
                    <p>Job Description</p>
                    <div class="flex flex-col justify-items-end items-end">
                        <a-button type="primary" >Apply to this Job</a-button>
                    </div>
                </a-card>
                

                
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" style="height: 700px" class="w-full text-center">
                    <a-avatar :size="64">
                        <template #icon><UserOutlined /></template>
                    </a-avatar>
                    <p class="text-2xl text-center">
                        <b>Applicant's Profile</b>
                    </p>

                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Contact Number: </p>
                    <p>City: </p>
                    <p>State: </p>

                    <p class="text-2xl text-center">
                        <b>Previous Work Experience</b>
                    </p>
                    <p>Company: </p>
                    <p>Work Title: </p>
                    <p>Work Location: </p>

                    <NuxtLink to="../landingPage"><a-button type="primary" >Logout</a-button></NuxtLink>


                </a-card>
            </a-col>
        </a-row>
        </div>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>

<style>

</style>