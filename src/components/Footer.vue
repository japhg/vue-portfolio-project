<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-10">
    <h4 class="text-xl font-medium text-center text-secondary">
      Social <span class="text-accent">Links:</span>
    </h4>
  </div>

  <div class="flex flex-wrap items-center gap-3 mt-3">
    <a
      href="https://www.facebook.com/Jpgomera19/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accent"
    >
      <FacebookIcon class="w-6 md:w-8 h-6 md:h-8 text-accent" />
    </a>

    <a
      href="https://github.com/japhg"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-accent text-muted"
    >
      <GithubIcon class="w-6 md:w-8 h-6 md:h-8" />
    </a>

    <a
      href="https://linkedin.com/in/james-philip-gomera-b5b345281"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-accent text-muted"
    >
      <LinkedinIcon class="w-6 md:w-8 h-6 md:h-8" />
    </a>

    <a
      href="https://t.me/jphigomera"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-accent text-muted"
    >
      <TelegramIcon class="w-6 md:w-8 h-6 md:h-8" />
    </a>

    <a
      href="https://www.upwork.com/freelancers/~0134531ce6db4c80f1"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-accent text-muted"
    >
      <UpworkIcon class="w-6 md:w-8 h-6 md:h-8" />
    </a>

    <a href="https://vb.me/letsChatOnViber" target="_blank">
      <ViberIcon class="w-6 md:w-8 h-6 md:h-8" />
    </a>
  </div>

  <div class="py-4 text-muted font-light text-sm text-center">
    <hr class="border-white/10 mb-4" />
    <p>© {{ year }} Jph<i>i</i> Portfolio. All rights Reserved.</p>
  </div>
</template>
<script setup lang="ts">
import FacebookIcon from "./icons/FacebookIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import TelegramIcon from "./icons/TelegramIcon.vue";
import UpworkIcon from "./icons/UpworkIcon.vue";
import ViberIcon from "./icons/ViberIcon.vue";

const year = new Date().getFullYear();
</script>
