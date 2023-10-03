<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSectionComponent from '@/components/FirstSection/FirstSectionComponent.vue';
import CollectionComponent from '@/components/TrendingCollection/CollectionComponent.vue';
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <FirstSectionComponent></FirstSectionComponent>
    <section class="content_container">
        <div class="mb-10">
            <h2 class="second_title">Trending Collection</h2>
            <span>Checkout our weekly updated trending collection.</span>
        </div>
        <CollectionComponent collectionName="animals" counter="1025+"></CollectionComponent>
    </section>
</template>