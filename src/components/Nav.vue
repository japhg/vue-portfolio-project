<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";
import XMarkIcon from "./icons/XMarkIcon.vue";
import MobileNav from "./MobileNav.vue";

const displayMenu = ref(false);
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/project",
  },
];
</script>

<template>
  <div class="w-full flex justify-center items-center gap-10 font-sans">
    <div v-for="link in links" class="hidden md:block">
      <RouterLink :to="link.url" class="text-lg font-medium">
        <span class="text-lg font-medium">
          {{ link.title }}
        </span>
      </RouterLink>
    </div>
  </div>

  <div class="w-full flex justify-end items-center gap-10 font-sans">
    <div class="block md:hidden">
      <button @click="displayMenu = !displayMenu" class="z-50 lg:hidden">
        <MenuIcon v-if="!displayMenu" />
        <XMarkIcon v-else />
      </button>
    </div>
  </div>

  <MobileNav :show="displayMenu" />
</template>
