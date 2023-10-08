<script setup>
import {defineProps} from 'vue';
import CategoryItem from '@/components/CategoryItem.vue'

defineProps({
    categories: Array
})
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-4 gap-5">
        <CategoryItem v-for="category in categories" 
            :key="category.id" :category="category"/>
    </div>
</template>