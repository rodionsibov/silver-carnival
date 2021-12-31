<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const likes = ref(0);
const dislikes = ref(5);

const addLike = () => {
  likes.value++;
};

const addDislike = () => {
  dislikes.value++;
};
</script>

<template>
  <div>
    <div><strong>Title:</strong> A post about JavaScript</div>
    <div><strong>Description:</strong> JavaScript is an universal programming language</div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
