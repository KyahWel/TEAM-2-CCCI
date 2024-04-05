<template>
  <div>
      <a-modal v-bind:visible="visible" @update:visible="$emit('update:visible', $event)">
        <a-avatar :size="56" :src="currentUser.image" />
      </a-modal>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      currentUser: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>