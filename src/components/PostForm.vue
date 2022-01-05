<script setup>
import TheButton from "./TheButton.vue";
import { reactive } from "vue";

defineProps({
  msg: String,
});

const emit = defineEmits(["create"]);

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
  emit("create", newPost);
  post.title = "";
  post.body = "";
};
</script>

<template>
  <form @submit.prevent="createPost" class="flex flex-col gap-3 bg-blue-100 p-8">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
    <input class="p-2" type="text" placeholder="Name" v-model="post.title" />
    <input
      class="p-2"
      type="text"
      placeholder="Description"
      v-model="post.body"
    />
    <TheButton
      class="w-24 self-end bg-green-500 text-white disabled:opacity-30 disabled:cursor-help"
      :title="!(post.title !== '' && post.body !== '') ? 'Please fill the input fields!' : ''"
      :disabled="!(post.title !== '' && post.body !== '')"
      >Create</TheButton
    >
  </form>
</template>
