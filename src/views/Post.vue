<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="p-3 mt-4">
      <h1>This page has ID: {{ route.params.id }}</h1>
  </div>
</template>