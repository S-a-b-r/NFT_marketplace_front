<script setup>
import StatsComponent from '@/components/StatsComponent.vue';

const statsItems = [
    {id:1, count: '240k+', title: 'Total Sale'},
    {id:2, count: '100k+', title: 'Auctions'},
    {id:3, count: '240k+', title: 'Artists'}
]
</script>

<template>
    <section class="content_container 
        md:grid md:grid-rows-[138px_66px_60px_57px] md:grid-cols-2 md:gap-y-[20px] md:gap-x-[30px]
        lg:grid-rows-[347px_60px_77px] lg:gap-y-[30px]">
        <div class="mb-5 md:row-start-1 md:row-end-3 lg:row-end-2">
            <h1 class="title mb-3 md:mb-5">Discover Digital Art & Collect NFTs</h1>
            <div class="lg:text-xl lg:leading-[2.2rem]">NFT Marketplace UI Created With Anima For Figma. Collect, 
                Buy And Sell Art From More Than 20k NFT Artists.
            </div>
        </div>
        <div class="md:col-start-2 md:row-start-1 md:row-end-4">
            <div class="bg-gray rounded-[20px] mb-10 ">
                <img class="w-full" src="src/assets/images/image_first.png"/>
                <div class="p-5">
                    <h2 class="text-xl mb-3">Space Walking</h2>
                    <div class="flex">
                        <img width="24" height="24" src="src/assets/images/avatars/20.png"/>
                        <span class="ml-3">Animakid</span>
                    </div>
                </div> 
            </div>
        </div>
        <div class="md:row-span-1">
            <UIButton class="mb-10 w-full justify-center md:w-max md:px-12 md:mb-5" 
                :is-purple="true" 
                :icon-name="'RocketLaunch'">
                    Get Started
            </UIButton>
        </div>
        <div class="md:row-span-1">
            <div class="flex justify-between lg:w-11/12">
                <StatsComponent v-for="statsItem in statsItems" :key="statsItem.id" :count="statsItem.count">Total Sale</StatsComponent>
            </div>
        </div>  
    </section>
</template>