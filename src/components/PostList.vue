<script setup>
import { ref } from "@vue/reactivity";
import PostItem from "./PostItem.vue";

defineProps({
  posts: Object,
});

const emit = defineEmits(["remove"]);

const title = ref("");
title.value = JSON.parse(sessionStorage.getItem("title")) || "Posts";

const saveToLocalStorage = (event) => {
  const txt = event.target.innerText;
  sessionStorage.setItem("title", JSON.stringify(txt));
};
</script>

<template>
  <div v-if="posts.length > 0" class="p-3 space-y-4">
    <h3 class="text-3xl" contentEditable="true" @blur="saveToLocalStorage">
      {{ title }}
    </h3>
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
    <h3 class="text-center text-red-500">There are no posts here!</h3>
  </div>
</template>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.5s ease;
}
</style>
