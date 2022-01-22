<script setup>
defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="
      w-full
      py-1
      px-2
      border
      rounded
      bg-transparent
      text-white
      placeholder:italic
      focus:border-green-500 focus:outline-none
      placeholder:text-sm
    "
  />
</template>