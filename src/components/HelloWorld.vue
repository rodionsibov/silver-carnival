<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const posts = [
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
  {
    id: 4,
    title: "JavaScript 4",
    body: "Description 4",
  },
];


</script>

<template>
<div class="bg-green-300 p-3">
  <form class="space-y-2">
    <h1>Create Post</h1>
    <input class="w-full p-2" type="text" placeholder="Name">
    <input class="w-full p-2" type="text" placeholder="Description">
    <button class="bg-white px-2 py-1 rounded shadow-md hover:opacity-80">Create</button>
  </form>
</div>
  <div class="post" v-for="post in posts" :key="post.id">
    <div>
      <strong>Title:</strong>
      {{ post.title }}
    </div>
    <div>
      <strong>Description:</strong>
      {{ post.body }}
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
