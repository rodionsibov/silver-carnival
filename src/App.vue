<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive, watch } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import TheDialog from "./components/TheDialog.vue";
import TheButton from "./components/TheButton.vue";
import TheSelect from "./components/TheSelect.vue";

const data = reactive({
  posts: [],
  isPostsLoading: false,
  selectedSort: "",
  sortOptions: [
    {
      value: "title",
      name: "Name",
    },
    {
      value: "body",
      name: "Description",
    },
  ],
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
    data.isPostsLoading = true;
    setTimeout(async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const posts = await res.json();
      data.posts = posts;
      data.isPostsLoading = false;
    }, 1000);
  } catch (error) {
    alert(error);
  }
};

fetchPosts();

// watch(
//   () => data.selectedSort,
//   (newValues, prevValues) => {
//     data.posts.sort((a, b) => {
//       return a[newValues]?.localeCompare(b[newValues]);
//     });
//   }
// );

const sortedPosts = computed(() => {
  return [...data.posts].sort((a, b) => {
    return a[data.selectedSort]?.localeCompare(b[data.selectedSort]);
  });
});
</script>

<template>
  <div class="sticky top-0 w-full p-3 md:flex justify-between bg-gray-700">
    <h1 class="text-yellow-200 mb-4 md:m-0 md:text-2xl font-bold text-4xl">
      Post Page
    </h1>
    <div class="md:space-x-2 md:block flex flex-col gap-2">
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
      <TheSelect v-model="data.selectedSort" :options="data.sortOptions" />
    </div>
  </div>
  <TheDialog v-model:show="dialog.isVisible">
    <PostForm msg="Create Post" @create="createPost" />
  </TheDialog>
  <div class="md:w-2/3 mx-auto">
    <PostList
      v-if="!data.isPostsLoading"
      :posts="sortedPosts"
      @remove="removePost"
    />
    <div v-else class="p-3">Loading...</div>
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
