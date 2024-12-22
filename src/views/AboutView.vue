<template>
  <div class="w-full max-w-5xl my-20 flex flex-col gap-14">
    <h1 class="text-secondary text-2xl md:text-[60px] leading-2 font-semibold">
      About
    </h1>

    <p
      class="text-secondary font-light text-sm md:text-[19px] tracking-wide leading-relaxed"
    >
      <strong class="font-bold">James Philip Gomera</strong> is a full-stack web
      developer who currently based in the Philippines. He graduated with a
      Bachelor’s degree in Information Technology, majoring in Information
      Management, from Bestlink College of the Philippines.
    </p>

    <HowHeFound />

    <FirstProfessionalExperience />

    <ExploringFrameworks />

    <div class="mt-6">
      <RouterLink to="/">
        <button
          class="text-secondary border border-secondary px-5 md:px-10 py-1 rounded-xl font-bold text-sm md:text-base"
        >
          <ArrowLeft class="w-8 md:w-10" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import ExploringFrameworks from "@/components/About/ExploringFrameworks.vue";
import FirstProfessionalExperience from "@/components/About/FirstProfessionalExperience.vue";
import HowHeFound from "@/components/About/HowHeFound.vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
</script>
