<template>
  <div class="w-full max-w-2xl mx-auto relative text-center">
    <transition-group name="fade" mode="out-in">
      <p
        :key="quotes[currentIndex]"
        class="text-lg md:text-xl italic text-gray-700 absolute inset-0"
      >
        "{{ quotes[currentIndex] }}"
      </p>
    </transition-group>

    <!-- Controls (optional) -->
    <div class="flex justify-center mt-10 pt-10 gap-2">
      <span
        v-for="(quote, index) in quotes"
        :key="index"
        @click="currentIndex = index"
        class="w-2 h-2 rounded-full cursor-pointer text-pink-500"
        :class="{
          'bg-blue-600': index === currentIndex,
          'bg-gray-300': index !== currentIndex,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const quotes = [
  "You’re not just a visitor — you’re the vibe.",
  "Like a minimal site, your beauty needs no extras.",
  "Creating is fun, but sharing it with you makes it meaningful.",
];

const currentIndex = ref(0);
let interval: any | null = null;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % quotes.length;
  }, 5000); 
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
