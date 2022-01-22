<script setup>
import TheButton from "./../components/TheButton.vue";
import { ref, computed, reactive } from "vue";

const selected = ref(null);
const searchInput = ref("");

const options = reactive([
  {
    title: "Title 1",
    text: "1 - A Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.",
    id: 1,
  },
  {
    title: "Title 2",
    text: "2 - B Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.",
    id: 2,
  },
  {
    title: "Title 3",
    text: "3 - C Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.",
    id: 3,
  },
]);

const setId = (id) => {
  selected.value = id;
};

const filteredOptions = computed(() => {
  return filteredText.value.filter((item) =>
    item.text.includes(searchInput.value)
  );
});

const filteredText = computed(() => {
  return options.filter((item) => item.id === selected.value);
});
</script>

<template>
  
  <div class="flex gap-5 justify-center p-5">
    <router-link to="" class="text-center font-bold">Step 1</router-link>
    <router-link to="" class="text-center">Step 2</router-link>
    <router-link to="" class="text-center">Step 3</router-link>
  </div>

  <div class="flex gap-2 p-4 h-[400px]">
    <div class="p-5 space-y-2 bg-gray-200 w-1/2 rounded">
      <input
        type="text"
        placeholder="Search..."
        class="border p-2 rounded"
        v-model.number="searchInput"
      />
      <div
        class="hover:bg-gray-300 p-2 rounded"
        :class="{ 'bg-green-400': option.id === selected }"
        v-for="option in options"
        :key="option.id"
      >
        <div class="flex gap-4 items-center">
          <input type="checkbox" />
          <button class="w-full text-left" @click="setId(option.id)">
            {{ option.title }}
          </button>
        </div>
      </div>
    </div>
    <div class="p-5 space-y-2 bg-gray-200 w-1/2 rounded overflow-y-scroll">
      <div class="">
        <div
          v-for="option in filteredOptions"
          :key="option.id"
          class="space-y-4"
        >
          <div
            class="flex gap-4 items-center hover:bg-gray-300 p-2 rounded"
            v-for="item in 9"
            :key="item"
          >
            <input type="checkbox" />
            {{ option.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.route-link-active {
  font-weight: bold;
}
</style>