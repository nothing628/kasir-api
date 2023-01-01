<template>
  <tr class="border-b border-b-[#ececec]">
    <td class="py-[15px] pl-[30px] align-middle">
      <input class="hidden" type="checkbox" />
      <label
        class="mb-[5px] text-[#687188] p-0 relative cursor-pointer align-middle before:content-[''] before:inline-block before:w-[17px] before:h-[17px] before:mr-2 before:rounded-[2px] before:border-2 before:border-[#ced4da] after:content-[''] after:absolute after:w-[11px] after:h-[6px] after:left-[3px] after:top-1/2 after:opacity-0 after:border-l-2 after:border-b-2 after:border-b-white after:border-l-white after:-translate-y-[65%] after:-rotate-45"></label>
    </td>
    <td class="py-[15px]">
      <a class="text-[#3BB77E] text-base font-bold">{{ item.product_name }}</a>
    </td>
    <td class="py-[15px]">
      <a class="text-[#3BB77E] text-base font-bold">{{ item.product_category }}</a>
    </td>
    <td class="py-[15px] text-center">
      <h3 class="text-[#3BB77E] text-xl">Rp{{ item.harga }}</h3>
    </td>
    <td class="py-[15px] text-center">
      <button @click="updateClick"
        class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2">Edit</button>
      <button @click="deleteClick"
        class="py-2 px-[18px] bg-[#f74b81] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040]">Hapus</button>
    </td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: any
}>()

const emit = defineEmits<{
  (e: 'delete', item: any): void
  (e: 'update', item: any): void
}>()

const deleteClick = () => {
  emit('delete', props.item)
}
const updateClick = () => {
  emit('update', props.item)
}
</script>
