<template>
  <div class="max-w-screen-xl mt-12 mb-7 mx-auto">
    <div class="mb-12">
      <h1 class="text-[#253D4E] text-5xl font-bold mb-[10px]">Master Data Produk</h1>
      <h6 class="text-[#7E7E7E] text-base font-bold">Ada total <span class="text-[#3BB77E]">5</span> produk di master
        data</h6>
    </div>

    <div class="mb-4 flex justify-end">
      <button @click="goToCreateProductPage"
        class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040]">Tambah
        Produk</button>
    </div>
    <TableProduct :items="products" @delete="onRowDelete"></TableProduct>
    <TablePagination></TablePagination>

    <DeleteConfirmation v-model="isDeleteOpen" @ok="onDeleteProduct" />
  </div>
</template>

<script setup lang="ts">
import TableProduct from '../Components/TableProduct.vue';
import TablePagination from '../Components/TablePagination.vue';
import DeleteConfirmation from '../Components/DeleteConfirmation.vue';
import { useProductList, deleteProduct } from '../Hook/UseProduct'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter();
const isDeleteOpen = ref(false)
const tmpProductId = ref<number | null>(null)
const goToCreateProductPage = () => {
  router.push({ name: 'product.new' })
}

const productList = useProductList();
const { products } = productList

const refreshProduct = () => {
  productList.loadProduct()
  tmpProductId.value = null;
}
const onRowDelete = (item: any) => {
  tmpProductId.value = item.id
  isDeleteOpen.value = true;
}

const onDeleteProduct = () => {
  const productId = tmpProductId.value;

  if (productId) {
    deleteProduct(productId).then(refreshProduct)
  }
}

onMounted(refreshProduct)
</script>
