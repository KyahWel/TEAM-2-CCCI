<template>
    <div>
        <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" class="flex flex-col items-center justify-center h-96"/>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { Dayjs } from 'dayjs';

    const value = ref<Dayjs>();
    const onPanelChange = (value: Dayjs, mode: string) => {
    console.log(value, mode);
    };
</script>

<style>

</style>