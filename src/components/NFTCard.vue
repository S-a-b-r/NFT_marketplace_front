<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    nftInfo: Object
})
</script>

<template>
    <div class="rounded overflow-hidden" :class="props.nftInfo.custom_class??''">
        <div class="w-full h-[238px] bg-center bg-cover"
        :style="`background-image:url('src/assets/images/NFT/${props.nftInfo.imageUrl}.png')`">
        </div>
        <div class="p-5 pb-6 bg-gray">
            <div class="text-xl font-semibold">
                {{ props.nftInfo.title }}
            </div>
            <div class="flex mt-1">
                <img width="24" height="24" :src="`src/assets/images/avatars/${props.nftInfo.creator.avatarUrl}.png`"/>
                <div class="ml-3">{{ props.nftInfo.creator.name }}</div>
            </div>
            <div class="flex justify-between mt-6">
                <div class="flex flex-col gap-2 text-sm">
                    <div class=" text-gray-light">Price</div>
                    <div class="font-second">
                        {{ props.nftInfo.price }}
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-sm text-right">
                    <div class="text-gray-light">Highest Bid</div>
                    <div class="font-second">
                        {{ props.nftInfo.hightBid }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>