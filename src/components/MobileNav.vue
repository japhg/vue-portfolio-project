<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  show: boolean;
}>();

const links = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Projects",
    url: "#project",
  },
];
</script>

<template>
  <div
    v-if="show"
    class="md:hidden w-full h-fit py-2 inset-0 bg-primary flex flex-col justify-center items-center gap-4"
  >
    <template v-for="link in links">
      <a
        v-if="link.url != null"
        :href="link.url"
        class="my-1 leading-5 font-light"
      >
        {{ link.title }}
      </a>
    </template>
  </div>
</template>
