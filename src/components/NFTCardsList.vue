<script setup>
import {defineProps} from 'vue';
import NFTCard from '@/components/NFTCard.vue';

const props = defineProps({
    nftCards: Array
})
</script>

<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <NFTCard v-for="nftInfo in nftCards" :key="nftInfo.id" :nftInfo="nftInfo"/>
    </div>
</template>