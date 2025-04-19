<script setup lang="ts">
import ExploringFrameworks from '../About/ExploringFrameworks.vue';
import FirstProfessionalExperience from '../About/FirstProfessionalExperience.vue';
import HowHeFound from '../About/HowHeFound.vue';

</script>

<template>
  <div class="w-full max-w-5xl my-20 flex flex-col gap-14">
    <h1
      class="text-secondary text-2xl md:text-5xl leading-2 font-light"
    >
      About
    </h1>

    <p
      class="text-secondary text-sm md:text-lg tracking-wider leading-loose"
    >
      I am a full-stack web
      developer who currently based in the Philippines. He graduated with a
      Bachelor’s degree in Information Technology, majoring in Information
      Management, from Bestlink College of the Philippines.
    </p>

    <HowHeFound data-aos="fade-right" data-aos-delay="0"/>
    <FirstProfessionalExperience data-aos="fade-right" data-aos-delay="100"/>
    <ExploringFrameworks data-aos="fade-right" data-aos-delay="200"/>
  </div>
</template>
