<script setup>
import NFTCardsList from '@/components/NFTCardsList.vue';
const nftCards = [
    {
        id:1,
        title: 'Distant Galaxy',
        creator: {
            avatarUrl: '1',
            name: 'MoonDancer'
        },
        imageUrl: '1',
        price: '1.63 ETH',
        hightBid: '0.33 wETH'
    }
];
</script>

<template>
    <section class="content_container">
        <div>
            <h2 class="second_title">Discover More NFTs</h2>
            <div>Explore new trending NFTs</div>
        </div>
        <NFTCardsList :nftCards="nftCards" />
    </section>
</template>