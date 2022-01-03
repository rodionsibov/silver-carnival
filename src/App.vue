<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";

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

const createPost = (post) => {
  posts.push(post)
}
</script>

<template>
  <PostForm msg="Create Post" @create="createPost" />
  <PostList :posts="posts" />

  <div class="mt-8">
    <!-- <router-view /> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
