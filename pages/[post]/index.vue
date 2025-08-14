<template>
  <div class="container mx-auto px-4">
    <div v-if="article" class="mx-auto bg-white overflow-hidden">
      <div class="px-6 pt-6">
        <h1 class="text-[84px] font-normal mb-[73px]">{{ article.title }}</h1>
        <NuxtImg
          :src="article.image"
          :alt="article.title"
          class="w-full h-[700px] object-cover"
          placeholder="/img/placeholder.png"
          loading="lazy"
        />
        <div class="mt-[80px] text-textColor">
          <p class="text-[16px] mb-[32px]">About</p>
          <p
            class="text-textColor text-[36px] leading-[124%] max-w-[50%] mb-[80px]"
          >
            {{ article.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-600 text-xl p-8">
      <p>Article not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { fetchPostById } from "~/repository/PostActions";

const route = useRoute();
const postId = route.params.post;

const { data: article } = await useAsyncData("post", () =>
  fetchPostById(postId)
);
</script>
