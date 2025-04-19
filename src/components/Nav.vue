<script setup lang="ts">
import { RouterLink } from "vue-router";
import StarIcon from "./icons/StarIcon.vue";

const links = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Project",
    url: "#project",
  },
];
</script>

<template>
  <div
    class="w-full flex flex-row justify-between items-center gap-10 mt-5 px-10"
  >
    <RouterLink to="/" class="flex items-center gap-2">
      <StarIcon />
      <span class="font-semibold text-secondary">Jph<i>i</i> </span>
    </RouterLink>
    <div class="flex gap-5">
      <div v-for="link in links">
        <a :href="link.url" class="text-lg font-light px-5">
          <span class="text-base md:text-lg font-light text-softGray">
            {{ link.title }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
