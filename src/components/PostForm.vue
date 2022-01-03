<script setup>
import { reactive } from "vue";

defineProps({
  msg: String
});

defineEmits([
    'change'
])

const post = reactive({
  title: "",
  body: "",
});

// const sortedPosts = computed(() => {
//   return posts.sort((a, b) => b.id - a.id);
// });

const createPost = () => {
  const newPost = {
    id: Date.now(),
    title: post.title,
    body: post.body,
  };

  post.title = "";
  post.body = "";
console.log('created');
};
</script>

<template>
  <form @submit.prevent="createPost" class="flex flex-col gap-3 bg-blue-200 p-8">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
    <input class="p-2" type="text" placeholder="Name" v-model="post.title" />
    <input
      class="p-2"
      type="text"
      placeholder="Description"
      v-model="post.body"
    />
    <input
      :disabled="post.title === ''"
      type="submit"
      value="Create"
      class="
        disabled:opacity-30
        bg-white
        px-2
        py-1
        rounded
        shadow-md
        hover:opacity-80
        cursor-pointer
        w-24
        self-end
      "
    />
  </form>
</template>