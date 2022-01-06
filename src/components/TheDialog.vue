<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const show = reactive({
  dialog: true,
});

const hideDialog = () => {
  show.dialog = !show.dialog;
};
</script>

<template>
  <div
    @click="hideDialog"
    v-if="show"
    class="fixed inset-0 bg-black/30 flex items-center justify-center"
  >
    <div class="bg-white rounded-md shadow-lg overflow-auto w-11/12 md:w-1/2">
      <slot></slot>
    </div>
  </div>
</template>