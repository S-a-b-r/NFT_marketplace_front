<script setup>
import {defineProps, ref} from 'vue';

const props = defineProps({
    activeAuction: Object,
})

const hours = ref(props.activeAuction.endAuctionHours);
const minutes = ref(props.activeAuction.endAuctionMinutes);
const seconds = ref(props.activeAuction.endAuctionSeconds);
</script>

<template>
    <div class="h-screen" 
        :style="`background:linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%),
            center / cover no-repeat url(${props.activeAuction.bgUrl});`">
        <div class="content_container pt-[7.5rem] grid gap-7">
            <div class="bg-gray rounded w-max px-5 py-2 flex gap-3">
                <img width="24" height="24" :src="`src/assets/images/avatars/${props.activeAuction.creator.avatarUrl}.png`" />
                {{ props.activeAuction.creator.name }}
            </div>
            <div class="text-3xl font-semibold text-white">
                {{ props.activeAuction.title }}
            </div>
            <div class="bg-blur p-7 rounded text-sm font-second">
                <div class="mb-2">Auction ends in:</div>
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <div class="text-3xl font-semibold">{{ hours }}</div>
                        <div>Hours</div>
                    </div>
                    <div class="text-3xl">
                        :
                    </div>
                    <div class="flex flex-col">
                        <div class="text-3xl font-semibold">{{ minutes }}</div>
                        <div>Minutes</div>
                    </div>
                    <div class="text-3xl">
                        :
                    </div>
                    <div class="flex flex-col">
                        <div class="text-3xl font-semibold">{{ seconds }}</div>
                        <div>Seconds</div>
                    </div>
                </div>
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