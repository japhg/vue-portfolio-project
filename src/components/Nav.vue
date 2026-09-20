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

const isDark = ref(false)

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
            class="w-full transition-colors duration-300"
            :class="
                isScrolled
                    ? 'bg-transparent'
                    : 'border-transparent'
            "
        >
            <div
                class="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-5"
            >
                <!-- Logo -->
                <a
                    href="#home"
                    @click.prevent="scrollToSection('#home')"
                    class="flex items-center gap-2 cursor-pointer"
                >
                    <p class="text-primary dark:text-secondary flex items-center gap-2">
                        <span
                            class="grid h-9 w-9 place-items-center rounded-full border border-secondary/10 bg-surface/80 shadow-sm backdrop-blur"
                        >
                            <StarIcon class="w-5 h-5 text-mint" />
                        </span>
                        <span class="font-semibold tracking-wide">jphi</span>
                    </p>
                </a>

                <!-- Desktop Menu -->
                <div
                    class="hidden md:flex items-center gap-1 rounded-full border border-secondary/10 bg-surface/70 p-1 shadow-sm backdrop-blur-xl dark:bg-surface/60"
                >
                    <a
                        v-for="link in links"
                        :key="link.title"
                        :href="link.url"
                        @click.prevent="scrollToSection(link.url)"
                        class="motion-pill relative rounded-full px-4 py-2 text-sm font-medium group cursor-pointer"
                        :class="
                            activeSection === link.url
                                ? 'text-surface dark:text-background'
                                : 'text-primary/70 hover:text-primary dark:text-secondary dark:hover:text-white'
                        "
                    >
                        {{ link.title }}
                        <span class="hidden" />

                        <motion.div
                            v-if="activeSection === link.url"
                            class="absolute inset-0 -z-10 rounded-full bg-primary dark:bg-secondary"
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
                    <button
                        type="button"
                        @click="isDark = !isDark"
                        aria-label="Toggle color mode"
                        class="motion-pill ml-1 rounded-full border border-secondary/10 bg-background/70 p-2 hover:bg-primary/5 dark:hover:bg-secondary/10"
                    >
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
                    class="w-full bg-surface/95 dark:bg-background border-b border-secondary/10 dark:border-secondary/10"
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
