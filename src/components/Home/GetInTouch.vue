<script setup lang="ts">
import EnvelopeIcon from "../icons/EnvelopeIcon.vue";
</script>

<template>
  <div class="w-full max-w-7xl flex flex-col text-center gap-5">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light">
      Get <span class="text-softGray">in touch</span>
    </h1>

    <p class="text-secondary font-light text-sm md:text-base tracking-wide">
      Feel free to reach out if you have any questions, ideas, or opportunities
      you'd like to discuss. I'm always open to new collaborations and would
      love to hear from you. Get in touch, and let's connect!
    </p>

    <div class="mt-6 w-full">
      <a
        href="mailto:jpgomera19@gmail.com"
        target="_blank"
        class="text-secondary border border-secondary px-5 py-3 rounded-full font-light text-sm md:text-base hover:bg-secondary hover:text-white transition-colors"
      >
          Send an email 
      </a>
    </div>
  </div>
</template>
