<script setup lang="ts">
import projects from '@/data/projects.json'
import { computed, ref } from 'vue'

const githubUrl = 'https://github.com/japhg'

const categories = [
    { label: 'All systems', value: 'all' },
    { label: 'Laravel', value: 'laravel' },
    { label: 'Vue', value: 'vue' },
    { label: 'PHP', value: 'php' },
    { label: 'Business tools', value: 'business' },
]

const activeCategory = ref('all')

const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') {
        return projects
    }

    return projects.filter((project) => {
        const searchable = [project.title, project.description, ...project.techStack]
            .join(' ')
            .toLowerCase()

        if (activeCategory.value === 'business') {
            return /business|management|portal|system|training|clinic|resource/.test(searchable)
        }

        return searchable.includes(activeCategory.value)
    })
})
</script>

<template>
    <section class="section-shell px-5 py-20 md:py-28" id="project">
        <div class="mx-auto w-full max-w-7xl">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <h1
                        class="text-primary dark:text-secondary text-3xl md:text-5xl leading-tight font-semibold"
                    >
                        My <span class="premium-gradient-text">Projects</span>
                    </h1>
                    <p class="max-w-xl text-secondary/80 dark:text-muted leading-7">
                        Selected systems and product work, spanning client portals, internal tools,
                        and operational platforms.
                    </p>
                </div>

                <div class="mb-2 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
                    <button
                        v-for="category in categories"
                        :key="category.value"
                        type="button"
                        class="motion-pill rounded-full border px-4 py-2 text-sm font-semibold"
                        :class="
                            activeCategory === category.value
                                ? 'border-mint/40 bg-mint/10 text-mint'
                                : 'border-secondary/10 bg-surface/60 text-secondary hover:text-primary'
                        "
                        :aria-pressed="activeCategory === category.value"
                        @click="activeCategory = category.value"
                    >
                        {{ category.label }}
                    </button>
                </div>

                <TransitionGroup
                    name="project-list"
                    tag="div"
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    <div
                        v-for="(project, index) in filteredProjects"
                        :key="project.title"
                        class="glass-panel magnetic-card motion-surface group flex min-h-[360px] flex-col overflow-hidden rounded-[1.5rem]"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="project-photo-wrap border-b border-secondary/10 bg-background/40 p-4">
                            <div class="project-tape" aria-hidden="true"></div>
                            <a :href="project.url" target="_blank" class="project-photo block overflow-hidden">
                                <img
                                    :src="project.img"
                                    :alt="`${project.title} project preview`"
                                    class="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </a>
                        </div>

                        <div class="p-6 flex flex-1 flex-col gap-4">
                            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
                                Case study {{ String(index + 1).padStart(2, '0') }}
                            </p>
                            <a :href="project.url" target="_blank">
                                <h2
                                    class="motion-link text-2xl font-semibold text-primary dark:text-secondary leading-tight"
                                >
                                    {{ project.title }}
                                </h2>
                            </a>
                            <p class="text-sm leading-7 text-secondary/80 dark:text-muted">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mt-auto pt-2">
                                <span
                                    v-for="(tech, techIndex) in project.techStack"
                                    :key="techIndex"
                                    class="motion-pill px-3 py-1 text-xs rounded-full bg-primary/5 text-primary dark:bg-secondary/10 dark:text-secondary"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3 p-5 pt-0">
                            <a
                                :href="project.url"
                                target="_blank"
                                class="motion-pill inline-block rounded-full border border-mint/40 bg-mint/10 px-5 py-3 text-center font-semibold text-mint hover:bg-mint hover:text-background"
                            >
                                Live demo
                            </a>
                            <a
                                :href="githubUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="motion-pill inline-block rounded-full border border-secondary/10 px-5 py-3 text-center font-semibold text-primary hover:bg-primary hover:text-surface dark:text-secondary dark:hover:bg-secondary dark:hover:text-background"
                                :aria-label="`View GitHub profile for ${project.title}`"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </section>
</template>
