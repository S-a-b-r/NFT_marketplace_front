<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    helpCardInfo: Object,
})

</script>

<template>
    <div class="w-full bg-gray flex justify-between rounded p-5
            md:flex-col">
        <div class="w-5/12 self-center md:w-full md:mb-5">
            <img class="w-[100px] h-[100px] md:w-[160px] md:h-[160px] md:m-auto lg:h-[250px] lg:w-[250px]" :src="props.helpCardInfo.imgUrl" />
        </div>
        <div class="w-7/12 md:w-full md:text-center">
            <h3 class="font-semibold mb-2 lg:text-xl">{{ props.helpCardInfo.title }}</h3>
            <div class="text-sm leading-5 lg:text-base">{{ props.helpCardInfo.description }}</div>
        </div>
    </div>
</template>
