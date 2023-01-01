<template>
  <div>
    <!-- Modal -->
    <div class="block fixed top-0 left-0 z-30 w-full h-full outline-0 overflow-y-auto overflow-x-hidden pr-4" v-show="modelValue">
      <div class="w-auto max-w-4xl overflow-hidden top-1/2 relative pointer-events-none mx-auto -translate-y-1/2">
        <div
          class="flex flex-col w-full relative p-10 rounded-3xl bg-white border border-[#BCE3C9] pointer-events-auto outline-0 align-baseline">
          <button class="absolute right-[22px] top-[22px] z-10 cursor-pointer box-content w-[30px] h-[30px] p-1 text-black opacity-50" @click="closeDialog">
            <i class="text-2xl ri-close-line"></i>
          </button>

          <!-- Modal Body -->
          <div class="relative flex-auto p-4 align-baseline pointer-events-auto">
            <div class="flex flex-col items-center pt-2">
              <i class="text-8xl mb-2 ri-question-line"></i>
              <h1 class="text-3xl mb-2 font-bold">Hapus item ini?</h1>
              <p class="text-lg mb-6">Item yang sudah dihapus tidak dapat dikembalikan. Apakah anda yakin?</p>

              <div class="">
                <button class="py-2 px-[18px] bg-[#3BB77E] text-white text-lg rounded-[4px] transition-all hover:bg-[#FDC040] min-w-[80px] mr-4" @click="confirmClick">Ya</button>
                <button class="py-2 px-[18px] bg-[#f74b81] text-white text-lg rounded-[4px] transition-all hover:bg-[#FDC040] min-w-[80px]" @click="cancelClick">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div class="bg-black fixed top-0 left-0 z-20 w-screen h-screen opacity-50" v-show="modelValue"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()

const emit =defineEmits<{
  (e: 'update:modelValue', newval: boolean): void,
  (e: 'cancel'): void,
  (e: 'ok'): void,
}>()

const closeDialog = () => {
  emit('update:modelValue', false)
}

const confirmClick = () => {
  emit('ok')
  closeDialog()
}

const cancelClick = () => {
  emit('cancel')
  closeDialog()
}
</script>
