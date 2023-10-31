<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSection from '@/components/sections/FirstSection.vue';
import TrendingCollectionSection from '@/components/sections/TrendingCollectionSection.vue';
import TopCreatorsSection from '@/components/sections/TopCreatorsSection.vue';
import CategoriesSection from '@/components/sections/CategoriesSection.vue';
import DiscoverMoreSection from '@/components/sections/DiscoverMoreSection.vue';
import ActiveAuction from '@/components/sections/ActiveAuction.vue';
import HowItWorksSection from '../components/sections/HowItWorksSection.vue';
import JoinOurDigestSection from '../components/sections/JoinOurDigestSection.vue';

const activeAuctionInfo = {
    bgUrl : "src/assets/images/auction_bg.png",
    creator: {
        name: 'Shroomie',
        avatarUrl: '8'
    },
    title: 'Magic Mashrooms',
    endAuctionTime: {
        endAuctionHours: 59,
        endAuctionMinutes: 59,
        endAuctionSeconds: 59,
    }
}
</script>

<template>
    <HeaderComponent />
    <FirstSection />
    <TrendingCollectionSection />
    <TopCreatorsSection />
    <CategoriesSection />
    <DiscoverMoreSection />
    <ActiveAuction :activeAuction="activeAuctionInfo" />
    <HowItWorksSection />
    <JoinOurDigestSection />
</template>