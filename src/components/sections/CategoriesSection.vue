<script setup>
import CategoriesList from '@/components/CategoriesList.vue';

const categories = [
    {
        id: 1,
        iconUrl: 'PaintBrush',
        bgUrl: '1',
        title: 'Art'
    },
    {
        id: 2,
        iconUrl: 'Swatches',
        bgUrl: '2',
        title: 'Collectibles'
    },
]
</script>

<template>
    <div class="content_container">
        <h2 class="second_title mb-10 lg:mb-[3.75rem]">Browse Categories</h2>
        <CategoriesList :categories="categories"/>
    </div>
</template>