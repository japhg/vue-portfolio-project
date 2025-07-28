<template>
  <div
    class="w-full max-w-7xl grid md:grid-cols-2 items-center justify-center gap-10 p-5"
  >
    <!-- Left side content -->
    <div class="flex flex-col gap-4 text-start order-2 md:order-1">
      <h3 class="text-lg text-accent font-roboto">James Philip Gomera</h3>
      <h1 class="text-secondary text-6xl font-bold">
        I build things for the web.
      </h1>
      <p class="text-muted text-lg max-w-xl">
        I'm a Full-Stack Web Developer with strong expertise in both front-end
        and back-end technologies. Experienced in building dynamic, responsive,
        and user-friendly web applications using modern frameworks.
      </p>

      <div class="mt-6 w-full" data-aos="fade-up" data-aos-duration="1000">
        <a href="#project" class="">
          <button
            class="text-accent border border-accent px-8 py-3 rounded-md font-medium text-sm hover:bg-accent/10 transition-colors"
          >
            Check out my work!
          </button>
        </a>
      </div>
    </div>

    <!-- Right side image -->
    <div
      class="flex-1 flex justify-center items-center order-1 md:order-2"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <!-- <img src="/images/laptop.png" alt="Laptop" class="w-full max-w-sm md:max-w-md lg:max-w-lg"> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>
