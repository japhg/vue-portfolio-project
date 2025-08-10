<script setup lang="ts"></script>

<template>
  <div class="relative w-full max-w-7xl min-h-[80vh] flex items-center">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
    </div>

    <!-- Main Content -->
    <div class="relative w-full p-5">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="space-y-5">
          <h3
            class="inline-flex items-center gap-2 text-lg text-accent font-medium tracking-wide"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
          >
            <span class="w-10 h-px bg-accent"></span>
            James Philip Gomera
          </h3>

          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            I build things
            <span class="block mt-2">
              for the <span class="text-accent">web.</span>
            </span>
          </h1>

          <p
            class="text-muted text-lg md:text-xl max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            I'm a Full-Stack Web Developer with strong expertise in both
            front-end and back-end technologies. Experienced in building
            dynamic, responsive, and user-friendly web applications using modern
            frameworks.
          </p>
        </div>

        <!-- Actions -->
        <div
          class="flex flex-wrap items-center gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <a href="#project">
            <button
              class="group relative px-8 py-3 border border-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 hover:text-black hover:font-medium hover:shadow-lg hover:shadow-accent/20"
            >
              View My Work
              <div
                class="absolute inset-x-0 h-px bottom-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"
              ></div>
            </button>
          </a>
          <a
            href="#contact"
            class="px-6 py-3 text-muted hover:text-accent transition-colors duration-300"
          >
            Let's Connect →
          </a>
        </div>

        <!-- Tech Stack -->
        <div
          class="flex flex-wrap gap-2 mt-12"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="600"
        >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >Vue.js</span
          >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >Laravel</span
          >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >TypeScript</span
          >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >Nuxt.js</span
          >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >MySQL</span
          >
          <span class="px-3 py-1 bg-secondary/5 text-muted rounded-full text-sm"
            >TailwindCSS</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
