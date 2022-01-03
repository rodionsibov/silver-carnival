<script setup>

defineProps({
  posts: Object
})

</script>

<template>
  <div class="p-3 space-y-4">
    <div class="p-5 border-2 border-teal-500" v-for="post in posts" :key="post.id">
      <div>
        <strong>Title:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
