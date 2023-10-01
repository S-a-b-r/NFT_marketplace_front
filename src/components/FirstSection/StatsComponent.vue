<template>
    <div class="flex flex-col">
        <span class="font-semibold text-xl lg:text-2xl">{{count}}</span>
        <slot class="lg:text-[1.5rem]"></slot>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    count: String,
})

</script>

<style scoped>

</style>