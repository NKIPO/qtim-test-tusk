<template>
  <header
    class="flex justify-between items-center md:px-[40px] md:pt-[47px] md:pb-[49px] px-[16px] pt-[27px] pb-[29px] bg-white"
  >
    <div class="flex-shrink-0">
      <NuxtLink to="/" class="flex items-center">
        <img src="/img/logo/logo.svg" alt="Logo" class="h-[24px]" />
      </NuxtLink>
    </div>
    <div class="flex items-center gap-3 md:gap-[91px]">
      <nav class="flex-grow">
        <ul class="flex justify-center gap-5 md:gap-[58px] transition">
          <li>
            <button
              class="text-textColor hover:text-shadow-md font-normal text-[20px] cursor-pointer"
            >
              Works
            </button>
          </li>
          <li>
            <button
              class="text-textColor hover:text-shadow-md font-normal text-[20px] cursor-pointer"
            >
              About
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <button
          class="rounded-full flex justify-center items-center hover:bg-gray-100 ring-1 ring-gray-200 h-[52px] w-[52px]"
        >
          <img src="/img/icons/flag.svg" alt="Flag" class="h-6 w-6" />
        </button>
        <button
          class="bg-primary hover:shadow text-white px-8 py-4 font-normal rounded-[999px] cursor-pointer transition duration-300 ease-in-out h-[52px] sm:w-[142px] w-[140px]"
        >
          Let's work
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
