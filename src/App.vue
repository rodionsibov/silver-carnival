<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive, watch, ref, onMounted } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import TheDialog from "./components/TheDialog.vue";
import TheButton from "./components/TheButton.vue";
import TheSelect from "./components/TheSelect.vue";
import TheInput from "./components/TheInput.vue";

const data = reactive({
  posts: [],
  isPostsLoading: false,
  searchQuery: "",
  page: 1,
  limit: 10,
  totalPages: 0,
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
      const url = new URL("https://jsonplaceholder.typicode.com/posts");
      url.search = new URLSearchParams({
        _limit: data.limit,
        _page: data.page,
      }).toString();
      const res = await fetch(
        url
        // `https://jsonplaceholder.typicode.com/posts?_limit=${data.limit}&_page=${data.page}`
      );
      data.totalPages = Math.ceil(
        res.headers.get("x-total-count") / data.limit
      );
      const posts = await res.json();
      data.posts = posts;
      data.isPostsLoading = false;
    }, 1000);
  } catch (error) {
    alert(error);
  }
};

const loadMorePosts = async () => {
  try {
    data.page++;
    setTimeout(async () => {
      const url = new URL("https://jsonplaceholder.typicode.com/posts");
      url.search = new URLSearchParams({
        _limit: data.limit,
        _page: data.page,
      }).toString();
      const res = await fetch(url);
      data.totalPages = Math.ceil(
        res.headers.get("x-total-count") / data.limit
      );
      const posts = await res.json();
      data.posts = [...data.posts, ...posts];
    }, 1000);
  } catch (error) {
    alert(error);
  }
};

const observerEl = ref(null);

onMounted(() => {
  fetchPosts();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) loadMorePosts();
    },
    {
      rootMargin: "0px",
      threshold: 1.0,
    }
  );
  observer.observe(observerEl.value);
});

// watch(
//   () => data.selectedSort,
//   (newValues, prevValues) => {
//     data.posts.sort((a, b) => {
//       return a[newValues]?.localeCompare(b[newValues]);
//     });
//   }
// );

// watch(
//   () => data.page,
//   () => {
//     fetchPosts();
//   }
// );

const sortedPosts = computed(() => {
  return [...data.posts].sort((a, b) => {
    return a[data.selectedSort]?.localeCompare(b[data.selectedSort]);
  });
});

const sortedAndSearchedPosts = computed(() => {
  return sortedPosts.value.filter((post) =>
    post.title.toLowerCase().includes(data.searchQuery.toLowerCase())
  );
});

// const changePage = (pageNumber) => {
//   data.page = pageNumber;
// };
</script>

<template>
  <div class="sticky top-0 w-full p-3 md:flex justify-between bg-gray-700 z-10">
    <h1 class="text-yellow-200 mb-4 md:m-0 md:text-2xl font-bold text-4xl">
      Post Page
    </h1>
    <TheInput
      placeholder="Search..."
      v-model="data.searchQuery"
      class="my-4 md:m-0 md:w-60"
    />
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
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else class="p-3">Loading...</div>
    <div ref="observerEl" class="h-10 bg-red-500"></div>
    <!-- <div class="flex justify-center gap-1 mt-4">
      <div
        v-for="pageNumber in data.totalPages"
        :key="pageNumber"
        class="border border-black p-2 cursor-pointer"
        :class="{ 'border-2 border-green-500': pageNumber === data.page }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
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
