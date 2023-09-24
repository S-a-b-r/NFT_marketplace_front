<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <header class="w-full flex py-4 px-8 items-center justify-between">
    <div class="font-second flex items-center">
      <img src="../assets/images/logo.svg">
      <span class="ml-2">NFT Marketplace</span>
    </div>
    <div>
      <img class="lg:hidden" src="../assets/images/icons/List.svg"/>
      <ul class="hidden lg:flex">
        <li>Marketplace</li>
        <li>Rankings</li>
        <li>Connect a wallet</li>
      </ul>
    </div>

  </header>
</template>

<style scoped>
</style>
