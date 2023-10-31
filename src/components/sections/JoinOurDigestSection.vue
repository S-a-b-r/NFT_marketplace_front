<template>
    <div class="content_container flex flex-col gap-[30px]
            md:bg-gray md:flex-row md:rounded lg:gap-[80px]">
        <div id="space-bg" class="w-[315px] h-[255px] rounded-[20px] self-center md:w-[300px] md:h-[280px] lg:w-1/2 lg:h-[310px]"></div>
        <div class="md:self-center lg:w-1/2">
            <div class="mb-[40px]">
                <h2 class="second_title mb-3">Join Our Weekly Degist</h2>
                <p class="lg:text-xl">Get exclusive promotions & updates straight to your inbox</p>
            </div>
            <div class="flex flex-col gap-4 md:flex-row md:gap-0">
                <input class="rounded-[1.25rem] w-full px-5 py-4 text-black md:rounded-r-none" placeholder="Enter Your Email"/>
                <div class="md:bg-white md:rounded-r-full">
                    <UIButton class="w-full justify-center" iconName="Mail" isPurple>Subscribe</UIButton>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
#space-bg{
    background-image: url("/src/assets/images/space.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>