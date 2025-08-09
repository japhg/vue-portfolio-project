<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";
import StarIcon from "./icons/StarIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import XMarkIcon from "./icons/XMarkIcon.vue";

const isMenuOpen = ref(false);

// Close mobile menu when clicking a link or resizing to desktop
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Add resize listener to close menu when resizing to desktop
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // change 50 to how far you want to scroll before changing bg
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Projects",
    url: "#project",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];
</script>

<template>
  <nav class="relative">
    <!-- Fixed Navigation Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-40"
      :class="
        isScrolled ? 'bg-primary/50' : ' bg-background/90  backdrop-blur-sm'
      "
    >
      <div
        class="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-5 md:px-10"
      >
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <p class="text-accent flex items-center gap-2">
            <StarIcon class="w-8 h-8" />
            <span class="font-medium">jphi</span>
          </p>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in links"
            :key="link.title"
            :href="link.url"
            class="relative px-2 py-1 text-[15px] text-secondary hover:text-accent transition-colors group"
          >
            {{ link.title }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            ></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-secondary hover:text-accent"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle Menu"
        >
          <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transform transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transform transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="isMenuOpen"
        class="fixed top-0 left-0 right-0 z-[100] md:hidden"
      >
        <!-- Menu content with background -->
        <div class="w-full bg-primary border-b border-secondary/10 shadow-lg">
          <!-- Logo and close button -->
          <div class="flex justify-between items-center p-4 bg-background">
            <RouterLink
              to="/"
              class="flex items-center gap-2"
              @click="closeMenu"
            >
              <p class="text-accent flex items-center gap-2">
                <StarIcon class="w-8 h-8" />
                <span class="font-medium">jphi</span>
              </p>
            </RouterLink>
            <button
              class="p-2 text-secondary hover:text-accent transition-colors"
              @click="closeMenu"
            >
              <XMarkIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Menu Items -->
          <nav class="bg-background/95 backdrop-blur-md">
            <div class="py-4">
              <a
                v-for="link in links"
                :key="link.title"
                :href="link.url"
                class="block group"
                @click="closeMenu"
              >
                <div
                  class="px-6 py-3 text-secondary hover:bg-accent/5 transition-colors duration-200"
                >
                  <span class="text-lg font-medium">{{ link.title }}</span>
                </div>
                <div class="mx-6 h-px bg-secondary/5"></div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </transition>
  </nav>
</template>
