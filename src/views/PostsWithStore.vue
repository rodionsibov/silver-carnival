<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, reactive, watch, ref, onMounted } from "vue";
import { useStore } from "vuex";
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import TheDialog from "../components/TheDialog.vue";
import TheButton from "../components/TheButton.vue";
import TheSelect from "../components/TheSelect.vue";
import TheInput from "../components/TheInput.vue";

const store = useStore();

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

const observerEl = ref(null);

onMounted(() => {
  fetchPosts();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && data.page < data.totalPages)
        loadMorePosts();
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



// const changePage = (pageNumber) => {
//   data.page = pageNumber;
// };
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
    <h1
      class="my-4 text-right text-yellow-500 "
      :class="{ 'text-green-500': store.state.isAuth }"
    >
      {{ store.state.isAuth ? "Welcome" : "Please login to continue!" }}
    </h1>
    <h1 class="text-gray-50 mb-4 md:m-0 md:text-2xl font-bold text-4xl">
      {{ store.getters.doubleLikes }}
    </h1>
    <div class="space-x-2">
      <TheButton @click="store.commit('incrementLikes')" class="bg-yellow-300"
        >Like</TheButton
      >
      <TheButton @click="store.commit('decrementLikes')" class="bg-yellow-300"
        >Dislike</TheButton
      >
      <TheButton
        @click="store.commit('resetLikes')"
        class="bg-red-500 text-white"
        >Reset Likes</TheButton
      >
    </div>
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
    <div ref="observerEl" class=""></div>
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
</template>

<style>
</style>
