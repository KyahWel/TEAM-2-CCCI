<template>
  <div class="bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 md:m-4 lg:m-12 customscreen px-6 pb-8 rounded-xl justify-center">
    <div>
      <h1 class="text-amber-700 text-4xl font-black text-center pb-6 pt-4  ">Welcome User</h1>
    </div>
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg pb-5 pt-5 pr-0 pl-0 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5 text-center">Sign In</h2>
    <a-form
    
    name="Login" 
    v-bind="aformitemlayout"  
    autocomplete="on"
    style="color:white;"
    
  >
  <div class="px-20 pt-4  text-center align-center"> 
   
      <label for="username">Username</label> <!-- Username-->
  
      <input class="text-black bg-yellow-400 my-2 mx-2 py-2 px-2 rounded-lg w-full"  id="username" name="username" v-model="username" placeholder="Nigga" />
   
     

      <label for="password">Password</label><!-- Password-->

      <input type="password" class="text-black bg-yellow-400 my-2 mx-2 py-2 px-2 rounded-lg w-full"  id="username" name="password" v-model="password"  placeholder="Nigga"  />



    

</div> 


    <a-form-item v-bind="aformtaillayout" class=" flex justify-center items-center text-sm w-auto  text-white">
      <div class="w-36 mx-14 relative my-4">
      <p class="text-amber-500   relative  hover:text-amber-600 underline cursor-pointer text-center" @click="$router.push('/forgot/verifyemail')">Forgot Password?</p>
          {{ route }}
      </div>
        <a-button    
       
          type="submit"
          class="  relative lg:w-24 lg:mx-20  text-white bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  "
          @click="loginHandler"
        >  <!-- Login Button-->
          Login
        </a-button>
  
        
        <div class=" flex text-sm lg:w-72 lg:pt-8 lg:mx-16  lg text-white"> <!-- Register Button-->
          <span>New here?</span>
          <p class="text-amber-500 hover:text-amber-600 underline cursor-pointer ml-1" @click="$router.push('/signin/signupuser')">Register</p>
          {{ route }}
        </div>
        
    </a-form-item>
    <div class=" absolute right-0 bottom-0 pb-4 pr-4"> <!-- Back Button-->
      <RightOutlined class="text-orange-500  font-black cursor-pointer " />
      <span class="text-orange-500 hover:text-orange-600 font-black underline cursor-pointer relative " @click="$router.push('/')">
        Back
            </span>
            {{ route }}
  </div>
    
    </a-form>

  </div>
 
</div>
</template>

<script >
import axios from 'axios';
const router = useRouter()

const aformitemlayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
 
};
const aformtaillayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default {
    name: 'Login',
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        async loginHandler() {
            const loginData = {
                username: this.username,
                password: this.password
            };

            try {
                const response = await axios.post('http://localhost:3001/users/login', loginData);
               if (response.data.message === 'User login successful.'){
                console.log('Welcome to User Dashboard');
                router.push ('/user/home');
               }
               else if(response.data.message === 'Admin login successful.'){
                console.log('Welcome to Admin Dashboard');
                router.push ('/app/dashboard');
               }
               else{
                console.log('Error Login Data of username or password');
               }
            } catch (error) {
                console.error(error);
                // Handle error, show error message, etc.
            }
        }
    }
};


</script>

<style scoped >

.a-input-password{
position: absolute;
background-color: yellow;
}

@media (max-width: 1900px) {
    .customscreen {
        margin: 13.5rem;
        
    }
}
</style>