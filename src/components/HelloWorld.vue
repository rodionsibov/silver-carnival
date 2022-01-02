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
