<template>
    <div class="flex items-center justify-center h-full mt-2">

  <div class="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img :src="users.image" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
              
            </div>
            <div class="w-full text-center mt-20">
                
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{{ users.firstName }} {{ users.lastName }}</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i> {{ users.address.city }}, {{ users.address.state }}
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="flex justify-center w-full px-4">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ users.birthDate }}</span>
                        <span class="text-sm text-slate-400">Birthdate</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block tracking-wide text-slate-700">{{ users.email }}</span>
                        <span class="text-sm text-slate-400">Email Address</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ users.phone }}</span>
                        <span class="text-sm text-slate-400">Phone Number</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <span class="text-xl font-bold block text-slate-700">Previous Work Experience</span>
                <div class="flex justify-center w-full px-4">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ users.company.name }}</span>
                        <span class="text-sm text-slate-400">{{ users.company.title }}</span> <br>
                        <span class="text-sm text-slate-400">{{ users.company.address.city }},{{ users.company.address.state }}</span>
                    </div>
                </div>
                <a-popconfirm
                    title="Hire this Applicant?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm"
                    @cancel="cancel"
                >
                    <a-button type="primary" class="shadow-lg font-bold mt-5 transition ease-in-out delay-150  bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">Hire Applicant</a-button>
                </a-popconfirm>
            </div>
        </div>

       
    </div>
</div>

    </div>
</template>

<script setup lang="ts">

// Dashboard Layout
definePageMeta({
    layout: 'dashboard'
})


// Profile Fetch Data
const { id } = useRoute().params
const url = 'https://dummyjson.com/users/' + id

const { data: users } = await useFetch(url)

// Route to Applicant List
let router  = useRouter()
 let displayList = () => {
    router.push('/app/applicants')
 }

// Notification
import { message } from 'ant-design-vue';
const confirm = (e: MouseEvent) => {
  console.log(e);
  message.success('Applicant Successfully Listed for Interview!');
};

const cancel = (e: MouseEvent) => {
  console.log(e);
  message.error('Application Declined');
};

</script>

<style>
.body{
    overflow-y: hidden;
}
</style>