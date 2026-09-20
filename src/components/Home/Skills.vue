<script setup lang="ts">
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

const floatingSkills = [
    {
        website: 'https://laravel.com/',
        icon: LaravelIcon,
        title: 'Laravel',
        left: '8%',
        top: '18%',
        size: '74px',
        delay: '0s',
    },
    {
        website: 'https://vuejs.org/',
        icon: VueIcon,
        title: 'Vue.js',
        left: '32%',
        top: '10%',
        size: '72px',
        delay: '0.8s',
    },
    {
        website: 'https://www.php.net/',
        icon: PhpIcon,
        title: 'PHP',
        left: '70%',
        top: '12%',
        size: '76px',
        delay: '1.6s',
    },
    {
        website: 'https://tailwindcss.com/',
        icon: TailwindIcon,
        title: 'Tailwind CSS',
        left: '89%',
        top: '36%',
        size: '68px',
        delay: '0.4s',
    },
    {
        website: 'https://inertiajs.com/',
        icon: InertiajsIcon,
        title: 'Inertia.js',
        left: '13%',
        top: '54%',
        size: '66px',
        delay: '1.2s',
    },
    {
        website: 'https://www.mysql.com/',
        icon: MysqlIcon,
        title: 'MySQL',
        left: '58%',
        top: '86%',
        size: '68px',
        delay: '2s',
    },
    {
        website: 'https://filamentphp.com/',
        icon: FilamentIcon,
        title: 'Filament',
        left: '80%',
        top: '76%',
        size: '70px',
        delay: '2.4s',
    },
    {
        website: 'https://git-scm.com/',
        icon: GitIcon,
        title: 'Git',
        left: '6%',
        top: '80%',
        size: '64px',
        delay: '1.8s',
    },
    {
        website: 'https://nuxt.com/',
        icon: NuxtIcon,
        title: 'Nuxt',
        left: '43%',
        top: '88%',
        size: '64px',
        delay: '0.6s',
    },
    {
        website: 'https://firebase.google.com/',
        icon: FirebaseIcon,
        title: 'Firebase',
        left: '90%',
        top: '8%',
        size: '60px',
        delay: '2.8s',
    },
    {
        website: 'https://getbootstrap.com/',
        icon: BootstrapIcon,
        title: 'Bootstrap',
        left: '25%',
        top: '86%',
        size: '58px',
        delay: '3.2s',
    },
    {
        website: 'https://www.figma.com/',
        icon: FigmaIcon,
        title: 'Figma',
        left: '4%',
        top: '40%',
        size: '58px',
        delay: '2.2s',
    },
    {
        website: 'https://nova.laravel.com/',
        icon: NovaIcon,
        title: 'Laravel Nova',
        left: '82%',
        top: '54%',
        size: '60px',
        delay: '1.4s',
    },
]

const expertiseHighlights = [
    'Laravel',
    'PHP',
    'Vue.js',
    'Inertia.js',
    'Tailwind CSS',
    'MySQL',
    'Filament',
    'Git',
    'REST APIs',
    'Full Stack Development',
]
</script>

<template>
    <section class="section-shell px-5 py-20 md:py-28" id="skills">
        <div class="relative mx-auto w-full max-w-7xl">
            <div class="relative flex flex-col gap-12">
                <div
                    class="tech-orbit relative min-h-[700px] overflow-hidden rounded-[2rem] border border-secondary/10 bg-background/30 px-4 py-16 md:min-h-[780px] md:px-10"
                >
                    <div
                        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--color-mint)/0.14),transparent_36%),radial-gradient(circle_at_70%_35%,rgb(var(--color-accent)/0.12),transparent_28%)]"
                    />

                    <a
                        v-for="skill in floatingSkills"
                        :key="skill.title"
                        :href="skill.website"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="floating-tech-card group"
                        :style="{
                            left: skill.left,
                            top: skill.top,
                            width: skill.size,
                            height: skill.size,
                            animationDelay: skill.delay,
                        }"
                        :aria-label="skill.title"
                    >
                        <component
                            :is="skill.icon"
                            class="h-[58%] w-[58%] transition-transform duration-300 group-hover:scale-110"
                        />
                        <span
                            class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-background/80 px-3 py-1 text-xs font-semibold text-secondary opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:-bottom-10 group-hover:opacity-100"
                        >
                            {{ skill.title }}
                        </span>
                    </a>

                    <div
                        class="tech-center relative z-30 mx-auto flex min-h-[540px] max-w-3xl flex-col items-center justify-center rounded-[2rem] bg-background/20 px-5 text-center backdrop-blur-[2px]"
                    >
                        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-mint">
                            Technology stack
                        </p>
                    <h2
                            class="text-primary dark:text-secondary text-4xl font-semibold leading-tight md:text-6xl"
                    >
                            Modern tools for
                            <span class="premium-gradient-text block">production systems.</span>
                    </h2>
                        <p class="mt-5 max-w-xl text-base leading-8 text-secondary/80 dark:text-muted md:text-lg">
                        Tools I use to turn product requirements into reliable web applications,
                        from Laravel backends to polished Vue interfaces.
                    </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-2">
                            <span
                                v-for="skill in expertiseHighlights"
                                :key="skill"
                                class="motion-pill rounded-full border border-secondary/10 bg-surface/70 px-3 py-1.5 text-xs font-semibold text-secondary backdrop-blur"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    <div
                        v-for="(skill, index) in expertiseHighlights"
                        :key="skill"
                        class="glass-panel motion-surface rounded-2xl p-4"
                        :data-aos-delay="index * 40"
                    >
                        <div class="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-mint to-accent" />
                        <p class="text-sm font-semibold text-primary">{{ skill }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
