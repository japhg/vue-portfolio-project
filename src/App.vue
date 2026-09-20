<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, onUnmounted, ref } from 'vue'

AOS.init()

const isScrolled = ref(false)
const mouseX = ref('50%')
const mouseY = ref('20%')
let animationFrame = 0

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const handlePointerMove = (event: PointerEvent) => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }

    animationFrame = requestAnimationFrame(() => {
        mouseX.value = `${Math.round((event.clientX / window.innerWidth) * 100)}%`
        mouseY.value = `${Math.round((event.clientY / window.innerHeight) * 100)}%`
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('pointermove', handlePointerMove)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('pointermove', handlePointerMove)

    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
})
</script>

<template>
    <div
        class="premium-shell bg-background min-h-screen relative overflow-hidden"
        :style="{ '--mouse-x': mouseX, '--mouse-y': mouseY }"
    >
        <div class="relative z-10">
            <header
                class="w-full fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-50"
                :class="
                    isScrolled
                        ? 'bg-surface/70 dark:bg-background/70 backdrop-blur-2xl border-b border-secondary/10'
                        : 'bg-transparent'
                "
            >
                <Nav />
            </header>

            <div class="selection:bg-mint selection:text-background">
                <RouterView v-slot="{ Component }">
                    <Transition name="page" mode="out-in">
                        <component :is="Component" />
                    </Transition>
                </RouterView>
            </div>

            <Footer />
        </div>
    </div>
</template>
