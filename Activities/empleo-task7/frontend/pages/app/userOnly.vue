<template>

   <div class="flex flex-col items-center justify-center userView">
    <a-card  style="width: 1203px" class="">
            <div class="flex flex-col items-center justify-center">
                <p class="font-bold text-3xl"> Success starts now</p>
                <p class="text-xl">Welcome, Jairlyn Empleo!</p> 
            </div>

            <a-divider style="width: 1000px"/>

            <div class="flex items-center justify-center">
                <img class="w-44" :src="users.image">
                <div class="m-5">
                    <p class="font-semibold text-2xl">Work Experience</p>
                    <p class="mt-2 text-slate-500"><b>Company Name: </b> {{ users.company.name }}
                    </p>
                    <p class="mt-2 text-slate-500"><b>Company Position: </b> {{ users.company.title }}
                    </p>
                    <p class="mt-2 text-slate-500"><b>Designated Department: </b> {{ users.company.department }}
                    </p>
                </div>

                <a-progress class="p-5" type="circle" :percent="75" :format="percent => `${percent} Days`" />
                <a-progress class="p-5" type="circle" :percent="100" :format="() => 'Done'" />

                
            </div>


    </a-card>
    <a-row :gutter="[16,16]" class="mt-5">
        <a-col :span="32">
            <div :style="{ width: '800px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
            </div>
        </a-col>
        <a-col :span="32">
        <a-card class="w-96 h-full flex flex-col items-center h-80 overflow-y-scroll overflow-x-hidden">
            <p class="p-2">Upload your Files here: </p>
            <a-upload
                v-model:file-list="fileList"
                name="file"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers"
                @change="handleChange"
            >
                <a-button class="w-80 p-2 flex items-center justify-center">
                <upload-outlined></upload-outlined>
                Click to Upload
                </a-button>
                <template #itemRender="{ file, actions }">
                <a-space class="p-2">
                    <span :style="file.status === 'error' ? 'color: red' : ''" class="truncate">{{ file.name }}</span>
                    <a-button type="primary" shape="circle" :size="small" class="flex items-center justify-center">
                        <template #icon>
                        <DownloadOutlined />
                        </template>
                    </a-button>
                    
                    <a href="javascript:;" @click="actions.remove">
                    <a-button type="primary" danger shape="circle" :size="small" class="flex items-center justify-center ">
                        <CloseOutlined  />
                    </a-button>
                    </a>
                    
                </a-space>
                </template>
            </a-upload>
        </a-card>      

    </a-col>
    </a-row>

    <a-row :gutter="[16,16]" class="mt-5">
    <a-col :span="32">
        <a-card>
            <a-timeline>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item color="red">
                <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
                Technical testing 2015-09-01
                </a-timeline-item>
                <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Sent Application to Alorica 2024-01-30</a-timeline-item>
            </a-timeline>
        </a-card>
    </a-col>
        
    <a-col :span="32">
        <a-card title="Pending Applications" style="width :835px">
            <a-card title="Alorica">
            <template #extra>
                <a href="#">More</a>
            </template>
            Senior Developer
            </a-card>
            <a-card title="Inner card title" :style="{ marginTop: '16px' }">
            <template #extra>
                <a href="#">More</a>
            </template>
            Inner Card content
            </a-card>
        </a-card>
    </a-col>
 
    
    </a-row>

    <NuxtLink to="/">
    <a-float-button
        tooltip="Log Out"
        :style="{
        right: '24px',
        width: '50px',
        height: '50px',
        
        }"
        class="flex items-center justify-center"
    >
        <template #icon>
            <LogoutOutlined />
        </template>
    </a-float-button>
    </NuxtLink>
    
   
   </div>

</template>

<script lang="ts" setup>
//files download buton
import { DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');

//file upload
import { UploadOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

const fileList = ref<UploadProps['fileList']>([
  {
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  },
  {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  },
  {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  },
]);

const handleChange = ({ file, fileList }: UploadChangeParam) => {
  if (file.status !== 'uploading') {
    console.log(file, fileList);
  }
};
function handleClick(e: MouseEvent) {
  console.log(e, 'custom removeIcon event');
}

// Profile Fetch Data
const url = 'https://dummyjson.com/users/1'

const { data: users } = await useFetch(url)

// definePageMeta({
//     layout: 'header'
// })

  import { ClockCircleOutlined } from '@ant-design/icons-vue';
  </script>
  
  <style scoped>
.userView{
 background-image: url('/public/userui.png');
 background-size: cover;
}
  </style>
  