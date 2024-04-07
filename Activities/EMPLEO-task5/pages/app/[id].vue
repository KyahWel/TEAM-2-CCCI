<template>
 <div class=" mx-auto bg-white rounded-xl shadow-md md:max-w-3xl">
    <div class="flex">
        <div class="w-full">
            <img class="h-full w-full object-cover md:h-full md:w-full" :src="users.image">
        </div>
        <div class="p-8">
            <div class="uppercase font-bold text-2xl">{{ users.firstName }} {{ users.lastName }}</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black">{{ users.address.address }} {{ users.address.city }}, {{ users.address.state }}
            </p>
            <p class="mt-2 text-slate-500"><b>Birthdate: </b> {{ users.birthDate }}
            </p>
            <p class="mt-2 text-slate-500"><b>Gender: </b> {{ users.gender }}
            </p>
            <p class="mt-2 text-slate-500"><b>Email Address: </b> {{ users.email }}
            </p>
            <p class="mt-2 text-slate-500"><b>Phone Number: </b> {{ users.phone }}
            </p>
            <p class="mt-2 text-slate-500"><b>Age: </b> {{ users.age }}
            </p>
            <p class="mt-2 text-slate-500"><b>University: </b> {{ users.university }}
            </p>
            <a-divider></a-divider>
            <p class="font-semibold text-2xl">Work Experience</p>
            <p class="mt-2 text-slate-500"><b>Company Name: </b> {{ users.company.name }}
            </p>
            <p class="mt-2 text-slate-500"><b>Company Position: </b> {{ users.company.title }}
            </p>
            <p class="mt-2 text-slate-500"><b>Designated Department: </b> {{ users.company.department }}
            </p>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <a-button type="primary" class="shadow-lg font-bold mt-5 transition ease-in-out delay-150 m-3 bg-orange-500 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500 duration-300 mr-5">Hire Applicant</a-button>
        <a-button type="primary" class="shadow-lg font-bold mt-5 transition ease-in-out delay-150 m-3 bg-orange-500 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500 duration-300">Waitlisted</a-button>
    </div>
    </div>
</template>

<script setup lang="ts">

// Dashboard Layout
definePageMeta({
    layout: 'navbar'
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
import { notification } from 'ant-design-vue';
const openNotification = () => {
  notification.open({
    message: 'Applicant Successfuly Hired!',
    description:
      'Please proceed to contact the applicant for onboarding proccess',
    onClick: () => {
      console.log('Applicant Hired');
    },
  });
};

</script>

<style scoped>

</style>