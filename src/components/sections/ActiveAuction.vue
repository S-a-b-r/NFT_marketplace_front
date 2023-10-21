<script setup>
import {defineProps, ref} from 'vue';
import TimerCard from '../TimerCard.vue';

const props = defineProps({
    activeAuction: Object,
})
</script>

<template>
    <div class="h-screen flex" 
        :style="`background:linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%),
            center / cover no-repeat url(${props.activeAuction.bgUrl});`">
        <div class="content_container align-middle m-auto grid gap-7">
            <div class="bg-gray rounded w-max px-5 py-2 flex gap-3">
                <img width="24" height="24" :src="`src/assets/images/avatars/${props.activeAuction.creator.avatarUrl}.png`" />
                {{ props.activeAuction.creator.name }}
            </div>
            <div class="text-3xl font-semibold text-white">
                {{ props.activeAuction.title }}
            </div>
            <timer-card :endAuctionTime="props.activeAuction.endAuctionTime"></timer-card>
            <div>
                <UIButton class="w-full justify-center" iconName="Eye-purple" isWhite>See NFT</UIButton>
            </div>
        </div>
    </div>
</template>

<style>
.bg-blur{
    background: rgba(59, 59, 59, 0.50);
    backdrop-filter: blur(5px);
}
</style>