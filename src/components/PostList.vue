<script setup>
import PostItem from "./PostItem.vue";

defineProps({
  posts: Object,
});

const emit = defineEmits(['remove'])

</script>

<template>
  <div class="p-3 space-y-4">
    <h3 class="text-3xl">User's List</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="emit('remove', post)"
    />
  </div>
</template>

<style scoped>
</style>
