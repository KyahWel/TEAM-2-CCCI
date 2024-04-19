<template>
<div class=" bg-gradient-to-r from-amber-500 rounded-xl via-yellow-300 to-orange-500 flex flex-col justify-center md:m-18 lg:m-2 customscreen py-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md lg:mx-auto lg:w-full lg:max-w-md" >
        <img class="mx-auto h-10 w-auto" src="~/assets/images/login.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-orange-700">
            Create a new account
        </h2>
        <p class="mt2 text-center text-sm leading-5 text-orange-700 max-w" >
            Or
            <span class="text-orange-700 hover:text-orange-600 underline cursor-pointer ml-1" @click="$router.push('/signin/signinuser')">
                login to your account
            </span>
            {{ route }}
        </p>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md lg:mx-auto lg:w-full lg:max-w-md lg:flex-auto">
        <div class="bg-gray-900 backdrop-blur-lg bg-opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#">
                <div>
    <label for="accountType" class="block text-sm font-medium leading-5 text-white">
        Account Type
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
        <select id="accountType" name="accountType" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            <option value="">Select Account Type</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>
    </div>
</div>


                <div class="mt-4">
                    <label for="firstName" class="block text-sm font-medium leading-5  text-white">First Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="firstName" name="firstName" placeholder="First Name" type="text" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        <div class="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="lastName" class="block text-sm font-medium leading-5  text-white">Last Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="lastName" name="lastName" placeholder="Last Name" type="text" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        <div class="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <label for="middleName" class="block text-sm font-medium leading-5  text-white">Middle Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="middleName" name="middleName" placeholder="Middle Name" type="text" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        <div class="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="username" class="block text-sm font-medium leading-5 text-white">Username</label>
                    <div class="mt-1 flex rounded-md shadow-sm">

                        <span class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    prawnhub.com/
                </span>
                        <input id="username" name="username" placeholder="Username" type="text" required="" value="" class="flex-1 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 ">
                    </div>
                </div>

                <div class="mt-4">
                    <label for="email" class="block text-sm font-medium leading-5  text-white">
            Email address
          </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="Email" type="email" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                ">
                        <div class="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="password" class="block text-sm font-medium leading-5 text-white">
                Password
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>

                <div class="mt-4">
                    <label for="password_confirmation" class="block text-sm font-medium leading-5 text-white">
                Confirm Password
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password_confirmation" name="password_confirmation" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>

                <div class="mt-4">
        <span class="block w-full rounded-md shadow-sm">
            <button  class="w-full flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-orange-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Create Account
            </button>
        </span>
    </div>
            </form>

        </div>
    </div>
    
</div>
</template>

<script lang="ts" setup>

const router = useRouter()


</script>

<style>

</style>