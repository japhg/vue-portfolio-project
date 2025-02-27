<template>
  <div class="w-full max-w-5xl my-20 flex flex-col gap-14">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light animate__animated animate__fadeInUp">
      About <span class="text-softGray">Me</span>
    </h1>

    <p
      class="text-secondary font-light text-sm md:text-base tracking-wide leading-relaxed"
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
          class="text-secondary border border-secondary px-5 py-3 mt-5 rounded-full font-light text-sm md:text-base hover:bg-secondary hover:text-white transition-colors"
        >
          <span class="flex items-center gap-1 text-sm">
            <ArrowUpLeftIcon class="w-3 h-3" />
            Back to Home
          </span>
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
import ArrowUpLeftIcon from "@/components/icons/ArrowUpLeftIcon.vue";
</script>
