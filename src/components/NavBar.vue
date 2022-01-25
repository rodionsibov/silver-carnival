<script setup>
import TheButton from "./TheButton.vue";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div
    class="flex items-center justify-around bg-black/70 text-white h-12 border-b-2"
  >
    <div @click="router.push('/')" class="cursor-pointer">Vue 3</div>
    <div class="flex gap-4 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <TheButton class="bg-black/50" @click="router.push('/about')">About</TheButton>
      <router-link to="/config">Configuration</router-link>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>