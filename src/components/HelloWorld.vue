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
  <h1>{{ msg }}</h1>
  <div class="mt-8 flex mx-auto w-fit space-x-3 font-bold text-xl">
    <div class="text-green-500">likes: {{ likes }}</div>
    <div class="text-red-500">dislikes: {{ dislikes }}</div>
  </div>
  <button
    class="
      bg-gray-800
      text-white
      py-1
      px-2
      hover:opacity-90
      cursor-pointer
      ml-2
      rounded
      my-4
    "
    @click="addLike"
  >
    Add Like
  </button>
  <button
    class="
      bg-gray-800
      text-white
      py-1
      px-2
      hover:opacity-90
      cursor-pointer
      ml-2
      rounded
      my-4
    "
    @click="addDislike"
  >
    Add Dislike
  </button>
  <p>
    Edit
    <code class="font-mono text-pink-400">components/HelloWorld.vue</code> to
    test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
