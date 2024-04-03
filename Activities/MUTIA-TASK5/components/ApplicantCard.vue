<template>
  <!-- Modal to display user information -->
  <a-modal
    v-bind:visible="visible"
    :title="title"
    :footer="null"
    @update:visible="$emit('update:visible', $event)">
    <template #title>
      <!-- Modal title  -->
      <div :style="{ marginTop: '12px', fontWeight:'bold' }">
        User Information
      </div>
      <a-divider type="horizontal" style="border-color: #616364; border-width: 1px;"></a-divider>
    </template>

    <!-- Display user information with avatar and details -->
    <div :style="{ display: 'flex', flexDirection: 'row' }">
      <a-col :span="8" style="display: flex; justify-content: center; align-items: center;">
        <a-avatar :size="128" :src="selectedUser.image" />
      </a-col>
      <a-col :span="16" :style="{ marginLeft: '15px' }">
        <p :style="{ textAlign: 'left', marginTop: '8px', fontWeight: 'bold' }">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</p>
        <p :style="{ display: 'flex', textAlign: 'left' }"><img src="/assets/images/gender.png" :style="{ marginRight:'4px', height:'18px', marginTop:'2px' }">{{ selectedUser.gender }}</p>
        <p :style="{ display: 'flex', textAlign: 'left' }"><img src="/assets/images/phone.png" :style="{ marginRight:'4px', height:'18px', marginTop:'2px' }"> {{ selectedUser.phone }}</p>
        <p :style="{ display: 'flex', textAlign: 'left' }"><img src="/assets/images/bday.png" :style="{ marginRight:'4px', height:'18px', marginTop:'2px' }">{{ selectedUser.birthDate }}  |  {{ selectedUser.age }} yrs old</p>
        <p :style="{ display: 'flex', textAlign: 'left' }"><img src="/assets/images/email.png" :style="{ marginRight:'4px', height:'18px', marginTop:'2px' }">{{ selectedUser.email }}</p>
        <p :style="{ display: 'flex', textAlign: 'left' }"><img src="/assets/images/address.png" :style="{ marginRight:'4px', height:'18px', marginTop:'2px' }">{{ selectedUser.address.address }}, {{ selectedUser.address.city }}</p>
      </a-col>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: 'ApplicantCard',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    selectedUser: {
      type: Object,
      required: true
    }
  }
}
</script>