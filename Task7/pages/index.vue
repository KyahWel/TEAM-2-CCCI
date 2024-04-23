<template>
  
 <div class="bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 rounded-lg  p-16 m-16 md:m-18 lg:m-36 customscreen " style="height: 300px; width:500px" >
  <div class="pr-2 mx-20 flex justify-self-center">
  <img class="w-48 " src="/assets/images/newlogo.png">
</div>
  <div class="flex justify-between py-4">
  <a-button  
          type="submit"
          class="text-white bg-amber-700 hover:bg-amber-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/signin/signinuser')"
        >
          User Sign-In
        </a-button>

  <a-button  
          type="submit"
          class="text-white bg-amber-700 hover:bg-amber-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/signin/signinadmin')"
        >
          Admin Sign-In
        </a-button>
  
        {{ route }}
 </div>
</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landinglayout' //layout to para kay taguro na landingpage ko
})

const router = useRouter()

</script>

<style>


@media (max-width: 1900px) {
    .customscreen {
        margin: 20rem;
        
    }
}
</style>