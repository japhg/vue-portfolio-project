<script setup lang="ts">
import About from '@/components/Home/About.vue'
import GetInTouch from '@/components/Home/GetInTouch.vue'
import Home from '@/components/Home/Home.vue'
import Projects from '@/components/Home/Projects.vue'
import Skills from '@/components/Home/Skills.vue'
import WorkExperience from '@/components/Home/WorkExperience.vue'
import Chatbot from '@/components/Chatbot.vue'
import { motion, useScroll } from 'motion-v'
import { Analytics } from '@vercel/analytics/vue'

const { scrollYProgress } = useScroll()

const scrollIndicator = {
    scaleX: scrollYProgress,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    originX: 0,
    backgroundColor: '#0ABAB5',
}
</script>

<template>
    <Analytics mode="auto" />

    <div class="w-full">
        <motion.div id="scroll-indicator" :style="scrollIndicator" />

        <main class="main-content">
            <Home />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <GetInTouch />
        </main>

        <!-- Chatbot -->
        <Chatbot />
    </div>
</template>
