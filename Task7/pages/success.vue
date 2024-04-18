<template>
    <a-result
      status="success"
      title="Account Created Successfully"
      sub-title="Ugaliing Magdasal at magtiwala sa buong may kapal"
    >
      <template #extra>
        <a-button key="console" type="primary" @click="$router.push('/')">Go Sign-In</a-button>
        {{ route }}
      </template>
    </a-result>
  </template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landinglayout' //layout to para kay taguro na landingpage ko
})

const router = useRouter()

</script>