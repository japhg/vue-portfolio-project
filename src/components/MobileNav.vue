<script setup lang="ts">
import { RouterLink } from "vue-router";
import links from "@/data/nav-links.json";

const props = defineProps<{
  show: boolean;
}>();
</script>

<template>
  <div
    v-if="props.show"
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
