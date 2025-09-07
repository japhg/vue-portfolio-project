<script setup lang="ts">
import About from '@/components/Home/About.vue'
import GetInTouch from '@/components/Home/GetInTouch.vue'
import Home from '@/components/Home/Home.vue'
import Projects from '@/components/Home/Projects.vue'
import Skills from '@/components/Home/Skills.vue'
import WorkExperience from '@/components/Home/WorkExperience.vue'
import Chatbot from '@/components/Chatbot.vue'
import { motion, useScroll } from 'motion-v'

const { scrollYProgress } = useScroll()

const scrollIndicator = {
    scaleX: scrollYProgress,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    originX: 0,
    backgroundColor: "#0ABAB5",
}
</script>

<template>
    <div class="w-full max-w-6xl">
        <motion.div id="scroll-indicator" :style="scrollIndicator" />

        <main class="flex flex-col gap-10 main-content">
            <Home />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <GetInTouch />

            <hr class="border-secondary/10" />
        </main>
        
        <!-- Chatbot -->
        <Chatbot />
    </div>
</template>
