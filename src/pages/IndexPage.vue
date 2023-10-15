<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSection from '@/components/sections/FirstSection.vue';
import TrendingCollectionSection from '@/components/sections/TrendingCollectionSection.vue';
import TopCreatorsSection from '@/components/sections/TopCreatorsSection.vue';
import CategoriesSection from '@/components/sections/CategoriesSection.vue';
import DiscoverMoreSection from '@/components/sections/DiscoverMoreSection.vue';
import ActiveAuction from '@/components/sections/ActiveAuction.vue';

const activeAuctionInfo = {
    bgUrl : "src/assets/images/auction_bg.png",
}
</script>

<template>
    <HeaderComponent />
    <FirstSection />
    <TrendingCollectionSection />
    <TopCreatorsSection />
    <CategoriesSection />
    <DiscoverMoreSection />
    <ActiveAuction bgUrl="src/assets/images/auction_bg.png" />
</template>