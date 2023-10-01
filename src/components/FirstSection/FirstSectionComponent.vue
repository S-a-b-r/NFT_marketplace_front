<template>
    <section class="content_container md:grid md:grid-rows-2 md:grid-cols-2 md:gap-x-8">
        <div class="mb-5 md:row-start-1 md:row-end-2 md:col-span-1">
            <h1 class="title mb-3 md:mb-5">Discover Digital Art & Collect NFTs</h1>
            <div class="lg:text-xl">NFT marketplace UI created with Anima for Figma. Collect, 
                buy and sell art from more than 20k NFT artists.
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
        <div class="md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-2">
            <ButtonComponent class="mb-10 w-full justify-center md:w-max md:px-12 md:mb-5" 
                :is-purple="true" 
                :icon-name="'RocketLaunch'">
                    Get Started
            </ButtonComponent>
            <div class="flex justify-between lg:w-11/12">
                <StatsComponent :count="'240k+'">Total Sale</StatsComponent>
                <StatsComponent :count="'100k+'">Auctions</StatsComponent>
                <StatsComponent :count="'240k+'">Artists</StatsComponent>
            </div>
        </div>  
    </section>
</template>

<script setup>
import StatsComponent from './StatsComponent.vue';
</script>

<style scoped>

</style>