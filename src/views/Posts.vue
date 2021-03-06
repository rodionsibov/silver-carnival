<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import TheDialog from "../components/TheDialog.vue";
import TheButton from "../components/TheButton.vue";
import TheSelect from "../components/TheSelect.vue";
import TheInput from "../components/TheInput.vue";

const store = useStore();

const fetchPosts = () => store.dispatch("post/fetchPosts");
const loadMorePosts = () => store.dispatch("post/loadMorePosts");
const setPage = (pageNumber) => store.commit("post/setPage", pageNumber);
const setSelectedSort = (val) => store.commit("post/setSelectedSort", val);
const posts = computed(() => store.state.post.posts);
const isPostsLoading = computed(() => store.state.post.isPostsLoading);

const searchQuery = computed({
  get: () => store.state.post.searchQuery,
  set: (val) => store.commit("post/setSearchQuery", val),
});

// const searchQuery = computed(() => store.state.post.searchQuery);
// const setSearchQuery = computed((val) =>
//   store.commit("post/setSearchQuery", val)
// );

const page = computed(() => store.state.post.page);
const limit = computed(() => store.state.post.limit);
const totalPages = computed(() => store.state.post.totalPages);
const selectedSort = computed(() => store.state.post.selectedSort);
const sortOptions = computed(() => store.state.post.sortOptions);
const isAuth = computed(() => store.state.post.isAuth);

const sortedAndSearchedPosts = computed(
  () => store.getters["post/sortedAndSearchedPosts"]
);

const createPost = (post) => {
  store.commit("post/createPost", post);
  dialog.isVisible = false;
};

const removePost = (post) => {
  if (
    confirm(
      `Are you sure, you want to remove post: ${post.title.toUpperCase()}?`
    )
  )
    store.commit("post/removePost", post);
};

const dialog = reactive({
  isVisible: false,
});

const showDialog = () => (dialog.isVisible = true);

const observerEl = ref(null);

onMounted(() => {
  fetchPosts();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && page.value < totalPages.value)
        loadMorePosts();
    },
    {
      rootMargin: "0px",
      threshold: 1.0,
    }
  );
  observer.observe(observerEl.value);
});

watch(
  () => page.value,
  () => {
    fetchPosts();
  }
);

const title = computed({
  get: () => store.state.post.title,
  set: (val) => (store.state.post.title = val),
});
</script>

<template>
  <div
    class="
      sticky
      top-0
      w-full
      p-3
      md:flex
      justify-between
      bg-gray-600
      shadow-lg
      z-10
    "
  >
    <h1 class="text-gray-50 mb-4 md:m-0 md:text-2xl font-bold text-4xl">
      Post Page
    </h1>
    <!-- <input type="text" :value="$store.state.post.title" @input="$store.state.post.title = $event.target.value" /> -->
    <TheInput
      placeholder="Search..."
      v-model="searchQuery"
      class="my-4 md:m-0 md:w-60"
    />
    <div class="md:space-x-2 md:block flex flex-col gap-2">
      <TheButton @click="showDialog" class="bg-green-500 text-white"
        >Create Post</TheButton
      >
      <TheButton
        @click="fetchPosts"
        :disabled="posts.length > 0"
        class="
          bg-purple-500
          text-white
          disabled:opacity-20 disabled:cursor-auto
        "
        >Get Posts</TheButton
      >
      <TheSelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
  </div>

  <TheDialog v-model:show="dialog.isVisible">
    <PostForm msg="Create Post" />
  </TheDialog>

  <div class="md:w-2/3 mx-auto">
    <PostList
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else class="p-3">Loading...</div>
    <div class="flex justify-center gap-1 my-4">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="border border-black p-2 cursor-pointer"
        :class="{ 'border-2 border-green-500': pageNumber === page }"
        @click="setPage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
    <div ref="observerEl" class="mt-36"></div>
  </div>
</template>

<style>
</style>
