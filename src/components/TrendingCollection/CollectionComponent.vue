<script setup>
import {defineProps} from 'vue';

defineProps({
    collectionName: String,
    counter: String,
})
</script>

<template>
    <div>
        <div class="grid grid-cols-3 grid-rows-[20fr_6fr] gap-4 max-w-[20.625rem]">
            <div class="row-start-1 col-start-1 col-end-4">
                <img :src="`/src/assets/images/trending_collections/${collectionName}1.png`" 
                    :alt="collectionName +' collection first image'">
            </div>
            <div v-for="i in [2,3]" :key="i" class="row-start-2 col-span-1">
                <img :src="`/src/assets/images/trending_collections/${collectionName}${i}.png`" 
                    :alt="`${collectionName}${i} collection image`">
            </div>
            <div class="row-start-2 col-span-1 bg-purple rounded-[1.25rem] flex items-center justify-center">
                <span>{{ counter }}</span>
            </div>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <h3 class="text-xl">DSGN Animals</h3>
            <div>
                <img src="">
                <span>MrFox</span>
            </div>
        </div>
    </div>
</template>