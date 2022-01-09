<script setup>
import PostItem from "./PostItem.vue";

defineProps({
  posts: Object,
});

const emit = defineEmits(["remove"]);
</script>

<template>
  <div v-if="posts.length > 0" class="p-3 space-y-4">
    <h3 class="text-3xl">Posts</h3>
    <transition-group name="post-list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="emit('remove', post)"
      />
    </transition-group>
  </div>
  <div v-else class="p-3">
    <h3 class="text-lg text-center font-bold text-red-500">
      There are no posts here!
    </h3>
  </div>
</template>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}

.post-list-from,
.post-list-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
