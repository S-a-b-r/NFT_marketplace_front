<script setup>
import HelpCard from "@/components/HelpCard.vue";

const imagesPath = 'src/assets/images/info_card_icons';

const helpCards = [
    {
        imgUrl: imagesPath + 'HelpIcon1.png',
        title: 'Setup Your wallet',
        description: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
    }
]
</script>

<template>
    <section class="content_container">
        <h2 class="second_title">How It Works</h2>
        <div>Find out how to get started</div>
        
        <HelpCard v-for="helpCard in helpCards" :helpCardInfo="helpCard" :key="helpCard.title" />
    </section>
</template>