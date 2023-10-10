<script setup>
import {defineProps} from 'vue';
import NFTCard from '@/components/NFTCard.vue';

const props = defineProps({
    nftCards: Array
})
</script>

<template>
    <div>
        <NFTCard v-for="nftInfo in nftCards" :key="nftInfo.id" :nftInfo="nftInfo"/>
    </div>
</template>