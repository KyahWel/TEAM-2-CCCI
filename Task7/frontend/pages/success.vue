import { SignalFilled } from '../.nuxt/components';
<template>
    <a-result
    class="bg-amber-400 h-60 rounded-3xl a-result"
      status="success"
      title="Account Created Successfully"
      sub-title="Ugaliing Magdasal at magtiwala sa buong may kapal"
    >
      <template #extra>
        <a-button class="bg-cyan-200 text-black" key="console" type="primary" @click="$router.push('/')">Go Sign-In</a-button>
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

<style>



.h-60 {
    margin-top: 12rem;

    height: 24rem/* 240px */;
}
</style>