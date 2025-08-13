// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"], // путь к файлу CSS, где будет Tailwind
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.VITE_API_URL,
    },
  },
});
