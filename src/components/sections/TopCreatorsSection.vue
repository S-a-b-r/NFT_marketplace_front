<script setup>
import CreatorsList from '@/components/CreatorsList.vue';
const creators = [
    {
        id: 1,
        avatarUrl: '20',
        name: 'Keepitreal',
        totalSales: '34.53 ETH',
    },
    {
        id: 2,
        avatarUrl: '1',
        name: 'DigiLab',
        totalSales: '32.13 ETH',
    },
    {
        id: 3,
        avatarUrl: '2',
        name: 'GravityOne',
        totalSales: '28.93 ETH',
    },
    {
        id: 4,
        avatarUrl: '3',
        name: 'Juanie',
        totalSales: '25.30 ETH',
    },
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