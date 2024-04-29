<template>
  <div class="flex flex-col justify-center items-center h-screen bg-teal-950 text-base">
 <div class="container rounded-xl shadow-2xl" :class="{ 'change': isChange }">
    <div class="forms-container">
      <div class="form-control signup-form">
        <form @submit.prevent="register">
          <h2>SIGN UP</h2>
          <input v-model="register.username" id="username" type="text" placeholder="Username" required />
          <input v-model="register.email" id="email" type="email" placeholder="Email" required />
          <input v-model="register.password" id="password" type="password" placeholder="Password" required />
          <input v-model="register.confirmpassword" type="password" placeholder="Confirm password" required />
        <label for="usertype">Select user type:</label>
          <select v-model="register.usertype" name="usertype " id="usertype" class="text-lg h-8">
            <option value="admin ">Administrator</option>
            <option value="regular">Regular User</option>
          </select>
          <button style="margin-top: 20px;" type="submit"> SIGN UP </button>
        </form>
        


      </div>
      <div class="form-control signin-form">
        <form @submit.prevent="axiosPost">
          <h2>LOGIN</h2>
          <!-- <input type="text" placeholder="Username" required /> -->
          <a-input v-model="formState.username"  placeholder="Username" required class="custom-input-login text-base">
           <template #prefix><UserOutlined/></template>
          </a-input>
           <!-- Password input with show/hide functionality -->
           <a-input-password v-model="formState.password" placeholder="Password" required visibilityToggle class="custom-input-password text-base"> 
           <template #prefix>
          <LockOutlined class="site-form-item-icon" />
          </template>
          </a-input-password>
          <p @click="$router.push('/Forgotpassword')"  class="text-blue-500 cursor-pointer"> Forgot Password?</p>
          {{ route }}
          
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
    <div class="intros-container">
      <div class="intro-control signin-intro">
        <div class="intro-control__inner">
          <h2 class="font-medium">WELCOME BACK!</h2>
          <p>
            Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.
          </p>
          <button @click="toggleForm" class="font-medium" >No account yet? SIGN UP.</button>
        </div>
      </div>
      <div class="intro-control signup-intro">
        <div class="intro-control__inner">
          <h2 class="font-medium">COME JOIN US!</h2>
          <p>
            We are so excited to have you here. If you haven't already, create an account here.
          </p>
          <button @click="toggleForm" class="font-medium">Already have an account? SIGN IN.</button>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';



const router = useRouter();

interface FormState {
    username: string;
    password: string;
}
interface Register {
  username: string;
  email: string;
  password: string;
  usertype: string;
  confirmpassword:string;
}

