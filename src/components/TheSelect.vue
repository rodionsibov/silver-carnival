<script setup>
defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue'])

const changeOption = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select class="px-2 py-1 border-2 border-white rounded" v-model="modelValue" @change="changeOption">
    <option value="" disabled>Select from the list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>