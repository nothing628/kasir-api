<template>
  <li class="mb-[5px] p-0 align-baseline">
    <a class="relative flex items-center p-[10px] font-extrabold text-[13px] text-[#292f46] hover:bg-[#e9ecef] rounded"
      :class="active ? 'bg-[rgba(59,183,126,0.2)]' : ''" :href="href">
      <i v-if="Boolean(icon)" class="mr-[10px] text-2xl" :class="iconClass"></i>
      <span>
        <slot></slot>
      </span>
    </a>
  </li>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  active: {
    default: false,
    type: Boolean,
    required: false
  },
  href: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
})

const iconClass = computed(() => {
  const classes = [] as string[];

  if (props.icon) {
    classes.push(props.icon)
  }

  if (props.active) {
    classes.push('text-[#3BB77E]')
  } else {
    classes.push("text-[#adb5bd]")
  }

  return classes;
})
</script>
