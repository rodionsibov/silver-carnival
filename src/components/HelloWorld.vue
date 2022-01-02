<script setup>
import { reactive, ref } from "vue";

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
  {
    id: 4,
    title: "JavaScript 4",
    body: "Description 4",
  },
]);

const post = reactive({
  title: "",
  body: "",
});

const createPost = () => {
 posts.push(post)
};
</script>

<template>
{{post}}
  <div class="bg-green-300 p-3">
    <form @click.prevent="createPost" class="space-y-2">
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
      <button class="bg-white px-2 py-1 rounded shadow-md hover:opacity-80">
        Create
      </button>
    </form>
  </div>
  <div class="post" v-for="post in posts" :key="post.id">
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
