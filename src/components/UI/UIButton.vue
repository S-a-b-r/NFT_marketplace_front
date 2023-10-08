<script>
 export default {
    name: 'UIButton'
 }
</script>

<script setup>
import {defineProps, computed} from 'vue';

const props = defineProps({
    iconName: String,
    isPurple: {
        type: Boolean,
        default: false
    }
})

const btnClass = computed(() => props.isPurple ? 'bg-purple':'bg-none border border-solid border-purple')
</script>

<template>
    <button class="px-8 py-4 rounded-[20px] flex items-center" :class="btnClass">
        <img v-if="props.iconName" class="mr-3" :src="'/src/assets/images/icons/'+iconName+'.svg'"
            width="20" height="20"/>
        <slot></slot>
    </button>
</template>