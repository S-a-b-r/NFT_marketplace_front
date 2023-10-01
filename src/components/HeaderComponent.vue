<script setup>
</script>

<template>
  <header class="container flex py-4 px-[1.88rem] md:px-[3.12rem] items-center justify-between">
    <div class="font-second flex items-center">
      <img src="../assets/images/logo.svg">
      <span class="ml-2 lg:text-lg">NFT Marketplace</span>
    </div>
    <div>
      <img class="lg:hidden" 
           src="../assets/images/icons/List.svg">
      <ul class="hidden lg:flex h-full items-center">
        <li class="px-5 mr-2"><router-link to="/">Marketplace</router-link></li>
        <li class="px-5 mr-2"><router-link to="/">Rankings</router-link></li> 
        <li class="px-5 mr-2"><router-link to="/">Connect a wallet</router-link></li>
        <li class="px-5 mr-2">
          <ButtonComponent :iconName="'User'" :isPurple="true">Sign Up</ButtonComponent>
        </li>
      </ul>
    </div>

  </header>
</template>

<style scoped>
</style>
