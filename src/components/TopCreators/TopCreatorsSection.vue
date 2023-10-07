<script setup>
import CreatorsList from '@/components/TopCreators/CreatorsList.vue';
const creators = [
    {
        id: 1,
        avatarUrl: '1',
        name: 'Keepitreal',
        totalSales: '34.53ETH',
    }
]
</script>

<template>
    <section class="content_container">
        <h2 class="second_title">Top Creators</h2>
        <div class="mt-2">
            Checkout Top Rated Creators on the NFT Marketplace
        </div>
        <CreatorsList class="mt-10" :creators="creators" />
    </section>
</template>