<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <FirstSectionComponent></FirstSectionComponent>
        <section class="content_container">
            <div class="mb-10">
                <h2 class="second_title">Trending Collection</h2>
                <span>Checkout our weekly updated trending collection.</span>
            </div>
            <CollectionComponent :collectionName="'animals'"></CollectionComponent>
        </section>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSectionComponent from '@/components/FirstSection/FirstSectionComponent.vue';
import CollectionComponent from '@/components/TrendingCollection/CollectionComponent.vue';
</script>

<style scoped>

</style>