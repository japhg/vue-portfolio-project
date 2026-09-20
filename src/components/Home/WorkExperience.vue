<script setup lang="ts">
import LinkIcon from '../icons/LinkIcon.vue'
import experiences from '@/data/experiences.json'
</script>
<template>
    <section class="section-shell px-5 py-20 md:py-28" id="work-experience">
        <div class="mx-auto w-full max-w-6xl">
            <div class="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
                <div class="lg:sticky lg:top-28 h-fit">
                    <h2
                        class="text-primary dark:text-secondary text-3xl md:text-5xl leading-tight font-semibold"
                    >
                        Work <span class="premium-gradient-text">Experience</span>
                    </h2>
                    <p class="mt-4 text-secondary/80 dark:text-muted leading-7">
                        Recent roles and client work across full-stack product development.
                    </p>
                </div>

                <div class="relative flex flex-col gap-6">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-secondary/20 dark:bg-accent/20"
                    />

                    <div
                        v-for="(experience, index) in experiences"
                        :key="index"
                        class="relative pl-7"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <!-- Timeline dot -->
                        <div
                            class="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background dark:bg-secondary"
                        />

                        <!-- Content card -->
                        <div
                            class="glass-panel motion-surface rounded-[1.5rem] p-6"
                        >
                            <div class="flex items-start gap-4 mb-4">
                                <div class="flex-1">
                                    <a
                                        v-if="experience.url"
                                        :href="experience.url"
                                        target="_blank"
                                        class="group motion-link inline-flex items-center gap-2 text-primary dark:text-secondary transition-colors duration-300"
                                    >
                                        <h2 class="text-xl font-bold">
                                            {{ experience.title }}
                                        </h2>
                                        <LinkIcon
                                            class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </a>
                                    <h3 v-else class="text-xl font-bold text-primary">
                                        {{ experience.title }}
                                    </h3>
                                    <div class="mt-1">
                                        <h4
                                            class="text-base font-medium text-secondary/80 dark:text-muted"
                                        >
                                            {{ experience.subtitle }}
                                        </h4>
                                        <p class="text-sm font-medium text-primary/70 dark:text-secondary/70 mt-1">
                                            {{ experience.date }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div
                                    v-for="(desc, descIndex) in experience.description"
                                    :key="descIndex"
                                    class="prose prose-invert text-sm leading-7 text-secondary/80 dark:text-muted max-w-none"
                                    v-html="desc"
                                />
                            </div>

                            <div v-if="experience.techStack" class="mt-4 flex flex-wrap gap-2">
                                <span
                                    v-for="tech in experience.techStack"
                                    :key="tech"
                                    class="motion-pill px-2 py-1 text-xs rounded-full bg-primary/5 text-primary dark:bg-secondary/10 dark:text-secondary"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
