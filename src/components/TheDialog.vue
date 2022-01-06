<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-green-800/80 pt-10">
    <slot></slot>
  </div>
</template>