<template>
    <div class="flex flex-col justify-center items-center h-screen bg-teal-950 text-lg">
    <div class="container flex justify-center items-center text-center rounded-xl ">
            <form action="#" class="w-full max-w-sm">
                <h2 class="text-xl font-semibold mb-4">FORGOT PASSWORD?</h2>
                <p class="mb-4">Enter the Email Address associated with your account to reset your password</p>
                <input type="email" placeholder="Email" required class="w-full px-4 py-2 rounded bg-gray-300 mb-4 focus:outline-1 focus:bg-white">
                <button @click="$router.push('/Resetpassword')"
                class="w-full text-white py-2 rounded hover:bg-gray-700">Reset Password</button>
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

<style>
.container {
  background-color: #fff;
  width: 600px;
  max-width: 100vw;
  height: 400px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}
.container form button{
  border: none;
  padding: 10px;
  margin-top: 5px;  
  background-color: #059669;
  border-radius: 5px;
  cursor: pointer;
}

</style>