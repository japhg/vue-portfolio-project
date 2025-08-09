<script setup lang="ts">
import StarIcon from "../icons/StarIcon.vue";
</script>

<template>
  <div class="w-full h-full flex items-center justify-between">
    <div class="max-w-3xl">
      <div class="flex items-center gap-10">
        <div class="text-secondary flex flex-col gap-5">
          <div class="flex gap-3 items-center">
            <StarIcon class="w-5 h-5 text-accent" />
            <h1
              class="w-full flex flex-col md:flex-row md:gap-3 text-xl md:text-3xl font-normal"
            >
              My Journey Into <span class="text-muted">Web Development</span>
            </h1>
          </div>
          <div class="flex flex-col gap-5">
            <p class="text-muted text-sm md:text-lg">
              My journey into web development began in college, where I was
              introduced to the basics of front-end and back-end technologies. I
              discovered a passion for creating dynamic, user-friendly websites
              and decided to pursue it as a career.
            </p>
            <p class="text-muted text-sm md:text-lg">
              After graduating, I dedicated myself to mastering modern
              frameworks and tools, continuously learning and adapting to the
              ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
