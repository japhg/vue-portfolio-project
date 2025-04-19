<script setup lang="ts">
import StarIcon from "../icons/StarIcon.vue";
</script>

<template>
  <div class="text-secondary flex flex-col gap-5">
    <h1
      class="flex gap-2 items-center text-lg md:text-2xl uppercase font-medium"
    >
      <StarIcon class="w-5 h-5" />
      <p>First Professional <span class="text-softGray">Experience</span></p>
    </h1>

    <p class="text-secondary text-sm md:text-lg tracking-wider leading-loose">
      Thanks to strong fundamentals in PHP and solid capstone projects, I was
      able to translate ideas into working, user-friendly solutions. I worked
      on:
    </p>

    <ul
      class="list-item list-disc ml-10 text-secondary text-sm md:text-lg tracking-wider leading-loose"
    >
      <li>Room Reservation System with push notifications</li>
      <li>Clinic Management System</li>
      <li>A full Training Management System</li>
    </ul>

    <p class="text-secondary text-sm md:text-lg tracking-wider leading-loose">
      But my biggest impact? Leading the development of the HR Management
      System, which streamlined internal processes and boosted efficiency.
    </p>
  </div>
</template>
