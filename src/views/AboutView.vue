<script setup lang="ts">
import ExploringFrameworks from "@/components/About/ExploringFrameworks.vue";
import FirstProfessionalExperience from "@/components/About/FirstProfessionalExperience.vue";
import HowHeFound from "@/components/About/HowHeFound.vue";
</script>

<template>
  <main>
    <div class="w-full max-w-5xl my-20 flex flex-col gap-14">
      <h1
        class="text-secondary text-2xl md:text-5xl leading-2 font-light animate__animated animate__fadeInUp"
      >
        About <span class="text-accent">Me</span>
      </h1>

      <p
        class="text-muted font-light text-sm md:text-base tracking-wide leading-relaxed"
      >
        <strong class="font-bold text-secondary">James Philip Gomera</strong> is
        a full-stack web developer who currently based in the Philippines. He
        graduated with a Bachelor's degree in Information Technology, majoring
        in Information Management, from Bestlink College of the Philippines.
      </p>

      <HowHeFound />

      <FirstProfessionalExperience />

      <ExploringFrameworks />

      <a
        href="/"
        class="text-accent border border-accent px-5 py-3 mt-5 rounded-full font-light text-sm md:text-base hover:bg-accent/10 transition-colors self-start"
      >
        Back to Home
      </a>
    </div>
    <Footer />
  </main>
</template>
