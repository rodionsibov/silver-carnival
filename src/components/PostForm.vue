<script setup>
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
  <form @submit.prevent="createPost" class="flex flex-col gap-3 bg-[gold] p-8">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
    <input class="p-2" type="text" placeholder="Name" v-model="post.title" />
    <input
      class="p-2"
      type="text"
      placeholder="Description"
      v-model="post.body"
    />
    <input
      :disabled="!(post.title !== '' && post.body !== '')"
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
