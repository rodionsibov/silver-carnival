<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import TheButton from "./TheButton.vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const editPost = () => console.log('edit mode');

const router = useRouter();
const store = useStore();
const emit = defineEmits(["remove"]);
</script>

<template>
  <div
    class="
      p-5
      border-2 border-teal-500
      bg-white
      rounded-md
      md:flex
      justify-between
      relative
    "
  >
    <div class="w-4/5 space-y-4">
      <div class="text-xs font-extrabold absolute right-3 top-3">
        ID: {{ post.id.toString().slice(0, 3) }} / likes:
        {{ store.state.likes }}
      </div>
      <div class="text-2xl">
        <strong>Title:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>
    <!-- <hr class="mt-2"> -->
    <div class="md:space-y-2 space-x-2 md:space-x-0 md:flex flex-col self-end mt-3">
      <TheButton
        @click="router.push(`/posts/${post.id}`)"
        class="bg-green-500 text-white"
        >Open</TheButton
      >
      <TheButton @click="emit('remove', post)" class="bg-red-500 text-white"
        >Delete</TheButton
      >
      <TheButton class="bg-blue-500 text-white" @click="editPost">Edit</TheButton>
    </div>
  </div>
</template>
