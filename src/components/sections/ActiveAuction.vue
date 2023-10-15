<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    bgUrl:String,
})
</script>

<template>
    <div class="h-screen" :style="`background:linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%), center / cover no-repeat url(${props.bgUrl});`">
        <div class="content_container">
            Hello
        </div>
    </div>
</template>