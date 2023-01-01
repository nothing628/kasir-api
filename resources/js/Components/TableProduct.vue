<template>
  <div class="overflow-x-auto">
    <table class="w-full mb-4 text-[#212529] align-top">
      <thead>
        <tr>
          <th class="bg-[#ececec] text-[#253D4E] py-[18px] pl-[30px] text-lg font-bold rounded-l-[20px]"></th>
          <th class="bg-[#ececec] text-[#253D4E] py-[18px] text-lg text-left font-bold">Nama Produk</th>
          <th class="bg-[#ececec] text-[#253D4E] py-[18px] text-lg text-left font-bold">Kategori Produk</th>
          <th class="bg-[#ececec] text-[#253D4E] py-[18px] text-lg font-bold">Harga</th>
          <th class="bg-[#ececec] text-[#253D4E] py-[18px] text-lg font-bold rounded-r-[20px]">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <TableProductRow v-for="item in items" :key="(item as any).id" :item="item" @delete="onRowDelete" @update="onRowUpdate" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import TableProductRow from './TableProductRow.vue';

defineProps({
  items: {
    required: true,
    type: Array<unknown>
  }
})

const emit = defineEmits<{
  (e: 'delete', item: any): void
  (e: 'update', item: any): void
}>()

const onRowDelete = (item: any) => {
  emit('delete', item)
}
const onRowUpdate = (item: any) => {
  emit('update', item)
}
</script>
