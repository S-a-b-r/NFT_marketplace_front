<template>
    <button class="px-8 py-4 rounded-[20px] flex items-center" :class="color">
        <img v-if="iconName" class="mr-3" :src="'/src/assets/images/icons/'+iconName+'.svg'"
            width="20" height="20"/>
        <slot></slot>
    </button>
</template>

<script setup>
    import {defineProps, computed} from 'vue';

    const props = defineProps({
        iconName: String,
        isPurple: Boolean
    })

    const iconName = props.iconName;
    const color = computed(() => props.isPurple ? 'bg-purple':'bg-none border border-solid border-purple')
</script>

<script>
 export default {
    name: 'ButtonComponent'
 }
</script>

<style scoped>

</style>