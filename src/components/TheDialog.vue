<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-green-800/80 flex items-center justify-center">
    <div class="bg-white rounded-md overflow-auto w-11/12 md:w-1/2">
        <slot></slot>
    </div>
  </div>
</template>