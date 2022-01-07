<script setup>

defineProps({
    modelValue: {
        type: String
    },
    options: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
    <select name="" id="" v-model="modelValue">
        <option value="" disabled>Select from the list</option>
        <option value="" >Select from the list</option>
    </select>
</template>