export default defineComponent({
    data() {
        return {
            isChange: false,
            formState: reactive<FormState>({
                username: '',
                password: ''
            }),
            register: reactive<Register>({
              username: '',
              email: '',
              password: '',
              usertype: '',
              confirmpassword: ''
            })
        };
    },
    methods: {
        toggleForm() {
            this.isChange = !this.isChange;
        },
        async axiosPost() {
         
            try {
                const response = await axios.post('http://localhost:5005/users/login', {
                    username: this.formState.username,
                    password: this.formState.password
                });
                if (response.data.message === 'User login.'){
                console.log('Welcome to User Dashboard');
                router.push ('/user');
               }
               else if(response.data.message === 'Admin login.'){
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
        },
        async register(){
          if (this.register.password !== this.register.confirmPassword) {
      // Passwords do not match, show an error message or take appropriate action
      alert("Passwords do not match. Please re-enter.");
      return;
    }
          try{
            const response = await axios.post ('http://localhost:5005/users/login', {
              username: this.register.username,
              email: this.register.email,
              password: this.register.password,
              usertype: this.register.usertype
          });
          console.log(response.data);
          router.push ('/')
          alert("Register Successfully");
        }
          catch (error){
            console.error(error);
          }
        }
    }
});

definePageMeta({
    layout: "landingpage"
})
</script>

<style scoped>
.custom-input-login{
  margin: 10px 0px;
  border: 2px;
  padding: 15px;
  border-radius: 5px;
}
.custom-input-password {
    /* Override default styles here */
    margin: 10px 0px;
    border: 2px;
    padding: 15px;
    border-radius: 5px;
  }


.container {
  background-color: #fde68a;
  width: 760px;
  max-width: 100vw;
  height: 500px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  /* border-radius: 20px; */

}
.container .forms-container {
  position: relative;
  width: 50%;
  text-align: center;
}
.container .forms-container .form-control {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  transition: all 0.5s ease-in;
}
.container .forms-container .form-control h2 {
  font-size: 2rem;
}
.container .forms-container .form-control form {
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
}
.container .forms-container .form-control form input {
  margin: 10px 0px;
  border: none;
  padding: 15px;
  /* background-color: #ffffff; */
  border-radius: 5px;
  color: #bfbfbf ;
}
.container .forms-container .form-control form button {
  border: none;
  padding: 20px;
  margin-top: 5px;
  background-color: #059669;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.container .forms-container .form-control form button:focus {
  outline: none;
}
.container .forms-container .form-control span {
  margin: 10px 0px;
}
.container .forms-container .form-control.signup-form {
  opacity: 0;
  z-index: 1;
  left: 200%;

}
.container .forms-container .form-control.signin-form {
  opacity: 1;
  z-index: 2;
  left: 0%;
}
.container .intros-container {
  position: relative;
  left: 50%;
  width: 50%;
  text-align: center;
}
.container .intros-container .intro-control {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  color: #fff;
  background: linear-gradient(170deg, #34d399, #d9f99d);
  transition: all 0.5s ease-in;

}
.container .intros-container .intro-control .intro-control__inner {
  margin: 0px 30px;
}
.container .intros-container .intro-control button {
  border: none;
  padding: 15px 30px;
  background-color: #10b981;
  border-radius: 50px;
  color: #fff;
  margin: 10px 0px;
  cursor: pointer;
}
.container .intros-container .intro-control button:focus, .container .intros-container .intro-control button:hover {
  outline: none;
  background-color: #059669;
}
.container .intros-container .intro-control h3,
.container .intros-container .intro-control p {
  margin: 10px 0px;
}
.container .intros-container .intro-control.signin-intro {
  opacity: 1;
  z-index: 2;
}
.container .intros-container .intro-control.signup-intro {
  opacity: 0;
  z-index: 1;
}

.change .forms-container .form-control.signup-form {
  opacity: 1;
  z-index: 2;
  transform: translateX(-100%);
}
.change .forms-container .form-control.signup-form button {
  background-color: #10b981 !important;
}
.change .forms-container .form-control.signin-form {
  opacity: 0;
  z-index: 1;
  transform: translateX(-100%);
}
.change .intros-container .intro-control {
  transform: translateX(-100%);
  background: linear-gradient(170deg, #d9f99d, #10b981);
}
.change .intros-container .intro-control #signin-btn {
  background-color: #10b981;
}
.change .intros-container .intro-control.signin-intro {
  opacity: 0;
  z-index: 1;
}
.change .intros-container .intro-control.signup-intro {
  opacity: 1;
  z-index: 2;
}

@media screen and (max-width: 500px) {
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .container .forms-container {
    order: 2;
    width: 100%;
    height: 50vh;
  }
  .container .forms-container .form-control {
    position: absolute;
    height: 50vh;
  }
  .container .forms-container .form-control.signup-form {
    left: 0%;
    margin-top: 80px;
  }
  .container .intros-container {
    order: 1;
    width: 100%;
    left: 0%;
    height: 40vh;
  }
  .container .intros-container .intro-control {
    position: absolute;
    height: 40vh;
  }

  .change .forms-container .form-control.signup-form {
    transform: translateX(0%);
  }
  .change .forms-container .form-control.signin-form {
    transform: translateX(0%);
  }
  .change .intros-container .intro-control {
    transform: translateX(0%);
  }
}

</style>