<script setup>
import {defineProps} from 'vue';
import CreatorItem from '@/components/CreatorItem.vue';

const props = defineProps({
    creators: Array
})
</script>

<template>
    <div class="flex">
        <CreatorItem v-for="user in props.creators" 
            :key="user.id" :user="user"/>
    </div>
</template>