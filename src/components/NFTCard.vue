<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    nftInfo: Object
})
</script>

<template>
    <div>
        {{ props.nftInfo.title }}
    </div>
</template>