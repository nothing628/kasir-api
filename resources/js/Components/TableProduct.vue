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
        <tr class="border-b border-b-[#ececec]">
          <td class="py-[15px] pl-[30px] align-middle">
            <input class="hidden" type="checkbox" />
            <label
              class="mb-[5px] text-[#687188] p-0 relative cursor-pointer align-middle before:content-[''] before:inline-block before:w-[17px] before:h-[17px] before:mr-2 before:rounded-[2px] before:border-2 before:border-[#ced4da] after:content-[''] after:absolute after:w-[11px] after:h-[6px] after:left-[3px] after:top-1/2 after:opacity-0 after:border-l-2 after:border-b-2 after:border-b-white after:border-l-white after:-translate-y-[65%] after:-rotate-45"></label>
          </td>
          <td class="py-[15px]">
            <a class="text-[#3BB77E] text-base font-bold">Indomie</a>
          </td>
          <td class="py-[15px]">
            <a class="text-[#3BB77E] text-base font-bold">Makanan</a>
          </td>
          <td class="py-[15px] text-center"><h3 class="text-[#3BB77E] text-xl">Rp3.500</h3></td>
          <td class="py-[15px] text-center">
            <button class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2">Edit</button>
            <button class="py-2 px-[18px] bg-[#f74b81] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040]">Hapus</button>
          </td>
        </tr>
        <tr class="border-b border-b-[#ececec]">
          <td class="py-[15px] pl-[30px] align-middle">
            <input class="hidden" type="checkbox" />
            <label
              class="mb-[5px] text-[#687188] p-0 relative cursor-pointer align-middle before:content-[''] before:inline-block before:w-[17px] before:h-[17px] before:mr-2 before:rounded-[2px] before:border-2 before:border-[#ced4da] after:content-[''] after:absolute after:w-[11px] after:h-[6px] after:left-[3px] after:top-1/2 after:opacity-0 after:border-l-2 after:border-b-2 after:border-b-white after:border-l-white after:-translate-y-[65%] after:-rotate-45"></label>
          </td>
          <td class="py-[15px]">
            <a class="text-[#3BB77E] text-base font-bold">Indomie</a>
          </td>
          <td class="py-[15px]">
            <a class="text-[#3BB77E] text-base font-bold">Makanan</a>
          </td>
          <td class="py-[15px] text-center"><h3 class="text-[#3BB77E] text-xl">Rp3.500</h3></td>
          <td class="py-[15px] text-center">
            <button class="py-2 px-[18px] bg-[#3BB77E] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040] mr-2">Edit</button>
            <button class="py-2 px-[18px] bg-[#f74b81] text-white text-sm rounded-[4px] transition-all hover:bg-[#FDC040]">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
