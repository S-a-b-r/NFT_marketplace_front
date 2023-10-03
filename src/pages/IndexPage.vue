<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSectionComponent from '@/components/FirstSection/FirstSectionComponent.vue';
import CollectionComponent from '@/components/TrendingCollection/CollectionComponent.vue';

const collections = [
    {
        id: 1,
        title: 'DSGN Animals',
        collectionName: 'animals',
        author: {
            avatarUrl: '',
            name: 'MrFox'
        },
        counter: '1025+'
    },
    {
        id: 2,
        title: 'Magic Mushrooms',
        collectionName: 'mushrooms',
        author: {
            avatarUrl: '',
            name: 'Shoroomie'
        },
        counter: '1025+'
    },
    {
        id: 3,
        title: 'Disco Machines',
        collectionName: 'robots',
        author: {
            avatarUrl: '',
            name: 'BeKind2Robots'
        },
        counter: '1025+'
    },
]
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <FirstSectionComponent></FirstSectionComponent>
    <section class="content_container">
        <div class="mb-10">
            <h2 class="second_title">Trending Collection</h2>
            <span>Checkout our weekly updated trending collection.</span>
        </div>
        <div class="flex justify-between">
            <!-- Как использовать v-if с v-for ???-->
            <CollectionComponent collectionName="animals" counter="1025+"></CollectionComponent>
            <CollectionComponent class="hidden md:grid" collectionName="mashrooms" counter="1025+"></CollectionComponent>
            <CollectionComponent class="hidden lg:grid" collectionName="robots" counter="1025+"></CollectionComponent>
        </div>
    </section>
</template>