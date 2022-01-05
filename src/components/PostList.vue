<script setup>
import PostItem from "./PostItem.vue";

defineProps({
  posts: Object,
});
</script>

<template>
  <div class="p-3 space-y-4">
    <h3 class="text-3xl">User's List</h3>
    <div
      class="p-5 border-2 border-teal-500"
      v-for="post in posts"
      :key="post.id"
    >
      <PostItem :post="post" />
    </div>
  </div>
</template>

<style scoped>
</style>
