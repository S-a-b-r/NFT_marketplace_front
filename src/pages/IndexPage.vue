<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <section class="content_container">
            <div class="mb-5">
                <h1 class="title mb-3">Discover Digital Art & Collect NFTs</h1>
                <div>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
            </div>
            <div class="bg-gray rounded-[20px] mb-10">
                <img class="w-full" src="src/assets/images/image_first.png"/>
                <div class="p-5">
                    <h2 class="text-2xl mb-3">Space Walking</h2>
                    <div class="flex">
                        <img width="24" height="24" src="src/assets/images/avatars/20.png"/>
                        <span class="ml-3">Animakid</span>
                    </div>
                </div>
            </div>
            <ButtonComponent class="mb-10 w-full justify-center" :is-purple="true" icon-name="RocketLaunch">Get Started</ButtonComponent>
        </section>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ButtonComponent from '../components/UI/ButtonComponent.vue';


</script>

<style scoped>

</style>