<template>
  <div class="max-w-screen-xl mt-12 mb-7 mx-auto">
    <div class="mb-12 flex items-center justify-between">
      <h1 class="text-[#253D4E] text-5xl font-bold mb-[10px]">Create Product</h1>
      <div>
        <button
          class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2">Save
          Product</button>
      </div>
    </div>

    <FormProduct />
  </div>
</template>

<script setup lang="ts">
import FormProduct from '../Components/FormProduct.vue';
</script>
