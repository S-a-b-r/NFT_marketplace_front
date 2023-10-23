<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    helpCardInfo: Object,
})

</script>

<template>
    <div class="w-full bg-gray flex justify-between">
        <div>
            <img :src="props.helpCardInfo.imgUrl" />
        </div>
        <div>
            <h3 class="font-semibold">{{ props.helpCardInfo.title }}</h3>
            <div class="text-sm">{{ props.helpCardInfo.description }}</div>
        </div>
    </div>
</template>
