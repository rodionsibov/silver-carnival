<script setup>
import TheButton from "./TheButton.vue";
import TheInput from "./TheInput.vue";
import { computed, reactive } from "vue";

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

const isValid = computed(() => !(post.title !== "" && post.body !== ""));

const createPost = () => {
  const newPost = {
    id: crypto.randomUUID(),
    title: post.title,
    body: post.body,
  };
  emit("create", newPost);
  post.title = "";
  post.body = "";
};
</script>

<template>
  <form
    @submit.prevent="createPost"
    class="flex flex-col gap-4 p-4 w-full"
  >
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
    <TheInput placeholder="Name" v-model="post.title" />
    <TheInput placeholder="Description" v-model="post.body" />
    <TheButton
      class="
        self-end
        bg-green-500
        text-white
        disabled:bg-gray-300 disabled:hover:opacity-100 disabled:cursor-help
      "
      :title="isValid ? 'Please fill the input fields!' : ''"
      :disabled="isValid"
      >Create</TheButton
    >
  </form>
</template>
