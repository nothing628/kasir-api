<template>
  <div class="max-w-screen-xl mt-12 mb-7 mx-auto">
    <div class="mb-12 flex items-center justify-between">
      <h1 class="text-[#253D4E] text-5xl font-bold mb-[10px]">Ubah Produk</h1>
      <div class="flex">
        <button @click="backToProductList"
          class="py-2 px-[18px] border border-[#3BB77E] bg-white text-[#3BB77E] text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2 flex items-center"><i
            class="ri-arrow-go-back-line mr-1"></i> Kembali</button>
        <button @click="submitFormData"
          class="py-2 px-[18px] border border-[#3BB77E] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2 flex items-center">Simpan
          Produk</button>
      </div>
    </div>

    <FormProduct v-model="formData" />
  </div>
</template>

<script setup lang="ts">
import FormProduct from '../Components/FormProduct.vue';
import { getProduct, updateProduct } from '../Hook/UseProduct'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import get from 'lodash/get'

const props = defineProps<{
  id: number
}>()

const formData = ref<unknown>({})
const router = useRouter();
const backToProductList = () => {
  router.back();
}
const submitFormData = async () => {
  const form = formData.value;
  await updateProduct(props.id, {
    harga: get(form, 'price'),
    productName: get(form, 'productName'),
    productCategory: get(form, 'productCategory'),
  })

  backToProductList()
}

const getProductInfo = async (id: number) => {
  const product: any = await getProduct(id)

  formData.value = {
    productName: product.product_name,
    productCategory: product.product_category,
    price: product.harga
  }
}

onMounted(() => {
  getProductInfo(props.id)
})
</script>
