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
              First Professional <span class="text-muted">Experience</span>
            </h1>
          </div>
          <div class="flex flex-col gap-5">
            <p class="text-muted text-sm md:text-lg">
              My first role as a Full-Stack Web Developer at PCN Promopro Inc.
              was a game-changer. I was part of a team that built systems to
              improve the company's operations. I contributed to several key
              projects, including:
            </p>
            <ul class="flex flex-col gap-2">
              <li
                class="list-item list-disc ml-10 text-muted text-sm md:text-lg"
              >
                A Room Reservation System with real-time push notifications
              </li>
              <li
                class="list-item list-disc ml-10 text-muted text-sm md:text-lg"
              >
                A comprehensive Training Management System
              </li>
              <li
                class="list-item list-disc ml-10 text-muted text-sm md:text-lg"
              >
                An efficient Clinic Management System
              </li>
            </ul>
            <p class="text-muted text-sm md:text-lg">
              My most significant contribution was leading the development of
              the Human Resource Management System (HRMS), which streamlined
              everything from hiring to employee management.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
