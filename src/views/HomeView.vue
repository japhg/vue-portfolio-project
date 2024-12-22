<template>
  <div class="w-full max-w-2xl px-6 lg:max-w-7xl">
    <main>
      <section class="flex items-center h-screen">
        <div class="flex flex-wrap justify-center items-center gap-10">
          <Home />
        </div>
      </section>

      <section class="h-full mb-28">
        <div class="w-full flex justify-center items-center">
          <Skills />
        </div>
      </section>

      <section class="h-full">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div class="w-full flex justify-center items-center">
            <WorkExperience />
          </div>
        </div>
      </section>

      <section class="h-fit my-28">
        <GetInTouch />
      </section>

      <hr class="border-softBlack" />
    </main>
  </div>
</template>
<script setup lang="ts">
import GetInTouch from "@/components/Home/GetInTouch.vue";
import Home from "@/components/Home/Home.vue";
import Skills from "@/components/Home/Skills.vue";
import WorkExperience from "@/components/Home/WorkExperience.vue";
</script>
