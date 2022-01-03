<script setup>
import { reactive, ref, computed } from "vue";

defineProps({
  msg: String,
});

const posts = reactive([
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
]);

const post = reactive({
  title: "",
  body: "",
});

const sortedPosts = computed(() => {
  return posts.sort((a, b) => b.id - a.id)
})

const createPost = () => {
  const newPost = {
    id: posts.length + 1,
    title: post.title,
    body: post.body,
  }
  posts.push(newPost);
  post.title = "";
  post.body = "";
};

</script>

<template>
  <div class="bg-green-300 p-3">
    <form @submit.prevent="createPost" class="space-y-2">
      <h1>{{ msg }}</h1>
      <input
        class="w-full p-2"
        type="text"
        placeholder="Name"
        v-model="post.title"
      />
      <input
        class="w-full p-2"
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
        "
      />
    </form>
  </div>
  <div class="post" v-for="post in sortedPosts" :key="post.id">
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
