<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import TheDialog from "./components/TheDialog.vue";

const data = reactive({
  posts: [
    {
      id: crypto.randomUUID(),
      title: "JavaScript 1",
      body: "Description 1",
    },
    {
      id: crypto.randomUUID(),
      title: "JavaScript 2",
      body: "Description 2",
    },
    {
      id: crypto.randomUUID(),
      title: "JavaScript 3",
      body: "Description 3",
    },
  ],
});

const createPost = (post) => {
  data.posts.push(post);
};

const removePost = (post) => {
  if (confirm("Are you sure?"))
    data.posts = data.posts.filter((p) => p.id !== post.id);
};
</script>

<template>
  <TheDialog :show="true">
    <PostForm msg="Create Post" @create="createPost" />
  </TheDialog>
  <div class="md:w-1/2 mx-auto">
    <PostList :posts="data.posts" @remove="removePost" />
  </div>

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
