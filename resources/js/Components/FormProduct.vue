<template>
  <div class="border border-[#eee] bg-white flex flex-col relative rounded-[10px] overflow-hidden mb-6">
    <div class="border-b border-b-[rgba(222,226,230,.7)] bg-white p-5 mb-0 rounded-t-[4px]">
      <h4 class="text-[#495057] text-lg font-bold">Product Data</h4>
    </div>

    <div class="flex-auto p-5">
      <form>
        <div class="mb-6">
          <label class="text-[13px] mb-1">Nama Produk</label>
          <input :value="productName" @change="(e: any) => emits('update:productName', e.target.value)"
            class="text-[#4f5d77] text-[13px] w-full rounded-[4px] h-[45px] border-[2px] border-[#f4f5f9] bg-[#f4f5f9] pl-5 py-2 pr-3 outline-0 hover:bg-transparent"
            placeholder="Tulis nama produk disini" type="text" />
        </div>

        <div class="mb-6">
          <label class="text-[13px] mb-1">Kategori Produk</label>
          <input :value="productCategory" @change="(e: any) => emits('update:productCategory', e.target.value)"
            class="text-[#4f5d77] text-[13px] w-full rounded-[4px] h-[45px] border-[2px] border-[#f4f5f9] bg-[#f4f5f9] pl-5 py-2 pr-3 outline-0 hover:bg-transparent"
            placeholder="Tulis kategori produk disini" type="text" />
        </div>

        <div class="mb-6">
          <label class="text-[13px] mb-1">Harga</label>
          <input :value="price" @change="(e: any) => emits('update:price', e.target.value)"
            class="text-[#4f5d77] text-[13px] w-full rounded-[4px] h-[45px] border-[2px] border-[#f4f5f9] bg-[#f4f5f9] pl-5 py-2 pr-3 outline-0 hover:bg-transparent"
            placeholder="Rp" type="number" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  productName: string,
  productCategory: string,
  price: string,
}>()

const emits = defineEmits<{
  (e: 'update:productName', newValue: any): void;
  (e: 'update:productCategory', newValue: any): void;
  (e: 'update:price', newValue: any): void;
}>()
</script>
