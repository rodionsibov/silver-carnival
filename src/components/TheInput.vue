<script setup>
// import { useStore } from "vuex";
// import { computed } from "vue";

// const store = useStore();

// const searchQuery = computed(() => {
//   return {
//     get() {
//       return store.state.post.searchQuery;
//     },
//     set(value) {
//       store.commit("post/setSearchQuery", value);
//     },
//   };
// });



defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <!-- <input
    :value="store.state.post.searchQuery"
    @input="store.commit('post/setSearchQuery', $event.target.value)"
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
  /> -->
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