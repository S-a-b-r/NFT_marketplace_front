<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    user: Object
})
</script>

<template>
    <div class="p-5 bg-gray w-full rounded flex flex-nowrap gap-5">
        <div class="relative">
            <div class="absolute top-[-10px] left-[-10px] bg-black rounded-full 
                py-1 w-[1.875rem] text-center z-10 font-second">
                {{ props.user.id }}
            </div>
            <img class="w-[3.75rem] h-[3.75rem]" :src="`/src/assets/images/avatars/${props.user.avatarUrl}.png`">
        </div>
        <div class="flex flex-col justify-between">
            <h5 class="text-xl font-semibold">
                {{ props.user.name }}
            </h5>
            <div>
                <span class="text-gray-light">Total Sales:</span>
                <span class="font-second ml-2">{{ props.user.totalSales }}</span>
            </div>
        </div>
    </div>
</template>