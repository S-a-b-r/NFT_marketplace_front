<template>
    <div class="grid grid-cols-3 grid-rows-[20fr_6fr] gap-4 max-w-[20.625rem]">
        <div class="row-start-1 col-start-1 col-end-4">
            <img :src="`/src/assets/images/trending_collections/${collectionName}1.png`" :alt="collectionName +' collection first image'">
        </div>
        <div class="row-start-2 col-span-1">
            <img :src="`/src/assets/images/trending_collections/${collectionName}2.png`" :alt="collectionName +' collection second image'">
        </div>
        <div class="row-start-2 col-span-1">
            <img :src="`/src/assets/images/trending_collections/${collectionName}3.png`" :alt="collectionName +' collection third image'">
        </div>
        <div class="row-start-2 col-span-1 bg-purple rounded-[1.25rem] flex items-center justify-center">
            <span>123</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    collectionName: String,
})
</script>

<style scoped>

</style>