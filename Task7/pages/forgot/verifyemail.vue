<template>
  <div>
    oh asan email mo
    <a-button @click="$router.push('/forgot/forgotpass')"> Confirm </a-button>
    {{ route }}
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
definePageMeta({
  layout: 'landinglayout' //layout to para kay taguro na landingpage ko
})
</script>

<style>

</style>