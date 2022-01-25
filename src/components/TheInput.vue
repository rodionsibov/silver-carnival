<script setup>

defineProps({
  modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
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