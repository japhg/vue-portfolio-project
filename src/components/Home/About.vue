<script setup lang="ts">
import ExploringFrameworks from "../About/ExploringFrameworks.vue";
import FirstProfessionalExperience from "../About/FirstProfessionalExperience.vue";
import HowHeFound from "../About/HowHeFound.vue";
</script>

<template>
  <div class="w-full max-w-7xl mt-20">
    <!-- Hero Section -->
    <div
      class="relative overflow-hidden rounded-2xl bg-secondary/5 p-8 md:p-12 mb-16"
    >
      <div class="relative z-10">
        <h1
          class="text-secondary text-3xl md:text-5xl leading-tight font-medium mb-6"
        >
          About <span class="text-accent">Me</span>
        </h1>

        <div class="max-w-3xl space-y-6">
          <p class="text-muted text-lg md:text-xl leading-relaxed">
            I am a passionate
            <span class="text-accent font-medium"
              >full-stack web developer</span
            >
            based in the Philippines, dedicated to creating elegant solutions to
            complex problems.
          </p>
          <p class="text-muted text-lg md:text-xl leading-relaxed">
            With a
            <span class="text-secondary font-medium"
              >Bachelor's degree in Information Technology</span
            >, major in Information Management from Bestlink College of
            the Philippines, I bring a solid foundation in both theory and
            practice to my development work.
          </p>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="p-4 bg-secondary/10 rounded-lg">
            <div class="text-accent text-2xl md:text-3xl font-bold">2+</div>
            <div class="text-muted text-sm mt-1">Years Experience</div>
          </div>
          <div class="p-4 bg-secondary/10 rounded-lg">
            <div class="text-accent text-2xl md:text-3xl font-bold">10+</div>
            <div class="text-muted text-sm mt-1">Projects Completed</div>
          </div>
          <div class="p-4 bg-secondary/10 rounded-lg">
            <div class="text-accent text-2xl md:text-3xl font-bold">5+</div>
            <div class="text-muted text-sm mt-1">Happy Clients</div>
          </div>
          <div class="p-4 bg-secondary/10 rounded-lg">
            <div class="text-accent text-2xl md:text-3xl font-bold">3+</div>
            <div class="text-muted text-sm mt-1">Companies Worked</div>
          </div>
        </div>
      </div>

      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div
          class="w-full h-full bg-gradient-to-bl from-accent to-transparent"
        ></div>
      </div>
    </div>

    <!-- Journey Sections -->
    <div class="space-y-16">
      <div
        class="transform hover:scale-[1.01] transition-transform duration-300"
      >
        <HowHeFound data-aos="fade-up" />
      </div>

      <div
        class="transform hover:scale-[1.01] transition-transform duration-300"
      >
        <FirstProfessionalExperience data-aos="fade-up" />
      </div>

      <div
        class="transform hover:scale-[1.01] transition-transform duration-300"
      >
        <ExploringFrameworks data-aos="fade-up" />
      </div>
    </div>
  </div>
</template>
