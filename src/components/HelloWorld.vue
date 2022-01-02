<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const posts = [
  {
    id: 1,
    title: "A post about JavaScript",
    description: "JavaScript is an universal programming language",
  },
  {
    id: 2,
    title: "A post about JavaScript",
    description: "JavaScript is an universal programming language",
  },
  {
    id: 3,
    title: "A post about JavaScript",
    description: "JavaScript is an universal programming language",
  },
];
</script>

<template>
  <div class="post">
    <div><strong>Title:</strong> A post about JavaScript</div>
    <div>
      <strong>Description:</strong> JavaScript is an universal programming
      language
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
