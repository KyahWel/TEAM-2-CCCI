<template>
   <!-- Search and Radio Buttons Section -->
<div class="p-8">
    <div class="pb-4"style="display: flex; align-items: center;">
      <a-input-search
      v-model:value="value"
      placeholder="input search text" 
      style="width: 500px"
      @search="onSearch"/>
   <!-- Radio Buttons for View Switching -->
        <div style="margin-left: auto;">
            <a-space direction="vertical">
                <a-radio-group v-model:value="size">
                    <!-- Navigate to Applicants View -->
                    <a-radio-button value="small" @click="router.push('/app/applicants')"><AppstoreOutlined /></a-radio-button>
                    <!-- Navigate to Table View -->
                    <a-radio-button value="small" @click="router.push('/app/Table')"><BarsOutlined /></a-radio-button>
                </a-radio-group>
            </a-space>
        </div>
    </div>
</div>
<!-- User Table Section -->
<div class="pb-8 flex justify-center" style="margin-top: -20px;"> 
    <a-card class="bg-gradient-to-l from-lime-100 to-teal-200 shadow-md" bordered="false">
        <a-table
        :dataSource="data.users"
        :columns="columns"
        :loading="pending"
        style="width:1600px"/>
    </a-card>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const columns = [
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
             title: 'Gender',
             dataIndex: 'gender',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Contact Number',
            dataIndex: 'phone',
            key: 'phone',
          }
        ]

    const { data, pending, error, status, refresh } = await useFetch('https://dummyjson.com/users')
</script>