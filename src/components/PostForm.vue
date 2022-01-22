<script setup>
import TheButton from "./TheButton.vue";
import TheInput from "./TheInput.vue";
import { computed, onMounted, reactive, ref, watch } from "vue";
import {useStore} from 'vuex'

const store = useStore()

defineProps({
  msg: String,
});

// const post = reactive({
//   title: "",
//   body: "",
// });

// const sortedPosts = computed(() => {
//   return posts.sort((a, b) => b.id - a.id);
// });

// const title = computed({
//   get() {
//     return store.state.post.title;
//   },
//   set(value) {
//     store.commit("post/setTitle", value);
//   },
// });

// const text = computed({
//   get() {
//     return store.state.post.text;
//   },
//   set(value) {
//     store.commit("post/setText", value);
//   },
// });

const isValid = computed(() => !(title.value !== "" && text.value !== ""));

const createPost = () => {
  const newPost = {
    id: crypto.randomUUID(),
    tilte: title.value,
    text: text.value,
  };
  store.commit("post/createPost", newPost);
};
</script>

<template>
  <form
    @submit.prevent="createPost"
    class="flex flex-col gap-4 p-4 w-full bg-gray-600"
  >
    <h1 class="text-2xl font-bold text-white">{{ msg }}</h1>
    <TheInput placeholder="Name" v-model="title" />
    <TheInput placeholder="Description" v-model="text" />
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
