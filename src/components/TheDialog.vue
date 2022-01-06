<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:show"]);

const hideDialog = () => {
  emit("update:show", false);
};
</script>

<template>
  <div
    @click="hideDialog"
    v-if="show"
    class="fixed inset-0 bg-black/30 flex items-center justify-center"
  >
    <div @click.stop class="bg-white rounded-md shadow-lg overflow-auto w-11/12 md:w-1/2">
      <slot></slot>
    </div>
  </div>
</template>