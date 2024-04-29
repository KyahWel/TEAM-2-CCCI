<template>
<div class=" bg-gradient-to-r from-amber-500 rounded-xl via-yellow-300 to-orange-500 flex flex-col justify-center md:m-18 lg:m-2 customscreen py-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md lg:mx-auto lg:w-full lg:max-w-md" >
        <img class="mx-auto h-10 w-auto" src="~/assets/images/login.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-orange-700">
            Create a new account
        </h2>
        <p class="mt2 text-center text-sm leading-5 text-orange-700 max-w" >
            Or
            <span class="text-orange-700 hover:text-orange-600 underline cursor-pointer ml-1" @click="$router.push('/')">
                login to your account
            </span>
            {{ route }}
        </p>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md lg:mx-auto lg:w-full lg:max-w-md lg:flex-auto">
        <div class="bg-gray-900 backdrop-blur-lg bg-opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST"  name="Signup">
                <div>
    <label for="accountType" class="block text-sm font-medium leading-5 text-white">
        Account Type
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
        <select id="accountType" name="accountType" v-model="accountType" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            <option value="">Select Account Type</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>
    </div>
</div>


               <div class="mt-4">
                    <label for="firstName" class="block text-sm font-medium leading-5 text-white">
                First Name
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="firstName" name="firstName" v-model="firstName" type="text" placeholder="First Name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="lastName" class="block text-sm font-medium leading-5 text-white">
                Last Name
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="lastName" name="lastName" v-model="lastName" type="text" placeholder="Last Name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="middleName" class="block text-sm font-medium leading-5 text-white">
                Middle Name
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="middleName" name="middleName" v-model="middleName" type="text" placeholder="Middle Name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>
                

                <div class="mt-4">
                    <label for="email" class="block text-sm font-medium leading-5  text-white">
            Email address
          </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" v-model="email" placeholder="Email" type="text" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                ">
                       
                    </div>
                </div>

                <div class="mt-4">
                    <label for="username" class="block text-sm font-medium leading-5 text-white">
                Username
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="username" name="username" v-model="username" type="text" placeholder="Username" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="password" class="block text-sm font-medium leading-5 text-white">
                Password
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" v-model="password" type="password" placeholder="Password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>
                <div class="mt-4">
        <span class="block w-full rounded-md shadow-sm">
            <a-button noStyle @click="signupHandler" class="w-full flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-orange-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Create Account
            
            </a-button>
           
        </span>
    </div>
            </form>

        </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
const router = useRouter()

export default {
    name: 'Signup',
    data() {
        return {
            accountType: null,
            firstName: null,
            lastName: null,
            middleName: null,
            email: null,
            username: null,
            password: null
        }
    },
    methods: {
        signupHandler() {
            const signup = {
                'accountType': this.accountType,
                'firstName': this.firstName,
                'lastName': this.lastName,
                'middleName': this.middleName,
                'email': this.email,
                'username': this.username,
                'password': this.password
            }
            
           
             axios.post('http://localhost:3001/users/register', signup)
                 .then(response => {
                     console.log(response.data);
                     router.push('/success') // Handle the response from the server
                 })
                 .catch(error => {
                     console.error(error); // Handle any errors that occur
                 });
        }
    }
};


</script>

<style>
@media (max-width: 1900px) {
    .customscreen {
        margin: 2.5rem;
    }
}
</style>