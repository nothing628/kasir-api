<template>
  <div>
    <SideMenu></SideMenu>
    <div class="ml-[300px] bg-[#f8f9fa] relative">
      <section class="min-h-[calc(100vh-110px)] py-[30px] px-[3%] mx-auto bg-[#f8f9fa]">
        <RouterView></RouterView>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SideMenu from './Components/SideMenu.vue';
</script>
