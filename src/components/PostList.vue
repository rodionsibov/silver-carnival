<script setup>
import { reactive, ref, computed } from "vue";
import PostForm from "./PostForm.vue";

const posts = reactive([
  {
    id: 1,
    title: "JavaScript 1",
    body: "Description 1",
  },
  {
    id: 2,
    title: "JavaScript 2",
    body: "Description 2",
  },
  {
    id: 3,
    title: "JavaScript 3",
    body: "Description 3",
  },
]);


</script>

<template>
  <div class="bg-blue-200 p-8">
    <PostForm :posts="posts" msg="Create Post" />
  </div>
  <div class="p-3 space-y-4">
    <div class="p-5 border-2 border-teal" v-for="post in posts" :key="post.id">
      <div>
        <strong>Title:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
