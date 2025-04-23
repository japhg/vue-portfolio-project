<template>
  <div class="w-full max-w-6xl">
    <main class="flex flex-col gap-10">
      <section class="flex justify-center items-center h-screen px-5">
        <div class="flex flex-col justify-center items-center gap-10">
          <Home />
          <div></div>
        </div>
      </section>

      <section class="flex justify-center items-center px-5">
          <UserQuote />
      </section>

      <section class="flex h-full mb-20 px-5" id="about">
        <div class="flex flex-col">
          <About />
          <Skills />
        </div>
      </section>

      <section class="h-full px-5">
        <div class="w-full flex justify-center items-center">
          <WorkExperience />
        </div>
      </section>

      <section class="h-full px-5" id="project">
        <div class="w-full flex justify-center items-center">
          <Projects />
        </div>
      </section>

      <section class="h-fit my-28 px-5">
        <GetInTouch />
      </section>

      <hr class="border-softBlack" />
    </main>
  </div>
</template>
<script setup lang="ts">
import About from "@/components/Home/About.vue";
import GetInTouch from "@/components/Home/GetInTouch.vue";
import Home from "@/components/Home/Home.vue";
import Projects from "@/components/Home/Projects.vue";
import Skills from "@/components/Home/Skills.vue";
import UserQuote from "@/components/Home/UserQuote.vue";
import WorkExperience from "@/components/Home/WorkExperience.vue";
</script>
