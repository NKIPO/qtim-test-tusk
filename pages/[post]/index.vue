<template>
  <div class="container mx-auto px-4">
    <div v-if="article" class="mx-auto bg-white overflow-hidden">
      <div class="px-6 pt-6">
        <h1 class="text-[84px] font-normal mb-[73px]">{{ article.title }}</h1>
        <img
          src="/img/placeholder.png"
          :alt="article.title"
          class="w-full h-[700px] object-cover"
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
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.post; // Get the post ID from the route parameter

// Mock data for a single article (in a real app, you'd fetch this based on postId)
const mockArticle = {
  id: "1",
  title: "Detailed Article Title for Post " + postId,
  description: `This is a detailed description for the article with ID ${postId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Here's another paragraph to make the description longer and more realistic. It covers various aspects of the topic, providing in-depth analysis and insights. The goal is to give the reader a comprehensive understanding of the subject matter.

  Finally, a concluding paragraph summarizing the key takeaways and offering a forward-looking perspective. This section aims to reinforce the main points and leave the reader with a clear understanding of the article's implications.`, // Long mock description
  image:
    "https://via.placeholder.com/800x400/336699/FFFFFF?text=Article+Detail+" +
    postId,
};

// For now, we'll just use the mockArticle. In a real app, you'd have logic to find the article by postId.
const article = ref(mockArticle);

// You could also simulate fetching data:
// const article = ref(null);
// onMounted(async () => {
//   // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 500));
//   if (postId === '1') { // Example: only show mockArticle for postId '1'
//     article.value = mockArticle;
//   }
// });
</script>

<style scoped>
/* Tailwind handles styling */
</style>
