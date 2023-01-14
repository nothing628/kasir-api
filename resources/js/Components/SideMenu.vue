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
        <li class="mb-[5px] p-0 align-baseline">
          <a class="relative flex items-center p-[10px] font-extrabold text-[13px] text-[#292f46] hover:bg-[#e9ecef] rounded" href="/">
            <i class="text-[#adb5bd] mr-[10px] text-2xl ri-home-4-line"></i>
            <span class="">Dashboard</span>
          </a>
        </li>
        <li class="mb-[5px] p-0 align-baseline">
          <a class="relative flex items-center p-[10px] font-extrabold text-[13px] text-[#292f46] bg-[rgba(59,183,126,0.2)] hover:bg-[#e9ecef] rounded" href="/">
            <i class="text-[#adb5bd] mr-[10px] text-2xl ri-shopping-bag-3-line"></i>
            <span class="">Products</span>
          </a>
        </li>
        <li class="mb-[5px] p-0 align-baseline">
          <a class="relative flex items-center p-[10px] font-extrabold text-[13px] text-[#292f46] hover:bg-[#e9ecef] rounded" href="/">
            <i class="text-[#adb5bd] mr-[10px] text-2xl ri-shopping-cart-2-line"></i>
            <span class="">Orders</span>
          </a>
        </li>
        <li class="mb-[5px] p-0 align-baseline">
          <a class="relative flex items-center p-[10px] font-extrabold text-[13px] text-[#292f46] hover:bg-[#e9ecef] rounded" href="/">
            <i class="text-[#adb5bd] mr-[10px] text-2xl ri-money-dollar-circle-line"></i>
            <span class="">Transactions</span>
          </a>
        </li>
      </ul>
      <br>
      <br>
    </nav>
  </aside>
</template>
