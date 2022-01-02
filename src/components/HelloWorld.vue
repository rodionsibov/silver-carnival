<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const posts = [
  {
    id: 1,
    title: "A post about JavaScript 1",
    description: "JavaScript is an universal programming language 1",
  },
  {
    id: 2,
    title: "A post about JavaScript 2",
    description: "JavaScript is an universal programming language 2",
  },
  {
    id: 3,
    title: "A post about JavaScript 3",
    description: "JavaScript is an universal programming language 2",
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
      {{ post.description }}
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
