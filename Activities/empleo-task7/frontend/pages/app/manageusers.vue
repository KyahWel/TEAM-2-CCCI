<template>
       <a-row :gutter="[16,16]" class="justify-center animate__animated animate__zoomIn">
            <a-col v-for="applicant in paginatedUsers" :key="applicant.id" :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="mt-5">
            <div class="w-full rounded-md bg-orange-500 p-1 border-1 rounded-xl shadow-xl">
                <a-card class="h-56 flex flex-col justify-center items-center text-center shadow-md m-1">
                    <a-avatar :size="64" :src="applicant.image" />
                    <h1 class="font-bold mt-2">{{ applicant.firstName }} {{ applicant.lastName }}</h1>
                    <p>{{ applicant.email }}</p>
                    <p class="italic">{{ applicant.phone }}</p>
                    <!-- <NuxtLink :to="`/app/${applicant.id}`" class="button"><a-button type="primary" class="mt-5 transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                        View Profile
                    </a-button></NuxtLink> -->

                </a-card>
            </div>
            </a-col>
        </a-row>
</template>

<script>
definePageMeta({
    layout: 'navbar'
})

</script>

<style lang="scss" scoped>

</style>