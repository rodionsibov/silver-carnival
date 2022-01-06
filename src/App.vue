<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive, ref } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import TheDialog from "./components/TheDialog.vue";
import TheButton from "./components/TheButton.vue";

const data = reactive({
  posts: [],
  isPostsLoading: false,
});

const createPost = (post) => {
  data.posts.push(post);
  dialog.isVisible = false;
};

const removePost = (post) => {
  if (
    confirm(
      `Are you sure, you want to remove post: ${post.title.toUpperCase()}?`
    )
  )
    data.posts = data.posts.filter((p) => p.id !== post.id);
};

const dialog = reactive({
  isVisible: false,
});

const showDialog = () => (dialog.isVisible = true);

const fetchPosts = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const posts = await res.json();
    data.isPostsLoading = true;
    data.posts = posts;
  } catch (error) {
    alert(error);
  } finally {
    data.isPostsLoading = false;
  }
};

setTimeout(() => {
  fetchPosts();
}, 1000);
</script>

<template>
  <div class="fixed top-0 w-full p-3 flex justify-between bg-gray-700">
    <h1 class="text-gray-100">Post Page</h1>
    <div class="space-x-2">
      <TheButton @click="showDialog" class="bg-green-500 text-white"
        >Create Post</TheButton
      >
      <TheButton
        @click="fetchPosts"
        :disabled="data.posts.length > 0"
        class="
          bg-purple-500
          text-white
          disabled:opacity-20 disabled:cursor-auto
        "
        >Get Posts</TheButton
      >
    </div>
  </div>
  <TheDialog v-model:show="dialog.isVisible">
    <PostForm msg="Create Post" @create="createPost" />
  </TheDialog>
  <div class="md:w-2/3 mx-auto mt-16">
    <PostList
      v-if="!data.isPostsLoading"
      :posts="data.posts"
      @remove="removePost"
    />
    <div v-else>Loading...</div>
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
