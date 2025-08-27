<script setup lang="ts">
import SkillSet from './Partials/SkillSet.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
import InertiajsIcon from '@/components/icons/InertiajsIcon.vue'
import TailwindIcon from '@/components/icons/TailwindIcon.vue'
import LaravelIcon from '@/components/icons/LaravelIcon.vue'
import BootstrapIcon from '@/components/icons/BootstrapIcon.vue'
import PhpIcon from '@/components/icons/PhpIcon.vue'
import GitIcon from '@/components/icons/GitIcon.vue'
import MysqlIcon from '@/components/icons/MysqlIcon.vue'
import NuxtIcon from '@/components/icons/NuxtIcon.vue'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import FilamentIcon from '../icons/FilamentIcon.vue'
import NovaIcon from '../icons/NovaIcon.vue'
import FirebaseIcon from '../icons/FirebaseIcon.vue'

// Frontend Skills
const frontendSkills = [
    {
        website: 'https://vuejs.org/',
        icon: VueIcon,
        title: 'Vue.js',
    },
    {
        website: 'https://nuxt.com/',
        icon: NuxtIcon,
        title: 'Nuxt',
    },
    {
        website: 'https://tailwindcss.com/',
        icon: TailwindIcon,
        title: 'Tailwind',
    },
    {
        website: 'https://getbootstrap.com/',
        icon: BootstrapIcon,
        title: 'Bootstrap',
    },
]

// Backend Skills
const backendSkills = [
    {
        website: 'https://laravel.com/',
        icon: LaravelIcon,
        title: 'Laravel',
    },
    {
        website: 'https://www.php.net/',
        icon: PhpIcon,
        title: 'PHP',
    },
    {
        website: 'https://www.mysql.com/',
        icon: MysqlIcon,
        title: 'MySQL',
    },
    {
        website: 'http://firebase.google.com/',
        icon: FirebaseIcon,
        title: 'Firebase',
    },
    {
        website: 'https://cplusplus.com/',
        icon: FilamentIcon,
        title: 'Laravel Filament',
    },
    {
        website: 'https://cplusplus.com/',
        icon: NovaIcon,
        title: 'Laravel Nova',
    },
]

// Tools & Technologies
const toolsSkills = [
    {
        website: 'https://inertiajs.com/',
        icon: InertiajsIcon,
        title: 'Inertia.js',
    },
    {
        website: 'https://www.figma.com/',
        icon: FigmaIcon,
        title: 'Figma',
    },
    {
        website: 'https://git-scm.com/',
        icon: GitIcon,
        title: 'Git',
    },
]
</script>

<template>
    <section class="flex w-full h-full mb-20 px-5" id="skills">
        <div class="relative w-full max-w-7xl py-16">
            <!-- Background Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute top-20 right-20 w-72 h-72 bg-mint/5 dark:bg-accent/5 rounded-full blur-3xl"
                ></div>
                <div
                    class="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 dark:bg-secondary/5 rounded-full blur-3xl"
                ></div>
            </div>

            <div class="relative flex flex-col gap-12">
                <!-- Header -->
                <div class="text-center space-y-4">
                    <h2
                        class="text-primary dark:text-secondary text-2xl md:text-5xl font-semibold inline-flex flex-col items-center"
                    >
                        Technology <span class="text-mint dark:text-accent mt-2">Stack</span>
                    </h2>
                </div>

                <!-- Skills Grid -->
                <div class="grid gap-8">
                    <!-- Frontend -->
                    <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                        <h3 class="text-xl text-mint dark:text-accent font-medium">Frontend Development</h3>
                        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <SkillSet
                                v-for="skill in frontendSkills"
                                :key="skill.title"
                                v-bind="skill"
                                data-aos="zoom-in"
                                :data-aos-delay="100"
                            />
                        </div>
                    </div>

                    <!-- Backend -->
                    <div
                        class="space-y-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <h3 class="text-xl text-mint dark:text-accent font-medium">Backend Development</h3>
                        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <SkillSet
                                v-for="skill in backendSkills"
                                :key="skill.title"
                                v-bind="skill"
                                data-aos="zoom-in"
                                :data-aos-delay="100"
                            />
                        </div>
                    </div>

                    <!-- Tools & Others -->
                    <div
                        class="space-y-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <h3 class="text-xl text-mint dark:text-accent font-medium">Tools & Technologies</h3>
                        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <SkillSet
                                v-for="skill in toolsSkills"
                                :key="skill.title"
                                v-bind="skill"
                                data-aos="zoom-in"
                                :data-aos-delay="100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
