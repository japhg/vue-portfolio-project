<script setup lang="ts">
import StarIcon from "../icons/StarIcon.vue";
</script>

<template>
  <div class="w-full h-full flex items-center justify-between">
    <div class="flex items-center gap-10">
      <div class="text-secondary flex flex-col gap-5">
        <div class="flex gap-3 items-center">
          <StarIcon class="w-5 h-5 text-accent" />
          <h1 class="flex flex-col text-4xl font-light">
            Working With
            <span class="text-muted">Frameworks</span>
          </h1>
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-muted text-sm md:text-lg">
            To build modern, scalable web applications, I specialize in a
            variety of powerful frameworks. On the front-end, I primarily work
            with Vue.js and Nuxt.js, which allow me to create reactive,
            component-based user interfaces.
          </p>
          <p class="text-muted text-sm md:text-lg">
            For the back-end, my expertise is in Laravel, a robust PHP framework
            that enables me to build secure and efficient APIs and server-side
            logic. I also leverage Inertia.js to seamlessly connect my Laravel
            back-end with a Vue.js front-end, creating a monolithic, full-stack
            application with the feel of a single-page app.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
