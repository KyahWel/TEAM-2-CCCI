<template>
      <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center w-full overflow-hidden">
        <img src="/public/manSideViewPointingleft.webp" class="relative z-50 mt-56 animate__animated animate__slideInRight" style="width: 41%; margin-left:51%;"/>
    <a-card class="card absolute border-8 border-white animate__animated animate__slideInDown">
        <p class="text-2xl font-bold italic text-center m-5"> Applicant Registration Form</p>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      style="max-width: 600px"
    >
    <div class="flex w-full">
      <a-form-item label="First Name">
        <a-input />
      </a-form-item>
      <a-form-item label="Last Name">
        <a-input />
      </a-form-item>
    </div>

      <a-form-item label="Birthdate">
        <a-date-picker class="w-full"/>
      </a-form-item>
      <a-form-item label="Gender">
        <a-radio-group v-model:value="radioValue">
          <a-radio value="male">Male</a-radio>
          <a-radio value="female">Female</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="flex w-full">
      <a-form-item label="Current City">
        <a-input />
      </a-form-item>
      <a-form-item label="Current State">
        <a-input />
      </a-form-item>
      </div>
      <a-form-item label="Username">
        <a-input />
      </a-form-item>

      <div class="flex w-full">
      <a-form-item label="Password">
        <a-input-password />
      </a-form-item>
      <a-form-item label="Confirm Password">
        <a-input-password />
      </a-form-item>
      </div>
      
      <a-form-item label="Upload Display Image">
        <a-upload action="/upload.do" list-type="picture-card">
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
      <NuxtLink to="/"><a-button type="primary" class="w-full">Register Now</a-button></NuxtLink>
    </a-form>
    <div class="flex mt-3">
        <p>Already have an account?</p> 
        <NuxtLink to="/app/applicantLogin" class="font-bold ml-2">Login Account</NuxtLink>
    </div>
   
</a-card>
</div>
  </template>
  <script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import type { TreeSelectProps, CascaderProps } from 'ant-design-vue';
  
  const labelCol = { style: { width: '150px' } };
  const wrapperCol = { span: 14 };
  const radioValue = ref('apple');
  </script>
