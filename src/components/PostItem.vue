<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="p-5 border-2 border-teal-500">
    <div>
      <strong>Title:</strong>
      {{ post.title }}
    </div>
    <div>
      <strong>Description:</strong>
      {{ post.body }}
    </div>
    <hr class="mt-2">
    <div class="space-x-2 mt-4">
      <button>Delete</button>
      <button>Edit</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 5px;
  border: 2px solid teal;
}

button:hover {
    opacity: 0.8;
}
</style>