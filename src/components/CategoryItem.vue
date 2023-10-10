<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    category: Object
})
</script>

<template>
    <router-link to="/categories" class="category_item_wrapper rounded bg-gray overflow-hidden">
        <div class=" w-full h-[142px] lg:h-[240px] bg-cover bg-center" 
            :style="`background-image:url('src/assets/images/categories/${props.category.bgUrl}.png')`">
            <div class="bg_blur w-full h-full flex align-middle justify-center">
                <img height="80" width="80" class="category_icon" :src="`src/assets/images/categories/icons/${props.category.iconUrl}.svg`" />
            </div>
        </div>
        <div class="p-5 font-semibold lg:text-xl">
            {{ props.category.title }}
        </div>
    </router-link>
</template>

<style>
.category_item_wrapper:hover .category_icon{
    transition: 0.2s;
    width: 130px;
}
.bg_blur{
    backdrop-filter: blur(5px);
}

</style>