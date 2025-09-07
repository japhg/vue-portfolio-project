<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref, Transition, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import StarIcon from './icons/StarIcon.vue'
import MenuIcon from './icons/MenuIcon.vue'
import XMarkIcon from './icons/XMarkIcon.vue'
import links from '@/data/nav-links.json'
import MoonIcon from './icons/MoonIcon.vue'
import SunIcon from './icons/SunIcon.vue'
import { motion } from 'motion-v'

const route = useRoute()
const isMenuOpen = ref(false)
const activeSection = ref('#home')

// Close mobile menu when clicking a link or resizing to desktop
const closeMenu = () => {
    isMenuOpen.value = false
}

// Handle smooth scrolling to sections
const scrollToSection = (url: string) => {
    const targetId = url.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    closeMenu()
}

// Add resize listener to close menu when resizing to desktop
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu()
        }
    })
}

const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50

    const sections = links.map((link) => link.url.replace('#', ''))
    const scrollPosition = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
            activeSection.value = `#${sections[i]}`
            break
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const isDark = ref(true)

watchEffect(() => {
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
</script>

<template>
    <nav class="relative">
        <!-- Fixed Navigation Bar -->
        <div
            class="fixed top-0 left-0 right-0 z-40 border-b dark:border-none transition-colors duration-300"
            :class="
                isScrolled
                    ? 'bg-surface/90 dark:bg-background/50 backdrop-blur-lg border-secondary/10 '
                    : 'border-transparent'
            "
        >
            <div
                class="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-5 md:px-10"
            >
                <!-- Logo -->
                <a
                    href="#home"
                    @click.prevent="scrollToSection('#home')"
                    class="flex items-center gap-2 cursor-pointer"
                >
                    <p class="text-mint bg:text-accent flex items-center gap-2">
                        <StarIcon class="w-8 h-8" />
                        <span class="font-medium">jphi</span>
                    </p>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-8">
                    <a
                        v-for="link in links"
                        :key="link.title"
                        :href="link.url"
                        @click.prevent="scrollToSection(link.url)"
                        class="relative px-2 py-1 text-[15px] text-primary/90 hover:text-primary dark:text-secondary dark:hover:text-accent transition-colors group cursor-pointer"
                    >
                        {{ link.title }}
                        <span
                            class="absolute bottom-0 left-0 w-full h-0.5 bg-mint dark:bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                        />

                        <motion.div
                            v-if="activeSection === link.url"
                            class="absolute bottom-0 left-0 right-0 h-0.5 bg-mint dark:bg-accent"
                            layoutId="activeTab"
                            :animate="{
                                x: 0,
                                opacity: 1,
                            }"
                            :transition="{
                                default: { type: 'spring' },
                                opacity: { ease: 'linear' },
                                stiffness: 300,
                                damping: 30,
                            }"
                        />
                    </a>
                    <button type="button" @click="isDark = !isDark" aria-label="Toggle color mode">
                        <component
                            :is="isDark ? MoonIcon : SunIcon"
                            class="w-5 h-5 text-primary/80 hover:text-mint dark:text-secondary dark:hover:text-accent transition-colors duration-200 ease-in-out"
                        />
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    class="md:hidden p-2 text-primary/80 dark:text-secondary hover:text-accent"
                    @click="isMenuOpen = !isMenuOpen"
                    aria-label="Toggle Menu"
                >
                    <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
                    <XMarkIcon v-else class="w-6 h-6" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <transition
            enter-active-class="transform transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transform transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div v-show="isMenuOpen" class="fixed top-0 left-0 right-0 z-[100] md:hidden">
                <!-- Menu content with background -->
                <div
                    class="w-full bg-surface/90 dark:bg-background border-b border-secondary/10 dark:border-none shadow-lg"
                >
                    <!-- Logo and close button -->
                    <div class="flex justify-between items-center p-4 bg-background">
                        <RouterLink to="/" class="flex items-center gap-2" @click="closeMenu">
                            <p class="text-mint dark:text-accent flex items-center gap-2">
                                <StarIcon class="w-8 h-8" />
                                <span class="font-medium">jphi</span>
                            </p>
                        </RouterLink>
                        <button
                            class="p-2 text-primary dark:text-secondary hover:text-mint dark:hover:text-accent transition-colors"
                            @click="closeMenu"
                        >
                            <XMarkIcon class="w-6 h-6" />
                        </button>
                    </div>

                    <!-- Menu Items -->
                    <nav class="bg-background/95 backdrop-blur-md">
                        <button
                            type="button"
                            @click="isDark = !isDark"
                            aria-label="Toggle color mode"
                            class="flex gap-2 place-items-center px-5 py-4 w-full h-auto hover:bg-accent/10"
                        >
                            <component
                                :is="isDark ? MoonIcon : SunIcon"
                                class="w-5 h-5 text-primary/80 hover:text-mint dark:text-secondary dark:hover:text-accent transition-colors duration-200 ease-in-out"
                            />
                            {{ isDark ? 'Dark' : 'Light' }} Mode
                        </button>
                        <div class="">
                            <a
                                v-for="link in links"
                                :key="link.title"
                                :href="link.url"
                                class="block group"
                                @click.prevent="scrollToSection(link.url)"
                            >
                                <div
                                    class="px-6 py-3 text-primary dark:text-secondary hover:bg-accent/10 transition-colors duration-200"
                                >
                                    <span class="text-lg font-medium">{{ link.title }}</span>
                                </div>
                                <div class="mx-6 h-px bg-secondary/5"></div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </transition>
    </nav>
</template>
