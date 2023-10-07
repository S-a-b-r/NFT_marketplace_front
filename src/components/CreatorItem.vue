<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    user: Object
})
</script>

<template>
    <div class="p-5">
        {{ props.user.name }}
    </div>
</template>