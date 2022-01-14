<script setup>
import { useRouter } from "vue-router";
import TheButton from "./TheButton.vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const router = useRouter()
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
    <div class="basis-8/12 space-y-4">
      <div
        class="
          text-xs
          font-bold
          bg-yellow-600
          text-white
          w-8
          h-8
          flex
          items-center
          justify-center
          rounded-full
          absolute right-3 top-3
        "
      >
        {{ post.id.toString().slice(0, 3) }}
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
    <div class="space-x-2 self-end mt-3">
      <TheButton @click="router.push(`/posts/${post.id}`)" class="bg-green-500 text-white"
        >Open</TheButton
      >
      <TheButton @click="emit('remove', post)" class="bg-red-500 text-white"
        >Delete</TheButton
      >
      <TheButton class="bg-blue-500 text-white">Edit</TheButton>
    </div>
  </div>
</template>
