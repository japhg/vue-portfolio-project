<template>
  <div class="w-full max-w-7xl flex flex-col text-start items-start">
    <div class="relative w-auto">
      <h1
        class="typewriter text-mediumGray text-xl md:text-[40px] leading-snug font-light"
      >
        Hello. I am James Philip Gomera
      </h1>
    </div>

    <div>
      <p
        class="text-secondary text-xl md:text-[40px] font-light leading-relaxed md:leading-tight"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I'm a
        <span class="text-softGray">Full-Stack Web Developer</span>
        with strong expertise in both front-end and back-end technologies.
        Experienced in building dynamic, responsive, and user-friendly web
        applications using modern frameworks.
      </p>
    </div>

    <div class="mt-6 w-full" data-aos="fade-up" data-aos-duration="1000">
      <a href="#project" class="">
        <button
          class="text-secondary border border-softGray px-5 py-2 rounded-md font-medium text-xs hover:bg-secondary hover:text-white transition-colors"
        >
          <span class="flex items-center gap-1 uppercase">
            View My Works
            <ArrowUpRightIcon class="w-3.5 h-3.5" />
          </span>
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon.vue";
</script>
<style>
.typewriter {
  overflow: hidden;
  border-right: 0.15em solid #999;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink 0.75s step-end infinite;
  width: fit-content;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #999;
  }
}
</style>
