<template>

    <div class="bg-[url('/landingbgpic.png')] bg-cover landingpage h-screen flex items-center justify-center w-full p-44 flex-col">
           
        <div class="bg-white w-full p-28 rounded-lg flex flex-col items-center justify-center" style="width: 850px;">
            
            <a-form
                style="max-width: 900px"
            >

                <p class="font-semibold text-2xl p-5">A recovery link will be sent to your email</p>
                <br>
                    <a-form-item label="Email" class=" justify-center">
                    <a-input />
                    </a-form-item>
                <br>
                <br>
                <br>
                <NuxtLink to="/" class="font-thin text-base p-8" >back</NuxtLink>

                <a-button type="primary" @click="openNotification('top')">
                Submit
                </a-button>
            </a-form>
        </div>
    

  </div>
  </template>

  <script lang="ts" setup>

        import { notification } from 'ant-design-vue';
        import type { NotificationPlacement } from 'ant-design-vue';
        const openNotification = (placement: NotificationPlacement) => {
        notification.open({
            message: `SUCCESSFUL!`,
            description:
            'A recovery link has been successfully sent to your email, please check and follow the attached guidelines',
            placement,
            duration: 2,
        });
        };

        import { ref, reactive } from 'vue';
  
        import type { TreeSelectProps, CascaderProps } from 'ant-design-vue';

        const componentDisabled = ref(true);
        const labelCol = { style: { width: '150px' } };
        const wrapperCol = { span: 14 };
        const radioValue = ref('apple');
        const treeData = reactive<TreeSelectProps['treeData']>([
        { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
        ]);
        const options = reactive<CascaderProps['options']>([
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
            },
            ],
        },
        ]);
        const checked = ref(false);
  </script>

  
  <style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  </style>
  