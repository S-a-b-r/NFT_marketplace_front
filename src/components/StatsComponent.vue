<template>
    <div class="flex flex-col">
        <span class="font-semibold text-xl">{{count}}</span>
        <slot></slot>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    count: String,
    title: String,
})

</script>

<style scoped>

</style>