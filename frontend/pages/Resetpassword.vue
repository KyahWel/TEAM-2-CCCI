<template>
     <div class="flex flex-col justify-center items-center h-screen bg-teal-950 text-lg">
    <div class="container flex justify-center items-center text-center rounded-xl ">
            <form action="#" class="w-full max-w-sm">
                <h2 class="text-xl font-semibold mb-4">RESET YOUR PASSWORD</h2>
                <p class="mb-4">Enter a new password below to change your password</p>
                <input type="password" placeholder="Enter new password" 
                required class="w-full px-4 py-2 rounded bg-gray-300 mb-4 focus:outline-1 focus:bg-white">
                <input type="password" placeholder="Confirm new password" 
                required class="w-full px-4 py-2 rounded bg-gray-300 mb-4 focus:outline-1 focus:bg-white">
                <button class="w-full text-white py-2 rounded hover:bg-gray-700">SUBMIT</button>
                <div class="flex justify-center">
                <p>Remember your password?</p>
                <p class="ml-1 text-blue-500 cursor-pointer" @click="$router.push('/')">Login Here</p>
                {{ route }}
                </div>
            </form>
        </div>
    </div>
</template>


<script lang="ts" setup>
const router = useRouter();
definePageMeta({
    layout: "landingpage"
})

</script>