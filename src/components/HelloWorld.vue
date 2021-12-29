<script setup>
import { ref } from "vue";
defineProps({
  msg: String,
});

const likes = ref(0);
const dislikes = ref(5);

const addLikes = () => {
  likes.value++;
};

const removeLikes = () => {
  dislikes.value--;
};


</script>

<template>
  <h1>{{ msg }}</h1>

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
    type="button"
    @click="addLikes"
  >
    likes: {{ likes }}
  </button>
  <button
    type="button"
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
    @click="removeLikes"
  >
    dislikes: {{ dislikes }}
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
