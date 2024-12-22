<template>
  <div
    class="w-full max-w-7xl flex justify-center text-center items-start flex-col gap-5"
  >
    <div class="relative w-full mb-0 md:mb-20">
      <h1
        class="text-secondary text-4xl md:text-[83px] leading-snug font-extrabold"
      >
        JAMES PHILIP GOMERA
      </h1>
    </div>

    <div>
      <p
        class="text-secondary text-sm md:text-[19px] font-light leading-relaxed"
      >
        A
        <strong class="font-bold">Full-Stack Web Developer</strong>
        with strong expertise in both front-end and back-end technologies.
        Experienced in building dynamic, responsive, and user-friendly web
        applications using modern frameworks.
      </p>
    </div>

    <div class="mt-6 w-full">
      <RouterLink to="/about" class="">
        <button
          class="text-secondary border border-secondary px-10 py-1 rounded-xl font-bold text-sm md:text-base"
        >
          <ArrowRight class="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowRight from "../icons/ArrowRight.vue";
</script>
