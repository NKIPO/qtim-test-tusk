<template>
  <div class="container mx-auto p-4">
    <h1 class="text-[84px] font-normal mb-[59px] text-textColor">Article</h1>

    <div v-if="pending" class="text-center text-gray-600 text-xl p-8">
      <p>Loading articles...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-600 text-xl p-8">
      <p>Error loading articles: {{ error.message }}</p>
    </div>
    <div
      v-else-if="!paginatedArticles || paginatedArticles.length === 0"
      class="text-center text-gray-600 text-xl p-8"
    >
      <p>No articles found.</p>
    </div>
    <div
      v-else
      class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-[52px] justify-items-center"
    >
      <div
        v-for="article in paginatedArticles"
        :key="article.id"
        class="bg-white overflow-hidden flex flex-col h-full group transition-all duration-300 ease-in-out sm:hover:scale-105 sm:hover:-translate-y-2 w-[280px] min-h-[416px]"
      >
        <NuxtImg
          :src="article.image"
          :alt="article.title"
          class="w-[280px] h-[280px] object-cover"
          placeholder="/img/placeholder.png"
          loading="lazy"
        />
        <div class="pt-6 flex flex-col flex-grow justify-between">
          <p class="text-gray-600 line-clamp-3 mb-4">{{ article.preview }}</p>
          <NuxtLink
            :to="`/${article.id}`"
            class="text-link font-normal w-fit self-start sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >Read More</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="flex justify-start space-x-2 mb-[140px]">
      <button
        :disabled="page === 1"
        :class="[
          'rounded-[12px] w-[44px] h-[44px] flex items-center justify-center',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          'transition-colors duration-300 ease-in-out',
          page === 1
            ? 'bg-white text-primary'
            : 'bg-white text-primary hover:bg-primary hover:text-white',
        ]"
        @click="page--"
      >
        <Icon name="tabler:chevron-left" width="24" height="24" />
      </button>
      <button
        v-for="p in visiblePages"
        :key="p"
        :class="[
          'rounded-[12px] w-[44px] h-[44px] flex items-center justify-center',
          page === p
            ? 'bg-primary text-white font-bold'
            : 'bg-secondary text-textColor cursor-pointer ',
        ]"
        @click="page = p"
      >
        {{ p }}
      </button>
      <button
        :disabled="page === totalPages"
        :class="[
          'rounded-[12px] w-[44px] h-[44px] flex items-center justify-center',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          'transition-colors duration-300 ease-in-out',
          page === totalPages
            ? 'bg-white text-primary'
            : 'bg-white text-primary hover:bg-primary hover:text-white',
        ]"
        @click="page++"
      >
        <Icon name="tabler:chevron-right" width="24" height="24" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { fetchAllPosts } from "~/repository/PostActions";
import { useWindowSize } from "@vueuse/core";

const {
  data: articles,
  pending,
  error,
} = await useAsyncData("posts", () => fetchAllPosts());

const page = ref(1);
const perPage = ref(8);

const { width } = useWindowSize();

onMounted(() => {
  const updatePerPage = () => {
    if (width.value <= 1280) {
      perPage.value = 6;
    } else {
      perPage.value = 8;
    }
  };

  updatePerPage();

  watch(width, updatePerPage);
});

const paginatedArticles = computed(() => {
  const articlesData = articles.value || [];
  const start = (page.value - 1) * perPage.value;
  const end = start + perPage.value;
  return articlesData.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil((articles.value?.length || 0) / perPage.value);
});

const visiblePages = computed(() => {
  const pages = [];
  const maxVisiblePages = 5;
  const half = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, page.value - half);
  let endPage = Math.min(totalPages.value, page.value + half);

  if (endPage - startPage + 1 < maxVisiblePages) {
    if (startPage === 1) {
      endPage = Math.min(totalPages.value, maxVisiblePages);
    } else if (endPage === totalPages.value) {
      startPage = Math.max(1, totalPages.value - maxVisiblePages + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});
</script>
