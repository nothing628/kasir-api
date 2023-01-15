<template>
  <aside class="w-full fixed block max-w-[300px] top-0 bottom-0 bg-white border-r border-r-[#eee]" id="offcanvas_aside">
    <div class="py-3 px-2 flex items-center justify-between border-b border-b-[#eee] min-h-[72px]">
      <a href="/" class="px-2 inline-block">
        <img src="/logo.svg" class="max-w-[120px] mt-[5px] min-w-[120px]" alt="Nest Dashboard">
      </a>
      <div>
        <button class="text-center px-2 py-2 inline-block text-[#141432] align-middle rounded-lg hover:bg-[rgba(108,117,125,0.15)] hover:text-[#141432]"><i class="text-[#adb5bd] text-2xl ri-menu-fold-line"></i></button>
      </div>
    </div>

    <nav>
      <ul class="list-none m-4 p-0">
        <SideMenuItem href="/" icon="ri-home-4-line">Dashboard</SideMenuItem>
        <SideMenuItem href="/products" active icon="ri-shopping-bag-3-line">Products</SideMenuItem>
        <SideMenuItem href="/orders" icon="ri-shopping-cart-2-line">Orders</SideMenuItem>
        <SideMenuItem href="/transactions" icon="ri-money-dollar-circle-line">Transactions</SideMenuItem>
      </ul>
      <br>
      <br>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import SideMenuItem from './SideMenuItem.vue'
</script>
