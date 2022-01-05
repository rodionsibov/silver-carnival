<script setup>
defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits(['update:modelValue'])

const updateInput = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" type="text" class="p-2" />
</template>