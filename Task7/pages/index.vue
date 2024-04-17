<template>
 <div>
 <a-button  
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/signin/signinuser')"
        >
          User Sign-In
        </a-button>

  <a-button  
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 w-full sm:w-auto"
          @click="$router.push('/signin/signinuser')"
        >
          Admin Sign-In
        </a-button>
  
        {{ route }}
 </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landinglayout' //layout to para kay taguro na landingpage ko
})

const router = useRouter()

</script>

<style>

</style>