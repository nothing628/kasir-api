<template>
  <div class="max-w-screen-xl mt-12 mb-7 mx-auto">
    <div class="mb-12">
      <h1 class="text-[#253D4E] text-5xl font-bold mb-[10px]">Products</h1>
      <h6 class="text-[#7E7E7E] text-base font-bold">Ada total <span class="text-[#3BB77E]">5</span> produk di master
        data</h6>
    </div>

    <div class="mb-4 flex justify-end">
      <button @click="goToCreateProductPage"
        class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040]">Tambah
        Produk</button>
    </div>
    <TableProduct></TableProduct>
    <TablePagination></TablePagination>
  </div>
</template>

<script setup lang="ts">
import TableProduct from '../Components/TableProduct.vue';
import TablePagination from '../Components/TablePagination.vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const goToCreateProductPage = () => {
  router.push({ name: 'product.new' })
}
</script>
