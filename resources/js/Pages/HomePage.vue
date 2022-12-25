<template>
  <div class="max-w-screen-xl mt-12 mb-7 mx-auto">
    <div class="mb-12">
      <h1 class="text-[#253D4E] text-5xl font-bold mb-[10px]">Products</h1>
      <h6 class="text-[#7E7E7E] text-base font-bold">Ada total <span class="text-[#3BB77E]">5</span> produk di master
        data</h6>
    </div>

    <TableProduct></TableProduct>
    <TablePagination></TablePagination>
  </div>
</template>

<script setup lang="ts">
import TableProduct from '../Components/TableProduct.vue';
import TablePagination from '../Components/TablePagination.vue';
</script>
