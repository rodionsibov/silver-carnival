<script setup>
import TheButton from './TheButton.vue'

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="p-5 border-2 border-teal-500 flex items-center justify-between">
    <div>
        <div>
          <strong>Title:</strong>
          {{ post.title }}
        </div>
        <div>
          <strong>Description:</strong>
          {{ post.body }}
        </div>
    </div>
    <!-- <hr class="mt-2"> -->
    <div class="space-x-2">
        <TheButton class="bg-red-500 text-white">Delete</TheButton>
        <TheButton class="bg-blue-500 text-white">Edit</TheButton>
    </div>
  </div>
</template>
