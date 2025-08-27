<script setup lang="ts">
import About from '@/components/Home/About.vue'
import GetInTouch from '@/components/Home/GetInTouch.vue'
import Home from '@/components/Home/Home.vue'
import Projects from '@/components/Home/Projects.vue'
import Skills from '@/components/Home/Skills.vue'
import WorkExperience from '@/components/Home/WorkExperience.vue'
</script>

<template>
    <div class="w-full max-w-6xl">
        <main class="flex flex-col gap-10">
            <Home />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <GetInTouch />

            <hr class="border-secondary/10" />
        </main>
    </div>
</template>
