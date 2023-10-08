<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    category: Object
})
</script>

<template>
    <div class="rounded bg-gray" >
        <div class="w-full" :class="`bg-[url('src/assets/images/categories/${props.category.bgUrl}.png')]`">
            <img height="80" width="80" :src="`src/assets/images/categories/icons/${props.category.iconUrl}.svg`" />
        </div>
        {{ props.category.title }}
    </div>
</template>