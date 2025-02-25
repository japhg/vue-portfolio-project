<template>
  <div
    class="w-full max-w-7xl flex justify-center text-center items-start flex-col gap-2"
  >
    <div class="relative w-full mb-0 md:mb-3">
      <h1 class="text-secondary text-4xl md:text-[83px] leading-snug font-light">
        JAMES PHILIP <span class="text-softGray">GOMERA</span>
      </h1>
    </div>

    <div>
      <p
        class="text-secondary text-sm md:text-lg font-light leading-relaxed"
      >
        A
        <strong class="font-bold text-secondary"
          >Full-Stack Web Developer</strong
        >
        with strong expertise in both front-end and back-end technologies.
        Experienced in building dynamic, responsive, and user-friendly web
        applications using modern frameworks.
      </p>
    </div>

    <div class="mt-6 w-full">
      <RouterLink to="/about" class="">
        <button
          class="text-secondary border border-secondary px-5 py-3 rounded-full font-light text-sm md:text-base hover:bg-secondary hover:text-white transition-colors"
        >
          <span class="flex items-center gap-1">
            About more
            <ArrowUpRightIcon class="w-3.5 h-3.5" />
          </span>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon.vue";
</script>
